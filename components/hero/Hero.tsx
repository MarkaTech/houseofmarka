'use client';

import dynamic from 'next/dynamic';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Magnetic from '@/components/Magnetic';
import { site } from '@/lib/site';

/* The 3D mark is browser-only: three.js has no business in the prerender, and a
   static export would try to evaluate it at build time. */
const MarkScene = dynamic(() => import('./MarkScene'), { ssr: false });

const WORDS = ['apps', 'AI agents', 'marketplaces', 'platforms', 'storefronts'];
const ROTATE_MS = 3200;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [word, setWord] = useState(0);
  const [scene, setScene] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setWord((w) => (w + 1) % WORDS.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduced]);

  /**
   * Only mount the WebGL scene where it will actually be good: a real GPU
   * context, at least two cores, a wide viewport, and no reduced-motion
   * preference. Everywhere else gets the gradient glow below, which costs
   * nothing and still fills the right third of the composition.
   */
  useEffect(() => {
    if (reduced) return;
    const wide = window.matchMedia('(min-width: 900px)').matches;
    const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency ?? 0 : 0;
    let webgl = false;
    try {
      const probe = document.createElement('canvas');
      webgl = Boolean(probe.getContext('webgl2') ?? probe.getContext('webgl'));
    } catch {
      webgl = false;
    }
    setScene(wide && cores >= 2 && webgl);
  }, [reduced]);

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pb-28 pt-28 md:pb-20 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[18%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.13),transparent_62%)] blur-2xl" />
        <div className="absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(90,105,220,0.12),transparent_65%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          opacity: sceneOpacity,
          y: sceneY,
          scale: sceneScale,
          transition: 'opacity 120ms linear',
        }}
      >
        {scene ? (
          <MarkScene />
        ) : (
          <div className="relative flex h-full items-center justify-center">
            <div className="h-72 w-72 animate-spin-slow rounded-full border border-dashed border-gold-400/15" />
            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.14),transparent_68%)] blur-2xl" />
          </div>
        )}
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            'linear-gradient(100deg, rgba(5,5,7,0.97) 0%, rgba(5,5,7,0.92) 26%, rgba(5,5,7,0.55) 44%, rgba(5,5,7,0.08) 58%, rgba(5,5,7,0) 70%)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />

      <div className="shell relative z-10 pointer-events-none">
        <div className="max-w-3xl">
          {/* No quarter in this badge on purpose — "Now booking Q3" goes stale
              the moment the quarter turns, and nobody remembers to edit it. */}
          <div className="animate-fade-up" style={{ animationDelay: '40ms' }}>
            <span className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-bone-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              Now booking · US · UK · EU
            </span>
          </div>

          <p className="eyebrow mt-7 animate-fade-up" style={{ animationDelay: '80ms' }}>
            {site.legal}
          </p>

          <h1
            className="h-display mt-5 animate-fade-up text-[10.5vw] leading-[0.94] sm:text-[8vw] md:text-[68px] lg:text-[84px]"
            style={{ animationDelay: '180ms' }}
          >
            <span className="text-gradient">We build the</span>
            <br />
            {/* Clip box. The outgoing word is taken out of flow and the incoming
                one slides up behind this overflow-hidden edge, so the two never
                overlap opaquely — and there is no AnimatePresence mode="wait"
                gap where the line flashes empty. The negative margin plus equal
                padding give descenders room without moving the baseline. */}
            <span className="relative -mb-[0.16em] inline-block overflow-hidden pb-[0.16em] align-top">
              <AnimatePresence initial={false}>
                <motion.span
                  key={WORDS[word]}
                  className="text-gradient-gold inline-block whitespace-nowrap"
                  initial={{ y: '78%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-78%', opacity: 0, position: 'absolute', left: 0, top: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {WORDS[word]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span className="text-gradient">modern brands</span>
            <br />
            <span className="text-gradient">run on.</span>
          </h1>

          <p className="lede mt-8 max-w-xl animate-fade-up" style={{ animationDelay: '300ms' }}>
            House of Marka is the engineering studio of {site.legal}. Applied AI, native apps and the
            marketplace infrastructure that connects merchants to every channel worth selling on —
            for teams in the United States, United Kingdom and Europe.
          </p>

          <div
            className="pointer-events-auto mt-10 flex animate-fade-up flex-wrap items-center gap-3"
            style={{ animationDelay: '420ms' }}
          >
            <Magnetic href="/contact/" className="btn-primary">
              Start a project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Magnetic>
            <Magnetic href="/work/" className="btn-ghost">
              See our work
            </Magnetic>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
        style={{ opacity: cueOpacity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-bone-400">Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-white/45 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
