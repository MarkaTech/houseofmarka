import type { Metadata } from 'next';
import Link from 'next/link';
import SiteEffects from '@/components/Effects';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

/**
 * 404 lives outside the (site) route group — Next.js resolves the root
 * not-found boundary above it — so the chrome the group layout normally
 * provides has to be rendered here by hand.
 */
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
  // The root layout makes every page self-canonical; a 404 should not claim a URL.
  alternates: { canonical: null },
};

const popular: [string, string][] = [
  ['/services/', 'Services'],
  ['/marketplaces/', 'Marketplaces'],
  ['/work/', 'Case studies'],
  ['/insights/', 'Insights'],
  ['/apps/', 'Apps'],
  ['/about/', 'Company'],
];

export default function NotFound() {
  return (
    <>
      <SiteEffects />
      <Nav />
      <main id="main">
        <section className="grain relative flex min-h-[80svh] items-center overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.10),transparent_62%)] blur-3xl" />
          <div className="shell relative text-center">
            <p className="eyebrow">404</p>
            <h1 className="h-display mx-auto mt-5 max-w-2xl text-[40px] md:text-[64px]">
              <span className="text-gradient">This page has moved on.</span>
            </h1>
            <p className="lede mx-auto mt-6 max-w-md">
              The link is broken or the page no longer exists. Everything else is still where you left it.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/" className="btn-primary">
                Back to home
              </Link>
              <Link href="/contact/" className="btn-ghost">
                Contact us
              </Link>
            </div>
            <div className="mt-14">
              <p className="eyebrow">Or try one of these</p>
              <ul className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2.5">
                {popular.map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] text-bone-300 transition-colors duration-300 ease-apple hover:border-white/20 hover:text-bone-100"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
