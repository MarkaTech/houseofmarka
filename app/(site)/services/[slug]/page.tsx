import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Accordion from '@/components/Accordion';
import AppCard from '@/components/AppCard';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { appBySlug } from '@/lib/apps';
import { breadcrumbLd, faqLd, pageSocial } from '@/lib/seo';
import { serviceBySlug, servicePages } from '@/lib/services';
import { process, site } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.description,
    keywords: service.keywords,
    ...pageSocial(service.metaTitle, service.description),
  };
}

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

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const relatedApps = service.relatedApps.map(appBySlug).filter((a) => a !== undefined);
  const related = service.related.map(serviceBySlug).filter((s) => s !== undefined);

  /**
   * Service schema: what is sold, by whom (the Organization in the root layout, by
   * @id), and where. The FAQPage block is generated from the very array the
   * accordion renders, so no question is emitted that is not visible on the page.
   */
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}/services/${service.slug}/#service`,
    name: service.metaTitle,
    serviceType: service.serviceType,
    description: service.description,
    url: `${site.url}/services/${service.slug}/`,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: ['US', 'GB', 'EU', 'IN'],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${site.url}/contact/`,
      availableLanguage: 'en',
    },
  };
  const crumbs = breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/' },
    { name: service.name },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(service.faqs)) }} />

      <section className="grain relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.11),transparent_62%)] blur-3xl" />
          <div className="absolute -left-32 top-40 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(90,105,220,0.10),transparent_65%)] blur-3xl" />
        </div>
        <div className="shell relative">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] text-bone-400">
              <Link href="/services/" className="transition-colors hover:text-bone-100">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-bone-300">{service.name}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="eyebrow mt-8">{service.kicker}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mt-5 max-w-4xl text-[38px] leading-[1.03] md:text-[58px] lg:text-[66px]">
              <span className="text-gradient">{service.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede mt-7 max-w-3xl">{service.lede}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/contact/" className="btn-primary">
                Start a project
              </Link>
              <a href={`mailto:${site.tech}`} className="btn-ghost">
                {site.tech}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="!pt-4">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHead eyebrow="What we build" title="The work, in concrete terms." />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06]">
            {service.deliverables.map((point, j) => (
              <Reveal key={point} delay={j * 0.04}>
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

      <Section className="border-t border-white/[0.06] !pt-20">
        <div className="space-y-20">
          {service.sections.map((s) => (
            <div key={s.title} className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <Reveal>
                <h2 className="h-display text-[28px] md:text-[36px]">
                  <span className="text-gradient">{s.title}</span>
                </h2>
              </Reveal>
              <div className="space-y-5">
                {s.copy.map((p, j) => (
                  <Reveal key={j} delay={0.06 + j * 0.04}>
                    <p className="max-w-3xl text-[16px] leading-relaxed text-bone-300 md:text-[17px]">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {relatedApps.length > 0 ? (
        <Section className="border-t border-white/[0.06]">
          <SectionHead
            eyebrow="Our own apps"
            title="Built on the same standard."
            copy="The Shopify apps House of Marka makes for itself. Install one to see the work before you commission any."
          />
          <div className={`mt-14 grid gap-5 md:grid-cols-2 ${relatedApps.length > 2 ? 'lg:grid-cols-3' : ''}`}>
            {relatedApps.map((app, i) => (
              <Reveal key={app.slug} delay={i * 0.06}>
                <AppCard app={app} />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="Why House of Marka" title="What you get that a body shop will not give you." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {service.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-7">
                <h3 className="font-display text-base font-semibold text-bone-50">{w.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">{w.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="How it runs" title="Scope, prototype, build, operate." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className="h-full bg-ink-950 p-8">
                <p className="font-display text-[13px] font-semibold tracking-widest text-gold-400">{p.step}</p>
                <h3 className="h-display mt-5 text-xl text-bone-50">{p.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-bone-400">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHead eyebrow="Questions" title={`${service.name}, answered.`} />
          <Reveal delay={0.08}>
            <Accordion items={service.faqs} />
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Related" title="Also from the house." />
          <Reveal delay={0.1}>
            <Link href="/services/" className="btn-ghost">
              All services
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <ServiceCard service={s} compact />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-[13.5px] text-bone-400">
            Looking for something else?{' '}
            <Link href="/contact/" className="inline-flex items-center gap-1.5 text-bone-200 underline decoration-white/20 underline-offset-4 hover:text-white">
              Tell us what you are trying to build
              <Arrow />
            </Link>
          </p>
        </Reveal>
      </Section>

      <CTA
        title={`Tell us about the ${service.name} you need.`}
        copy="A short call, a written view on whether we are the right studio for it, and a plan you can act on either way."
      />
    </>
  );
}
