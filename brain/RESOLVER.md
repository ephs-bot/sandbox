# Brain RESOLVER

Decision tree for filing any new page. Read this before creating a page.

1. Is it a person (anyone you know, track, or might deal with)? → `people/`
2. Is it a company, fund, or org? → `companies/`
3. Is it a reusable framework, definition, or mental model? → `concepts/`
4. Is it an original thought, hypothesis, or proposal of yours? → `ideas/`
5. Doesn't fit cleanly yet? → `inbox/` (a signal the schema should grow)

Page format (two layers, separated by `---`):
- **Above the line — compiled truth.** One-paragraph summary, then structured
  State fields, Open Threads, See Also. Always rewritten to stay current.
- **Below the line — timeline.** Append-only, reverse-chronological log of what
  happened and when, with source.

Cross-link entities with `[[companies/acme]]` / `[[people/jane-doe]]` style refs.
One page per entity; use cross-references for facets, never duplicate pages.
