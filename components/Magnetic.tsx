'use client';

import Link from 'next/link';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react';

const BASE = 'inline-block transition-transform duration-200 ease-out';
const PULL = 0.28;
const MAX = 7;

/**
 * Cursor-attracted button. Internal hrefs render next/link so navigation stays
 * client-side; anything else (mailto:, https:) renders a plain anchor.
 *
 * The magnet is a no-op on coarse pointers and under reduced motion — there is
 * no cursor to attract, and a transform that fires on tap reads as a jitter.
 */
export default function Magnetic({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setActive(!coarse && !still);
  }, []);

  const onMove = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>) => {
      const el = ref.current;
      if (!active || !el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const x = Math.max(-MAX, Math.min(MAX, dx * PULL));
      const y = Math.max(-MAX, Math.min(MAX, dy * PULL));
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    [active],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = '';
  }, []);

  const cls = `${BASE} ${className}`;
  const internal = href.startsWith('/');

  if (internal) {
    return (
      <Link ref={ref} className={cls} href={href} onMouseMove={onMove} onMouseLeave={onLeave}>
        {children}
      </Link>
    );
  }

  return (
    <a ref={ref} href={href} className={cls} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </a>
  );
}
