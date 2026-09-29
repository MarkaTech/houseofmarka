---
title: "Integration Errors: Designing for the Failure That Is Coming"
seoTitle: "Integration Errors: How to Design for Certain Failure"
description: "Third-party APIs fail constantly and yours must not care — idempotency, retries with jitter, dead-letter queues, circuit breakers and routine reconciliation."
date: 2025-11-19
category: "Engineering"
tags: [integration, reliability, architecture, apis]
---
Commerce systems are federations of other people's computers: marketplaces, PSPs, carriers, ERPs, tax engines. Every one of them will time out, rate-limit, return a 500 with a 200 status, change a field's meaning in a minor version, or go down for a maintenance window announced in a portal nobody reads. Integration quality is therefore not about the happy path — any intern can call an API — it is about what your system does in the fifteen ways the call goes wrong. The patterns are old, known and endlessly un-implemented:

## Idempotency: the license to retry

Before retries can be safe, operations must be repeatable without double effect — idempotency keys on writes ("create order once, no matter how many times I ask"), natural keys and upserts on syncs. Without this, every retry policy is a duplicate-order generator with a schedule. With it, aggressive recovery becomes boring. This is the first thing we check in [integration audits](/insights/marketplace-integration-mistakes-that-kill-margin/), because everything else depends on it.

## Retries that do not make it worse

Exponential backoff **with jitter** (synchronized retries are a self-inflicted DDoS), retry budgets (give up meaningfully, not infinitely), and honoring `Retry-After` — marketplace rate limits are contracts, and [seller metrics](/insights/ending-oversells-inventory-sync-done-right/) pay for violations. Classify errors first: retry the transient (timeouts, 429s, 5xx), never the semantic (validation failures retried forever are a log-filling ritual, not resilience).

## Dead-letter queues: where failures go to be seen

After the retry budget, failed work goes to a DLQ — with payload, error history and replay tooling — not to a log line at 2am. The DLQ is an *operational surface*: dashboarded by age and type, owned, drained. A quiet DLQ is system health; a growing one is [next sprint's backlog](/insights/dashboards-executives-actually-open/) writing itself. The anti-pattern — catch, log, continue — is how listings silently stop syncing for eleven days.

## Circuit breakers and graceful degradation

When a dependency is down, stop calling it — fail fast, queue the work, serve stale-but-labelled data where reads allow. The design question worth a meeting per dependency: *what does our user see during their outage?* "Checkout works, delivery estimate says 'confirming'" is engineering; a spinner for ninety seconds is surrender.

## Reconciliation: the humility loop

Events get missed — webhooks are at-least-once *at best*, and at-most-once in practice on the worst day. Scheduled reconciliation against source-of-truth reports (orders vs settlement files, stock vs WMS counts, [the discipline](/insights/channel-pnl-marketplace-profit/) that also finds money) catches the drift that event streams deny. Event-driven for speed, reconciled for truth; either alone is a system that lies eventually.

## Observability that names business, not plumbing

Alert on "Amazon order ingestion stalled 15 minutes" and "feed rejection rate >2%", not on CPU. Per-integration dashboards: throughput, error rate by class, DLQ depth, staleness. When [the API deprecation](/insights/marketplace-integration-mistakes-that-kill-margin/) or the silent schema change lands, you want the graph that points at it before support tickets do.

None of this is novel — it is the difference between integrations that demo and integrations that run through Black Friday unattended, which is the [entire product](/marketplaces/) in our corner of the industry. Boring by design; boring is the deliverable.
