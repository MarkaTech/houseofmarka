/**
 * The House of Marka Shopify apps.
 *
 * Every card, page, schema block, footer link and llms.txt line about an app is
 * generated from this file, so a price or a feature changes in exactly one place.
 * Marka Reviews is described from its Shopify App Store listing; Marka Cart and
 * Marka Bundles & Upsells are on their way to the App Store and say so.
 */

export type Plan = {
  name: string;
  /** "Free" or a currency amount such as "$12". */
  price: string;
  /** Billing period for a paid plan, e.g. "/ month". */
  period?: string;
  features: string[];
};

export type App = {
  slug: string;
  name: string;
  /** Short category label, used as the card eyebrow. */
  kicker: string;
  /** One line under the name. */
  tagline: string;
  /** Meta description: 50–160 characters. */
  description: string;
  /** The lede on the app page. Opens with a complete sentence that names the app. */
  lede: string;
  status: 'live' | 'coming-soon';
  /** Shopify App Store listing, once there is one. */
  storeUrl?: string;
  /** Square mark for the card, the page and the SoftwareApplication schema. */
  logo?: { src: string; width: number; height: number; alt: string };
  /** Three [value, label] pairs under the hero. */
  highlights: [string, string][];
  features: { title: string; copy: string }[];
  plans?: Plan[];
  /** How the app lands on a store, in order. */
  setup: { title: string; copy: string }[];
  faqs: { q: string; a: string }[];
  /** The app's own privacy policy, where it is hosted with the app. */
  privacyUrl?: string;
  /**
   * 'static' — the app has a hand-written page in app/(site)/apps/<slug>/ with its
   * own legal documents; 'dynamic' — rendered by app/(site)/apps/[slug]/ from
   * this data.
   */
  route: 'static' | 'dynamic';
  /** schema.org applicationSubCategory, for the SoftwareApplication block. */
  category: string;
};

export const apps: App[] = [
  {
    slug: 'marka-reviews',
    name: 'Marka Reviews',
    kicker: 'Product reviews',
    tagline: 'Verified reviews from real orders, shown on your store.',
    description:
      'Marka Reviews: the Shopify reviews app with automatic review requests, verified-purchase badges, nine widgets, photo and video reviews, Q&A and Google stars.',
    lede:
      'Marka Reviews collects reviews from real orders, lets you approve every one, and shows them on your product pages in nine widget layouts — without touching theme code. A review is marked verified only when it matches an order; imported reviews never are, so the badge keeps its meaning.',
    status: 'live',
    storeUrl: 'https://apps.shopify.com/reviewmaster',
    logo: { src: '/marka-reviews.webp', width: 512, height: 512, alt: 'Marka Reviews logo' },
    highlights: [
      ['9', 'widget layouts, with live preview'],
      ['0', 'lines of theme code to add'],
      ['Free', 'plan with unlimited reviews'],
    ],
    features: [
      {
        title: 'Review requests on your schedule',
        copy: 'An email goes out after an order is fulfilled, on the delay you choose, with reminders for shoppers who have not answered yet.',
      },
      {
        title: 'Verified means verified',
        copy: 'Only a review matched to a real order gets the verified-purchase badge. Imported reviews are shown without it, so your shoppers can trust the ones that have it.',
      },
      {
        title: 'You approve what appears',
        copy: 'Every review waits for your approval before it shows on the store — or switch on auto-publish and moderate by exception.',
      },
      {
        title: 'Nine widgets, no theme code',
        copy: 'Star ratings, carousels, grids, media galleries, tabs, sidebars, testimonials and summaries — previewed live and added to product pages from the theme editor.',
      },
      {
        title: 'Photo and video reviews',
        copy: 'Shoppers attach photos to their reviews on every plan, and video on Growth and Scale. You decide how the media displays.',
      },
      {
        title: 'Bring the reviews you already have',
        copy: 'Import from a CSV export of your current app, enter reviews by hand, or pull them from AliExpress. Nothing you own is left behind.',
      },
      {
        title: 'Q&A and compliant incentives',
        copy: 'Let shoppers ask questions on the product page, and run review incentives with the disclosure that Shopify and consumer law expect.',
      },
      {
        title: 'Stars in Google',
        copy: 'Rich snippets on your product pages for organic results, and a Google Shopping product ratings feed so your stars appear in Shopping too.',
      },
    ],
    plans: [
      {
        name: 'Free',
        price: '$0',
        period: '/ month',
        features: ['Unlimited reviews', '100 review request emails a month', 'CSV and AliExpress import', 'Photo reviews and all widgets'],
      },
      {
        name: 'Growth',
        price: '$12',
        period: '/ month',
        features: [
          '1,000 review request emails a month',
          'Video reviews and reminder emails',
          'Q&A and review incentives',
          'Google Shopping star ratings feed',
          'Remove app branding from widgets',
        ],
      },
      {
        name: 'Scale',
        price: '$39',
        period: '/ month',
        features: ['Unlimited review request emails', 'Everything in Growth'],
      },
    ],
    setup: [
      { title: 'Install from the Shopify App Store', copy: 'One click from the listing. The Free plan needs no card.' },
      { title: 'Set your request schedule', copy: 'Choose how many days after fulfilment the review request goes out, and whether a reminder follows.' },
      { title: 'Pick a widget and preview it', copy: 'Nine layouts, previewed live on your own products, added to the product page from the theme editor.' },
      { title: 'Approve reviews as they arrive', copy: 'Moderate each one, or turn on auto-publish once you trust the flow.' },
    ],
    faqs: [
      {
        q: 'Is Marka Reviews free?',
        a: 'Yes. The Free plan includes unlimited reviews, 100 review request emails a month, CSV and AliExpress import, photo reviews and every widget layout. Growth ($12 a month) adds 1,000 request emails, video reviews, reminders, Q&A, review incentives and the Google Shopping feed; Scale ($39 a month) removes the email limit. Billing is through Shopify, in USD, every 30 days.',
      },
      {
        q: 'How does Marka Reviews decide a review is verified?',
        a: 'A review earns the verified-purchase badge only when it was submitted through a request tied to a real, fulfilled order on your store. Reviews imported from CSV, entered by hand or pulled from AliExpress are never marked verified, so the badge means exactly one thing.',
      },
      {
        q: 'Do I need to edit my theme to show the reviews?',
        a: 'No. The widgets are added to product pages from the Shopify theme editor as app blocks, with a live preview, and removed the same way. There are no Liquid edits and nothing is left in the theme if you uninstall.',
      },
      {
        q: 'Can I move my reviews from Judge.me, Loox or another app?',
        a: 'Yes. Export the reviews from your current app as a CSV and import them into Marka Reviews. Imported reviews keep their text, ratings and dates; they are shown without the verified badge because the app cannot match them to an order it did not see.',
      },
      {
        q: 'Does Marka Reviews show star ratings in Google?',
        a: 'In two places. Rich snippets on your product pages let stars appear under your organic search results, and the Google Shopping product ratings feed (Growth and Scale plans) sends your ratings to Google Shopping.',
      },
      {
        q: 'Which Shopify stores can use Marka Reviews?',
        a: 'Any store on Shopify. The app is listed on the Shopify App Store, works with Shopify Admin, and is published and supported by Marka Modern Retail Private Limited, the company behind House of Marka.',
      },
    ],
    privacyUrl: 'https://reviewmaster-app.azurewebsites.net/privacy',
    route: 'dynamic',
    category: 'Product reviews',
  },
  {
    slug: 'marka-cart',
    name: 'Marka Cart',
    kicker: 'Cart drawer & upsells',
    tagline: 'A slide-out cart that sells a little more every time it opens.',
    description:
      'Marka Cart: a Shopify slide cart drawer with in-cart upsells, free-shipping progress bar, discount codes, cart notes and sticky add-to-cart, built to lift AOV.',
    lede:
      'Marka Cart replaces the trip to the cart page with a slide-out drawer that opens the moment something is added — showing shoppers how close they are to free shipping, what goes well with what they chose, and the discount field and order note where they expect them. It is built to lift average order value without slowing the page.',
    status: 'coming-soon',
    highlights: [
      ['6', 'cart features in one drawer'],
      ['AOV', 'is the number it is built to move'],
      ['Soon', 'on the Shopify App Store'],
    ],
    features: [
      {
        title: 'Slide-out cart drawer',
        copy: 'Opens the moment an item is added, so shoppers see what they have without leaving the page they were on — and keep shopping.',
      },
      {
        title: 'Free-shipping progress bar',
        copy: 'A bar that fills as the cart grows and says exactly how much more earns free shipping. The oldest trick in retail, because it works.',
      },
      {
        title: 'In-cart upsells and add-ons',
        copy: 'Recommend the products that go with what is already in the cart, one tap to add, right where the decision is being made.',
      },
      {
        title: 'Discount code field',
        copy: 'Shoppers apply a code inside the drawer and see the new total before checkout — no abandoned checkouts over a code that would not apply.',
      },
      {
        title: 'Cart notes',
        copy: 'Gift messages, delivery instructions and special requests, captured in the cart and passed through to the order.',
      },
      {
        title: 'Sticky add-to-cart',
        copy: 'A bar that follows the shopper down long product pages, so the buy button is never a scroll away.',
      },
    ],
    setup: [
      { title: 'Ask for early access', copy: 'Write to tech@houseofmarka.com with your store URL while the App Store listing is being prepared.' },
      { title: 'We set it up with you', copy: 'The drawer is configured for your theme and your free-shipping threshold, and checked on your store before it goes live.' },
      { title: 'Choose the upsells', copy: 'Pick which products are offered in the cart — by collection, by rule, or by hand.' },
      { title: 'Move to the App Store listing', copy: 'When the listing opens you switch to it with nothing to redo.' },
    ],
    faqs: [
      {
        q: 'When will Marka Cart be on the Shopify App Store?',
        a: 'The App Store listing is being prepared. Until it is live, House of Marka offers early access: write to tech@houseofmarka.com with your store URL and the team sets it up with you.',
      },
      {
        q: 'What does Marka Cart add to a Shopify store?',
        a: 'A slide-out cart drawer that opens when an item is added, a free-shipping progress bar, in-cart upsells and add-ons, a discount code field, cart notes and a sticky add-to-cart bar — the six cart features that lift average order value, in one app instead of four.',
      },
      {
        q: 'Will Marka Cart slow my store down?',
        a: 'It is built not to. The cart drawer is the one element every shopper touches, so it has to be light. Speed optimisation is a service House of Marka sells, and the drawer is held to the same standard.',
      },
      {
        q: 'Does it work with my theme?',
        a: 'Marka Cart is designed for Shopify Online Store 2.0 themes. During early access it is checked on your theme before it goes live, and adjusted if your theme needs it.',
      },
      {
        q: 'Can I use Marka Cart together with Marka Bundles?',
        a: 'Yes. They are built by the same team to work together: bundles added through Marka Bundles & Upsells appear in the drawer like any other line, with their discounts applied at checkout.',
      },
    ],
    route: 'dynamic',
    category: 'Cart customisation',
  },
  {
    slug: 'marka-bundles',
    name: 'Marka Bundles & Upsells',
    kicker: 'Bundles & upsells',
    tagline: 'Quantity breaks, bundles, BOGO and upsells, priced correctly at checkout.',
    description:
      'Bundle and upsell offers for Shopify: quantity breaks, fixed bundles, mix & match, BOGO, add-ons and frequently bought together. No shopper PII stored, ever.',
    lede:
      'Marka Bundles & Upsells adds every bundle mechanic that moves average order value — quantity breaks, fixed bundles, mix & match, BOGO, add-on upsells and frequently bought together — priced correctly at checkout by Shopify Functions and rendered through a theme app extension, while storing no shopper personal data.',
    status: 'coming-soon',
    highlights: [
      ['6', 'offer types, one widget'],
      ['0', 'shopper PII fields stored'],
      ['Soon', 'on the Shopify App Store'],
    ],
    features: [
      { title: 'Quantity breaks', copy: 'Tiered pricing that rewards larger carts, priced correctly at checkout.' },
      { title: 'Fixed bundles', copy: 'Curated sets sold as one offer, discounted automatically.' },
      { title: 'Mix & match', copy: 'Shopper-assembled bundles across products or collections.' },
      { title: 'BOGO / free gift', copy: 'Buy-X-get-Y and gift-with-purchase, without discount-code friction.' },
      { title: 'Add-on upsells', copy: 'One-tap complements attached to the product page.' },
      { title: 'Frequently bought together', copy: 'The classic basket-builder, done natively.' },
    ],
    setup: [
      { title: 'Ask for early access', copy: 'Write to tech@houseofmarka.com with your store URL while the App Store listing is being prepared.' },
      { title: 'Create offers in the admin', copy: 'Each offer targets products or collections and is previewed before it is published.' },
      { title: 'Add the app block to your theme', copy: 'One block from the theme editor; your product pages render without it if the app is ever unreachable.' },
      { title: 'Let checkout do the maths', copy: 'Shopify Functions apply the discount automatically — no codes for shoppers to forget.' },
    ],
    faqs: [],
    route: 'static',
    category: 'Upselling and cross-selling',
  },
];

export const appBySlug = (slug: string) => apps.find((a) => a.slug === slug);

/** The apps rendered by the dynamic route — the ones without a hand-written page. */
export const dynamicApps = apps.filter((a) => a.route === 'dynamic');
