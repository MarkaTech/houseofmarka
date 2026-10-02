import type { Metadata } from 'next';
import { LegalBody } from '@/components/Legal';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of service',
  description:
    'Terms governing use of houseofmarka.com, operated by Marka Modern Retail Private Limited trading as House of Marka.',
};

const link = 'text-bone-100 underline underline-offset-4';

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        copy={`Terms governing your use of ${site.domain}. Last updated August 2026.`}
      />

      <LegalBody>
        <section>
          <h2>1. These terms</h2>
          <p>
            This website is operated by {site.legal}, trading as House of Marka, whose registered office is at{' '}
            {site.address.inline}. By accessing this site you agree to these terms. If you do not agree,
            please do not use the site.
          </p>
          <p>
            Our Shopify apps are governed by their own terms, published with each app — for example{' '}
            <a href="/apps/marka-bundles/terms/" className={link}>
              Marka Bundles &amp; Upsells
            </a>
            .
          </p>
        </section>

        <section>
          <h2>2. Website content</h2>
          <p>
            Content on this site is provided for general information about our services. It does not
            constitute a contractual offer, professional advice, or a warranty of any particular result. Case
            study figures reflect outcomes reported by specific clients in specific circumstances and are not
            a prediction of your results.
          </p>
        </section>

        <section>
          <h2>3. Engagements</h2>
          <p>
            Any services we provide are governed exclusively by a signed master services agreement and its
            statements of work, together with a data processing agreement where personal data is involved.
            Where those documents conflict with anything on this site, those documents prevail.
          </p>
        </section>

        <section>
          <h2>4. Intellectual property</h2>
          <p>
            The House of Marka name, logo, site design, copy and code are owned by {site.legal} or its
            licensors. You may not reproduce or republish them without written permission. Third-party names
            and marks referenced on this site — including marketplace and platform names — belong to their
            respective owners and are used for identification only. Their use does not imply endorsement or
            partnership unless expressly stated.
          </p>
        </section>

        <section>
          <h2>5. Client-owned deliverables</h2>
          <p>
            Under our standard engagement terms, all bespoke deliverables — source code, infrastructure
            definitions, designs, prompts, evaluation sets and fine-tuned model weights — transfer to the
            client on payment, subject to any third-party and open-source licences and to our retained rights
            in pre-existing tooling.
          </p>
        </section>

        <section>
          <h2>6. Acceptable use</h2>
          <ul>
            <li>Do not attempt to gain unauthorised access to the site or its infrastructure.</li>
            <li>
              Do not use the site to transmit malicious code or to conduct automated scraping that degrades
              service.
            </li>
            <li>Do not misrepresent your identity when submitting an enquiry.</li>
          </ul>
        </section>

        <section>
          <h2>7. Third-party links</h2>
          <p>
            We are not responsible for the content or practices of any third-party site linked from here.
          </p>
        </section>

        <section>
          <h2>8. Liability</h2>
          <p>
            To the fullest extent permitted by law, we exclude liability for any loss arising from reliance on
            website content. Nothing in these terms excludes liability for death or personal injury caused by
            negligence, for fraud, or for any liability that cannot lawfully be excluded.
          </p>
        </section>

        <section>
          <h2>9. Governing law</h2>
          <p>
            These terms and any dispute or claim arising out of or in connection with them are governed by the
            laws of India. The courts at Gurugram, Haryana shall have exclusive jurisdiction, without
            prejudice to any different governing law or forum expressly agreed in a signed services
            agreement.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href={`mailto:${site.support}`} className={link}>
              {site.support}
            </a>
            , or write to us at {site.address.inline}.
          </p>
        </section>
      </LegalBody>
    </>
  );
}
