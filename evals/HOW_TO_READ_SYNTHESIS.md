# How to read a gtmstack synthesis

If you've landed here from a LinkedIn post or a link in PATTERNS.md
and you're looking at one of the deliverables for the first time, the
document structure can feel dense. Here's how to read it in the order
that produces the most value per minute.

The deliverables that ship with the repo:

- [`cursor-2026-multi-book-synthesis.md`](deliverables/cursor-2026-multi-book-synthesis.md) — Cursor (AI code editor), 2 books, contested chasm position
- [`anthropic-brazil-2026-multi-book-synthesis.md`](deliverables/anthropic-brazil-2026-multi-book-synthesis.md) — Anthropic's Brazil expansion, all 5 books, public-info simulation
- [`gtmstack-2026-multi-book-synthesis.md`](deliverables/gtmstack-2026-multi-book-synthesis.md) — gtmstack diagnosing its own GTM (the rare case where the tool is the case)

All three follow the same structure. Read in this order:

---

## Step 1 — Executive verdict (30 seconds)

Always one short paragraph, near the top. It names the single most
consequential move and the second-most.

You can stop reading after this paragraph and still walk away with the
core call. Everything below is the reasoning chain, the trade-offs, and
the action sequencing.

**What to look for:** the verdict is direct. If it reads
"we should consider exploring..." the synthesis is hedging and the
case probably has thin signals. Real verdicts in the shipping
deliverables read like: "stop building, find one non-friend operator,
run gtmstack on a live problem they actually face."

---

## Step 2 — Per-book scorecard, if present (30 seconds)

Some syntheses include a scorecard table near the top:

| Book | Score | Top-line verdict |
|------|------:|------------------|
| Crossing the Chasm | 0.952 | Innovator stage. Wrong beachhead. |
| Obviously Awesome | 1.000 | Positioning coherent. Distribution is the gap. |

The score is rubric-vs-analysis agreement, not a confidence rating.
**0.95+ means "rigorous application of the framework," not "the
analysis is correct."** A book scoring 1.0 says the analyst applied
the framework to the standard the framework itself sets — which is
useful but does not mean the strategic call is right.

The top-line verdict column is the fastest scan of where each book
landed.

---

## Step 3 — Where the books converge (2-3 minutes)

This is the section that earns the multi-book approach.

When two or more books reach the same answer through different
reasoning, that answer is more reliable than either book's solo
verdict. The convergent findings section enumerates these, usually as
2-5 numbered findings, each with a small table comparing what each
book said.

**How to read:**
- Skim the findings titles. They name the call directly: "F500 IT is
  the wrong-pin-now", "same beachhead, four different paths", "same
  whole-product gap, six concrete items."
- For each finding, the table tells you *which* books reached the call
  and through *what* reasoning. Two different reasoning paths to the
  same answer is the signal.
- The "Strategic implication" line below the table is the actionable
  takeaway. Read these even if you skip the tables.

If the convergence section is short (1-2 findings), the case has weak
multi-book signal — the books mostly disagreed. That's a useful
finding too, but the diagnostic is less load-bearing.

---

## Step 4 — Where the books diverge (2 minutes)

The divergences are *not* framework failures. They're the strategic
questions the operator still owns.

If 4 books agreed on the beachhead but 2 books disagreed on the chasm
position, that disagreement isn't noise — it usually means the case
sits in a genuine ambiguity (between Early Adopters and Early Majority,
between assistant-frame and editor-frame, between commercialize-now
and validate-first). Different signal slices weight the call
differently, and both readings are defensible.

**How to read:**
- The divergence section often has a "Reconciliation" subsection that
  doesn't pick a side — it explains *what kind* of decision the
  divergence reveals.
- If you're the operator, the divergences are your homework. The
  convergences are the strategy lock.

---

## Step 5 — What gtmstack would build out next (3-5 minutes)

This is the action plan. Usually a numbered or quartered sequence
(Pin 1 / Pin 2 / Q2 / Q3 / etc.).

Each item names which books prescribe it. Items that all 4-5 books
prescribe are table-stakes. Items only 1 book prescribes are
framework-specific and lower-priority.

**How to read:**
- Don't try to action everything. Skim for the items prescribed by
  3+ books — those are the high-leverage moves.
- Note the dependencies. The plan is usually sequenced; ignoring the
  sequence (e.g., starting outbound before the whole product ships)
  is the canonical failure mode the books are written against.

---

## Step 6 — What this diagnostic does NOT tell you (1 minute)

Read this section even if you skip everything else.

It's the explicit limits of the synthesis. Public-info inputs only,
no customer interviews, no competitor intel, no team capacity audit.
The diagnostic is a structured reasoning artifact, not a strategy
finalization. The limits section is honest about what would need to
happen next to convert this into a final plan.

---

## Step 7 — Confidence summary + what to do (1 minute)

The closing sections name which findings are high-confidence
(treat as a strategy lock) vs. directional (instrument to disconfirm).
The "what to do with this diagnostic" section gives concrete next
moves — usually: pick one open question to instrument, schedule a
team review, identify the operator who'd disconfirm a specific finding.

---

## Total read time

A first read of a shipping synthesis is **8-12 minutes** if you read
all sections, **3 minutes** if you stop after the verdict and the
convergent findings titles.

The deliverables are dense on purpose. They're meant to replace a
2-day strategy offsite, not a tweet. The dense version is what makes
the next conversation with your team productive.

---

## What about running my own?

The synthesis structure is produced by the prompts in
[`books/*/prompt.md`](books/) plus the rubric in
[`books/*/rubric.json`](books/). The prompts ask for the specific
sections this guide describes. When you run `gtmstack synthesize
<case-id>`, you'll get a deliverable in the same shape.

The full how-to-run is in the [main README](../README.md#quickstart).
~25 minutes from first prompt to deliverable. Free. No API key.
