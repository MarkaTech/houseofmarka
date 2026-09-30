'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * Three page-wide pointer/scroll effects, all of them decorative:
 *   1. a gold scroll-progress bar across the very top,
 *   2. a soft aura that trails the cursor — painted as a radial-gradient
 *      background on a fixed full-screen layer, eased toward the pointer,
 *   3. a glow inside whichever `.card` the cursor is over, positioned by the
 *      --mx / --my custom properties that `.card::before` reads.
 *
 * The pointer parts (2 and 3) no-op on coarse pointers (there is no cursor to
 * follow, and the rAF loop would just burn battery) and under reduced motion.
 */
export default function SiteEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;

    let raf = 0;
    let tx = innerWidth / 2;
    let ty = innerHeight / 3;
    let x = tx;
    let y = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const card = (e.target as Element | null)?.closest?.('.card') as HTMLElement | null | undefined;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
    };

    const loop = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      if (auraRef.current) {
        auraRef.current.style.background = `radial-gradient(520px circle at ${x}px ${y}px, rgba(216,182,106,0.05), transparent 62%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
        style={{ scaleX, background: 'linear-gradient(90deg, #a37c33, #d8b66a 55%, #f0dcae)' }}
        aria-hidden="true"
      />
      <div ref={auraRef} className="pointer-events-none fixed inset-0 z-[1]" aria-hidden="true" />
    </>
  );
}
