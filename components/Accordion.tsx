'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

/** Single-open accordion. The first item is open on load. */
export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-lg font-medium text-bone-50 md:text-xl">
                {item.q}
              </span>
              <span className="relative mt-1.5 block h-3.5 w-3.5 shrink-0">
                <span className="absolute left-0 top-1.5 block h-px w-3.5 bg-bone-300" />
                <span
                  className={`absolute left-1.5 top-0 block h-3.5 w-px bg-bone-300 transition-transform duration-500 ease-apple ${
                    isOpen ? 'scale-y-0' : 'scale-y-100'
                  }`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-bone-300">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
