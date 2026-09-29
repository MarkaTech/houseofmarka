'use client';

import Link from 'next/link';
import type { FormEvent } from 'react';
import { site } from '@/lib/site';

const FIELD =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[14.5px] text-bone-100 placeholder-bone-400/60 outline-none transition-all duration-300 focus:border-gold-400/40 focus:bg-white/[0.06]';
const LABEL = 'eyebrow mb-2 block';

const services = [
  'Applied AI',
  'Product engineering',
  'Marketplace integration',
  'Web platform',
  'Cloud & data',
  'Not sure yet',
];

/** En dashes, unspaced — these strings also appear in the enquiry email. */
const budgets = ['Under $25k', '$25k–$75k', '$75k–$200k', '$200k+', 'To be determined'];

export default function ContactForm() {
  /**
   * The site is a static export, so there is no endpoint to post to. Rather than
   * pretend to submit, compose the enquiry as a mailto: and hand it to the
   * visitor's own mail client — the note under the button says so plainly.
   */
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '').trim();

    const company = get('company');
    const subject = `Project enquiry — ${company || get('name') || 'new enquiry'}`;
    const body = [
      `Name: ${get('name')}`,
      `Company: ${company || '—'}`,
      `Email: ${get('email')}`,
      `Country: ${get('country') || '—'}`,
      `Needs: ${get('service')}`,
      `Budget: ${get('budget')}`,
      '',
      'The project:',
      get('message'),
    ].join('\n');

    window.location.href = `mailto:${site.tech}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="card p-8 md:p-10" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Name
          </label>
          <input id="name" required placeholder="Jane Okafor" className={FIELD} name="name" />
        </div>
        <div>
          <label htmlFor="company" className={LABEL}>
            Company
          </label>
          <input id="company" placeholder="Acme Retail Group" className={FIELD} name="company" />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@acme.com"
            className={FIELD}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="country" className={LABEL}>
            Country
          </label>
          <input id="country" placeholder="United Kingdom" className={FIELD} name="country" />
        </div>
        <div>
          <label htmlFor="service" className={LABEL}>
            What do you need
          </label>
          <select id="service" name="service" className={FIELD} defaultValue={services[0]}>
            {services.map((s) => (
              <option key={s} value={s} className="bg-ink-900">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={LABEL}>
            Indicative budget
          </label>
          <select id="budget" name="budget" className={FIELD} defaultValue={budgets[budgets.length - 1]}>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-ink-900">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={LABEL}>
          The project
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="What are you trying to build, what exists today, and what does success look like six months from now?"
          className={`${FIELD} resize-none`}
        />
      </div>

      <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
        Send enquiry
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p className="mt-4 text-[12.5px] leading-relaxed text-bone-400">
        This opens your email client with the details filled in, addressed to{' '}
        <a href={`mailto:${site.tech}`} className="underline underline-offset-4 hover:text-bone-200">
          {site.tech}
        </a>
        . We use what you send only to reply to this enquiry — see our{' '}
        <Link className="underline underline-offset-4 hover:text-bone-200" href="/privacy/">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
