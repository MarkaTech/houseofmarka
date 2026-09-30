/**
 * Single source of truth for everything the marketing site renders.
 *
 * Recovered from the rendered HTML of the live site: every string below is
 * copied verbatim from the page that displayed it.
 */

export const site = {
  brand: 'House of Marka',
  legal: 'Marka Modern Retail Private Limited',
  domain: 'houseofmarka.com',
  url: 'https://houseofmarka.com',
  tagline: 'A house of apps: Shopify, Android, iOS and SaaS.',
  /**
   * The one-sentence answer to "what is House of Marka?". It is the home page meta
   * description, the Organization schema description and the llms.txt summary, so
   * search engines and AI answer engines all read the same definition. Keep it under
   * 160 characters.
   */
  description:
    'House of Marka is a house of apps: our own Shopify apps, Android and iOS apps built to order, and a SaaS platform, plus applied AI for the US, UK and Europe.',
  email: 'support@houseofmarka.com',
  sales: 'tech@houseofmarka.com',
  tech: 'tech@houseofmarka.com',
  support: 'support@houseofmarka.com',
  address: {
    lines: ['Basement, Plot No. 39', 'Sector 27, Gurugram', 'Haryana 122001, India'],
    inline: 'Basement, Plot No. 39, Sector 27, Gurugram, Haryana 122001, India',
    street: 'Basement, Plot No. 39, Sector 27',
    city: 'Gurugram',
    state: 'Haryana',
    postalCode: '122001',
    country: 'IN',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Plot No. 39, Sector 27, Gurugram, Haryana 122001, India'),
  },
};

/** The two addresses on the “Email us directly” card at /contact/. */
export const contacts = [
  {
    label: 'New projects & technical',
    address: 'tech@houseofmarka.com',
    copy: 'Scoping, architecture questions, partnerships and anything that needs an engineer to read it.',
  },
  {
    label: 'Support & everything else',
    address: 'support@houseofmarka.com',
    copy: 'Existing engagements, billing, press, careers and general enquiries.',
  },
];

/** Primary header navigation. */
export const nav = [
  { href: '/apps/', label: 'Apps' },
  { href: '/services/', label: 'Services' },
  { href: '/marketplaces/', label: 'Marketplaces' },
  { href: '/work/', label: 'Work' },
  { href: '/insights/', label: 'Insights' },
  { href: '/about/', label: 'Company' },
];

/** The counter row on the home page and /work/. */
export const metrics = [
  { value: '180+', label: 'Products shipped' },
  { value: '14', label: 'Countries served' },
  { value: '5 yrs', label: 'Average senior tenure' },
  { value: '<6 wks', label: 'Typical time to first release' },
];

/** Channels named in the home-page marquee. */
export const marketplaces = [
  'Amazon',
  'Shopify',
  'eBay',
  'Walmart',
  'Etsy',
  'Zalando',
  'Otto',
  'Allegro',
  'Cdiscount',
  'bol.com',
  'Target Plus',
  'TikTok Shop',
  'Wayfair',
  'Faire',
  'Mirakl',
  'Rakuten',
];

/** The seven practices, in the order /services/ lists them. `id` is the anchor. */
export const services = [
  {
    id: 'shopify',
    kicker: 'Shopify',
    title: 'Shopify apps & themes, built like products',
    blurb:
      'Public and private Shopify apps, checkout extensions and conversion-focused themes — including our own three App Store apps. Built to pass app review the first time, and to survive theme updates after it.',
    points: [
      'Public & private app development — Remix, Polaris, App Bridge',
      'Theme building, customisation and Online Store 2.0 migrations',
      'Checkout UI extensions and Shopify Functions',
      'App Store listing, review compliance and Shopify billing',
      'Privacy-first architecture: GDPR webhooks done properly',
    ],
  },
  {
    id: 'consulting',
    kicker: 'Research & Consulting',
    title: 'Answers with evidence attached',
    blurb:
      'Extensive research and advisory for US, UK and European teams: market-entry studies, AI readiness, vendor bake-offs, technical due diligence. Every study ends in a ranked backlog with honest costs — from a team willing to build what it recommends.',
    points: [
      'Market-entry and competitor research with unit economics',
      'AI readiness audits and EU AI Act compliance sprints',
      'Vendor selection and procurement bake-offs',
      'Technical due diligence for investments and acquisitions',
      'Fixed-fee discovery: architecture, plan, price — yours to keep',
    ],
  },
  {
    id: 'automation',
    kicker: 'Automations',
    title: 'Work that runs while you sleep',
    blurb:
      'Agentic and deterministic automation across operations — document intake, reconciliation, triage, reporting. A two-week ROI audit ranks the opportunities; then we build the top of the list with guardrails and logs a lawyer can read.',
    points: [
      'Automation ROI audits with ranked registers',
      'Agentic workflows with human approval gates',
      'Document intake, matching and reconciliation',
      'Support automation with resolution economics',
      'Spend ceilings, kill switches and full audit trails',
    ],
  },
  {
    id: 'ai',
    kicker: 'Applied AI',
    title: 'AI systems that do real work',
    blurb:
      'Agents, retrieval pipelines, evaluation harnesses and human-in-the-loop workflows built on frontier models. Not demos — systems with guardrails, cost ceilings and measurable accuracy.',
    points: [
      'Autonomous agents with tool use and approval gates',
      'RAG over private documents, catalogues and support history',
      'Model evaluation, red-teaming and regression suites',
      'Fine-tuning, distillation and cost-per-task optimisation',
      'Voice, vision and multimodal interfaces',
    ],
  },
  {
    id: 'apps',
    kicker: 'Android & iOS Apps',
    title: 'Your app, built and shipped for you',
    blurb:
      'Have an idea for an Android or iOS app? We design and build it — native Swift and Kotlin, React Native or Flutter — from first wireframe to Play Store and App Store release, and the maintenance after it. Get in touch and tell us what you want built.',
    points: [
      'Native Swift & Kotlin, React Native, Flutter',
      'Next.js and React web platforms at scale',
      'Design systems, motion and accessibility (WCAG 2.2 AA)',
      'App Store and Play Store submission and compliance',
      'Observability, crash budgets and release engineering',
    ],
  },
  {
    id: 'commerce',
    kicker: 'Commerce Systems',
    title: 'Merchants connected to every channel',
    blurb:
      'One catalogue, one inventory truth, every marketplace. We build and operate the integration layer that keeps listings, stock, pricing and orders in sync.',
    points: [
      'Marketplace listing, inventory and order sync',
      'Shopify, Magento, BigCommerce and headless builds',
      'PIM, ERP and 3PL integration',
      'Repricing, feed management and channel analytics',
      'Cross-border tax, VAT and fulfilment logic',
    ],
  },
  {
    id: 'platform',
    kicker: 'Cloud & Data',
    title: 'Infrastructure that stays quiet',
    blurb:
      'Azure, AWS and GCP. Infrastructure as code, sensible cost controls and the kind of monitoring that pages a human only when it should.',
    points: [
      'Azure-first architecture and migration',
      'Terraform, Bicep and CI/CD pipelines',
      'Data warehouses, ELT and BI layers',
      'SOC 2, GDPR and ISO 27001 readiness',
      '24/7 monitoring and incident response',
    ],
  },
];

/**
 * The four kinds of app House of Marka puts its name on — the "house of apps"
 * section on the home page and /apps/. Shopify apps are our own, published on the
 * Shopify App Store; Android and iOS apps are built to order for whoever wants one;
 * the SaaS platform is our own and has no public name yet, so none is invented here.
 */
export const houseOfApps = [
  {
    id: 'shopify',
    kicker: 'Shopify apps',
    title: 'Our own Shopify apps',
    copy:
      'Published on the Shopify App Store by Marka Modern Retail Private Limited. Featured: Marka Bundles & Upsells — quantity breaks, bundles, BOGO and upsells priced correctly at checkout, with no shopper data stored.',
    href: '/apps/marka-bundles/',
    cta: 'See Marka Bundles & Upsells',
  },
  {
    id: 'android',
    kicker: 'Android apps',
    title: 'Android apps, built for you',
    copy:
      'Native Kotlin, or cross-platform in React Native and Flutter. We take your idea from first wireframe to Google Play release, and look after it once it is live.',
    href: '/contact/',
    cta: 'Get your Android app built',
  },
  {
    id: 'ios',
    kicker: 'iOS apps',
    title: 'iPhone and iPad apps, built for you',
    copy:
      'Native Swift and SwiftUI, designed to Apple’s guidelines and shipped through App Store review — with release engineering that keeps every update smooth.',
    href: '/contact/',
    cta: 'Get your iOS app built',
  },
  {
    id: 'saas',
    kicker: 'SaaS platform',
    title: 'A SaaS platform of our own',
    copy:
      'Cloud software that we build, host and support ourselves, on the same engineering standards as every app in the house. Write to us to hear more.',
    href: '/contact/',
    cta: 'Ask about the platform',
  },
];

/** The “A studio, not a body shop.” grid on the home page. */
export const capabilities = [
  {
    title: 'Discovery & architecture',
    copy: 'Two to three weeks that decide whether the next six months are worth spending.',
  },
  {
    title: 'Design',
    copy: 'Interface, motion and brand systems that survive contact with real users.',
  },
  {
    title: 'Engineering',
    copy: 'Small senior teams. Weekly releases. No hand-offs to a team you have not met.',
  },
  {
    title: 'Integration',
    copy: 'The unglamorous plumbing between your systems and everyone else’s.',
  },
  {
    title: 'Operations',
    copy: 'We keep what we build running, against response-time SLAs agreed before launch.',
  },
  {
    title: 'Advisory',
    copy: 'AI strategy, technical due diligence and build-vs-buy calls, without an agenda.',
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  region: string;
  sector: string;
  duration: string;
  title: string;
  summary: string;
  /** [value, label] pairs — the three headline numbers. */
  outcome: [string, string][];
  stack: string[];
  challenge: string;
  approach: { title: string; copy: string }[];
  result: string;
  quote: { text: string; role: string };
};

export const work: CaseStudy[] = [
  {
    slug: 'marketplace-sync',
    client: 'Home & lifestyle group',
    region: 'United Kingdom',
    sector: 'Retail & marketplaces',
    duration: '5 months to eleven live channels',
    title: 'One catalogue, eleven marketplaces',
    summary:
      'A 40,000-SKU homeware brand ran listings by spreadsheet across Amazon, eBay, Otto and Zalando. We built one control plane with real-time inventory sync.',
    outcome: [
      ['92%', 'less manual listing work'],
      ['11', 'marketplaces live in 5 months'],
      ['3.4x', 'channel revenue, year on year'],
    ],
    stack: ['Azure Functions', 'Next.js', 'Postgres', 'Mirakl API', 'Amazon SP-API', 'Azure Service Bus'],
    challenge:
      'Four people spent most of their week re-keying the same product data into different marketplace back-offices. Stock figures were a day old at best, so overselling was routine and each incident damaged the brand’s seller-performance standing on Amazon. Expanding into Germany had been attempted twice and abandoned twice, because nobody could face maintaining a fifth manual process.',
    approach: [
      {
        title: 'A single product truth',
        copy:
          'We made their ERP the authoritative source and built an ingestion layer that normalised every attribute once — not per channel. Marketplace-specific taxonomies became mappings on top, not separate copies of the data.',
      },
      {
        title: 'Event-driven stock',
        copy:
          'Warehouse movements publish to a message bus. Each channel adapter consumes them and pushes deltas within seconds, with per-channel buffer rules so a fast-moving SKU never sells the last unit twice.',
      },
      {
        title: 'Validate before you submit',
        copy:
          'Every listing is checked against the target marketplace schema before it is sent. Rejections dropped from a daily email triage to a handful a month, each surfaced in-app with the exact failing field.',
      },
      {
        title: 'One order queue',
        copy:
          'Orders, cancellations and returns from all eleven channels land in a single reconciled queue that hands off to their existing 3PL, so warehouse staff never had to learn eleven interfaces.',
      },
    ],
    result:
      'The listing team went from four people re-keying data to one person managing exceptions. Germany and Poland launched in the same quarter rather than being deferred again, and channel revenue more than tripled within a year of the first integration going live.',
    quote: {
      text: 'The part that surprised us was how boring it became. Nothing fights us any more.',
      role: 'Head of E-commerce',
    },
  },
  {
    slug: 'ai-support',
    client: 'US direct-to-consumer retailer',
    region: 'United States',
    sector: 'Retail & customer operations',
    duration: '11 weeks to production',
    title: 'A support agent that resolves, not deflects',
    summary:
      'Order-aware AI support across email and chat, wired directly into their OMS with strict approval gates for refunds and address changes.',
    outcome: [
      ['68%', 'tickets fully resolved by AI'],
      ['41s', 'median first response'],
      ['4.7/5', 'post-resolution CSAT'],
    ],
    stack: ['Frontier LLMs', 'Retrieval pipeline', 'Zendesk', 'Azure Container Apps', 'Evaluation harness'],
    challenge:
      'Their existing chatbot deflected tickets rather than resolving them, and customers had learned to type “agent” immediately. Seasonal volume spikes meant hiring temporary staff who were never fully trained. The brief was explicit: no answer the company would be embarrassed to have sent.',
    approach: [
      {
        title: 'Evaluation before build',
        copy:
          'We started by labelling 1,200 historical tickets into resolution classes and building a scored test set. Nothing shipped until it beat the human baseline on that set — which meant we could also prove where it should not be used.',
      },
      {
        title: 'Grounded in their systems',
        copy:
          'The agent reads order status, shipment tracking, returns policy and product data through typed tools. It answers from what it can see, and says it cannot see something rather than guessing.',
      },
      {
        title: 'Approval gates on anything costly',
        copy:
          'Refunds, address changes and order cancellations require an explicit action the agent proposes and a human confirms — above a threshold. Below it, the action is auto-approved and logged. The threshold is a setting an operations lead can change.',
      },
      {
        title: 'Cost per resolution as a design constraint',
        copy:
          'Cheap models handle classification and retrieval; the expensive reasoning model is reserved for genuinely ambiguous cases. Caching and routing kept the cost per resolved ticket well under a dollar at peak.',
      },
    ],
    result:
      'Just over two thirds of tickets now close without a human touching them, and satisfaction on AI-resolved tickets is marginally higher than on human-resolved ones — mostly because the median first response fell from hours to under a minute. Support headcount was redeployed to retention rather than cut.',
    quote: {
      text: 'They talked us out of two features we asked for. Both would have been mistakes.',
      role: 'VP Customer Experience',
    },
  },
  {
    slug: 'fintech-app',
    client: 'European payments scale-up',
    region: 'Germany & Netherlands',
    sector: 'Fintech & payments',
    duration: 'One quarter, two platforms',
    title: 'A payments app rebuilt in one quarter',
    summary:
      'Replaced an ageing hybrid app with native iOS and Android clients, a shared design system, and a release train that ships every Thursday.',
    outcome: [
      ['1.9s', 'cold start, down from 6.2s'],
      ['+37%', 'weekly active users'],
      ['4.8', 'App Store rating'],
    ],
    stack: ['Swift', 'Kotlin', 'SwiftUI', 'Jetpack Compose', 'GraphQL', 'Azure DevOps'],
    challenge:
      'The hybrid app took six seconds to become usable, and store reviews said so. Releases were quarterly and painful, so bugs lived for months. The team knew a rewrite was needed but had been told by two previous agencies that it would take a year.',
    approach: [
      {
        title: 'Rewrite the shell, keep the backend',
        copy:
          'We did not touch their payments core. The rewrite was strictly the client layer, behind the existing GraphQL contract — which is why a quarter was realistic where a year had been quoted.',
      },
      {
        title: 'One design system, two native implementations',
        copy:
          'Tokens, components and motion specs defined once, implemented natively in SwiftUI and Jetpack Compose. Designers reviewed both builds against the same spec rather than two divergent interpretations.',
      },
      {
        title: 'A release train, not a release event',
        copy:
          'Automated pipelines, phased rollouts and crash budgets. Shipping every Thursday made each release small enough to be uneventful, which is the only way releases stop being frightening.',
      },
      {
        title: 'Accessibility and compliance as acceptance criteria',
        copy:
          'Screen reader flows, dynamic type and contrast were part of the definition of done — not a remediation project after launch.',
      },
    ],
    result:
      'Cold start dropped from 6.2 to 1.9 seconds and the store rating recovered from 3.1 to 4.8 within two release cycles. Weekly active users rose 37% without any change in marketing spend — the app had simply stopped being unpleasant to open.',
    quote: {
      text: 'Thursday releases sounded reckless. Twelve months later we have not rolled one back.',
      role: 'Chief Technology Officer',
    },
  },
  {
    slug: 'catalogue-ai',
    client: 'Fashion wholesaler',
    region: 'Italy & France',
    sector: 'Fashion & lifestyle',
    duration: '9 weeks, 12,400 products',
    title: 'Twelve thousand products described in a week',
    summary:
      'Vision and language models turned raw photography and supplier sheets into marketplace-ready copy in six languages, with review only where confidence was low.',
    outcome: [
      ['12,400', 'products enriched'],
      ['6', 'languages, one pipeline'],
      ['€380k', 'annual cost avoided'],
    ],
    stack: ['Multimodal models', 'Human-in-the-loop review', 'Azure AI', 'Akeneo PIM', 'Confidence scoring'],
    challenge:
      'Each new season arrived as a folder of photographs and a supplier spreadsheet in Italian. Turning that into listing-ready content in six languages took a team of freelance copywriters eight to ten weeks — which meant the brand was always a season behind on its export channels.',
    approach: [
      {
        title: 'See the garment, read the sheet',
        copy:
          'A vision model extracts observable attributes from product photography — silhouette, closure, sleeve length, pattern — and reconciles them against the supplier data. Contradictions are flagged rather than silently resolved.',
      },
      {
        title: 'Write once, localise properly',
        copy:
          'Copy is generated per market rather than translated from Italian, so size conventions, fabric terminology and tone match local expectations instead of reading like a translation.',
      },
      {
        title: 'Confidence decides who reviews',
        copy:
          'Every field carries a confidence score. High-confidence output publishes automatically; anything below threshold routes to a human reviewer with the model reasoning attached. Roughly one product in nine needed a person.',
      },
      {
        title: 'Feedback loop into the prompt set',
        copy:
          'Reviewer corrections are collected and folded back into the evaluation set each month, so the share needing human review keeps falling season over season.',
      },
    ],
    result:
      'Season turnaround fell from ten weeks to under one. The freelance copywriting budget — roughly €380,000 a year — was largely eliminated, and the two in-house merchandisers now spend their time on the products that actually need judgement.',
    quote: {
      text: 'We stopped being a season behind. That is the whole story.',
      role: 'Export Director',
    },
  },
];

/** The four delivery steps on the home page (and /services/). */
export const process = [
  {
    step: '01',
    title: 'Scope',
    copy: 'A short paid discovery. You leave with an architecture, a plan and a fixed price — whether or not you build it with us.',
  },
  {
    step: '02',
    title: 'Prototype',
    copy: 'Working software in weeks, not slideware. We prove the risky part first, on purpose.',
  },
  {
    step: '03',
    title: 'Build',
    copy: 'A senior pod of three to six people. Weekly demos, a shared board and direct access to the people writing the code.',
  },
  {
    step: '04',
    title: 'Operate',
    copy: 'Launch is the middle, not the end. We monitor, patch, iterate and report against agreed SLAs.',
  },
];

/** The three engagement models on /services/. */
export const engagements: {
  name: string;
  meta: string;
  copy: string;
  includes: string[];
  badge?: string;
}[] = [
  {
    name: 'Discovery sprint',
    meta: 'Fixed fee · 2–3 weeks',
    copy: 'Architecture, scope, risks and a costed delivery plan. Yours to keep, whoever builds it.',
    includes: ['Technical & data audit', 'Solution architecture', 'Clickable prototype', 'Costed roadmap'],
  },
  {
    name: 'Build engagement',
    meta: 'Fixed price or monthly pod',
    copy: 'A senior pod of three to six people, shipping weekly against an agreed scope, with demos you can attend.',
    includes: ['Design & engineering', 'QA and release management', 'Weekly demo & written report', 'Full IP transfer'],
    badge: 'Most common',
  },
  {
    name: 'Managed operation',
    meta: 'Monthly retainer',
    copy: 'We run what we built — monitoring, incident response, iteration and marketplace channel management.',
    includes: ['SLA-backed support', '24/7 monitoring', 'Quarterly roadmap', 'Security patching'],
  },
];

/**
 * The home-page FAQ accordion (also emitted as FAQPage JSON-LD).
 *
 * The first four are written for answer engines: each question is phrased the way
 * people ask it, and each answer opens with a complete, quotable sentence that
 * names House of Marka — so a snippet lifted out of context still makes sense.
 */
export const faqs = [
  {
    q: 'What is House of Marka?',
    a:
      'House of Marka is a house of apps: we publish our own Shopify apps, build Android and iOS apps for clients, and develop a SaaS platform of our own. It is the trading name of Marka Modern Retail Private Limited, based in Gurugram, India, and it also offers applied AI, product engineering and marketplace integration to teams in the US, UK and Europe.',
  },
  {
    q: 'Which Shopify apps does House of Marka publish?',
    a:
      'House of Marka publishes its own apps on the Shopify App Store, including Marka Bundles & Upsells — quantity breaks, fixed bundles, mix & match, BOGO, add-on upsells and frequently bought together, priced correctly at checkout by Shopify Functions and storing no shopper personal data. Every app, with its privacy policy and terms, is listed on our Apps page.',
  },
  {
    q: 'Can House of Marka build an Android or iOS app for me?',
    a:
      'Yes. House of Marka designs and builds Android and iOS apps to order — native Kotlin and Swift, or cross-platform in React Native and Flutter — from first wireframe to Google Play and App Store release, and maintains them afterwards. Tell us what you want built at tech@houseofmarka.com or through the contact page.',
  },
  {
    q: 'Does House of Marka have a SaaS platform?',
    a:
      'Yes. Alongside its Shopify apps, House of Marka develops its own SaaS (software-as-a-service) platform — cloud software that it builds, hosts and supports itself. For details, write to tech@houseofmarka.com.',
  },
  {
    q: 'How do you price work?',
    a:
      'Discovery is a fixed fee. Build work is either fixed-price against an agreed scope or a monthly pod rate, depending on how well-defined the problem is. We will tell you which one fits — and we will say so when the answer is neither.',
  },
  {
    q: 'Who owns the code and the models?',
    a:
      'You do. All bespoke source, infrastructure definitions, prompts, evaluation sets and fine-tuned weights transfer to you on payment. There is no proprietary runtime you are locked into.',
  },
  {
    q: 'Do you work with our existing team?',
    a:
      'Often. We embed alongside in-house engineers, and we are happy to hand over completely — documentation, runbooks and pairing included.',
  },
  {
    q: 'Where are you based, and which hours do you cover?',
    a:
      'We are based in Gurugram, India, and structured for US, UK and European clients, with overlapping working hours across those time zones and on-call coverage for supported systems.',
  },
  {
    q: 'How do you handle data protection?',
    a:
      'GDPR and UK GDPR by default, with DPAs, data residency options in EU and US regions, and no client data used to train general-purpose models. We support SOC 2 and ISO 27001 evidence gathering.',
  },
];
