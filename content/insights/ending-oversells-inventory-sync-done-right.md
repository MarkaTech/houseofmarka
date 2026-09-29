---
title: "Ending Oversells: Inventory Sync Architecture That Actually Works"
seoTitle: "Inventory Sync Architecture That Ends Oversells for Good"
description: "Oversells are not a stock problem — they are a latency problem. Event-driven sync, per-SKU buffers and channel allocation rules that protect seller metrics."
date: 2025-12-10
category: "Commerce & Marketplaces"
tags: [inventory, integration, operations]
---
Every multichannel seller knows the sequence: flash sale empties a SKU on the webshop, ten minutes later two marketplace orders arrive for stock that no longer exists, support writes apology emails, and the seller-performance dashboard takes the hit that actually hurts — because marketplace suspensions are made of exactly these metrics.

Oversells get discussed as an inventory problem. They are a *latency* problem, and latency is an architecture choice.

## Why polling loses

The default integration pattern — sync stock every 15/30/60 minutes — guarantees a window where channels sell against stale numbers. Widening buffers to cover the window means your bestsellers show out-of-stock while real units sit unsold; the cure costs more than the disease. At any real velocity, scheduled polling is structurally unable to win: the window exists, and Black Friday finds it.

## The shape that works

**Stock changes as events.** Warehouse movements, order captures and cancellations publish to a message bus the moment they happen. Channel adapters consume and push deltas within seconds. The oversell window shrinks from minutes to the marketplace API's own processing time — which is as good as it gets from outside.

**Buffers computed, not folklore.** The buffer each channel holds back should be a function of that SKU's sales velocity, the channel's ingestion latency and your tolerance for the rare race — recomputed continuously. A slow-moving SKU needs no buffer anywhere; a viral one needs real protection only on the slow channels. Uniform "hold back 10%" is the [margin-killing folklore](/insights/marketplace-integration-mistakes-that-kill-margin/) we un-write most often.

**Allocation rules for constrained stock.** When supply is short, software should decide who gets it: protect the channel where stockouts damage rankings most (usually Amazon), starve the channel with the gentlest penalties, reserve units for the webshop where margin is best. These are business rules worth arguing about in a meeting once — then encoding, because 3am does not attend meetings.

**Reconciliation as a habit.** Events drift from reality — missed webhooks, warehouse miscounts, returns in limbo. A periodic full reconcile against warehouse truth, with alerting on variance patterns, catches the drift before customers do. Event-driven *and* reconciled is the grown-up answer; either alone eventually lies to you.

## What good looks like in numbers

Clients on this architecture run oversell rates below one in ten thousand orders through peak season, with buffer stock cut by half or more — both at once, which is the point. The [UK homeware case](/work/marketplace-sync/) is the long version: eleven channels, real-time reconciliation, and a listing team that stopped doing apology maths.

If your team still speaks of "the sync" as a scheduled thing that runs, the window is open right now. Peak season will find it — it always does.
