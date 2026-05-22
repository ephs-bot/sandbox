# gtmstack

**Five canonical GTM books — Crossing the Chasm, Obviously Awesome,
Predictable Revenue, Play Bigger, The Mom Test — encoded as runnable
evals.** You bring a real GTM situation; each book produces a structured
analysis; a multi-book synthesis surfaces what the frameworks converge on
(high-confidence calls) and where they diverge (the strategic questions
you still have to answer). ~25 minutes from first prompt to deliverable.
Free. No API key required.

[See a sample synthesis](#see-a-sample-synthesis-30-seconds) ·
[Walkthrough](#walkthrough-what-it-feels-like-to-use) ·
[Install](#install-one-time) ·
[Vote for the next book](#nominate-the-next-book)

> Inspired by [gstack](https://github.com/garrytan/gstack) — Garry Tan's
> Claude command pack for builders. gtmstack is the same shape, for GTM
> specialists. Patterns extracted, infrastructure rebuilt clean.

## What it is

Each canonical GTM book is encoded as:
- A framework summary in plain language (own words, cited)
- An eval prompt template defining structured output
- A rubric that scores rigor of framework application (not framework agreement)
- A growing set of historical and current cases

You feed the analyst a GTM situation. Each book produces a structured
analysis (TALC stage, beachhead, whole product gap, positioning statement,
ICP diagnosis, outbound recommendation, etc.). A separate judge applies
the rubric and produces a weighted score against a 0.75 pass threshold.

When you run multiple books on the same case, the synthesis is where the
value compounds: convergent diagnoses across frameworks are the highest-
confidence signal in the analysis. When five independent lenses agree on
a buyer, that buyer is real.

## See a sample synthesis (30 seconds)

The repo ships with worked-example synthesis deliverables. Open any of
them in your browser to see what gtmstack actually produces — before you
install anything:

- **[cursor-2026](evals/deliverables/cursor-2026-multi-book-synthesis.md)** —
  Cursor (AI code editor, 2026), contested chasm position, public-info inputs.
- **[anthropic-brazil-2026](evals/deliverables/anthropic-brazil-2026-multi-book-synthesis.md)** —
  public-info simulation of Anthropic's LATAM expansion, all five books.
- **[gtmstack-2026](evals/deliverables/gtmstack-2026-multi-book-synthesis.md)** —
  gtmstack diagnosing its own GTM (the rare case where the tool itself is
  the case). All five books converge on one prescription.

If a synthesis looks useful, the install path below makes it runnable on
your own GTM situation in under two minutes. If you've never read a
multi-book synthesis before, the
[reading guide](evals/HOW_TO_READ_SYNTHESIS.md) walks through the
deliverable structure in ~3 minutes.

## Quickstart

```bash
# From the repo root
bin/gtmstack list-books
bin/gtmstack run crossing-the-chasm slack-2014
bin/gtmstack synthesize cursor-2026
```

Runs use headless Claude Code (`claude -p`). No Anthropic API key required.
Requires `bun` and `claude` CLI installed.

## Install (one-time)

```bash
# Clone gtmstack
git clone https://github.com/jkkorn/gtmstack.git ~/gtmstack
cd ~/gtmstack

# Symlink the CLI somewhere on your PATH
ln -s "$(pwd)/bin/gtmstack" /usr/local/bin/gtmstack

# Symlink the skill so /gtm-office-hours works in Claude Code
ln -s "$(pwd)/gtm-office-hours" ~/.claude/skills/gtm-office-hours

# Verify
gtmstack list-books
```

## Walkthrough: what it feels like to use

You are a GTM lead. Your company is in the chasm and you don't know which
beachhead to commit to. You open a terminal, navigate to any project, and
run Claude Code:

```
$ claude
```

In the Claude Code conversation, you type:

```
/gtm-office-hours
```

The skill loads. Claude introduces itself in the gtmstack voice — direct,
specific, builder energy, anti-slop:

> *I'm gtmstack. I run four canonical GTM frameworks (Crossing the Chasm,
> Obviously Awesome, Predictable Revenue, Play Bigger) on your real GTM
> situation and produce a multi-book strategic diagnostic. The deliverable
> is a synthesis document — what to do next, sequenced in time, grounded
> in the specific places where the frameworks converge.*
>
> *I'll need ~10 minutes to capture your situation, then ~5 minutes to
> run the books. What's the GTM question you want to think through?*

You describe your situation in your own words. Maybe something like:

> *We're a Series B AI dev tools company doing $40M ARR, ~80% from
> bottom-up adoption at tech-forward startups. Our board wants us to
> "go enterprise." I'm not sure that's the right next move and I want
> to think through it rigorously.*

Claude pushes for specificity. This is where gtmstack earns its keep —
the same reflex YC partners use in office hours, applied to GTM:

> *Two things to sharpen before I run the books:*
>
> *(1) "Tech-forward startups" is a category, not a customer. Can you
> name an actual buyer role? Engineering leaders at Series-B-to-pre-IPO?
> Founders at YC-network companies? Heads of Platform Engineering at
> 500-2000-person dev-tool companies? The tighter the buyer, the
> sharper the diagnostic.*
>
> *(2) "Go enterprise" is the board's framing. What does that actually
> mean to them? Fortune 500 logos? \M+ ACVs? Direct sales motion
> replacing PLG? Each of those is a different strategic question, and
> the books will diagnose them differently.*

You answer with sharper specifics. Claude collects 8-12 signals — the
qualitative observations that ground the diagnostic — by asking
targeted questions:

- *What's your competitive landscape look like? Who shows up in pilots?*
- *What does your sales motion actually look like below \K, K-K,
  K+? Is procurement involved?*
- *What's your whole product missing for the next-tier buyer? SSO?
  SOC 2? Data residency? Specific integrations?*
- *Have any flagship enterprise prospects gone to production, or are
  they all still in pilot?*

When Claude has enough signal, it constructs a case file in JSON,
saves it to `gtmstack-output/cases/`, replicates it across the four
books' `cases/` directories, then runs:

```bash
gtmstack synthesize <your-case-id>
```

You watch four books run, one at a time, ~60-90 seconds each:

```
[crossing-the-chasm]
  → PASS 100.0%

[obviously-awesome]
  → PASS 100.0%

[predictable-revenue]
  → PASS 87.5%

[play-bigger]
  → PASS 100.0%

═══════════════════════════════════════════════════════════════════════
  Synthesis: my-company-2026
═══════════════════════════════════════════════════════════════════════

  crossing-the-chasm            PASS  100.0%
  obviously-awesome             PASS  100.0%
  predictable-revenue           PASS   87.5%
  play-bigger                   PASS  100.0%
```

Claude reads the four run reports and composes the synthesis
deliverable in `gtmstack-output/deliverables/<your-case-id>-multi-book-synthesis.md`.

You read it. The structure is consistent with what you'd get from a
strategy consulting engagement:

- **Executive verdict** (3 sentences — the headline diagnosis)
- **Where the books converge** (the high-confidence findings — same beachhead, same whole-product gap, same wrong-pin-now, same parallel-pursuit warning, named by 2-4 books independently)
- **Where the books diverge** (the strategic questions you need to resolve with your team's actual data)
- **The Q-by-Q plan** (Q2/Q3/Q4 sequenced workstreams; each step names which book(s) prescribe it)
- **Open questions to instrument** (the metrics that would change the diagnostic — build the data infrastructure to answer them)
- **What this diagnostic does NOT tell you** (honest limits)
- **Confidence summary** (calibrated 1-10 across 5-7 dimensions)

The most valuable thing in the synthesis isn't any single book's
finding. It's the *convergence pattern*: when four independent frameworks
arrive at the same beachhead through different reasoning paths, that
beachhead is more reliable than any one framework's solo opinion. Single-
book = one perspective. Multi-book = differential diagnosis.

Take the synthesis to your team. Push back on what's wrong. Update the
case file's signals with what you learn. Re-run.

Total time: ~25 minutes from first prompt to deliverable. Compare to
~3 weeks of strategy consulting at \K-K.

## A real example: Cursor 2026

The repo ships with `cursor-2026` as a public-info case. Run the
synthesis yourself:

```bash
gtmstack synthesize cursor-2026
```

Three books run on Cursor (AI code editor, ~M-M ARR Q1 2026,
contested chasm position). Compare the synthesis at
`evals/deliverables/cursor-2026-multi-book-synthesis.md` to what Cursor
is actually doing publicly. The convergent findings — engineering managers
at venture-backed software companies as the beachhead, F500 IT-led buyers
as wrong-pin-now, "AI-native code editor" not "AI coding assistant" as
the category claim — match Cursor's observable strategic moves.

That convergence with reality is the validation: the books, applied
rigorously, produce calls a thoughtful operator would also reach. The
multi-book synthesis is faster than the operator and explicit about
which framework each insight comes from.

## A live simulation: Anthropic-Brazil 2026

The other shipping deliverable is a live simulation:
`evals/deliverables/anthropic-brazil-2026-multi-book-synthesis.md`.

Four books on Anthropic's Brazilian expansion (Q2 2026), public-info
inputs only, no privileged information. The four frameworks converge on:
- **Beachhead:** Brazilian fintech engineering leadership (Nubank, Stone, Inter, XP, BTG, PagSeguro)
- **Category claim:** "regulated frontier AI" subcategory, not "another LLM API"
- **Whole-product gaps:** LGPD attestation, BRL pricing, Brazilian data residency, Portuguese product surface, local presence, named in-segment reference
- **Wrong-pin-now:** F500 IT-led, public-sector, SOE, SI-mediated incumbent banks
- **Q3 lightning strike:** same-day announcement of LGPD attestation + Brazilian residency + 1-2 anchor fintech reference customers, followed by SP office + Portuguese thought-leadership essay

Read it as a worked example of what a live simulation produces. If you
work on Anthropic's actual Brazil GTM and the diagnostic gets things
wrong, the wrongness is what gtmstack needs to learn from — DM the repo
maintainer.

## What gtmstack has learned across cases

Six patterns hold across the three multi-book syntheses shipped so far
(Cursor 2026, Anthropic-Brazil 2026, gtmstack-on-itself 2026).
Briefly:

1. **Convergence is the highest-confidence signal.** When 2+ books
   reach the same answer through different reasoning, that answer is
   more reliable than either solo verdict.
2. **Divergence is the strategic question.** Where books disagree is
   where the operator still owns the call.
3. **Whole-product gaps cluster around 5-6 items.** Count how many
   books prescribe each item; ship the 4-of-4 ones first.
4. **"Parallel pursuit" is the universal failure mode.** Every case
   surfaced a "pick one" warning.
5. **Self-diagnostic produces the sharpest verdict.** gtmstack-on-
   gtmstack got 5/5 books at 0.95+ and said "stop building."
6. **The "no" emerges faster than the "yes".** Multi-book exclusions
   converge harder than positive moves.

Full writeup with evidence and edge cases:
[evals/PATTERNS.md](evals/PATTERNS.md).

## What gtmstack does NOT do

- **Tactical copy.** No cold-email subject lines, no LinkedIn ad copy,
  no sales-deck slides. Strategy is upstream of copy; copy writes itself
  once the strategy is locked.
- **Web research or competitor scraping.** Inputs come from you. The
  rubric scores rigor of framework application, not the freshness of
  external data.
- **Decisions for you.** The synthesis is a structured diagnostic with
  named open questions. The decisions belong to you and your team.
- **One-shot magic.** The first run is the starting point. Re-run with
  better inputs as you learn. The diagnostic compounds.

## Where gtmstack fits in the competitive landscape

GTM specialists already have ways to think strategically about their
go-to-market plan. gtmstack is one option among several. The honest
positioning, named in the four layers most likely to be on your shortlist:

**Layer 1 — Tactical AI tools** (Lavender, Outreach, Default.com, Apollo,
Clay). These automate execution: cold-email copy, sequence orchestration,
prospect data, pipeline operations. They presume the strategy is decided.
gtmstack is upstream — it tells you whether the strategy is right; tactical
tools execute the strategy you've already chosen. Different jobs.

**Layer 2 — Generic AI assistants** (ChatGPT, Claude.ai, Gemini, custom GPTs).
A capable AI assistant can answer any GTM question, including questions
about Moore's chasm or Dunford's positioning. The structural difference is
that generic assistants give answers; gtmstack runs encoded frameworks as
rubrics that score whether the analysis applies the framework correctly.
Generic AI is conversation; gtmstack is structured diagnostic with
auditable framework citations.

**Layer 3 — Strategy consulting** (BCG, Bain, McKinsey, Winning by Design,
fractional CMOs, Pavilion / OnDeck advisors). Consulting offers depth, brand
credibility, and partner-mediated implementation support. It also costs
$20K-$50K+ and takes 3 weeks. gtmstack is faster, cheaper, and zero-cost
incrementally — but ships with no consultant relationship, no implementation
support, and no analyst category recognition. Consulting is a relationship;
gtmstack is a tool.

**Layer 4 — AI-strategic-thinking peers** (uncertain — possibly empty).
Other open-source or AI-native tools that encode prescriptive frameworks
as runnable diagnostics for GTM specifically. As of Q2 2026, this slot
appears empty. If you find a competitor here, gtmstack would benefit from
the comparison — please open a GitHub issue.

### Five things gtmstack does well

1. **Multi-book convergence is the value layer.** When 4-5 independent
   frameworks reach the same beachhead through different reasoning paths,
   the beachhead is more reliable than any single framework's solo opinion.
   Single-book = one perspective. Multi-book = differential diagnosis. No
   alternative on the shortlist produces this.
2. **Auditable framework citations.** Every prescription in the synthesis
   names which book(s) prescribed it, with rubric scores. Consulting decks
   are takes; gtmstack is structured argument with the framework lineage
   exposed.
3. **Speed and cost.** ~25 minutes from first prompt to deliverable. $0
   incremental cost (you already pay for Claude Code). Compare to ~3 weeks
   and $20K-$50K of strategy consulting.
4. **Honest divergence.** When the books disagree, the synthesis surfaces
   the disagreement as the actual strategic question rather than papering
   over it with a confident take. Generic AI optimizes for one coherent
   answer; gtmstack optimizes for surfacing what you don't yet know.
5. **Books-as-evals as a reusable shape.** The pattern (framework.md /
   prompt.md / rubric.json / cases/) generalizes beyond GTM — legal
   contracts, product strategy, investor memos, design systems. gtmstack
   is one instance of a pattern that may be more interesting than the
   instance.

### Five things gtmstack is honestly bad at

1. **Brand, customer references, analyst recognition.** Zero of all three.
   Consulting decks come with the consultant's reputation; gtmstack comes
   with a GitHub repo authored by one part-time engineer. If your buyer
   needs procurement-grade vendor credibility, this is the largest gap.
2. **Implementation support.** Consulting engagements include partner-led
   rollout, change management, and follow-up. gtmstack hands you a
   synthesis and walks away. Diagnostic ≠ doing.
3. **Tactical execution layer.** Lavender sends emails. Outreach orchestrates
   sequences. Apollo enriches prospects. gtmstack does none of this. If
   your bottleneck is execution, gtmstack is the wrong tool.
4. **Conversational range.** ChatGPT can answer any GTM question, including
   questions outside the books gtmstack has encoded. gtmstack only runs the
   five books it ships with — Crossing the Chasm, Obviously Awesome,
   Predictable Revenue, Play Bigger, The Mom Test. Outside that surface,
   reach for generic AI.
5. **Validated demand.** As of v0.2, no external GTM operator has
   independently validated that the synthesis prescribes moves they would
   actually take. The cursor-2026 and anthropic-brazil-2026 deliverables
   are author-authored on public-info inputs. The honest signal is that
   running gtmstack on a live problem is the only way to find out if it
   works for you. (See `evals/deliverables/gtmstack-2026-multi-book-synthesis.md`
   for gtmstack diagnosing its own GTM, including this gap as the
   load-bearing finding.)

The honest summary: gtmstack is the right tool for a GTM specialist who
already uses Claude Code, has read at least one of the canonical books,
and has an active strategic decision to make on a tight clock. It is the
wrong tool for a buyer who needs vendor credibility, implementation
support, or tactical execution.

## Local events log

gtmstack records what you ran (and how it went) to `~/.gtmstack/events.jsonl`
so you can see your own usage over time. Run counts, completion rates,
durations. **The file is local-only — nothing is transmitted anywhere.**

What's logged: event type, ISO timestamp, gtmstack version, book name,
case ID, pass/fail outcome, duration. What is NOT logged: case content,
signal text, deliverable content, anything identifying.

```bash
gtmstack stats          # summary: run counts, completion rate, runs by book
gtmstack telemetry      # status + opt-out instructions
```

To disable: `export GTMSTACK_TELEMETRY=off`. To wipe: `rm ~/.gtmstack/events.jsonl`.

## The /gtm-office-hours skill (alternative invocation)

If you've installed the skill at `~/.claude/skills/gtm-office-hours`,
you can invoke gtmstack from any Claude Code session — not just from the
gtmstack repo. The skill walks through the same flow as the walkthrough
above, finds the gtmstack CLI on your PATH, and writes outputs to
`gtmstack-output/` in your current working directory.

## Books

- **crossing-the-chasm** (Geoffrey Moore) — adoption stage, beachhead,
  whole product, bowling pin sequence. *Where to play.*
- **obviously-awesome** (April Dunford) — competitive alternatives,
  unique attributes, value themes, market category, positioning statement.
  *How to position.*
- **predictable-revenue** (Aaron Ross) — ICP, role specialization
  (SDR/AE/AM), Seeds/Nets/Spears, Cold Calling 2.0, when NOT to apply
  outbound. *How to sell.*
- **play-bigger** (Lochhead / Peterson / Ramadan) — category design,
  Magic Triangle (product/company/category alignment), POV, lightning
  strike, king-vs-niche economics. *What category to play in.*
- **the-mom-test** (Rob Fitzpatrick) — bad-data signals (compliments,
  fluff, ideas-from-prospects, vanity engagement), past-behavior probes,
  falsifying questions, commitment ladder, bad-mouth test. *Whether
  you've actually validated demand or just the founder's hopes.*

### Nominate the next book

The next book to get encoded gets picked by readers, not by me.

- See the seed list with rationale:
  [evals/CANDIDATE_BOOKS.md](evals/CANDIDATE_BOOKS.md) — three
  candidates spread across different axes: **Zero to One** (strategy /
  monopoly thinking), **SPIN Selling** (sales execution / discovery-call
  discipline), and **Traction** (channel discovery via the Bullseye
  method).
- Nominate via issue:
  [New nomination →](https://github.com/jkkorn/gtmstack/issues/new?template=book-nomination.yml)
- Upvote others' nominations with 👍 reactions on the issue.

I tally vote count, comment depth, and which axis is currently
underweight in the eval set. Walk me through *why* a book would change
your work — that beats a one-line "+1." See the "How a book gets
picked" section in CANDIDATE_BOOKS.md for the full picking criteria.

## Cases

The current case library:

| Case | Books available | Type |
|------|-----------------|------|
| slack-2014 | crossing-the-chasm | with ground truth (chasm-calibration) |
| zoom-2018 | crossing-the-chasm | with ground truth (chasm-calibration) |
| notion-2020 | all five | blind historical |
| cursor-2026 | all five | blind |
| stripe-2011 | crossing-the-chasm, obviously-awesome, predictable-revenue | blind (productive misfit for PR; positioning lens on early Stripe is informative) |
| anthropic-brazil-2026 | all five | blind simulation |
| gtmstack-2026 | all five | self-diagnostic |

### Adding a new case

```bash
gtmstack new-case <id>           # interactive: scaffolds template with TODOs
# (edit the resulting evals/books/crossing-the-chasm/cases/<id>.json)
gtmstack sync-cases <id>         # mirror chasm copy to all other books
gtmstack synthesize <id>         # run all books, produce per-book reports
```

The scaffold writes a single template file under
`evals/books/crossing-the-chasm/cases/<id>.json` with TODO placeholders for
each field. Edit it in your favorite editor, then run `sync-cases` to mirror
the finished case to all other books that have a `cases/` directory.

For the convention behind case ID naming (slug-style, year-suffixed) and the
field schema, copy any existing case file as a template — `notion-2020.json`
is a clean multi-book historical example.

## Cross-cutting context modules

Some cases benefit from operating-environment background that's
cross-cutting across books — e.g., a Brazilian-market case where every book
needs to know about LGPD, the Brazilian fintech ecosystem, AWS São Paulo
dynamics. Context modules deliver that background as reference material
injected into each analyst prompt.

Declare a context module on a case file by adding a `context_modules` field:

```json
{
  "id": "comp-2026",
  "case_type": "blind",
  "company": { ... },
  "current_state": { ... },
  "expansion_thesis": "...",
  "signals": [ ... ],
  "context_modules": ["brazilian-gtm"]
}
```

The runner loads `evals/context/<module>.md` and injects it into every
book's analyst prompt as background fluency about the operating
environment. Currently shipping:

- **brazilian-gtm** — Brazilian regulatory landscape (LGPD, ANPD, Open
  Finance, Pix), fintech ecosystem ("five sisters" + digital fintechs),
  enterprise B2B SaaS landscape, local SI competitors, public-sector
  procurement rules, VC ecosystem, cultural / B2B norms,
  pricing/contracting friction, common Brazilian-market failure modes.

The pattern is extensible — to add an `indian-fintech` or `eu-regulated-saas`
or `latam-general` module, drop a Markdown file at `evals/context/<name>.md`
and reference it from case files.

## Why books-as-evals

Most prescriptive frameworks have testable claims. *Crossing the Chasm*
has TALC stages, the chasm, beachhead, bowling pin, whole product —
specific concepts that a rigorous analysis either applies correctly or
doesn't. Encoding the framework as a rubric makes "does this analysis
apply Moore's lens" observable instead of vibes.

The pattern is general. The same shape (framework.md / prompt.md /
rubric.json / cases/*.json) can encode any prescriptive framework — legal
contracts, product strategy, investor memos, design systems. gtmstack is
one instance.

## Repo layout

```
gtmstack/
├── bin/
│   └── gtmstack             # CLI entry point
├── evals/
│   ├── runner.ts            # TypeScript runner (calls claude -p)
│   ├── package.json         # Bun config
│   ├── books/               # Encoded frameworks
│   ├── context/             # Cross-cutting context modules (brazilian-gtm.md, ...)
│   ├── runs/                # Per-run reports (auto-generated)
│   └── deliverables/        # Multi-book synthesis documents
├── gtm-office-hours/
│   └── SKILL.md             # Claude Code skill for end-user flow
├── GTMSTACK.md              # this file
└── README.md                # repo-level (currently inherited from gstack seed)
```

## Status

v0.1 — three books, five cases, nine persisted runs, two synthesis
deliverables. CLI ships. Skill ships. No customer evidence yet — every
test is internal. The cursor-2026 and anthropic-brazil-2026 syntheses
are the strongest demos; both are public-info-only and explicitly note
that anyone with actual GTM context at those companies is the source
of truth for what the analysis gets right and wrong.

Roadmap: ship the runner, get one real GTM leader to run gtmstack on a
live plan, add a fourth book (Play Bigger or The Mom Test), iterate the
rubric based on customer feedback.
