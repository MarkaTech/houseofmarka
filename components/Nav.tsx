'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import Magnetic from '@/components/Magnetic';
import { nav, site } from '@/lib/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock the page behind the overlay. Every link in the overlay (and the logo)
     closes it on click, which also releases the lock before navigating. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  /* Escape closes the menu — the one accessibility addition over the original. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-apple ${
          scrolled || open
            ? // The bracket syntax here is load-bearing. Tailwind only generates
              // opacity modifiers that sit on its own scale, so writing this
              // value bare — as a plain /72 suffix — compiles to nothing at all,
              // silently, and the sticky header loses its background.
              'border-b border-white/[0.06] bg-ink-950/[0.72] backdrop-blur-2xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="shell flex h-16 items-center justify-between md:h-[72px]">
          <Link aria-label={`${site.brand} home`} href="/" onClick={() => setOpen(false)}>
            <Logo className="h-7 w-7" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                className="rounded-full px-4 py-2 text-[13.5px] text-bone-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-bone-50"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic href="/contact/" className="btn-primary !px-5 !py-2.5 !text-[13.5px]" strength={0.25}>
              Start a project
            </Magnetic>
          </div>

          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-bone-100 transition-all duration-300 ease-apple ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-bone-100 transition-all duration-300 ease-apple ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink-950/[0.97] backdrop-blur-2xl transition-all duration-500 ease-apple md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="shell flex h-full flex-col justify-center gap-1 pb-20">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              className="border-b border-white/[0.06] py-5 font-display text-3xl font-light tracking-tight text-bone-50"
              style={{ transitionDelay: `${i * 40}ms` }}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="btn-primary mt-8 w-full" href="/contact/" onClick={() => setOpen(false)}>
            Start a project
          </Link>
        </div>
      </div>
    </>
  );
}
