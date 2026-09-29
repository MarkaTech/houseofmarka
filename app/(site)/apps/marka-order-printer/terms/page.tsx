import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { getAppDoc } from '@/lib/appdocs';

export const metadata: Metadata = {
  title: 'Terms — Marka Order Printer Invoice',
  description:
    'Terms of service for the Marka Order Printer Invoice Shopify app: the service, your responsibilities, billing through Shopify, availability and liability.',
};

const siblings: [string, string][] = [
  ['/apps/marka-order-printer/', '← App overview'],
  ['/apps/marka-order-printer/privacy/', 'Privacy policy'],
  ['/terms/', 'Website terms'],
];

export default function MarkaOrderPrinterTermsPage() {
  return (
    <>
      <PageHero
        eyebrow={'Marka Order Printer Invoice · Legal'}
        title={'Terms of Service'}
        copy={'Terms governing your use of the Marka Order Printer Invoice Shopify app. Last updated August 2026.'}
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
          dangerouslySetInnerHTML={{ __html: getAppDoc('order-printer-terms') }}
        />
      </div>
    </>
  );
}
