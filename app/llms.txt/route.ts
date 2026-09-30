import { getPosts } from '@/lib/blog';
import { faqs, houseOfApps, services, site } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * /llms.txt — a plain-text map of the site for AI answer engines (llmstxt.org).
 *
 * Generated from the same data the pages render, like the sitemap, so it can never
 * drift from the site: a new article, service or FAQ appears here on the next build
 * with nothing to remember.
 */
export function GET() {
  const u = (p: string) => `${site.url}${p}`;
  const apps = houseOfApps
    .map((a) =>
      a.id === 'shopify'
        ? `- [Marka Bundles & Upsells](${u('/apps/marka-bundles/')}): our featured Shopify app, published on the ` +
          'Shopify App Store — quantity breaks, fixed bundles, mix & match, BOGO, add-on upsells and frequently ' +
          'bought together, priced correctly at checkout by Shopify Functions, with no shopper personal data stored.'
        : `- ${a.kicker}${a.href === '/contact/' ? ` ([get in touch](${u('/contact/')}))` : ''}: ${a.copy}`,
    )
    .join('\n');

  const body = [
    `# ${site.brand}`,
    '',
    `> ${site.description}`,
    '',
    `${site.brand} is the trading name of ${site.legal}, registered at ${site.address.inline}. ` +
      `New projects: ${site.tech}. Support: ${site.support}.`,
    '',
    '## Apps',
    '',
    apps,
    `- [All apps](${u('/apps/')}): every House of Marka app, with its privacy policy, terms and support page.`,
    '',
    '## Services',
    '',
    ...services.map((s) => `- [${s.kicker}](${u(`/services/#${s.id}`)}): ${s.blurb}`),
    `- [Marketplace integration](${u('/marketplaces/')}): one catalogue, inventory and order flow across Amazon, eBay, Zalando, Otto and other marketplaces.`,
    '',
    '## Company',
    '',
    `- [About ${site.brand}](${u('/about/')}): who we are, how we work and the legal entity behind the brand.`,
    `- [Case studies](${u('/work/')}): client results in the client’s numbers.`,
    `- [Contact](${u('/contact/')}): start a project or ask a question.`,
    '',
    '## Frequently asked questions',
    '',
    ...faqs.map((f) => `- **${f.q}** ${f.a}`),
    '',
    '## Insights',
    '',
    ...getPosts().map((p) => `- [${p.title}](${u(`/insights/${p.slug}/`)}): ${p.description}`),
    '',
    '## Optional',
    '',
    `- [Privacy policy](${u('/privacy/')})`,
    `- [Terms of service](${u('/terms/')})`,
    `- [Sitemap](${u('/sitemap.xml')})`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
