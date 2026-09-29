/**
 * The wordmark. `className` sizes the glyph — the header uses the 28px default,
 * the footer passes `h-8 w-8`.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className={className ?? 'h-7 w-7'} fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="hmGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0dcae" />
            <stop offset="55%" stopColor="#d8b66a" />
            <stop offset="100%" stopColor="#a37c33" />
          </linearGradient>
        </defs>
        <rect
          x="0.75"
          y="0.75"
          width="38.5"
          height="38.5"
          rx="11"
          stroke="url(#hmGold)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <path
          d="M11 28.5V11.5l9 10.4 9-10.4v17"
          stroke="url(#hmGold)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[15px] font-semibold tracking-tight text-bone-50">
        House of Marka
      </span>
    </span>
  );
}
