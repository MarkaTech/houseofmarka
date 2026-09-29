---
title: "Azure Static Web Apps in Production: A Field Guide"
description: "SWA’s free-tier economics, custom domains and DNS, staticwebapp.config headers and caching, preview environments and the limits that matter in production."
date: 2026-07-08
category: "Engineering"
tags: [azure, static-web-apps, deployment, web]
---
Azure Static Web Apps occupies a sweet spot the marketing page undersells: globally distributed static hosting with managed TLS, preview environments and optional serverless functions — with a free tier that genuinely runs production marketing sites. Field notes from operating it, including for [this site](/insights/why-marketing-sites-should-be-static/):

## The economics, plainly

**Free tier:** 100 GB bandwidth/month, custom domains with managed certificates, staging environments — for most content sites, that is the entire bill: €0. **Standard (~$9/month/app):** the SLA, more staging slots, bigger app size ceilings and private endpoints when an enterprise posture demands them. The upgrade is a toggle, not a migration — start free, upgrade when a limit (not anxiety) says so.

## Deployment without the GitHub assumption

The default path is GitHub Actions, and it is fine. Less documented: the **SWA CLI deploys any folder from anywhere** — `swa deploy ./out --env production --deployment-token $TOKEN` — which suits build systems, CI you already have, or [an agent doing the deploying](/services/#ai). Named environments (`--env preview-x`) give you URL-isolated previews on the same app, free-tier included; they are the review-workflow feature most teams do not know they already have.

## staticwebapp.config.json is the actual product

The config file governs routing, headers, auth and caching; three stanzas do most of the production work:

- **Security headers globally** — HSTS with preload, `X-Content-Type-Options`, frame options, a real `Permissions-Policy`. SWA does not set these for you; [questionnaires](/insights/nis2-dora-what-vendors-must-prove/) will ask.
- **Immutable caching for hashed assets** (`/_next/static/*` → `max-age=31536000, immutable`) while HTML stays revalidated — the pairing that makes deploys instant *and* repeat visits free.
- **404 and trailing-slash discipline** — `responseOverrides` to your real 404 page (returning a real 404 status, which [SEO requires](/insights/why-marketing-sites-should-be-static/)) and `trailingSlash: "auto"` to end duplicate-URL drift.

## Custom domains and the apex question

CNAME for `www` is trivial. The apex (`yourdomain.com`) needs either an ALIAS-capable DNS host or — the clean answer inside Azure — **Azure DNS with an alias A-record to the SWA resource**, which also unlocks TXT-based validation while DNS still propagates. Certificates are issued and renewed managed, per hostname, free. (The pattern of moving nameservers to Azure DNS while *preserving existing MX/SPF records* deserves care — copy the mail records into the zone before delegating, or email stops and the postmortem is yours.)

## Limits that actually bite

App size ceilings (free: 250 MB — a large image library belongs in blob storage/CDN, not the deploy), 100 GB bandwidth on free (a viral day can eat it; Standard raises it with overage), functions are Node/Python/.NET-flavoured managed Functions with cold-start characteristics (fine for [contact forms](/contact/), wrong for latency-critical APIs), and no server-side rendering — SWA serves what you built, which is [the point](/insights/why-marketing-sites-should-be-static/).

Net: for content sites, docs, and static-shell apps, SWA is the boring, correct choice in an Azure-shaped organisation — and boring, correct infrastructure is [the house style](/services/#platform).
