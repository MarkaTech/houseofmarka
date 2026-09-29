import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { getAppDoc } from '@/lib/appdocs';

export const metadata: Metadata = {
  title: 'Terms of Service — Marka Subscrify',
  description:
    'Terms for the Marka Subscrify Shopify app: plans, Shopify billing, your subscription-law responsibilities, liability and governing law.',
};

const siblings: [string, string][] = [
  ['/apps/marka-subscrify/', '← App overview'],
  ['/apps/marka-subscrify/privacy/', 'Privacy policy'],
  ['/apps/marka-subscrify/support/', 'Support'],
];

export default function MarkaSubscrifyTermsPage() {
  return (
    <>
      <PageHero
        eyebrow={'Marka Subscrify · Legal'}
        title={'Terms of Service'}
        copy={'Plans, billing, and a plain statement of which subscription-law duties are yours and which are ours.'}
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
          dangerouslySetInnerHTML={{ __html: getAppDoc('subscrify-terms') }}
        />
      </div>
    </>
  );
}
