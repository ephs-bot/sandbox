# gtmstack execution plan — Anthropic, Brazil expansion, Q2 2026

**Reviewing:** `evals/deliverables/anthropic-brazil-2026-multi-book-synthesis.md`
**Reviewing:** `evals/deliverables/anthropic-brazil-2026-strategy-review.md`
**Generated:** 2026-05-01
**Posture:** Engineering-manager-mode operational lock

---

## Verdict

The plan is executable as written **only if** three operational gaps close before Q2 kickoff: the Brazil GM hire, the phased-investment commitment from leadership ($2M / $5M / $10M with named kill criteria), and the build-vs-buy decision (organic or acquisition-led category anchor). Each of these gaps is a critical-path blocker — without them, Q2 foundations stall and Q3 lightning strike fails as a vapor POV. Given the gaps, the plan is *not yet executable*; it becomes executable when the user resolves the three gaps and re-runs this review against the updated plan. The most fragile execution risk is Q2 hire timing: a Brazil GM search typically takes 90-120 days, which means starting the search in Q1 (already in flight) is required to land the hire by mid-Q2. If the search has not started, Q2 foundations will slip into Q3 and the lightning-strike timeline collapses.

## Workstream-by-workstream lock

| # | Workstream | Owner role | Owner exists? | Q | Dependencies | Kill criterion |
|---|---|---|---|---|---|---|
| 1 | Hire Brazil GM | VP People + CRO | hire-in-flight needed | Q2 | None | If GM not signed by end Q2, demote Brazil to AWS-Bedrock-passive-channel for 2026 |
| 2 | Hire Brazil solutions engineer | Brazil GM (or VP Eng if GM not yet hired) | depends on #1 | Q2 | #1 | If SE not in seat by end Q2, no Q3 anchor-customer engineering |
| 3 | Ship LGPD attestation + DPA template | Trust & Compliance + Legal | trust&compliance team exists; Brazil-counsel needed | Q2 | External auditor selected (Q1) | If auditor not engaged by end M5, attestation slips to Q3 |
| 4 | Ship Brazilian data residency commitment (Anthropic-direct) | Cloud + Trust | needs decision authority | Q2 | AWS contract review | If contractually unable to commit by end Q2, downgrade to "AWS Bedrock residency only" |
| 5 | Ship BRL pricing + invoicing | Finance + Sales Ops | finance ops team exists | Q2 | Tax + entity setup | If BRL infrastructure not live by end Q2, deals invoice in USD with documented FX hedge |
| 6 | Ship Portuguese product surface (pt-BR prompts, model card, trust center, Portuguese collateral) | Product + Marketing | content team exists | Q2 | Native Portuguese reviewer hire | If Portuguese trust center not live by end Q2, lightning strike has vapor-POV risk |
| 7 | Crystallize "regulated frontier AI" POV publicly via founder essay | CEO + Comms | CEO writes; comms publishes | Q2 (essay drafted) / Q3 (publishes on strike day) | None blocking; review by founder | If POV essay fails uncomfortable test (excludes Microsoft/Google narrative), founder rewrites; do NOT publish vapor POV |
| 8 | Land 1-2 anchor Brazilian fintech reference customers | Brazil GM + warm-intro path through investors / AWS / contact's relationships | depends on #1 | Q3 | #1, #5, #6 | If no anchor signed by end Q3 strike day, NO-GO on lightning strike |
| 9 | Conference keynote at Web Summit Rio AND Febraban Tech | Brazil GM + Founder + Comms | Brazil GM owns logistics | Q3 | #1, #7, #8 | If neither conference confirms keynote slot by end Q2, downgrade to booth+panel presence |
| 10 | Named Brazilian SI partnership (Stefanini / TOTVS / CI&T) | Partnerships + Brazil GM | partnerships team exists | Q3 | #1 | If no partnership signed by end Q3, defer enterprise pursuit to 2027 |
| 11 | Q3 lightning strike (coordinated launch day) | Brazil GM + CEO + Comms + PR | full team needs to be in seat | Q3 strike day | #3, #4, #5, #6, #7, #8 | If any of #3-#8 incomplete 2 weeks before strike day, NO-GO; reschedule |
| 12 | Q3 narrow Spears pilot to fintech engineering leadership | Brazil GM + 1 SDR (hired Q3) + Brazil SE | depends on #1, #2 | Q3 | #1, #2, #6, #8 (anchor reference) | If response rate <4% for 3 consecutive weeks, kill SDR; revert to AE-led warm intros |
| 13 | Q4 conditional enterprise motion (incumbent banks) | Brazil GM | depends on Q3 outcomes | Q4 | #11 lightning strike landed, #12 conversion math hit Ross's ranges | Build only if at least one Brazilian bank standardized on a frontier LLM in production by end Q3 |
| 14 | Q4 govern the category (defend POV against drift) | CEO + Comms + Brazil GM | full team | Q4 | #11 | If POV drift detected (default-category language returning to surfaces), surface drift fix to CEO within 7 days |

## Critical path

**Hire Brazil GM (W1) → Brazil GM hires SE + recruits anchor customer warm intros (W2-W3) → SE engineers anchor customer pilot (W3-W4) → Anchor signs reference agreement (Q3, depends on #6 Portuguese collateral) → Lightning strike fires (Q3 strike day, depends on #3-#8 all green).**

The single weakest link in this chain is **the Brazil GM hire**. A 90-120 day search means the hire must already be in flight by Q1 to land by mid-Q2. If the search has not started by the time this plan locks, Q2 foundations slip into Q3, Q3 lightning strike slips into Q4, Q4 enterprise motion becomes conditional on Q4 strike landing, and the whole 2026 plan becomes a 2027 plan.

**Recommended action:** start the Brazil GM search this week, regardless of which path (organic or acquisition) the user picks for the build-vs-buy decision. Both paths require a Brazil GM.

## Role-specialization audit

Per Predictable Revenue:

- **Workstream 1 (Brazil GM)** — needs to be a closer profile, not a generalist Country Manager who prospects + closes + farms. Risk: Anthropic's hiring instinct may push toward "Country Manager owns the whole region." That's the canonical Ross failure mode. **Recommendation:** spec the role as VP / Director of Sales Brazil with named accountability for new ARR, NOT a generalist Country Manager.
- **Workstream 2 (Solutions Engineer)** — pre-sales engineering, NOT also customer success. SE owns winning the pilot; CSM owns expansion. **Recommendation:** plan to add a separate CSM hire in Q4 once anchor customer expands.
- **Workstream 12 (Q3 SDR)** — must be SDR-only (prospecting + qualification). Must NOT also close. AE function should already be in place via Brazil GM (or a hired AE in Q3). **Recommendation:** if budget pressures push toward "GM does prospecting too," reject. SDR + AE separation is non-negotiable.

No role confusion in the current plan. Risk lives in *future* hiring decisions if budget pressure or timeline pressure rationalizes role-mixing.

## Conversion-math instrumentation

| Motion | Ratio | Target range | Dashboard | Course-correction threshold |
|---|---|---|---|---|
| Q3 narrow Spears (fintech VP Eng) | Email response rate | 8-12% | Salesforce + custom outbound dashboard | Below 4% for 3 consecutive weeks: kill ICP, re-evaluate |
| Q3 narrow Spears | Response → qualified opp | 15-25% | Salesforce | Below 10% for 4 weeks: SDR over-promising; review messaging |
| Q3 narrow Spears | Qualified opp → close | 12-20% (Brazil-discounted from Ross's 15-30%) | Salesforce | Below 8% for 8 weeks: product gap or buyer-role wrong |
| Q3 anchor customer pilot | Pilot → production conversion | 1 of 1 (anchor must convert, this is binary) | Manual track in CRM | If anchor stalls past 60-day pilot, escalate to CEO |
| AWS Bedrock channel | Bedrock-mediated Brazil ARR | 2-3x growth Q-over-Q in 2026 | AWS partner dashboard | Below 1.5x growth: investigate channel friction |
| Conference attribution | Conference-attributed pipeline | $2M+ from Web Summit Rio + Febraban Tech combined | Pipeline source-tagging | Below $500K: conferences are vanity; cut budget for 2027 |

**Instrumentation gaps to close in Q2 (before any motion runs):**
- Brazil-specific account telemetry instrumented (Bedrock + Anthropic-direct visibility)
- Pipeline source-tagging by Brazil channel (referral / Bedrock / outbound / inbound / conference)
- Pilot-to-production stage in CRM with explicit triggers and timestamps

Without instrumentation, Q3 will report pipeline as a number without ratios — that's the predictability gap Predictable Revenue's framework explicitly warns against.

## Ramp-down decisions

These are the hardest. Surface explicitly:

1. **Defer F500 IT-led pursuit until 2027.** Inbound F500 IT inquiries become yellow lights, not green. This means actively *declining* meetings with named F500 IT prospects in 2026, even when the team's instinct is "we should take every meeting." Owner: Brazil GM.
2. **Defer public sector / SOE pursuit until 2027.** No proactive RFP responses from Petrobras, Caixa, BNDES. If inbound, redirect to "we'll re-engage in 2027 when our Brazilian sovereign-AI offering ships." Owner: Brazil GM + Comms.
3. **Defer multi-IDE / non-code surface expansion** (from the original expansion thesis) **until at least mid-2027.** Pick ONE adjacent product surface to win first; expansion thesis surfaces #2-4 wait. Owner: CEO + Product.
4. **Defer Mexico / Argentina / Colombia LATAM expansion until Brazil pilot-to-production conversion is proven.** No parallel LATAM hiring or local-market investment in 2026. Owner: CEO.
5. **Decline Brazil business-unit-level deals through Stefanini/TOTVS/CI&T services contracts** until SI partnerships are formal and Anthropic-direct sales motion is established. Don't be a model option inside someone else's services contract. Owner: Partnerships.

These ramp-downs are the most likely to be eroded under quarterly revenue pressure. Surface them as named decisions the leadership team has agreed to, not as default behavior.

## Ramp-up decisions

| Resource | Cost range (USD) | Decision authority | Timing |
|---|---|---|---|
| Brazil GM (closer profile, banking-domain) | $400K-$600K total comp | CRO + CEO | Q1 search start, Q2 hire close |
| Brazil Solutions Engineer (Portuguese, banking-domain) | $250K-$350K | Brazil GM + VP Eng | Q2 hire |
| Brazil SDR (Q3 hire) | $150K-$200K | Brazil GM | Q3, contingent on anchor reference signed |
| External auditor for LGPD attestation | $50K-$150K | Trust & Compliance | Q1 selection |
| Local Brazilian counsel | $20K-$50K | Legal | Q1 engagement |
| São Paulo office (small, GM + SE seat + meeting space) | $50K-$100K/yr | Operations | Q2 |
| Web Summit Rio + Febraban Tech sponsorship + booth + travel | $200K-$400K | Marketing | Q2 commit, Q3 deploy |
| Native Portuguese reviewer / content lead (contractor or part-time) | $50K-$100K | Marketing | Q2 |
| Brazilian SI partnership (commercial terms) | TBD by partnership | Partnerships + CEO | Q3 |

**Q2 ceiling: $2M.** Q3 ceiling: $5M (phase 2). Q4 ceiling: $10M (phase 3). Phase advancement is *contingent* on prior-phase milestones, per the strategy review's phased-investment framework.

## Operational gaps that block kickoff

These must close before Q2 work starts:

1. **Phased-investment commitment from leadership** with named dollar ceilings and kill criteria at Q2/Q3/Q4 boundaries. Resolution owner: CEO + CFO. Target: by end of Q1.
2. **Build-vs-buy decision** (organic build-out vs. acquisition-led category anchor). Resolution owner: CEO + Board. Target: by end of Q1.
3. **Brazil GM search activation.** A 90-120 day search means the search must already be in motion. If not, Q2 hire is impossible. Resolution owner: VP People + CRO. Target: this week.

If these three gaps don't close by end of Q1, the Q2 plan is fictional and execution will slip.

## Open execution questions

Operational questions only the user's team can resolve:

1. **Who is Anthropic's existing internal champion for Brazil?** Most likely an internal Anthropic champion, but other internal sponsors (CRO, CEO direct interest, Board pressure) shape how aggressively the plan can run.
2. **What's the realistic timeline for the Brazil GM search?** Specific to Anthropic's existing recruiter network in LATAM and the size of the candidate pool.
3. **Has Anthropic engaged Brazilian legal counsel before?** If not, that's a Q1 task that adds 4-8 weeks to LGPD attestation timeline.
4. **What's the incumbent AWS Bedrock contract structure?** Determines whether Anthropic-direct Brazilian residency is a contract amendment or a separate negotiation.
5. **What's the procurement-favored vendor list at the named fintechs?** Some fintechs have approved-vendor lists that take 6-12 months to enter; if Anthropic isn't on them, Q3 anchor-customer signing is harder than expected.

---

*Generated by /gtm-execution-review — gtmstack's engineering-manager-mode operational lock for the Anthropic-Brazil diagnostic.*
