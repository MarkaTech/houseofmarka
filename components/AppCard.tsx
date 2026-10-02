import Link from 'next/link';
import type { App } from '@/lib/apps';

/** Status pill: on the App Store, or on its way there. */
export function AppStatus({ status, className = '' }: { status: App['status']; className?: string }) {
  const live = status === 'live';
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.16em] ${
        live ? 'border-gold-400/30 text-gold-400' : 'border-white/10 text-bone-400'
      } ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-gold-400' : 'bg-bone-400/60'}`} />
      {live ? 'On the App Store' : 'Coming soon'}
    </span>
  );
}

/** The square mark on a card or page hero; a monogram where an app has no logo yet. */
export function AppMark({ app, size = 56 }: { app: App; size?: number }) {
  if (app.logo) {
    return (
      <img
        src={app.logo.src}
        width={size}
        height={size}
        alt={app.logo.alt}
        className="shrink-0 rounded-2xl"
        style={{ width: size, height: size }}
        loading="lazy"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-display text-lg font-semibold text-gold-400"
      style={{ width: size, height: size }}
    >
      {app.name.replace(/^Marka\s+/, '').slice(0, 1)}
    </span>
  );
}

/** One of the three Shopify apps, as a linked card. */
export default function AppCard({ app }: { app: App }) {
  return (
    <Link href={`/apps/${app.slug}/`} className="group block h-full">
      <div className="card card-hover grain flex h-full flex-col p-8 md:p-9">
        <div className="flex items-start justify-between gap-4">
          <AppMark app={app} />
          <AppStatus status={app.status} />
        </div>
        <p className="eyebrow mt-7">{app.kicker}</p>
        <h3 className="h-display mt-3 text-[24px] md:text-[26px]">
          <span className="text-gradient">{app.name}</span>
        </h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-bone-300">{app.tagline}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[13px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
          {app.status === 'live' ? 'See the app' : 'See the app and ask for early access'}
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
