# Play Bigger Diagnostic — gtmstack (2026 self-diagnostic)

> **Reading-frame note.** The case is adversarial-to-inputs: the founder authored
> the books, rubrics, cases, prior deliverables, and now this self-diagnostic.
> By Mom Test logic, every "signal" in the inputs is either dogfooding or
> compliments. The Play Bigger diagnosis below treats founder-framing as
> hypothesis, not evidence, and explicitly distinguishes the two.

---

## Mission-Critical Problem

**Who has it.** A narrow buyer: founder-CEOs and Series B/C GTM leads at AI dev
tools / SaaS companies who are stuck in Crossing-the-Chasm beachhead choice
("we have early adopters but don't know which vertical to commit to") AND who
already use Claude Code. The Claude Code prerequisite is load-bearing — gtmstack
does not run anywhere else. That cuts the addressable population from "all
GTM-stuck founders" to "GTM-stuck founders who are also Claude Code power users."
This intersection has never been sized.

**What they currently call the problem.** Today these buyers call it "we need
GTM advice," "we should hire a fractional CMO," or "should we engage a strategy
firm." The framing is *advisor-shaped*: a human consultant or fractional exec
delivers a deck after 2-6 weeks for $20K-$50K. Some buyers DIY by reading the
canonical books (Moore, Pietri, Ross, Lochhead, Fitzpatrick) but rarely apply
all five rigorously to their own situation; they cherry-pick one frame.

**Why the existing framing is incomplete.** "GTM advice" treats the deliverable
as a one-shot artifact. The structural insight gtmstack would need to be selling
is that GTM strategy is a *runnable evaluation* — you can encode the canonical
frameworks as rubrics, run them against your situation, and get convergent or
divergent diagnoses across multiple lenses in minutes, not weeks. Convergence
across independent frameworks is the signal; the artifact is just the receipt.
**Whether that reframe is actually mission-critical to the buyer is unproven.**
Today's buyers say "GTM is hard" — they have not, in any input cited, said
"I wish my GTM advice were a runnable eval." The mission-critical-problem
*claim* is plausible; the mission-critical-problem *evidence* is absent.

---

## Point of View (POV)

The author's implicit POV (extracted from the README and expansion thesis) is:

1. **The problem.** GTM strategy work today is slow, expensive, opinion-shaped,
   and dependent on a single advisor's framework preference. Founders pay
   $20K-$50K for a deck that reflects whichever book the consultant happens
   to like. They cannot easily run *multiple* canonical frameworks against
   the same situation and see where the lenses converge or diverge.

2. **Why existing solutions structurally fail.**
   - **Strategy consulting (BCG/Bain/McKinsey, fractional CMOs):** Built for
     billable hours, not for repeatable rubric application. Their economics
     require human judgment to be the bottleneck; any framework is a marketing
     device, not a runnable artifact. They cannot ship a $0 self-serve product
     without cannibalizing their own service revenue.
   - **Tactical AI tools (Lavender, Outreach, Default.com, Clay):** Built to
     automate execution (sequences, enrichment, follow-up), not to diagnose
     strategy. Strategic diagnosis requires reading-and-synthesizing canonical
     books; their product surface (CRM-adjacent execution) makes that
     structurally out of scope.
   - **Generic AI assistants (ChatGPT, Claude.ai chat):** Can answer GTM
     questions but don't encode prescriptive frameworks as rubrics with weighted
     scoring and pass/fail thresholds. The judging layer doesn't exist; the
     synthesis-across-books layer doesn't exist; the convergence/divergence
     diagnostic doesn't exist. They produce plausible answers, not graded ones.

3. **The new way of thinking the category requires.** Buyers must accept that
   *strategy can be evaluated like code* — that the canonical books are
   programs, that real GTM situations are inputs, that a synthesis across
   multiple books is a more reliable diagnosis than a single advisor's view,
   and that convergence across independent frameworks is the trustworthy signal
   (not the eloquence of the deliverable). This is a substantive conceptual
   shift, equivalent to "tests can be the spec" in the early TDD era.

### Uncomfortable test (v1 strict)

The POV must name what at least one specific competitor's worldview gets
*structurally* wrong. Naming directly:

- **McKinsey/BCG/Bain get this structurally wrong:** their pricing model
  (~$50K-$500K per engagement) requires the framework to be inseparable from a
  human consultant. They cannot productize a framework as a runnable rubric
  without cannibalizing partner-hour revenue. So the "synthesis across five
  canonical books" deliverable will never come from them, even though their
  partners individually know the books cold.
- **ChatGPT/Claude.ai get this structurally wrong:** chat-mode AI defaults to
  *one synthesized answer*. It optimizes for a coherent reply, not for honest
  divergence across independent rubrics. When you ask Claude.ai "should we
  pivot the beachhead," it produces *an* answer; it does not run five graders
  with named pass/fail thresholds and surface the disagreements. The chat UX
  is structurally hostile to the eval-based diagnostic.
- **Tactical AI tools (Lavender, Outreach) get this structurally wrong:** their
  product is event-shaped (per-email, per-sequence, per-prospect). Strategy
  diagnostics are situation-shaped (per-company, per-quarter). The data model
  doesn't fit; bolting strategy onto an execution tool would be the tail
  wagging the dog.

**POV sharpness — honest assessment.** The POV is *coherent* and *exclusionary*
(the three structural critiques above are real). But it is also *vapor-adjacent*:
the product (gtmstack v0.2, 5 books, ~30 cases, 3 syntheses) cannot yet defend
the claim "strategy can be evaluated like code" against an outside operator.
Until an external user runs gtmstack on a live problem and finds the synthesis
prescriptive (not just descriptive), the POV is the founder's hypothesis, not
the market's recognized category.

---

## Magic Triangle Alignment

| Leg | Current State | Aligned with what category? |
|-----|---------------|------------------------------|
| **Product** | 5 books encoded, ~30 cases, 11+ run reports, 3 multi-book syntheses, v1 strict-mode rubrics, cross-judge mode, public repo. Runs entirely on the user's Claude Code subscription. Open-source MIT. Author-only authored — no external contributors yet. | "Open-source rubric library." Could plausibly support either a developer-tool category OR a strategy-product category. |
| **Company** | One part-time author (~10-15 hrs/week). Not full-time. Not a company. Not raised. No team. No customer success. No outbound. No instrumentation. | "Open-source side project by a strong individual contributor." Aligned with hobbyist / OSS-maintainer posture, NOT with a category-king-defending company. |
| **Category** | Expansion thesis claims "books-as-evals" as a new category. README pitches "$0 vs $20K-$50K consulting" — implicitly competing with strategy-consulting. LinkedIn posts position the author as a builder, not as a category-defining GTM thinker. | Confused. The product hints at a developer category. The pricing comparison hints at a strategy-services category. The author's posture hints at neither. |

**Misalignment is severe and specific.**

- **Product↔Company:** Product is positioned as "high-leverage tool" but
  Company is a 10-15 hrs/week side project. A category claim cannot be
  *defended* on 10-15 hrs/week. Defending a category requires sustained
  outbound, customer success, content infrastructure, analyst engagement —
  work that does not fit alongside a day job. This is the hardest alignment
  problem in the case.
- **Company↔Category:** A category claim ("books-as-evals") requires a
  category-defining *narrative* (book, podcast, conference talk circuit,
  analyst briefings). The author has none of these. LinkedIn posts to a
  small audience are not category infrastructure.
- **Product↔Category:** Product has 5 books and 3 syntheses, all author-
  authored. The "books-as-evals" category implies a *library* of books, a
  *community* of contributors, and *external* cases. None of these exist
  yet. The category claim is ahead of what the product can demonstrate.

**Diagnosis: Magic Triangle is misaligned in two of three legs.** Product
and Category point in roughly the same direction (a new tool-shaped category).
Company points entirely elsewhere (a part-time OSS hobby project). This is
the central strategic problem.

---

## Category Strategy

### The three paths, evaluated against this case's economics

**Path A — Design a new "books-as-evals" category and play for category king.**
- *Economics if it works:* Category king of "books-as-evals" captures the
  76% of value claim. But the category itself is small and adjacent; the
  total-addressable-value of "AI tools that encode canonical books as rubrics"
  is unproven and probably bounded by the size of the GTM-strategy-tool market
  (which is itself small relative to execution-tool categories).
- *Economics if it fails:* Vapor POV. Category claim outpaces product reality
  and company capacity. Author-credibility damage with the small
  startup-founder audience the author has cultivated over years.
- *Why it's wrong here:* The Company leg of the Magic Triangle cannot defend
  a category claim on 10-15 hrs/week. Lightning strike infrastructure (book,
  podcast, conference circuit, customer references, analyst briefings) does
  not exist and cannot be built part-time inside 6-12 months. Premature
  lightning strike is the dominant risk; firing burns the claim for years.

**Path B — Claim a niche subcategory inside an existing category.**
- *Candidate niches:*
  - "Claude Code skill packs for GTM" — niche inside the broader Claude Code
    skill-pack category, where /gstack is the visible category-king proxy.
    Defensible: gtmstack is the GTM-shaped skill pack, gstack is the
    builder-shaped one, no overlap. Total addressable value: bounded by
    Claude Code adoption, but currently growing.
  - "Open-source GTM diagnostic libraries" — niche inside the broader
    AI-augmented strategy tools category. Defensible: the rubric-as-spec
    pattern is genuinely uncommon. Risk: the "category" doesn't exist yet
    as a buyer-recognized frame, so claiming a niche inside it is claiming
    a niche inside vapor.
- *Economics:* Niche-king is structurally better than #2-by-default in a
  bigger category, IF the niche is buyer-recognized. The Claude-Code-skill-pack
  framing has a recognized parent category; the OSS-GTM-diagnostic framing
  does not. Path B-via-skill-pack has plausible economics; Path B-via-strategy
  is reductive.
- *Why it's right here:* The Company leg can plausibly defend a
  "Claude-Code-skill-pack-for-GTM" niche on 10-15 hrs/week. It does not require
  category education from scratch. The existing category is alive; gstack has
  proven there is buyer recognition for "valuable Claude Code skill packs."
  gtmstack inherits the *shape* without competing with the *audience*.

**Path C — Compete for category king status in an existing category.**
- *Which existing category?* "Strategy consulting" (no — gtmstack cannot
  staff partner-hours and the buyer-recognized king is the consulting
  industry itself, ~$300B). "AI strategy assistants" (no — buyer-recognized
  king is ChatGPT and the bundled-distribution moat is unbreachable on
  10-15 hrs/week part-time). "GTM diagnostic tools" (no — category does not
  exist yet as buyer-recognized).
- *Why it's wrong here:* No existing category is in king-transition where
  gtmstack could plausibly leapfrog. The categories where strategy and AI
  intersect are either already king'd by structurally-bigger incumbents
  (ChatGPT, Bain) or vapor.

### Recommendation: **Path B — Niche subcategory: "Claude Code skill pack for GTM."**

### King-vs-niche economics, applied to THIS case (v1 strict)

The case-specific economic argument:

- **King-of-books-as-evals (Path A) is mathematically attractive but
  operationally impossible at 10-15 hrs/week.** Defending category-king status
  requires sustained category-marketing work (Lochhead's Category Pirates podcast
  is a full-time job for three people). The author cannot match. Becoming a
  vapor-king (claiming a category that the company cannot defend) is
  Play Bigger's worst outcome — recovery takes 3-6 years and competitor
  recapture happens fast.
- **King-of-Claude-Code-skill-packs-for-GTM (Path B) is a smaller economic
  prize but a defensible one.** Total addressable value is bounded by Claude
  Code adoption (currently small but growing). Niche-king economics: if
  gtmstack is the named "GTM-shaped skill pack" inside the gstack-shaped
  parent category, it captures most of the value of that niche, even if the
  niche is small. Crucially, this position is defensible on 10-15 hrs/week
  because category education is not required — gstack already established
  the parent category.
- **#3-in-AI-strategy-tools (Path C) is the worst outcome.** ChatGPT and
  Claude.ai already serve the chat-mode strategy use case. Being a worse
  version of them is the default-category trap. Economics: structural #3
  in a king'd category captures <10% of value; structural #1 in a niche
  captures >50% of niche value. The math favors niche.

The choice is *forced* by the Company leg of the Magic Triangle. With a
full-time team and $5M-$10M in funding, Path A would be defensible. Without
those, Path B is the only path with non-vapor economics.

---

## Lightning Strike Sequencing

If the recommendation is Path B (niche subcategory inside the Claude Code
skill-pack category), the lightning strike is *deferred until external
demand evidence exists.* The Mom Test concurrent diagnosis applies here: the
inputs contain no commitment-ladder evidence (no time, no money, no political
capital) from a single external prospect. Firing a category-launch sequence
without external commitment evidence is textbook premature lightning strike.

### Readiness criteria (must ALL be true before lightning strike fires)

1. **5 external operators have run gtmstack on a live GTM problem they face**
   (not a showcase case the author authored). This is the expansion-thesis
   target restated as a strike precondition. Each must produce a written
   debrief: what was prescriptive, what was descriptive, what was wrong.

2. **3 of those 5 operators must independently confirm convergent-diagnosis
   value** — i.e., the 5-book synthesis prescribed a move they would actually
   make, not just a move they would intellectually agree with. This is the
   Mom Test commitment threshold for "load-bearing" demand.

3. **Instrumentation must exist** — install count, active-user count, end-to-end
   completion rate (skill-invoked → synthesis-document-produced). Without these,
   the founder cannot tell whether the skill is broken in production. Strike
   without instrumentation is strike-blind.

4. **Author must commit to ≥30 hrs/week sustained for ≥6 months post-strike**
   OR have a co-founder/team member committing to the same. Defending even a
   niche category claim on 10-15 hrs/week part-time will collapse under
   inbound load if the strike works, and make the strike not work if it
   doesn't. Either way, part-time post-strike is incoherent.

5. **A second author has contributed at least one canonical-book encoding**
   (framework + prompt + rubric + 3 cases passing). This proves the
   "books-as-evals" pattern is reproducible by someone other than the
   founder — the single most important evidence that the *category* exists
   apart from the *founder*.

### Strike failure precondition (v1 strict)

The single most observable signal that would shift the recommendation from
"fire the strike" to "delay the strike":

> **If by 2026-12-31 fewer than 3 external operators have produced written
> debriefs confirming convergent-diagnosis value on live problems, do NOT
> fire the strike.**
>
> Rationale: 3 confirmed prescriptive-value debriefs is the minimum sample
> to distinguish "the synthesis works for the founder" from "the synthesis
> works for the buyer." Firing a category claim with only founder-dogfooding
> as evidence produces vapor POV. Recovery from vapor POV takes 18-36 months
> and forecloses the niche to a faster-moving competitor (an obvious one
> would be a YC-network founder copying the gtmstack repo — MIT license
> permits this — and shipping a hosted version with a real team).

A secondary failure precondition with a measurable threshold:

> **If install count is non-measurable on strike day, delay.** If the founder
> cannot answer "how many people installed gtmstack last week" with a number,
> the founder cannot run a feedback loop on the strike. Strike-blind is
> strike-doomed.

---

## Failure Modes Flagged

| Failure mode | Evidence in inputs | Severity |
|---|---|---|
| **Premature lightning strike** | "Establish 'books-as-evals' as a category" is in the expansion thesis, but zero external operators have validated synthesis quality, install count is unmeasured, no paying customers exist, author is part-time. Firing now is the dominant risk. | **HIGH — central to this diagnosis** |
| **Vapor POV** | The POV "strategy can be evaluated like code" is the founder's hypothesis. The product (5 books, 3 author-authored syntheses, no external operator runs) cannot yet defend it against an outsider. Until external evidence exists, the POV is plausible-but-vapor-adjacent. | **HIGH** |
| **Magic Triangle misalignment** | Product is positioned as a tool, Company is a 10-15 hrs/week side project, Category claim is "new category we will own." Two of three legs are misaligned. Cited evidence: "Author availability: ~10-15 hrs/week part-time. Not a full-time founder. No team. Not raised." vs. "Establish 'books-as-evals' as a category." | **HIGH** |
| **Default category trap** | Partial. The expansion thesis avoids the default-category trap by explicitly claiming a new category. But the README pitch ("~25 minutes vs 3 weeks of strategy consulting at $20K-$50K") implicitly drops gtmstack into the strategy-consulting category. The framing is inconsistent across surfaces. | **MEDIUM** |
| **Better thinking, not different thinking** | Partial. README-style "$0 vs $20K-$50K" is a *better* framing (cheaper, faster, same shape). The synthesis-across-five-books value prop is a *different* framing (rubric-graded multi-lens diagnosis). Both are present. The better-framing risks training buyers to think gtmstack competes on price, not on shape. | **MEDIUM** |
| **#2-by-default** | Implicit. If the founder accepts that gtmstack cannot become category king of "books-as-evals" on 10-15 hrs/week, the temptation is to settle for #2 or #3 in "AI strategy assistants" (ChatGPT et al). Path C in the strategy section names this and rejects it. | **LOW (currently flagged and avoided)** |
| **Marketing drift** | Not yet applicable. There is no marketing surface to drift. Flagging would be premature. | N/A |

---

## Confidence and Open Questions

**POV sharpness confidence: 6/10.** The POV (strategy as runnable eval, with
three structural critiques of competitors) is coherent, exclusionary, and
specific. It loses points because the product cannot yet defend it against
an outside operator — the structural-critique rhetoric is sharper than the
demonstrated product capability. A POV that the buyer has not yet recognized
is by Play Bigger's definition not yet a category.

**Category strategy recommendation confidence: 7/10.** Path B (niche
subcategory: Claude Code skill pack for GTM) is the only path with non-vapor
economics given the Company-leg constraint. The recommendation loses points
because (a) the parent category (Claude Code skill packs) is itself young,
(b) the niche-king position depends on gstack's continued presence as the
parent-category exemplar, and (c) the author's part-time constraint may
collapse even Path B if Claude Code adoption stalls.

### Open questions whose answers would change the analysis

1. **What is the install count and end-to-end completion rate of /gtm-office-hours
   over the last 30 days?** A non-zero, double-digit install count with a
   completion rate above 40% would shift confidence on Path A's feasibility
   upward — would suggest organic demand the founder has not measured. A zero
   install count would lock in Path B (or Path B-but-do-it-better).

2. **How many of the LinkedIn engagement replies ("I'd run this on our GTM
   next week") have actually run gtmstack on a live problem and produced a
   written debrief?** If the answer is ≥3, the strike-failure precondition
   is closer to met than the inputs suggest, and the timeline for Path B's
   strike compresses. If the answer is 0 (the inputs imply this), the
   commitment-ladder gap is the dominant problem and Path B's preconditions
   are not close to met.

3. **Has the author committed to ≥30 hrs/week for at least 6 months in any
   conversation, in writing, with anyone?** This determines whether Path A
   even becomes feasible 12-18 months out. If no such commitment exists or
   is plausible, Path A is structurally foreclosed and the analysis simplifies
   to "Path B and stop debating it."

---

## Executive verdict (Play Bigger lens)

**Do NOT fire a "books-as-evals" category-launch lightning strike.** The product
exists, the POV is coherent, and the failure-mode pattern is recognizable —
but two of three Magic Triangle legs are misaligned, and the most consequential
misalignment (Company at 10-15 hrs/week vs. Category claim that requires a
full-time team) cannot be resolved by writing more documents. Firing the strike
without external operator validation, instrumentation, and a sustained
post-strike commitment produces vapor POV — Play Bigger's worst outcome.

Instead: pursue Path B (niche subcategory: Claude Code skill pack for GTM),
defer the lightning strike until the 5 readiness criteria are met, and treat
the "books-as-evals" framing as the long-game POV that the niche-king position
*earns the right to claim* — not the launch posture from which the category
is born.
