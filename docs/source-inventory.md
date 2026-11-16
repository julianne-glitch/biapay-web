# Source inventory

Read-only inspection of https://biapay.net on 16 November 2026. Nothing on the live WordPress site was changed.

The agreed landing sample at `public/assets/references/agreed-landing-sample.png` is a Phase 2 visual target. It is not a source of products, prices, partners, or statistics. Where the sample and the live site disagree, the live site is the source for facts and the sample is only a direction to beat later.

## Access

The server sends only the leaf certificate (`CN=*.biapay.net`, issued by Sectigo Public Server Authentication CA DV R36, 11 November 2026 through 10 May 2027). Default trust stores fail with `unable to get local issuer certificate` because the intermediate is missing from the handshake. The leaf verifies when that Sectigo intermediate is added (`openssl verify`: OK). Pages below were fetched after that check.

`https://biapay.net/?lang=en` resolves to the English default at `https://biapay.net/`.

## Languages

| Code | How the live site exposes it | Phase 1 |
| --- | --- | --- |
| fr | `?lang=fr`, switcher label Français | Default locale |
| en | Unprefixed URLs, switcher label English | Routed |
| de | `?lang=de`, switcher label Deutsch | Not routed |

The English homepage says German and other languages are still to be added for support, while the switcher already lists Deutsch. Both statements are on the site. German pages were not inventoried.

## Navigation

Top-level items are what the Phase 1 header shows. Children are recorded so Phase 2 can build menus without inventing labels. French URLs use `?lang=fr`. English URLs are the unprefixed paths below.

### French

- Accueil — `https://biapay.net/?lang=fr`
  - À propos — `/about-biapay/?lang=fr`
    - Carrière — `/careers/?lang=fr`
    - Contact — `/contact/?lang=fr`
    - Infos légales — `/legal/?lang=fr`
      - Conditions Générales — `/terms-conditions/?lang=fr`
      - Politique de confidentialité — `/privacy-policy/?lang=fr`
  - News \| Blog — `/blog/?lang=fr`
  - Passerelle — `/payment-gateway/?lang=fr`
    - Sécurité du système — `/system-security/?lang=fr`
    - Configuration de la passerelle de paiement — `/payment-gateway-setup/?lang=fr`
  - Solutions — `/payment-solutions/?lang=fr`
    - BIAPAY – Les applis — `/biapay-app/?lang=fr`
      - Appli Mobile BIAPAY — `/biapay-mobile-app/?lang=fr`
      - BIAPAY Authenticator — `/biapay-authenticator/?lang=fr`
    - Paiement en magasin — `/in-store-payment/?lang=fr`
      - Paiement par code QR — `/qr-code-payment/?lang=fr`
      - BIAPAY Paylink — `/biapay-paylink/?lang=fr`
    - Facturation en ligne — `/online-invoicing/?lang=fr`
    - Règlement fractionné — `/reglement-fractionne/?lang=fr`
    - Packs e-commerce — `/e-commerce-website/?lang=fr`
    - BIAPAY Event et E-Ticketing — `/biapay-event-et-e-ticketing/?lang=fr`
    - Événement Paiements internes — `/evenement-paiements-internes/?lang=fr`
  - Tarif — `/pricing-3/?lang=fr`
  - Développeurs — `/developers/?lang=fr`
    - Spécifications API — `/api-specification/?lang=fr`
    - Guide d’intégration — `/integration-guide/?lang=fr`
    - Notes de version — `/release-notes/?lang=fr`
  - Help Center — `/help-center/?lang=fr`
    - Comment faire pour … — `/how-to/?lang=fr`
    - FAQ technique — `/technical-faq/?lang=fr`
    - Prise en main — `/getting-started/?lang=fr`
    - Recours à l’assistance — `/getting-support/?lang=fr`
    - Gestion des règlements — `/settlement-management/?lang=fr`

### English

- Home — `https://biapay.net/`
  - About BIAPAY — `/about-biapay/`
    - Careers — `/careers/`
    - Contact — `/contact/`
    - Legal Notices — `/legal/`
      - Terms & Conditions — `/terms-conditions/`
      - Privacy Policy — `/privacy-policy/`
  - News \| Blog — `/blog/`
  - Gateway — `/payment-gateway/`
    - System Security — `/system-security/`
    - Payment Gateway Setup — `/payment-gateway-setup/`
  - Solutions — `/payment-solutions/`
    - BIAPAY – The apps — `/biapay-app/`
      - BIAPAY Mobile App — `/biapay-mobile-app/`
      - BIAPAY Authenticator — `/biapay-authenticator/`
    - In-Store Payment — `/in-store-payment/`
      - QR Code Payment — `/qr-code-payment/`
      - BIAPAY Paylink — `/biapay-paylink/`
    - Online Invoicing — `/online-invoicing/`
    - Split settlement — `/split-settlement/`
    - Event Internal Payments — `/event-internal-payments/`
    - E-commerce Packages — `/e-commerce-website/`
    - BIAPAY Event and E-Ticketing — `/biapay-event-and-e-ticketing/`
  - Pricing — `/pricing-2/`
  - Developers — `/developers/`
    - API Specification — `/api-specification/`
    - Integration Guide — `/integration-guide/`
    - Release Notes — `/release-notes/`
  - Help Center — `/help-center/`
    - How to … — `/how-to/`
    - Technical FAQ — `/technical-faq/`
    - Getting started — `/getting-started/`
    - Getting support — `/getting-support/`
    - Settlement Management — `/settlement-management/`

French and English slugs differ for split settlement, event internal payments, e-ticketing, and pricing. Header account links, both languages: Connexion / Login → `https://connect.biapay.net/login`, S'inscrire / Register → `https://connect.biapay.net/register` (the live header opens these in a new tab).

Footer links seen on the French homepage, in addition to the menu: Créer un compte BIAPAY, Connexion au compte BIAPAY, Versements (`/payouts/?lang=fr`), Solutions pour entreprises (`/business-enterprise/?lang=fr`), Aide & Assistance, Partenaires (`/partners/?lang=fr`), Business Intelligence Agency (`https://www.groupebia.com/`). Instagram (`https://www.instagram.com/`) and Skype (`https://www.skype.com/`) point at generic homepages, not named BIAPAY profiles, so they are not used in the shell.

Social profiles that do name BIAPAY: Facebook `https://www.facebook.com/biapayFR/`, Twitter `https://www.twitter.com/BIAPAY_official`, Linkedin `https://www.linkedin.com/company/14047052/`, Youtube `https://www.youtube.com/channel/UC9GTYkkjOunvnuorQzE0CSw`.

## Products and features named on the site

These names appear in the menu, the French homepage, or the pricing table. They are not a new catalog.

- Payment gateway / passerelle, and gateway setup
- BIAPAY web application, mobile application, Authenticator
- In-store payment, QR code, NFC, offline in-store payment, Paylink
- Online invoicing
- Split settlement / règlement fractionné
- E-commerce packages, described in the footer as Plugins
- BIAPAY Event and e-ticketing, event internal payments
- Payouts / versements, settlement management
- Business / enterprise solutions
- Marketplace cart inside the BIAPAY app (a pricing-table row, not a separate menu item)
- Feature names on the English homepage: safe and secure checks, instant cashout, end-to-end encryption, transparent pricing, analytics, fraud management, send/request money, dynamic event notification, loyalty, 2-factor authentication, user-friendly registration

The French solutions page describes the same platform for social-selling, online shops, larger organisations, individuals, and physical stores, and points at App Store and Google Play buttons. Those store listings were not opened.

The developers page heading says “Download for integration” and “API SDK”, then lorem ipsum. The menu children (API specification, integration guide, release notes) are the real developer destinations. The page body is not usable copy.

## Pricing

Source: `https://biapay.net/pricing-3/?lang=fr` (title Tarif). English menu target is `/pricing-2/`, which was not transcribed cell by cell. Figures below are the French table only.

Intro copy names four plans, plus a default evaluation plan that is not a priced column:

- Starter — start and collect after the KYC form is submitted
- Advanced — described as suitable for most businesses, including reporting
- Premium — described as what is needed to run an online business of any size
- Privilege — described as the full platform, on request
- Evaluation — assigned at signup for basic test transactions; KYC is required before real transactions

Monthly subscription fee: Starter XAF 900, Advanced XAF 4,900, Premium XAF 49,900, Privilege sur demande. Amounts are hors TVA. Transaction fees can be paid by the customer or the merchant; the page says the merchant is the default.

| Row | Starter | Advanced | Premium | Privilege |
| --- | --- | --- | --- | --- |
| Mobile payment BIAPAY to BIAPAY | 0.5% | 0.5% | 0.5% | custom (******) |
| Local wallets (Orange Money, MTN MoMo, EU MoMo, M2U Money, SARA Money, etc.) | 1.5% | 1.5% | 1.5% | custom |
| International wallets (PayPal, Stripe, Skrill*) | 2.75% | 2.75% | 2.50% | custom |
| Cards (Mastercard, Visa, AMEX, Discovery, Union Pay, GIMACPAY*) | 2.75% | 2.75% | 2.50% | custom |
| Online bank (banque directe)* | 1.50% | 1.50% | 1.50% | custom |
| POS | 3 | 10 | 20 | unlimited |
| Transaction currency | XAF | XAF, EUR, USD | XAF, EUR, USD | all available currencies |
| Marketplace cart | no | 5 | 20 | up to 100 products |
| Sub-users | 2 | 5 | 10 | unlimited |
| Settlement frequency | every 2 days | daily | real time | as agreed |

Checked for every plan: web app, mobile app, QR in-store, NFC in-store, offline in-store, analytics, integration support, 24/7 help center and online docs, monthly fee report, dynamic routing, smart analysis, online fraud management, referral program, loyalty program, email support, Paylink.

Not on Starter, checked from Advanced upward: instant payment, split settlement, dynamic event notification.

Checked only on Premium and Privilege: phone support, invoicing service, event management module.

Checked only on Privilege: internal event payers, marketing campaign on BIAPAY mobile and web.

Legend on the page: `*` means when available; phone support hours are Monday–Friday 08:00–20:00 and Saturday–Sunday 09:00–14:00; settlement footnotes say a bank account can take up to 2 business days, with Central Africa time used for the scheduled runs. Privilege rates are described as a custom offer after signup. “Discovery” is the spelling in the table.

These numbers are a transcription of one page. They still need a commercial check before they are published again. Phase 1 does not display them.

## Company and contact

From `/about-biapay/?lang=fr` and the English homepage: Business Intelligence Agency, later named Business Intelligence Agency SAS, is described as the company that started the work in 2015 and incepted the payment solution in 2018, with a focus on entrepreneurs in Cameroon and Africa and on SMEs. More: `https://www.groupebia.com/`.

People named on the about page, with the roles printed under the names: Clovis NJONTIE, ADG; Marguerite SIMO, PCA; Eric LINGO, Admin. The homepage carousel uses image alts “John Smit” and “John Lucy”, which look like theme placeholders and are not treated as staff.

Contact page `/contact/?lang=fr`:

- BIAPAY, s/c Business Intelligence Agency, Carrefour Acacias, Biyem-Assi, B.P. 14893 Yaoundé / Cameroun
- Email shown as `info [at] biapay.net`
- Phone `+237 6 73 61 31 53`
- Press: same phone / WhatsApp, email shown as `media [at] biapay.net`
- Form topics: Assistance générale, Intégration site Web, Abonnement à un plan tarifaire, Facturation, Règlement

The English contact page was not fetched separately. The postal address is used as printed.

## Partners

The partners page (`/partners/?lang=fr`, canonical `https://biapay.net/partners/`) is titled Partenaires and the body is lorem ipsum plus the headings “Our Partners” and “Strategic Partners”. It does not name partners.

The homepage shows a row of images whose alt text is only “Partner”. The filenames are the only names available:

- `BIA_signet.png`, `bia-logo_marqueslogan.png` (Business Intelligence Agency marks, also linked from the about page)
- `Logo_Union-Pay-removebg-preview.png`
- `Logo_GIMAC-removebg-preview.png`
- `mastercart-removebg-preview.png` (filename spelling; the pricing table says Mastercard)
- `Visa-removebg-preview.png`
- `paypal-removebg-preview.png`
- `unnamed-removebg-preview.png` (no brand identified)
- `Logo_Orange-Money-1.png`
- `Logo_AFB.png` (acronym not expanded on the pages read)
- `Stripe-logo-768x432-1.png`
- `IBM_logo_in-removebg-preview.png`
- `Logo_Sara-removebg-preview.png` (pricing text says SARA Money)
- `Logo_MTN-MoMo_3.jpg`
- `cca.png` (not identified)
- `UBA-logo.gif`
- `M2U-removebg-preview.png` (pricing text says M2U Money)

Pricing text also names EU MoMo, Skrill, AMEX, Discovery, Union Pay, and GIMACPAY, with an asterisk for “when available” on several of them. The English homepage says GIMAC cards apply to merchants with a bank account in the BEAC zone. None of these logos were copied into this repo.

The agreed sample also shows CANAL+ and DHL. Those two names were not found on the homepage, about page, partners page, or pricing page. They stay unverified. MoMo, MTN, Orange, VISA, and Mastercard do appear on the live site under the names above.

## Brand assets and visual system

Downloaded: `public/assets/brand/biapay-wordmark.png` from `https://biapay.net/wp-content/uploads/2020/12/biapay-1.png`. The header uses it at 220×50. The same file is the site icon. No SVG was found.

Colors declared in the active theme CSS (not a separate palette):

| Token | Value | Where it is used on the live site |
| --- | --- | --- |
| Green | `#96c939` | Section bars, feature accents, chat button |
| Navy | `#2a457d` | Buttons, links, gradients with the green |
| Deep text | `#0e314c` | Sticky navigation text |
| Body | `#57647c` | Paragraphs and lists |
| White | `#ffffff` | Sticky header background |
| Footer | `#070d13` | Footer background |

Heading font is Raleway. Body font is Open Sans. Buttons on the live site often use a gradient from `#2a457d` to `#96c939`. Phase 1 uses the flat sampled colors on a white page and does not add glow.

The agreed sample uses a green swoosh under a different wordmark, pill buttons, and a cinematic hero. That file is stored for Phase 2. It is not the current homepage. The last solutions label on the sample is cut off and looks like Promotions; the exact words were not readable and are not invented. Sample scenario copy (Douala, XAF 75 000, and the four cards) is direction, not a verified live-site fact.

## Claims that need verification

Do not repeat these as established facts without a source outside the marketing page:

- PCI DSS (“PCI DSS compliant processes” and, elsewhere, “PCI DSS-ready”)
- 3D Secure, end-to-end encryption, global blacklist and BIN checks
- “No hidden costs” and “24/7” support, next to a legend that limits phone hours
- 2015 / 2018 company history as told on the about page
- Staff names versus the “John Smit” / “John Lucy” alts
- Which homepage logos are contracted partners rather than accepted payment methods
- CANAL+ and DHL
- The unidentified `unnamed` and `cca` logos, and the expansion of AFB
- App Store and Google Play listings
- The pricing matrix before it is republished
- Anything on the partners or developers pages that is lorem ipsum
