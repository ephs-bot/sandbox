# Positioning Diagnostic: gtmstack (self-diagnostic, 2026-05-03)

> **Self-diagnostic warning.** The author of gtmstack also authored the framework
> encoding, the prompt, the rubric, this case file, and now this analysis. Mom Test
> logic says the inputs reflect founder framing of demand evidence — which means the
> inputs are presumed contaminated. This Dunford pass treats the case at face value
> only to apply the lens cleanly; the verdict deliberately surfaces where positioning
> reasoning runs ahead of validated demand.

## Competitive Alternatives

What would a GTM lead at a Series B/C SaaS or AI dev tools company actually do today
when stuck on "we're in the chasm and don't know which beachhead to commit to"?

1. **Hire a strategy consultancy** (BCG, Bain, McKinsey, niche GTM boutiques like
   Winning by Design or Pavilion-network operators). Named in the README as the
   $20K-$50K / 3-week comparator.
2. **Hire a part-time GTM advisor** (LinkedIn-discovered Series B/C GTM operator,
   ex-CRO, ex-CMO, often via Pavilion, OnDeck, or a portfolio-VC introduction).
   The most common real path; 2-5 hours/month, $5K-$15K/quarter.
3. **Use ChatGPT or Claude.ai with their own prompts** — "act as April Dunford
   and tell me how to position our product." Free, immediate, generic.
4. **Read the books themselves and run a half-day offsite** with the team
   (status-quo-with-effort path). The books are $20 each on Amazon. The output
   is whatever clarity the team can wring out in a Saturday.
5. **Do nothing decisively** — keep iterating on the existing positioning, add
   another sales hire, pump more pipeline, hope something clicks. The dominant
   alternative in practice for cash-strapped Series B/C teams who can't justify
   $30K of consulting and don't have time for a structured offsite. *This is
   the load-bearing non-obvious alternative for this case.*
6. **Read a portfolio-company memo** if the company is VC-backed (a16z's GTM
   playbook, Bessemer's State of Cloud, Sequoia's pricing memos). Free,
   second-hand, generic to the asset class.

## Unique Attributes

What does gtmstack structurally have that ALL six alternatives lack? The honest
list is short. Three structural attributes that survive scrutiny:

1. **Books-as-evals architecture (architectural).** gtmstack encodes canonical GTM
   frameworks as runnable rubrics — `framework.md` + `prompt.md` + `rubric.json` +
   `cases/` — that score model output against framework-specific items. Strategy
   consultancies deliver narrative reports; advisors deliver opinions; ChatGPT
   delivers ungraded prose; the books deliver prose plus exercises. None ship
   their analysis as a structured artifact that another instance of the same
   framework can re-judge. This is structural, not a feature: the consultancy
   model and the advisor model don't have rubric-graded output as a deliverable
   shape. They could rebuild it — but it would require dismantling the billable-hour
   delivery format. It is structurally absent from every named alternative.

2. **Multi-book convergence as the value layer (architectural).** The bet is that
   running five frameworks against the same case and looking at where their
   prescriptions agree (or where they diverge) is more diagnostic than any single
   framework. A consultancy applies one house framework. An advisor applies their
   personal mental model. ChatGPT lacks the prescriptive structure to converge.
   The books, individually, can't see each other. Convergence-across-frameworks
   is structurally only available when you encode multiple frameworks in a
   commensurable shape — which is what the rubric design enables. This too is
   architectural, not a feature.

3. **Distribution through Claude Code's headless mode and skill-pack pattern
   (distribution).** gtmstack rides on the Claude Code subscription that the
   target user already has. There is no separate API key, no separate auth, no
   separate billing surface, no platform onboarding. This is structurally distinct
   from "a SaaS product that charges $X/month" or "a consultancy that bills by
   the hour." The distribution channel — `~/.claude/skills/gtmstack/` — is owned
   by Anthropic and reaches every Claude Code Pro/Max subscriber. That is a
   structural distribution property no consultancy or advisor can replicate.

What this list deliberately does NOT include, even though the case's
"competitive-positioning hypothesis" signal claims them as differentiators:

- **"~25 minutes vs 3 weeks of consulting"** — speed is a superlative, not a
  structural property. The structural properties above produce the speed; speed
  itself is not the attribute.
- **"Better than ChatGPT for GTM"** — quality claim, not structural.
- **"Open-source and free"** — a pricing/license choice, not a structural
  capability the alternatives lack. ChatGPT + a custom GPT is also functionally
  free at the margin.

## Value Themes

For each structural attribute, the customer outcome it would unlock — *if a paying
customer existed to confirm the outcome*. The theming below is positioning logic;
none of these themes has been customer-validated.

1. **Books-as-evals → auditable diagnostic, not consultant prose.** The customer
   gets back a deliverable they can put in front of their CEO or board with the
   rubric scores attached. This reduces the political risk of GTM strategy
   recommendations: "the framework scored 0.92, here are the items it scored
   below 1.0 and why." Risk reduced: the named risk of "expensive consultant
   delivered a deck the board didn't trust." Estimated magnitude: the difference
   between a $30K consulting engagement that doesn't survive board pushback and
   a 25-minute synthesis that does.

2. **Multi-book convergence → confidence-weighted prescription.** When 4 of 5
   frameworks converge on the same beachhead recommendation, the GTM lead has a
   higher-confidence call than any single framework would produce. When the
   frameworks diverge, the divergence itself is the diagnostic — "the books
   disagree, which means we don't have enough information to commit yet."
   Capability unlocked: confidence-weighted GTM decisions, where the named
   capability is "reason about my own uncertainty." This is the load-bearing
   value claim. It is also the most untested claim — no external operator has
   validated it on a live problem.

3. **Claude Code skill-pack distribution → zero procurement friction.** The GTM
   lead doesn't have to get a new vendor approved, doesn't have to expense a
   new SaaS subscription, doesn't have to wait for legal review of an MSA.
   Time saved: the 4-12 weeks of typical SaaS procurement at a Series B/C
   company, compressed to one `setup` command. Money saved: the $0
   incremental spend (rides on the Claude Code subscription the team has).

The honest read: themes 1 and 2 are positioning logic that has not been
validated by paying customers. Theme 3 is mechanical and demonstrable.

## Best-Fit Customer

**Vice President of Marketing or Head of GTM at a Series B or Series C SaaS
company, 50-200 employees, US/Canada/UK headquartered, who has personally read
*Crossing the Chasm* and *Obviously Awesome*, has a Claude Code Pro or Max
subscription, and is currently weeks-stuck on a beachhead-selection decision
their CEO is asking about for an upcoming board meeting.**

Why this specific cut:

- **Role: VP Marketing or Head of GTM, not founder-CEO.** Founder-CEOs at
  pre-Series-B startups are too early — the chasm framing doesn't bind, and
  they're not the right buyer for a strategic-thinking tool because they're
  inside the strategy already. Series-D-and-beyond GTM leaders have ICP
  clarity and run quantitative pipeline math, not framework-driven
  beachhead selection. The Series B/C VP Marketing is the precise band where
  Dunford-and-Moore-style framing maps to the work they actually do this week.
- **Industry: SaaS or AI dev tools, 50-200 employees.** SaaS because the
  frameworks (Chasm, Dunford, Predictable Revenue) were built on SaaS shapes;
  AI dev tools because that's the author's network and the segment most likely
  to convert from a LinkedIn post. Outside SaaS — vertical software, hardware,
  marketplaces, fintech consumer-facing — the frameworks bend awkwardly.
- **Geography: US/Canada/UK.** English-only, GitHub-native, Claude Code-native,
  open-source-comfortable. Latin America, EMEA non-UK, APAC have either
  language, payment-rail, or open-source-hesitancy reasons to be downstream.
- **Blocking criterion: has read the books AND has Claude Code Pro/Max AND has
  an active beachhead decision.** Without the prior reading, the synthesis is
  noise; without Claude Code, there's no install path; without a live decision,
  there's nothing to run gtmstack against, which means polite interest doesn't
  convert.

## Market Category

**Default category (the obvious one): "GTM strategy tool" or "AI strategy
assistant."** This is the category most readers would default to when they read
the gtmstack README. In this frame, the competitive alternatives become ChatGPT,
Claude.ai with custom prompts, and other AI-strategy-assistant attempts. gtmstack
loses in this frame: ChatGPT has 10^9 monthly users; Claude.ai is the same
substrate gtmstack runs on; "AI strategy assistant" is the most crowded category
in 2026 software. Competing here makes gtmstack "an AI strategy assistant
preloaded with five business books" — a thin differentiator.

**Chosen category: "executable GTM rubrics — open-source canonical-framework
diagnostics for AI-coding-native GTM leaders."** Long, narrow, deliberately
unfamiliar. Three things this frame does:

1. *Centers the structural attributes.* Books-as-evals and multi-book convergence
   are central in this frame — they are the *category mechanic*, not feature
   add-ons. Once you accept the frame, gtmstack is the canonical example of
   the category, not an inferior version of an established one.
2. *Excludes consultancies and advisors.* Consultancies don't ship rubrics;
   advisors don't ship rubrics. They are not in this category. Their ratecards
   and delivery shapes don't fit.
3. *Excludes generic AI assistants.* ChatGPT doesn't ship prescriptive
   framework-graded output. Without the framework + rubric + judge architecture,
   it's not in the category.

**What this frame gains:** It makes gtmstack the only thing in its frame, which
is the Dunford win-condition. It makes the structural attributes (books-as-evals,
multi-book convergence) central instead of peripheral. It earns the right to be
compared against the books themselves rather than against ChatGPT.

**What this frame gives up — and this is the load-bearing trade-off for this
case:** *Slow comprehension and zero existing demand.* Nobody is searching for
"executable GTM rubrics." There is no analyst category. There is no Gartner Magic
Quadrant. The author has 10-15 hours/week part-time and zero paying customers.
Choosing a niche-subcategory frame requires sustained category-evangelism work
that the founder cannot fund and may not be able to sustain. The frame is
positioning-correct and demand-economically-precarious. By Dunford's own three
options:

- *Option 1 (compete in existing category — "AI strategy assistant"):* fast
  comprehension, hopeless competitive pressure, gtmstack becomes "an inferior
  ChatGPT for strategy." Reject.
- *Option 2 (niche subcategory — "open-source GTM frameworks delivered as
  Claude Code skills"):* narrower audience, sharper differentiation, slower
  comprehension. This is the chosen frame. Viable only if author commits to
  evangelism.
- *Option 3 (define a new category — "executable books"):* highest leverage if
  it lands, requires a category-defining book or talk plus 18-24 months of
  market education. The author has 10-15 hours/week. Reject as overinvestment
  for current evidence base.

The Dunford-honest answer: **the chosen category is correct in shape but
under-resourced for the work the choice implies.** Positioning is fine.
Distribution and category evangelism is the actual gap.

## Worst-Fit Customer

**Chief Revenue Officers at Series D+ public-or-near-IPO SaaS companies (1,000+
employees, $50M+ ARR) running a quarterly board-reported pipeline math discipline,
who do NOT use Claude Code, do NOT have time to install a CLI tool, AND require
SOC 2 + signed MSA + procurement-approved vendor for any tool that touches
strategic data.**

Three blocking criteria, each of which independently rules out the offer:

1. *No Claude Code subscription.* The skill-pack runs on Claude Code's headless
   mode. CROs at this stage typically use Salesforce dashboards, Gong, Clari,
   and a strategy consulting retainer — not a developer-tool CLI. The
   distribution channel is structurally absent.
2. *Procurement gate.* gtmstack has no SOC 2, no MSA, no DPA, no security
   review process, no support SLA. A CRO at a $50M+ ARR public-track SaaS
   cannot put strategic ICP and pipeline data into a free open-source
   side-project tool authored by one part-time person. The risk-tolerance
   calculus is structurally wrong.
3. *Pipeline math vs framework-driven thinking.* CROs at this stage run on
   conversion-rate, ramp-time, and cohort-LTV math, not Crossing-the-Chasm
   beachhead selection. The framework set gtmstack ships isn't the thinking
   shape they need. Even if the procurement and distribution problems were
   solved, the deliverable would not be useful.

A second worst-fit, briefly: **founder-CEOs at idea-stage / pre-seed pre-PMF
startups.** They don't have a beachhead-selection problem yet — they have a
"does anyone want this at all" problem. Mom Test, not Dunford, is the right
book, and reading it themselves for $20 dominates running a five-framework
synthesis against an unvalidated idea.

## Trend Layer

**Trend invoked:** *the rise of skill-pack distribution as a software shape*
(Anthropic's Claude Code skills, Cursor commands, OpenAI's custom GPTs, the
broader pattern of "agent-native software ships as a directory of prompts and
rubrics, not a SaaS"). This trend strengthens gtmstack's positioning specifically
because the distribution attribute (`~/.claude/skills/gtmstack/`) becomes a
recognized shape rather than an oddity. As skill packs become familiar to GTM
leaders through their engineering teams' use of Claude Code, the install path
stops being a friction and starts being a credibility signal: "this is shipped
the way modern AI-native tools ship." The trend is concrete (Anthropic's skill
marketplace shipped Q1 2026, Cursor and Codex have parallel patterns), it's
specifically tied to the distribution attribute, and it's not generic AI hype.

**Trends DELIBERATELY NOT invoked, and why:**

1. **"AI is transforming GTM."** Trend slop. Every GTM tool from Lavender to
   Outreach to Default to Common Room invokes this. The claim has zero
   discriminating power. Invoking it would dilute gtmstack's specificity into
   the same noise field as 200 other "AI-powered GTM" tools. The structural
   differentiation is books-as-evals, not "we use AI."
2. **"The future of consulting is AI."** Tempting because the README's
   $20K-$50K / 3-weeks comparison points there, but a category claim in this
   frame requires displacing the consultancy buying motion at the CEO and
   board level — and gtmstack has zero evidence it can. Layering this trend
   would over-promise versus the validation state. Mom Test logic: the
   founder framing the tool as a consultancy-displacer is not customer
   evidence; it's pitch.
3. **"Open-source AI tools are eating proprietary SaaS."** True at a
   long-arc level, irrelevant to this case. The buyer (VP Marketing at
   Series B/C) does not make purchase decisions on open-source-vs-proprietary
   philosophy. They make decisions on whether the tool unblocks the decision
   their CEO is asking about. Invoking this trend would be the founder's
   politics leaking into the positioning, which is exactly what Dunford
   warns against.

## Positioning Statement

For VPs of Marketing and Heads of GTM at Series B/C SaaS companies who have
already read *Crossing the Chasm* and *Obviously Awesome* and need a
board-defensible beachhead-selection answer this week, **gtmstack delivers
multi-framework rubric-graded GTM diagnoses through your team's existing Claude
Code subscription** — replacing the choice between a $30K three-week strategy
engagement and another Saturday with the books, with a 25-minute synthesis whose
reasoning is auditable framework-by-framework.

This statement is specific enough that it does not equally describe ChatGPT
(no rubric-graded framework output), a strategy consultancy (no skill-pack
distribution, no rubric scoring), or an advisor (no convergence-across-frameworks
deliverable). It does not equally describe any named alternative.

## Confidence and Open Questions

- **Market category choice confidence: 6/10.** The frame is shape-correct
  (centers structural attributes, excludes default-category competitors), but
  the author cannot fund the category-evangelism work the choice implies.
  The Dunford-honest read is that the category is correct and the
  distribution/category-creation budget to make it land is missing. Score
  reflects positioning-rightness minus execution-feasibility-doubt.
- **Best-fit customer choice confidence: 4/10.** This is a hypothesis
  encoded in case `customer_profile`, not validated by a single paying
  customer or a single live-problem run by an external operator. The role
  + industry + size + geography cut is positioning-plausible but Mom Test
  rejects it as "founder framing of who the customer should be" rather than
  "customer behavior the founder has observed." The 4 reflects: the
  positioning is internally consistent; the demand-evidence is zero.

**Three facts that, if known, would change this analysis:**

1. *Active-install count and end-to-end completion rate.* If 200 people have
   installed the skill and 15 have run an end-to-end synthesis on a live
   GTM problem of their own, the Best-Fit Customer hypothesis becomes
   testable instead of asserted. Right now this metric is unmeasured — that
   gap is itself the most important signal.
2. *Number of independently-authored cases (not authored by the gtmstack
   author).* Right now it's zero. If three external operators have authored
   cases for live problems they faced, the multi-book-convergence value
   theme has independent confirmation. Without that, the value theme is
   founder-graded homework.
3. *Whether any of the "I'd run this next week" / "we'd pay for it"
   anecdotal mentions converted to a live-problem run, an introduction to
   a colleague, or a pricing inquiry.* Currently zero of three. By Mom Test
   logic, polite interest that does not survive a commitment ladder is
   noise, not signal. If even one converted, the Best-Fit Customer
   confidence climbs from 4 to 7.

**Verdict (the honest Dunford diagnosis on this self-diagnostic case):** The
positioning is internally coherent. The structural attributes are real. The
category choice is shape-correct. The positioning statement is tight enough
to exclude named alternatives. *And none of that is the bottleneck.* The
bottleneck is that no customer has paid, no external operator has run
gtmstack on a live problem, and the author has 10-15 hours/week to evangelize
a niche subcategory that requires sustained category-creation work. The
right next move is not better positioning. It is converting one of the
"I'd run this next week" mentions into an actual live-problem run by an
operator who is not the author — the cheapest possible Mom Test commitment
test. Until that happens, this entire positioning analysis is reasoning
about a frame the market has not yet voted on.
