# Demand-Evidence Audit — Vercel, Q4 2021

*Book: The Mom Test (Fitzpatrick). Case: vercel-2021. v1 strict mode.*

The audit below is adversarial to the inputs. Vercel-as-of-Q4-2021 has unusually
strong top-of-funnel and PLG signal (70k+ active developers, named enterprise
logos, two 2021 financing rounds, a category-defining open-source asset in
Next.js). Fitzpatrick's discipline asks a different question than the inputs are
posed to answer: not "is there developer love?" — there demonstrably is — but
"is the *enterprise procurement-converted, recurring-revenue* demand that the
expansion thesis presupposes real, or is the case framing inflating free-tier
and PLG-individual signals into enterprise-readiness conclusions?"

That is the load-bearing distinction throughout.

## Hypothesis Audit

1. **H1 — Engineering teams at mid-market and enterprise companies already pay
   real costs to deploy Next.js (or React frontends) reliably.**
   - Evidence in inputs: "~70,000 developers using Vercel platform actively
     ... tens of thousands on Pro tier ... ~100+ enterprise customers on the
     Enterprise plan, mostly inbound-converted from PLG adoption" plus named
     reference logos (TikTok, Twitch, Hulu, Notion, McDonald's, Patreon,
     Tripadvisor, Square, eBay, Washington Post).
   - Classification: **Real, partially.** Tens of thousands of Pro
     subscriptions at $20/user/month and 100+ Enterprise contracts is paid,
     past-behavior signal — real time + money. **But the volume is contaminated
     by free-tier breadth.** "70,000 developers ... free + paid" is a vanity
     count that combines free hobbyists with paying teams. The relevant subset
     (Pro converters and Enterprise procurement-completed accounts) is real
     evidence; the 70k number is fluff.

2. **H2 — Enterprise procurement at Fortune 500 / regulated-industry buyers is
   ready to standardize on Vercel today.**
   - Evidence in inputs: Named-logo list above, "Enterprise adoption ...
     bottom-up — engineering teams adopt Next.js → deploy on Vercel → eventually
     triggers procurement."
   - Classification: **Mostly fluff for the procurement-readiness claim.**
     The same input also says: "SOC 2 Type II just landed in late 2021, SSO
     via SAML available on Enterprise tier but not other tiers, audit logs
     limited, SCIM not yet shipped, data residency options not yet shipped.
     Reference customers in heavily-regulated industries (banking, healthcare,
     government): none." Logos like McDonald's and Washington Post are
     property-level deployments, not company-wide standardization — the input
     concedes "most use Vercel for specific frontend properties rather than as
     a company-wide standard." That's adoption, not standardization. The
     hypothesis as stated (procurement-ready Fortune 500 at scale) is
     unsupported.

3. **H3 — Next.js distribution is a durable, defensible PLG funnel that
   converts to paid revenue at a sustainable rate.**
   - Evidence in inputs: "Next.js ... default React framework for new projects,
     with rapidly growing GitHub stars and npm downloads" + "Deploying Next.js
     anywhere other than Vercel is technically possible but Vercel-on-Vercel is
     the path of least resistance."
   - Classification: **Mixed.** GitHub stars and npm downloads are textbook
     vanity engagement. The real-signal part is the conversion from Next.js
     adoption to paid Vercel deployment — but the inputs do not give a
     conversion rate, only a directional claim ("strong PLG funnel"). Without a
     stars→hobby→Pro→Enterprise funnel ratio, this hypothesis rides on
     founder/investor framing.

4. **H4 — The market wants a sharper "Frontend Cloud" category claim (i.e.,
   buyers are looking for this as a category, not just buying Vercel as a
   product).**
   - Evidence in inputs: Public messaging "oscillates between 'Develop. Preview.
     Ship.' ... 'platform for frontend frameworks,' and the emerging 'Frontend
     Cloud' framing. The category name is not yet locked..."
   - Classification: **Pure fluff for the demand claim.** The inputs describe
     internal/external positioning oscillation, not buyer-side language. There
     is zero evidence in the inputs that any prospect has *asked* for a
     "Frontend Cloud" — the category is a seller-side framing exercise, not a
     buyer-pull observation. Whether the category should be sharpened is a
     legitimate strategic question; whether buyers demand it as a category is
     unsupported.

5. **H5 — Customers will pay Vercel for adjacent infrastructure (managed DBs,
   KV, queues, edge compute primitives) and would broaden their wallet
   accordingly.**
   - Evidence in inputs: "Adjacent expansion temptations: managed databases
     ... Public commentary from Guillermo through 2021 emphasizes 'frontend
     cloud' framing — adjacent infra not yet explicitly committed. Investor
     pressure (Bedrock, GGV) likely pushes toward broader platform."
   - Classification: **Fluff bordering on ideas-from-investors.** The
     pressure to expand is described as coming from the cap table, not from
     customers asking for KV stores while paying for deployment. No past-behavior
     evidence that current Vercel paying customers have asked for (much less
     paid for, much less switched away over the absence of) these primitives.

## Bad-Data Signals Flagged

1. **Vanity engagement count.** *Quoted:* "~70,000 developers using Vercel
   platform actively by Q4 2021 (free + paid)." Combining free and paid into
   one big number is the textbook vanity-metric move. The free tier is
   explicitly "extremely generous: hobby plan covers personal sites, side
   projects, and meaningful production traffic for indie devs." Free signups
   on a free tier do not predict paid signal — Fitzpatrick is explicit that
   waitlist clicks and free signups are decoration. The paid Pro count and
   Enterprise count are the real numbers; the 70k figure inflates the
   denominator.

2. **Vanity engagement (open-source stars / downloads).** *Quoted:* "Next.js ...
   has become the default React framework for new projects, with rapidly growing
   GitHub stars and npm downloads through 2020-2021." Stars and weekly downloads
   are the developer-tools equivalent of likes and follows. They measure
   awareness, not paid intent. Many high-star-count OSS projects monetize
   poorly. This is bad data masquerading as product-market evidence.

3. **Logo-flexing without depth.** *Quoted:* "TikTok, Twitch, Hulu, Notion,
   McDonald's, Patreon, Tripadvisor, Square, eBay, Washington Post all using
   Vercel for various frontend properties." The input itself partially
   self-corrects: "Most use Vercel for specific frontend properties rather
   than as a company-wide standard. No public reference customer for
   company-wide-platform-standardization at Fortune 500 scale." So the logo
   list is real (some money, some risk taken on a property) but the *claim it
   is asked to support* — enterprise-grade procurement-ready demand — is
   inflated by it. Logo lists are routinely founder-framed for fundraising
   audiences; we should not absorb them as research.

4. **Founder-as-content-asset framing.** *Quoted:* "Guillermo Rauch
   (founder/CEO) is one of the most-online dev-tools founders ... the founder
   is a content asset." This is presented as a signal of business strength but
   it is fluff in the Fitzpatrick sense: founder reach correlates with
   awareness, not with paid conversion. Twitter followers and conference
   attendance do not predict procurement signoffs. Treating it as a "signal"
   is a category error.

5. **Investor enthusiasm framed as market signal.** *Quoted:* "Funding
   trajectory through 2021 ... Two rounds in 2021 alone suggests investors
   see category-defining potential." Fitzpatrick would call this textbook
   compliments-as-validation, just with the source displaced from prospect
   to investor. Investors writing checks at $2.5B is not evidence of buyer
   demand — it is evidence of *investor* demand for exposure to the developer
   tooling thesis. These are different markets.

6. **Hypothetical-future framing in the expansion thesis itself.** *Quoted:*
   "(2) layer enterprise sales motion now ... or wait until enterprise whole
   product ... is more complete; (3) expand into adjacent infrastructure ... to
   capture more of the stack..." The strategic options are framed as forward
   intent without anchoring to specific buyer past-behavior evidence. Option
   (3) in particular ("capture more of the stack") is the company's preference
   stated as a strategic question, not a customer-pull observation.

## Past-Behavior Probes

For each load-bearing hypothesis, the specific past events to interrogate:

**For H1 (real paying demand for frontend deployment):**
- "Walk me through the last time your team picked where to deploy a new
  React app. What were the candidates? Why did the winning one win? What
  was the conversation with whoever signs the bill?"
- "When did you first pay Vercel money? What was the trigger — a feature
  you needed, a free-tier limit hit, a procurement requirement?"
- "Last year, what did your team actually spend on frontend hosting
  (Vercel + Netlify + AWS Amplify + Cloudflare Pages + self-hosted, all in)?
  Walk me through where that money went."

**For H2 (enterprise procurement readiness):**
- "Tell me about the most recent procurement review your team ran for a
  developer-tools vendor. Which checkboxes did the vendor have to clear?
  Who in the company has to approve? Walk me through the timeline."
- "When was the last time security blocked a tool your engineering team
  wanted? What was the blocker? How did you resolve it (or did you give
  up)?"
- "If your CISO walked into the room today and asked 'are we OK on data
  residency for this Vercel deployment,' what would your honest answer be?
  Has that conversation happened?"

**For H3 (Next.js → Vercel conversion as a durable funnel):**
- "When your team adopted Next.js, was Vercel deployment the default? Did
  you evaluate alternatives? What did you actually try first?"
- "Have you ever deployed Next.js somewhere other than Vercel for a
  production property? Why? What did that experience teach you?"
- "Walk me through your last conversation with your team about Vercel
  pricing. Was anyone pushing back on the per-seat costs as you grew?"

**For H4 (Frontend Cloud as a buyer-recognized category):**
- "When you went looking for a deployment platform last time, what did you
  search for? What words did you put into Google? Did 'frontend cloud'
  appear anywhere in your evaluation?"
- "Who, internally, advocated for picking Vercel? How did they pitch it to
  the people who hold the budget? What category words did they use?"

**For H5 (adjacent-infra demand from existing customers):**
- "Last year, when your team needed a key-value store / managed Postgres /
  queue, who did you buy it from? Walk me through that decision. Did
  Vercel come up?"
- "Has your team ever wished Vercel sold a database? What did you do
  instead? Did the absence of Vercel-provided storage ever cost you a deal
  with an internal stakeholder?"

## The Big Three

Three falsifying questions, each with the specific answer that would prove
the underlying hypothesis WRONG. The Big Three target the most consequential
hypotheses for the Q4 2021 strategic call.

**Q1 — Targeting H2 (enterprise procurement readiness).**
*Question:* "Walk me through your last procurement review for a developer
tools vendor that didn't have SOC 2 Type II yet. What happened? Did the
deal go through, get delayed, or get killed?"
*Falsifying answer (proves H2 wrong → defer outbound enterprise motion):*
"Killed. We don't even take the meeting without Type II + SCIM + audit
logs + data residency in writing." If two or three procurement-side
interviewees say this, the enterprise-procurement-ready hypothesis is
falsified for the regulated-industry segment, and the strategic call is:
finish whole product first, don't layer outbound now.
*Validating answer (would support layering outbound):* "We've waved through
vendors at Type II = in-progress before. The engineering champion's
recommendation carries more weight than the checklist for net-new tooling."

**Q2 — Targeting H4 (Frontend Cloud as a buyer-recognized category).**
*Question:* "Three weeks ago when you were evaluating where to host this
Next.js app, what category did you put Vercel in mentally? What were the
substitutes you compared it against?"
*Falsifying answer (proves H4 wrong → Frontend Cloud is seller-side
positioning, not buyer-recognized demand):* "I compared it against AWS,
Netlify, and Heroku. I didn't think about 'categories.' I just wanted
deploy-from-git that handled Next.js well." If consistent across 10+
interviews, the category claim is a seller-side narrative — useful for
positioning but not a buyer-pull. Strategic implication: it's still worth
locking the category name, but for marketing/recruiting reasons, not as a
response to demand.
*Validating answer:* "Frontend platforms. Vercel, Netlify, maybe Cloudflare
Pages. Different category than AWS Amplify which felt like raw infra." A
consistent buyer-side category recognition would justify the marketing
investment to own the category name.

**Q3 — Targeting H5 (adjacent-infra demand from existing customers).**
*Question:* "In the last 12 months, when your team picked a database / KV
store / queue, walk me through how that decision happened. Where did you
buy from, and did Vercel come up in the conversation?"
*Falsifying answer (proves H5 wrong → adjacent-infra is investor-driven,
not customer-pull):* "We use Supabase / Neon / Upstash / Planetscale. Vercel
never came up — it's where we deploy, not where we store data." If 80%+ of
existing paying Vercel customers say this, the adjacent-infra expansion is
investor-pressure-led ("capture more of the stack") rather than customer-
demand-led, and Vercel would be entering a different competitive set
(Supabase, Planetscale, Cloudflare, Upstash) on those vendors' home turf.
The strategic call: stay focused on frontend; expand cautiously and only
where the deploy-time integration story is genuinely differentiated.
*Validating answer:* "We hate juggling three vendors for one app. If Vercel
shipped a KV store and a managed Postgres tomorrow we'd switch from
Upstash and Neon in a heartbeat for the developer-experience win." If
multiple paying customers volunteer this without prompting, the expansion
is customer-pulled.

## Commitment Ladder Position

Mapping current evidence to the framework's 0–5 ladder:

The case has heterogeneous commitment levels across segments — treating
them as uniform would be the failure mode the framework warns about.

- **Free-tier hobbyists (~70k minus paid):** Level 0 (polite use of free
  product, no commitment beyond clicks). This is the bulk of the headcount.
- **Pro-tier teams (tens of thousands):** Level 4 (paid pilot / paid product
  use at $20/seat). Real money, recurring, self-serve. This is the strongest
  evidence Vercel has, and the case framing arguably underweights it.
- **Enterprise customers (~100+, inbound-converted):** Level 5 (signed
  contracts, custom-quoted, $50K–$500K+ ACV). Definitive commitment, but
  qualified: "mostly inbound-converted from PLG adoption" and "mostly for
  specific frontend properties rather than as a company-wide standard."
  These are signed contracts for limited scopes, not company-wide
  standardizations.
- **Named logos that are *not* paying Enterprise customers but appear in
  marketing:** Level 0–1 unless inputs confirm Enterprise tier specifically.
  The input lumps them together; we should not.

**Specific next advancement to convert hypothesis into evidence:** The
relevant unanswered question is H2 (enterprise procurement readiness) and
H5 (adjacent-infra demand). The concrete asks for each:

For H2: identify 5–10 existing Enterprise customers and ask for an
introduction to the buyer-side procurement lead (not just the engineering
champion). The advancement here is **Level 3 — introduction to the budget-
holder.** What we'd learn: did procurement view this as standardization-
ready, or as "an engineering team got us through the door and we tolerated
the gaps." That distinguishes "enterprise demand is real" from "engineering
demand pulled enterprise procurement along reluctantly."

For H5: identify 5–10 existing paying customers who *also* recently bought
adjacent infra elsewhere (Supabase, Upstash, Neon, Planetscale). Ask
specifically about a **Level 4 pilot** of an adjacent Vercel primitive,
*if shipped at parity feature set*. What we'd learn: would they switch a
production workload at the cost of vendor consolidation. A "yes, here's
budget" is real signal; a "maybe, depends" is fluff and means H5 is
investor-pressure-driven.

For the broader category-claim question (H4): no commitment-ladder
advancement applies cleanly — that one is answered by buyer-side language
audits (Q2 above), not by procurement progression.

## Bad-Mouth Test

Three things a smart friend would warn about. Per v1 strict, at least one is
structural skepticism about the company's own framing.

1. **(Structural skepticism — about Vercel's own framing.)** The expansion
   thesis is framed as three "open strategic questions" — category claim,
   enterprise sales motion timing, adjacent-infra expansion. *That framing
   itself is contaminated.* The thesis presupposes that the company's main
   challenge is choosing among forward-looking moves, when Fitzpatrick's
   lens would say the prior question is: *do we yet know whether the paying
   demand we have is durable beyond Next.js-as-a-fashion-cycle?* The specific
   structural assumption to call out: the input language **"capitalize on
   Next.js's emergence as the default React framework and convert PLG-driven
   developer adoption into a sustainable platform business"** treats
   "Next.js's emergence as the default" as a fixed asset rather than a current
   condition. Frameworks rise and fall on 3–5-year cycles in this space
   (jQuery → Backbone → Angular → React → ?). The expansion thesis embeds the
   load-bearing assumption that Next.js dominance persists long enough for
   platform-business conversion to compound — that's a structural assumption,
   not a market observation, and it's not interrogated anywhere in the inputs.

2. **(Structural skepticism — about the "enterprise" narrative.)** The
   phrase **"~100+ enterprise customers on the Enterprise plan"** elides a
   distinction Fitzpatrick would force: an Enterprise *plan* customer
   (custom-quoted, signed contract) is not the same thing as an *enterprise
   buyer* in the sense that the expansion thesis uses the word (Fortune 500,
   IT-led, procurement-gated). The input acknowledges this elsewhere
   ("mostly inbound-converted from PLG adoption"; "no public reference
   customer for company-wide-platform-standardization at Fortune 500 scale")
   but the topline number invites the reader to conflate them. A smart friend
   would say: the 100+ are mostly engineering-led teams that triggered a
   custom invoice — that's bottom-up procurement, not enterprise procurement.
   Different demand signal, different ICP, different growth ceiling.

3. **(External, but adversarial to the inputs.)** Investor enthusiasm
   measured by funding rounds is being framed as a demand signal in the
   inputs ("Two rounds in 2021 alone suggests investors see category-defining
   potential"). A smart friend would note this is not what Fitzpatrick would
   call signal at all. The 2021 venture market was at peak — many things got
   funded at multiples that did not survive contact with 2022–2023 reality.
   Funding rounds tell you about investor demand, not customer demand. The
   two correlate in good markets and decorrelate in correcting ones; betting
   the GTM strategy on the assumption that one predicts the other is a
   classic late-stage-cycle error.

## Confidence and Open Questions

- **Confidence in quality of demand evidence in the inputs: 5/10.** The
  inputs contain real paid-conversion evidence (Pro-tier headcount, 100+
  Enterprise contracts) but it's lumped together with vanity counts (70k
  total, GitHub stars, named logos for properties), and there is no
  conversion-rate or retention data, no expansion-ARR per cohort, no
  procurement-side interview data. The strongest part of the evidence (Pro
  conversion) is undocumented in the inputs at the depth needed to underwrite
  the expansion-thesis options.

- **Confidence in testability of the load-bearing hypotheses: 8/10.** All
  five hypotheses above are testable with conventional customer-discovery
  motion — the population of paying customers exists, the procurement
  contacts are reachable through engineering champions, and the Big Three
  questions have concrete falsifying answers. The constraint is not
  testability but founder/team willingness to run the discovery as
  adversarial inquiry rather than as confirmation theater.

- **Specific facts that, if known, would change the audit:**
  1. The Pro-tier → Enterprise-tier conversion rate over the last 12 months,
     and the Enterprise-tier net revenue retention (NRR). If NRR is >130%
     and conversion is healthy, H1 is strong-real and H2 needs less work;
     if NRR is <110%, the expansion thesis is more fragile than the
     fundraising narrative suggests.
  2. Among the named-logo "enterprise" accounts, the ratio of (a) company-
     wide standardization to (b) single-property deployment. If <10% are
     standardized, the headline number for procurement-ready enterprise
     demand should be sized to (a), not to (a)+(b).
  3. **(Prior-conversation-flaw — v1 strict.)** What was the context of the
     enterprise-customer interviews behind the input claim "~100+ enterprise
     customers ... mostly inbound-converted from PLG adoption"? Specifically:
     were any of these accounts asked, in a sales-team-led conversation
     framed by a renewal or upsell ask, whether they "loved" Vercel? Was the
     interviewer aware the data would feed a fundraising narrative? Was the
     prospect aware of the same? Sales-team-led satisfaction conversations
     during renewal windows are systematically contaminated — the prospect's
     incentive is to keep relationships warm, not to be honest about
     fragility. If the "enterprise demand is strong" claim in the inputs
     rests on this kind of sourcing, the data is bad regardless of its
     content, and the H2 falsifying probe (Q1 above) needs to be run with
     a buyer-side counterparty (procurement, not engineering champion) in
     a context the buyer does not perceive as renewal-adjacent.

- **Anti-pitch note (rubric-required, integrated here):** Throughout this
  audit, I have deliberately resisted absorbing the input's pitch-style
  framing — phrases like "capitalize on Next.js's emergence," "the founder is
  a content asset," "investors see category-defining potential." Each of
  these is the company's narrative about itself, not customer-side evidence.
  Treating them as facts (rather than as claims to be falsified) is the
  failure mode Fitzpatrick warns about most consistently. The audit reframes
  them as hypotheses or as bad data, not as inputs.
