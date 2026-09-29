import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Marka Bundles & Upsells — Shopify app',
  description:
    'Bundle and upsell offers for Shopify: quantity breaks, fixed bundles, mix & match, BOGO, add-ons and frequently bought together. No shopper PII stored, ever.',
};

/**
 * SoftwareApplication schema — the only way a Shopify app listing gets
 * understood as a product rather than a marketing page. `publisher` must name
 * the legal entity that owns the App Store listing, not the trading brand.
 */
const appLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Marka Bundles & Upsells',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Shopify',
  description:
    'Bundle and upsell offers for Shopify merchants — quantity breaks, fixed bundles, mix & match, BOGO, add-on upsells and frequently bought together.',
  publisher: { '@type': 'Organization', name: site.legal, url: site.url },
  offers: {
    '@type': 'Offer',
    description: 'Free plan available; paid plans include a 30-day free trial, billed through Shopify.',
  },
};

const stats: [string, string][] = [
  ['6', 'offer types, one widget'],
  ['0', 'shopper PII fields stored'],
  ['30-day', 'free trial on every paid plan'],
];

const offers = [
  { title: 'Quantity breaks', copy: 'Tiered pricing that rewards larger carts, priced correctly at checkout.' },
  { title: 'Fixed bundles', copy: 'Curated sets sold as one offer, discounted automatically.' },
  { title: 'Mix & match', copy: 'Shopper-assembled bundles across products or collections.' },
  { title: 'BOGO / free gift', copy: 'Buy-X-get-Y and gift-with-purchase, without discount-code friction.' },
  { title: 'Add-on upsells', copy: 'One-tap complements attached to the product page.' },
  { title: 'Frequently bought together', copy: 'The classic basket-builder, done natively.' },
];

const architecture = [
  {
    title: 'No shopper PII. Ever.',
    copy: 'No name, email, phone, address, IP or payment data is stored — not in the database, not in logs, not with any third party. The privacy policy is written to match the code, mechanism by mechanism.',
  },
  {
    title: 'Native to Shopify',
    copy: 'Theme app extension on the storefront, Shopify Functions for discounts, billing through Shopify. If the app is unreachable, your product pages simply render without it — nothing breaks.',
  },
  {
    title: 'Honest analytics',
    copy: 'Conversion funnels and A/B results from an anonymous visitor id — no cookies, no third-party trackers, no session replay. Revenue attribution comes only from HMAC-verified webhooks.',
  },
  {
    title: 'Nothing hostage on downgrade',
    copy: 'Downgrading pauses offers beyond your plan; it never deletes them. A/B tests stop with results kept. Upgrade and republish and everything returns exactly as it was.',
  },
];

const docs = [
  {
    href: '/apps/marka-bundles/privacy/',
    title: 'Privacy policy',
    copy: 'What the app reads, stores, and deletes — scope by scope.',
  },
  {
    href: '/apps/marka-bundles/terms/',
    title: 'Terms of service',
    copy: 'Plans, billing, acceptable use and liability, in plain language.',
  },
  {
    href: '/apps/marka-bundles/support/',
    title: 'Support',
    copy: 'Direct email support, answered by the people who built it.',
  },
];

export default function MarkaBundlesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />

      <PageHero
        eyebrow="Products · Shopify app"
        title="Marka Bundles & Upsells"
        copy="Bundle and upsell offers that price correctly at checkout — built on Shopify Functions, rendered through a theme app extension, and designed around a radical idea: a merchandising app has no business storing your shoppers' personal data."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.support}?subject=Marka%20Bundles%20%26%20Upsells`}
            className="btn-primary"
          >
            Talk to the team
          </a>
          <Link href="/apps/marka-bundles/support/" className="btn-ghost">
            Support &amp; FAQs
          </Link>
        </div>
      </PageHero>

      <Section className="!pt-4">
        <div className="grid gap-y-10 border-y border-white/[0.07] py-10 sm:grid-cols-3">
          {stats.map(([value, label], i) => (
            <Reveal key={label} delay={i * 0.06}>
              <div>
                <p className="h-display text-[34px] text-gradient">{value}</p>
                <p className="mt-1.5 text-[13px] text-bone-400">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="What it does"
          title="Every bundle mechanic that moves AOV."
          copy="Offers are created in the admin, rendered by an app block in your theme, and made real at checkout by automatic discounts — no codes for shoppers to forget."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-7">
                <h3 className="font-display text-base font-semibold text-bone-50">{o.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">{o.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead
          eyebrow="How it is built"
          title="Privacy-first, by architecture."
          copy="Most apps ask for everything and store what they can. This one requests four scopes, stores what the dashboard needs, and can prove the rest was never collected."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {architecture.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="card card-hover h-full p-8">
                <h3 className="h-display text-xl text-bone-50">{a.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-bone-300">{a.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="The paperwork" title="Documentation, in plain language." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {docs.map((d, i) => (
            <Reveal key={d.href} delay={i * 0.06}>
              <Link href={d.href} className="group block h-full">
                <div className="card card-hover flex h-full flex-col p-7">
                  <h3 className="font-display text-[17px] font-semibold text-bone-50">{d.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">{d.copy}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                    Read
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Want an app like this for your own idea?"
        copy="Marka Bundles & Upsells is what our Shopify practice ships for itself. The same team builds public and private apps, themes and checkout extensions for clients."
      />
    </>
  );
}
