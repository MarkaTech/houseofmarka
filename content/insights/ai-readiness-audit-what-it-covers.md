---
title: "What an AI Readiness Audit Should Cover (and What to Ignore)"
seoTitle: "AI Readiness Audit: What It Should Cover, What to Ignore"
description: "The six questions that decide whether an AI initiative ships — data access, process clarity, evaluation, integration surface, governance and unit economics."
date: 2026-05-14
category: "AI & Agents"
tags: [ai-strategy, audit, consulting]
---
"AI readiness" has become a product every consultancy sells and few define. Having run these for commerce and SaaS companies on both sides of the Atlantic, here is what a useful one covers — and the theatre a bad one pads itself with.

## The six questions that matter

**1. Can the AI reach your data — legally and technically?** Not "do you have data". Can a system query your orders, your catalogue, your support history through an API with sane permissions? Is customer data usable under your privacy policy and GDPR/state-privacy obligations? Half of stalled AI projects are stuck here, in plumbing and consent, not in modelling.

**2. Which processes are actually specifiable?** AI automates decisions that can be described. "Handle supplier emails" is not specifiable; "extract PO number, match against open orders, flag mismatches over €500" is. An audit should leave you with a ranked list of specifiable processes, not an inspiration deck.

**3. What does correct look like, and who says so?** If nobody can label 200 historical examples as good/bad outcomes, you cannot evaluate a system, which means you cannot safely deploy one. The audit should identify where ground truth exists and what building it would cost where it does not.

**4. What is the integration surface?** Every system the AI must read from or write to, with the state of its API. This is where estimates become honest — the model is 20% of the work; the ERP connector nobody wants to touch is the other 80%.

**5. Who is accountable when it is wrong?** Approval gates, escalation paths, audit logs, a named owner. Governance is a design input. Bolting it on later means redesigning the workflow you just shipped.

**6. Do the unit economics survive scale?** Cost per task at pilot volume and at 20x. Model routing and caching change these numbers dramatically, and a pilot priced on frontier-model list prices often dies in the CFO's spreadsheet when multiplied.

## What to ignore

Maturity scores against five-level frameworks. Heatmaps of "AI opportunity by department". Anything benchmarking you against "leaders" defined by survey self-reporting. These fill slides and change nothing.

A good audit ends with three artefacts: a ranked backlog of specifiable use cases with honest integration estimates, an evaluation plan for the top two, and a governance one-pager your board can actually read. Two to three weeks, fixed fee. If a proposal cannot name those deliverables, it is selling you a workshop.

Ours is [scoped here](/services/) — and we tell roughly a third of audit clients that their best first AI project is smaller than the one they came in wanting. That advice is usually worth more than the audit.
