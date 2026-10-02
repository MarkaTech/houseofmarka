import Link from 'next/link';
import type { ServicePage } from '@/lib/services';

/** A service page, as a linked card on the home page and the /services/ hub. */
export default function ServiceCard({ service, compact = false }: { service: ServicePage; compact?: boolean }) {
  return (
    <Link href={`/services/${service.slug}/`} className="group block h-full">
      <div className={`card card-hover grain relative flex h-full flex-col ${compact ? 'p-7' : 'p-8 md:p-9'}`}>
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.10),transparent_65%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
        <p className="eyebrow">{service.kicker}</p>
        <h3 className={`h-display mt-3 ${compact ? 'text-[20px]' : 'text-[22px] md:text-[24px]'}`}>
          <span className="text-gradient">{service.name}</span>
        </h3>
        {!compact ? (
          <p className="mt-3 text-[14px] leading-relaxed text-bone-300">{service.description}</p>
        ) : null}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
          Explore
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
