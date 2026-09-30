import Link from 'next/link';
import Logo from '@/components/Logo';
import { site, work } from '@/lib/site';

const LINK = 'text-sm leading-snug text-bone-400 transition-colors duration-300 hover:text-bone-50';

const servicesLinks = [
  { href: '/services/#shopify', label: 'Shopify apps & themes' },
  { href: '/services/#consulting', label: 'Research & consulting' },
  { href: '/services/#automation', label: 'Automations' },
  { href: '/services/#ai', label: 'Applied AI' },
  { href: '/services/#apps', label: 'Android & iOS apps' },
  { href: '/services/#commerce', label: 'Commerce systems' },
  { href: '/services/#platform', label: 'Cloud & data' },
  { href: '/marketplaces/', label: 'Marketplace integration' },
];

const companyLinks = [
  { href: '/apps/', label: 'All apps' },
  { href: '/apps/marka-bundles/', label: 'Marka Bundles & Upsells' },
  { href: '/apps/marka-order-printer/', label: 'Marka Order Printer Invoice' },
  { href: '/apps/marka-subscrify/', label: 'Marka Subscrify' },
  { href: '/about/', label: 'Company' },
  { href: '/work/', label: 'Work' },
  { href: '/insights/', label: 'Insights' },
  { href: '/contact/', label: 'Contact' },
  { href: '/privacy/', label: 'Privacy policy' },
  { href: '/terms/', label: 'Terms of service' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950">
      {/* Decorative giant wordmark. Deliberately empty: the words come from
          .ghost-wordmark::before in globals.css, so there is no text node in the
          accessibility tree and nothing for a contrast audit to fail. It used to
          be real text at 1:1 contrast — do not put the words back. */}
      <div aria-hidden className="ghost-wordmark pointer-events-none select-none" />

      <div className="shell relative -mt-[4vw] py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.15fr_0.85fr]">
          <div>
            <Link aria-label={`${site.brand} home`} className="inline-block" href="/">
              <Logo className="h-8 w-8" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone-400">
              A house of apps from {site.legal}: Shopify apps, Android and iOS apps, and a SaaS
              platform — plus applied AI and commerce engineering for teams in the US, UK and Europe.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${site.tech}`}
                className="block text-sm text-bone-200 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
              >
                {site.tech}
              </a>
              <a
                href={`mailto:${site.support}`}
                className="block text-sm text-bone-200 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
              >
                {site.support}
              </a>
            </div>
            <address className="mt-6 not-italic">
              <p className="eyebrow mb-2">Registered office</p>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm leading-relaxed text-bone-400 transition-colors hover:text-bone-100"
              >
                {site.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            </address>
          </div>

          {/* These column headings are h2, not h4. They used to be h4, which
              skipped two levels and broke heading order for screen readers. */}
          <div>
            <h2 className="eyebrow mb-4">Services</h2>
            <ul className="space-y-2.5">
              {servicesLinks.map((l) => (
                <li key={l.href}>
                  <Link className={LINK} href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4">Case studies</h2>
            <ul className="space-y-2.5">
              {work.map((c) => (
                <li key={c.slug}>
                  <Link className={LINK} href={`/work/${c.slug}/`}>
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4">Company</h2>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link className={LINK} href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule my-12" />

        <div className="flex flex-col gap-4 text-xs text-bone-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legal}. All rights reserved. {site.brand} is a trading name of {site.legal}.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link className="transition-colors duration-300 ease-apple hover:text-bone-100" href="/privacy/">
              Privacy
            </Link>
            <Link className="transition-colors duration-300 ease-apple hover:text-bone-100" href="/terms/">
              Terms
            </Link>
            <Link className="transition-colors duration-300 ease-apple hover:text-bone-100" href="/contact/">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
