## 1. Who we are

Marka Modern Retail Private Limited ("we", "us"), trading as House of Marka, publishes the
Marka Order Printer Invoice app on the Shopify App Store. Our registered office is Basement,
Plot No. 39, Sector 27, Gurugram, Haryana 122001, India.

The merchant who installs the app is the data controller for their store's order and customer
data. We act as data processor on that merchant's behalf, processing only what is needed to
produce the documents they ask for. This policy covers the app only; use of houseofmarka.com is
covered by our website privacy policy.

## 2. What the app stores

**Shop record and access token.** Your myshopify.com domain and the OAuth access token issued
by Shopify at install, so the app can call the Admin API on your behalf.

**App settings.** Your document numbering preferences and the store identity you enter in the
app's Settings screen — brand name, legal entity name, address, tax ID, support email, logo URL.

**Templates.** The document layouts you design, stored as layout and styling data only.

**Document snapshots.** When you generate a document we store a point-in-time copy of what is
printed on it: order number and date, line items, prices, taxes, totals, and the billing and
shipping addresses that appear on the document. This snapshot is what makes an issued invoice
immutable and reproducible, and it is the reason the app requests access to customer name and
address.

We do not store payment card numbers, bank details, or Shopify customer account credentials,
and we never receive your Shopify password.

## 3. Protected customer data

The app requests customer name and customer address under Shopify's protected customer data
rules, for two declared reasons: store management and app functionality. Both are used solely
to render the "Bill to" and "Ship to" blocks on the merchant's own documents. This data is
never shared with third parties, never used for advertising or profiling, and never used to
build a profile of a shopper across stores. We do not use merchant or customer data to train
machine-learning models.

## 4. Public document links

Each generated document can be shared through a link containing a long random token, in the
form `/p/<token>`. Anyone holding that link can view that one document. Links are unguessable,
scoped to a single document, and generated only when the merchant creates a document. Treat
them like any other shareable file link.

## 5. Where data lives and who else touches it

The app runs on Microsoft Azure (Azure Container Apps and Azure Database for PostgreSQL) in the
Central India region, encrypted in transit with TLS and at rest by Azure. Microsoft Azure is our
only subprocessor. Shopify is the source of the order data. The app contains no advertising
networks, analytics brokers, or third-party trackers.

## 6. Retention and deletion

Settings, templates and document snapshots are retained for as long as the app is installed.
On uninstall, Shopify sends an `app/uninstalled` webhook and the store's session and access
token are deleted immediately. Shopify's mandatory privacy webhooks —
`customers/data_request`, `customers/redact` and `shop/redact` — are implemented: on a
redaction request we delete the matching stored data within 30 days, and on `shop/redact` we
delete all data for that shop.

## 7. Your rights

Subject to applicable law you may request access, rectification, erasure, restriction,
portability, or object to processing. Shoppers should raise these requests with the merchant
they bought from — the merchant can trigger them through Shopify, which relays them to us
automatically. Merchants can write to [support@houseofmarka.com](mailto:support@houseofmarka.com) or to Basement, Plot No. 39,
Sector 27, Gurugram, Haryana 122001, India, and we will respond within 30 days. You also have
the right to complain to your local supervisory authority.

## 8. International transfers

Where personal data is transferred outside the UK or EEA, we rely on adequacy decisions or on
Standard Contractual Clauses together with a transfer risk assessment.

## 9. Children

The app is a business tool sold to merchants and is not directed to children. We do not
knowingly collect data from anyone under 16.

## 10. Changes

We update this policy when our practices change. Material changes will be signposted on this
page and notified to merchants in the app before they take effect.

Contact: [support@houseofmarka.com](mailto:support@houseofmarka.com)
