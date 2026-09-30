import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * Everything is public, and that includes AI crawlers — on purpose.
 *
 * Being cited when someone asks ChatGPT, Claude, Perplexity or Google's AI answers
 * "who builds Shopify apps" requires those systems to be allowed to read the site.
 * The wildcard rule already allows them; naming them explicitly means a crawler
 * that looks for its own user-agent group finds an unambiguous "yes" rather than
 * relying on the fallback. Remove a line here only as a deliberate decision.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
