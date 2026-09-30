'use client';

import type Lenis from 'lenis';
import { useEffect } from 'react';

/**
 * Lenis inertial scrolling. Loaded only in the browser and only when the
 * visitor has not asked for reduced motion — hijacking the scroll wheel for
 * someone who set that preference is exactly the wrong answer.
 */
export default function SmoothScroll() {
  useEffect(() => {
    let lenis: Lenis | undefined;
    let raf = 0;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;
    import('lenis').then(({ default: LenisCtor }) => {
      if (cancelled) return;
      const instance = new LenisCtor({
        duration: 1.1,
        // Exponential ease-out, clamped: 1.001 - 2^(-10t) overshoots 1 by 0.001.
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.6,
      });
      lenis = instance;
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
