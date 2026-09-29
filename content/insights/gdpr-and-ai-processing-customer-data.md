---
title: "GDPR and AI: Processing Customer Data Lawfully in 2026"
description: "Lawful basis for AI features, the training-data question, DPIAs that actually help, vendor DPA clauses to demand, and how EU AI Act duties stack on top."
date: 2026-06-17
category: "Compliance & Trust"
tags: [gdpr, privacy, ai, compliance]
---
*Orientation, not legal advice — your DPO or counsel signs off, not a blog post.*

Every AI feature that touches customer data is a GDPR processing activity wearing new clothes, and the regulators' patience with "but it's AI" as an exemption theory is zero. The good news: the analysis is tractable, and doing it once — properly — unlocks the whole roadmap instead of relitigating per feature.

## Lawful basis, feature by feature

Support automation reading order history to answer "where is my parcel" sits comfortably in **contract performance**. Personalisation and analytics generally run on **legitimate interests** — with the balancing test *written down*, because "we did the LIA" is a document, not a feeling. Marketing-adjacent AI (predictive audiences, churn scoring feeding outreach) leans on the consent you collected — check that your consent language actually covers it, because 2019's checkbox rarely described 2026's processing. And anything approaching *solely automated decisions with legal or similar effect* — credit, account termination, claim denial — triggers Article 22: meaningful human involvement, explanation and contest rights. Design [the human checkpoint](/insights/company-ai-policy-what-belongs/) in from the start; retrofitting oversight is redesign.

## The training question, settled sensibly

The default posture that keeps you safe and honest: **customer data is not used to train general models, and your vendor contracts say so.** Model providers all offer no-training commitments at the business tier — [demand them in the DPA](/insights/questions-procurement-should-ask-ai-vendors/), alongside EU inference/residency options and log-retention terms. Fine-tuning *your own* models on customer data is processing like any other: define basis, minimise (does the tuning set need identifiers? almost never — pseudonymise first), and answer the deletion question *before* training: your realistic toolkit is dataset hygiene, re-training cadence and suppression layers, and your retention policy should say which.

## DPIAs that are actually useful

Large-scale profiling, novel processing, vulnerable subjects — your AI roadmap will trip DPIA thresholds regularly. Written well, a DPIA is not friction; it is the design review where [guardrails](/insights/ai-agent-guardrails-production/), retention, access scopes and the Article 22 analysis get decided while they are cheap. Ours run 6–10 pages and double as the technical documentation seed for **EU AI Act** duties — the two regimes overlap heavily (transparency, oversight, logging), and doing them as one exercise is [the efficient path](/insights/eu-ai-act-compliance-checklist-2026/).

## The operational tells regulators look for

Records of processing that mention the AI systems at all; retention actually enforced in the pipelines (not just written in the policy); subject-access responses that include AI-derived data (scores, categorisations — they are personal data); and logs that show the human oversight happening, not just designed. These are engineering artefacts, which is why privacy work that stays in legal never quite lands — it has to ship in [the build](/services/#ai).

Teams that treat GDPR as an architecture input ship AI features *faster* after the first one: the patterns — basis mapping, pseudonymisation, DPA templates, logging — reuse. Teams that treat it as a launch-gate surprise ship once, painfully, and then stall. Choose the compounding path.
