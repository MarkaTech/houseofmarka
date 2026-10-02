import type { Metadata } from 'next';
import Link from 'next/link';
import AppCard from '@/components/AppCard';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { apps } from '@/lib/apps';
import { houseOfApps, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Shopify Apps: Reviews, Cart & Bundles',
  description:
    'The House of Marka Shopify apps: Marka Reviews for verified product reviews, Marka Cart for a slide-out cart with upsells, Marka Bundles for bundles and BOGO.',
};

/** CollectionPage schema: the apps hub and the three apps it lists. */
const collectionLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'House of Marka Shopify apps',
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

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />

      <PageHero
        eyebrow="Apps"
        title="The Shopify apps we make ourselves."
        copy="Three apps for the parts of a store that decide whether a visit becomes an order: the reviews shoppers trust, the cart they check out from, and the bundles that lift the order. Built by House of Marka, published by Marka Modern Retail Private Limited, and held to the standard we build client apps to."
      />

      <Section className="!pt-4">
        <SectionHead
          eyebrow="Shopify apps"
          title="Reviews, cart and bundles — the conversion trio."
          copy="Marka Reviews is on the Shopify App Store today. Marka Cart and Marka Bundles & Upsells are on their way, with early access available on request."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.07}>
              <AppCard app={app} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-[13.5px] leading-relaxed text-bone-400">
            Every app lists its support page here, and its privacy policy with the app itself. Support for all
            three is{' '}
            <a
              href={`mailto:${site.support}`}
              className="text-bone-200 underline decoration-white/20 underline-offset-4 hover:text-white"
            >
              {site.support}
            </a>
            , answered by the people who built them.
          </p>
        </Reveal>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead
          eyebrow="Built for you"
          title="Need one of your own instead?"
          copy="House of Marka is a one-stop app development company. The team that makes these apps builds custom Shopify apps, iOS and Android apps and custom software to order — from a fixed-fee discovery to the release and the maintenance after it."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {houseOfApps.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.06}>
              <Link href={a.href} className="group block h-full">
                <div className="card card-hover grain flex h-full flex-col p-8 md:p-10">
                  <p className="eyebrow">{a.kicker}</p>
                  <h3 className="h-display mt-4 text-[24px] md:text-[28px]">
                    <span className="text-gradient">{a.title}</span>
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-bone-300">{a.copy}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[13px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                    {a.cta}
                    <Arrow />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Want an app of your own?"
        copy="Shopify, iOS, Android or custom software — tell us the idea. Built to pass store review the first time, and to survive the updates after it."
      />
    </>
  );
}
