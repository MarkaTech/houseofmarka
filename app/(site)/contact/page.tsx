import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { contacts, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project with House of Marka. Tell us what you are building and we will come back within one working day with an honest read and a plan.',
};

const facts: [string, string][] = [
  ['Coverage', 'US Eastern · UK · Central European hours'],
  ['Response time', 'Within one working day'],
  ['NDA', 'Happy to sign before the first call'],
];

const next = [
  'We read it properly — a person, not an autoresponder.',
  'A 30-minute call to understand the problem behind the request.',
  'A written summary with our read, a suggested shape and indicative cost.',
  'If it is a fit, a discovery sprint. If not, we will say who might be better.',
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you are stuck."
        copy="The more specific you are, the more useful our first reply will be. Rough budget and timeline help — even if they are guesses."
      />

      <Section className="!pt-4">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          {/*
            These three cards sit directly under the page <h1>, so they are h2 —
            an h3 here would skip a level and break the document outline for
            screen readers and for Google's heading extraction alike.
          */}
          <div className="space-y-5">
            <Reveal delay={0.08}>
              <div className="card p-8">
                <h2 className="h-display text-lg text-bone-50">Email us directly</h2>
                <div className="mt-6 space-y-6">
                  {contacts.map((c) => (
                    <div key={c.address}>
                      <p className="eyebrow">{c.label}</p>
                      <a
                        href={`mailto:${c.address}`}
                        className="mt-1.5 block text-[15px] text-bone-100 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70"
                      >
                        {c.address}
                      </a>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-bone-400">{c.copy}</p>
                    </div>
                  ))}
                </div>
                <dl className="mt-8 space-y-4 border-t border-white/[0.07] pt-6">
                  {facts.map(([label, value]) => (
                    <div key={label}>
                      <dt className="eyebrow">{label}</dt>
                      <dd className="mt-1 text-[14px] text-bone-300">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="card grain p-8">
                <h2 className="h-display text-lg text-bone-50">What happens next</h2>
                <ol className="mt-5 space-y-4">
                  {next.map((item, i) => (
                    <li key={item} className="flex gap-4 text-[13.5px] leading-relaxed text-bone-300">
                      <span className="font-display text-[11px] font-semibold tracking-widest text-gold-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card p-8">
                <h2 className="h-display text-lg text-bone-50">Registered office</h2>
                <address className="mt-4 not-italic text-[14px] leading-relaxed text-bone-300">
                  <span className="block text-bone-100">{site.legal}</span>
                  <span className="block text-bone-400">Trading as {site.brand}</span>
                  <span className="mt-3 block">
                    {site.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </address>
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-bone-200 transition-colors hover:text-white"
                >
                  Open in Maps
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M5 3h6v6M11 3L4 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
