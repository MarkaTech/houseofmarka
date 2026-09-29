import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { getAppDoc } from '@/lib/appdocs';

export const metadata: Metadata = {
  title: 'Privacy Policy — Marka Bundles & Upsells',
  description:
    'Privacy policy for the Marka Bundles & Upsells Shopify app: what is read, what is stored, for how long, and how deletion requests are honoured.',
};

const siblings: [string, string][] = [
  ['/apps/marka-bundles/', '← App overview'],
  ['/apps/marka-bundles/terms/', 'Terms of service'],
  ['/apps/marka-bundles/support/', 'Support'],
];

export default function MarkaBundlesPrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={'Marka Bundles & Upsells · Legal'}
        title={'Privacy Policy'}
        copy={'Written to match the code — every claim names the mechanism that implements it, so it can be verified during app review.'}
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
          dangerouslySetInnerHTML={{ __html: getAppDoc('bundles-privacy') }}
        />
      </div>
    </>
  );
}
