**Effective:** 1 August 2026 · **Last reviewed:** 3 August 2026
**Controller/Operator:** Marka Modern Retail Private Limited · **Contact:** [support@houseofmarka.com](mailto:support@houseofmarka.com)

Marka Bundles & Upsells (“the App”) is a Shopify app operated for merchants
(“you”). This policy describes exactly what the App reads, what it stores, why,
for how long, and how access/deletion requests are honoured.

The App is a merchandising tool. **It stores no shopper name, email address,
phone number, postal address, IP address or payment data** — not in the
database, not in logs, not with any third party. Everything below is written to
match the code; where a claim is implemented by a specific mechanism, that
mechanism is named so it can be verified during app review.

---

## 1. What the App reads from Shopify

Requested scopes (`shopify.app.toml` → `[access_scopes]`) are exactly:
`read_products`, `write_products`, `write_discounts`, `read_orders`.

| Scope | What it is used for | What is stored |
| --- | --- | --- |
| `read_products` | product/variant title, handle, price, image URL, collection id — needed to build offers and price the widget | a product snapshot, refreshed on publish |
| `write_products` | writes exactly one metafield per target product: `marka_bundles.offer_config` | nothing extra |
| `write_discounts` | creates/removes the automatic discounts (Shopify Function app discount, or a native automatic/BXGY discount) that make an offer real at checkout | the discount’s GID |
| `read_orders` | receives the `orders/create` webhook to attribute bundle conversions | see §2, “Conversion attribution” |

The App requests **no** protected customer-data fields beyond the order-level
attribution in §2, and does **not** request `read_themes`, `read_locales`,
`read_customers` or any customer/marketing scope.

## 2. What the App stores

| Data | Source | Purpose | Retention |
| --- | --- | --- | --- |
| Shop domain, offline access token, granted scopes | OAuth install | authenticate Admin API calls for your store | token deleted immediately on `app/uninstalled`; row deleted on `shop/redact` |
| Plan, pending plan, plan status, Shopify subscription GID | your billing actions | entitlement + charge verification | life of the install |
| Offers, A/B tests, app settings | created by you in the admin | core functionality | until you delete them, or `shop/redact` |
| Product snapshots (id, title, handle, price, image URL, variants, collection id) | Shopify Admin API | render widgets and compile the metafield without extra API calls | overwritten on each publish; deleted with the offer |
| Funnel events: event type (`view`/`add`/`checkout`), offer id, product id, A/B test id + variant, anonymous visitor id, timestamp | storefront widget via the signed App Proxy | the conversion funnel and A/B results you see in the dashboard | 24 months, then deleted |
| **Conversion attribution:** offer id, A/B variant, attributed line total (in cents), **Shopify order id**, timestamp | `orders/create` webhook | revenue attribution per offer | 24 months; order id severed on `customers/redact` |
| Webhook delivery ids | Shopify webhook headers | de-duplicate Shopify’s retries | 24 months |
| Compliance job records (topic, shop, counts, no PII) | GDPR webhooks | audit trail proving a request was executed | 24 months |

**Explicitly not stored, at any point:** shopper name, email, phone, billing or
shipping address, IP address, payment or card data, order line contents, or any
customer id. The `orders/create` payload contains such fields; the App reads
only `id`, `line_items[].price/quantity/properties` and discards the rest in
memory. It is never written to the database or to a log line.

**Anonymous visitor id.** The storefront widget generates a random string
(`_marka_vid`) in the shopper’s `localStorage` — no cookie is set. It exists so
an A/B variant stays stable across page loads and so funnel steps can be
de-duplicated. It is not derived from any personal attribute, is never joined
to personal data, and is not shared with anyone. Clearing site data removes it.

## 3. Legal bases (GDPR Art. 6)

- Performing the merchant’s contract (operating the App you installed).
- Legitimate interests in secure, abuse-resistant operation (rate limiting,
  webhook de-duplication, HMAC verification).

Merchants act as controller for their storefront data; Marka Modern Retail Private Limited acts as
processor for the merchant and follows documented merchant instructions.

## 4. Where data lives, and who else touches it

Hosting: **Microsoft Azure** — Azure App Service plus Azure Database for
PostgreSQL, in the region selected at deployment. Azure is the only
sub-processor. Shopify Inc. remains an independent controller of its own
platform data.

There are no third-party analytics, advertising, session-replay or tag-manager
SDKs in the admin or in the storefront widget. Nothing is sold or shared for
advertising.

## 5. Security

- Access tokens are stored server-side only and are never sent to a browser.
- All Admin API traffic is HTTPS; the database connection uses TLS with
  **certificate validation enabled**.
- Admin API requests require a verified Shopify App Bridge session token
  (HS256 pinned, `aud` = our client id, `iss` origin matched to `dest`, `exp`
  enforced).
- Storefront endpoints verify the Shopify App Proxy HMAC signature and are
  rate-limited per IP + shop.
- Webhooks are verified with HMAC-SHA256 over the raw request body using
  constant-time comparison; unverified deliveries are rejected with 401.
- Revenue is only ever recorded from the HMAC-verified `orders/create`
  webhook — the public storefront endpoint cannot create or alter revenue.
- Secrets come from environment variables and are never committed or logged.
- The database is network-restricted and encrypted at rest by Azure.

## 6. Shopify mandatory privacy webhooks — what actually happens

All three topics are registered in `shopify.app.toml`, HMAC-verified, and
**executed synchronously in the request**, not merely acknowledged. Each run is
recorded in a `gdpr_jobs` audit row (counts only, never content).

| Topic | Behaviour |
| --- | --- |
| `customers/data_request` | Compiles an export of every row keyed to the order ids in the request (event type, offer id, order id, anonymous visitor id, attributed value, timestamp) and stores it against the job record for fulfilment. Because the App holds no customer profile, the export also states that no name/email/phone/address/payment data exists. Delivered to the merchant within 30 days. |
| `customers/redact` | Irreversibly severs every link to that shopper: `visitor_id`, `order_id` and `product_id` are cleared on all matching event rows and the row is stamped `redacted_at`. Only an anonymous aggregate (event type, offer, amount, date) remains, which can no longer be related to a person. The operation is idempotent — a replayed delivery matches nothing. |
| `shop/redact` | Hard-deletes **everything** for that shop: the shop row and access token, all offers, all A/B tests, all events, and all webhook receipts. Nothing is retained but the completed compliance audit rows. |

On `app/uninstalled` the access token is deleted immediately and the shop is
marked uninstalled; Shopify sends `shop/redact` 48 hours later, at which point
the remaining data is hard-deleted. Any shop still present 60 days after
uninstall is purged by the same routine.

## 7. Your rights

Merchants and their customers may request access, rectification, erasure,
restriction, portability or objection, and may withdraw consent where consent
is the basis. Two routes:

1. **Through Shopify** — the webhooks in §6 (a merchant can trigger a customer
   data request or redaction from the Shopify admin; uninstalling triggers
   `shop/redact`).
2. **Directly** — email **[support@houseofmarka.com](mailto:support@houseofmarka.com)**. Identity is verified via
   the requesting shop, and requests are answered within 30 days at no cost.

EU/UK data subjects also have the right to lodge a complaint with their local
supervisory authority.

## 8. Data retention summary

| Data | Deleted when |
| --- | --- |
| Access token | on `app/uninstalled` (immediately) |
| Offers, A/B tests, settings, shop row | on your deletion, or `shop/redact` |
| Funnel + attribution events | 24 months, or `shop/redact`; identifiers severed earlier on `customers/redact` |
| Webhook receipts | 24 months, or `shop/redact` |
| Compliance audit rows | 24 months |

## 9. International transfers

Data is stored in the Azure region chosen at deployment. If a transfer outside
the EEA/UK is required, it relies on the EU Standard Contractual Clauses plus
the UK Addendum.

## 10. Children

The App is not directed at children and knowingly processes no data about them.

## 11. Changes

Material changes are announced in the App admin and on the App Store listing at
least 14 days before taking effect; the “Last reviewed” date above is updated
on every change.

## 12. Contact

Questions, complaints, or data-subject requests: **[support@houseofmarka.com](mailto:support@houseofmarka.com)**
(responses within 24h on business days; formal requests within 30 days).
