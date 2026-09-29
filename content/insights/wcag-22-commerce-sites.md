---
title: "WCAG 2.2 for Commerce Sites: Accessibility as Law, and as Conversion"
seoTitle: "WCAG 2.2 for Commerce Sites: Accessibility That Converts"
description: "The European Accessibility Act now covers e-commerce; US ADA suits keep rising. The WCAG 2.2 criteria that matter on shop flows, and why they lift conversion."
date: 2026-03-12
category: "Compliance & Trust"
tags: [accessibility, wcag, eaa, compliance]
---
Accessibility spent years filed under virtue. It is now filed under law on both of your target continents: the **European Accessibility Act** applies to e-commerce services since June 2025 — with member-state enforcement ramping through 2026 — and US **ADA website litigation** continues its multi-thousand-suits-per-year cadence with commerce the favourite target. The standard both regimes orbit is WCAG 2.2 AA. The underreported part: the same criteria measurably lift conversion, because accessibility failures are usability failures with a legal department.

## The criteria that decide shop flows

Out of the full standard, a handful do most of the commerce work:

- **Keyboard everything (2.1.1).** Variant pickers, mini-carts, quantity steppers and — the classic failure — custom dropdowns that only mice can open. If checkout cannot complete keyboard-only, you fail both the auditor and every power user.
- **Focus visible and not obscured (2.4.7, 2.4.11 — new in 2.2).** Sticky headers that swallow the focused element are a 2.2-specific violation and a genuinely maddening UX.
- **Labels, names, roles (1.3.1, 4.1.2).** Inputs announced as "edit text" instead of "postal code"; icon buttons with no accessible name. Screen-reader checkout abandonment is total when this is wrong — and [autofill](/insights/cro-checklist-product-pages/) breaks for everyone as a bonus, because autofill reads the same semantics.
- **Error identification and suggestion (3.3.1–3.3.3).** "Something went wrong" in red is a violation *and* the top checkout rage-quit. Say which field failed and how to fix it, programmatically associated.
- **Redundant entry & accessible authentication (3.3.7, 3.3.8 — new in 2.2).** Do not make users re-type what they gave you; do not gate login on puzzle-solving. Guest checkout with email confirmation passes; a memory-test CAPTCHA wall does not.
- **Target size (2.5.8 — new in 2.2).** 24px minimum targets — those tiny quantity steppers and swatch dots on mobile are now codified failures.
- **Contrast (1.4.3, 1.4.11).** The pale-grey-on-white aesthetic fails at scale, including on the disabled-looking buttons that are actually enabled. Design systems fix this once.

## Run it as engineering, not as an audit event

Automated scanners (axe-core in CI) catch perhaps a third of issues — wire them in anyway; they hold the floor. The rest is *flow testing*: keyboard-only and screen-reader passes over search → PDP → cart → checkout, quarterly and on major releases, with findings triaged like any defect. Component-library fixes propagate everywhere, which is why [design-system discipline](/services/#apps) is secretly accessibility strategy. And write the **accessibility statement** the EAA expects — findable, honest about known gaps, with a working contact.

## The commercial footnote that should be the headline

Accessible checkouts convert better in aggregate: clearer labels, visible focus, forgiving errors and bigger targets help every thumb on every commute. The overlap with [CRO best practice](/insights/cro-checklist-product-pages/) is nearly total. Treat WCAG 2.2 as a conversion checklist with legal tailwind, budget it into the build rather than the lawsuit, and the compliance letter — when it comes — gets answered with a link.
