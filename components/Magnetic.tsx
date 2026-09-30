'use client';

import Link from 'next/link';
import {
  useRef,
  type CSSProperties,
  type ElementType,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react';

/**
 * Cursor-attracted button. Internal hrefs render next/link so navigation stays
 * client-side; anything else (mailto:, https:) renders a plain anchor.
 *
 * The pull is the cursor's offset from the centre times `strength`, unclamped.
 * It is skipped on coarse pointers — checked on every move, since there is no
 * cursor to attract and a transform that fires on tap reads as a jitter.
 */
export default function Magnetic({
  href,
  children,
  className = '',
  style,
  strength = 0.3,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const Tag: ElementType = href.startsWith('/') ? Link : 'a';

  return (
    <Tag
      ref={ref}
      href={href}
      onMouseMove={(e: ReactMouseEvent<HTMLAnchorElement>) => {
        const el = ref.current;
        if (
          !el ||
          window.matchMedia('(pointer: coarse)').matches ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
        )
          return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = 'translate(0, 0)';
      }}
      // inline-flex, not inline-block: utilities outrank the .btn-* component
      // classes, and inline-block would cancel their flex row, dropping the
      // arrow icon (display:block via preflight) onto a line of its own.
      className={`inline-flex transition-transform duration-200 ease-out ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
