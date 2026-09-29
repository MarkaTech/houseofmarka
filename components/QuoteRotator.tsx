'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { work } from '@/lib/site';

const INTERVAL = 7000;

/** Rotates the four case-study quotes, with dot navigation. */
export default function QuoteRotator() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % work.length), INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  const c = work[i];

  return (
    <div className="relative">
      <svg width="44" height="34" viewBox="0 0 44 34" fill="none" aria-hidden="true" className="mb-8 opacity-90">
        <path
          d="M0 34V20.4C0 8.6 6.9 1.3 18.6 0l1.9 5.4C13.6 7 10 10.8 9.6 15.4H18V34H0Zm26 0V20.4C26 8.6 32.9 1.3 44 0l1.6 5.4c-6.7 1.6-10.3 5.4-10.7 10H43V34H26Z"
          fill="url(#qg)"
          transform="scale(0.95)"
        />
        <defs>
          <linearGradient id="qg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0dcae" />
            <stop offset="100%" stopColor="#a37c33" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative min-h-[150px] md:min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={c.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-3xl font-display text-2xl font-light leading-snug text-bone-100 md:text-[32px]">
              “{c.quote.text}”
            </p>
            <footer className="mt-6 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-bone-400">
              <span className="text-gold-400">{c.quote.role}</span>
              <span className="h-1 w-1 rounded-full bg-bone-400/50" />
              <span>{c.client}</span>
              <span className="h-1 w-1 rounded-full bg-bone-400/50" />
              <Link
                className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-bone-100"
                href={`/work/${c.slug}/`}
              >
                Case study
              </Link>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex gap-2">
        {work.map((q, n) => (
          <button
            key={q.slug}
            aria-label={`Quote ${n + 1}`}
            className="group flex h-6 items-center"
            onClick={() => setI(n)}
          >
            <span
              className={`block h-[3px] rounded-full transition-all duration-500 ease-apple ${
                n === i ? 'w-9 bg-gold-400' : 'w-4 bg-white/15 group-hover:bg-white/35'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
