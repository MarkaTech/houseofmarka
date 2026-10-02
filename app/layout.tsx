import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import { apps } from '@/lib/apps';
import { servicePages } from '@/lib/services';
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
    default: `${site.brand} — Shopify, iOS & Android App Development`,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
  keywords: [
    'House of Marka',
    'app development company',
    'Shopify app development',
    'custom Shopify app',
    'Shopify store customisation',
    'Shopify Hydrogen headless',
    'Shopify speed optimisation',
    'iOS app development',
    'Android app development',
    'custom software development',
    'Marka Reviews',
    'Marka Cart',
    'Marka Bundles',
    'Marka Modern Retail',
  ],
  authors: [{ name: site.legal }],
  // './' resolves against each page's own path, so every page declares itself as
  // canonical. This used to be `site.url`, which every page without its own
  // `alternates` inherited — telling Google that 25 pages, from /about/ to every app
  // privacy policy, were duplicates of the home page. The same applies to og:url.
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: './',
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
  alternates: { canonical: './' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
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
  '@id': `${site.url}/#organization`,
  name: site.brand,
  legalName: site.legal,
  url: site.url,
  email: site.email,
  slogan: site.tagline,
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
  // A square raster mark on a solid background reads as a logo; the 1200×630 share
  // banner (og.png, still used as `image`) does not.
  logo: { '@type': 'ImageObject', url: `${site.url}/logo.png`, width: 512, height: 512 },
  image: `${site.url}/og.png`,
  sameAs: ['https://github.com/MarkaTech'],
  // What the house makes — the entity facts answer engines lift when asked what
  // House of Marka is. Generated from the same data as the app and service pages,
  // so a product cannot appear here without a page to back it.
  knowsAbout: [
    ...servicePages.map((s) => s.serviceType),
    'Applied AI',
    'Marketplace integration',
    'E-commerce engineering',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'House of Marka apps and services',
    itemListElement: [
      ...apps.map((a) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          '@id': `${site.url}/apps/${a.slug}/#app`,
          name: a.name,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Shopify',
          url: `${site.url}/apps/${a.slug}/`,
        },
      })),
      ...servicePages.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${site.url}/services/${s.slug}/#service`,
          name: s.metaTitle,
          serviceType: s.serviceType,
          url: `${site.url}/services/${s.slug}/`,
        },
      })),
    ],
  },
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

/** WebSite schema: ties the site to the organisation above by @id. */
const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.brand,
  url: site.url,
  description: site.description,
  inLanguage: 'en-GB',
  publisher: { '@id': `${site.url}/#organization` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        {/* A plain-text map of the site for AI answer engines — see public/llms.txt. */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
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
