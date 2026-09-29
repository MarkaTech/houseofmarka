import Reveal from '@/components/Reveal';

/**
 * Deliberately NOT a logo wall. There are no client marks here, because we do
 * not have permission to use any of them: what follows is nominative use of the
 * platforms we build on, plus NDA-marked sector tiles. Named references go out
 * privately, on request — see the line at the bottom.
 */
const platforms = [
  'Amazon',
  'Shopify',
  'Walmart',
  'TikTok Shop',
  'Zalando',
  'Mirakl',
  'Microsoft Azure',
  'Stripe',
  'Salesforce',
  'eBay',
  'Otto',
  'Akeneo',
];

const sectors = [
  { region: 'US', name: 'D2C beauty retailer', note: '9-figure revenue' },
  { region: 'UK', name: 'Home & lifestyle group', note: '40k-SKU catalogue' },
  { region: 'DE/NL', name: 'Payments scale-up', note: '2M+ app users' },
  { region: 'IT/FR', name: 'Fashion wholesaler', note: '6 export markets' },
  { region: 'US', name: 'B2B SaaS platform', note: 'Series C' },
  { region: 'EU', name: 'Marketplace operator', note: 'Mirakl-powered' },
];

export default function ClientStrip() {
  return (
    <div>
      <Reveal>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-bone-400">
          Platforms we build on
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-white/[0.07] pb-8">
          {platforms.map((p) => (
            <span
              key={p}
              className="font-display text-[15px] font-semibold tracking-tight text-bone-100 opacity-70 transition-opacity hover:opacity-100"
            >
              {p}
            </span>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-bone-400">
                {s.region} · under NDA
              </p>
              <p className="mt-1 font-display text-[15px] font-semibold text-bone-100">{s.name}</p>
              <p className="text-[12px] text-bone-400">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[12px] text-bone-400">
          Most engagements are covered by NDAs — named references are available on request,
          sector-matched to your project.
        </p>
      </Reveal>
    </div>
  );
}
