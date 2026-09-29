import type { Metadata } from 'next';
import Accordion from '@/components/Accordion';
import CTA from '@/components/CTA';
import MarketplaceOrbit from '@/components/MarketplaceOrbit';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Section, { SectionHead } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Marketplace integration',
  description:
    'Connect your catalogue to Amazon, Shopify, eBay, Walmart, Zalando, Otto and more. One source of truth for stock, pricing, content and orders.',
};

const steps = [
  {
    step: '01',
    title: 'Connect',
    copy: 'We read from wherever your product truth already lives — Shopify, an ERP, a PIM, or a spreadsheet nobody wants to admit to.',
  },
  {
    step: '02',
    title: 'Normalise',
    copy: 'Attributes mapped to each marketplace’s taxonomy, images resized to spec and content enriched or translated where it is thin.',
  },
  {
    step: '03',
    title: 'Publish',
    copy: 'Listings created and updated per channel, with validation before submission so you are not debugging rejections by email.',
  },
  {
    step: '04',
    title: 'Reconcile',
    copy: 'Stock and pricing pushed continuously; orders, cancellations and returns pulled back into one queue with your fulfilment system.',
  },
];

const coverage = [
  {
    market: 'United States',
    channels: [
      'Amazon US',
      'Walmart Marketplace',
      'Target Plus',
      'eBay',
      'Etsy',
      'TikTok Shop',
      'Wayfair',
      'Faire',
    ],
  },
  {
    market: 'United Kingdom & Ireland',
    channels: ['Amazon UK', 'eBay UK', 'OnBuy', 'Debenhams', 'Next Marketplace', 'B&Q', 'TikTok Shop UK'],
  },
  {
    market: 'Europe',
    channels: [
      'Zalando',
      'Otto',
      'Allegro',
      'bol.com',
      'Cdiscount',
      'Amazon EU',
      'Kaufland',
      'ManoMano',
      'Mirakl operators',
    ],
  },
];

const capabilities = [
  {
    title: 'Inventory safety',
    copy: 'Buffer rules, channel allocation and oversell protection so a flash sale on one channel does not embarrass you on another.',
  },
  {
    title: 'Repricing',
    copy: 'Rules or model-driven pricing with floors, competitor awareness and margin guards.',
  },
  {
    title: 'Content enrichment',
    copy: 'AI-assisted titles, bullets and descriptions per marketplace, reviewed by a human where confidence is low.',
  },
  {
    title: 'Localisation',
    copy: 'Six-plus languages, local size and unit conventions, and market-specific compliance fields.',
  },
  {
    title: 'Tax & compliance',
    copy: 'VAT, OSS/IOSS, EPR and marketplace facilitator rules handled in the data layer.',
  },
  {
    title: 'Reporting',
    copy: 'Channel P&L, fee reconciliation, returns rate and buy-box performance in one dashboard.',
  },
];

const faqs = [
  {
    q: 'Do you build custom, or implement an existing tool?',
    a: 'Both. If a channel manager off the shelf covers 90% of your need, we implement and operate it rather than building something you have to maintain forever. Custom is the right answer when your catalogue, pricing logic or fulfilment model does not fit the box.',
  },
  {
    q: 'How fast can we be live on a new marketplace?',
    a: 'Once the integration layer exists, a new channel is typically four to six weeks including account setup, category approval and a controlled pilot on a subset of SKUs. The first channel takes longer because it is where we build the foundation.',
  },
  {
    q: 'What happens when a marketplace changes its API?',
    a: 'For clients on a managed operation retainer, we track API deprecation notices, test against sandboxes and ship the migration before the cutoff. That is precisely the work most teams do not want to own.',
  },
  {
    q: 'Can you work with our existing 3PL and ERP?',
    a: 'Yes. We integrate with the systems you have rather than asking you to replace them, and we are candid when one of them is the actual bottleneck.',
  },
];

export default function MarketplacesPage() {
  return (
    <>
      <PageHero
        eyebrow="Commerce infrastructure"
        title="One catalogue. Every marketplace worth selling on."
        copy="Merchants lose money in the gaps between systems — stock that is wrong by an hour, listings rejected for a missing attribute, orders that arrive in three different inboxes. We build and operate the layer that closes those gaps."
      />

      <Section className="!pt-0">
        <Reveal>
          <MarketplaceOrbit />
        </Reveal>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="How it works" title="Four moving parts, running continuously." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.06}>
              <div className="h-full bg-ink-950 p-8">
                <p className="font-display text-[13px] font-semibold tracking-widest text-gold-400">{s.step}</p>
                <h3 className="h-display mt-5 text-xl text-bone-50">{s.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-bone-400">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead
          eyebrow="Coverage"
          title="Channels by market."
          copy="A representative list — if a marketplace has an API or a feed, we can almost certainly connect it."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {coverage.map((c, i) => (
            <Reveal key={c.market} delay={i * 0.07}>
              <div className="card h-full p-8">
                <h3 className="h-display text-xl text-bone-50">{c.market}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.channels.map((ch) => (
                    <span
                      key={ch}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12.5px] text-bone-300"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <SectionHead eyebrow="Capabilities" title="The details that decide whether it works." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-7">
                <h3 className="font-display text-base font-semibold text-bone-50">{c.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-bone-400">{c.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHead eyebrow="Questions" title="Before you ask." />
          <Reveal delay={0.08}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </Section>

      <CTA
        title="Tell us which channels you are missing."
        copy="Send us your catalogue size, current systems and target markets. We will come back with a realistic sequence and what each channel is likely to cost to launch."
      />
    </>
  );
}
