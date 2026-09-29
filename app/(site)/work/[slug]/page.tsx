import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { work } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return work.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = work.find((c) => c.slug === slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      type: 'article',
      title: study.title,
      description: study.summary,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.summary,
      images: ['/og.png'],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = work.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const study = work[index];
  const next = work[(index + 1) % work.length];

  return (
    <>
      <section className="grain relative overflow-hidden pb-14 pt-32 md:pb-20 md:pt-44">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.11),transparent_62%)] blur-3xl" />
        </div>
        <div className="shell relative">
          <Reveal>
            <Link
              href="/work/"
              className="inline-flex items-center gap-2 text-[13px] text-bone-400 transition-colors hover:text-bone-100"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M11 7H3m0 0l3.5-3.5M3 7l3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All case studies
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bone-400">
              <span>{study.client}</span>
              <span className="h-1 w-1 rounded-full bg-bone-400/50" />
              <span>{study.region}</span>
              <span className="h-1 w-1 rounded-full bg-bone-400/50" />
              <span>{study.sector}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mt-5 max-w-4xl text-[38px] leading-[1.03] md:text-[58px] lg:text-[66px]">
              <span className="text-gradient">{study.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede mt-7 max-w-2xl">{study.summary}</p>
          </Reveal>
        </div>
      </section>

      <Section className="!py-0">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-3">
            {study.outcome.map(([value, label]) => (
              <div key={label} className="bg-ink-950 p-8">
                <p className="font-display text-[38px] font-semibold leading-none text-gradient-gold">{value}</p>
                <p className="mt-3 text-[13px] leading-snug text-bone-400">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">The problem</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-2xl text-lg leading-relaxed text-bone-200 md:text-xl md:leading-relaxed">
              {study.challenge}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">What we did</p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06]">
            {study.approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <div className="grid gap-3 bg-ink-950 p-8 md:grid-cols-[60px_1fr] md:gap-8">
                  <p className="font-display text-[13px] font-semibold tracking-widest text-gold-400">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <h2 className="h-display text-xl text-bone-50">{step.title}</h2>
                    <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-bone-400">{step.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Where it landed</p>
          </Reveal>
          <div>
            <Reveal delay={0.06}>
              <p className="max-w-2xl text-lg leading-relaxed text-bone-200 md:text-xl md:leading-relaxed">
                {study.result}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <figure className="card mt-12 max-w-2xl p-8 md:p-10">
                <blockquote className="font-display text-xl font-light leading-relaxed text-bone-100 md:text-2xl">
                  “{study.quote.text}”
                </blockquote>
                <figcaption className="mt-6 text-[12.5px] uppercase tracking-[0.16em] text-bone-400">
                  {study.quote.role} · {study.client}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Details</p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <div>
                <p className="eyebrow mb-3">Engagement</p>
                <p className="text-[14.5px] text-bone-200">{study.duration}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="eyebrow mb-3">Technology</p>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12.5px] text-bone-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <Reveal>
          <Link href={`/work/${next.slug}/`} className="group block">
            <p className="eyebrow">Next case study</p>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
              <h2 className="h-display max-w-2xl text-[28px] md:text-[40px]">
                <span className="text-gradient">{next.title}</span>
              </h2>
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-4 group-hover:text-white">
                Read it
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
      </Section>

      <CTA
        title="Have a problem shaped like this one?"
        copy="Tell us where you are stuck. We will tell you whether it is a six-week job or a six-month one — before you commit to either."
      />
    </>
  );
}
