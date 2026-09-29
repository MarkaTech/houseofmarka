---
title: "The US State Privacy Law Map in 2026: Complying With Twenty Laws at Once"
seoTitle: "US State Privacy Laws 2026: Complying With Twenty at Once"
description: "State privacy statutes now cover most of the US population. The sane strategy: one high-watermark programme, universal opt-outs and honest data mapping."
date: 2026-04-01
category: "Compliance & Trust"
tags: [privacy, us, ccpa, compliance]
---
*Orientation, not legal advice.*

While Washington debated a federal privacy law, the states shipped. By 2026, comprehensive consumer privacy statutes — California's CCPA/CPRA lineage, Virginia, Colorado, Connecticut, Texas, Oregon, Montana, and a lengthening roster behind them — cover the large majority of the US population, each with its own thresholds, rights and quirks. For any brand selling nationally, "which laws apply to us" has effectively become "most of them, somewhere".

## Stop tracking twenty laws; build one program

The laws rhyme: notice at collection, access/deletion/correction rights, opt-out of sale and targeted advertising, purpose limitation, vendor contracts. The sane architecture is a **high-watermark program** — comply with the strictest common denominator (California plus Colorado's universal-opt-out rules usually define it) and apply it everywhere. Fifty-state-precision per-state behaviour is a compliance-vendor fantasy that quadruples cost to save pennies; uniform generosity is cheaper *and* is marketing ("we honour these rights for everyone").

The exceptions worth engineering: **sensitive-data consent** (several states flip from opt-out to opt-in — health-adjacent inferences, precise geolocation, biometrics; if your commerce data brushes wellness categories, look hard), and **children/teens**, where the rules diverge meaningfully and the enforcement appetite is real.

## The technical to-do list that actually satisfies audits

- **Honor Global Privacy Control.** The universal opt-out signal is mandatory in California, Colorado and a growing set — and it is a browser header, which means it is an engineering ticket, not a policy paragraph. Most sites we audit still ignore it.
- **Map the data before promising things about it.** Rights responses fail on the CRM shadow copies, the [ad-platform audiences](/insights/attribution-after-cookies-what-works/), the warehouse tables nobody registered. The [data stack](/insights/right-sized-data-stack-commerce/) makes this tractable: modelled data with lineage answers "where does this person exist" as a query, not a scavenger hunt.
- **Wire deletion end-to-end.** Including vendors (your DPA-equivalents oblige them), backups (documented aging-out is accepted practice), and derived data like model scores.
- **"Sale/share" honesty.** Ad-tech data flows are "sharing" under California's definitions regardless of what the invoice says. Your cookie banner, your server-side events and your opt-out plumbing must agree with each other — mismatches between stated policy and observed network traffic are exactly what enforcement sweeps grep for.
- **Keep the records.** Requests, responses, timelines, opt-out states. When an AG asks, the answer is an export — the same [logging discipline](/insights/gdpr-and-ai-processing-customer-data/) GDPR taught, pointed west.

## For EU brands entering the US

Your GDPR program is 80% of the work — better, in most respects. The gaps to close: GPC handling, "sale/share" categorisation of your ad stack, notice-at-collection formatting, and the state-specific sensitive-data consents. Weeks, not quarters, on [existing rails](/services/#platform).

The strategic read: US privacy is converging on GDPR-shaped norms through state accretion, and the brands that built one honest program are bored by each new statute. Boredom is the goal.
