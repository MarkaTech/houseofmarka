'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/**
 * Three page-wide pointer/scroll effects, all of them decorative:
 *   1. a gold scroll-progress bar across the very top,
 *   2. a soft aura that trails the cursor,
 *   3. a glow inside whichever `.card` the cursor is over, positioned by the
 *      --mx / --my custom properties that `.card::before` reads.
 *
 * Every part of this no-ops on coarse pointers (there is no cursor to follow,
 * and the rAF loop would just burn battery) and under reduced motion.
 */
export default function SiteEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setActive(true);
  }, [reduced]);

  useEffect(() => {
    if (!active) return;

    let raf = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let card: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      const next = (e.target as Element | null)?.closest?.('.card') as HTMLElement | null;
      if (next !== card) card = next ?? null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.08;
      pos.y += (target.y - pos.y) * 0.08;
      const el = auraRef.current;
      if (el) el.style.transform = `translate3d(${pos.x - 190}px, ${pos.y - 190}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, #a37c33, #d8b66a 55%, #f0dcae)', scaleX }}
      />
      <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden="true">
        {active ? (
          <div
            ref={auraRef}
            className="absolute left-0 top-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.07),transparent_66%)] blur-2xl"
          />
        ) : null}
      </div>
    </>
  );
}
