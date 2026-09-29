import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { getPost, getPosts, getRelated } from '@/lib/blog';
import { site } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${site.url}/insights/${post.slug}/`;

  // Google truncates around 60 characters. Append the brand only when the
  // whole string still fits; otherwise the keyword gets cut off instead.
  const withBrand = `${post.seoTitle} — ${site.brand}`;
  const metaTitle = withBrand.length <= 60 ? withBrand : post.seoTitle;

  return {
    title: { absolute: metaTitle },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${site.url}/insights/${post.slug}/`;
  const related = getRelated(post);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    wordCount: post.words,
    url,
    author: { '@type': 'Organization', name: site.brand, url: site.url },
    publisher: { '@type': 'Organization', name: site.legal, url: site.url },
    image: `${site.url}/og.png`,
    mainEntityOfPage: url,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    inLanguage: 'en-GB',
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${site.url}/insights/` },
      { '@type': 'ListItem', position: 3, name: post.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="grain relative overflow-hidden pb-10 pt-32 md:pt-44">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[460px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.10),transparent_62%)] blur-3xl" />
        </div>
        <div className="shell relative">
          <Reveal>
            <Link
              href="/insights/"
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
              All insights
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bone-400">
              <span className="text-gold-400">{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-bone-400/50" />
              <time dateTime={post.date}>{post.dateFormatted}</time>
              <span className="h-1 w-1 rounded-full bg-bone-400/50" />
              <span>{post.readingTime} min read</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display mt-5 max-w-3xl text-[34px] leading-[1.05] md:text-[52px]">
              <span className="text-gradient">{post.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede mt-6 max-w-2xl">{post.description}</p>
          </Reveal>
        </div>
      </section>

      <Section className="!pt-8">
        <Reveal>
          <div className="prose-insights max-w-3xl" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card mt-16 max-w-3xl p-8">
            <p className="eyebrow">Work with us</p>
            <p className="mt-3 text-[15px] leading-relaxed text-bone-200">
              {site.brand} is the applied-AI and commerce engineering studio of {site.legal}. We research,
              advise and then build — for merchants and enterprises in the US, UK and Europe.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary !px-5 !py-2.5 !text-[13px]">
                Start a project
              </Link>
              <Link href="/services/" className="btn-ghost !px-5 !py-2.5 !text-[13px]">
                What we do
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {related.length > 0 ? (
        <Section className="border-t border-white/[0.06]">
          <p className="eyebrow">Keep reading</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/insights/${r.slug}/`} className="group block h-full">
                <article className="card card-hover flex h-full flex-col p-6">
                  <span className="text-[10.5px] uppercase tracking-[0.16em] text-gold-400/90">
                    {r.category}
                  </span>
                  <h3 className="mt-3 font-display text-[16px] font-semibold leading-snug text-bone-50 group-hover:text-white">
                    {r.title}
                  </h3>
                  <span className="mt-auto pt-4 text-[11.5px] text-bone-400/80">{r.readingTime} min read</span>
                </article>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <CTA />
    </>
  );
}
