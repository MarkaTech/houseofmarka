import Link from 'next/link';
import Accordion from '@/components/Accordion';
import ClientStrip from '@/components/ClientStrip';
import Counter from '@/components/Counter';
import CTA from '@/components/CTA';
import Hero from '@/components/hero/Hero';
import Marquee from '@/components/Marquee';
import MarketplaceOrbit from '@/components/MarketplaceOrbit';
import QuoteRotator from '@/components/QuoteRotator';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { getPosts } from '@/lib/blog';
import { capabilities, faqs, houseOfApps, marketplaces, metrics, process, services, work } from '@/lib/site';

function Arrow({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

const aiPrinciples = [
  {
    title: 'Evaluation before enthusiasm',
    copy: 'Every AI feature ships with a test set, a baseline and an accuracy target. If it cannot beat the existing process, we say so.',
  },
  {
    title: 'Guardrails by default',
    copy: 'Approval gates on anything that spends above an agreed threshold or changes a customer record.',
  },
  {
    title: 'Cost as a design constraint',
    copy: 'Model routing, caching and distillation so unit economics survive scale.',
  },
  {
    title: 'Your data stays yours',
    copy: 'No client data used to train general-purpose models. EU and US residency options. Full DPA coverage.',
  },
];

export default function HomePage() {
  const posts = getPosts().slice(0, 3);

  /**
   * FAQPage schema for the accordion below.
   *
   * Google only awards the FAQ rich result when the same question and answer
   * text is visible on the page — so this block is generated from the very
   * array the accordion renders. Never emit a question here that is not also
   * rendered, and never collapse an answer out of the markup entirely.
   */
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Hero />

      <div className="relative border-y border-white/[0.06] bg-ink-900/40 py-6">
        <div className="shell">
          <p className="eyebrow mb-4 text-center">Channels we integrate every week</p>
          <Marquee items={marketplaces} />
        </div>
      </div>

      {/* The house of apps — what House of Marka is, stated before anything else. */}
      <Section id="apps">
        <SectionHead
          eyebrow="A house of apps"
          title="Shopify apps, Android and iOS apps, and a SaaS platform — under one roof."
          copy="House of Marka is a house of many apps. We publish our own Shopify apps, build Android and iOS apps for anyone with an idea worth shipping, and run a SaaS platform of our own — all engineered by the same senior team."
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

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.07}>
              <div className="border-l border-white/10 pl-6 transition-colors duration-500 hover:border-gold-400/50">
                <p className="h-display text-[42px] md:text-[52px]">
                  <Counter value={m.value} className="text-gradient" />
                </p>
                <p className="mt-2 text-sm text-bone-400">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <ClientStrip />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <SectionHead
            eyebrow="Who we are"
            title="A studio, not a body shop."
            copy="House of Marka is the engineering studio of Marka Modern Retail Private Limited. We are a small team of senior engineers, designers and AI specialists who take responsibility for outcomes rather than tickets — and who will tell you when the thing you asked for is not the thing you need."
          />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="h-full bg-ink-950 p-7 transition-colors duration-500 hover:bg-ink-900">
                  <h3 className="font-display text-[15px] font-semibold text-bone-50">{c.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-bone-400">{c.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* id is the anchor the header, footer and /services/ deep-links target. */}
      <Section id="services" className="border-t border-white/[0.06]">
        <SectionHead
          eyebrow="What we do"
          title="Seven practices. One accountable team."
          copy="Most of our work sits where these overlap — a Shopify app that needs real AI inside it, or a marketplace integration that has to survive a Black Friday."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.07} className={i === services.length - 1 ? 'md:col-span-2' : ''}>
                <Link href={`/services/#${s.id}`} className="group block h-full">
                  <div className="card card-hover grain h-full p-8 md:p-10">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.10),transparent_65%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                    <p className="eyebrow">{s.kicker}</p>
                    <h3 className="h-display mt-4 text-[26px] md:text-[30px]">
                      <span className="text-gradient">{s.title}</span>
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-bone-300">{s.blurb}</p>
                    <ul className="mt-7 space-y-2.5">
                      {s.points.slice(0, 3).map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[13.5px] text-bone-400">
                          <span className="mt-[7px] block h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                      Explore
                      <Arrow />
                    </span>
                  </div>
                </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead
          center
          eyebrow="Commerce infrastructure"
          title="Sell everywhere. Manage it in one place."
          copy="We connect merchants to the marketplaces their customers already shop on — and keep inventory, pricing, content and orders reconciled across all of them, in near real time."
        />
        <Reveal delay={0.1}>
          <div className="mt-16">
            <MarketplaceOrbit />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Link href="/marketplaces/" className="btn-ghost">
              How the integration layer works
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Selected work" title="Results, in the client’s numbers." />
          <Reveal delay={0.1}>
            <Link href="/work/" className="btn-ghost">
              All case studies
            </Link>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {work.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link href={`/work/${c.slug}/`} className="group block h-full">
                <article className="card card-hover h-full p-8 md:p-10">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bone-400">
                    <span>{c.client}</span>
                    <span className="h-1 w-1 rounded-full bg-bone-400/50" />
                    <span>{c.region}</span>
                  </div>
                  <h3 className="h-display mt-4 text-[24px] md:text-[28px]">
                    <span className="text-gradient">{c.title}</span>
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-bone-300">{c.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                    Read the case study
                    <Arrow />
                  </span>
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/[0.07] pt-6">
                    {c.outcome.map(([value, label]) => (
                      <div key={label}>
                        <p className="font-display text-xl font-semibold text-gradient-gold">{value}</p>
                        <p className="mt-1 text-[11.5px] leading-snug text-bone-400">{label}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">What clients say</p>
          </Reveal>
          <Reveal delay={0.08}>
            <QuoteRotator />
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="How we work" title="Predictable, in a category that usually isn’t." />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className="h-full bg-ink-950 p-8">
                <p className="font-display text-[13px] font-semibold tracking-widest text-gold-400">
                  {p.step}
                </p>
                <h3 className="h-display mt-5 text-xl text-bone-50">{p.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-bone-400">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHead
            eyebrow="Applied AI"
            title="We use frontier models the way a craftsman uses a good tool."
            copy="Quietly, and only where it earns its place. Our teams work daily with the current generation of reasoning and multimodal models — including Claude Opus-class systems for deep engineering work and fast models for high-volume tasks — with evaluation harnesses that tell us when a model is the wrong answer."
          />
          <div className="space-y-4">
            {aiPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="card card-hover p-6 md:p-7">
                  <h3 className="font-display text-base font-semibold text-bone-50">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-bone-400">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Latest thinking"
            title="Research for people who ship."
            copy="Fifty-plus field notes on applied AI, marketplaces, D2C economics and compliance, published as we learn things worth writing down."
          />
          <Reveal delay={0.1}>
            <Link href="/insights/" className="btn-ghost">
              All insights
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              <Link href={`/insights/${post.slug}/`} className="group block h-full">
                <article className="card card-hover flex h-full flex-col p-7">
                  <div className="flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.16em] text-bone-400">
                    <span className="text-gold-400/90">{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-bone-400/40" />
                    <span>{post.readingTime} min</span>
                  </div>
                  <h3 className="mt-4 font-display text-[18px] font-semibold leading-snug text-bone-50 transition-colors group-hover:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[13.5px] leading-relaxed text-bone-400">
                    {post.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[12.5px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                    Read
                    <Arrow size={12} />
                  </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHead eyebrow="Questions" title="The ones we get asked first." />
          <Reveal delay={0.08}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </Section>

      <CTA />
    </>
  );
}
