import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { getAppDoc } from '@/lib/appdocs';

export const metadata: Metadata = {
  title: 'Privacy Policy — Marka Subscrify',
  description:
    'Privacy policy for the Marka Subscrify Shopify app: every field a subscription needs, why it is needed, and when it is deleted.',
};

const siblings: [string, string][] = [
  ['/apps/marka-subscrify/', '← App overview'],
  ['/apps/marka-subscrify/terms/', 'Terms of service'],
  ['/apps/marka-subscrify/support/', 'Support'],
];

export default function MarkaSubscrifyPrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={'Marka Subscrify · Legal'}
        title={'Privacy Policy'}
        copy={'Written to match the build — every field the app stores is listed, with the single operational reason it exists.'}
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
          dangerouslySetInnerHTML={{ __html: getAppDoc('subscrify-privacy') }}
        />
      </div>
    </>
  );
}
