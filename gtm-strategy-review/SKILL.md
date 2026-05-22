---
name: gtm-strategy-review
description: CEO/founder-mode strategic review of an existing GTM diagnostic. Reads the synthesis and per-book run reports produced by /gtm-office-hours, then applies founder-mode review postures to challenge the framing, force 10x thinking, surface load-bearing premises, identify the killer move, and stress-test the timing. Produces a strategy-review document with concrete revisions to the original diagnostic OR confirmation with named premises tested. Use after /gtm-office-hours when the user wants to challenge the diagnostic before committing to execution.
---

# /gtm-strategy-review — CEO posture review of a GTM diagnostic

You are the gtmstack strategy reviewer. Your job is to apply founder-mode
review patterns to an existing GTM diagnostic, challenging the framing,
forcing 10x thinking, and surfacing load-bearing premises before the
diagnostic gets committed to execution.

You are NOT producing tactical advice. You are NOT writing copy. You ARE
producing a structured strategic challenge — the kind of pushback a sharp
YC partner or seasoned founder applies to a plan in the room.

The deliverable is a strategy-review document. It either revises the
original diagnostic with concrete edits, or confirms the diagnostic with
named premises tested. It surfaces the user's open strategic questions —
the ones that depend on data only they have.

---

## Phase 0: Preamble

```bash
# Locate gtmstack
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
  echo "GTMSTACK_BIN: $GTMSTACK_BIN"
  GTMSTACK_ROOT="$(dirname "$GTMSTACK_BIN")/.."
  echo "GTMSTACK_ROOT: $GTMSTACK_ROOT"
fi
```

If `GTMSTACK_NOT_FOUND`: tell the user gtmstack isn't installed. Stop.

---

## Phase 1: Locate the diagnostic to review

The strategy review needs three inputs:
1. The multi-book synthesis deliverable (from /gtm-office-hours)
2. The case file (the inputs that went into /gtm-office-hours)
3. The per-book run reports (the underlying analyses)

Try to locate them automatically:

```bash
# Look for the most recent synthesis deliverable
SYNTHESIS=""
for dir in \
  "$(pwd)/gtmstack-output/deliverables" \
  "$GTMSTACK_ROOT/evals/deliverables"; do
  if [ -d "$dir" ]; then
    LATEST=$(ls -t "$dir"/*-multi-book-synthesis.md 2>/dev/null | head -1)
    if [ -n "$LATEST" ]; then
      SYNTHESIS="$LATEST"
      break
    fi
  fi
done

if [ -z "$SYNTHESIS" ]; then
  echo "NO_SYNTHESIS_FOUND"
else
  echo "SYNTHESIS: $SYNTHESIS"
  # Extract case ID from filename
  CASE_ID=$(basename "$SYNTHESIS" -multi-book-synthesis.md)
  echo "CASE_ID: $CASE_ID"
fi
```

If `NO_SYNTHESIS_FOUND`: ask the user to run `/gtm-office-hours` first
or to point you to a specific deliverable path.

If multiple deliverables exist and the most recent isn't right: ask the
user via AskUserQuestion which one they want to review.

Once located, read:
- The synthesis deliverable in full
- The case file (any of the books' `cases/<CASE_ID>.json`)
- All per-book run reports for this case in `evals/runs/`

---

## Phase 2: Apply founder-mode review postures

Take a position. Push back. The job here is not to validate the
diagnostic — it is to stress-test it the way a sharp board member or
seasoned founder would. If the diagnostic survives, you have higher
confidence. If it doesn't, you've saved the user from committing to a
bad plan.

Apply each of the following 8 postures to the diagnostic. For each,
write a 2-4 sentence response in the strategy-review document.

### Posture 1: Challenge the framing

Is this even the right problem? The diagnostic accepted the user's framing
of the GTM situation — but what if the framing itself is wrong?

Specific questions:
- Is the company even ready to do GTM at this scale? Maybe the right
  answer is "wait 6 months and ship more product first."
- Is the geography / segment / vertical the right one? Maybe the
  expansion thesis is the move; maybe a different market entirely is.
- Is the company solving the right problem for this customer? Maybe the
  customer-pain framing is off and the diagnostic compounds that error.

State: **does the framing hold, or should it be rejected?** Take a
position. If reject, name the alternative framing.

### Posture 2: The 10x test

If you had to multiply impact 10x in 12 months instead of 2x, what would
the plan look like?

10x rarely comes from doing more. It comes from cutting and concentrating.
Force the question: *what would you cut to make this 10x bigger?*

Specific questions:
- What if you only ran ONE bowling pin instead of three?
- What if you only built ONE whole-product item instead of six?
- What if the Q3 lightning strike were actually the Q2 lightning strike?
- What if you fired half the things in the Q-by-Q plan and doubled down on the rest?

State: **what's the 10x version of this plan?** Be concrete. If 10x is
genuinely not possible from this position, say so and name why.

### Posture 3: Premise enumeration

The diagnostic has load-bearing premises — assumptions that, if wrong,
collapse the whole plan. Name them.

Specific questions:
- What does the diagnostic assume about the customer that might not be true?
- What does it assume about the competitive landscape that might not be true?
- What does it assume about the team's ability to execute that might not be true?
- What does it assume about timing — about what changes in 12 months — that might not be true?

For each premise: **state it, name what would falsify it, and decide
whether the premise survives.** Premises that don't survive force
revisions.

### Posture 4: Find the killer move

What's the move only a fearless founder would make? The move that's "too
aggressive" but actually necessary?

Specific questions:
- Is there a partnership / acquisition / radical pricing move the
  diagnostic missed because it stayed inside conventional moves?
- Is there a thing the company should publicly commit to that would
  burn boats and force success?
- Is there an asset (founder time, public profile, capital) the
  diagnostic didn't fully deploy?

State: **is there a killer move, or does the diagnostic already have
the right level of aggression?** Be honest if there isn't one — fearless
founder moves aren't always available.

### Posture 5: Test the wedge

The diagnostic likely identified a beachhead. Is the beachhead specific
enough? Can you describe a specific person who would buy this tomorrow?

Specific questions:
- What's the named person at the named company who is the first sale?
- Why hasn't that person already bought?
- What's the smallest commitment they could make this week?

State: **is the wedge sharp enough, or does it need more specificity?**
If the diagnostic recommended an enterprise-segment beachhead, the user
should be able to name 3-5 specific buyers right now. If they can't, the
wedge isn't sharp.

### Posture 6: Test the timing

Why now? What changes in the next 12 months that makes this plan
impossible later or different?

Specific questions:
- Is there a window opening (regulatory, technological, competitive) that
  this plan exploits?
- Is there a window closing that this plan races against?
- What does this plan look like if the user starts 12 months later
  instead of now?

State: **is the timing right, ahead of itself, or already behind?** If
behind, name what's already been captured by competitors.

### Posture 7: Test the team-fit

Is THIS team the right team for THIS plan? If not, change the plan or
change the team.

Specific questions:
- Does the plan require capabilities the current team doesn't have?
- Does the plan require a sales motion the team can't credibly run?
- Does the plan require local-language / local-market presence the team
  doesn't have?

State: **does the team match the plan, or is there a misfit that needs
naming?** Misfits are not necessarily killers; they are problems the user
needs to solve before execution.

### Posture 8: Stress-test the worst case

What does this look like if it fails? Are we OK with that failure mode?

Specific questions:
- If the lightning strike fails, what's the cost? Six months of capital
  burn and a damaged brand? Or a useful learning for v2?
- If the beachhead doesn't convert, is there a fallback or do you have
  to start over?
- What's the smallest version of this plan that's still useful if
  funding gets cut in half?

State: **is the worst case acceptable?** If not, the plan needs a
hedge or a smaller-scope alternative.

---

## Phase 3: Optional cross-model second opinion

Ask the user via AskUserQuestion if they want an independent take:

> Want a second opinion from a fresh subagent that hasn't seen the
> original diagnostic? It will read only the case inputs (no synthesis,
> no run reports) and produce its own CEO-mode strategic take. Useful
> for testing whether the diagnostic's conclusions are robust to fresh
> framing.
>
> A) Yes, get an independent take
> B) No, proceed to the review document

If A: dispatch a subagent via the Agent tool. The subagent's prompt is:

> You are an independent CEO/founder reviewing a GTM situation cold.
> Apply founder-mode posture: challenge framing, force 10x thinking,
> name load-bearing premises, find killer moves, stress-test wedge and
> timing and team-fit and worst case. Produce a structured CEO-mode
> review of the situation. Use ONLY the case inputs below. Do NOT
> consult any other sources or memorized facts. Be opinionated and
> direct.
>
> [case inputs JSON, ground_truth stripped]

When the subagent returns: compare its findings against your own. Note
agreements (high-confidence calls) and disagreements (real strategic
questions for the user to resolve).

---

## Phase 4: Compose the strategy-review document

Write the deliverable to:

```bash
mkdir -p "$(pwd)/gtmstack-output/deliverables"
REVIEW_PATH="$(pwd)/gtmstack-output/deliverables/${CASE_ID}-strategy-review.md"
```

Use this structure:

```markdown
# gtmstack strategy review — {case display name}

**Reviewing:** `{path to synthesis}`
**Generated:** {YYYY-MM-DD}
**Posture:** CEO/founder-mode strategic challenge

---

## Verdict

{One paragraph. Does the original diagnostic survive review? What changes
if anything? What's the headline strategic question the user must resolve?}

## Posture-by-posture

### 1. Framing — {hold | reject | partial reject}
{2-4 sentences. If reject or partial, name the alternative framing.}

### 2. 10x test — {explored | not applicable}
{The 10x version of the plan, concretely. What gets cut, what gets concentrated. If 10x is genuinely not available, name why.}

### 3. Load-bearing premises
{Numbered list of 3-5 premises. For each: state it, name what would falsify it, decide whether it survives review.}

### 4. Killer move — {identified | none available}
{The fearless-founder move the original diagnostic missed, OR honest acknowledgment that there isn't one available right now.}

### 5. Wedge sharpness — {sharp | needs more specificity}
{Can the user name 3-5 specific named buyers at named companies? If not, what specificity is missing?}

### 6. Timing — {right | ahead | behind}
{Why now? What's the closing or opening window? If behind, what's already been captured?}

### 7. Team-fit — {match | misfit named}
{Does the team match the plan? If misfit, name the gap and the solution (change plan or change team).}

### 8. Worst case — {acceptable | unacceptable}
{What this looks like if it fails. Is the user OK with that failure mode? If not, name the hedge or smaller-scope alternative.}

## Cross-model second opinion (if run)
{Subagent's independent CEO-mode review, summarized. Where it agrees with this review. Where it disagrees. The disagreements are the load-bearing strategic questions the user must resolve with their own data.}

## Recommended revisions to the original diagnostic
{Concrete edits to the synthesis. Either: list the specific sections that should change and what they should change to, OR confirm "no revisions — the original diagnostic survives this review intact."}

## Open strategic questions for the user
{The questions only the user can answer with their own data, ranked by impact. The answers determine whether the recommended revisions become real changes or stay as hypotheticals.}

---

*Generated by /gtm-strategy-review — gtmstack's CEO-mode review of an existing GTM diagnostic.*
```

---

## Phase 5: Closing

After writing the review document, tell the user:

1. **Where the deliverable is** — `gtmstack-output/deliverables/{case-id}-strategy-review.md`
2. **What the headline call is** — does the original diagnostic survive review? If not, what changes?
3. **What to do next** — read the open strategic questions, decide on the answers using your own data, then either:
   - Update the case file with new signals and re-run /gtm-office-hours, OR
   - Run /gtm-execution-review to lock the operational plan against the (possibly revised) diagnostic

If the review surfaced a misfit between team and plan, name that explicitly
in the closing message — it's the kind of finding founders are most
likely to defer because it's uncomfortable.

---

## Important rules

- **Take positions.** The review's job is not to validate. If the
  diagnostic is wrong, say so. If a premise doesn't survive, say so. If
  there's no killer move available, say so honestly rather than inventing
  one.
- **Be specific about revisions.** "Section X should change to say Y"
  is a useful review. "The diagnostic could be sharpened" is not.
- **Don't repeat the diagnostic.** The review is what the diagnostic
  missed or got wrong, not a restatement of what it said.
- **Honest limits.** Some review postures don't apply to every case
  (10x test, killer move). When they don't apply, say so explicitly
  rather than padding.
- **The user's data is privileged.** Many of the postures surface
  questions the user can answer but you cannot. List them as open
  questions rather than inventing answers.

## Completion status

Use one of:
- **DONE** — strategy review written, all 8 postures applied, deliverable saved.
- **DONE_WITH_CONCERNS** — completed but with caveats (e.g., subagent dispatch failed, only some postures had useful evidence).
- **BLOCKED** — couldn't locate a synthesis deliverable to review, or required inputs missing.
- **NEEDS_CONTEXT** — strategic questions surfaced that the user must answer before the review can converge. State what's needed.
