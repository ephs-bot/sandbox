# Crossing the Chasm — gtmstack-2026 (self-diagnostic)

> Self-diagnostic note: the author of this analysis is also the author of gtmstack, the framework encoding, the prompt, the rubric, the case file, and the judge. Self-grading bias is acknowledged. The analysis below applies Moore's lens to gtmstack with the same severity it would apply to any other case in the repo, including the unflattering parts.

## TALC Stage

**Innovators.** Not Early Adopters. Not "between Innovators and Early Adopters."

The evidence in the inputs:

- Zero paying customers. Open-source under MIT, free, no commercial offering, no pricing page.
- Zero external GitHub issues, zero external pull requests, zero independent installs that have been instrumented.
- One non-paying user — the author — running gtmstack on questions raised in advisory conversations. The case file labels this explicitly as "n=1 use case where the founder is the user. It is not customer evidence; it is dogfooding."
- The two showcase cases (cursor-2026, anthropic-brazil-2026) were authored, run, and judged by the same person who built the framework. The author's own audit calls this "grading their own homework."
- Two-three friend-of-author anecdotes ("I'd run this on our GTM next week," "this is the kind of thing we'd pay for") with zero follow-through. No live-problem run, no introduction to a colleague, no pricing inquiry, no contract.
- LinkedIn posts draw "low hundreds of impressions, single-digit reactions." No conversion to actual usage.

This is the buying motivation of a Tech Enthusiast / Innovator: the thing itself is interesting, the curiosity is real, the "I'd love to try this" reply is sincere — and the commitment ladder ends at "interesting." Moore's Innovator stage is precisely where compliments are free and time is not. gtmstack has compliments. It does not have time.

The Visionary / Early Adopter stage requires at least one buyer who has staked something — political capital, budget, calendar — on the technology delivering competitive advantage. gtmstack has no such buyer. Even the friend who said "we'd pay for this" did not pay for this, did not run it on a live problem, and did not introduce a colleague who would. Polite interest is not visionary commitment.

## Chasm Position

**Before the chasm.** Decisively. Not approaching the chasm. Not in the chasm.

Moore's chasm sits between the visionary segment and the early-majority segment. To be approaching the chasm, a company must first have established and saturated the visionary segment — won enough early adopters that the next pragmatist customer is the bottleneck. gtmstack has not established the visionary segment. It has not won a single visionary customer. The buying motivation observed is exclusively curiosity-led ("this is cool"), not advantage-led ("I will buy this incomplete product because the upside is asymmetric and I'm willing to be the reference").

Calling gtmstack "approaching the chasm" or "in the chasm" would be Moore's central trap in inverse form: confusing zero customers for almost-crossing because the *founder* believes the product is good. Moore's diagnosis here is severe and unflattering: gtmstack is at the leftmost edge of the adoption curve, and the question on the table is not "how do we cross the chasm" but "how do we get our first visionary."

The case file's notes-for-eval explicitly invites this severity: "Treat this as an audit, not a victory lap." The audit says: there is no chasm to cross because the segment that would be on the near side of the chasm does not yet exist for this product.

## Beachhead Recommendation

A beachhead recommendation for a company at the Innovator stage is, strictly speaking, premature in Moore's framework — Moore's beachhead is the segment a visionary-stage company picks to *cross into* the early majority. But the prompt requires a recommendation for before/in-chasm cases, so I'll name the **first-visionary segment** rather than a chasm-crossing beachhead. Naming the wrong concept would be worse than naming a recommendation that is one stage early.

**Recommended first-visionary segment**: solo and 2-3-person founder-led GTM teams at YC-network seed-to-Series-A B2B SaaS startups, where the founder-CEO is doing their own GTM strategy work, has used Claude Code (or a similar AI coding agent) for at least one technical task in the last 30 days, has personally read at least one of the five canonical books gtmstack encodes, and is currently stuck on a named GTM decision (beachhead choice, positioning rewrite, pipeline-build motion, founder-led sales playbook). Specifically: founders the author has direct or one-hop access to via the YC alumni graph and the Garry-Tan-adjacent Claude Code community.

Role-level specificity: the buyer is the founder-CEO (not a head of GTM, not a VP RevOps — those roles barely exist at this stage). The buying authority is the same person as the user is the same person as the budget owner. There is no procurement gate. The "purchase" is a 25-30 minute investment of the founder's calendar, not money.

This is not a chasm-crossing beachhead. It is a first-visionary segment chosen by *what is reachable and falsifiable from a 10-15 hour/week part-time author with no team, no raise, and no outbound capacity* — which is the only honest beachhead given the structural constraints in the case file. A "GTM leads at Series B/C SaaS" recommendation would fail the reachability test the same way the original founder-stated thesis fails it: that ICP is hypothetical, not validated, and the author has no demonstrated channel into it.

## Whole Product Gap

What pragmatist buyers in the recommended segment would refuse to buy without — concrete items only:

1. **A measured first-run completion rate on a live problem the founder owns, not a showcase case.** Currently zero. The case file explicitly says "End-to-end completion rate (skill-invoked → synthesis-document-produced): not measured." A pragmatist at the Series A stage will not invest 25 minutes on the promise of a 25-minute deliverable without evidence the deliverable lands ≥80% of the time on real-world inputs.

2. **At least one named non-author reference customer who ran gtmstack on a live problem they actually faced and is willing to be quoted by name and company.** Currently zero. Friend-of-founder testimonials ("I'd run this next week") that do not convert to actual runs are anti-evidence — they imply the polite-decline pattern is the modal response.

3. **A founder-readable "what you get" deliverable example built from a non-author case.** The two showcase deliverables (cursor-2026, anthropic-brazil-2026) were authored by the same person who wrote the framework, prompt, rubric, AND the case file. A pragmatist reading the README will discount the showcases because the founder graded their own homework. The gap is a deliverable produced from a case file that the prospect supplies.

4. **Telemetry: install count, active-user count, end-to-end completion rate.** None measured. The case file lists this as a known weakness. Without telemetry, the author cannot tell a prospect "the skill works for users like you" with evidence.

5. **A specific commitment-ladder mechanism that converts "this is cool" into "I'll run it on a live problem this week."** Currently absent. LinkedIn posts and README walkthroughs offer no asynchronous low-friction path from interest → commitment.

6. **A 60-second deliverable preview** (loom-walkthrough, screenshot reel, or annotated example) embedded in the README so a founder can decide in 60 seconds whether to invest 25 minutes. Currently the README pitches "~25 minutes from first prompt to deliverable" — this is the *time cost*, not the *value preview*. A pragmatist needs to see what they're going to get before they spend the time.

**Structural reason existing alternatives fail (v1 strict requirement):** Generic AI assistants (ChatGPT, Claude.ai) cannot match gtmstack's value proposition not because they're "worse at GTM" but because they're **architecturally undirected** — a generic assistant has no encoded prescriptive frameworks, no rubric-graded outputs, no convergent multi-book synthesis. The structural property is *prescription*, not *capability*. A generic assistant can answer any GTM question the user knows to ask; gtmstack imposes the question structure (TALC stage, chasm position, beachhead specificity, structural-vs-better differentiation, flip-thresholds) that the user *would not have known to ask*. This is a different epistemic posture, not a quality difference. The structural reason: prescriptive rubrics encoded as runnable evals are absent from generic assistants by design — they are general-purpose, gtmstack is opinionated. A buyer can verify this directly by asking ChatGPT to "apply Crossing the Chasm to my company" and observing that the output is unstructured prose that misses all five v1 strict-mode patterns (structural reason, flip-trigger, non-flagged-mode justification, role-level specificity, whole-product concreteness).

This structural framing is what would justify pricing or paid usage if it were validated. **It has not been validated.** No prospect has compared gtmstack output to generic-assistant output on the same case and reported the gtmstack output is more useful. The structural argument is sound; the demand evidence for the structural argument is zero.

## Bowling Pin Sequence

If the first-visionary segment lands, the bowling pins:

1. **Pin 2 — Series A/B founder-CEOs in the same YC + Claude Code overlap, but one tier larger (10-25-employee companies with a part-time GTM head or a founder still doing their own GTM).** Falls to Pin 1 because: same buyer profile (founder-as-buyer), same channel (YC alumni graph + Claude Code community), same use case (the founder is doing their own GTM strategy work), but with marginally more procurement gating and the start of "I want to share this with my GTM head" social proof loops. Pin 1 references convert the Pin 2 buyer because the Pin 1 founder *is* the Pin 2 buyer one funding round later.

2. **Pin 3 — Heads of GTM / VP RevOps at Series B/C SaaS companies (the founder-stated original ICP).** Falls to Pin 1 + Pin 2 because: by the time the buyer is no longer the founder, the buyer needs to *trust the framework before running it*, and that trust comes from named-founder references at companies the buyer recognizes. The original founder-stated ICP becomes reachable only after the lower-tier reference base is in place. This is the inverse of the founder's instinct — the case file's stated expansion thesis lists Series B/C as the target; Moore says Series B/C is Pin 3, not Pin 1.

3. **Pin 4 — Strategy / GTM consultants who augment their work with structured frameworks.** Falls to Pin 1+2+3 because: by then there is a named-customer base, demonstrable deliverable quality, and a "this is the tool the founders are using" social proof that consultants can ride into client engagements. Consultants at the wrong stage of the bowling-pin sequence (i.e., now) would be a *parallel-pursuit trap* because they don't share the founder-as-user buying motivation; they have a "I sell strategy work, not enable buyers to do strategy work themselves" structural conflict that has to be resolved by reference base, not by feature.

I am explicitly *not* recommending VC portfolio-GTM operators as a bowling pin in this sequence. The case file lists them as a hypothetical ICP, but a portfolio-operator beachhead requires a centralized buying motion (the partner buying for the portfolio) that the inputs give no evidence of.

## Failure Modes Flagged

### Flagged

**Confused TALC stage (strong evidence).** The expansion thesis in the case file ("Get the first 10 external GTM operators running gtmstack on live GTM problems they actually face") presupposes that gtmstack already has visionary traction and the work is to scale it. The actual evidence shows gtmstack is at the Innovator stage with zero visionary commitments. Quote: "GTM leads at Series B/C startups who are stuck on 'we're in the chasm and don't know which beachhead to commit to' will value a multi-book diagnostic in 25 minutes" — this is the founder's hypothesis about a target visionary, stated as fact. The case file flags it as load-bearing and unvalidated, which is honest, but the expansion-thesis framing still assumes the visionary segment exists. Moore: it does not. The work is not "get to 10 operators in the visionary segment" — the work is "get to one."

**Whole product blindness (strong evidence).** The README pitches "~25 minutes from first prompt to deliverable, vs. 3 weeks of strategy consulting at $20K-$50K." This is a value-proposition framing for a product that has no measured first-run completion rate, no named non-author reference, no value preview, no commitment-ladder mechanism, no telemetry. The author's own audit lists these gaps. The case file: "The skill could be perfect; it could be broken; the founder cannot tell from inside." That sentence is the textbook whole-product-blindness signal — the founder believes the core product is enough and the missing pieces are someone else's category of concern. They are not.

**Parallel pursuit (mild-to-moderate evidence).** The case file lists six industries as targets (AI dev tools, SaaS cross-vertical, fintech, frontier AI, early-stage startups, strategy consulting). The expansion thesis names four parallel monetization candidates (hosted version, eval marketplace, custom-book-authoring service, GTM-clinic-as-a-service). The hypothetical ICP names four parallel buyer profiles (GTM leads at Series B/C, founder-CEOs <50 employees, growth/strategy consultants, VC portfolio-GTM operators). None of these is a single-named beachhead. Quote: "GTM leads at Series B/C SaaS or AI dev tools companies who are 'in the chasm' and trying to choose a beachhead; founder-CEOs running their own GTM at <50 employees; growth/strategy consultants augmenting their work with structured frameworks; portfolio-GTM operators at VC firms running clinics for portfolio companies." Four ICPs in one breath. Moore says one.

### Explicitly NOT flagged, with rationale (v1 strict requirement)

**Wrong beachhead — not flagged.** This diagnostic is recommending a first-visionary segment; gtmstack has not committed to a specific beachhead choice in the case file. To flag wrong-beachhead, the inputs would need to show the company *has* picked a named beachhead, *has* committed resources to it, and the inputs *show evidence the choice is poor* (e.g., the segment lacks a named buyer role, the whole product gap is uncloseable, the bowling-pin path is unclear). gtmstack has not committed to any beachhead, so wrong-beachhead is structurally unflaggable here. If the author commits to "Series B/C GTM leads" as a beachhead post-this-analysis without re-validating with prospects, *then* wrong-beachhead becomes flaggable.

**Skipping the bowling pin — not flagged.** This failure mode requires the company to have *already crossed* into the early majority via a beachhead win and then attempted to go horizontal everywhere instead of rolling forward. gtmstack is at the Innovator stage and has not crossed anything. To flag this mode, the inputs would need to show a prior beachhead win (named customer base, references, market position) followed by a horizontal-everywhere expansion plan. Neither precondition is present. This is a stage-mismatch unflaggable, not a missed signal.

## Visionary Growth vs. Crossing

There is no growth in the case file inputs. Revenue: $0. Customer count: zero paying. Install count: not measured. End-to-end completion: not measured. LinkedIn engagement: low hundreds of impressions, single-digit reactions, no conversion.

Per the rubric, "Inputs that show NO growth signal can score this 1.0 by default (N/A)" — but the cleaner answer is: the absence of growth is itself the signal. There is no visionary penetration to confuse for crossing because there is no penetration at all. Any future apparent "growth" the author might observe (LinkedIn post going modestly viral, a star count uptick on the GitHub repo, a Hacker News mention) must be evaluated against the buying-motivation question — does this represent *committed visionary buyers* (someone investing time on a live problem, naming gtmstack as the tool they used, willing to be a reference) or does it represent *Innovator-stage curiosity* (compliments, stars, "this is cool" replies that do not convert to runs)? The case file's framing of "anecdotal mentions" already shows this discipline — "no follow-through has occurred" is the right test.

The future trap to avoid: when the first 5-10 external installs land (and they will, eventually), the author will be tempted to call that "early adoption" or "approaching the chasm." It is not. Five installs without runs on live problems is five Innovator events. Five installs with five runs on live problems and five named-author references would be the first visionary cohort. The distinction is buying motivation, not install count.

## Confidence and Open Questions

- **TALC stage confidence: 9/10.** Innovators. The evidence is overwhelming and convergent — no paying customers, no external issues/PRs, no live-problem runs by anyone who is not the author, no commitment-ladder advancement past polite interest. The 1-point reservation is for the possibility that the case file underrepresents external use that the author cannot see (silent installs running gtmstack productively without surfacing). Even granting that, the buying motivation observed in the LinkedIn surface and friend-anecdote surface is Innovator-stage, not Visionary-stage.

- **Chasm position confidence: 9/10.** Before the chasm. The reservation is identical: silent installs the author can't see could in principle constitute a small visionary cohort, but the author has explicitly stated they have no telemetry to confirm or deny this, and the public surface signals all point to pre-visionary.

### Open questions — facts that would change the analysis

1. **End-to-end completion rate on first-run external installs.** If telemetry were wired up and showed ≥70% of fresh installs complete a full skill-invoked → synthesis-document-produced run on the user's first attempt, the whole-product-gap analysis above would shift — the core product would be closer to "ready" than the audit currently treats it. Below 30% completion, the whole-product gap widens further (the product is not ready for visionaries, and the recommendation flips to "fix the funnel before any beachhead push").

2. **Live-problem-run rate among external users.** Not "did they install" but "did they run gtmstack on a live GTM problem they faced (not a showcase case the author authored), and did the synthesis prescribe a move they would take." If 5+ external operators have done this and report convergent-to-actually-useful, the chasm position upgrades from "before the chasm" to "early visionary segment forming." If zero have done this six months from now despite distribution effort, the diagnosis hardens to "Innovator stage, no visionary segment forming, consider whether the product-market fit hypothesis is wrong rather than the distribution."

3. **Flip-trigger threshold (v1 strict requirement).** **If the next 10 external operators who are invited to run gtmstack on a live problem within 30 days of the invitation produce ≥6 completed runs (where completion = skill invoked → deliverable produced → operator confirms the deliverable prescribed a move they would take), the chasm position shifts from "before the chasm" to "early visionary segment forming, beachhead candidates emerging." If the same 10-operator cohort produces ≤2 completed runs, the diagnosis hardens to "before the chasm, demand-signal hypothesis falsified, recommend pivoting to a different value proposition (gtmstack as personal author tool, not as multi-operator product) or ending the experiment."** The 30-day window matters because the author's part-time constraint (10-15 hr/week) makes longer experiments low-information — the cost of running the experiment exceeds the information value if the cycle exceeds a quarter.

This flip-threshold is the single most important measurement gtmstack does not currently have. The author's stated end-of-2026 decision point ("commercialize or maintain as side project") is the right calendar; the measurement above is the right instrument. Without it, the decision in December 2026 will be made on vibes — and vibes from a founder grading their own homework are exactly the buying-motivation pattern this analysis just diagnosed as Innovator-stage.

---

*Cite: Moore, Geoffrey A.* Crossing the Chasm. *HarperBusiness, 1991.*
