import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Marka Subscrify — Shopify app',
  description:
    'Recurring subscriptions for Shopify: selling plans, subscribe-and-save pricing, dunning that recovers failed payments, and a customer portal that reduces churn.',
};

const appLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Marka Subscrify',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Shopify',
  description:
    'Recurring subscriptions for Shopify — selling plans, subscribe-and-save pricing, dunning and a customer portal for pause, skip, swap and cancel.',
  publisher: { '@type': 'Organization', name: site.legal, url: site.url },
  offers: {
    '@type': 'Offer',
    description: 'Free plan available; paid plans billed through Shopify after a free trial.',
  },
};

const stats: [string, string][] = [
  ['0', 'card details stored by us'],
  ['3', 'GDPR webhooks implemented'],
  ['1', 'subprocessor — Azure'],
];

const features = [
  {
    title: 'Selling plans',
    copy: 'Subscribe-and-save on any product or variant, built on Shopify’s native selling plan APIs.',
  },
  {
    title: 'Flexible intervals',
    copy: 'Weekly, fortnightly, monthly or a schedule you define, with minimum commitments where you need them.',
  },
  {
    title: 'Customer portal',
    copy: 'Subscribers pause, skip, swap, reschedule or cancel themselves — within limits you set.',
  },
  {
    title: 'Dunning that recovers',
    copy: 'Configurable retry schedules and update-payment emails, so a declined card is not a lost customer.',
  },
  {
    title: 'Cancellation flows',
    copy: 'Ask why, offer a pause or a discount instead, and keep the reason for your retention reporting.',
  },
  {
    title: 'Churn reporting',
    copy: 'Active subscribers, MRR, churn rate and recovery rate — the four numbers a subscription business runs on.',
  },
];

const decisions = [
  {
    title: 'Shopify holds the card, not us',
    copy: 'Recurring charges run against the payment mandate your customer authorises at checkout. We store Shopify’s identifier for that mandate and nothing else — no card numbers, no CVV, no bank details, no PCI scope.',
  },
  {
    title: 'Uninstalling does not cancel anyone',
    copy: 'Subscription contracts live in Shopify, not only in this app. If you uninstall, automated processing stops but your subscribers are still subscribed. We say so in the app, in the terms and on the support page, because finding out afterwards is how merchants lose trust.',
  },
  {
    title: 'Auto-renewal law is on your side of the line',
    copy: 'ROSCA and the FTC negative-option rule, California’s ARL, the EU Consumer Rights Directive: all of them bind the seller, not the app. We give you pre-renewal reminders, one-click cancellation and clear disclosure blocks so you can meet them — and we say plainly that meeting them is yours.',
  },
  {
    title: 'Nothing hostage on downgrade',
    copy: 'Downgrading pauses configuration beyond the new plan’s limits. It never deletes a subscription, a plan or a customer record. Upgrade again and everything returns as it was.',
  },
];

const hosting: [string, string][] = [
  ['Hosting', 'Microsoft Azure — Container Apps + Database for PostgreSQL, Central India region'],
  ['Encryption', 'TLS in transit, encrypted at rest by Azure'],
  ['Subprocessors', 'Microsoft Azure only — no analytics brokers, ad networks or third-party trackers'],
  ['Payments', 'Shopify subscription billing — the card never reaches us'],
  ['Protected customer data', 'Level 2 — name, email, phone and address, each justified field by field'],
  ['Privacy webhooks', 'customers/data_request, customers/redact and shop/redact implemented'],
  ['On uninstall', 'Session and access token deleted immediately'],
  ['Support', site.support],
];

const docs = [
  {
    href: '/apps/marka-subscrify/privacy/',
    title: 'Privacy policy',
    copy: 'Every field the app stores, why it needs it, and when it is deleted.',
  },
  {
    href: '/apps/marka-subscrify/terms/',
    title: 'Terms of service',
    copy: 'Plans, billing, subscription-law responsibilities and liability.',
  },
  {
    href: '/apps/marka-subscrify/support/',
    title: 'Support',
    copy: 'Direct email support, answered by the people who built it.',
  },
];

export default function MarkaSubscrifyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
      />

      <PageHero
        eyebrow="Products · Shopify app"
        title="Marka Subscrify"
        copy="Recurring subscriptions for Shopify — built on native selling plans, charged through Shopify’s own subscription billing, and wrapped in the two things most subscription apps treat as afterthoughts: dunning that actually recovers failed payments, and a portal subscribers can use without emailing you."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a href={`mailto:${site.support}?subject=Marka%20Subscrify`} className="btn-primary">
            Talk to the team
          </a>
          <Link href="/apps/marka-subscrify/support/" className="btn-ghost">
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
          title="Everything a subscription actually needs."
          copy="Plans are configured in the admin, attached to products through Shopify’s selling plan APIs, and rendered on the storefront by a theme app extension. Renewals are executed by Shopify."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-7">
                <h3 className="font-display text-base font-semibold text-bone-50">{f.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">{f.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead
          eyebrow="How it is built"
          title="The four decisions that matter."
          copy="A subscriptions app carries more regulatory weight than most. These are the positions we took, stated before you install rather than discovered afterwards."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {decisions.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="card card-hover h-full p-8">
                <h3 className="h-display text-xl text-bone-50">{d.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-bone-300">{d.copy}</p>
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
                    className="grid gap-1 border-b border-white/[0.07] pb-4 last:border-0 last:pb-0 sm:grid-cols-[190px_1fr] sm:gap-5"
                  >
                    <dt className="eyebrow">{label}</dt>
                    <dd className="text-[14px] leading-relaxed text-bone-200">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
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
        title="Need a subscriptions app built like this one?"
        copy="Marka Subscrify is what our Shopify practice ships for itself. The same team builds public and private apps, themes and checkout extensions for clients."
      />
    </>
  );
}
