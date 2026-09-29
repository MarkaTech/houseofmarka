---
title: "When to Kill the Spreadsheet: A Field Guide to Graduating Into Software"
seoTitle: "When to Kill the Spreadsheet: Signals You Need Software"
description: "Spreadsheets are the right tool until the moment they aren’t. The five failure signals, what each one costs, and how to migrate without a two-year IT project."
date: 2025-11-05
category: "Data & Dashboards"
tags: [operations, automation, internal-tools]
---
Every company runs on more spreadsheets than its org chart admits, and mostly that is fine — spreadsheets are the most successful end-user programming environment ever shipped. But certain workloads outgrow them in ways that show up as money, and the graduation moment is visible in advance if you know the signals.

## The five signals

**1. More than one person edits it.** Concurrent editing plus business logic equals silent overwrites and "which version is right" archaeology. The moment a spreadsheet has an *audience* schedule and an *editor* rota, it is an application wearing a costume.

**2. It feeds decisions faster than its refresh.** The pricing sheet updated weekly steering daily [repricing](/insights/repricing-without-race-to-bottom/); the stock cover tab that lags the [warehouse truth](/insights/ending-oversells-inventory-sync-done-right/) by a day. Stale-data decisions cost real margin and nobody logs the cost against the spreadsheet.

**3. Copy-paste is the integration layer.** Someone exports from three systems and pastes every Monday. That person is a human cron job with a salary and holiday entitlement, and the Tuesday they are ill is an outage. (This is also the [most common finding](/insights/marketplace-integration-mistakes-that-kill-margin/) in our marketplace audits — settlement data pasted monthly, wrongly.)

**4. Formulas nobody dares touch.** The 40-tab workbook where cell dependencies form an archaeology site and the author left in 2023. Untested logic that moves money is production code; it just has no version control, no review and no backups that anyone has verified.

**5. It broke and it mattered.** The honest trailing indicator. A mis-dragged fill handle that mispriced a channel, a filter that hid half the POs. If a spreadsheet error has ever made it into an incident retro, the retro's action item is this article.

## Graduating without the trauma

The failure mode on the other side is real too: replacing a living spreadsheet with a two-year ERP module that does less. The middle path that works:

- **Keep the spreadsheet as the *interface* where it earns it,** backed by real data: warehouse-connected sheets reading modelled tables from the [data stack](/insights/right-sized-data-stack-commerce/) kill the copy-paste layer without retraining anyone.
- **Move the *logic* into versioned code** (dbt models, small services) with tests — the formulas were the risk, not the grid.
- **Build thin internal tools for the write paths** — the approval flows, the overrides, the [exception queues](/insights/demand-forecasting-ml-minus-hype/) — where audit trails and permissions matter. Modern internal-tool stacks make these days-not-months builds; [we ship them](/services/#apps) alongside the data layer routinely.
- **Retire by workload, not by workbook.** One tab at a time, with the old sheet running in parallel for a cycle, diffed against the new path. Trust transfers on evidence.

The test worth institutionalising: *if this file were wrong for a week, what would it cost?* Price the answer, and the migration list ranks itself. Spreadsheets deserve their long career — just not in the roles where they now quietly handle production.
