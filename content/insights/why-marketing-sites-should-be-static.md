---
title: "Why Your Marketing Site Should Be Static (and What That Buys You)"
seoTitle: "Why Your Marketing Site Should Be Static: Speed and Cost"
description: "Static-first marketing sites are faster, safer and nearly free to run — Core Web Vitals, zero-patch security and CDN economics. Where the approach ends."
date: 2025-12-03
category: "Engineering"
tags: [jamstack, performance, web, azure]
---
A marketing site has one job: load instantly, look expensive, convert, and never page anyone at 3am. For that job, the architecture argument has quietly ended — pre-rendered static output on a CDN wins on every axis that matters, and the exceptions are knowable in advance. (Disclosure of bias: this site, and most we ship, run exactly this way — Next.js static export on [Azure Static Web Apps](/insights/azure-static-web-apps-production-guide/).)

## The case, on its three legs

**Speed you cannot un-win.** HTML rendered at build time and served from edge nodes removes the server round-trip, the database, and the cold start from the critical path. Sub-second LCP on mid-tier mobile stops being an optimisation project and becomes the default — with the [conversion effects](/insights/cro-checklist-product-pages/) and Core-Web-Vitals ranking tailwind that follow. The fastest request is the one nothing computes.

**Security by absence.** No runtime, no CMS process, no plugin surface, no patch Tuesdays. The CVE feed that governs WordPress operations simply does not apply to files on a CDN. For lean teams, "nothing to exploit at request time" is not a slogan — it is entire categories of incident deleted, which is why [security questionnaires](/insights/nis2-dora-what-vendors-must-prove/) get easier too.

**Economics that round to zero.** This class of site runs on free-to-tens-of-euros tiers with global CDN and managed TLS included. No instances to right-size, no 2am capacity alarms when a campaign lands — the traffic spike is the CDN's problem, and CDNs do not find spikes interesting.

## "But we edit content" — solved, pick your flavour

The static part is *serving*, not authoring. Git-based content (our default for engineering-adjacent teams — this blog is markdown in a repo), or a headless CMS (Sanity/Contentful class) triggering rebuilds for marketing-owned editing. Builds complete in minutes; preview deployments give every draft a URL. The workflows are better than the legacy-CMS ones they replaced, not worse — versioned, reviewable, unbreakable by a plugin update.

## Where static honestly ends

Personalisation beyond a cosmetic layer, logged-in experiences, carts and checkout, search over large catalogues, [dashboards](/insights/dashboards-executives-actually-open/) — these are applications, and pretending otherwise produces static sites with a JavaScript app's weight and none of its coherence. The clean pattern is islands: static shell, dynamic edges (a serverless function for [the form](/contact/), an API-backed search widget), and a real application where a real application belongs — which is [a different build](/services/#apps) with different economics, chosen deliberately.

The strategic point: marketing sites are conversion assets with uptime requirements, not engineering playgrounds. Spend the cleverness where users log in; ship the brochure as files; let the CDN take the pager.
