import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { metrics, work } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected case studies: marketplace integration, AI support automation, native app rebuilds and multilingual catalogue enrichment, with the numbers.',
};

const sectors = [
  'Retail & marketplaces',
  'Fashion & lifestyle',
  'Fintech & payments',
  'Logistics & supply chain',
  'Health & wellness',
  'B2B SaaS',
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Projects we can talk about."
        copy="Much of what we build sits behind NDAs. These are the engagements our clients were happy for us to describe — with the numbers they measured, not the ones we would have chosen."
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

      <Section className="!pt-4">
        <div className="space-y-6">
          {work.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link href={`/work/${c.slug}/`} className="group block">
                <article className="card card-hover grain overflow-hidden">
                  <div className="grid gap-8 p-8 md:grid-cols-[1.25fr_0.75fr] md:gap-14 md:p-12">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bone-400">
                        <span>{c.client}</span>
                        <span className="h-1 w-1 rounded-full bg-bone-400/50" />
                        <span>{c.region}</span>
                      </div>
                      <h2 className="h-display mt-5 text-[28px] md:text-[36px]">
                        <span className="text-gradient">{c.title}</span>
                      </h2>
                      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-bone-300">{c.summary}</p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {c.stack.slice(0, 4).map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-bone-400"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                        Read the case study
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
                    <div className="grid gap-6 self-start rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7">
                      {c.outcome.map(([value, label]) => (
                        <div key={label}>
                          <p className="font-display text-[30px] font-semibold leading-none text-gradient-gold">
                            {value}
                          </p>
                          <p className="mt-2 text-[12.5px] leading-snug text-bone-400">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="Sectors" title="Where we spend most of our time." />
        <div className="mt-12 flex flex-wrap gap-3">
          {sectors.map((s, i) => (
            <Reveal key={s} delay={i * 0.04}>
              <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[14px] text-bone-200">
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Want the version with names attached?"
        copy="We can arrange reference calls with clients in your sector once we have signed a mutual NDA."
      />
    </>
  );
}
