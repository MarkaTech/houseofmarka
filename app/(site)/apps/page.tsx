import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Shopify apps built and operated by House of Marka: Bundles & Upsells, Order Printer Invoice and Subscrify. Privacy-first, with native Shopify billing.',
};

const apps = [
  {
    slug: 'marka-bundles',
    kicker: 'Merchandising',
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

export default function AppsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="The apps we build for ourselves."
        copy="We run a Shopify practice for clients, and we ship our own apps on the same rails. Everything we learn passing Shopify App Store review goes straight back into the work we do for you."
      />

      <Section className="!pt-4">
        <div className="grid gap-5 lg:grid-cols-2">
          {apps.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.07}>
              <div className="card card-hover grain flex h-full flex-col p-8 md:p-10">
                <p className="eyebrow">{app.kicker}</p>
                <h2 className="h-display mt-4 text-[26px] md:text-[30px]">
                  <Link
                    href={`/apps/${app.slug}/`}
                    className="text-gradient transition-opacity hover:opacity-80"
                  >
                    {app.name}
                  </Link>
                </h2>
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
        <Reveal delay={0.12}>
          <div className="card mt-6 p-8">
            <p className="eyebrow">Publishing entity</p>
            <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-bone-300">
              Our Shopify apps are published and supported by{' '}
              <strong className="text-bone-100">{site.legal}</strong>, trading as House of Marka, from our
              registered office at {site.address.inline}. The same entity operates this website and every
              consulting engagement on it.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTA
        title="Want an app like these for your own idea?"
        copy="Public or private Shopify apps, themes and checkout extensions — built to pass review the first time, and to survive the updates after it."
      />
    </>
  );
}
