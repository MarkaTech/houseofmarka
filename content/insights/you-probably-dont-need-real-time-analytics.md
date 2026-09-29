---
title: "You Probably Don’t Need Real-Time Analytics"
description: "Real-time pipelines cost 5–10x batch and most decisions are daily anyway. Where streaming genuinely earns its keep in commerce, and the honest test to apply."
date: 2026-01-07
category: "Data & Dashboards"
tags: [real-time, data-engineering, architecture]
---
"We need it real-time" appears in almost every analytics requirements meeting, near the top, unexamined. It is worth examining, because the delta between a real-time pipeline and an hourly batch is roughly 5–10x in build cost, a permanent tax in operational fragility — and, for most commerce decisions, zero difference in outcome.

## Match latency to the decision, not the dashboard

The test is one question: *what would you do differently in the next hour if you knew this number now?* Budget reallocations are weekly decisions. SKU pricing reviews are daily. Cohort analysis is monthly. The executive glancing at revenue at 15:00 acts identically whether the number is live or 40 minutes stale — [declare the freshness](/insights/dashboards-executives-actually-open/) and nobody suffers. Building streaming infrastructure so a dashboard tile updates between meetings is engineering as interior design.

The hidden costs compound: streaming pipelines fail in exciting ways (ordering, late events, backfills that batch handles trivially), on-call load rises, and every schema change becomes a production migration. Hourly dbt runs fail boringly and rerun by button. Boring is a feature you pay to keep.

## Where real-time genuinely earns it

Honest exceptions, all sharing one trait — *a machine acts on the data within seconds*:

- **[Inventory sync across channels](/insights/ending-oversells-inventory-sync-done-right/).** The oversell window is measured in seconds; this is the canonical commerce streaming case — though note it is an *operational* pipeline, not analytics.
- **Fraud and abuse checks** in checkout flows — the decision happens mid-transaction or not at all.
- **Stock-aware advertising**: pausing campaigns the moment a hero SKU hits threshold is free money and needs minutes, not hours.
- **Peak-day war rooms** — Black Friday genuinely benefits from live order/error/conversion telemetry, because interventions (kill a broken discount, reroute fulfilment) happen within the hour. Build the war-room view as an *event* mode, not as the everyday architecture.
- **Operational alerting** on money-losing anomalies (site errors, payment failure spikes, feed disapprovals) — alerts want low latency even when dashboards do not.

Note what the list excludes: every revenue dashboard, every marketing report, every cohort view, essentially all "analytics" as normally meant.

## The architecture that keeps everyone happy

Split the two concerns cleanly. *Operational events* (orders, stock, errors) flow through the event bus that your [integration layer](/marketplaces/) already needs — machines subscribe where seconds matter. *Analytics* runs batch on the [right-sized stack](/insights/right-sized-data-stack-commerce/): hourly for trading-critical models, daily for the rest. The dashboards read the warehouse; the robots read the bus; each side is simple because it is not pretending to be the other.

When someone says "real-time", hand them the one-question test. Nine times out of ten the honest answer is "hourly is fine" — and the tenth time, now you know exactly what to build and why it is worth its cost.
