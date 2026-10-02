/**
 * The service pages: one landing page per thing House of Marka sells, each at
 * /services/<slug>/. Everything on those pages — title, copy, FAQs, schema,
 * footer links, llms.txt lines — is generated from this file.
 *
 * Writing rules, because answer engines quote the first sentence they find:
 *   - `lede` opens with a complete sentence that names House of Marka and the
 *     service, so it still makes sense lifted out of the page.
 *   - every FAQ answer is a full answer on its own, not a pointer.
 *   - `metaTitle` is at most 48 characters: the layout appends " — House of
 *     Marka", and the whole title has to stay under 65.
 */

export type ServicePage = {
  slug: string;
  /** Short label for cards, nav and footer. */
  name: string;
  kicker: string;
  metaTitle: string;
  /** 50–160 characters. */
  description: string;
  /** The H1. */
  title: string;
  lede: string;
  /** "What we build" — the concrete deliverables. */
  deliverables: string[];
  /** Prose sections: an h2 and its paragraphs. */
  sections: { title: string; copy: string[] }[];
  /** "Why House of Marka" cards. */
  why: { title: string; copy: string }[];
  faqs: { q: string; a: string }[];
  /** Slugs from lib/apps.ts shown as "Our apps" on the page. */
  relatedApps: string[];
  /** Other service slugs linked at the foot of the page. */
  related: string[];
  keywords: string[];
  /** schema.org Service.serviceType */
  serviceType: string;
};

const why = {
  ownApps: {
    title: 'We ship our own apps',
    copy: 'Marka Reviews is on the Shopify App Store; Marka Cart and Marka Bundles are on their way. A studio that has passed app review for its own products knows the checklist by heart.',
  },
  senior: {
    title: 'Senior people, start to finish',
    copy: 'A pod of three to six senior engineers and a designer, with weekly demos. No hand-off to a team you have not met.',
  },
  discovery: {
    title: 'Fixed-fee discovery',
    copy: 'Two to three weeks that end in an architecture, a plan and a fixed price — yours to keep, whoever builds it.',
  },
  hours: {
    title: 'US, UK and EU hours',
    copy: 'Based in Gurugram, India, with overlapping working hours for US, UK and European teams and on-call cover for what we operate.',
  },
  ownership: {
    title: 'You own everything',
    copy: 'Source code, infrastructure definitions, app listings and accounts transfer to you. There is no proprietary runtime to be locked into.',
  },
  measured: {
    title: 'Measured, not asserted',
    copy: 'Speed in Core Web Vitals, conversion in your analytics, accuracy in a test set. We report the number before and after.',
  },
};

export const servicePages: ServicePage[] = [
  {
    slug: 'shopify-app-development',
    name: 'Shopify app development',
    kicker: 'Shopify apps',
    metaTitle: 'Shopify App Development Company',
    description:
      'House of Marka builds Shopify apps that pass App Store review first time — Remix, Polaris, Shopify Functions, checkout extensions, billing — and ships its own.',
    title: 'Shopify app development, by a team that ships its own apps.',
    lede:
      'House of Marka builds Shopify apps for the App Store and for single stores: public apps with billing and a listing, and private apps that do one job for one merchant. We publish our own apps — Marka Reviews, Marka Cart and Marka Bundles — so we build yours the way we build ours: to pass review the first time and to survive every Shopify update after it.',
    deliverables: [
      'Public App Store apps on Remix, Polaris and App Bridge, with Shopify billing and a listing that passes review',
      'Theme app extensions and app embeds that reach the storefront without editing theme code',
      'Shopify Functions for discounts, shipping, payment customisation and cart transforms',
      'Checkout UI extensions and Shopify Plus checkout customisation',
      'Admin UI extensions, Shopify Flow actions and triggers, and POS extensions',
      'Webhook pipelines, the mandatory GDPR webhooks and the data model behind them',
      'App Store listing copy and assets, review submission and the fixes review asks for',
      'Maintenance: API version upgrades, deprecations and the quarterly Shopify changes',
    ],
    sections: [
      {
        title: 'Built for review, not just for the demo',
        copy: [
          'Shopify app review is where most first apps stall: a missing compliance webhook, a billing flow that does not match the listing, an embedded app that breaks outside the admin frame. We build against the review checklist from the first sprint, because we have been through it with our own apps. Every app ships with the mandatory GDPR webhooks, HMAC-verified requests, session-token authentication and a billing flow that matches the listing word for word.',
          'It also means the app keeps working after launch. Shopify retires an API version every quarter. We track the deprecation notices for every app we maintain and upgrade before the deadline, not after the first merchant writes in.',
        ],
      },
      {
        title: 'Native where it counts',
        copy: [
          'Where Shopify offers a native primitive, we use it: Shopify Functions instead of discount workarounds, theme app extensions instead of script tags, checkout UI extensions instead of checkout.liquid, Polaris so the admin feels like part of Shopify. Native apps are faster for shoppers, survive theme changes, and are the ones review approves without a second round.',
        ],
      },
      {
        title: 'From idea to listed',
        copy: [
          'A public app usually goes from a scoped brief to a listed app in eight to twelve weeks: two to three weeks of discovery and architecture, four to eight of build with a demo every week, then listing assets, review submission and launch. A private app is faster — there is no listing, and one merchant to please — and is typically live within six weeks.',
        ],
      },
      {
        title: 'Ours, so you can judge the work',
        copy: [
          'Install Marka Reviews from the Shopify App Store. The admin you see, the widgets your shoppers see and the privacy policy behind them are the standard we hold client work to. Marka Cart and Marka Bundles & Upsells follow the same pattern and are on their way to the App Store.',
        ],
      },
    ],
    why: [why.ownApps, why.senior, why.discovery, why.hours, why.ownership],
    faqs: [
      {
        q: 'How much does it cost to build a Shopify app?',
        a: 'It depends on whether the app is private (one store, no listing) or public (billing, a listing and App Store review), and on how many Shopify surfaces it touches. House of Marka prices in two steps: a fixed-fee discovery sprint of two to three weeks produces the architecture and a fixed price for the build, so you buy a quote, not an estimate.',
      },
      {
        q: 'How long does Shopify app development take?',
        a: 'A private app for a single store is typically live within six weeks of discovery. A public App Store app usually takes eight to twelve weeks from brief to listing, including Shopify’s review. Both run with weekly demos so you see the app grow rather than wait for it.',
      },
      {
        q: 'Can you build a custom app just for my store?',
        a: 'Yes. A custom (private) Shopify app is installed on your store only — an ERP integration, a pricing rule, an admin tool or a storefront feature the public apps do not offer. See the custom Shopify apps service for how those are scoped and built.',
      },
      {
        q: 'Do you handle the App Store listing and review?',
        a: 'Yes. We write the listing, produce the screenshots and demo assets to Shopify’s rules, submit the app for review and fix whatever review asks for. Marka Reviews, our own app, went through the same process.',
      },
      {
        q: 'Which technology do you use for Shopify apps?',
        a: 'Shopify’s Remix app template in TypeScript, Polaris and App Bridge for the admin, Prisma on Postgres for data, Shopify Functions in Rust or JavaScript for pricing and checkout logic, and theme app extensions in Liquid for the storefront. Hosting is on Azure by default, or on your cloud.',
      },
      {
        q: 'Will the app keep working when Shopify changes its API?',
        a: 'Yes, if someone maintains it — and that is part of every build. Shopify retires API versions quarterly; under a maintenance retainer we upgrade before each deadline, handle deprecations and keep the app passing review requirements.',
      },
      {
        q: 'Do you build apps for Shopify Plus?',
        a: 'Yes. Checkout UI extensions, Shopify Functions, B2B features, Shopify Flow and multi-store setups are all Plus territory we work in regularly, for apps and for store customisation.',
      },
    ],
    relatedApps: ['marka-reviews', 'marka-cart', 'marka-bundles'],
    related: ['custom-shopify-apps', 'shopify-store-customisation', 'hydrogen-headless'],
    keywords: [
      'Shopify app development',
      'Shopify app development company',
      'Shopify app developers',
      'build a Shopify app',
      'Shopify App Store app development',
      'Shopify Functions development',
      'checkout UI extensions',
      'Shopify Plus app development',
      'Shopify app development agency',
    ],
    serviceType: 'Shopify app development',
  },
  {
    slug: 'custom-shopify-apps',
    name: 'Custom Shopify apps',
    kicker: 'Custom Shopify apps',
    metaTitle: 'Custom Shopify App Development',
    description:
      'Custom Shopify apps for one store: ERP and warehouse sync, custom pricing and checkout rules, admin tools and storefront features the App Store does not sell.',
    title: 'Custom Shopify apps for the things the App Store doesn’t sell.',
    lede:
      'House of Marka builds custom Shopify apps for a single store: the integration, pricing rule, admin tool or storefront feature your business needs and no public app quite does. Installed on your store only, owned by you, and built to the same standard as the apps we publish ourselves.',
    deliverables: [
      'Integrations with your ERP, warehouse, 3PL, accounting system or PIM — orders out, stock and prices in',
      'Custom pricing, discount and shipping logic with Shopify Functions',
      'Checkout customisation on Shopify Plus: fields, validations, upsells and payment rules',
      'Admin tools: bulk operations, approval workflows and the reports the admin does not have',
      'Storefront features: product configurators, quote requests, B2B catalogues, custom builders',
      'Shopify Flow actions, webhooks and scheduled jobs that keep your systems in step',
      'Replacing a stack of paid apps with one app that does exactly what you need',
    ],
    sections: [
      {
        title: 'When a public app is the wrong answer',
        copy: [
          'Most stores run on ten to twenty apps, each built for everyone and therefore for no one in particular. The moment your process is specific — a pricing rule from your wholesale contracts, a warehouse that wants orders in its own format, a product that has to be configured before it can be bought — the public app either does not exist or needs so many workarounds that it is cheaper to build the right thing.',
          'A custom app is installed on your store alone, carries no monthly fee to a third party, and does precisely what your business does. It can also replace several paid apps at once, which is often where the business case comes from.',
        ],
      },
      {
        title: 'How we scope it',
        copy: [
          'We start with a short, fixed-fee discovery: map the process, read the systems it touches, write an architecture and a fixed price. Then a senior pod builds it on your Shopify Partner account, with a demo every week, so the app is yours from the first commit. Most custom apps are live within four to six weeks.',
        ],
      },
      {
        title: 'Built on Shopify’s own primitives',
        copy: [
          'Custom does not mean fragile. We use the Admin GraphQL API, Shopify Functions for anything that touches prices or checkout, theme app extensions for anything shoppers see, and Shopify Flow wherever a merchant should be able to change the rule without calling a developer. The app moves to new API versions on a schedule we maintain for you.',
        ],
      },
      {
        title: 'Ownership and running costs',
        copy: [
          'You own the code, the Partner app and the infrastructure definitions. Hosting runs on your cloud account or on ours at cost. If you would rather not operate it, a managed retainer covers monitoring, API upgrades and small changes.',
        ],
      },
    ],
    why: [why.ownApps, why.discovery, why.senior, why.ownership, why.hours],
    faqs: [
      {
        q: 'What is a custom Shopify app?',
        a: 'A custom (or private) Shopify app is software built for one store and installed only there, rather than listed on the Shopify App Store for everyone. It uses the same Shopify APIs as public apps — Admin API, Functions, theme app extensions, checkout extensions — to do something specific to your business: integrate a system, apply a pricing rule, add an admin tool or a storefront feature.',
      },
      {
        q: 'Custom app or public app — which do I need?',
        a: 'If the need is specific to your store — your ERP, your pricing contracts, your product logic — a custom app is cheaper and fits better. If you want to sell the app to other merchants, you need a public app with billing, a listing and App Store review. House of Marka builds both and will tell you which one your case is.',
      },
      {
        q: 'How long does a custom Shopify app take to build?',
        a: 'Most custom apps are live within four to six weeks of a two-week discovery. Deep integrations with an ERP or warehouse can take longer, depending on the other system, which is exactly what discovery finds out before you commit.',
      },
      {
        q: 'Can a custom app connect Shopify to my ERP or warehouse?',
        a: 'Yes — that is the most common custom app we build. Orders flow out to the ERP or 3PL in its format, stock levels and prices flow back in, and fulfilment and tracking update the order in Shopify. Every message is logged, retried and reconciled so nothing is silently lost.',
      },
      {
        q: 'Do custom apps work with Shopify Plus checkout?',
        a: 'Yes. On Shopify Plus a custom app can add checkout UI extensions, validation rules, payment and delivery customisations and Shopify Functions — the supported replacement for checkout.liquid.',
      },
      {
        q: 'Who owns the custom app afterwards?',
        a: 'You do. The code, the app in your Partner account and the infrastructure definitions are yours on payment, with documentation. You can host and maintain it yourself, bring another team in, or keep House of Marka on a retainer.',
      },
    ],
    relatedApps: ['marka-bundles', 'marka-cart'],
    related: ['shopify-app-development', 'shopify-store-customisation', 'custom-software-development'],
    keywords: [
      'custom Shopify app',
      'custom Shopify app development',
      'private Shopify app',
      'Shopify ERP integration',
      'Shopify custom pricing app',
      'Shopify Plus checkout customisation',
      'bespoke Shopify app',
      'Shopify integration developer',
    ],
    serviceType: 'Custom Shopify app development',
  },
  {
    slug: 'shopify-store-customisation',
    name: 'Shopify store customisation',
    kicker: 'Shopify stores & themes',
    metaTitle: 'Shopify Store Customisation & Themes',
    description:
      'Customise any Shopify website: theme development, custom sections and templates, Online Store 2.0 migrations, Shopify Plus checkout and B2B. By House of Marka.',
    title: 'Any Shopify website, customised the way you want it.',
    lede:
      'House of Marka customises Shopify websites in any way a merchant needs: new themes and redesigns, custom sections and templates, product-page and collection changes, migrations to Online Store 2.0, Shopify Plus checkout and B2B. Any theme, any size of store, built so the next theme update does not undo the work.',
    deliverables: [
      'Custom theme development and full redesigns on Online Store 2.0',
      'Custom sections, blocks and templates your team edits in the theme editor',
      'Product page, collection and search customisation: swatches, configurators, filters, size guides',
      'Migrations from vintage themes, WooCommerce, Magento, BigCommerce or Wix to Shopify',
      'Shopify Plus: checkout extensibility, B2B catalogues and wholesale pricing, Markets and multi-store',
      'Metafields and metaobjects that model the content your products actually have',
      'Conversion and compliance details: speed, accessibility (WCAG 2.2 AA), structured data',
    ],
    sections: [
      {
        title: 'Customisation that survives updates',
        copy: [
          'The wrong way to customise a theme is to edit it until it can never be updated. We build on Online Store 2.0: sections and blocks with settings, so your team changes copy and layout in the theme editor; JSON templates, so pages are composed rather than coded; metafields, so product content lives on the product. The theme you end up with takes the next update from its author without losing our work.',
        ],
      },
      {
        title: 'Design that sells, not just design',
        copy: [
          'We design product pages around how people buy — hierarchy, imagery, proof, the buy box — and then measure them. Every customisation is checked against Core Web Vitals and accessibility before it ships, because a beautiful page that scores badly in search is a cost, not an asset.',
        ],
      },
      {
        title: 'Shopify Plus and B2B',
        copy: [
          'On Shopify Plus we work in checkout extensibility — UI extensions, Shopify Functions and checkout branding — rather than the retired checkout.liquid, so the checkout keeps working as Shopify ships changes. B2B companies, locations, catalogues, net terms and wholesale price lists are configured natively, with a custom app only where the native model runs out.',
        ],
      },
      {
        title: 'Moving to Shopify',
        copy: [
          'A migration brings products, customers, orders and URLs across with redirects in place, so search rankings survive the move. We run the old and new stores side by side until the numbers match, then switch the domain.',
        ],
      },
    ],
    why: [why.ownApps, why.measured, why.senior, why.discovery, why.hours],
    faqs: [
      {
        q: 'Can you customise my existing Shopify theme, or do I need a new one?',
        a: 'Usually the existing theme. If it is an Online Store 2.0 theme we add sections, blocks and templates to it; if it is a vintage theme we recommend moving to a 2.0 theme first, and migrate your content and settings as part of the work. A full custom theme is for stores whose design brief no theme can meet.',
      },
      {
        q: 'Will the customisations break when the theme updates?',
        a: 'Not if they are built the way House of Marka builds them: as sections, blocks, templates and app blocks that sit alongside the theme rather than inside its core files. Where a change genuinely has to touch the theme’s own code, we document it so the update can be re-applied in minutes.',
      },
      {
        q: 'Do you work with Shopify Plus?',
        a: 'Yes. Checkout extensibility, B2B, Shopify Markets, Shopify Flow, multi-store and the launch and expansion work that Plus merchants need are part of the practice.',
      },
      {
        q: 'Can you migrate my store to Shopify?',
        a: 'Yes — from WooCommerce, Magento, BigCommerce, Wix or a custom platform. Products, customers, orders, content and URLs move across with redirects, and the two stores run in parallel until every number reconciles.',
      },
      {
        q: 'How long does Shopify store customisation take?',
        a: 'Small changes — a new section, a product page layout, a collection filter — take days. A redesign on an existing theme typically takes four to eight weeks. A migration or a full custom theme is scoped in discovery, which produces a fixed timeline and price.',
      },
      {
        q: 'Do you take on small jobs?',
        a: 'Yes. Theme fixes and small customisations are done on a day rate or a monthly block of hours, so a merchant with a steady stream of small changes has one team that already knows the store.',
      },
    ],
    relatedApps: ['marka-reviews', 'marka-cart', 'marka-bundles'],
    related: ['hydrogen-headless', 'shopify-speed-optimisation', 'custom-shopify-apps'],
    keywords: [
      'Shopify store customisation',
      'Shopify website customization',
      'Shopify theme development',
      'Shopify theme customization',
      'Shopify Plus development',
      'Shopify B2B setup',
      'migrate to Shopify',
      'Shopify developer',
    ],
    serviceType: 'Shopify store customisation and theme development',
  },
  {
    slug: 'hydrogen-headless',
    name: 'Hydrogen headless storefronts',
    kicker: 'Headless Shopify',
    metaTitle: 'Shopify Hydrogen Headless Development',
    description:
      'Headless Shopify storefronts on Hydrogen and Remix, hosted on Oxygen, or Next.js on the Storefront API — built by House of Marka to be fast, editable and yours.',
    title: 'Headless Shopify on Hydrogen, built to be fast and stay fast.',
    lede:
      'House of Marka builds headless Shopify storefronts on Hydrogen — Shopify’s Remix-based framework — hosted on Oxygen, or on Next.js against the Storefront API when a team already lives there. Headless done well means a storefront that loads instantly, is designed without theme limits, and still gives marketing the editing tools they had.',
    deliverables: [
      'Hydrogen storefronts on Remix, deployed to Oxygen with Shopify’s CDN and caching',
      'Next.js storefronts on the Storefront API for teams standardised on React, Vercel or Azure',
      'Customer Account API login, cart, checkout hand-off, Shopify Markets and multi-currency',
      'Content from Shopify metaobjects, Sanity or Contentful, so marketing edits pages without a developer',
      'Search and discovery, product configurators, subscriptions and B2B on the headless stack',
      'Migration from a Liquid theme with URL parity, redirects, structured data and SEO preserved',
    ],
    sections: [
      {
        title: 'When headless is worth it',
        copy: [
          'Headless pays for itself when the storefront is the product: a large catalogue, a content-led brand, configurators, markets that need different experiences, or a performance budget a theme cannot meet. It is the wrong choice for a store that needs a theme and two apps. We will say which one you are before you spend — and we build both.',
        ],
      },
      {
        title: 'Hydrogen first, Next.js when it fits',
        copy: [
          'Hydrogen is Shopify’s own answer: Remix, the Storefront API, Oxygen hosting included with Shopify plans, and first-party components for cart, customer accounts and analytics. For teams already on Next.js, we build on the Storefront API with the same patterns. Either way the stack is open, documented and yours.',
        ],
      },
      {
        title: 'The parts that are usually forgotten',
        copy: [
          'Headless breaks what a theme gave you for free unless someone rebuilds it: SEO metadata and structured data, redirects and the sitemap, analytics and consent, and every app widget that assumed Liquid. We rebuild each one deliberately, and we measure search visibility before and after the switch, because a faster store that loses its rankings has not won anything.',
        ],
      },
      {
        title: 'Editability for marketing',
        copy: [
          'A headless storefront only developers can change is a regression. We model pages with metaobjects or a headless CMS so campaigns, landing pages and content change without a deploy, and we train the team that will use it.',
        ],
      },
    ],
    why: [why.measured, why.senior, why.discovery, why.ownership, why.hours],
    faqs: [
      {
        q: 'What is Shopify Hydrogen?',
        a: 'Hydrogen is Shopify’s framework for building headless storefronts: a React framework built on Remix, with components for cart, products, customer accounts and analytics wired to the Storefront API, and Oxygen, Shopify’s hosting for it. It lets you design a storefront without theme limits while Shopify still runs checkout, orders and payments.',
      },
      {
        q: 'Is a headless Shopify store faster than a theme?',
        a: 'It can be much faster, because the storefront only loads what the page needs and is served from the edge — but only if it is built with a performance budget. A badly built headless store is slower than a good theme. House of Marka reports Core Web Vitals from real users before and after launch.',
      },
      {
        q: 'Hydrogen or Next.js?',
        a: 'Hydrogen if you want Shopify’s own stack, Oxygen hosting and first-party components — the default for most brands. Next.js if your team already builds in it, you need to share code with other properties, or you are standardised on Vercel or Azure. Both talk to the same Storefront API.',
      },
      {
        q: 'Will my Shopify apps work on a headless store?',
        a: 'Apps that render through Liquid or theme app extensions will not; apps that expose their data through an API or a storefront SDK can be rebuilt into the headless front end. We inventory your app stack in discovery and show what carries over, what gets rebuilt and what is no longer needed.',
      },
      {
        q: 'What does a Hydrogen storefront cost to run?',
        a: 'Oxygen hosting is included with Shopify plans, so the running cost is your Shopify plan plus any headless CMS and third-party services you choose. There is no separate hosting bill for a Hydrogen storefront on Oxygen.',
      },
      {
        q: 'How long does a headless build take?',
        a: 'A focused Hydrogen storefront typically takes eight to twelve weeks from discovery to launch; a large catalogue with configurators, B2B or several markets takes longer. Discovery produces the fixed timeline and price.',
      },
    ],
    relatedApps: [],
    related: ['shopify-store-customisation', 'shopify-speed-optimisation', 'shopify-app-development'],
    keywords: [
      'Shopify Hydrogen development',
      'headless Shopify',
      'headless Shopify development agency',
      'Hydrogen storefront',
      'Shopify Oxygen',
      'Next.js Shopify Storefront API',
      'headless commerce Shopify',
    ],
    serviceType: 'Headless Shopify storefront development',
  },
  {
    slug: 'shopify-speed-optimisation',
    name: 'Shopify speed optimisation',
    kicker: 'Speed & page optimisation',
    metaTitle: 'Shopify Speed & Page Optimisation',
    description:
      'Shopify speed and page optimisation measured in Core Web Vitals: theme and app audit, image and script fixes, LCP, INP and CLS — with before-and-after numbers.',
    title: 'Shopify speed and page optimisation that shows up in Core Web Vitals.',
    lede:
      'House of Marka makes Shopify stores faster and their pages better: a measured audit of theme, apps and assets, then the fixes that move Largest Contentful Paint, Interaction to Next Paint and layout shift — reported in before-and-after numbers from real users, not a lab score.',
    deliverables: [
      'Speed audit: theme code, app scripts, third-party tags, images, fonts and server timing — ranked by impact',
      'App bloat removal: leftover scripts from uninstalled apps, duplicate libraries, render-blocking tags',
      'Image, font and video optimisation: responsive images, modern formats, lazy loading done correctly',
      'JavaScript and Liquid refactoring for INP: fewer long tasks, less work on the main thread',
      'Layout stability (CLS): reserved space for images, banners, reviews and embeds',
      'Page optimisation: product and collection page structure, above-the-fold content, conversion details',
      'Real-user Core Web Vitals monitoring, with an alert when a new app slows the store',
    ],
    sections: [
      {
        title: 'Why Shopify stores get slow',
        copy: [
          'Rarely the theme alone. It is twelve apps each adding a script, a hero image at four megabytes, three font families, a tracking tag from a campaign two years ago, and a slider that shifts the page as it loads. Each one seemed harmless. Together they are why the product page takes four seconds to become usable on a phone.',
        ],
      },
      {
        title: 'Measured, ranked, fixed',
        copy: [
          'We start with field data — what real shoppers’ browsers report to Google — and then profile in the lab to find the causes. Every finding is ranked by milliseconds saved per hour of work, so the first week removes the biggest problems. Fixes are made in a theme branch, measured, and only then published.',
        ],
      },
      {
        title: 'Page optimisation, not just speed',
        copy: [
          'A fast page that does not sell is half a job. We look at the product page as a shopper does: whether the price, the proof and the buy button are visible without scrolling, whether the images answer the questions, whether reviews load where they help. The result is a page that is both quick and persuasive — and it is why our own apps, like Marka Cart and Marka Reviews, are built light.',
        ],
      },
      {
        title: 'Keeping it fast',
        copy: [
          'Speed decays as apps are added. We leave you with real-user monitoring and a short rulebook for your team — how to add an app, an image or a tag without undoing the work — and can check in quarterly.',
        ],
      },
    ],
    why: [why.measured, why.ownApps, why.senior, why.hours, why.ownership],
    faqs: [
      {
        q: 'How fast should a Shopify store be?',
        a: 'Google’s Core Web Vitals thresholds are the useful target: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds and Cumulative Layout Shift under 0.1, measured for real users on mobile. House of Marka works to those numbers and reports them before and after.',
      },
      {
        q: 'Does site speed affect Shopify SEO?',
        a: 'Yes. Core Web Vitals are part of Google’s page experience signals, and slow pages convert worse, which affects every other number. Speed work is usually the quickest SEO win a Shopify store has available.',
      },
      {
        q: 'Which apps slow down a Shopify store?',
        a: 'Any app that injects JavaScript into every page: review widgets, pop-ups, chat, personalisation, currency converters, tracking pixels — and the scripts left behind by apps you have already uninstalled. The audit lists every script on the page with its cost in milliseconds, so you can decide what each one is worth.',
      },
      {
        q: 'Will you edit my theme?',
        a: 'Yes, in a duplicate of your live theme. Every change is measured there first and published only when it helps, and the fixes are documented so your team or the theme author can carry them forward.',
      },
      {
        q: 'How long does Shopify speed optimisation take?',
        a: 'The audit takes about a week. Most stores see the main improvement within two to three weeks of fixes; deeper work — a theme refactor, replacing heavy apps — is scoped from the audit with a fixed price.',
      },
      {
        q: 'Can you fix my Shopify speed score?',
        a: 'The Shopify speed score is a lab measurement. We optimise the real-user Core Web Vitals that Google ranks on and shoppers feel, and the score follows. We will not chase a lab number at the expense of a page that sells.',
      },
    ],
    relatedApps: ['marka-cart', 'marka-reviews'],
    related: ['shopify-store-customisation', 'hydrogen-headless', 'custom-shopify-apps'],
    keywords: [
      'Shopify speed optimisation',
      'Shopify speed optimization',
      'Shopify page speed',
      'Shopify Core Web Vitals',
      'Shopify page optimization',
      'make Shopify store faster',
      'Shopify performance optimization service',
    ],
    serviceType: 'Shopify speed and page optimisation',
  },
  {
    slug: 'ios-app-development',
    name: 'iOS app development',
    kicker: 'iOS apps',
    metaTitle: 'iOS App Development Company',
    description:
      'iOS app development for anyone with an idea: native Swift and SwiftUI, or React Native and Flutter, from wireframe to App Store release. By House of Marka.',
    title: 'iOS apps, built and shipped for you.',
    lede:
      'House of Marka designs and builds iPhone and iPad apps for anyone who wants one — a founder with an idea, a brand that needs an app, a company replacing an old one. Native Swift and SwiftUI by default, React Native or Flutter when Android ships alongside, and the App Store review, release and maintenance after launch.',
    deliverables: [
      'Native iPhone and iPad apps in Swift and SwiftUI',
      'Cross-platform apps in React Native or Flutter when iOS and Android ship together',
      'Product design: flows, interface, motion and a design system that follows Apple’s guidelines',
      'The backend and APIs the app needs — or integration with the systems you already run',
      'Sign in with Apple, push notifications, in-app purchases and subscriptions with StoreKit 2',
      'App Store Connect setup, review submission, TestFlight betas and phased releases',
      'Accessibility (VoiceOver, Dynamic Type), crash budgets and release engineering',
    ],
    sections: [
      {
        title: 'From idea to App Store',
        copy: [
          'You bring the idea; we bring everything else. Discovery turns it into screens, a scope and a fixed price. A senior pod designs and builds it with a TestFlight build in your hands every week. We write the listing, pass App Store review and run the release. Most apps go from brief to the App Store in eight to fourteen weeks, with the first TestFlight build within the first few.',
        ],
      },
      {
        title: 'Native by default',
        copy: [
          'SwiftUI apps feel like iOS because they are iOS: faster cold starts, system gestures, widgets, Live Activities and every new API the day it ships. When the same app has to launch on Android at the same time, we recommend React Native or Flutter honestly, with the trade-offs written down, and build both from one design system.',
        ],
      },
      {
        title: 'Ready for review',
        copy: [
          'Apple rejects apps for reasons that are avoidable: privacy labels that do not match the code, no way to delete an account, purchases that bypass StoreKit, sign-in rules. We build to the guidelines from the first sprint and have the compliance artefacts ready when the app is submitted.',
        ],
      },
      {
        title: 'After launch',
        copy: [
          'An app needs a release train: new iOS versions, new devices, crash reports, the feature backlog. We run it on a monthly retainer, or hand it to your team with documentation and pairing.',
        ],
      },
    ],
    why: [why.senior, why.discovery, why.ownership, why.measured, why.hours],
    faqs: [
      {
        q: 'How much does it cost to build an iOS app?',
        a: 'It depends on the number of screens, whether a backend has to be built, and which platform features the app uses. House of Marka prices in two steps: a fixed-fee discovery sprint produces the designs, the scope and a fixed price for the build, so you commit to a known number rather than an estimate.',
      },
      {
        q: 'How long does it take to build an iOS app?',
        a: 'Typically eight to fourteen weeks from brief to App Store, including Apple’s review, with a working TestFlight build in your hands within the first few weeks. Larger apps are scoped in discovery with a fixed timeline.',
      },
      {
        q: 'Native Swift or React Native?',
        a: 'Native Swift and SwiftUI if iOS is the main platform or the app leans on Apple features — camera, widgets, Live Activities, HealthKit. React Native or Flutter if iOS and Android must ship together from one codebase. We say which one fits your app and why before you choose.',
      },
      {
        q: 'Do you also build the Android version?',
        a: 'Yes. House of Marka builds Android apps natively in Kotlin or cross-platform, from the same design system, so both apps launch together and stay consistent.',
      },
      {
        q: 'Will the app be published under my Apple developer account?',
        a: 'Yes. The app lives in your Apple Developer account and App Store Connect from the start, so you own the listing, the reviews and the revenue. We work in it as a team member and hand everything over on launch.',
      },
      {
        q: 'What happens after the app is live?',
        a: 'Either a maintenance retainer — iOS updates, crash fixes, new features, store compliance — or a full hand-over to your team with documentation, runbooks and pairing. Most clients keep us on for the first year.',
      },
    ],
    relatedApps: [],
    related: ['android-app-development', 'custom-software-development', 'shopify-app-development'],
    keywords: [
      'iOS app development',
      'iOS app development company',
      'iPhone app developers',
      'Swift app development',
      'SwiftUI development',
      'get an iOS app built',
      'mobile app development company',
    ],
    serviceType: 'iOS app development',
  },
  {
    slug: 'android-app-development',
    name: 'Android app development',
    kicker: 'Android apps',
    metaTitle: 'Android App Development Company',
    description:
      'Android app development for anyone with an idea: native Kotlin and Jetpack Compose, or React Native and Flutter, from idea to Google Play. By House of Marka.',
    title: 'Android apps, built and shipped for you.',
    lede:
      'House of Marka designs and builds Android apps for anyone who wants one — a founder with an idea, a brand that needs an app, a business replacing something that no longer works. Native Kotlin and Jetpack Compose by default, React Native or Flutter when iOS ships alongside, and the Google Play release and maintenance after launch.',
    deliverables: [
      'Native Android apps in Kotlin and Jetpack Compose, following Material 3',
      'Cross-platform apps in React Native or Flutter when Android and iOS ship together',
      'Product design: flows, interface, motion and a design system shared with the iOS app',
      'The backend and APIs the app needs — or integration with the systems you already run',
      'Google sign-in, push notifications with Firebase, Play Billing for purchases and subscriptions',
      'Play Console setup, app bundles, review, staged rollouts and internal testing tracks',
      'Accessibility (TalkBack), performance on low-end devices, crash budgets and release engineering',
    ],
    sections: [
      {
        title: 'From idea to Google Play',
        copy: [
          'You bring the idea; we bring everything else. Discovery turns it into screens, a scope and a fixed price. A senior pod designs and builds it with an internal-testing build in your hands every week. We prepare the listing, pass Google Play review and run a staged rollout. Most apps go from brief to Google Play in eight to fourteen weeks.',
        ],
      },
      {
        title: 'Built for the devices your users actually have',
        copy: [
          'Android means a thousand screen sizes and a long tail of inexpensive phones. We test on real low-end devices, keep the app small, and build with Jetpack Compose so the interface stays smooth where it matters. When the same app launches on iOS at the same time, we recommend React Native or Flutter honestly, with the trade-offs written down.',
        ],
      },
      {
        title: 'Ready for review',
        copy: [
          'Google Play rejects for reasons that are avoidable: a data-safety form that does not match the code, missing account deletion, permissions without a stated purpose, billing outside Play. We build to the policies from the first sprint and have the compliance artefacts ready for submission.',
        ],
      },
      {
        title: 'After launch',
        copy: [
          'An app needs a release train: new Android versions, target SDK deadlines, crash reports, the feature backlog. We run it on a monthly retainer, or hand it to your team with documentation and pairing.',
        ],
      },
    ],
    why: [why.senior, why.discovery, why.ownership, why.measured, why.hours],
    faqs: [
      {
        q: 'How much does it cost to build an Android app?',
        a: 'It depends on the number of screens, whether a backend has to be built, and which device features the app uses. House of Marka prices in two steps: a fixed-fee discovery sprint produces the designs, the scope and a fixed price for the build, so you commit to a known number rather than an estimate.',
      },
      {
        q: 'How long does it take to build an Android app?',
        a: 'Typically eight to fourteen weeks from brief to Google Play, including review, with a working test build in your hands within the first few weeks. Larger apps are scoped in discovery with a fixed timeline.',
      },
      {
        q: 'Native Kotlin or Flutter?',
        a: 'Native Kotlin and Jetpack Compose if Android is the main platform or the app leans on device features. Flutter or React Native if Android and iOS must ship together from one codebase. We say which one fits your app and why before you choose.',
      },
      {
        q: 'Do you also build the iOS version?',
        a: 'Yes. House of Marka builds iOS apps natively in Swift or cross-platform, from the same design system, so both apps launch together and stay consistent.',
      },
      {
        q: 'Will the app be published under my Google Play account?',
        a: 'Yes. The app lives in your Google Play Console from the start, so you own the listing, the reviews and the revenue. We work in it as a team member and hand everything over on launch.',
      },
      {
        q: 'What happens after the app is live?',
        a: 'Either a maintenance retainer — Android updates, target SDK deadlines, crash fixes, new features — or a full hand-over to your team with documentation, runbooks and pairing. Most clients keep us on for the first year.',
      },
    ],
    relatedApps: [],
    related: ['ios-app-development', 'custom-software-development', 'shopify-app-development'],
    keywords: [
      'Android app development',
      'Android app development company',
      'Kotlin app development',
      'Jetpack Compose development',
      'get an Android app built',
      'mobile app development company',
      'Flutter app development',
    ],
    serviceType: 'Android app development',
  },
  {
    slug: 'custom-software-development',
    name: 'Custom software development',
    kicker: 'Custom software',
    metaTitle: 'Custom Software Development',
    description:
      'Custom software and SaaS by House of Marka: web platforms, internal tools, integrations, automation and applied AI. Fixed-fee discovery, senior team, your code.',
    title: 'Custom software for the process nobody sells a product for.',
    lede:
      'House of Marka builds custom software of any kind: web platforms and SaaS products, internal tools, integrations between the systems you already run, automations and AI features that do real work. One studio for the whole job — design, engineering, cloud and the operation after launch.',
    deliverables: [
      'Web applications and SaaS products on Next.js, React and TypeScript',
      'Internal tools, dashboards and admin systems that replace spreadsheets and email',
      'Integrations and data pipelines between ERPs, marketplaces, CRMs and warehouses',
      'Automation of document intake, reconciliation, reporting and approvals',
      'Applied AI: agents with approval gates, retrieval over your documents, evaluation and guardrails',
      'Cloud architecture on Azure, AWS or GCP, infrastructure as code, monitoring and on-call',
      'Rescue and modernisation of software another team left behind',
    ],
    sections: [
      {
        title: 'Any custom service, one team',
        copy: [
          'Most custom software needs several disciplines at once — a designer, engineers, someone who understands the cloud, and someone who has shipped AI features that work outside a demo. House of Marka is all of them under one roof, so there is one accountable team from the first workshop to the on-call rota.',
        ],
      },
      {
        title: 'Scoped before it is priced',
        copy: [
          'We will not guess at a number. A fixed-fee discovery sprint of two to three weeks maps the process, reads the systems it touches and ends in an architecture, a clickable prototype and a fixed price. You keep all of it whether or not you build with us.',
        ],
      },
      {
        title: 'Engineered to be operated',
        copy: [
          'Software is a running cost, not a finished object. Everything we build ships with infrastructure as code, monitoring that pages a human only when it should, documentation and runbooks. We can run it against an SLA, or your team can, with our pairing.',
        ],
      },
      {
        title: 'AI where it earns its place',
        copy: [
          'We use frontier models the way a craftsman uses a good tool — where they beat the existing process on a test set, with approval gates on anything that spends money or changes a record, and with cost per task treated as a design constraint from day one.',
        ],
      },
    ],
    why: [why.senior, why.discovery, why.ownership, why.measured, why.hours],
    faqs: [
      {
        q: 'What kind of software does House of Marka build?',
        a: 'Web platforms and SaaS products, internal tools and dashboards, integrations between business systems, automations, AI features and the cloud infrastructure underneath — plus Shopify apps and iOS and Android apps, which have pages of their own. If it is custom software, it is in scope.',
      },
      {
        q: 'How do you price custom software?',
        a: 'Discovery is a fixed fee. The build is fixed-price against the scope discovery produced, or a monthly pod rate when the problem is still being defined. We say which one fits, and we say when the right answer is a smaller engagement than you asked for.',
      },
      {
        q: 'Can you take over an existing codebase?',
        a: 'Yes. A short technical audit first — what is there, what is risky, what to keep — then either a modernisation plan or a hand-over into a maintenance retainer. Rescuing software another team left behind is a regular part of the work.',
      },
      {
        q: 'Do you build SaaS products?',
        a: 'Yes, including our own. Multi-tenant architecture, billing, onboarding, admin, analytics and the operational tooling a SaaS needs to be run by a small team.',
      },
      {
        q: 'Where is the software hosted?',
        a: 'On your cloud account — Azure by default, or AWS and GCP — defined as infrastructure as code so it can be rebuilt from the repository. We can host at cost while you set up your own account.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do. All bespoke source, infrastructure definitions, prompts, evaluation sets and fine-tuned weights transfer to you on payment. There is no proprietary runtime you are locked into.',
      },
    ],
    relatedApps: [],
    related: ['ios-app-development', 'android-app-development', 'shopify-app-development'],
    keywords: [
      'custom software development',
      'custom software development company',
      'SaaS development',
      'bespoke software',
      'internal tools development',
      'systems integration',
      'AI software development',
    ],
    serviceType: 'Custom software development',
  },
];

export const serviceBySlug = (slug: string) => servicePages.find((s) => s.slug === slug);
