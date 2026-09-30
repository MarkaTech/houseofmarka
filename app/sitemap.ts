import fs from 'node:fs';
import path from 'node:path';
import type { MetadataRoute } from 'next';
import { site, work } from '@/lib/site';
import { getPosts } from '@/lib/blog';

export const dynamic = 'force-static';

const SITE_DIR = path.join(process.cwd(), 'app', '(site)');

/**
 * Walk app/(site) and collect every directory that has a page.tsx.
 *
 * This used to be a hand-maintained array, which meant every new page had to be
 * remembered twice — and a page you forgot to add was simply invisible to Google
 * with nothing to warn you. Deriving it from the filesystem makes that
 * impossible. Dynamic segments ([slug]) are skipped here and their real routes
 * appended below from the same data the pages are generated from.
 */
function staticRoutes(dir = SITE_DIR, prefix = ''): string[] {
  const out: string[] = [];
  if (fs.existsSync(path.join(dir, 'page.tsx'))) out.push(prefix);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('[') || entry.name.startsWith('_') || entry.name.startsWith('@')) continue;
    out.push(...staticRoutes(path.join(dir, entry.name), `${prefix}/${entry.name}`));
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  // Articles report the date they were written. Stamping every URL with the build
  // time told crawlers all 54 articles changed on every deploy, which teaches them
  // to ignore lastmod altogether.
  const postDates = new Map(posts.map((p) => [`/insights/${p.slug}`, new Date(p.date + 'T00:00:00Z')]));
  const built = new Date();

  const routes = [
    ...staticRoutes(),
    ...work.map((w) => `/work/${w.slug}`),
    ...posts.map((p) => `/insights/${p.slug}`),
  ].sort();

  // The house of apps is what the site leads with, so the app pages rank just
  // below the home page. Legal and support documents stay at the default.
  const priorityFor = (r: string) => {
    if (r === '') return 1;
    if (r === '/apps' || /^\/apps\/[^/]+$/.test(r) || r === '/services' || r === '/about') return 0.9;
    return 0.7;
  };

  return routes.map((r) => ({
    url: `${site.url}${r}/`,
    lastModified: postDates.get(r) ?? built,
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: priorityFor(r),
  }));
}
