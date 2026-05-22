#!/usr/bin/env bun
// gtmstack runner. Books-as-evals via headless Claude Code (claude -p).
// No Anthropic API key required — uses the user's existing Claude Code auth.
//
// Usage:
//   bun run runner.ts run <book> <case>           Single-book run
//   bun run runner.ts list-books                  List available books
//   bun run runner.ts list-cases <book>           List cases for a book
//   bun run runner.ts synthesize <case>           Multi-book synthesis on a case
//   bun run runner.ts version                     Print version

import {
  readFileSync,
  writeFileSync,
  appendFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { homedir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const VERSION = "0.2.0";

const BOOKS_DIR = join(__dirname, "books");
const RUNS_DIR = join(__dirname, "runs");
const DELIVERABLES_DIR = join(__dirname, "deliverables");

// ---------- Telemetry (local-only events log) ----------
// Persists structured events to ~/.gtmstack/events.jsonl so the user can
// introspect their gtmstack usage (run counts, completion rates, durations).
// No remote transmission. Opt-out via GTMSTACK_TELEMETRY=off env var.
const TELEMETRY_DIR = join(homedir(), ".gtmstack");
const EVENTS_FILE = join(TELEMETRY_DIR, "events.jsonl");

interface TelemetryEvent {
  event: string;
  timestamp: string;
  version: string;
  book?: string;
  case_id?: string;
  outcome?: "pass" | "fail";
  duration_ms?: number;
  cross_judge?: boolean;
  error?: string;
}

function logEvent(e: Omit<TelemetryEvent, "timestamp" | "version">): void {
  if (process.env.GTMSTACK_TELEMETRY === "off") return;
  try {
    if (!existsSync(TELEMETRY_DIR)) mkdirSync(TELEMETRY_DIR, { recursive: true });
    const event: TelemetryEvent = {
      ...e,
      timestamp: new Date().toISOString(),
      version: VERSION,
    };
    appendFileSync(EVENTS_FILE, JSON.stringify(event) + "\n");
  } catch {
    // Telemetry failures must never break the runner. Silent ignore.
  }
}

// ---------- Types ----------

type RubricItem = {
  id: string;
  weight: number;
  section: string;
  test: string;
  fail_modes?: string[];
  partial_credit?: string;
};

type Rubric = {
  rubric_id: string;
  judge_instructions: string;
  items: RubricItem[];
  validation: { pass_threshold: number };
};

type ItemScore = {
  id: string;
  raw_score: number;
  weight: number;
  weighted_score: number;
  reasoning: string;
};

type CrossJudgeData = {
  default_judge_scores: ItemScore[];
  skeptic_judge_scores: ItemScore[];
  default_final_score: number;
  skeptic_final_score: number;
  agreement_rate: number;
  disagreements: { id: string; default: number; skeptic: number }[];
};

type RunReport = {
  book: string;
  case_id: string;
  rubric_id: string;
  analysis_model: string;
  judge_model: string;
  run_mode: string;
  timestamp_iso: string;
  total_weight: number;
  weighted_sum: number;
  final_score: number;
  pass_threshold: number;
  passed: boolean;
  item_scores: ItemScore[];
  analysis_markdown: string;
  duration_ms: number;
  cross_judge?: CrossJudgeData;
};

// ---------- Shell out to claude -p ----------

async function callClaudeP(prompt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = spawn("claude", ["-p", "--print"], {
      stdio: ["pipe", "pipe", "pipe"],
      env: process.env,
    });

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => (stdout += d.toString()));
    child.stderr.on("data", (d) => (stderr += d.toString()));

    child.on("error", (err) => {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") {
        reject(
          new Error(
            "claude CLI not found in PATH. Install Claude Code: https://claude.com/claude-code",
          ),
        );
      } else {
        reject(err);
      }
    });

    child.on("close", (code) => {
      if (code !== 0) {
        reject(
          new Error(
            `claude -p exited with code ${code}. Stderr:\n${stderr.slice(0, 500)}`,
          ),
        );
        return;
      }
      resolve(stdout.trim());
    });

    child.stdin.write(prompt);
    child.stdin.end();
  });
}

// ---------- File loading ----------

function loadBook(book: string) {
  const bookDir = join(BOOKS_DIR, book);
  if (!existsSync(bookDir)) {
    const available = listBooks().join(", ");
    throw new Error(`Book not found: ${book}. Available: ${available}`);
  }
  return {
    framework: readFileSync(join(bookDir, "framework.md"), "utf-8"),
    prompt: readFileSync(join(bookDir, "prompt.md"), "utf-8"),
    rubric: JSON.parse(
      readFileSync(join(bookDir, "rubric.json"), "utf-8"),
    ) as Rubric,
  };
}

function loadCase(book: string, caseId: string) {
  const path = join(BOOKS_DIR, book, "cases", `${caseId}.json`);
  if (!existsSync(path)) {
    const available = listCases(book).join(", ");
    throw new Error(`Case not found: ${caseId} in ${book}. Available: ${available}`);
  }
  return JSON.parse(readFileSync(path, "utf-8"));
}

function listBooks(): string[] {
  if (!existsSync(BOOKS_DIR)) return [];
  return readdirSync(BOOKS_DIR).filter((d) =>
    existsSync(join(BOOKS_DIR, d, "framework.md")),
  );
}

function listCases(book: string): string[] {
  const dir = join(BOOKS_DIR, book, "cases");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.slice(0, -5));
}

// ---------- Analysis phase ----------

const CONTEXT_DIR = join(__dirname, "context");

function loadContextModules(modules: string[] | undefined): string {
  if (!modules || modules.length === 0) return "";
  const parts: string[] = [];
  for (const m of modules) {
    const path = join(CONTEXT_DIR, `${m}.md`);
    if (!existsSync(path)) {
      console.error(`Warning: context module '${m}' not found at ${path}`);
      continue;
    }
    parts.push(`## Cross-cutting context: ${m}\n\n${readFileSync(path, "utf-8").trim()}`);
  }
  if (parts.length === 0) return "";
  return `\n\n# Cross-cutting context modules\n\nReference material relevant to this case. Apply it as background fluency about the operating environment; do not treat it as part of the case inputs.\n\n${parts.join("\n\n---\n\n")}\n`;
}

function buildAnalysisPrompt(
  framework: string,
  promptTemplate: string,
  caseData: any,
): string {
  // Strip ground_truth, notes_for_eval, and context_modules (metadata) from case before sending to analyst.
  const caseInput = {
    id: caseData.id,
    company: caseData.company,
    current_state: caseData.current_state,
    expansion_thesis: caseData.expansion_thesis,
    signals: caseData.signals,
  };

  const contextModules = loadContextModules(caseData.context_modules);

  return `You are a strategic GTM advisor. Apply the framework below to the GTM situation and produce a structured analysis.

CRITICAL CONSTRAINTS:
- Use ONLY the inputs provided below. Do not use memorized facts about the company beyond inputs.
- Do not search the web. Do not look at any files. Do not use any tools.
- Produce ONLY the markdown analysis with the section headers specified by the prompt template. No preamble, no postamble, no commentary outside the analysis itself.

# Framework

${framework}

# Prompt template (required output structure)

${promptTemplate}

# Inputs (JSON)

\`\`\`json
${JSON.stringify(caseInput, null, 2)}
\`\`\`${contextModules}

Produce the markdown analysis now. Section headers exactly as specified by the prompt template. No commentary outside the analysis.`;
}

// ---------- Judge phase ----------

type JudgePosture = "default" | "skeptic";

function buildJudgePrompt(
  rubric: Rubric,
  analysis: string,
  posture: JudgePosture = "default",
): string {
  const itemsForJudge = rubric.items.map((item) => ({
    id: item.id,
    weight: item.weight,
    section: item.section,
    test: item.test,
    fail_modes: item.fail_modes ?? [],
    partial_credit: item.partial_credit ?? null,
  }));

  const skepticPreamble =
    posture === "skeptic"
      ? `\n\n# IMPORTANT: SKEPTIC MODE\nYou are the skeptic judge in a cross-judge configuration. Your job is to find weaknesses the default judge might rationalize past. When in doubt between 1.0 and 0.5, prefer 0.5. When in doubt between 0.5 and 0, prefer 0. Do NOT reward effort or completeness alone — only reward outputs that meet the test as strictly written. If a rubric item lists fail_modes and the analysis exhibits ANY of them, score 0 even if the analysis also engages the test. Be honest about partial coverage.\n`
      : "";

  return `${rubric.judge_instructions}${skepticPreamble}

You will inspect a model's GTM analysis and score it against ${itemsForJudge.length} rubric items.

# Rubric items (JSON)

\`\`\`json
${JSON.stringify(itemsForJudge, null, 2)}
\`\`\`

# Model's analysis (Markdown)

\`\`\`markdown
${analysis}
\`\`\`

# Your task

For each rubric item, score the analysis 1.0 (fully meets test), 0.5 (partial credit per partial_credit guidance), or 0 (fails). Return a JSON array of objects with this shape, in the same order as the rubric items:

\`\`\`json
[
  {
    "id": "<item id>",
    "raw_score": 1.0,
    "reasoning": "<one or two sentences citing specific evidence in the analysis or the specific gap>"
  }
]
\`\`\`

Return ONLY the JSON array. No prose before or after. No markdown code fence. Just the raw JSON.`;
}

function parseJudgeOutput(rubric: Rubric, judgeText: string): ItemScore[] {
  let raw = judgeText.trim();
  if (raw.startsWith("```")) {
    raw = raw.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  let parsed: { id: string; raw_score: number; reasoning: string }[];
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(
      `Judge returned invalid JSON. First 500 chars:\n${raw.slice(0, 500)}`,
    );
  }

  return rubric.items.map((item) => {
    const judgeEntry = parsed.find((p) => p.id === item.id);
    if (!judgeEntry) {
      throw new Error(`Judge did not score item: ${item.id}`);
    }
    const rawScore = clampScore(judgeEntry.raw_score);
    return {
      id: item.id,
      raw_score: rawScore,
      weight: item.weight,
      weighted_score: rawScore * item.weight,
      reasoning: judgeEntry.reasoning,
    };
  });
}

function clampScore(s: number): number {
  if (s >= 0.9) return 1.0;
  if (s >= 0.4) return 0.5;
  return 0;
}

// ---------- Report ----------

function buildReport(
  book: string,
  caseId: string,
  rubric: Rubric,
  analysis: string,
  itemScores: ItemScore[],
  durationMs: number,
): RunReport {
  const totalWeight = rubric.items.reduce((s, i) => s + i.weight, 0);
  const weightedSum = itemScores.reduce((s, x) => s + x.weighted_score, 0);
  const finalScore = weightedSum / totalWeight;

  return {
    book,
    case_id: caseId,
    rubric_id: rubric.rubric_id,
    analysis_model: "claude-headless (claude -p)",
    judge_model: "claude-headless (claude -p, default posture)",
    run_mode: "cli_headless",
    timestamp_iso: new Date().toISOString(),
    total_weight: totalWeight,
    weighted_sum: weightedSum,
    final_score: finalScore,
    pass_threshold: rubric.validation.pass_threshold,
    passed: finalScore >= rubric.validation.pass_threshold,
    item_scores: itemScores,
    analysis_markdown: analysis,
    duration_ms: durationMs,
  };
}

function persistReport(report: RunReport): string {
  if (!existsSync(RUNS_DIR)) mkdirSync(RUNS_DIR, { recursive: true });
  const ts = report.timestamp_iso.replace(/[:.]/g, "-");
  const filename = `${ts}-cli-${report.book}-${report.case_id}.json`;
  const path = join(RUNS_DIR, filename);
  writeFileSync(path, JSON.stringify(report, null, 2));
  return path;
}

function printReport(report: RunReport) {
  const verdict = report.passed ? "PASS" : "FAIL";
  const pct = (report.final_score * 100).toFixed(1);
  const passPct = (report.pass_threshold * 100).toFixed(0);

  console.log("");
  console.log("═".repeat(72));
  console.log(`  ${report.book} / ${report.case_id}  —  ${verdict}`);
  console.log(
    `  Score: ${report.weighted_sum.toFixed(2)} / ${report.total_weight.toFixed(2)} = ${pct}%   (threshold ${passPct}%)`,
  );
  console.log(`  Duration: ${(report.duration_ms / 1000).toFixed(1)}s`);
  console.log("═".repeat(72));
  console.log("");

  for (const s of report.item_scores) {
    const icon = s.raw_score === 1 ? "✓" : s.raw_score === 0.5 ? "~" : "✗";
    console.log(
      `  ${icon}  [${s.raw_score.toFixed(1)} × ${s.weight.toFixed(1)} = ${s.weighted_score.toFixed(2)}]  ${s.id}`,
    );
    console.log(`        ${s.reasoning}`);
    console.log("");
  }
}

// ---------- Commands ----------

function computeAgreement(
  defaultScores: ItemScore[],
  skepticScores: ItemScore[],
): { agreement_rate: number; disagreements: { id: string; default: number; skeptic: number }[] } {
  const disagreements: { id: string; default: number; skeptic: number }[] = [];
  let agreed = 0;
  for (const ds of defaultScores) {
    const ss = skepticScores.find((s) => s.id === ds.id);
    if (!ss) continue;
    if (Math.abs(ds.raw_score - ss.raw_score) < 0.01) {
      agreed++;
    } else {
      disagreements.push({
        id: ds.id,
        default: ds.raw_score,
        skeptic: ss.raw_score,
      });
    }
  }
  return {
    agreement_rate: agreed / defaultScores.length,
    disagreements,
  };
}

async function cmdRun(
  book: string,
  caseId: string,
  opts: { quiet?: boolean; crossJudge?: boolean } = {},
) {
  const start = Date.now();
  logEvent({ event: "run_started", book, case_id: caseId, cross_judge: opts.crossJudge ?? false });
  const { framework, prompt, rubric } = loadBook(book);
  const caseData = loadCase(book, caseId);

  if (!opts.quiet) console.error(`Running analysis (${book} / ${caseId})...`);
  const analysisPrompt = buildAnalysisPrompt(framework, prompt, caseData);
  const analysis = await callClaudeP(analysisPrompt);

  if (!opts.quiet) console.error(`Running judge (default posture)...`);
  const judgePrompt = buildJudgePrompt(rubric, analysis, "default");
  const judgeOutput = await callClaudeP(judgePrompt);
  const itemScores = parseJudgeOutput(rubric, judgeOutput);

  let crossJudge: CrossJudgeData | undefined;
  if (opts.crossJudge) {
    if (!opts.quiet) console.error(`Running judge (skeptic posture for cross-judge)...`);
    const skepticPrompt = buildJudgePrompt(rubric, analysis, "skeptic");
    const skepticOutput = await callClaudeP(skepticPrompt);
    const skepticScores = parseJudgeOutput(rubric, skepticOutput);

    const totalWeight = rubric.items.reduce((s, i) => s + i.weight, 0);
    const defaultSum = itemScores.reduce((s, x) => s + x.weighted_score, 0);
    const skepticSum = skepticScores.reduce((s, x) => s + x.weighted_score, 0);
    const { agreement_rate, disagreements } = computeAgreement(itemScores, skepticScores);

    crossJudge = {
      default_judge_scores: itemScores,
      skeptic_judge_scores: skepticScores,
      default_final_score: defaultSum / totalWeight,
      skeptic_final_score: skepticSum / totalWeight,
      agreement_rate,
      disagreements,
    };
  }

  const durationMs = Date.now() - start;
  const report = buildReport(book, caseId, rubric, analysis, itemScores, durationMs);
  if (crossJudge) report.cross_judge = crossJudge;
  const path = persistReport(report);
  logEvent({
    event: "run_completed",
    book,
    case_id: caseId,
    outcome: report.passed ? "pass" : "fail",
    duration_ms: durationMs,
    cross_judge: opts.crossJudge ?? false,
  });

  if (!opts.quiet) {
    printReport(report);
    if (crossJudge) {
      console.log("─".repeat(72));
      console.log("Cross-judge:");
      console.log(
        `  default judge:  ${(crossJudge.default_final_score * 100).toFixed(1)}%`,
      );
      console.log(
        `  skeptic judge:  ${(crossJudge.skeptic_final_score * 100).toFixed(1)}%`,
      );
      console.log(
        `  agreement rate: ${(crossJudge.agreement_rate * 100).toFixed(1)}% (${crossJudge.disagreements.length} disagreements)`,
      );
      if (crossJudge.disagreements.length > 0) {
        console.log("  disagreement items:");
        for (const d of crossJudge.disagreements) {
          console.log(`    ${d.id}: default=${d.default} skeptic=${d.skeptic}`);
        }
      }
      console.log("");
    }
    console.log(`Full report: ${path}`);
  }

  return report;
}

async function cmdSynthesize(caseId: string, opts: { crossJudge?: boolean } = {}) {
  const synthStart = Date.now();
  logEvent({ event: "synthesize_started", case_id: caseId, cross_judge: opts.crossJudge ?? false });
  const books = listBooks();
  const booksWithCase = books.filter((b) =>
    existsSync(join(BOOKS_DIR, b, "cases", `${caseId}.json`)),
  );

  if (booksWithCase.length === 0) {
    logEvent({ event: "synthesize_failed", case_id: caseId, error: "no_books_with_case" });
    throw new Error(
      `No books contain case '${caseId}'. Add the case to a book's cases/ directory first.`,
    );
  }

  console.error(
    `Synthesizing across ${booksWithCase.length} books: ${booksWithCase.join(", ")}` +
      (opts.crossJudge ? " (cross-judge mode)" : ""),
  );

  const reports: RunReport[] = [];
  for (const book of booksWithCase) {
    console.error(`\n[${book}]`);
    const report = await cmdRun(book, caseId, { quiet: true, crossJudge: opts.crossJudge });
    const pct = (report.final_score * 100).toFixed(1);
    const verdict = report.passed ? "PASS" : "FAIL";
    console.error(`  → ${verdict} ${pct}%`);
    reports.push(report);
  }

  const allPassed = reports.every((r) => r.passed);
  logEvent({
    event: "synthesize_completed",
    case_id: caseId,
    outcome: allPassed ? "pass" : "fail",
    duration_ms: Date.now() - synthStart,
    cross_judge: opts.crossJudge ?? false,
  });

  console.log("");
  console.log("═".repeat(72));
  console.log(`  Synthesis: ${caseId}`);
  console.log("═".repeat(72));
  console.log("");
  for (const r of reports) {
    const pct = (r.final_score * 100).toFixed(1);
    const verdict = r.passed ? "PASS" : "FAIL";
    console.log(`  ${r.book.padEnd(28)}  ${verdict}  ${pct}%`);
  }
  console.log("");
  console.log(
    "Per-book run reports persisted to evals/runs/. To compose a deliverable,",
  );
  console.log(
    "open the reports and write a synthesis at evals/deliverables/${case}-multi-book-synthesis.md",
  );
}

function cmdListBooks() {
  const books = listBooks();
  if (books.length === 0) {
    console.log("No books installed.");
    return;
  }
  console.log("Books:");
  for (const b of books) {
    const cases = listCases(b);
    console.log(`  ${b.padEnd(28)}  (${cases.length} cases)`);
  }
}

function cmdNewCase(initialId: string | undefined) {
  const id = (initialId || prompt("Case ID (slug, e.g., comp-2026):") || "").trim();
  if (!/^[a-z0-9][a-z0-9-]*$/.test(id)) {
    throw new Error(
      "Invalid case ID. Use lowercase letters, digits, hyphens (e.g., comp-2026).",
    );
  }

  const books = listBooks();
  if (books.length === 0) throw new Error("No books installed.");
  const collisions = books.filter((b) => existsSync(join(BOOKS_DIR, b, "cases", `${id}.json`)));
  if (collisions.length > 0) {
    throw new Error(
      `Case '${id}' already exists in: ${collisions.join(", ")}. Choose a different ID or delete the existing files first.`,
    );
  }

  const companyName = (prompt("Company name:") || "").trim() || "TODO: company name";
  const companyDesc =
    (prompt("One-line company description:") || "").trim() || "TODO: one-line description";

  const caseTypeOptions = ["blind_historical", "blind", "blind_simulation", "self_diagnostic"];
  console.log("\nCase types:");
  for (let i = 0; i < caseTypeOptions.length; i++) {
    console.log(`  ${i + 1}. ${caseTypeOptions[i]}`);
  }
  const caseTypeRaw = (prompt("\nCase type (1-4) [1]:") || "1").trim();
  const caseTypeIdx = Math.max(1, Math.min(4, parseInt(caseTypeRaw) || 1)) - 1;
  const caseType = caseTypeOptions[caseTypeIdx];

  const useBraContext = (prompt("Add brazilian-gtm context module? (y/n) [n]:") || "n")
    .trim()
    .toLowerCase()
    .startsWith("y");

  const template: any = {
    id,
    case_type: caseType,
    case_type_note: "TODO: explain framing of this case (why now, what each book should focus on)",
    company: { name: companyName, description: companyDesc },
    current_state: {
      revenue_arr_usd: "TODO: revenue or 'Not publicly disclosed'",
      customers_count_approx: "TODO: customer count + concentration",
      customer_profile: "TODO: detailed customer profile",
      sales_motion: "TODO: PLG / outbound / hybrid / etc.",
      industries: ["TODO: industry"],
      geography_primary: "TODO: geographic concentration",
    },
    expansion_thesis: "TODO: what the company is trying to do next",
    signals: [
      "TODO: signal 1 — replace with qualitative observation about the company",
      "TODO: signal 2",
      "TODO: signal 3",
      "TODO: signal 4",
      "TODO: signal 5",
    ],
    notes_for_eval: "TODO: framing notes (what should each book chew on, what's the convergence target)",
  };
  if (useBraContext) template.context_modules = ["brazilian-gtm"];

  const path = join(BOOKS_DIR, "crossing-the-chasm", "cases", `${id}.json`);
  writeFileSync(path, JSON.stringify(template, null, 2) + "\n");

  console.log(`\n✓ Scaffolded ${path}`);
  console.log("\nNext steps:");
  console.log(`  1. Edit the file and fill in the TODOs (signals, current_state, etc.)`);
  console.log(`  2. Run 'gtmstack sync-cases ${id}' to mirror to all other books`);
  console.log(`  3. Run 'gtmstack synthesize ${id}' to produce the multi-book diagnosis`);
}

function cmdSyncCases(caseId: string) {
  const sourcePath = join(BOOKS_DIR, "crossing-the-chasm", "cases", `${caseId}.json`);
  if (!existsSync(sourcePath)) {
    throw new Error(
      `Source case not found: ${sourcePath}. Author the case in chasm first via 'gtmstack new-case ${caseId}'.`,
    );
  }
  const sourceContent = readFileSync(sourcePath, "utf-8");
  const targetBooks = listBooks().filter((b) => b !== "crossing-the-chasm");
  const copied: string[] = [];
  const skipped: string[] = [];
  for (const book of targetBooks) {
    const destPath = join(BOOKS_DIR, book, "cases", `${caseId}.json`);
    if (existsSync(destPath) && readFileSync(destPath, "utf-8") === sourceContent) {
      skipped.push(book);
      continue;
    }
    writeFileSync(destPath, sourceContent);
    copied.push(book);
  }
  console.log(`Synced '${caseId}' from crossing-the-chasm:`);
  if (copied.length > 0) console.log(`  copied:   ${copied.join(", ")}`);
  if (skipped.length > 0) console.log(`  skipped:  ${skipped.join(", ")} (already identical)`);
  if (copied.length === 0 && skipped.length === 0) console.log("  no other books with cases/ directory");
}

function cmdStats() {
  if (!existsSync(EVENTS_FILE)) {
    console.log("No telemetry events recorded yet.");
    console.log(`Events will be written to ${EVENTS_FILE} when you run gtmstack commands.`);
    console.log("Run 'gtmstack telemetry' for opt-out instructions.");
    return;
  }
  const lines = readFileSync(EVENTS_FILE, "utf-8")
    .trim()
    .split("\n")
    .filter((l) => l.length > 0);
  const events: TelemetryEvent[] = lines.map((l) => JSON.parse(l));

  const total = events.length;
  const runStarted = events.filter((e) => e.event === "run_started").length;
  const runCompleted = events.filter((e) => e.event === "run_completed").length;
  const runPassed = events.filter(
    (e) => e.event === "run_completed" && e.outcome === "pass",
  ).length;
  const synthStarted = events.filter((e) => e.event === "synthesize_started").length;
  const synthCompleted = events.filter((e) => e.event === "synthesize_completed").length;

  const runsByBook = events
    .filter((e) => e.event === "run_completed")
    .reduce<Record<string, number>>((acc, e) => {
      const k = e.book ?? "unknown";
      acc[k] = (acc[k] ?? 0) + 1;
      return acc;
    }, {});

  const completionRate = runStarted > 0 ? ((runCompleted / runStarted) * 100).toFixed(1) : "n/a";
  const passRate = runCompleted > 0 ? ((runPassed / runCompleted) * 100).toFixed(1) : "n/a";
  const synthCompletionRate =
    synthStarted > 0 ? ((synthCompleted / synthStarted) * 100).toFixed(1) : "n/a";

  console.log("gtmstack stats (from local events log)");
  console.log("─".repeat(50));
  console.log(`Total events recorded:        ${total}`);
  console.log("");
  console.log(`Book runs started:            ${runStarted}`);
  console.log(`Book runs completed:          ${runCompleted}  (${completionRate}%)`);
  console.log(`Book runs passing rubric:     ${runPassed}  (${passRate}% of completed)`);
  console.log("");
  console.log(`Synthesize commands started:  ${synthStarted}`);
  console.log(`Synthesize commands completed:${synthCompleted}  (${synthCompletionRate}%)`);
  console.log("");
  if (Object.keys(runsByBook).length > 0) {
    console.log("Runs by book:");
    for (const [book, count] of Object.entries(runsByBook).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${book.padEnd(28)}  ${count}`);
    }
  }
  console.log("");
  console.log(`Events file: ${EVENTS_FILE}`);
}

function cmdTelemetry() {
  console.log("gtmstack telemetry");
  console.log("─".repeat(50));
  console.log(`Events file:   ${EVENTS_FILE}`);
  const enabled = process.env.GTMSTACK_TELEMETRY !== "off";
  console.log(`Status:        ${enabled ? "enabled (default)" : "disabled (GTMSTACK_TELEMETRY=off)"}`);
  console.log("");
  console.log("What is logged:");
  console.log("  - Event type, ISO 8601 timestamp, gtmstack version");
  console.log("  - Book name and case ID for run / synthesize commands");
  console.log("  - Pass/fail outcome and duration_ms for completed runs");
  console.log("  - Cross-judge flag");
  console.log("");
  console.log("What is NOT logged:");
  console.log("  - Case content, signal text, deliverable content, analysis text");
  console.log("  - Anything personally identifying");
  console.log("");
  console.log("Where it goes: nowhere. The events file is local-only.");
  console.log("gtmstack does not transmit telemetry to any server.");
  console.log("");
  console.log("To disable: export GTMSTACK_TELEMETRY=off");
  console.log("To inspect: cat ~/.gtmstack/events.jsonl | jq");
  console.log("To summarize: gtmstack stats");
  console.log("To wipe: rm ~/.gtmstack/events.jsonl");
}

function cmdListCases(book: string) {
  const cases = listCases(book);
  if (cases.length === 0) {
    console.log(`No cases for book '${book}'.`);
    return;
  }
  console.log(`Cases for ${book}:`);
  for (const c of cases) {
    console.log(`  ${c}`);
  }
}

function cmdHelp() {
  console.log(`gtmstack ${VERSION} — books-as-evals for GTM specialists

Usage:
  gtmstack run <book> <case> [--cross-judge]    Run a single book's analysis on a case
  gtmstack synthesize <case> [--cross-judge]    Run all books that have the case, summarize
  gtmstack list-books                           List installed books
  gtmstack list-cases <book>                    List cases for a book
  gtmstack new-case [<id>]                      Scaffold a new case file with TODOs (interactive)
  gtmstack sync-cases <case>                    Copy a case from chasm to all other books
  gtmstack stats                                Summarize local events log (run counts, completion rate)
  gtmstack telemetry                            Show telemetry status + opt-out instructions
  gtmstack version                              Print version
  gtmstack help                                 Show this help

Flags:
  --cross-judge    Run two judges (default + skeptic posture) and report
                   agreement rate and disagreement items. Reduces self-grading
                   bias; surfaces rubric items where strict and lenient judges
                   diverge. Adds one extra claude -p call per analysis.

Examples:
  gtmstack run crossing-the-chasm slack-2014
  gtmstack synthesize cursor-2026
  gtmstack list-cases obviously-awesome

Runs use headless Claude Code (claude -p). Requires claude CLI installed
and authenticated. No Anthropic API key required.
`);
}

// ---------- Main ----------

function parseFlags(args: string[]): { positional: string[]; crossJudge: boolean } {
  const positional: string[] = [];
  let crossJudge = false;
  for (const a of args) {
    if (a === "--cross-judge") {
      crossJudge = true;
    } else {
      positional.push(a);
    }
  }
  return { positional, crossJudge };
}

async function main() {
  const [cmd, ...rawArgs] = process.argv.slice(2);
  const { positional: args, crossJudge } = parseFlags(rawArgs);

  try {
    switch (cmd) {
      case "run":
        if (args.length < 2) throw new Error("Usage: gtmstack run <book> <case> [--cross-judge]");
        await cmdRun(args[0], args[1], { crossJudge });
        break;
      case "synthesize":
        if (args.length < 1) throw new Error("Usage: gtmstack synthesize <case> [--cross-judge]");
        await cmdSynthesize(args[0], { crossJudge });
        break;
      case "list-books":
        cmdListBooks();
        break;
      case "list-cases":
        if (args.length < 1) throw new Error("Usage: gtmstack list-cases <book>");
        cmdListCases(args[0]);
        break;
      case "new-case":
        cmdNewCase(args[0]);
        break;
      case "sync-cases":
        if (args.length < 1) throw new Error("Usage: gtmstack sync-cases <case>");
        cmdSyncCases(args[0]);
        break;
      case "stats":
        cmdStats();
        break;
      case "telemetry":
        cmdTelemetry();
        break;
      case "version":
      case "--version":
      case "-v":
        console.log(VERSION);
        break;
      case "help":
      case "--help":
      case "-h":
      case undefined:
        cmdHelp();
        break;
      default:
        console.error(`Unknown command: ${cmd}`);
        cmdHelp();
        process.exit(1);
    }
  } catch (err: any) {
    console.error(`ERROR: ${err.message}`);
    process.exit(1);
  }
}

main();
