import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { getAppDoc } from '@/lib/appdocs';

export const metadata: Metadata = {
  title: 'Support — Marka Subscrify',
  description:
    'Support for the Marka Subscrify Shopify app — direct email, answered by the people who built it, with response times stated.',
};

const siblings: [string, string][] = [
  ['/apps/marka-subscrify/', '← App overview'],
  ['/apps/marka-subscrify/privacy/', 'Privacy policy'],
  ['/apps/marka-subscrify/terms/', 'Terms of service'],
];

export default function MarkaSubscrifySupportPage() {
  return (
    <>
      <PageHero
        eyebrow={'Marka Subscrify · Help'}
        title={'Support'}
        copy={'No ticket queue, no bot. Email us and one of the people who built the app replies.'}
      >
        <div className="flex flex-wrap gap-4 text-[13px]">
          {siblings.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-bone-300 underline decoration-white/20 underline-offset-4 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </PageHero>

      <div className="shell pb-24">
        <div
          className="prose-insights max-w-3xl"
          dangerouslySetInnerHTML={{ __html: getAppDoc('subscrify-support') }}
        />
      </div>
    </>
  );
}
