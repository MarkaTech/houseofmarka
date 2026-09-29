import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { getAppDoc } from '@/lib/appdocs';

export const metadata: Metadata = {
  title: 'Support — Marka Bundles & Upsells',
  description:
    'Support for the Marka Bundles & Upsells Shopify app — direct email support answered within 24 hours on business days, plus setup and billing FAQs.',
};

const siblings: [string, string][] = [
  ['/apps/marka-bundles/', '← App overview'],
  ['/apps/marka-bundles/privacy/', 'Privacy policy'],
  ['/apps/marka-bundles/terms/', 'Terms of service'],
];

export default function MarkaBundlesSupportPage() {
  return (
    <>
      <PageHero
        eyebrow={'Marka Bundles & Upsells'}
        title={'Support'}
        copy={'We answer every message ourselves — there is no ticket queue and no bot.'}
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
          dangerouslySetInnerHTML={{ __html: getAppDoc('bundles-support') }}
        />
      </div>
    </>
  );
}
