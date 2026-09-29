---
title: "Attribution After Cookies: What Actually Works in 2026"
description: "Third-party cookies are gone, platform numbers disagree with finance, and the honest stack is MMM, incrementality tests and server-side conversion APIs."
date: 2026-04-15
category: "D2C & Growth"
tags: [attribution, marketing-measurement, privacy]
---
The cookie era ended not with one dramatic deprecation but with a thousand cuts — browser ITP, app tracking transparency, consent banners nobody accepts, and finally the slow browser phase-outs. What remains is a measurement landscape where every ad platform reports a conversion number, the numbers sum to more revenue than you earned, and finance stopped believing all of them. Correctly.

## Accept the epistemology, then build

User-level cross-site tracking is not coming back; measurement now rests on three legs, each honest about what it knows:

**1. Server-side conversion APIs — feed the machines.** Meta CAPI, Google Enhanced Conversions, TikTok Events API: first-party purchase events sent server-to-server, matched probabilistically. This does *not* fix attribution truth — it fixes *ad delivery*, because the platforms' optimisation is only as good as the signal you return. Brands that implemented server-side events properly saw paid efficiency recover meaningfully; those that did not are training algorithms on noise. This is table-stakes engineering, part of the [commerce data layer](/services/#platform), and it is the one place where better plumbing directly buys cheaper customers.

**2. Media mix modelling — the budget allocator.** MMM regressed spend against outcomes long before cookies; it is now the grown-up answer again, and modern open-source tooling plus weekly-grain data made it accessible below enterprise scale. MMM tells you channel-level marginal return without touching user data — GDPR-serene — but it needs spend variation to learn from (steady-state budgets teach it nothing) and honest priors. Run it quarterly; let it argue with the platform dashboards; believe it more.

**3. Incrementality tests — the truth serum.** Geo holdouts, audience splits, PSA tests: deliberately not spending somewhere measurable is the only method that *measures* rather than models causation. Every brand can afford one clean test per quarter. Typical findings, humbling as ever: branded search largely harvesting, retargeting less incremental than its ROAS claims by a wide margin, upper-funnel undervalued by click-based numbers. Each finding reallocates real money — which is the point.

## What to stop doing

Stop reconciling platform dashboards against each other; they measure different fictions. Stop last-click as a decision rule; it is a participation trophy for the bottom of the funnel. Stop buying "AI attribution" tools that promise user-level truth from probabilistic dust — they re-launder the fiction with better UX. And stop treating consent rates as someone else's problem: consent UX quality now directly determines the volume of signal your entire stack learns from.

## The operating cadence

Weekly: platform numbers for *directional* in-flight decisions (they are relatively consistent with themselves). Quarterly: MMM refresh reallocates budgets; one incrementality test settles the loudest argument. Annually: the model's marginal-return curves set the plan. Wire the whole thing to [contribution margin, not revenue](/insights/d2c-unit-economics-numbers-that-matter/), and marketing measurement finally speaks the same language as the P&L — which was the goal the cookies always pretended to serve.
