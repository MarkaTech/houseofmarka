import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const DIR = path.join(process.cwd(), 'content', 'insights');

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  dateFormatted: string;
  category: string;
  tags: string[];
  readingTime: number;
  html: string;
  words: number;
};

let cache: Post[] | null = null;

export function getPosts(): Post[] {
  if (cache) return cache;
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.md'));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    const words = content.split(/\s+/).filter(Boolean).length;
    // gray-matter's YAML parser turns an unquoted `date: 2026-08-05` into a JS
    // Date, and String(Date) is a full RFC string — which renders as
    // "Invalid Date" downstream and breaks the Article schema. Normalise here.
    const date =
      data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
    return {
      slug: file.replace(/\.md$/, ''),
      title: String(data.title),
      seoTitle: String(data.seoTitle ?? data.title),
      description: String(data.description),
      date,
      dateFormatted: new Date(date + 'T00:00:00Z').toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
      }),
      category: String(data.category),
      tags: (data.tags ?? []) as string[],
      readingTime: Math.max(2, Math.round(words / 220)),
      html: marked.parse(content, { async: false }) as string,
      words,
    };
  });
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  cache = posts;
  return cache;
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  return [...new Set(getPosts().map((p) => p.category))].sort();
}

export function getRelated(post: Post, n = 3): Post[] {
  const rest = getPosts().filter((p) => p.slug !== post.slug);
  const same = rest.filter((p) => p.category === post.category);
  const fill = rest.filter((p) => p.category !== post.category);
  return [...same, ...fill].slice(0, n);
}
