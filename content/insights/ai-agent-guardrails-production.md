---
title: "Guardrails That Keep AI Agents Out of Trouble in Production"
seoTitle: "AI Agent Guardrails: What to Ship Before Production"
description: "Approval gates, spend ceilings, typed tools, kill switches and audit logs — the guardrail architecture behind every agent, and the incidents each prevents."
date: 2026-07-09
category: "AI & Agents"
tags: [ai-agents, guardrails, production, safety]
---
The gap between an agent demo and an agent in production is not intelligence — it is containment. Demos are judged on what the agent can do; production systems are judged on what they cannot be made to do. Here is the guardrail set we ship by default, and what each one has prevented.

## Typed tools, not open access

An agent should act through a small set of explicit, typed functions — `lookup_order(id)`, `issue_refund(order, amount, reason)` — never through raw database access or a browser session with your admin panel. Typed tools make the possible-action space enumerable. When a security reviewer asks "what is the worst this system can do", you answer by reading a file, not by imagining.

## Approval gates with thresholds

Every consequential action gets a gate: refunds above a limit, any message to more than N recipients, any change to standing data. Below threshold, auto-approve and log; above it, a human clicks. The threshold is configuration, not code, so authority expands as evaluation data earns it. One client began with gates on every refund; ninety days of logs later, gates cover only amounts over €150 — a decision made from evidence, not optimism.

## Spend and rate ceilings

Agents fail in loops: retrying a failing tool forever, or fanning out into expensive model calls. Hard ceilings — per task, per hour, per day — turn a runaway into a paused ticket. The pager is calmer, and so is the invoice. Set the ceiling at 3x expected cost; you will trip it in month one and be glad.

## Grounding checks before send

For customer-facing output, a cheap second pass: does the reply cite a retrieved source? Does the promised delivery date exist in the shipping record? Claim-checking against the context that produced the answer eliminates the classic hallucination incidents — invented discount codes, imaginary policies — at trivial cost.

## Kill switch and safe degrade

One switch turns the agent off and routes work to the human queue. Test it monthly, like a fire drill. The systems that fail worst are the ones where "turn it off" is a deployment, not a toggle.

## Logs a lawyer can read

Every action logged with its reasoning, its inputs and its approver. When a customer disputes an AI decision — and under the EU AI Act, when a regulator asks how oversight works — the answer is an export, not an archaeology project.

None of this is exotic. It is a week of engineering on top of a working agent, and it is the difference between automation your operations team trusts and automation they quietly route around. We treat it as [part of the build](/services/#ai), not a hardening phase after — because the hardening phase after is where incidents live.
