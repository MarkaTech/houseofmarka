import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { servicePages } from '@/lib/services';
import { engagements, process, services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services: Shopify, iOS, Android & Software',
  description:
    'One-stop app development by House of Marka: Shopify apps and stores, Hydrogen headless, speed optimisation, iOS and Android apps and custom software.',
};

const stack: [string, string][] = [
  ['Languages', 'TypeScript · Swift · Kotlin · Python · Go · C#'],
  ['Frontend', 'Next.js · React · React Native · Flutter · SwiftUI · Jetpack Compose'],
  ['AI', 'Claude & frontier LLMs · RAG · vector search · fine-tuning · evals · agent frameworks'],
  ['Backend', 'Node · .NET · FastAPI · GraphQL · event-driven architectures'],
  ['Data', 'Postgres · Cosmos DB · Snowflake · dbt · Azure Data Factory'],
  ['Cloud', 'Azure (primary) · AWS · GCP · Terraform · Bicep · Kubernetes'],
  ['Commerce', 'Shopify · Magento · BigCommerce · Mirakl · Akeneo · Amazon SP-API'],
  ['Quality', 'Playwright · Vitest · XCTest · load testing · WCAG 2.2 AA audits'],
];

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-[3px] shrink-0" aria-hidden="true">
      <path d="M2.5 7.5l3 3 6-7" stroke="#d8b66a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything between the idea and the software that runs in production."
        copy="One accountable team for the whole job: Shopify apps and stores, iOS and Android apps, custom software — and the research, automation, AI, commerce and cloud work around them. We are deliberately focused: we do these things properly rather than everything adequately."
      />

      <Section className="!pt-4">
        <SectionHead
          eyebrow="What we build"
          title="Eight things we are asked for most."
          copy="Each has a page of its own: what we build, how long it takes, how it is priced, and the questions we are asked first."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06] !pb-0">
        <SectionHead
          eyebrow="Around the build"
          title="The wider practices."
          copy="Most of our work sits where these overlap — a Shopify app that needs real AI inside it, or a marketplace integration that has to survive a Black Friday."
        />
      </Section>

      {/*
        Each practice carries its own id: the header, the footer and the
        home-page service cards all deep-link to it (/services/#shopify), and
        Section's scroll-mt-24 is what stops the fixed header covering the
        heading when the browser jumps there. These sections use their own
        heading markup rather than SectionHead — the practice h2 is a size down
        from a normal section heading.
      */}
      {services.map((s, i) => (
        <Section
          key={s.id}
          id={s.id}
          className={i === 0 ? '!pt-16' : 'border-t border-white/[0.06]'}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow">{s.kicker}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="h-display mt-4 text-[32px] md:text-[44px]">
                  <span className="text-gradient">{s.title}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="lede mt-6">{s.blurb}</p>
              </Reveal>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06]">
              {s.points.map((point, j) => (
                <Reveal key={point} delay={j * 0.05}>
                  <div className="flex items-start gap-4 bg-ink-950 p-6 transition-colors duration-500 hover:bg-ink-900">
                    <span className="mt-1 font-display text-[11px] font-semibold tracking-widest text-gold-400">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[14.5px] leading-relaxed text-bone-200">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section className="border-t border-white/[0.06]">
        <SectionHead
          center
          eyebrow="Engagement models"
          title="Three ways to work with us."
          copy="We will tell you which one your problem needs — including when the answer is a smaller engagement than you asked for."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.07}>
              <div
                className={`card h-full p-8 ${
                  e.badge ? 'border-gold-400/25 bg-gradient-to-b from-gold-400/[0.07] to-transparent' : ''
                }`}
              >
                {e.badge ? (
                  <span className="mb-5 inline-block rounded-full border border-gold-400/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold-400">
                    {e.badge}
                  </span>
                ) : null}
                <h3 className="h-display text-2xl text-bone-50">{e.name}</h3>
                <p className="mt-2 text-[12.5px] uppercase tracking-[0.14em] text-bone-400">{e.meta}</p>
                <p className="mt-5 text-[14.5px] leading-relaxed text-bone-300">{e.copy}</p>
                <ul className="mt-7 space-y-3 border-t border-white/[0.07] pt-6">
                  {e.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[13.5px] text-bone-300">
                      <Tick />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="Delivery" title="What the first ninety days look like." />
        <div className="mt-14 space-y-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06]">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <div className="grid gap-4 bg-ink-950 p-8 md:grid-cols-[80px_200px_1fr] md:items-baseline md:gap-8">
                <p className="font-display text-[13px] font-semibold tracking-widest text-gold-400">{p.step}</p>
                <h3 className="h-display text-xl text-bone-50">{p.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-bone-400">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="Technology" title="The stack we are fluent in." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] md:grid-cols-2">
          {stack.map(([label, value], i) => (
            <Reveal key={label} delay={i * 0.04}>
              <div className="h-full bg-ink-950 p-7">
                <p className="eyebrow">{label}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-bone-200">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
