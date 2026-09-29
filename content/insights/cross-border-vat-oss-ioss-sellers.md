---
title: "Cross-Border VAT for EU Sellers: OSS, IOSS and the Rules That Changed the Maths"
seoTitle: "Cross-Border VAT for EU Sellers: OSS and IOSS Rules"
description: "A working guide to EU VAT for e-commerce: when OSS applies, what IOSS covers, marketplace deemed-supplier rules, and the mistakes that trigger audits."
date: 2026-02-04
category: "Commerce & Marketplaces"
tags: [vat, eu, cross-border, compliance]
---
*This is a practitioner's orientation, not tax advice — bring your specific structure to a VAT professional.*

EU VAT for e-commerce was rebuilt in 2021 and merchants are still mis-implementing it in 2026. The short version: distance-selling thresholds per country are gone, a single €10,000 EU-wide threshold remains, and above it you charge the *customer's* country VAT rate on B2C sales. What keeps this manageable is OSS — and what keeps it dangerous is assuming your platforms handle it.

## OSS: one return instead of twenty-seven

The One-Stop Shop lets you register in one member state and file a single quarterly return covering B2C sales across the EU, remitting each country's VAT through your home administration. Without it you would need registrations everywhere you sell. With it, the *filing* is consolidated — but the *rates* are still per-country, per-product-category. Reduced rates differ wildly (children's clothing, books, food supplements are classic traps). Your checkout and your invoicing must know the right rate; OSS just aggregates the paperwork.

## IOSS: imports under €150

Selling into the EU from outside (UK sellers, US brands, dropship models): IOSS lets you charge VAT at sale for consignments under €150, so the parcel clears customs without surprising your customer with a courier fee and a doorstep negotiation. Above €150, standard import rules apply and the experience degrades — which is why serious non-EU brands eventually hold EU stock, changing the VAT picture again (local registrations where inventory sits, including every FBA warehouse country in your Pan-EU settings).

## The marketplace twist: deemed supplier

For many scenarios — non-EU sellers on marketplaces, and imports under €150 — the *marketplace* is deemed the supplier and collects VAT itself. Amazon, eBay and the rest handle those transactions' VAT. The trap: deemed-supplier applies to *some* of your transactions, not all. Your own webshop sales, B2B sales, and EU-established-seller scenarios remain yours. Merchants who "let Amazon handle VAT" and applied that belief to their Shopify store have funded several audits we know of.

## Where implementations go wrong

- Fulfilment location changes tax treatment; enabling Pan-EU FBA created registration obligations in every storage country and nobody told finance.
- Rate tables hard-coded at launch, drifting from reality as member states adjust rates.
- Refunds and returns not flowing back into OSS reporting, quietly overstating liability.
- B2B sales without validated VAT numbers treated as B2C — or worse, reverse-charged without validation.

The engineering answer is unglamorous: tax treatment computed per order from ship-from, ship-to, channel, customer type and product category — as data, not as scattered if-statements — and reconciled against settlement reports monthly. That logic is part of [the commerce layer we build](/marketplaces/); the quarterly filing stays with your accountant, who will thank you for handing them clean numbers.
