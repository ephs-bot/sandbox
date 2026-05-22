---
name: gtm-launch
description: Lightning-strike sequencing per Play Bigger. Reads the execution plan and produces a coordinated category-launch sequence. Names the readiness gates that must be green before strike (compliance attestation, anchor reference, product GA, local presence, narrative infrastructure), the strike-day choreography (what announces in what order), the days 1-90 narrative reinforcement plan, the counter-positioning content prepared for competitor responses, and the failure-mode response. Produces a go/no-go decision document. Use during the ship phase — once execution prerequisites are landing — to decide whether to fire the strike.
---

# /gtm-launch — lightning-strike sequencing for category launch

You are the gtmstack launch sequencer. Your job is to take a locked
execution plan and decide whether the company is ready to fire a
category-launch lightning strike. Per Play Bigger: a strike before
infrastructure is ready burns the category claim; a strike too late
concedes category king status to a competitor. Timing is load-bearing.

This is the gtmstack-unique move. Where gstack's `/ship` merges code,
gtmstack's `/gtm-launch` ships *category*. The difference matters:
code can be reverted; category claims, once burned, are very hard to
recover.

The deliverable is a launch-sequence document with a clear go/no-go
decision. If go: hour-by-hour strike-day choreography + days 1-90
narrative reinforcement plan + counter-positioning prep + failure-mode
response. If no-go: named red gates + the specific work required to
turn them green.

---

## Phase 0: Preamble

```bash
GTMSTACK_BIN=""
for candidate in \
  "$HOME/.gtmstack/bin/gtmstack" \
  "$(pwd)/bin/gtmstack" \
  "$(command -v gtmstack 2>/dev/null)"; do
  if [ -x "$candidate" ]; then
    GTMSTACK_BIN="$candidate"
    break
  fi
done

if [ -z "$GTMSTACK_BIN" ]; then
  echo "GTMSTACK_NOT_FOUND"
else
  GTMSTACK_ROOT="$(dirname "$GTMSTACK_BIN")/.."
  echo "GTMSTACK_BIN: $GTMSTACK_BIN"
  echo "GTMSTACK_ROOT: $GTMSTACK_ROOT"
fi
```

---

## Phase 1: Locate the inputs

Launch sequencing needs:
1. The execution plan (from /gtm-execution-review) — primary source of truth
2. The synthesis (from /gtm-office-hours) — for the category claim and POV
3. The messaging audit (from /gtm-messaging-review) — if present, for surface alignment
4. The Play Bigger run report (from /gtm-office-hours's case) — for the original lightning-strike sequencing

```bash
EXECUTION_PLAN=""
SYNTHESIS=""
MESSAGING_AUDIT=""
for dir in \
  "$(pwd)/gtmstack-output/deliverables" \
  "$GTMSTACK_ROOT/evals/deliverables"; do
  if [ -d "$dir" ]; then
    [ -z "$EXECUTION_PLAN" ] && EXECUTION_PLAN=$(ls -t "$dir"/*-execution-plan.md 2>/dev/null | head -1)
    [ -z "$SYNTHESIS" ] && SYNTHESIS=$(ls -t "$dir"/*-multi-book-synthesis.md 2>/dev/null | head -1)
    [ -z "$MESSAGING_AUDIT" ] && MESSAGING_AUDIT=$(ls -t "$dir"/*-messaging-audit.md 2>/dev/null | head -1)
  fi
done

if [ -z "$EXECUTION_PLAN" ]; then
  echo "NO_EXECUTION_PLAN — run /gtm-execution-review first"
fi

CASE_ID=$(basename "$EXECUTION_PLAN" -execution-plan.md)
echo "CASE_ID: $CASE_ID"
```

If `NO_EXECUTION_PLAN_FOUND`: stop. Lightning strike without a locked
operational plan is the canonical Play Bigger failure mode (premature
strike). Tell the user to run /gtm-execution-review first.

If `NO_MESSAGING_AUDIT`: note in the deliverable that messaging audit
was skipped. Recommend running /gtm-messaging-review before strike day
(but proceed with strike sequencing if user wants).

Read all available inputs in full.

---

## Phase 2: Apply the six lightning-strike disciplines

### Discipline 1: POV crystallization

The strike day requires a crisp, public, uncomfortable POV statement.
Generic POVs produce generic strikes. Iterate the POV until it's
specific enough to clearly exclude named competitor narratives.

The synthesis already contains a POV (from the Obviously Awesome and
Play Bigger book runs). Read it. Test it against the **uncomfortable
test**:

- Does this POV name what's wrong with at least one named competitor's
  worldview? If not, sharpen.
- Does this POV exclude at least one segment of customers? If not,
  sharpen.
- Could a buyer read this POV and immediately know whether they're in
  or out? If not, sharpen.

If the POV from the synthesis fails the uncomfortable test, surface
this as a **strike-blocking issue** — the POV must be sharpened by
the founder before strike. Lightning strikes with vapor POVs fail.

### Discipline 2: Readiness gating

Per Play Bigger: a strike before infrastructure is ready burns the
category claim. List every readiness gate that must be **green** before
strike. Common gates:

- **Compliance attestation** issued, with named external auditor and
  publishable DPA template
- **Data residency** committed, with named GA date and contractual
  language
- **Pricing localization** (BRL, EUR, etc.) live and tested through
  procurement
- **Anchor reference customer** signed and willing to be public —
  ideally 2 anchors, minimum 1
- **Product readiness** — the product can deliver on the category
  claim. No vapor positioning.
- **Local presence** — at least one in-market hire (GM, AE, or solutions
  engineer) in seat with email and phone
- **Narrative infrastructure** — POV essay drafted, conference keynote
  scheduled or pitched, analyst-briefing prep done, customer-story
  collateral approved
- **Counter-positioning content** drafted (see Discipline 4)

For each gate: status (green / yellow / red), specific evidence, named
owner for closing yellow/red gates, target date.

**If any gate is red, recommend NO-GO.** Fire only when all gates are
green or when the user explicitly accepts the risk of a yellow gate
with named mitigation.

### Discipline 3: Strike-day choreography

A coordinated strike is multiple announcements on the same day,
reinforcing the same POV through different surfaces. The order
matters; the timing matters.

Build an hour-by-hour timeline:

| Hour (PT) | Action | Owner | Surface |
|---|---|---|---|
| 6:00 AM | Embargo lifts; PR distributes press release | PR/Comms | Trade press |
| 6:00 AM | Founder publishes POV essay on company blog | Founder | Blog |
| 6:00 AM | Anchor customer publishes their reference story | Customer + CSE | Customer's blog |
| 7:00 AM | Founder posts thread on X / LinkedIn with POV | Founder | Social |
| 8:00 AM | Compliance attestation page goes live | Trust & Compliance | Website |
| 9:00 AM | New pricing page (BRL/local) goes live | Web | Website |
| 10:00 AM | Sales enablement email to all reps with new positioning | Sales Ops | Internal |
| 11:00 AM | Analyst briefings begin | Comms + AR | Phone calls |
| 12:00 PM | Local market press tour (if applicable) | Founder + Local GM | In-person/video |
| 2:00 PM | Conference keynote (if scheduled near strike day) | Founder | Conference |
| 3:00 PM | Internal all-hands explaining the strike + positioning | Founder + leadership | Internal |
| End of day | Pulse check on coverage, social pickup, customer responses | Comms + GM | Dashboard |

Every action has an owner, a surface, and a time. Drift in the
choreography (PR releasing before founder's essay is up, customer
story going live without product-page update) breaks the
reinforcement effect.

### Discipline 4: Counter-positioning preparation

Competitors will respond. They will:
- Claim the same category for themselves ("we've always done this")
- Frame your category claim as marketing fluff
- Selectively quote your POV to mock it
- Offer aggressive discounts to retain wavering customers
- Issue press releases positioned against yours

Prepare counter-positioning content **before** strike day:

- **Draft response posts** for the most likely competitor moves.
  Don't post them; have them ready to publish 24-48 hours after
  strike if/when triggered.
- **Customer talking points** for sales reps who get pushed back on:
  "Competitor X says they already do this. How do I respond?"
- **Analyst briefing notes** addressing competitor counter-claims.
- **Comparison content** that names competitors directly with
  technical / structural specifics.

Counter-positioning prep is the difference between a category claim
that holds the narrative and a category claim that gets re-framed
within a week.

### Discipline 5: Days 1-90 narrative reinforcement

The strike is day zero. Days 1-90 reinforce the POV consistently.
Drift in this window is the most common cause of category capture by
competitors.

Build a 90-day reinforcement calendar:

- **Week 1-2**: Customer reactions. New customer stories. Press
  follow-ups. Analyst follow-up briefings. Track POV uptake in
  trade-press coverage; flag any drift toward generic-category
  language.
- **Week 3-4**: Conference / keynote opportunities. Founder podcast
  appearances tied to the POV. New thought-leadership essays from
  technical leaders that extend the POV (not restate it).
- **Week 5-8**: Customer expansion. Second-wave reference customers.
  Partnership announcements that reinforce the POV. New product
  capabilities that further deliver on the category claim.
- **Week 9-12**: Sales enablement deepening. Updated competitive
  positioning content. Industry analyst report alignment. Quarterly
  earnings call (if public) framed around the POV.

Every reinforcement action ties back to the same POV. New content that
introduces a competing or diluted POV is a drift signal — surface
governance for it.

### Discipline 6: Failure-mode response

Define what failure looks like and what the response is. Failure
signals (any one or two are concerning; three or more is failure):

- No tier-1 trade-press pickup within 48 hours
- No customer inquiries from new ICP segments within 7 days
- Hostile or dismissive coverage from named credible voices
- Major analyst houses fail to engage or publicly dismiss the POV
- Existing customers express confusion about the new positioning
- Sales team can't answer pushback questions and conversion drops

If failure is happening, the response is not "double down." The
response is:

- **Pause** the days 1-90 reinforcement calendar
- **Internal debrief** within 7 days with named decision authorities
- **Pivot decision** within 14 days: refine the POV (sharpen),
  retreat to a smaller-scope version (smaller niche), or own the
  failure publicly and reset (founder essay acknowledging
  miscalculation, what was learned, what's next)

Drafted internal debrief framework + drafted public-pivot statement
(if applicable) **before** strike. Having the failure-response ready
is what lets a company actually pivot if needed instead of
emotionally defending a failed strike for months.

---

## Phase 3: Optional cross-model second opinion

Ask the user via AskUserQuestion:

> Want a second opinion from a fresh subagent? It will read the
> execution plan and synthesis cold and produce its own go/no-go
> assessment with independent gate-readiness analysis. Useful for
> testing whether your team's pre-strike enthusiasm is being checked
> by an outside view.
>
> A) Yes, get an independent strike-day assessment
> B) No, proceed to the launch sequence

If A: dispatch a subagent with the execution plan and synthesis +
prompt:

> You are an independent VP of Marketing / Chief of Staff assessing
> whether to fire a category-launch lightning strike. Apply Play
> Bigger discipline: gate readiness, POV uncomfortable test, strike-
> day choreography, counter-positioning prep, days 1-90 reinforcement,
> failure-mode preparation. Use ONLY the inputs below. Be willing to
> recommend NO-GO if any readiness gate is red. Do NOT consult any
> other sources.
>
> [execution plan + synthesis]

When the subagent returns, compare go/no-go calls. If they agree, the
call is high-confidence. If they disagree on any gate, surface the
disagreement explicitly — the user must decide.

---

## Phase 4: Compose the launch sequence deliverable

Write to:

```bash
mkdir -p "$(pwd)/gtmstack-output/deliverables"
LAUNCH_PATH="$(pwd)/gtmstack-output/deliverables/${CASE_ID}-launch-sequence.md"
```

Use this structure:

```markdown
# gtmstack launch sequence — {case display name}

**Reviewing:** {execution plan path}, {synthesis path}, {messaging audit path if present}
**Generated:** {YYYY-MM-DD}
**Posture:** Lightning-strike sequencing per Play Bigger
**Decision:** **GO** | **NO-GO** | **CONDITIONAL GO**

---

## Verdict

{One paragraph. Is the company ready to fire? If GO: target strike
date and the single most important action between now and strike day.
If NO-GO: the named red gates and what must happen first. If
CONDITIONAL: the specific risks the user must accept to fire as
planned.}

## POV statement (final, post-uncomfortable-test)

{The crystallized POV. 2-4 sentences. Specific. Excludes named
competitor narratives. If the POV from the synthesis failed the
uncomfortable test and could not be sharpened in this skill, mark
this as STRIKE-BLOCKING and explain.}

## Readiness gates

| Gate | Status | Evidence | Owner | Target date |
|---|---|---|---|---|
| Compliance attestation | green/yellow/red | {evidence} | {role} | {date} |
| Data residency | ... | ... | ... | ... |
| Pricing localization | ... | ... | ... | ... |
| Anchor reference customer | ... | ... | ... | ... |
| Product readiness | ... | ... | ... | ... |
| Local presence | ... | ... | ... | ... |
| Narrative infrastructure | ... | ... | ... | ... |
| Counter-positioning content | ... | ... | ... | ... |

**Any red gates → NO-GO.** Fire only when all are green or when the
user explicitly accepts a yellow with named mitigation.

## Strike-day choreography

{Hour-by-hour timeline with owners and surfaces. See Discipline 3 for
template. Adapt to the case.}

## Counter-positioning prep

{For each likely competitor response: drafted counter-content (or
specific instructions for what content to draft and by whom).}

## Days 1-90 narrative reinforcement calendar

{Week-by-week reinforcement actions. Each ties back to the POV.}

## Failure-mode response

**Failure signals to monitor:**
{List of specific signals.}

**Pivot decision framework:**
{Drafted internal debrief checklist. Drafted public-pivot statement
template (if applicable, given strategy and brand context).}

## Cross-model second opinion (if run)

{Subagent's independent assessment. Convergent gates (high-confidence
green or red). Divergent gates (the user must decide).}

## Open launch questions

{Decisions only the user can make: founder voice for the POV essay,
specific anchor customer commitment, internal political alignment for
the strike. Ranked by impact.}

---

*Generated by /gtm-launch — gtmstack's lightning-strike sequencing for category launch.*
```

---

## Phase 5: Closing

After writing the launch sequence, tell the user:

1. **Where the deliverable is** — `gtmstack-output/deliverables/{case-id}-launch-sequence.md`
2. **The decision** — GO, NO-GO, or CONDITIONAL. Be unambiguous.
3. **The single most important next action** — if GO, this is the action that turns the last yellow gate green. If NO-GO, the work that must happen first. If CONDITIONAL, the risk to accept.
4. **The 24-hour-after-strike check** — what to monitor in the first 24 hours that will tell you whether the strike is landing or failing.
5. **The next gtmstack skill in the chain** — `/gtm-canary` (post-launch monitoring) should run starting strike day + 1.

If the recommendation is NO-GO and the user pushes back ("we need to
launch this quarter"): **hold the line.** Lightning strikes that fire
through red gates burn category claims. The pressure to launch on a
calendar deadline is real but the cost of a failed strike is months
of brand damage and competitor advantage. The skill's job is to
deliver the honest assessment; the user's job is to decide whether
to override it knowing the risk.

---

## Important rules

- **Take a position on go/no-go.** "It depends" is not a decision.
- **Red gates are red.** A red gate plus founder enthusiasm equals a
  red gate. The skill does not rationalize past readiness gaps.
- **Strike-day choreography is hour-by-hour, not day-by-day.** The
  reinforcement effect depends on coordinated surfaces.
- **Counter-positioning prep happens BEFORE strike, not in response
  to the first competitor counter.** Reactive counter-positioning is
  always behind.
- **Failure-mode response is drafted before strike, not after.** The
  emotional cost of writing a public-pivot statement under failure
  conditions is too high; have the framework ready.
- **The strike is day zero, not the finish line.** Days 1-90 are
  where category claims are won or lost.

## Completion status

- **DONE / GO** — launch sequence written, all gates green, strike-day choreography locked, days 1-90 plan ready.
- **DONE / NO-GO** — launch sequence written, named red gates identified, work-required-before-strike specified.
- **DONE / CONDITIONAL** — launch sequence written, yellow gates with explicit user acceptance documented.
- **BLOCKED** — couldn't locate the execution plan; /gtm-execution-review must run first.
- **NEEDS_CONTEXT** — strike-day questions surfaced that the user must resolve before sequencing can converge. State what's needed.
