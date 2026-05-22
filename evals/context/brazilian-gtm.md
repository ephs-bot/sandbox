# Context module: Brazilian GTM

Cross-cutting reference material for cases where the company is operating
in Brazil or evaluating Brazilian-market expansion. Apply this as
background fluency about the operating environment — not as facts to
analyze. Books that reference this module should still arrive at their
own diagnoses; this document tells the analyst what's *normal* in Brazil
so the analyst doesn't anchor on US/UK/EU defaults.

> Position this content at ~Q2 2026. Specific numbers, regulations,
> and competitive dynamics shift quickly. Treat this as a snapshot, not
> a permanent reference. See "Refinements needed" at the bottom for the
> known limits.

---

## Regulatory landscape

**LGPD (Lei Geral de Proteção de Dados, 2018, in force since 2020)** —
Brazil's general data-protection law. GDPR-derived but with Brazilian
specificity. Enforcement has accelerated through 2024-2026, with
material fines and increasing procurement-side gating at large
enterprises. Treat LGPD posture (data residency, processing terms,
sub-processor disclosure, named DPO) as a procurement gate, not a
checkbox — at incumbent banks and Fortune 500 Brazilian operations,
LGPD attestation is a hard requirement.

**ANPD (Autoridade Nacional de Proteção de Dados)** — Brazilian DPA.
Active enforcement role. As of 2026, ANPD has signaled forthcoming
AI-specific guidance that will likely impose explainability and
risk-classification requirements on AI providers serving Brazilian
buyers, especially in regulated sectors (banking, healthcare, public).

**Open Finance Brazil (Phase 4 in production through 2026)** — central-
bank-mandated open-banking regime, more aggressive than European PSD2.
Creates a unique competitive dynamic: incumbent banks must share
account/transaction data with authorized third parties, which is the
infrastructure that powered Nubank's growth and the broader Brazilian
fintech ecosystem.

**Pix (instant-payment rail, 2020+)** — central-bank-operated, free for
consumers, near-universal adoption. Replaced significant volume of
boleto and TED transfers. AI-native fintechs build on Pix as the
default rail; ignoring Pix in a Brazilian fintech case is a tell that
the analyst doesn't understand the local payment infrastructure.

**Marco Civil da Internet (2014)** + **AI bill (PL 2338/2023, in
committee)** — broader internet/AI legal framework. Less load-bearing
than LGPD but worth knowing exists.

---

## Fintech ecosystem

**Incumbent banks (the "five sisters"):** Itaú Unibanco, Bradesco,
Banco do Brasil, Caixa Econômica Federal, Santander Brasil. Combined
~$1T+ in assets. Slow, regulated, multi-vendor pilots common, full
enterprise procurement cycles (6-18 months). All five run AI pilots
across multiple frontier-LLM providers; few have publicly standardized
on one vendor as of 2026.

**Digital-native fintechs:** Nubank (~100M+ customers across LATAM, the
defining Brazilian fintech success), Stone (acquiring/POS), PagSeguro,
Inter (digital bank + super-app), XP (investment platform), BTG Pactual
(investment bank with digital arm), Mercado Bitcoin (crypto). These
move faster, run thinner pilots, integrate AI more aggressively. They
are generally the right beachhead for new infra/AI vendors entering
Brazil — pragmatist procurement gates exist (LGPD, SOC 2 Brazil
equivalent) but cycles are 3-6 months not 12+.

**Adjacent layers:** acquirers (Cielo, Rede, Stone, PagSeguro), card
issuers (Hipercard, Elo as the local rail), insurance (BB Seguros,
Bradesco Seguros, SulAmérica), wealth/brokerage (XP, BTG, Rico, Modal).

---

## Enterprise B2B SaaS landscape

**Dominant incumbents at large-enterprise tier (5,000+ employees):**
SAP, Oracle, Microsoft (via Azure + Microsoft 365). Long-tenured
relationships. Procurement cycles are long. Local integrators (CI&T,
Stefanini, Resource, BRQ) frequently mediate.

**Dominant at mid-market tier (200-5,000 employees):** TOTVS (the
Brazilian ERP giant — most mid-market companies run TOTVS), Senior
Systems, Oracle NetSuite, increasingly modern stacks (Salesforce
mid-market, HubSpot, Zendesk). Mid-market is where most modern
horizontal-SaaS adoption happens in Brazil.

**Dominant at SMB tier (<200):** Local SaaS (Conta Azul accounting,
Pipedrive heavy in Brazil, Resultados Digitais marketing automation
which became RD Station, then sold to TOTVS), Google Workspace,
WhatsApp Business as the de facto B2B comms layer.

**Hyperscaler footprint:** AWS (sa-east-1 São Paulo region — largest
LATAM region by usage); Azure (Brazil South + Brazil Southeast); GCP
(São Paulo region). AWS dominates technical-founder and digital-fintech
adoption; Azure dominates incumbent enterprise via Microsoft 365 + AD
bundling; GCP is third but growing.

---

## Local SI / consulting / agency competitors

**Stefanini, CI&T, BRQ, Resource, Globant (Argentina-HQ, huge in
Brazil), TOTVS Consulting, Senior Consulting** — system integrators
with deep enterprise relationships. They bid for AI implementation
contracts at incumbent banks, public sector, and large enterprise.
They are NOT typically gtmstack's competition for strategy diagnosis,
but they ARE the implementation layer that wins or blocks AI vendor
deals. Friend or foe varies by deal: if a SI is delivering on a
hyperscaler contract, they're aligned with you; if they're building
the in-house version, they're against you.

**Strategy consulting in Brazil:** McKinsey, BCG, Bain (all have São
Paulo offices); Accenture (largest by headcount); local strategy
boutiques (Falconi, FH Soluções). Pricing is lower than US/UK
($30-100K vs $100-500K+ for similar engagements) but cycle times are
similar.

---

## Public sector and SOEs

**Major public buyers:** Petrobras (state oil), BNDES (state
development bank), Caixa Econômica Federal (state retail bank), Banco
do Brasil (state-controlled retail), Eletrobras (privatized but
state-influenced). Plus federal ministries, state governments (São
Paulo state, Minas Gerais, Rio Grande do Sul are the largest IT
budgets), and capital cities (São Paulo, Rio).

**Procurement rules favor local providers** — Lei das Estatais
(13.303/2016) governs SOE procurement, with Brazilian-content
preferences. Federal procurement uses Lei das Licitações (14.133/2021).
Both create real friction for foreign-direct AI vendors. The path that
works: partnership with a Brazilian SI as the contracting counterparty,
or local subsidiary with Brazilian operations.

**Portuguese-language requirement:** Public-sector RFPs are
Portuguese-only. Vendor responses must be in Portuguese. Documentation
and support obligations are Portuguese. This is a real whole-product
gap, not a translation afterthought.

---

## VC ecosystem

**Brazilian / LATAM-focused VCs:** Kaszek (the largest, multi-stage),
monashees (early-stage, Brazilian-founded), Valor Capital Group,
Atlantico, Endeavor Catalyst, Comp.vc (newer focused fund), Maya
Capital, Astella, e.bricks, ONEVC, Canary (early), Norte. Significant
LATAM allocation by US firms: Sequoia (until they wound down LATAM in
2023, but legacy portfolio), a16z (selective), Tiger Global (slowed
2023+), GV (selective).

**Notable angel / operator networks:** Latitud Fellowship, Endeavor
Brazil, ABStartups, ABVCAP (industry association). Founder-to-founder
intros are the dominant warm-intro path; cold outreach to Brazilian
VCs is far less effective than in the US.

---

## Cultural / B2B norms

**Relationship-first:** Multi-meeting decision cycles. Building
trust over months matters more than nailing the first pitch.
"Almoço" (lunch) and "cafezinho" (coffee) are real decision-shaping
rituals, especially in mid/large-enterprise.

**Indirect feedback:** "Vou pensar" (I'll think about it) often
means no. "Estamos avaliando" (we're evaluating) often means
slow-walking. "Adoramos" (we love it) is politeness, not commitment.
Mom Test discipline applies harder in Brazil than in the US — explicit
past-behavior probes are the only reliable signal.

**Hierarchy:** Decision authority is more concentrated at the top in
Brazilian organizations than in many US companies. Champion-to-economic-
buyer paths matter; mapping the hierarchy explicitly is critical.

**Regulator-respectful:** Brazilian B2B vendors typically signal
conservative regulatory posture as a value, not as a constraint.
"Compliance-first" reads as competence in Brazil; "move-fast-and-break-
things" reads as amateurish.

---

## Pricing / contracting friction

**BRL-denominated preferences:** Large enterprises strongly prefer
BRL-denominated contracts. USD pricing forces FX-exposure conversations
in procurement and creates audit-trail complexity. SMB and digital-
fintech buyers are often comfortable with USD.

**Local-entity preferences:** Many large Brazilian buyers prefer
contracting with a Brazilian legal entity (CNPJ). Foreign-direct
contracts work but trigger taxes and regulatory friction. The path of
least resistance: a Brazilian Ltda. or S/A subsidiary, or a partnership
with a Brazilian SI as the contracting party.

**Billing patterns:** Monthly billing common at SMB; quarterly or
annual at mid-market and above. Annual discounts (10-20% off monthly)
standard. Upfront annual prepayment is rare — quarterly is the more
common cadence.

**Tax complexity:** ICMS, ISS, IRRF on cross-border services, PIS/
COFINS — Brazilian tax stack is genuinely more complex than most
markets. Pricing should be presented including local taxes ("preço
final ao cliente") rather than separating them.

---

## Conferences / events for category-establishment

**Banking / fintech:** Febraban Tech (June, São Paulo, the dominant
banking-tech event in LATAM); CIAB Febraban (broader banking).

**Tech / startups:** Web Summit Rio (April-May, Rio), RD Summit (Nov,
Florianópolis, the biggest SaaS event in Brazil), Rio Innovation Week
(Sept, Rio); Latitud's events for the LATAM founder ecosystem.

**Public sector / regulated:** Cimatec Industry (industrial AI),
Forum Esfera (policy + tech), Brasília-based federal-IT events.

If a vendor is investing in Brazilian category-establishment, presence
at Febraban Tech (banking) or RD Summit (SaaS) is the expected
proof-of-commitment to the local market.

---

## Adjacent LATAM markets

**Mexico:** Closer to US, more English-fluent at buyer level, less
regulated than Brazil, larger market by GDP but smaller AI-ecosystem
density. Often the "easier first LATAM expansion" — but Brazil's LGPD/
ANPD pressure is also Brazil's moat. Mexico has neither moat nor
burden.

**Argentina:** Spanish-speaking, smaller economy, recurring
macroeconomic crises affect SaaS purchasing power. Strong technical
talent pool (Globant, Mercado Libre, OLX origin). Often mid-LATAM
expansion stage.

**Colombia, Chile, Peru:** Smaller, more concentrated markets. Chile
is the most-developed economy but smallest population; Colombia has
the largest growing fintech scene after Brazil.

A Brazilian-fintech beachhead success unlocks LATAM expansion in this
order most often: Brazil → Mexico → Colombia → Argentina → Chile →
Peru. Skipping Brazil and starting elsewhere works for some categories
(consumer apps) but rarely for B2B SaaS.

---

## Common GTM failure modes (specific to Brazil)

**1. Assuming Brazilian buyers behave like US/UK buyers.** The biggest
structural assumption baked into many "Brazil expansion" plans. LGPD,
BRL contracting, Portuguese requirements, multi-meeting decision
cycles, regulator-respectful posture — these are not minor adjustments,
they're structurally different. Mom Test rubric flags this as a
structural-skepticism candidate.

**2. Skipping Portuguese collateral.** "We'll add Portuguese later"
is a real risk. Large-enterprise procurement at incumbent banks
requires Portuguese documentation, contracts, and support. SMB
adoption tolerates English-only longer.

**3. AWS Bedrock as the channel without Anthropic-direct counterparty.**
Hyperscaler-mediated channels work for Brazilian SMB and digital-
fintech buyers but break at large-enterprise procurement: incumbent
bank LGPD attestation often requires the model maker as the named
counterparty, not a sub-processor in an AWS addendum. Same dynamic for
Azure-mediated OpenAI access at AWS-aligned buyers.

**4. Ignoring the SI layer.** Brazilian large-enterprise deals
frequently flow through SIs (Stefanini, CI&T, etc.). A direct-sale
strategy at incumbent banks without SI partnerships will hit
implementation-layer friction.

**5. Mistaking digital-fintech traction for incumbent-bank readiness.**
Nubank-style fintechs adopt new AI infrastructure faster than the
"five sisters." A vendor with strong fintech references still needs
the procurement, residency, and reference-customer chain to move into
incumbent banks.

---

## Refinements needed (operator input wanted)

The following sections are best refined by an operator with
on-the-ground Brazilian B2B sales experience:

- Specific named buyer roles (CTO vs. Head of AI vs. Head of Data)
  at each named fintech / incumbent bank, and which seat is the
  economic buyer for AI infrastructure decisions.
- Current-state procurement timelines at each "five sisters" bank
  (rumored / observed cycle times).
- Specific case studies of foreign vendors who entered Brazil
  successfully (or failed loudly) and the structural pattern.
- Language and tone calibration for Portuguese collateral —
  what reads as competent vs. what reads as machine-translated.
- Updated VC landscape (which firms are active in 2026 vs. winding
  down).

If you operate in this market, append to or correct this document as
you author Brazilian-startup cases. The runner injects this content as
background fluency on every case that declares
`"context_modules": ["brazilian-gtm"]`.
