---
title: "Rewrite the Client, Keep the Core: The App Modernisation Strategy That Ships"
seoTitle: "App Modernisation: Rewrite the Client, Keep the Core"
description: "Full rewrites die in year two. Strangler-fig backends and clean-slate clients behind a stable API is the modernisation pattern that actually completes."
date: 2026-04-09
category: "Engineering"
tags: [modernization, architecture, mobile, legacy]
---
Every ageing system eventually produces the meeting where someone proposes The Big Rewrite. The industry's scar tissue on this is deep: full rewrites routinely take twice the estimate, freeze feature work while the old system decays, and reach parity with the legacy system's *bugs* around the time the market has moved. And yet — living with a six-second app start or a codebase nobody dares deploy is also a strategy of decline. The pattern that resolves this, and the one behind [our one-quarter payments rebuild](/work/fintech-app/), splits the problem at the API line.

## Clients are rewrite-friendly; cores are not

The client layer — mobile apps, web front-ends — is where age shows most (frameworks EOL, jank, store-review decay) *and* where rewrites are safest: scope is bounded by the API contract, the blast radius is UI, and phased rollout is native to the platforms. The core — payments, orders, inventory, the accumulated business rules — is the opposite: age shows least to users, and rewrites are existential risk, because the undocumented edge cases *are* the business.

So: **rewrite the shell against the existing contract; strangle the core incrementally, later, if the numbers demand it.** A quarter for two native clients was realistic *because* the GraphQL layer stayed put.

## Making the client rewrite honest

- **Contract first.** Freeze (and document) the API as it *behaves*, not as the wiki claims. Consumer-driven contract tests become the safety net for both sides.
- **Parity is a checklist, not a vibe** — enumerate flows, including the ugly ones (password reset on an old email domain, the VAT edge case). The legacy analytics tell you which "features" have zero users; deleting them is the rewrite's first dividend.
- **Design system as the multiplier.** One token-and-component spec, implemented natively per platform, keeps two rewrites from becoming two divergent products — and bakes in [accessibility](/insights/wcag-22-commerce-sites/) once.
- **Phased rollout with a rollback you have tested.** Store-level staged release, cohort by cohort, old app kept warm. The [weekly release train](/insights/weekly-release-trains-small-teams/) starts *during* the rewrite, not after.

## Strangling the core, when its turn comes

New capabilities land as services beside the monolith behind the same gateway; each migrated domain gets contract tests, dual-running with diffing, then cutover; the monolith shrinks by subtraction until what remains is either fine (declare victory — plenty of monolith cores deserve to live) or small enough to finish. Every step ships value; no step bets the company. The anti-pattern is the eighteen-month parallel build with a "cutover weekend" — that weekend has a body count.

## The decision discipline

Modernization is a portfolio call: score each layer on user-visible pain, change frequency and risk-of-touching. Clients usually score rewrite; data layers usually score [incremental](/insights/when-to-kill-the-spreadsheet/); cores score strangle-or-leave. Write the scoring down — it is the document that saves you from both the Big Rewrite and the slow decay, and it is [where we start](/services/#apps) every modernization engagement.
