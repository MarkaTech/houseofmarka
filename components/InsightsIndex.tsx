'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  dateFormatted: string;
  category: string;
  readingTime: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function InsightsIndex({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: string[];
}) {
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const p of posts) m.set(p.category, (m.get(p.category) ?? 0) + 1);
    return m;
  }, [posts]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (category && p.category !== category) return false;
      if (!q) return true;
      return `${p.title} ${p.description}`.toLowerCase().includes(q);
    });
  }, [posts, category, query]);

  const [featured, ...rest] = shown;

  const pill = (active: boolean) =>
    `rounded-full border px-4 py-2 text-[13px] transition-all duration-300 ease-apple ${
      active
        ? 'border-gold-400/50 bg-gold-400/10 text-gold-400'
        : 'border-white/10 text-bone-300 hover:border-white/25 hover:text-bone-100'
    }`;

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            aria-pressed={category === null}
            className={pill(category === null)}
            onClick={() => setCategory(null)}
          >
            All ({posts.length})
          </button>
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              className={pill(category === c)}
              onClick={() => setCategory(c)}
            >
              {c} ({counts.get(c) ?? 0})
            </button>
          ))}
        </div>

        <div className="relative shrink-0 md:w-64">
          <label htmlFor="insight-search" className="sr-only">
            Search insights
          </label>
          <svg
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-bone-400"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            id="insight-search"
            type="search"
            placeholder={`Search ${posts.length} articles`}
            className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2 pl-10 pr-4 text-[13px] text-bone-100 outline-none transition-colors duration-300 ease-apple placeholder:text-bone-400 hover:border-white/25 focus:border-gold-400/50"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {shown.length} article{shown.length === 1 ? '' : 's'} shown
      </p>

      {featured ? (
        <motion.div
          key={featured.slug}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Link className="group mt-10 block" href={`/insights/${featured.slug}/`}>
            <article className="card card-hover grain p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-bone-400">
                <span className="text-gold-400">{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-bone-400/50" />
                <span>{featured.dateFormatted}</span>
                <span className="h-1 w-1 rounded-full bg-bone-400/50" />
                <span>{featured.readingTime} min read</span>
              </div>
              <h2 className="h-display mt-5 max-w-3xl text-[28px] md:text-[40px]">
                <span className="text-gradient">{featured.title}</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-bone-300">
                {featured.description}
              </p>
              <span className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium text-bone-200 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                Read
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </article>
          </Link>
        </motion.div>
      ) : null}

      {rest.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.03, ease: EASE }}
            >
              <Link className="group block h-full" href={`/insights/${p.slug}/`}>
                <article className="card card-hover flex h-full flex-col p-6">
                  <div className="flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.16em] text-bone-400">
                    <span className="text-gold-400/90">{p.category}</span>
                    <span className="h-1 w-1 rounded-full bg-bone-400/40" />
                    <span>{p.readingTime} min</span>
                  </div>
                  <h3 className="mt-3 font-display text-[17px] font-semibold leading-snug text-bone-50 transition-colors group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-bone-400">
                    {p.description}
                  </p>
                  <span className="mt-auto pt-4 text-[11.5px] text-bone-400/80">
                    {p.dateFormatted}
                  </span>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : null}

      {shown.length === 0 ? (
        <div className="card mt-10 px-8 py-16 text-center">
          <p className="h-display text-[22px] text-bone-100">Nothing matches “{query}”</p>
          <p className="mt-3 text-[13.5px] leading-relaxed text-bone-400">
            Try a shorter phrase, or clear the filters to see everything we have published.
          </p>
          <button
            className="btn-ghost mt-8"
            onClick={() => {
              setQuery('');
              setCategory(null);
            }}
          >
            Clear filters
          </button>
        </div>
      ) : null}
    </div>
  );
}
