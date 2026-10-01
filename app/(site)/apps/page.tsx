import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { houseOfApps, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Apps — Shopify, Android, iOS & SaaS',
  description:
    'The House of Marka apps: our own Shopify apps led by Marka Bundles & Upsells, Android and iOS apps built to order, and a SaaS platform of our own.',
};

const apps = [
  {
    slug: 'marka-bundles',
    kicker: 'Featured · Merchandising',
    name: 'Marka Bundles & Upsells',
    copy: 'Quantity breaks, fixed bundles, mix & match, BOGO, add-on upsells and frequently bought together — priced correctly at checkout by Shopify Functions. Stores zero shopper PII.',
  },
  {
    slug: 'marka-order-printer',
    kicker: 'Order documents',
    name: 'Marka Order Printer Invoice',
    copy: 'Invoices, packing slips, pick lists, receipts, credit notes, quotes, return forms and gift receipts from your order data — stored as immutable snapshots, billed per document.',
  },
  {
    slug: 'marka-subscrify',
    kicker: 'Subscriptions',
    name: 'Marka Subscrify',
    copy: 'Recurring subscriptions on native Shopify selling plans — subscribe-and-save pricing, dunning that recovers failed payments, and a customer portal for pause, skip, swap and cancel.',
  },
];

/** CollectionPage schema: the apps hub and the apps it links to. */
const collectionLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'House of Marka apps',
  url: `${site.url}/apps/`,
  about: { '@id': `${site.url}/#organization` },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: apps.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.name,
      url: `${site.url}/apps/${a.slug}/`,
    })),
  },
};

export default function AppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />

      <PageHero
        eyebrow="Apps"
        title="A house of apps."
        copy="House of Marka publishes its own Shopify apps, builds Android and iOS apps for anyone with an idea, and runs a SaaS platform of its own. Everything we learn shipping our apps goes straight back into the ones we build for you."
      />

      <Section className="!pt-4">
        <SectionHead eyebrow="Shopify apps" title="Our own apps on the Shopify App Store." />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {apps.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.07}>
              <div className="card card-hover grain flex h-full flex-col p-8 md:p-10">
                <p className="eyebrow">{app.kicker}</p>
                <h3 className="h-display mt-4 text-[26px] md:text-[30px]">
                  <Link
                    href={`/apps/${app.slug}/`}
                    className="text-gradient transition-opacity hover:opacity-80"
                  >
                    {app.name}
                  </Link>
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-bone-300">{app.copy}</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.07] pt-6 text-[13px]">
                  <Link
                    href={`/apps/${app.slug}/`}
                    className="font-medium text-bone-100 underline decoration-white/25 underline-offset-4 hover:text-white"
                  >
                    Overview
                  </Link>
                  <Link
                    href={`/apps/${app.slug}/privacy/`}
                    className="text-bone-400 underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone-100"
                  >
                    Privacy
                  </Link>
                  <Link
                    href={`/apps/${app.slug}/terms/`}
                    className="text-bone-400 underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone-100"
                  >
                    Terms
                  </Link>
                  <Link
                    href={`/apps/${app.slug}/support/`}
                    className="text-bone-400 underline decoration-white/15 underline-offset-4 transition-colors hover:text-bone-100"
                  >
                    Support
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead
          eyebrow="Android, iOS and SaaS"
          title="Have an app in mind? We will build it."
          copy="We build Android and iOS apps to order — tell us the idea and we take it from first wireframe to Google Play and the App Store. And we run a SaaS platform of our own, on the same engineering standards as every app in the house."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {houseOfApps
            .filter((a) => a.id !== 'shopify')
            .map((a, i) => (
              <Reveal key={a.id} delay={i * 0.06}>
                <Link href={a.href} className="group block h-full">
                  <div className="card card-hover flex h-full flex-col p-8">
                    <p className="eyebrow">{a.kicker}</p>
                    <h3 className="h-display mt-4 text-[22px]">
                      <span className="text-gradient">{a.title}</span>
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-bone-300">{a.copy}</p>
                    <span className="mt-auto pt-6 text-[13px] font-medium text-bone-200 underline decoration-white/25 underline-offset-4 group-hover:text-white">
                      {a.cta}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
        </div>
        <Reveal delay={0.12}>
          <div className="card mt-6 p-8">
            <p className="eyebrow">Publishing entity</p>
            <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-bone-300">
              Our apps are published and supported by{' '}
              <strong className="text-bone-100">{site.legal}</strong>, trading as House of Marka, from our
              registered office at {site.address.inline}. The same entity operates this website and every
              consulting engagement on it.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTA
        title="Want an app of your own?"
        copy="Android, iOS, Shopify or SaaS — tell us the idea. Built to pass store review the first time, and to survive the updates after it."
      />
    </>
  );
}
