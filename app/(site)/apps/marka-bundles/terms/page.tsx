import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { getAppDoc } from '@/lib/appdocs';

export const metadata: Metadata = {
  title: 'Terms of Service — Marka Bundles & Upsells',
  description:
    'Terms of service for the Marka Bundles & Upsells Shopify app: plans, billing through Shopify, acceptable use, availability, data and liability.',
};

const siblings: [string, string][] = [
  ['/apps/marka-bundles/', '← App overview'],
  ['/apps/marka-bundles/privacy/', 'Privacy policy'],
  ['/apps/marka-bundles/support/', 'Support'],
];

export default function MarkaBundlesTermsPage() {
  return (
    <>
      <PageHero
        eyebrow={'Marka Bundles & Upsells · Legal'}
        title={'Terms of Service'}
        copy={'The agreement that governs use of the app — plans and billing, acceptable use, and what happens on downgrade, uninstall and termination.'}
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
          dangerouslySetInnerHTML={{ __html: getAppDoc('bundles-terms') }}
        />
      </div>
    </>
  );
}
