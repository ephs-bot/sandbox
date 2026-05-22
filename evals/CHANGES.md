# gtmstack changes

Project-scoped change history for gtmstack-the-fork. The root
`CHANGELOG.md` documents upstream gstack releases; this file documents
what gtmstack adds on top.

Format: reverse-chronological. Each entry names what shipped from the
user's perspective, not the internal path that got us there.

---

## 2026-05-22 — Reader-driven book nominations

You can now vote on which GTM book gets encoded next.

- Three candidate books on the table, deliberately spread across
  different axes so the vote produces real signal:
  Zero to One (strategy / monopoly thinking), SPIN Selling (sales
  execution / discovery-call discipline), Traction (channel discovery
  via the Bullseye method).
- Nominate via a structured GitHub issue template — axis dropdown,
  why/framework/test-company text fields. Tallying is structured, not
  regex archaeology.
- The seed list is a starting point, not a ballot — nominate a book
  not on the list and it gets added.

See [CANDIDATE_BOOKS.md](CANDIDATE_BOOKS.md).

## 2026-05-22 — Cross-case patterns documented

Six patterns observed across the three shipping multi-book syntheses
(Cursor 2026, Anthropic-Brazil 2026, gtmstack-on-itself 2026). The
most useful one: **the "no" emerges faster than the "yes."**
Multi-book synthesis converges on what NOT to do faster than on the
next positive move. Practical use: trust the exclusions; treat the
positive moves as the operator's call.

See [PATTERNS.md](PATTERNS.md).

## 2026-05-22 — Wider case coverage

- `cursor-2026` now runs across all 5 books (was 2). The freshest blind
  case is the strongest test of cross-book synthesis.
- `stripe-2011` added to obviously-awesome (was chasm + predictable-
  revenue). The positioning lens on early Stripe is informative.
- `slack-2014` and `zoom-2018` deliberately not mirrored — their
  ground_truth is chasm-calibration-specific; mirroring would mislead
  readers into thinking those cases are graded across all 5 books.

## 2026-05-22 — Contributor docs

- [evals/CONTRIBUTING.md](CONTRIBUTING.md) — focused guide for adding
  cases, books, and context modules. Covers case-id conventions,
  signal quality, productive misfits, rubric calibration (7.5 total
  weight, 0.75 pass threshold).
- [evals/HOW_TO_READ_SYNTHESIS.md](HOW_TO_READ_SYNTHESIS.md) —
  ~3-minute walkthrough of the synthesis deliverable structure for
  first-time readers landing cold from LinkedIn or other links.
