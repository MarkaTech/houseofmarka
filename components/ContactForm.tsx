'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
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
  const [sent, setSent] = useState(false);

  /**
   * The site is a static export, so there is no endpoint to post to. Rather than
   * pretend to submit, compose the enquiry as a mailto: and hand it to the
   * visitor's own mail client — the note under the button says so plainly —
   * then swap the form for a confirmation with a way back to it.
   */
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get('name')}`,
      `Company: ${data.get('company')}`,
      `Email: ${data.get('email')}`,
      `Country: ${data.get('country')}`,
      `Service: ${data.get('service')}`,
      `Budget: ${data.get('budget')}`,
      '\nProject:',
      String(data.get('message') ?? ''),
    ].join('\n');
    const href = `mailto:${site.sales}?subject=${encodeURIComponent(
      `New project enquiry — ${data.get('company') || data.get('name')}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card grain flex min-h-[420px] flex-col items-center justify-center p-10 text-center">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" stroke="#d8b66a" strokeOpacity="0.4" />
          <path
            d="M7.5 12.5l3 3 6-7"
            stroke="#d8b66a"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="h-display mt-6 text-2xl text-bone-50">Your email client is opening.</h3>
        <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-bone-400">
          If nothing happened, write to{' '}
          <a href={`mailto:${site.sales}`} className="text-bone-100 underline underline-offset-4">
            {site.sales}
          </a>{' '}
          directly. We reply within one working day.
        </p>
        <button className="btn-ghost mt-8" onClick={() => setSent(false)}>
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form className="card p-8 md:p-10" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Name
          </label>
          <input id="name" name="name" required placeholder="Jane Okafor" className={FIELD} />
        </div>
        <div>
          <label htmlFor="company" className={LABEL}>
            Company
          </label>
          <input id="company" name="company" placeholder="Acme Retail Group" className={FIELD} />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@acme.com"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="country" className={LABEL}>
            Country
          </label>
          <input id="country" name="country" placeholder="United Kingdom" className={FIELD} />
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
        <a href={`mailto:${site.sales}`} className="underline underline-offset-4 hover:text-bone-200">
          {site.sales}
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
