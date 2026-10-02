import { apps } from '@/lib/apps';
import { getPosts } from '@/lib/blog';
import { servicePages } from '@/lib/services';
import { faqs, services, site } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * /llms.txt — a plain-text map of the site for AI answer engines (llmstxt.org).
 *
 * Generated from the same data the pages render, like the sitemap, so it can never
 * drift from the site: a new app, service, article or FAQ appears here on the next
 * build with nothing to remember.
 */
export function GET() {
  const u = (p: string) => `${site.url}${p}`;

  const appLines = apps.map((a) => {
    const where =
      a.status === 'live' && a.storeUrl
        ? `on the Shopify App Store (${a.storeUrl})`
        : 'coming to the Shopify App Store; early access on request';
    // The meta description opens with the app's name; here the name is the link text.
    const prefix = `${a.name}: `;
    const rest = a.description.startsWith(prefix) ? a.description.slice(prefix.length) : a.description;
    const about = rest.charAt(0).toUpperCase() + rest.slice(1);
    return `- [${a.name}](${u(`/apps/${a.slug}/`)}): ${a.tagline} ${about} Status: ${where}.`;
  });

  const body = [
    `# ${site.brand}`,
    '',
    `> ${site.description}`,
    '',
    `${site.brand} is a one-stop app development company and the trading name of ${site.legal}, ` +
      `registered at ${site.address.inline}. It works with teams in the US, UK, Europe and India. ` +
      `New projects: ${site.tech}. Support: ${site.support}.`,
    '',
    '## Our Shopify apps',
    '',
    ...appLines,
    `- [All apps](${u('/apps/')}): every House of Marka app, with its support page.`,
    '',
    '## Services (built to order)',
    '',
    ...servicePages.map((s) => `- [${s.metaTitle}](${u(`/services/${s.slug}/`)}): ${s.description}`),
    '',
    '## Wider practices',
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
