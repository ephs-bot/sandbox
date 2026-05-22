# Framework: Predictable Revenue (Aaron Ross with Marylou Tyler)

> Source: Ross, Aaron and Marylou Tyler. *Predictable Revenue.* PebbleStorm,
> 2011. This file summarizes the analytical lens in our own words for the
> purpose of building runnable evals. It does not reproduce Ross's prose. Cite
> the book.

## The lens, in one paragraph

Ross's claim is that revenue can be made predictable by building a sales
*machine* — clearly defined Ideal Customer Profile, clearly specialized roles,
clearly distinguished lead sources, and clearly measured conversion math —
rather than by relying on founder hustle or sales-team heroics. The signature
move is *Cold Calling 2.0*: outbound prospecting that doesn't actually use cold
calling. Instead, lightly personalized email is sent to a tight ICP, replies
get qualified by a specialized SDR, and qualified opportunities get handed to
an AE who closes. The machine is built on three load-bearing decisions: who
qualifies as ICP, which roles do which work, and which lead sources fund the
pipeline.

## The three load-bearing decisions

### Decision 1: Ideal Customer Profile (ICP)

A real ICP is not "SMBs" or "tech companies." It is a tight combination of
firmographics (industry, size band, revenue tier), behavioral signals (tech
stack, hiring posture, recent funding), and a triggering event (new VP, new
funding round, regulatory change, public competitor announcement). The triggering
event is what converts an ICP from "people who *could* buy" to "people who
*will* respond *now*." Without a trigger, outbound is spray-and-pray.

### Decision 2: Role specialization

Three roles, three different jobs, do not mix:

| Role | Job | Compensation tied to |
|------|-----|---------------------|
| **SDR** (Sales Development Rep) | Outbound prospecting + reply qualification | Qualified opportunities created |
| **AE** (Account Executive) | Closing qualified opportunities | New ARR closed |
| **AM** (Account Manager / CSM) | Post-sale farming, expansion, renewal | Retention + expansion ARR |

The most common failure mode is a single rep doing two of these jobs at once
("AE does their own prospecting because pipeline is thin," "AM is closing
expansion because the AE is too busy"). When roles mix, the math breaks: the
hunting role gets distracted by closing, closing gets distracted by farming,
and the SDR layer that creates predictable pipeline never gets built. Founders
doing all three is the same problem with the founder's name on it.

### Decision 3: Lead source mix — Seeds, Nets, Spears

Three categorically different lead sources, each requiring a different team and
a different math:

- **Seeds** — referrals, word-of-mouth, customer success outcomes. Highest
  conversion, slowest to scale. Owned by AM/CS function.
- **Nets** — inbound marketing (content, SEO, paid ads, events). Volume-
  driven. Owned by Marketing + SDRs.
- **Spears** — outbound prospecting (Cold Calling 2.0). Predictable pipeline
  generation when ICP and trigger are tight. Owned by SDRs.

Most early-stage companies have Seeds (their first customers came from
referrals) and primitive Nets (a website, a blog) and no Spears at all. The
Predictable Revenue thesis is: when Seeds plateau and Nets don't scale to fill
the pipeline gap, Spears are the lever that creates predictable, repeatable
revenue. The book's central claim is that Spears done well — Cold Calling 2.0
— is much higher-leverage than founders / AEs assume because the conventional
"cold calling is dead" wisdom mistakes the *channel* (phone) for the *motion*
(targeted outbound to a tight ICP).

## When NOT to apply Spears

This is where the framework is most often misread. Predictable Revenue does
not say *every* company should run outbound *now*. It says outbound is the
predictable lever, and identifies the conditions under which it pays off.
Outbound is the wrong move when:

1. **Product-market fit is not yet established.** Outbound to an unproven ICP
   produces noise, burns the ICP list with bad-fit pitches, and obscures
   whether replies are signal or compliance.
2. **The ICP is not yet defined tightly enough to write specific subject
   lines.** "We sell to SMBs" cannot produce Cold Calling 2.0 emails that get
   replies.
3. **Seeds and Nets are still scaling fast.** When inbound and referral demand
   exceeds capacity to close, adding outbound dilutes attention without adding
   marginal revenue.
4. **Self-serve product-led growth is producing the right buyers cheaply.**
   When the buyer signs up, swipes a credit card, and onboards without sales
   touch, outbound competes with the existing motion rather than complementing
   it.
5. **The ACV is too low to support the cost of outbound.** Cold Calling 2.0
   email is cheap, but qualified-conversation cycles take SDR time. Below ~5K
   ACV, the economics rarely work without scale.

A correct Predictable Revenue analysis on a company in any of these conditions
should *decline outbound for now* and prescribe instead the conditions that
must be true before outbound becomes the right next move.

## Conversion math (predictability comes from numbers)

Ross's framework asserts that pipeline can be predictable when the conversion
ratios are observed and stable:

- Outbound emails sent → response rate (typical: 5-15% on a tight ICP, near 0%
  on a loose one).
- Responses → qualified opportunities (typical: 10-25%).
- Qualified opportunities → closed/won (typical: 15-30% in B2B SaaS).

These ratios let a company forward-cast revenue from current pipeline math.
The act of *measuring* them is itself the predictability — most early-stage
companies cannot answer the question "how many outbound emails do we need to
send to close one new logo this quarter," and that gap is the predictability
gap the framework addresses.

## Common failure modes (what this eval should catch)

- **Founder doing sales** — doesn't scale; founder is the bottleneck on every
  deal; SDR / AE specialization never gets built.
- **Role confusion** — AEs prospect, SDRs close, AMs hunt. Math breaks.
- **Spray-and-pray outbound** — outbound without a tight ICP and a triggering
  event. Burns the list, produces low response rates, demoralizes SDRs.
- **Lead-source blindness** — company says "we have leads" without
  distinguishing Seeds (high conversion, low volume) from Nets (high volume,
  variable conversion) from Spears (predictable when done right).
- **No conversion math** — pipeline is reported as a number without the ratios
  that make it predictable. Forecasting is gut-feel.
- **Outbound prescribed when it's premature** — applying the framework's
  prescriptions to a company that should defer outbound. Symmetric error to
  "founder doing sales."
- **Cold Calling 1.0 confusion** — running phone-based interruption outbound
  rather than targeted email + qualification + handoff. Reading the *book* but
  not the *motion*.

## What "good Predictable Revenue analysis" looks like (this is what we score)

A good analysis applied to a real GTM situation should:

1. Diagnose the ICP tightness — firmographic + behavioral + trigger event,
   named at role-level inside named industry/size.
2. Diagnose the role structure — who does prospecting, who closes, who farms,
   and whether the roles are confused or mixed.
3. Name the current lead source mix — Seeds / Nets / Spears, with which the
   company is using and which it is neglecting.
4. Recommend the right outbound move — either prescribe Cold Calling 2.0 with
   specifics (target buyer role, channel, trigger event, message shape, expected
   response rate) OR explicitly decline outbound with rigorous rationale tied
   to the book's "when NOT to apply Spears" conditions.
5. Engage with conversion math — either name the ratios that should be tracked
   or explicitly say the inputs don't support the math and frame it as an open
   question.
6. Flag failure modes when input evidence is present.
7. Sequence the recommended changes in time — operational changes have
   dependencies (define ICP before scaling outbound; hire first SDR before
   first AE specialization for outbound motion).

## What the eval should *not* score

- Whether the analysis quotes the book.
- Whether the analysis uses Ross's exact terminology (Seeds/Nets/Spears
  labeling) vs. paraphrase. Both fine.
- Whether the analysis prescribes outbound. The framework does not require it
  — it requires that the outbound decision be reasoned through the book's
  conditions. Both "prescribe outbound with specifics" and "decline outbound
  with rigorous rationale" are paths to credit.
