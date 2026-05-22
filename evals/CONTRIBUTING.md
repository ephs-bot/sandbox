# Contributing to gtmstack evals

This guide is for adding cases and books to the eval set. For the
overall framework and what each book does, read [README.md](README.md).

The eval framework has two extension points:

- **Cases** — a real GTM situation, analyzed through one or more books.
  Cheap to add. Most contributions are cases.
- **Books** — a canonical GTM/strategy book encoded as a runnable
  rubric. Heavier lift. New books are picked via the
  [nomination process](CANDIDATE_BOOKS.md), not added ad hoc.

---

## Adding a case

### When to add a case

Add a case when you have a real GTM situation worth analyzing through
multiple frameworks. Three kinds of cases work well:

1. **Time-machine calibration** — a historical company at a specific
   year where we know what happened next (Slack 2014, Zoom 2018,
   Stripe 2011). The rubric scores the analyst's rigor against known
   outcomes.
2. **Blind historical** — a real company at a specific year, no
   ground truth declared (Notion 2020, Vercel 2021). Tests whether
   the framework produces a useful diagnosis without an answer key.
3. **Blind current** — a present-day company facing a live decision
   (Cursor 2026, Anthropic-Brazil 2026). Same as historical but the
   verdict is forward-looking.

If you're a Brazilian-startup operator, see
[context/brazilian-gtm.md](context/brazilian-gtm.md). Cases that
declare `"context_modules": ["brazilian-gtm"]` in their JSON get
that file injected as background fluency on every run.

### How to add a case

```bash
gtmstack new-case <case-id>     # interactive: scaffolds JSON with TODOs
# edit evals/books/crossing-the-chasm/cases/<case-id>.json
gtmstack sync-cases <case-id>   # mirror chasm copy to all other books
gtmstack synthesize <case-id>   # run every book that has the case
```

The case file lives under `evals/books/crossing-the-chasm/cases/`
first (chasm is the authoritative source), then `sync-cases` mirrors
it to every other book that has a `cases/` directory.

If you want a case in only *some* books (e.g., positioning-lens
applies but customer-discovery doesn't), delete the irrelevant
mirrored copies after sync. The runner only runs books that have the
case file.

### Case ID conventions

- Lowercase, kebab-case, year-suffixed: `notion-2020`, `cursor-2026`,
  `stripe-2011`.
- For Brazilian-startup cases, use the company name as-it-brands-itself
  (no `-brazil` suffix unless it disambiguates from a US namesake):
  `nubank-2024` not `nu-brazil-2024`.
- If two cases share a company at different years, both are valid:
  `stripe-2011` and `stripe-2024` would coexist.

### Required fields

Every case file needs:

```json
{
  "id": "company-year",
  "case_type": "with_ground_truth | blind_historical | blind | blind_simulation",
  "company": { "name": "...", "description": "..." },
  "current_state": {
    "revenue_arr_usd": "...",
    "customers_count_approx": "...",
    "customer_profile": "...",
    "sales_motion": "...",
    "industries": [],
    "geography_primary": "..."
  },
  "expansion_thesis": "...",
  "signals": ["...", "..."]
}
```

Optional:

- `"context_modules": ["brazilian-gtm"]` — injects background fluency.
- `"ground_truth": { ... }` — for calibration cases only. The shape
  is book-specific; see existing calibration cases for examples.

### Signal quality matters more than signal count

Signals are the input the analyst reasons from. A case with 6 specific,
date-stamped, named-buyer signals produces a sharper diagnosis than one
with 15 generic "growth is good" signals. Aim for signals that are:

- **Falsifiable** — "no enterprise IT integrations yet" beats "early
  enterprise readiness."
- **Stage-relevant** — for an early case, signals about who's *buying*
  matter; for a late case, signals about *how* they're buying.
- **Specific** — name the buyer role, the customer count, the deal
  size, the integration that's missing.

Re-read existing cases (especially `notion-2020.json`, the cleanest
multi-book historical) for tone and density.

### Productive misfits are fine

A case doesn't have to fit every book. Stripe 2011 in
Predictable Revenue is a "productive misfit" — Stripe wasn't running a
PR-style outbound motion, so PR's rubric partially breaks. That
breakage is itself informative. The synthesis section should call out
where books don't apply, not paper over it.

---

## Adding a book

The next book to get encoded is picked via the
[nomination process](CANDIDATE_BOOKS.md). If your book wins the vote
or you're the maintainer choosing to add one off-process:

### Required files

```
books/<book-id>/
  framework.md     # the analytical lens, in your own words (cite the book)
  prompt.md        # the eval prompt template defining required output sections
  rubric.json      # 6-8 scoring items, weighted, with pass threshold
  cases/           # directory for case files (initially empty)
```

### Rubric calibration

- 6-8 scoring items. More than 8 dilutes signal; fewer than 6 makes
  rubric agreement noisy.
- Total weight should sum to **7.5** for cross-book score
  comparability (matches the existing books).
- Pass threshold: **0.75**.
- The most-discriminating item should get **1.5x weight** (other items
  at 1.0x).

### Validation

After adding a book, run it against an existing case the book applies
to:

```bash
gtmstack run <book-id> <existing-case-id>
```

If the case has chasm-style ground truth, the book's rubric won't
match — that's expected. What matters is whether the analyst's reasoning
through your book's lens is rigorous on the book's own terms.

For ground-truth calibration: add at least one case where you know the
canonical answer, and the book should score that case ≥0.95 on its own
rubric. If it scores lower, the rubric is mis-calibrated against what
the framework considers good analysis.

### Framework writing style

`framework.md` should be a *paraphrase*, not a quote-dump. Cite the
book. Don't reproduce more than a sentence or two of the original text.
The goal is the analyst's mental model of the framework, in plain
language, in ≤500 words. See `crossing-the-chasm/framework.md` for
the bar.

---

## Adding a context module

Context modules (under `evals/context/`) are cross-cutting reference
material a book can lean on. The Brazilian-GTM module is the only one
that exists today. Add a new module when:

- You have domain or geographic context that 3+ cases will share.
- The context is *background fluency*, not *facts to analyze* (those
  belong in `signals`).

To enable a module on a case, add to the case JSON:

```json
"context_modules": ["brazilian-gtm"]
```

The runner injects the module's content into the analyst prompt as a
background section.

---

## Style guidelines

- **Plain language over jargon.** "What changes for the buyer?" beats
  "category dynamics inversion."
- **Cite the book.** Paraphrase, don't quote at length. Books are the
  source; the framework writeup is your synthesis.
- **No AI vocabulary in deliverables.** No "delve," "robust,"
  "comprehensive," "nuanced," "fundamental." If the deliverable reads
  like an LLM wrote it, the reader trusts it less.
- **Real numbers, real names.** "~$10M ARR" beats "early traction."
  "Itaú Unibanco" beats "incumbent bank."

If you don't know a number, say so. "Public revenue undisclosed; ARR
estimated $20-50M from press signals" is better than a confident
made-up number.
