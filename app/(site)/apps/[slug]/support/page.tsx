import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Accordion from '@/components/Accordion';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';
import { appBySlug, dynamicApps } from '@/lib/apps';
import { breadcrumbLd, faqLd } from '@/lib/seo';
import { site } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return dynamicApps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const app = appBySlug(slug);
  if (!app || app.route !== 'dynamic') return {};
  return {
    title: `Support — ${app.name}`,
    description: `Support for the ${app.name} Shopify app — direct email support answered within 24 hours on business days, plus setup and billing FAQs.`,
  };
}

const rows = (app: string): [string, string, string][] => [
  ['Setup help, bugs, billing', site.support, 'Within 24 hours on business days'],
  ['Privacy or data-subject requests', site.support, 'Acknowledged in 24 hours, resolved within 30 days'],
  [`Security disclosure (subject: SECURITY — ${app})`, site.support, 'Within 24 hours'],
];

export default async function AppSupportPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const app = appBySlug(slug);
  if (!app || app.route !== 'dynamic') notFound();

  const crumbs = breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps/' },
    { name: app.name, path: `/apps/${app.slug}/` },
    { name: 'Support' },
  ]);

  const siblings: [string, string][] = [
    [`/apps/${app.slug}/`, '← App overview'],
    ...(app.privacyUrl ? ([[app.privacyUrl, 'Privacy policy']] as [string, string][]) : []),
    ...(app.storeUrl ? ([[app.storeUrl, 'Shopify App Store listing']] as [string, string][]) : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {app.faqs.length > 0 ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(app.faqs)) }} />
      ) : null}

      <PageHero
        eyebrow={app.name}
        title="Support"
        copy="We answer every message ourselves — there is no ticket queue and no bot."
      >
        <div className="flex flex-wrap gap-4 text-[13px]">
          {siblings.map(([href, label]) =>
            href.startsWith('/') ? (
              <Link
                key={href}
                href={href}
                className="text-bone-300 underline decoration-white/20 underline-offset-4 hover:text-white"
              >
                {label}
              </Link>
            ) : (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone-300 underline decoration-white/20 underline-offset-4 hover:text-white"
              >
                {label}
              </a>
            ),
          )}
        </div>
      </PageHero>

      <Section className="!pt-4">
        <SectionHead eyebrow="Get in touch" title="One address, read by the people who built it." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06]">
          {rows(app.name).map(([what, address, when], i) => (
            <Reveal key={what} delay={i * 0.05}>
              <div className="grid gap-2 bg-ink-950 p-6 md:grid-cols-[1.2fr_1fr_1fr] md:items-center md:gap-8">
                <p className="text-[14.5px] text-bone-100">{what}</p>
                <a
                  href={`mailto:${address}?subject=${encodeURIComponent(app.name)}`}
                  className="text-[14px] text-bone-200 underline decoration-white/20 underline-offset-4 hover:text-white"
                >
                  {address}
                </a>
                <p className="text-[13px] text-bone-400">{when}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 max-w-2xl">
            <p className="eyebrow mb-3">Before you write in</p>
            <p className="text-[14.5px] leading-relaxed text-bone-300">
              Including your <code className="text-bone-100">.myshopify.com</code> domain, the product URL where
              you saw the problem and a screenshot usually lets us fix it on the first reply.
            </p>
          </div>
        </Reveal>
      </Section>

      {app.faqs.length > 0 ? (
        <Section className="border-t border-white/[0.06]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHead eyebrow="Common questions" title="Answered before you ask." />
            <Reveal delay={0.08}>
              <Accordion items={app.faqs} />
            </Reveal>
          </div>
        </Section>
      ) : null}
    </>
  );
}
