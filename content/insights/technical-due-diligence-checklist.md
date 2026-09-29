---
title: "Technical Due Diligence Before You Acquire: The Checklist That Finds the Bodies"
seoTitle: "Technical Due Diligence Checklist for Acquirers"
description: "You buy the codebase, data liabilities and key-person risk with the company. What two weeks of diligence should examine, and the red flags that reprice deals."
date: 2026-06-05
category: "Engineering"
tags: [due-diligence, m-and-a, advisory]
---
Acquirers audit the financials with forensic energy, then accept the technology on a demo and a architecture diagram drawn for the occasion. Yet in software-touched deals, the technology *is* the asset — and its liabilities (rewrite debt, data exposure, key-person dependencies, licence contamination) reprice deals more often than revenue restatements. A competent technical diligence takes two weeks and answers five questions:

## 1. Does it work the way the story says?

Not "is the code pretty" — does the system's *reality* match the pitch? Claimed AI is [actually a model pipeline or a rules engine with a press release](/insights/questions-procurement-should-ask-ai-vendors/)? "Scalable platform" is one tenant per database with hand-run migrations? The "integration ecosystem" is [three cron jobs and a shared password](/insights/integration-errors-design-for-failure/)? Read the code where the claims are boldest; run the system where the demo was smoothest. Gaps here are not deal-killers — they are *price* information.

## 2. What does it cost to keep alive?

Infra spend per customer and its curve; the deploy process (a [release train](/insights/weekly-release-trains-small-teams/) or a quarterly ceremony with a body count); incident history and on-call load; the dependency graph's EOL exposure (that framework version, that database edition, that [API deprecation calendar](/insights/marketplace-integration-mistakes-that-kill-margin/)). The question behind the question: is engineering capacity currently *building* or *bailing*? Ask for the last quarter's merged work and count the ratio.

## 3. Who holds it in their head?

The bus factor audit: commit concentration, undocumented domains, the one person who "does the deploys". Key-person technical risk is retention-package math and integration-plan math — find it before the LOI, because the person in question has already read the room. Related: contractor-built cores with expired relationships, and [spreadsheet-shaped production systems](/insights/when-to-kill-the-spreadsheet/) whose author is the CFO's former analyst.

## 4. What legal surface does the code carry?

Licence scan for the classics (GPL-family code compiled into proprietary product; "source-available" dependencies whose terms exclude exactly this acquisition); IP hygiene (contractor agreements with assignment clauses — or without them); and the data audit: what personal data, which [lawful bases](/insights/gdpr-and-ai-processing-customer-data/), which jurisdictions, and whether the [privacy engineering](/insights/us-state-privacy-laws-map-2026/) matches the policy prose. Data liabilities transfer with enthusiasm; ask Marriott. If AI is in the product: training-data provenance and [customer-data terms](/insights/company-ai-policy-what-belongs/) — the EU AI Act makes some of yesterday's shortcuts tomorrow's provider obligations.

## 5. What must be true for the thesis?

Diligence is not a beauty contest; it is thesis-testing. If the plan is "bolt onto our platform", the finding that matters is API surface and [contract-test readiness](/insights/rewrite-the-client-keep-the-core/). If it is "scale 10x", it is the load-bearing shortcuts. If it is "the team is the asset", it is question 3, doubled. Write the thesis's technical assumptions first; spend the two weeks on those.

The deliverable that changes outcomes is not a 60-page findings PDF — it is a *repriced risk register*: each finding with cost-to-fix, time-to-fix, and who bears it, feeding directly into price, escrow, and the 100-day plan. We run these as [fixed-scope engagements](/services/) for funds and strategics; the second-most-common outcome is a better price. The most common is a better 100-day plan — because the bodies, once found, are just backlog.
