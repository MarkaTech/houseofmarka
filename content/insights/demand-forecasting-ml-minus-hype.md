---
title: "Demand Forecasting With ML, Minus the Hype"
description: "Where machine forecasting beats the buyer’s spreadsheet, and the unglamorous features — promotions, stockouts, lead times — that actually decide accuracy."
date: 2025-11-12
category: "Data & Dashboards"
tags: [forecasting, machine-learning, inventory]
---
Demand forecasting is where commerce ML pitches promise the most and disappoint the most reliably. The honest version: machine forecasts beat human spreadsheets meaningfully in specific conditions, lose embarrassingly in others, and the difference is almost never the algorithm — it is the features and the process around them.

## Where the machine wins

Stable-velocity SKUs with history, seasonal patterns too numerous for humans to track per-SKU, and — the big one — *scale*: a buyer can genuinely reason about fifty SKUs; nobody reasons about five thousand. At catalogue scale, even a mediocre model beats attention that does not exist. Modern gradient-boosted or foundation-model forecasters handle seasonality, trend and promotion effects respectably out of the box, and the accuracy gain over naive methods translates directly into safety-stock reduction — which is working capital, which is the actual business case.

## Where the machine loses

New launches (no history — use analog-SKU methods and human priors), viral spikes (no model sees the TikTok coming; [the event bus](/insights/you-probably-dont-need-real-time-analytics/) reacting fast beats the forecast pretending it knew), regime changes (a price repositioning, a new channel), and anything the model was never told about — which brings us to the real work:

## The features are the product

Forecast accuracy lives and dies on context the raw sales history lacks:

- **Censored demand.** Sales during a stockout are not demand — they are a ceiling. Feeding stockout periods as "zero demand" teaches the model to under-order your winners, a doom loop we un-build constantly. Reconstruct demand from availability data.
- **Promotion calendars.** Last November's spike was a discount, not a trend. Without the promo flag, the model expects it to recur organically every November.
- **Price as an input.** Demand at €39 and €49 are different numbers; if [repricing](/insights/repricing-without-race-to-bottom/) moves your prices, the forecast must see them.
- **Channel expansion.** [New marketplace](/marketplaces/) volume looks like organic growth to a naive model; tag it.
- **Lead-time reality.** The forecast's *purpose* is a purchase decision across supplier lead time — forecast the lead-time horizon, with uncertainty bands, not next week's point estimate.

## Process beats precision

The operating pattern that works: model produces baseline + uncertainty per SKU; buyers review only *exceptions* (forecast vs their intuition diverging beyond threshold, new launches, flagged regimes); every override is logged and scored against outcomes. The override log is the gold: it teaches you where humans add signal (launches, market intel) and where they add anxiety (everywhere else). Over quarters, the exception list shrinks and the buyers move up the value chain to assortment and negotiation — which is what you wanted the headcount doing anyway.

Start with your top 500 SKUs, measure against the incumbent spreadsheet honestly (same holdout period, same metric — weighted MAPE or pinball loss, not vibes), and let the [safety-stock savings](/insights/right-sized-data-stack-commerce/) fund the rollout. Forecasting is a compounding asset only if the inputs stay maintained — budget the pipeline, not just the model.
