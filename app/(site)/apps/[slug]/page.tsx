import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Accordion from '@/components/Accordion';
import { AppMark, AppStatus } from '@/components/AppCard';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { appBySlug, dynamicApps } from '@/lib/apps';
import { breadcrumbLd, faqLd, pageSocial } from '@/lib/seo';
import { site } from '@/lib/site';

type Params = { slug: string };

/** Only the apps without a hand-written page; Marka Bundles has its own folder. */
export function generateStaticParams(): Params[] {
  return dynamicApps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const app = appBySlug(slug);
  if (!app || app.route !== 'dynamic') return {};
  const title = `${app.name}: Shopify ${app.kicker.toLowerCase()} app`;
  return {
    title,
    description: app.description,
    ...pageSocial(title, app.description),
  };
}

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-[3px] shrink-0" aria-hidden="true">
      <path d="M2.5 7.5l3 3 6-7" stroke="#d8b66a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function AppPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const app = appBySlug(slug);
  if (!app || app.route !== 'dynamic') notFound();

  const live = app.status === 'live';
  const earlyAccess = `mailto:${site.tech}?subject=${encodeURIComponent(`${app.name} — early access`)}`;

  /**
   * SoftwareApplication schema. `publisher` names the legal entity that owns the
   * App Store listing. Offers are emitted only from the published price list, so a
   * plan that does not exist on the listing cannot appear in search either.
   */
  const appLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${site.url}/apps/${app.slug}/#app`,
    name: app.name,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: app.category,
    operatingSystem: 'Shopify',
    description: app.description,
    url: `${site.url}/apps/${app.slug}/`,
    ...(app.logo ? { image: `${site.url}${app.logo.src}` } : {}),
    ...(live && app.storeUrl ? { installUrl: app.storeUrl, sameAs: [app.storeUrl] } : {}),
    publisher: { '@id': `${site.url}/#organization` },
    ...(app.plans
      ? {
          offers: app.plans.map((p) => ({
            '@type': 'Offer',
            name: `${p.name} plan`,
            price: p.price.replace(/[^0-9.]/g, ''),
            priceCurrency: 'USD',
            description: p.features.join('; '),
            ...(p.period ? { billingIncrement: 'P30D' } : {}),
          })),
        }
      : {}),
  };
  const crumbs = breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps/' },
    { name: app.name },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {app.faqs.length > 0 ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(app.faqs)) }} />
      ) : null}

      <section className="grain relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.11),transparent_62%)] blur-3xl" />
          <div className="absolute -left-32 top-40 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(90,105,220,0.10),transparent_65%)] blur-3xl" />
        </div>
        <div className="shell relative">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] text-bone-400">
              <Link href="/apps/" className="transition-colors hover:text-bone-100">
                Apps
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-bone-300">{app.name}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <AppMark app={app} size={72} />
              <div>
                <p className="eyebrow">Shopify app · {app.kicker}</p>
                <AppStatus status={app.status} className="mt-3" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mt-7 max-w-4xl text-[40px] leading-[1.02] md:text-[62px] lg:text-[72px]">
              <span className="text-gradient">{app.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede mt-7 max-w-3xl">{app.lede}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {live && app.storeUrl ? (
                <a href={app.storeUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Install from the Shopify App Store
                </a>
              ) : (
                <a href={earlyAccess} className="btn-primary">
                  Ask for early access
                </a>
              )}
              <Link href={`/apps/${app.slug}/support/`} className="btn-ghost">
                Support &amp; FAQs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="!pt-4">
        <div className="grid gap-y-10 border-y border-white/[0.07] py-10 sm:grid-cols-3">
          {app.highlights.map(([value, label], i) => (
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
        <SectionHead eyebrow="What it does" title={`Everything ${app.name} puts on your store.`} />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {app.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-7">
                <h3 className="font-display text-base font-semibold text-bone-50">{f.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">{f.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {app.plans ? (
        <Section className="border-t border-white/[0.06]">
          <SectionHead
            eyebrow="Pricing"
            title="Start free. Pay when the emails need to scale."
            copy="All charges are billed in USD through Shopify, every 30 days. Change plan or cancel from inside the app."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {app.plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <div
                  className={`card h-full p-8 ${
                    i === 1 ? 'border-gold-400/25 bg-gradient-to-b from-gold-400/[0.07] to-transparent' : ''
                  }`}
                >
                  {i === 1 ? (
                    <span className="mb-5 inline-block rounded-full border border-gold-400/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold-400">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="h-display text-2xl text-bone-50">{p.name}</h3>
                  <p className="mt-3">
                    <span className="h-display text-[34px] text-gradient">{p.price}</span>
                    {p.period ? <span className="ml-2 text-[13px] text-bone-400">{p.period}</span> : null}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-white/[0.07] pt-6">
                    {p.features.map((item) => (
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
      ) : null}

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="Getting started" title="How it lands on your store." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
          {app.setup.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="h-full bg-ink-950 p-8">
                <p className="font-display text-[13px] font-semibold tracking-widest text-gold-400">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="h-display mt-5 text-xl text-bone-50">{s.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-bone-400">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {app.faqs.length > 0 ? (
        <Section className="border-t border-white/[0.06]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHead eyebrow="Questions" title={`${app.name}, answered.`} />
            <Reveal delay={0.08}>
              <Accordion items={app.faqs} />
            </Reveal>
          </div>
        </Section>
      ) : null}

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="The paperwork" title="Support and policies." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Reveal>
            <Link href={`/apps/${app.slug}/support/`} className="group block h-full">
              <div className="card card-hover flex h-full flex-col p-7">
                <h3 className="font-display text-[17px] font-semibold text-bone-50">Support</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">
                  Direct email support, answered by the people who built it.
                </p>
                <span className="mt-auto pt-5 text-[13px] font-medium text-bone-200 group-hover:text-white">Read →</span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            {app.privacyUrl ? (
              <a href={app.privacyUrl} className="group block h-full" target="_blank" rel="noopener noreferrer">
                <div className="card card-hover flex h-full flex-col p-7">
                  <h3 className="font-display text-[17px] font-semibold text-bone-50">Privacy policy</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">
                    What the app reads, stores and deletes — published with the app itself.
                  </p>
                  <span className="mt-auto pt-5 text-[13px] font-medium text-bone-200 group-hover:text-white">Read →</span>
                </div>
              </a>
            ) : (
              <div className="card flex h-full flex-col p-7">
                <h3 className="font-display text-[17px] font-semibold text-bone-50">Privacy policy</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">
                  Published with the App Store listing. Early-access stores receive it with their setup.
                </p>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.12}>
            {live && app.storeUrl ? (
              <a href={app.storeUrl} className="group block h-full" target="_blank" rel="noopener noreferrer">
                <div className="card card-hover flex h-full flex-col p-7">
                  <h3 className="font-display text-[17px] font-semibold text-bone-50">Shopify App Store listing</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">
                    Plans, screenshots, merchant reviews and the install button.
                  </p>
                  <span className="mt-auto pt-5 text-[13px] font-medium text-bone-200 group-hover:text-white">Open →</span>
                </div>
              </a>
            ) : (
              <a href={earlyAccess} className="group block h-full">
                <div className="card card-hover flex h-full flex-col p-7">
                  <h3 className="font-display text-[17px] font-semibold text-bone-50">Early access</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone-400">
                    Write to {site.tech} with your store URL and we set it up with you.
                  </p>
                  <span className="mt-auto pt-5 text-[13px] font-medium text-bone-200 group-hover:text-white">Write →</span>
                </div>
              </a>
            )}
          </Reveal>
        </div>
      </Section>

      <CTA
        title="Want an app like this for your own idea?"
        copy={`${app.name} is what our Shopify practice ships for itself. The same team builds public and custom Shopify apps, iOS and Android apps and custom software for clients.`}
      />
    </>
  );
}
