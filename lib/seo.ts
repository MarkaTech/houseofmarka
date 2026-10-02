import type { Metadata } from 'next';
import { site } from '@/lib/site';

/**
 * Page-specific Open Graph and Twitter cards.
 *
 * Next.js replaces the root layout's `openGraph` object wholesale when a page sets
 * its own — there is no deep merge — so a page that only wanted its own title
 * would silently lose og:url, og:site_name and og:locale. This restates all of
 * them. `url: './'` resolves to the page's own path, like the root canonical.
 */
export function pageSocial(title: string, description: string): Pick<Metadata, 'openGraph' | 'twitter'> {
  const full = `${title} — ${site.brand}`;
  return {
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: './',
      siteName: site.brand,
      title: full,
      description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: full }],
    },
    twitter: {
      card: 'summary_large_image',
      title: full,
      description,
      images: ['/og.png'],
    },
  };
}

/** BreadcrumbList JSON-LD for a page two or three levels deep. */
export function breadcrumbLd(trail: { name: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      ...(t.path ? { item: `${site.url}${t.path}` } : {}),
    })),
  };
}

/** FAQPage JSON-LD. Only ever call it with questions that are rendered on the page. */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
