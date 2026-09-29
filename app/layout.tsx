import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import { site } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const ogTitle = `${site.brand} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — Applied AI & product engineering`,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
  keywords: [
    'AI development company',
    'app development agency',
    'marketplace integration',
    'Amazon Shopify eBay integration',
    'custom software United Kingdom',
    'AI agents for commerce',
    'Marka Modern Retail',
    'House of Marka',
  ],
  authors: [{ name: site.legal }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    siteName: site.brand,
    title: ogTitle,
    description: site.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: ogTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: ogTitle,
    description: site.description,
    images: ['/og.png'],
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#050507',
  width: 'device-width',
  initialScale: 1,
};

/**
 * Organization schema, emitted on every page.
 *
 * Search engines only reconcile the brand with the legal entity if both names,
 * the registered office and the contact routes are stated in one place — so it
 * lives in the root layout rather than being repeated per page.
 */
const organisationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.brand,
  legalName: site.legal,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: ['US', 'GB', 'EU', 'IN'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  logo: `${site.url}/og.png`,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.tech,
      areaServed: ['US', 'GB', 'EU'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: site.support,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bone-50 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink-950"
        >
          Skip to content
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
