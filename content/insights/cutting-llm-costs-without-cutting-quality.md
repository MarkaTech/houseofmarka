---
title: "Cutting LLM Costs 60–90% Without Cutting Quality"
description: "Model routing, caching, batching, distillation and prompt hygiene — the cost levers that actually work in production, ranked by effort and payback."
date: 2026-06-04
category: "AI & Agents"
tags: [llm, cost-optimization, inference]
---
AI features have a habit of shipping on frontier-model list prices and meeting the CFO three months later. The good news: production LLM spend is one of the most compressible line items in software. These are the levers, in the order we pull them.

## 1. Routing: stop using one model for everything

Most pipelines send every request to the biggest model out of launch-day caution. But classification, extraction and reformatting — usually 60–80% of volume — run fine on models costing 10–30x less. Route by task type first, then by confidence: small model answers, checks itself, escalates when unsure. Typical result from routing alone: 50–70% off, quality flat or better because the big model now only sees problems worthy of it.

## 2. Caching: the free 20%

Production traffic repeats. Same product questions, same policy lookups, same header boilerplate in every prompt. Provider-side prompt caching discounts repeated prefixes dramatically; response caching with a semantic key handles the repeated questions. Commerce support traffic is notoriously repetitive — we have measured 25–40% cache-hit rates in season.

## 3. Prompt hygiene: pay for words that work

Prompts accrete. Instructions nobody remembers writing, examples for edge cases that no longer occur, entire documents pasted "for context". Every token in the prompt is billed on every call. A quarterly prompt audit — measure, trim, re-run the eval suite — reliably shaves 15–30% with zero behaviour change. Boring, effective, skipped by everyone.

## 4. Batching and async

Not everything needs an answer in two seconds. Catalogue enrichment, report generation, overnight reconciliation — batch endpoints price at roughly half of interactive rates. Architecture question, not model question: separate the interactive path from the bulk path early and the discount is permanent.

## 5. Distillation: graduate when volume justifies it

Once a task is stable and high-volume, use the expensive model to label a training set and tune a small model to replicate the behaviour. The frontier model becomes your teacher and your auditor — sampling the small model's output — instead of your workhorse. This is the 90% tier, and it only makes sense with real volume, because you are taking on a model to maintain.

## The discipline that makes it safe

Every lever above is a behaviour change, which means every one needs the same test: run the evaluation suite before and after. Cost work without an eval harness is quality roulette with a discount code. Build the harness first; it is also [how we run these engagements](/services/#ai) — the eval suite is deliverable number one, and the savings report cites it.

Order of operations for a team starting today: measure per-task cost, add caching (days), split routing (a week), audit prompts (an afternoon that pays for the month). Distil later, if the volume arrives.
