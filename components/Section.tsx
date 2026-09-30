import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal';

/**
 * The standard vertical rhythm block. Every content section on the site is one
 * of these, so the padding and the `.shell` gutter are defined in exactly one
 * place. `className` is appended, which is how pages opt into `!pt-0`, `!pt-4`
 * or a top border.
 */
export default function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

/** Eyebrow + H2 + optional lede, each revealed on scroll with a short stagger. */
export function SectionHead({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  /** Centre the block and its text — used for the full-width interlude sections. */
  center?: boolean;
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="h-display mt-4 text-[34px] md:text-[46px] lg:text-[54px]">
          <span className="text-gradient">{title}</span>
        </h2>
      </Reveal>
      {copy ? (
        <Reveal delay={0.12}>
          <p className="lede mt-5">{copy}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
