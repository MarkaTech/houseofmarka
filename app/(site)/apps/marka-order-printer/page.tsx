import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Marka Order Printer Invoice — Shopify app',
  description:
    'Invoices, packing slips, pick lists, credit notes, quotes and return forms for Shopify — generated from your order data using templates you design.',
};

const appLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Marka Order Printer Invoice',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Shopify',
  description:
    'Generate invoices, packing slips, pick lists, receipts, credit notes, quotes, return forms and gift receipts from Shopify order data using templates you design.',
  publisher: { '@type': 'Organization', name: site.legal, url: site.url },
};

const documents = [
  'Invoices',
  'Packing slips',
  'Pick lists',
  'Receipts',
  'Credit notes',
  'Quotes',
  'Return forms',
  'Gift receipts',
];

const principles = [
  {
    title: 'Immutable by design',
    copy: 'Every generated document is stored as a point-in-time snapshot — order number, line items, prices, taxes, totals and the addresses printed on it. An issued invoice can always be reproduced exactly as issued, which is the whole point of an invoice.',
  },
  {
    title: 'Templates you design',
    copy: 'Layouts and styling are yours to build, with your brand name, legal entity, address, tax ID, support email and logo carried through every document type.',
  },
  {
    title: 'Billed per document, not per order',
    copy: 'Where paid plans apply, charges are counted per document generated — never per untouched order — and billed through Shopify on your existing invoice.',
  },
  {
    title: 'Customer data used only to print',
    copy: 'Customer name and address are requested under Shopify’s protected customer data rules for one purpose: rendering the "Bill to" and "Ship to" blocks on your own documents. Never shared, never used for advertising or profiling, never used to train models.',
  },
];

const hosting: [string, string][] = [
  ['Hosting', 'Microsoft Azure — Container Apps + Database for PostgreSQL, Central India region'],
  ['Encryption', 'TLS in transit, encrypted at rest by Azure'],
  ['Subprocessors', 'Microsoft Azure only — no analytics brokers, ad networks or third-party trackers'],
  ['Privacy webhooks', 'customers/data_request, customers/redact and shop/redact implemented'],
  ['On uninstall', 'Session and access token deleted immediately'],
  ['Support', site.support],
];

export default function MarkaOrderPrinterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />

      <PageHero
        eyebrow="Products · Shopify app"
        title="Marka Order Printer Invoice"
        copy="Every order document a merchant actually needs — generated from your Shopify data, styled with templates you design, and stored as immutable snapshots so an issued document can always be reproduced exactly as it was issued."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.support}?subject=Marka%20Order%20Printer%20Invoice`}
            className="btn-primary"
          >
            Talk to the team
          </a>
          <Link href="/apps/marka-order-printer/privacy/" className="btn-ghost">
            Privacy &amp; terms
          </Link>
        </div>
      </PageHero>

      <Section className="!pt-4">
        <SectionHead eyebrow="Document types" title="Eight documents, one template system." />
        <div className="mt-12 flex flex-wrap gap-3">
          {documents.map((d, i) => (
            <Reveal key={d} delay={i * 0.04}>
              <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[14px] text-bone-200">
                {d}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="How it works" title="Built the way accounting expects." />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="card card-hover h-full p-8">
                <h3 className="h-display text-xl text-bone-50">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-bone-300">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHead eyebrow="Data & hosting" title="Where everything runs." />
          <Reveal delay={0.08}>
            <div className="card p-8 md:p-10">
              <dl className="space-y-5">
                {hosting.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 border-b border-white/[0.07] pb-4 last:border-0 last:pb-0 sm:grid-cols-[150px_1fr] sm:gap-5"
                  >
                    <dt className="eyebrow">{label}</dt>
                    <dd className="text-[14px] leading-relaxed text-bone-200">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/apps/marka-order-printer/privacy/"
                  className="btn-ghost !px-5 !py-2.5 !text-[13px]"
                >
                  Privacy policy
                </Link>
                <Link
                  href="/apps/marka-order-printer/terms/"
                  className="btn-ghost !px-5 !py-2.5 !text-[13px]"
                >
                  Terms of service
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <Reveal>
          <div className="card p-8 md:p-10">
            <p className="eyebrow">Publisher</p>
            <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-bone-300">
              This app is published and supported by{' '}
              <strong className="text-bone-100">{site.legal}</strong>, trading as House of Marka, from our
              registered office at {site.address.inline}. The same entity operates this website and every
              consulting engagement on it.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTA
        title="Need a Shopify app built like this one?"
        copy="Marka Order Printer Invoice is what our Shopify practice ships for itself. The same team builds public and private apps, themes and checkout extensions for clients."
      />
    </>
  );
}
