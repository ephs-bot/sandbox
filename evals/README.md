# gtmstack evals

Books-as-evals runner for gtmstack. Encodes canonical GTM books (Crossing
the Chasm, Obviously Awesome, Predictable Revenue) as runnable rubrics and
applies them to GTM situations as cases.

## What this is

Each canonical GTM book is a folder under `books/` containing:
- `framework.md` — the analytical lens, summarized in plain language (own words; cite the book)
- `prompt.md` — the eval prompt template defining required output sections
- `rubric.json` — 6-8 scoring items, weighted, with pass threshold
- `cases/*.json` — historical or current GTM situations as inputs (with optional ground-truth verdicts)

Cases shared across books (same `<case-id>.json` filename in multiple
books' `cases/` dirs) enable multi-book synthesis: the same company
analyzed through three frameworks produces complementary lenses, and where
the books converge becomes the highest-confidence diagnostic signal.

## Running

The CLI lives at `bin/gtmstack` (relative to repo root). It invokes
headless Claude Code (`claude -p`) for both analyst and judge phases — no
Anthropic API key required.

```bash
# From the repo root
bin/gtmstack run crossing-the-chasm slack-2014
bin/gtmstack synthesize cursor-2026
bin/gtmstack list-books
bin/gtmstack list-cases obviously-awesome
```

Per-run reports persist to `runs/`. Multi-book synthesis deliverables (when
written by hand or via the `/gtm-office-hours` skill) live in
`deliverables/`.

## Books

- **crossing-the-chasm** (Geoffrey Moore) — adoption stage, beachhead, whole product, bowling pin sequence
- **obviously-awesome** (April Dunford) — competitive alternatives, unique attributes, value themes, market category, positioning statement
- **predictable-revenue** (Aaron Ross) — ICP, role specialization (SDR/AE/AM), Seeds/Nets/Spears, Cold Calling 2.0, when NOT to apply outbound

The next book gets picked by readers — see [CANDIDATE_BOOKS.md](CANDIDATE_BOOKS.md)
for the seed list and how to nominate.

For contributing cases or books, see [CONTRIBUTING.md](CONTRIBUTING.md).
For patterns observed across cases, see [PATTERNS.md](PATTERNS.md).
If you've never read a multi-book synthesis before, start with
[HOW_TO_READ_SYNTHESIS.md](HOW_TO_READ_SYNTHESIS.md).
Project-scoped change history: [CHANGES.md](CHANGES.md).

## Adding a book

Create `books/<book-id>/` with:
- `framework.md` — paraphrase the book's framework in your own words. Don't quote at length. Cite the book.
- `prompt.md` — required output sections + style constraints
- `rubric.json` — 6-8 scoring items at total weight 7.5 (matches existing books for cross-book score comparability), pass threshold 0.75. Most discriminating item gets 1.5x weight.
- `cases/` — directory for case files

Then validate by running on an existing case the book applies to. The
ground-truth case (if it has one) should score ≥0.95 on its own rubric —
if it scores lower, the rubric is mis-calibrated against what the framework
considers good analysis.

## Adding a case

Create `<book>/cases/<case-id>.json` with:

```json
{
  "id": "case-id",
  "case_type": "blind | with_ground_truth | blind_simulation",
  "company": { "name": "...", "description": "..." },
  "current_state": { "revenue_arr_usd": "...", "customers_count_approx": "...", "customer_profile": "...", "sales_motion": "...", "industries": [], "geography_primary": "..." },
  "expansion_thesis": "...",
  "signals": [ "...", "..." ]
}
```

For blind cases, omit `ground_truth`. The rubric scores rigor of framework
application, not agreement with a pre-known answer.

For ground-truth cases, add a `ground_truth` field with the canonical
verdict — useful for rubric calibration.

To enable cross-book synthesis on a case, copy the same case file into
multiple books' `cases/` directories. The synthesize command runs the case
through every book that has it.

## Run modes

- `cli_headless` — runs via `bin/gtmstack`, uses `claude -p` for analyst and judge. The default.
- `subagent_*` — historical runs dispatched via the Claude Code Agent tool inside a Claude conversation. Same model architecture, different invocation path.
- `in_session` — historical run mode where Claude in the active session served as both analyst and judge. Has self-grading bias risk; preserved for record only.

## Schema versioning

All run reports include `rubric_id` (e.g., `crossing-the-chasm-v0`). When
a rubric changes meaningfully, bump the version in the rubric.json and
note in the run reports. Cross-version score comparisons are not valid.
