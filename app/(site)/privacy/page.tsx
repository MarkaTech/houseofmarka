import type { Metadata } from 'next';
import { LegalBody } from '@/components/Legal';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'How Marka Modern Retail Private Limited, trading as House of Marka, collects and handles personal data.',
};

const link = 'text-bone-100 underline underline-offset-4';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        copy="How Marka Modern Retail Private Limited, trading as House of Marka, handles personal data. Last updated August 2026."
      />

      <LegalBody>
        <section>
          <h2>1. Who we are</h2>
          <p>
            {site.legal} (“we”, “us”), trading as House of Marka, operates {site.domain}. Our registered
            office is {site.address.inline}. We act as data controller for personal data collected through
            this website, and as data processor for personal data we handle on behalf of clients under a
            separate data processing agreement.
          </p>
          {/*
            The three app policies are separate documents with separate scopes.
            This cross-reference is what stops a reader (or an app reviewer)
            assuming the website policy governs shopper data inside the apps —
            and it states the shared legal entity explicitly, because Shopify
            review checks that the publisher named here matches the listing.
          */}
          <p>
            <strong>This policy covers this website only.</strong> Our Shopify apps process merchant and
            shopper data under their own separate policies:{' '}
            <a href="/apps/marka-order-printer/privacy/" className={link}>
              Marka Order Printer Invoice
            </a>
            ,{' '}
            <a href="/apps/marka-bundles/privacy/" className={link}>
              Marka Bundles &amp; Upsells
            </a>{' '}
            and{' '}
            <a href="/apps/marka-subscrify/privacy/" className={link}>
              Marka Subscrify
            </a>
            . All three are published by the same legal entity as this website and share our registered
            office.
          </p>
        </section>

        <section>
          <h2>2. What we collect</h2>
          <ul>
            <li>
              <strong>Enquiry data.</strong> Name, company, email address, country, and the content of any
              message you send us.
            </li>
            <li>
              <strong>Technical data.</strong> IP address, browser type, device type and pages visited,
              collected in aggregate for security and performance purposes.
            </li>
            <li>
              <strong>Correspondence.</strong> Emails and call notes relating to a prospective or active
              engagement.
            </li>
          </ul>
          <p>
            We do not collect special category data through this website, and we ask that you do not send it
            to us unsolicited.
          </p>
        </section>

        <section>
          <h2>3. Why we process it</h2>
          <ul>
            <li>
              To respond to your enquiry and to provide services you have requested (performance of a
              contract, or steps prior to entering one).
            </li>
            <li>To operate, secure and improve this website (legitimate interests).</li>
            <li>To meet legal, accounting and regulatory obligations (legal obligation).</li>
          </ul>
          <p>
            We do not sell personal data, and we do not use it for automated decision-making that produces
            legal effects.
          </p>
        </section>

        <section>
          <h2>4. Client data and AI systems</h2>
          <p>
            Where we build or operate AI systems for clients, client data is processed strictly under the
            instructions set out in the relevant data processing agreement. We do not use client or end-user
            data to train general-purpose models, and we configure model providers to exclude submitted
            content from training where such settings are available. Data residency in the EU or the United
            States can be specified per engagement.
          </p>
        </section>

        <section>
          <h2>5. Sharing</h2>
          <p>
            We share personal data only with service providers who help us operate — hosting (Microsoft
            Azure), email, and business tooling — each under contract and only to the extent required. We may
            disclose data where legally required.
          </p>
        </section>

        <section>
          <h2>6. International transfers</h2>
          <p>
            Where personal data is transferred outside the UK or EEA, we rely on adequacy decisions or on
            Standard Contractual Clauses together with a transfer risk assessment.
          </p>
        </section>

        <section>
          <h2>7. Retention</h2>
          <p>
            Enquiry data is retained for up to 24 months from last contact unless it becomes part of a client
            relationship, in which case contractual and statutory retention periods apply. Technical logs are
            retained for up to 12 months.
          </p>
        </section>

        <section>
          <h2>8. Your rights</h2>
          <p>
            Subject to applicable law you may request access, rectification, erasure, restriction,
            portability, or object to processing based on legitimate interests. Write to{' '}
            <a href={`mailto:${site.support}`} className={link}>
              {site.support}
            </a>{' '}
            or to {site.address.inline}. You also have the right to complain to your local supervisory
            authority — in the UK, the Information Commissioner&apos;s Office.
          </p>
        </section>

        <section>
          <h2>9. Cookies</h2>
          <p>
            This website does not set advertising or cross-site tracking cookies. Any analytics we introduce
            will be privacy-preserving and disclosed here before deployment.
          </p>
        </section>

        <section>
          <h2>10. Changes</h2>
          <p>
            We update this policy when our practices change. Material changes will be signposted on this
            page.
          </p>
        </section>
      </LegalBody>
    </>
  );
}
