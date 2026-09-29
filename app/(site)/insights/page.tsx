import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import InsightsIndex from '@/components/InsightsIndex';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getCategories, getPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Field notes on applied AI, marketplace commerce, D2C growth, data and compliance — written for operators in the US, UK and Europe.',
};

export default function InsightsPage() {
  /**
   * Only the fields the index renders. Passing whole posts would serialise every
   * article's rendered `html` into the payload of a client component that never
   * reads it — hundreds of kilobytes on a page that shows titles.
   */
  const posts = getPosts().map(({ slug, title, description, dateFormatted, category, readingTime }) => ({
    slug,
    title,
    description,
    dateFormatted,
    category,
    readingTime,
  }));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Research for people who ship."
        copy="Field notes on applied AI, marketplace commerce, D2C economics and compliance — the questions our US, UK and European clients are actually asking."
      />

      <Section className="!pt-0">
        <InsightsIndex posts={posts} categories={getCategories()} />
      </Section>

      <CTA
        title="Want this thinking on your project?"
        copy="A 30-minute call usually tells us both whether there is a fit. Bring the problem, not a brief."
      />
    </>
  );
}
