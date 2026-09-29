import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { getAppDoc } from '@/lib/appdocs';

export const metadata: Metadata = {
  title: 'Privacy — Marka Order Printer Invoice',
  description:
    'Privacy policy for the Marka Order Printer Invoice Shopify app: what it stores, how protected customer data is used, hosting, retention and deletion.',
};

const siblings: [string, string][] = [
  ['/apps/marka-order-printer/', '← App overview'],
  ['/apps/marka-order-printer/terms/', 'Terms of service'],
  ['/privacy/', 'Website privacy policy'],
];

export default function MarkaOrderPrinterPrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={'Marka Order Printer Invoice · Legal'}
        title={'Privacy Policy'}
        copy={'How Marka Modern Retail Private Limited, trading as House of Marka, handles personal data in the Marka Order Printer Invoice Shopify app. Last updated August 2026.'}
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
          dangerouslySetInnerHTML={{ __html: getAppDoc('order-printer-privacy') }}
        />
      </div>
    </>
  );
}
