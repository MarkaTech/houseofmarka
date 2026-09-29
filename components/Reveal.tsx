'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

/**
 * Scroll-triggered fade-up. Fires once — an element that re-animates every time
 * it re-enters the viewport reads as a glitch on the way back up a page.
 */
export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const reduced = useReducedMotion();
  const shown = inView || reduced;

  return (
    <motion.div
      ref={ref}
      className=""
      initial={{ opacity: 0, y: 26 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{
        duration: reduced ? 0 : 0.75,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
