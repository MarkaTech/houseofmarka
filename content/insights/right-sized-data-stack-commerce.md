---
title: "The Right-Sized Data Stack for a Commerce Brand (No, You Don’t Need Databricks)"
seoTitle: "Right-Sized Data Stack for a Commerce Brand"
description: "A pragmatic architecture for €2M–200M commerce businesses: managed warehouse, ELT connectors, dbt transforms, one BI layer — and the enterprise toys to skip."
date: 2026-02-11
category: "Data & Dashboards"
tags: [data-stack, warehouse, analytics-engineering]
---
Commerce brands consistently buy data infrastructure two sizes wrong: spreadsheet-and-prayer long past the point of pain, then — stung — an enterprise platform sized for a bank. Between those failure modes sits a boring, proven, right-sized stack that runs a €2M–200M commerce business for hundreds, not tens of thousands, per month.

## The shape

**One managed warehouse** (BigQuery, Snowflake, or increasingly DuckDB/MotherDuck at the smaller end — commerce data is *small* by data-industry standards; a million orders a year is nothing). **Managed ELT connectors** (Fivetran/Airbyte-class) pulling Shopify, Amazon, ad platforms, GA4, your 3PL and finance tools on schedule — the [settlement reports included](/insights/marketplace-integration-mistakes-that-kill-margin/), because that is where the margin truth hides. **dbt for transforms**, version-controlled, tested, turning raw feeds into a modelled layer: orders, margin, inventory, marketing. **One BI tool** on top — and [dashboards built like products](/insights/dashboards-executives-actually-open/), not inventories.

The entire stack is configuration and SQL. No Spark clusters, no Kafka, no data lakehouse — commerce analytics is joins and aggregates over modest volumes, and pretending otherwise is how eighty-thousand-euro platform bills happen to forty-person companies.

## The part that is actually hard

Not the tools — the *semantics*. What is net revenue (after refunds? fees? vouchers)? Which timestamp is "the sale" (order, payment, ship)? How do returns hit last month's cohort? Which channel owns a marketplace order fulfilled from webshop stock? Every dashboard argument in your company's history is an undocumented definition. The valuable work is a metrics layer where each number is defined once, in writing, in code review — and every tool downstream inherits it. Two weeks of definition workshops save two years of "whose number is right" meetings.

## Sequencing that pays back fast

1. **Week 1–2:** warehouse + connectors live; raw data landing on schedule. Immediate win: settlement reconciliation queries that [find money](/insights/marketplace-integration-mistakes-that-kill-margin/).
2. **Week 3–5:** core dbt models — orders, margin (fully loaded), inventory positions. First honest [per-SKU contribution](/insights/d2c-unit-economics-numbers-that-matter/) numbers most brands have ever seen.
3. **Week 6–8:** the three dashboards that matter (plan tracking, SKU contribution, channel P&L) plus alerting on the anomalies that cost money (stock-outs on winners, fee drift, ad overspend).

After that, the stack earns extensions: [MMM feeds](/insights/attribution-after-cookies-what-works/), forecast models, [feed-quality monitoring](/insights/product-feeds-are-your-real-storefront/). Each addition rides infrastructure that already paid for itself.

## What to defer indefinitely

Real-time streaming ([you rarely need it](/insights/you-probably-dont-need-real-time-analytics/)); customer-data platforms until your channel count forces one; reverse-ETL until a workflow demands it; anything whose pitch involves "AI-ready lakehouse". The stack above *is* AI-ready — clean modelled tables are exactly what [analytical agents](/services/#ai) want to query. Boring first; clever rides on boring.
