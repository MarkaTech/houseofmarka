'use client';

import { useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const DURATION = 1400;

/**
 * Counts up to a value written as a string — `180+`, `14`, `5 yrs`, `<6 wks` —
 * keeping whatever prefix and suffix surround the number.
 */
export default function Counter({ value, className = '' }: { value: string; className?: string }) {
  /**
   * Parse inside useMemo, keyed on `value`. DO NOT inline this back into the
   * render body as a bare `value.match(...)`: match() returns a fresh object on
   * every render, and because `parsed` sits in the effect's dependency array
   * below, the per-frame setV() would tear the effect down and restart it. Each
   * restart resets `start` to the current time, so elapsed time never grows and
   * the number sits frozen near zero. That shipped once and was user-reported.
   */
  const parsed = useMemo(() => {
    const m = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
    return m
      ? {
          prefix: m[1],
          target: parseFloat(m[2]),
          suffix: m[3],
          decimals: m[2].includes('.') ? 1 : 0,
        }
      : null;
  }, [value]);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();
  const [v, setV] = useState(0);
  const target = parsed?.target ?? 0;

  useEffect(() => {
    if (!inView || !parsed) return;
    if (reduced) {
      setV(target);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      // A rAF timestamp can precede the performance.now() taken above, which made
      // the first frame negative ("-3+") on the live site. Clamp to [0, 1].
      const p = Math.max(0, Math.min(1, (now - start) / DURATION));
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, target, parsed]);

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {v.toFixed(parsed.decimals)}
      {parsed.suffix}
    </span>
  );
}
