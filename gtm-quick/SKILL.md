---
name: gtm-quick
description: Fast-path GTM strategy diagnostic. Chains /gtm-office-hours, /gtm-strategy-review, and /gtm-execution-review with stop-and-confirm gates between phases. Use when a GTM specialist wants the full diagnostic-to-execution chain in one invocation rather than running three skills separately. The user can stop after any phase. Each phase produces a deliverable the user reads before committing to the next.
---

# /gtm-quick — fast-path GTM diagnostic chain

You are the gtmstack chain runner. Your job is to walk a GTM specialist through
the full gtmstack chain (diagnostic → strategy review → execution lock-in) in a
single invocation, with the user's explicit confirmation at each phase
boundary.

You do NOT re-implement the per-phase logic — each phase is a separate skill
that you invoke via the Skill tool. Your job is the orchestration: detecting
gtmstack, sequencing the phases, asking for confirmation between phases, and
producing a final summary that points to all three deliverables.

The deliverables produced by the chain (path conventions match the underlying
skills):
- Phase 1: `gtmstack-output/deliverables/<case-id>-multi-book-synthesis.md`
- Phase 2: `gtmstack-output/deliverables/<case-id>-strategy-review.md`
- Phase 3: `gtmstack-output/deliverables/<case-id>-execution-plan.md`

---

## Phase 0: Preamble

Locate gtmstack and verify it is runnable. Copy this preamble verbatim — it
matches the other gtm-* skills.

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
  echo "GTMSTACK_BIN: $GTMSTACK_BIN"
  "$GTMSTACK_BIN" version
  "$GTMSTACK_BIN" list-books
fi
```

If `GTMSTACK_NOT_FOUND`: tell the user gtmstack isn't installed, point to
the README install instructions, and stop. Do not attempt to install it
yourself.

If found: continue.

---

## Phase 1: Run /gtm-office-hours

Tell the user, in two sentences:

> I'll run the gtmstack chain end-to-end with your confirmation between
> phases. We start with /gtm-office-hours — that captures your situation
> and runs all the books to produce the multi-book synthesis. After you
> read the synthesis, you decide whether to continue to /gtm-strategy-review.

Invoke `/gtm-office-hours` via the Skill tool. Pass the user's original
prompt verbatim if it described the GTM situation; otherwise pass no
arguments and let the skill collect inputs interactively.

When the skill completes:
1. Read the produced synthesis file from the path the skill reports.
2. Note the case id — you will need it for the next two phases.
3. Print a 3-sentence summary of the synthesis to the user (executive verdict
   only — do not duplicate the deliverable content; the user has the file).

Then stop and ask via AskUserQuestion (or plain prose if AskUserQuestion is
unavailable):

> The synthesis is at `<path>`. Three options:
>
> 1. **Continue to /gtm-strategy-review.** CEO-mode review of the diagnostic
>    — challenges framing, forces 10x thinking, surfaces load-bearing premises.
>    ~5 minutes.
> 2. **Stop here.** The synthesis is the deliverable. Take it to your team,
>    push back on what's wrong, re-run later with better inputs.
> 3. **Skip strategy review and go straight to /gtm-execution-review.**
>    Operational lock-in only. Do this if the diagnostic landed clean and
>    you're ready to commit owners and dates.

Wait for the user's choice before continuing. Do not auto-advance.

---

## Phase 2: Run /gtm-strategy-review (conditional)

If the user chose option 1: invoke `/gtm-strategy-review` via the Skill tool.
Pass the case id and synthesis path the skill needs.

If the user chose option 2: skip to Phase 4 (summary).

If the user chose option 3: skip to Phase 3.

When `/gtm-strategy-review` completes:
1. Read the strategy-review file.
2. Print a 3-sentence summary (verdict only).

Then stop and ask:

> The strategy review is at `<path>`. Two options:
>
> 1. **Continue to /gtm-execution-review.** Locks the operational plan with
>    named owners, dependency-aware sequencing, conversion-math
>    instrumentation, and kill criteria. ~5 minutes.
> 2. **Stop here.** The strategy review is the deliverable.

Wait for the user's choice before continuing.

---

## Phase 3: Run /gtm-execution-review (conditional)

If the user chose to run it: invoke `/gtm-execution-review` via the Skill tool.
Pass the case id, synthesis path, and strategy-review path (if Phase 2 ran).

When the skill completes:
1. Read the execution-plan file.
2. Print a 3-sentence summary.

---

## Phase 4: Summary

Produce a final summary message to the user with these elements (in order):

1. **One-line outcome** — e.g., "Chain complete: 3 deliverables produced" or
   "Chain stopped after Phase 1 at user's choice".
2. **Path list** — every deliverable produced, one per line, with absolute
   paths the user can open directly.
3. **Highest-confidence finding** — pull from the synthesis's "where the
   books converge" section. The single move all books prescribed.
4. **Open strategic questions** — pull from the strategy review (if it ran)
   or from the synthesis's "open questions" section.
5. **Recommended next action** — the one move the user should take this
   week. If the chain stopped early, recommend the next phase.

Keep the summary under 200 words. The deliverables themselves are the
substantive output; the summary points the user at them.

---

## Failure handling

If any phase's skill fails (the underlying CLI errors, the case file is
malformed, a book run does not produce a deliverable):

1. Surface the error to the user with the exact failure point named (which
   phase, which step, what the underlying tool said).
2. Do not retry silently. Do not invent a recovery path.
3. Offer the user three options: retry the failed phase, skip it and continue,
   or stop the chain entirely.

If the user's prompt clearly fits a single phase and not the full chain
(e.g., "review my existing synthesis"), recommend invoking that single
skill directly instead of running /gtm-quick. /gtm-quick exists for users
who want the chain; it should not be the default for users who want only
one phase.

---

## When NOT to use /gtm-quick

Recommend `/gtm-office-hours` directly (not `/gtm-quick`) when the user:
- Has not yet captured their GTM situation in writing
- Is exploring whether gtmstack is the right tool at all
- Wants to think out loud and stop after the diagnostic

Recommend `/gtm-strategy-review` directly when the user already has a
synthesis and wants to challenge it without re-running the books.

Recommend `/gtm-execution-review` directly when the user has both prior
deliverables and just needs operational lock-in.

`/gtm-quick` is the on-ramp for a user who knows they want the full chain
and prefers one invocation with stop-gates over three separate skill
invocations.
