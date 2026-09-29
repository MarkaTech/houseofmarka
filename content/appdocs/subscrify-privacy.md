How Marka Modern Retail Private Limited, trading as House of Marka, handles personal data in
the Marka Subscrify Shopify app. Last updated August 2026.

## 1. Who we are

Marka Modern Retail Private Limited ("we", "us"), trading as House of Marka, publishes the
Marka Subscrify app on the Shopify App Store. Our registered office is Basement, Plot No. 39,
Sector 27, Gurugram, Haryana 122001, India.

The merchant who installs the app is the data controller for their store's customer and
order data. We act as data processor on that merchant's behalf, processing only what is
needed to create and run the subscriptions they configure. This policy covers the app only;
use of houseofmarka.com is covered by our website privacy policy, and our other apps are
covered by their own.

## 2. What the app stores

**Shop record and access token.** Your myshopify.com domain and the OAuth access token
issued by Shopify at install, so the app can call the Admin API on your behalf.

**App settings.** Your subscription plan configuration — delivery intervals, discount rules,
minimum commitments, cancellation and pause policies, notification settings, and the branding
you enter for the customer portal and emails.

**Selling plans.** The subscription offers you build, stored as configuration and attached to
your products through Shopify's selling plan APIs.

**Subscription contracts.** For every active subscription the app stores what is required to
run it: the Shopify customer identifier, the delivery and billing addresses, the customer's
name, email address and phone number where provided, the line items and quantities, the
price and any subscription discount, the delivery interval, the next billing and delivery
dates, the contract status, and Shopify's identifier for the payment method the customer
authorised. A recurring subscription cannot be fulfilled without these.

**Subscription history.** A record of changes to each contract — created, paused, skipped,
product swapped, address changed, payment failed, retried, cancelled — with a timestamp and
whether the merchant, the customer or the system made the change. This is what lets us answer
"why did this order not ship" and what gives you an audit trail for billing disputes.

We do **not** store payment card numbers, bank details, CVV codes or Shopify customer account
credentials, and we never receive your Shopify password. Recurring charges are executed
through Shopify's payment mandate, which means the card stays with Shopify's payment provider
and we only ever hold a reference to it.

## 3. Protected customer data

The app requests customer name, email address, phone number and address under Shopify's
protected customer data rules. Each field has a single operational purpose:

| Field | Why the app needs it |
| --- | --- |
| Name | Addressing the subscription, the customer portal and subscription emails |
| Email address | Sending upcoming-order reminders, payment-failure notices and the portal link; identifying the customer in support |
| Phone number | Optional. Delivery notifications and courier contact where the merchant enables it |
| Delivery and billing address | Fulfilling each recurring order and calculating tax and shipping |

This data is used solely to operate the merchant's own subscriptions. It is never sold, never
shared with third parties for their own purposes, never used for advertising, profiling or
audience building, and never used to build a picture of a shopper across different stores. We
do not use merchant or customer data to train machine-learning models.

## 4. The customer portal

Subscribers manage their own subscription through a portal link containing a long random
token. Anyone holding that link can view and change that one subscription — swap products,
change the delivery date or address, pause, skip or cancel. Links are unguessable, scoped to
a single subscription, and expire on cancellation. Merchants who want a stronger control can
enable email-confirmation before any change takes effect. Treat portal links like any other
shareable account link.

## 5. Where data lives and who else touches it

The app runs on Microsoft Azure (Azure Container Apps and Azure Database for PostgreSQL) in
the Central India region, encrypted in transit with TLS and at rest by Azure. **Microsoft
Azure is our only subprocessor.** Shopify is the source of the customer and order data and
the processor of every payment. The app contains no advertising networks, analytics brokers
or third-party trackers.

## 6. Retention and deletion

Settings, selling plans, subscription contracts and subscription history are retained for as
long as the app is installed and the subscription exists. Cancelled contracts are kept for 24
months so that billing disputes and chargebacks can be answered, then deleted.

On uninstall, Shopify sends an `app/uninstalled` webhook and the store's session and access
token are deleted immediately. Shopify's mandatory privacy webhooks —
`customers/data_request`, `customers/redact` and `shop/redact` — are implemented: on a
redaction request we delete the matching stored data within 30 days, and on `shop/redact` we
delete all data for that shop.

**One thing worth knowing.** Subscription contracts live in Shopify as well as in this app.
Uninstalling Marka Subscrify stops the app from processing them; it does not cancel your
customers' subscriptions in Shopify. Decide what should happen to active subscribers before
you uninstall.

## 7. Your rights

Subject to applicable law you may request access, rectification, erasure, restriction,
portability, or object to processing. Shoppers should raise these requests with the merchant
they subscribed to — the merchant can trigger them through Shopify, which relays them to us
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
