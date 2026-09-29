import Reveal from '@/components/Reveal';
import Magnetic from '@/components/Magnetic';
import { site } from '@/lib/site';

/** Closing call to action. Appears at the foot of nearly every page. */
export default function CTA({
  title = 'Tell us what you are trying to build.',
  copy = 'A short call, a written view on whether we are the right studio for it, and a plan you can act on either way.',
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <div className="card grain relative overflow-hidden px-8 py-16 text-center md:px-16 md:py-24">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,182,106,0.16),transparent_62%)] blur-3xl" />
            <div className="relative">
              <p className="eyebrow">Next step</p>
              <h2 className="h-display mx-auto mt-5 max-w-2xl text-[32px] md:text-[46px]">
                <span className="text-gradient">{title}</span>
              </h2>
              <p className="lede mx-auto mt-6 max-w-xl">{copy}</p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Magnetic href="/contact/" className="btn-primary">
                  Start a project
                </Magnetic>
                <Magnetic href={`mailto:${site.tech}`} className="btn-ghost">
                  {site.tech}
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
