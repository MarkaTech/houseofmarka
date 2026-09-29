import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal';

/** The top of every page except the home page: eyebrow, H1, lede, optional CTAs. */
export default function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.11),transparent_62%)] blur-3xl" />
        <div className="absolute -left-32 top-40 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(90,105,220,0.10),transparent_65%)] blur-3xl" />
      </div>
      <div className="shell relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="h-display mt-5 max-w-4xl text-[40px] leading-[1.02] md:text-[62px] lg:text-[72px]">
            <span className="text-gradient">{title}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede mt-7 max-w-2xl">{copy}</p>
        </Reveal>
        {children ? (
          <Reveal delay={0.18}>
            <div className="mt-10">{children}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
