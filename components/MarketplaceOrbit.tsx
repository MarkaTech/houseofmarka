'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Two elliptical rings of channel names around a single "your catalogue" core.
 *
 * Positions are percentages inside a 16/11 box: x = 50 + cos(a)·r,
 * y = 50 + sin(a)·r·0.56. The 0.56 flattens the circle into the same ellipse
 * the SVG guides draw. `depth` — 0 at the back of the ring, 1 at the front —
 * drives opacity, scale and z-index together, so a name passing behind the core
 * dims and shrinks instead of colliding with it.
 */
const inner = ['Amazon', 'Shopify', 'eBay', 'Walmart', 'Etsy'];
const outer = ['Zalando', 'Otto', 'Allegro', 'bol.com', 'Cdiscount', 'TikTok Shop'];

export default function MarketplaceOrbit() {
  const [t, setT] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      setT((now - start) / 1000);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  /** `speed` is in radians per second; `phase` offsets the whole ring. */
  const node = (label: string, i: number, count: number, radius: number, speed: number, phase = 0) => {
    const a = (i / count) * Math.PI * 2 + t * speed + phase;
    const x = 50 + Math.cos(a) * radius;
    const y = 50 + Math.sin(a) * radius * 0.56;
    const depth = (Math.sin(a) + 1) / 2;
    return (
      <div
        key={label}
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-ink-800/80 px-3.5 py-1.5 text-[11.5px] font-medium text-bone-200 backdrop-blur-md"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          opacity: 0.45 + 0.55 * depth,
          transform: `translate(-50%,-50%) scale(${0.86 + 0.2 * depth})`,
          zIndex: Math.round(10 * depth),
        }}
      >
        {label}
      </div>
    );
  };

  return (
    <div className="relative mx-auto aspect-[16/11] w-full max-w-3xl">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <ellipse cx="50" cy="50" rx="42" ry="23.5" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.15" />
        <ellipse cx="50" cy="50" rx="28" ry="15.7" fill="none" stroke="rgba(216,182,106,0.14)" strokeWidth="0.15" />
      </svg>

      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.16),transparent_65%)] blur-2xl" />

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-2xl border border-gold-400/25 bg-ink-900/90 px-6 py-5 text-center backdrop-blur-xl [box-shadow:0_0_60px_rgba(216,182,106,0.12)]">
          <p className="text-[10px] uppercase tracking-[0.24em] text-gold-400">Your catalogue</p>
          <p className="mt-1.5 font-display text-lg font-semibold text-bone-50">One source of truth</p>
          <p className="mt-1 text-[11.5px] text-bone-400">Stock · Pricing · Content · Orders</p>
        </div>
      </div>

      {outer.map((label, i) => node(label, i, outer.length, 42, 0.09))}
      {inner.map((label, i) => node(label, i, inner.length, 28, -0.14, 0.6))}
    </div>
  );
}
