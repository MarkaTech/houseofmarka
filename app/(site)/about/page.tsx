import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { metrics, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Company',
  description:
    'House of Marka is the one-stop app development company of Marka Modern Retail Private Limited: Shopify, iOS and Android apps and custom software, from Gurugram.',
};

const principles = [
  {
    title: 'Senior people, on your project',
    copy: 'The people in the pitch are the people who build it. We do not sell a principal and staff a junior.',
  },
  {
    title: 'Say the inconvenient thing early',
    copy: 'If the scope is wrong, the deadline is fiction, or the AI is not the answer, you hear it in week one — not in the retrospective.',
  },
  {
    title: 'Ship weekly',
    copy: 'Something real goes to a real environment every week. Progress you can click beats progress you have to take on trust.',
  },
  {
    title: 'Own the boring parts',
    copy: 'Migrations, error budgets, API deprecations, accessibility audits. The work that decides whether software survives its second year.',
  },
  {
    title: 'No lock-in',
    copy: 'Your code, your cloud accounts, your data, your models. We want to be renewed, not depended upon.',
  },
  {
    title: 'Small on purpose',
    copy: 'We take fewer engagements than we could. It is the only way the first principle stays true.',
  },
];

const disciplines = [
  {
    title: 'Engineering',
    copy: 'Mobile, web, backend, data and platform engineers who have shipped at scale.',
  },
  {
    title: 'Design',
    copy: 'Product designers, motion designers and a brand practice that comes from the group’s lifestyle roots.',
  },
  {
    title: 'AI',
    copy: 'Applied research, evaluation and prompt/agent engineering — plus the judgement to say when not to use it.',
  },
  {
    title: 'Delivery',
    copy: 'Product managers and delivery leads who protect scope and keep the reporting honest.',
  },
];

const trajectory = [
  {
    title: 'Foundation',
    copy: 'Marka Modern Retail Private Limited is founded as a modern retail and technology group.',
  },
  {
    title: 'House of Marka',
    copy: 'The engineering studio is formalised as House of Marka, focused on product, AI and commerce systems.',
  },
  {
    title: 'Going west',
    copy: 'Delivery structured around US, UK and European working hours, with the first multi-marketplace integrations for European retail groups.',
  },
  {
    title: 'Applied AI',
    copy: 'A dedicated AI practice — agents, retrieval and evaluation — built on the current generation of frontier reasoning models.',
  },
  {
    title: 'A house of apps',
    copy: 'Marka Reviews reaches the Shopify App Store, with Marka Cart and Marka Bundles & Upsells behind it — and the studio becomes a one-stop app development company: Shopify, iOS, Android and custom software, built to order.',
  },
  {
    title: 'Today',
    copy: '180+ products shipped, clients across 14 countries and an operating practice that keeps systems running long after launch.',
  },
];

const governance: [string, string][] = [
  ['Legal entity', site.legal],
  ['Trading brand', site.brand],
  ['What we make', 'Our Shopify apps: Marka Reviews, Marka Cart, Marka Bundles · Shopify, iOS and Android apps and custom software to order'],
  ['Registered office', site.address.inline],
  ['Primary markets', 'United States · United Kingdom · European Union'],
  ['Data protection', 'GDPR and UK GDPR compliant; DPAs available on request'],
  ['Cloud posture', 'Azure-first, with EU and US data residency options'],
  ['Contact', site.tech],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="House of Marka is a house of apps."
        copy="Marka Modern Retail Private Limited is a modern retail and technology group. House of Marka is where it builds apps: its own Shopify apps — Marka Reviews, Marka Cart and Marka Bundles — and Shopify, iOS and Android apps and custom software for anyone with an idea, designed, built and operated by one senior team."
      />

      <Section className="!pt-4">
        <div className="grid gap-y-10 border-y border-white/[0.07] py-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div>
                <p className="h-display text-[34px] text-gradient">{m.value}</p>
                <p className="mt-1.5 text-[13px] text-bone-400">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHead eyebrow="How we operate" title="Six things we refuse to compromise on." />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full bg-ink-950 p-7 transition-colors duration-500 hover:bg-ink-900">
                  <h3 className="font-display text-[15px] font-semibold text-bone-50">{p.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="The team" title="Four disciplines under one roof." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="card card-hover h-full p-7">
                <h3 className="h-display text-lg text-bone-50">{d.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-bone-400">{d.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="Trajectory" title="How we got here." />
        <div className="mt-14 border-l border-white/10 pl-8 md:pl-12">
          {trajectory.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[41px] top-1.5 block h-2 w-2 rounded-full bg-gold-400 md:-left-[57px]" />
                <h3 className="h-display text-xl text-bone-50">{t.title}</h3>
                <p className="mt-2.5 max-w-2xl text-[14.5px] leading-relaxed text-bone-400">{t.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHead eyebrow="Governance" title="The formalities, stated plainly." />
          <Reveal delay={0.08}>
            <div className="card p-8 md:p-10">
              <dl className="space-y-6">
                {governance.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 border-b border-white/[0.07] pb-5 last:border-0 last:pb-0 sm:grid-cols-[180px_1fr] sm:gap-6"
                  >
                    <dt className="eyebrow">{label}</dt>
                    <dd className="text-[14.5px] text-bone-200">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </>
  );
}
