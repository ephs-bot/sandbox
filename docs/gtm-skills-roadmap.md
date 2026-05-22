# gtmstack skills roadmap

The full sequential workflow for gtmstack, modeled on gstack's
think → plan → execute → review → ship → reflect shape.

Each skill is a Claude Code slash command. They chain — each skill's
output is the next skill's input. The artifacts ARE the workflow state.

| Skill | Phase | Status | Primary input | Primary output |
|-------|-------|--------|---------------|----------------|
| `/gtm-office-hours` | Think | **Built** | User's GTM situation (interactive) | `gtmstack-output/deliverables/<case>-multi-book-synthesis.md` |
| `/gtm-strategy-review` | Plan (CEO) | **Built** | The synthesis | `<case>-strategy-review.md` |
| `/gtm-execution-review` | Plan (Eng) | **Built** | Synthesis + strategy review | `<case>-execution-plan.md` |
| `/gtm-messaging-review` | Plan (Design) | Sketched | Synthesis + URLs/files of copy | `<case>-messaging-audit.md` |
| `/gtm-autoplan` | Plan (meta) | Sketched | Synthesis | All three plan reviews + combined report |
| `/gtm-launch` | Ship | **Built** | Execution plan | `<case>-launch-sequence.md` |
| `/gtm-canary` | Test | Sketched | Execution plan + launch sequence | `<case>-canary-dashboard.md` |
| `/gtm-retro` | Reflect | **Built** | Original case + post-launch reality (from user) | `<case>-retro.md` + updated case file |

Below: full sketches of the six unbuilt skills. Each sketch includes
frontmatter, input/output structure, key postures or review patterns,
and the deliverable template. Building any of them is a ~300-500 line
SKILL.md file following the same pattern as `gtm-office-hours` and
`gtm-strategy-review`.

---

## /gtm-execution-review

```yaml
---
name: gtm-execution-review
description: Engineering-manager-mode review of the operational GTM plan. Reads the synthesis from /gtm-office-hours and the strategy review from /gtm-strategy-review, then locks the operational plan with named owners, role-specialization decisions, conversion-math instrumentation, dependency-aware quarter-by-quarter sequencing, and explicit kill criteria. Use after /gtm-strategy-review when the user has resolved the strategic questions and is ready to commit to execution.
---
```

**Posture.** Engineering-manager mode. Move from "is this the right
plan" (CEO) to "can this plan actually run." Lock the operational
details. Surface execution risks before they hit.

**Inputs read.**
- `gtmstack-output/deliverables/<case>-multi-book-synthesis.md`
- `gtmstack-output/deliverables/<case>-strategy-review.md`
- The case file
- Per-book run reports (especially the Predictable Revenue run, which has the operational lens)

**Six review patterns.**

1. **Owner assignment.** Every workstream in the Q-by-Q plan must have
   a named owner role. "Marketing" is not an owner; "VP of Marketing
   with named accountability for the Portuguese trust center" is.
   Surface unassigned workstreams.

2. **Role specialization.** Per Predictable Revenue: SDR/AE/AM split,
   never mix roles. Audit the planned hires for role confusion. Flag
   "Country Manager who does prospecting, closing, and farming" — that's
   the canonical Ross failure mode.

3. **Dependency surfacing.** Every Q3/Q4 step has prerequisites in Q2.
   Surface the dependencies explicitly. Identify the critical-path
   workstream — the one that, if it slips, slips everything.

4. **Conversion-math instrumentation.** Per Predictable Revenue: name
   the ratios to track, name the dashboard or system that reports them,
   name the threshold values that would trigger a course correction.
   "We'll measure pipeline" is not instrumentation.

5. **Kill criteria.** Every workstream gets a kill criterion. "If by
   Q3 we have not landed 1 anchor reference customer, we kill the
   lightning strike and re-evaluate" is a kill criterion. "We'll see
   how it goes" is not. Forces honest stop-loss thinking.

6. **Ramp-down and ramp-up.** What's the company stopping doing to
   make room for this plan? What's the company starting that requires
   net-new resources? Surface the trade-off explicitly.

**Output structure.**

```markdown
# gtmstack execution plan — {case display name}

**Reviewing:** {synthesis path}, {strategy review path}
**Generated:** {date}
**Posture:** Engineering-manager-mode operational lock

## Verdict
{Is the plan executable as-currently-written, or does it have unresolved operational risks? Headline call.}

## Workstream-by-workstream

| Workstream | Owner role | Dependencies | Kill criterion | Books prescribing |
|---|---|---|---|---|
{One row per workstream from the Q-by-Q plan, with owner, dependency chain, and kill criterion explicit.}

## Critical path
{The single workstream chain that, if it slips, slips the entire plan. Named with rationale.}

## Role-specialization audit
{Audit the planned hires against Ross's SDR/AE/AM split. Flag any role confusion. Recommend role separation if needed.}

## Conversion-math instrumentation
{Named ratios to track, named dashboard or system, threshold values for course correction.}

## Ramp-down decisions
{What stops to make room for this plan. The hardest decisions are usually here.}

## Ramp-up decisions
{Net-new resources required. Hires, vendor contracts, capital.}

## Open execution questions
{Operational questions only the user can resolve. Ranked by impact.}
```

---

## /gtm-messaging-review

```yaml
---
name: gtm-messaging-review
description: Designer/positioning-mode review of customer-facing messaging. Reads the diagnostic's category claim and POV, then audits the company's customer-facing surfaces (website, sales decks, one-pagers, content, demos) for consistency with the chosen positioning. Catches POV drift, generic AI-trend claims, default-category language, attribute soup. Produces a surface-by-surface audit with specific revisions. Use during the plan phase — before the lightning strike fires — to ensure messaging matches the strategy.
---
```

**Posture.** Designer/positioning mode. Read every customer-facing
surface against the POV. Where surfaces drift from the POV, the
strategy is being undermined by its own copy.

**Inputs read.**
- `gtmstack-output/deliverables/<case>-multi-book-synthesis.md`
- The user's customer-facing surfaces:
  - Website URLs (homepage, product pages, pricing, about)
  - Sales deck (PDF or slides)
  - One-pager (PDF)
  - Recent content / blog posts (URLs)
  - Demo script (text)
  - Email sequences if any
- Optionally: a screenshot or text dump of any of the above

**Six audit patterns.**

1. **POV drift.** The synthesis identified a category claim and POV. Does
   every customer-facing surface match? Or does the website still say
   "AI coding assistant" while the sales deck says "AI-native code editor"?
   Drift kills positioning slowly.

2. **Default-category language.** Does the messaging use the obvious
   default category ("LLM API," "AI coding tool") instead of the chosen
   non-default category? Audit for default-category language and replace.

3. **Trend slop.** Is "AI" claimed generically? Is "the future of work"
   invoked without specificity? Trend slop is undifferentiated and
   actively harmful when every competitor uses the same trend.

4. **Attribute soup.** Are features listed without value themes? "100K
   context window, multi-modal, agentic, fast" is attribute soup. Each
   attribute needs an outcome it enables.

5. **Best-fit / worst-fit asymmetry.** Does the messaging name who this
   is FOR and who it is NOT FOR? Positioning that doesn't repel anyone
   is description, not positioning.

6. **Competitive-alternative naming.** Does the messaging name the
   competitive alternatives explicitly, including non-obvious ones
   (status quo, manual workflow, "doing nothing")? Or does it pretend
   competition doesn't exist?

**Output structure.**

```markdown
# gtmstack messaging audit — {case display name}

**Reviewing:** {synthesis path} + customer-facing surfaces
**Generated:** {date}
**Posture:** Designer/positioning-mode surface audit

## Verdict
{Does the messaging match the strategy? Where is it drifting? Headline call.}

## Surface-by-surface findings

### Homepage
**URL/file:** {path}
**POV alignment:** {match | drift | wrong category}
**Specific revisions:** {numbered list of concrete edits}

### Product page
{same shape}

### Sales deck
{same shape}

### Recent content
{same shape}

## Drift patterns
{Numbered list of cross-surface drift patterns. "Three different category claims across four surfaces" is a drift pattern.}

## Trend-slop audit
{Specific claims that are generic AI/AGI/future-of-work invocations. List them. Recommend replacements that tie to specific structural attributes.}

## Best-fit / worst-fit asymmetry
{Does the messaging exclude anyone? If not, suggest specific worst-fit language to add.}

## Open messaging questions
{Decisions the user must make — voice, tone, founder-vs-marketing voice, etc.}
```

---

## /gtm-autoplan

```yaml
---
name: gtm-autoplan
description: Meta-skill that runs the full plan-phase review pipeline automatically. Invokes /gtm-strategy-review, /gtm-execution-review, and /gtm-messaging-review in sequence on the same case, then composes a combined report identifying convergent recommendations (do this), divergent ones (decide between these), and the cross-review picture. Use when the user wants the full plan-phase critique without invoking each review individually.
---
```

**Posture.** Meta. Each child skill keeps its own posture; this one
synthesizes across them.

**Inputs read.**
- The most recent synthesis deliverable (from /gtm-office-hours)
- (Triggers the three child skills in sequence)

**Output structure.**

```markdown
# gtmstack autoplan — {case display name}

**Reviews run:** strategy-review, execution-review, messaging-review
**Generated:** {date}

## Convergent recommendations (do this)
{Items where 2 or 3 reviews agree. High-confidence prescriptions.}

## Divergent recommendations (decide between these)
{Items where reviews disagree. The user must choose with their own data.}

## Strategy-review verdict (full)
{Summary of strategy review findings, with link to full document.}

## Execution-review verdict (full)
{Summary, with link.}

## Messaging-review verdict (full)
{Summary, with link.}

## Combined open questions
{The questions only the user can resolve, ranked by impact across all three reviews.}
```

**Implementation note.** /gtm-autoplan sequences child-skill calls and
combines outputs. It can also run them in parallel via the Agent tool
to compress wall-clock time — three subagent dispatches in parallel,
each invoking one of the child skills.

---

## /gtm-launch

```yaml
---
name: gtm-launch
description: Lightning-strike sequencing per Play Bigger. Reads the execution plan and produces a coordinated launch sequence — same-day announcement of category POV + whole-product proof points + anchor reference customer + local presence + thought-leadership. Names the readiness criteria that must be true before strike fires (go/no-go gates), the strike-day choreography (what announces in what order), and the post-strike narrative reinforcement plan. Use during the ship phase — once execution prerequisites are landing — to lock the launch sequence.
---
```

**Posture.** The gtmstack-unique move. This is what gstack's `/ship`
analog DOES NOT do — gstack ships code, gtmstack ships category.

**Inputs read.**
- `gtmstack-output/deliverables/<case>-multi-book-synthesis.md`
- `gtmstack-output/deliverables/<case>-execution-plan.md`
- `gtmstack-output/deliverables/<case>-messaging-audit.md` (if present)

**Six lightning-strike disciplines.**

1. **POV crystallization.** The strike day requires a crisp, public,
   uncomfortable POV statement. Generic POVs produce generic strikes.
   Iterate the POV until it's specific enough to clearly exclude named
   competitor narratives.

2. **Readiness gating.** Per Play Bigger: a strike before infrastructure
   is ready burns the category claim. Name the readiness criteria
   (compliance attestation issued, anchor customer public, product GA,
   local team in seat) and the go/no-go gate. Don't fire if any gate
   is red.

3. **Strike-day choreography.** Same-day coordinated announcement of
   multiple proof points. POV essay published. Anchor customer reference
   live. Compliance attestation announced. Local-presence office opening
   announced. Each piece reinforces the others; the timing is not optional.

4. **Counter-positioning preparation.** Competitors will respond.
   Prepare counter-positioning content for the most likely competitor
   responses. Have it ready to publish 48 hours after strike, not
   reactive.

5. **Post-strike narrative reinforcement.** The strike is day zero.
   Days 1-90 reinforce the POV consistently. Conference keynotes,
   thought-leadership essays, customer stories, partnership
   announcements all tied to the same POV. Drift in this window is
   the most common cause of category capture by competitors.

6. **Failure mode prep.** What does this look like if it fails? Define
   the failure signal (no enterprise inquiries 30 days post-strike, no
   analyst pickup, hostile press response) and the response (pivot to
   smaller-scope strategy, reset POV, own the failure publicly).

**Output structure.**

```markdown
# gtmstack launch sequence — {case display name}

**Reviewing:** {execution plan path} + {synthesis path}
**Generated:** {date}
**Posture:** Lightning-strike sequencing per Play Bigger

## Verdict
{Is the company ready to fire the strike, or are gates still red?}

## Readiness gates
{Named criteria with green/red status. Each gate has a specific test.}

## POV statement (final)
{The crystallized POV. Specific. Uncomfortable. Excludes named competitors.}

## Strike-day choreography
{Hour-by-hour timeline of what announces in what order on strike day.}

## Days 1-90 narrative reinforcement
{Calendar of conference keynotes, essays, customer stories, partnership announcements that reinforce the POV.}

## Counter-positioning prep
{Most-likely-competitor responses + drafted counter-content ready to publish.}

## Failure-mode response
{Failure signals + drafted pivot plan if strike fails.}

## Go/no-go decision
{Final recommendation: fire or wait. With named conditions for re-evaluation if no-go.}
```

---

## /gtm-canary

```yaml
---
name: gtm-canary
description: Post-launch monitoring. Reads the execution plan and launch sequence, defines the metrics dashboard and alert rules that watch the post-launch GTM motion. Names the conversion-math thresholds (per Predictable Revenue) that, when missed, trigger course corrections. Names the messaging-drift signals (per Obviously Awesome and Play Bigger) that indicate POV erosion. Use 0-90 days post-launch to operationalize the monitoring.
---
```

**Posture.** Post-launch dashboard mode. Watch the right metrics; alert
when they drift; recommend course corrections.

**Inputs read.**
- Execution plan
- Launch sequence
- Conversion-math thresholds defined in execution plan

**Five monitoring patterns.**

1. **Conversion-math watching.** Per Ross's ranges: emails-to-response
   (5-15% on tight ICP), responses-to-qualified-opps (10-25%), qualified-
   opps-to-close (15-30%). Alert when the actual ratios miss these
   ranges by more than 20%.

2. **Pilot-to-production conversion.** Per Crossing the Chasm: are
   pilots converting to production at rates that match the chasm
   diagnosis? Track conversion ratio by segment.

3. **Reference customer health.** Per Crossing the Chasm + Play Bigger:
   the anchor reference customer is the load-bearing asset. Alert if
   their usage drops, their employee-stakeholder leaves, or their
   public reference posture changes.

4. **Messaging-drift detection.** Per Obviously Awesome + Play Bigger:
   monitor customer-facing surfaces for POV drift. Auto-flag any
   default-category language that appears in new content.

5. **Win/loss patterns.** Track lost deals against the worst-fit
   diagnosis. If you're losing deals to worst-fit competitors, the
   diagnosis is wrong; if you're losing to best-fit competitors, the
   product is the issue.

**Output structure.**

```markdown
# gtmstack canary dashboard — {case display name}

**Monitoring:** post-launch metrics for {date}
**Generated:** {date}
**Posture:** Post-launch operational watch

## Watched metrics

| Metric | Target range | Threshold for alert | Source |
|---|---|---|---|
{One row per watched metric.}

## Alert rules
{Specific rules. "Alert if response rate <4% for 3 consecutive weeks" is a rule. "Watch performance" is not.}

## Course-correction playbook
{For each metric that misses target: named diagnostic question and named first response.}

## Reference customer health
{Specific checks for the anchor customer.}

## Messaging-drift checks
{Specific patterns to scan customer-facing surfaces for, weekly cadence.}

## Win/loss tracking
{Categories to tag lost deals against. Quarterly review of the pattern.}
```

---

## /gtm-retro

```yaml
---
name: gtm-retro
description: Post-launch retrospective. Compares the original gtmstack diagnostic to what actually happened 60-90 days after launch. Reads the case file, the diagnostic, and the user's actual post-launch data. Surfaces what converged with reality (high-confidence patterns to reuse), what surprised (calibration data for the next diagnostic), and what to update in the case file. Output: retro document + updated case file. Re-running /gtm-office-hours on the same project picks up the smarter signals. The diagnostic compounds.
---
```

**Posture.** Retrospective mode. Honest about what worked and what
didn't. The job is to update the case file, not to defend the original
diagnostic.

**Inputs read.**
- Original case file
- Original diagnostic (synthesis)
- Strategy review and execution plan
- Launch sequence
- User's actual post-launch data (interactive — ask the user)

**Five retrospective patterns.**

1. **Convergent-finding validation.** The diagnostic identified
   high-confidence convergent findings (same beachhead across multiple
   books). Did they hold? Specifically: did the recommended buyer
   actually buy? Did the recommended whole product get accepted? Did
   the wrong-pin diagnosis hold?

2. **Divergent-question resolution.** The diagnostic surfaced strategic
   questions the user had to resolve with their own data. Which way did
   each go? Document the answer for next time.

3. **Surprise inventory.** What happened that the diagnostic did not
   predict? Surprises are the calibration data — the things the books'
   frameworks missed that need to be encoded in the next case file.

4. **Failure-mode review.** Did any of the flagged failure modes
   manifest? Parallel pursuit, premature outbound, vapor POV, magic
   triangle misalignment? If yes, was the alert ignored or did the
   plan adapt?

5. **Update the case file.** The case file represents what the user
   knew at the start. After 60-90 days, the user knows much more.
   Update the signals, the customer profile, the competitive landscape,
   the expansion thesis (if it changed), the named accounts. The
   updated case file is the input to the next /gtm-office-hours run.

**Output structure.**

```markdown
# gtmstack retro — {case display name}

**Retrospective on:** {original synthesis path}
**Days post-launch:** {N}
**Generated:** {date}
**Posture:** Honest reflection, case-file update

## Verdict
{Did the diagnostic hold up? Headline assessment.}

## Convergent findings — what survived
{Per finding: did it hold? With evidence from the user's actual post-launch data.}

## Divergent questions — how they resolved
{Per question: the actual answer + what we learned about the question's importance.}

## Surprises
{Things the diagnostic did not predict. Numbered. Each is calibration data.}

## Failure modes — which manifested
{Per flagged mode: did it manifest? If yes, did the plan respond?}

## Updated case file
{What changes in the case file based on what we learned. Saved to a versioned copy.}

## Next /gtm-office-hours run
{Recommendation for re-running the diagnostic with the updated case file. What questions to focus on.}
```

---

## How they chain — full workflow

```
Week 1:  /gtm-office-hours          → diagnostic.md (4-book synthesis)
Week 1:  /gtm-strategy-review       → strategy-review.md (CEO challenge)
Week 1:  /gtm-execution-review      → execution-plan.md (locked ops)
Week 2:  /gtm-messaging-review      → messaging-audit.md (positioning audit)
Week 2:  /gtm-autoplan              → combined-review.md (or skip if individual reviews already run)
Week 3-7: Build the whole product (LGPD, BRL, Portuguese, anchor customer — actual work)
Week 8:  /gtm-launch                → launch-sequence.md (lightning strike day)
Week 9:  Execute lightning strike
Week 9:  /gtm-canary                → canary-dashboard.md (post-launch monitoring)
Week 12: 30-day check-in via /gtm-canary
Week 16: 60-day check-in via /gtm-canary
Week 16: /gtm-retro                 → retro.md + updated case file
Week 17: /gtm-office-hours          → re-run with updated signals (compounds)
```

That's a full GTM cycle in ~16 weeks, with gtmstack as the structured-
thinking layer at every gate. The diagnostic on the second run benefits
from the first run's calibration data — books-as-evals compounds.

---

## Build order

1. **Built**: `/gtm-office-hours`, `/gtm-strategy-review`
2. **Next** (highest leverage): `/gtm-execution-review` — completes the plan-phase trio
3. **Then**: `/gtm-launch` — the gtmstack-unique move that no competitor has
4. **Then**: `/gtm-retro` — closes the loop, makes diagnostics compound
5. **Then**: `/gtm-messaging-review` — useful but specific to certain expansion types
6. **Then**: `/gtm-autoplan` — depends on the others; ship last
7. **Then**: `/gtm-canary` — useful but only after the user runs gtmstack on a live launch

Each is a 300-500 line SKILL.md following the same pattern as the two
already built. Ship them as user demand surfaces from the LinkedIn
campaign and the Anthropic-Brazil DM.
