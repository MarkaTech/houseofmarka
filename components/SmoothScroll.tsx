'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Lenis inertial scrolling. Loaded only in the browser and only when the
 * visitor has not asked for reduced motion — hijacking the scroll wheel for
 * someone who set that preference is exactly the wrong answer.
 */
export default function SmoothScroll() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    let cancelled = false;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    (async () => {
      const { default: Lenis } = await import('lenis');
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, [reduced]);

  return null;
}
