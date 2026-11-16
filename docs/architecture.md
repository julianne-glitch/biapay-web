# Architecture

Phase 1 is a maintainable Next.js foundation for the BIAPAY marketing site. It is not the new homepage, and it does not process payments.

## Stack

Versions are the ones installed in `package.json` / the lockfile.

| Piece | Choice |
| --- | --- |
| App | Next.js 16.4.6, App Router, React 19.3.0, TypeScript 5 (strict) |
| Style | Tailwind CSS 4.3 and shadcn/ui (`base-nova` preset, Base UI button) |
| Motion | `motion` 14 and `gsap` 3 are dependencies only. The shell does not import them. |
| Data | PostgreSQL via Prisma 7.10.1. Prisma 8 is still a release candidate and is not used. |
| Auth | `next-auth` 4.24.15, the stable release. `next-auth@5` is still tagged beta, so it is not installed. `AUTH_SECRET` is accepted beside `NEXTAUTH_SECRET` for a later move. |
| i18n | next-intl 4.15. French default, English second. |
| Other | Lucide, Zod 4, Vitest 5, Playwright 1.65 |

`create-next-app` turned on `cacheComponents` and `partialPrefetching`. Cache Components fights next-intl's per-request locale, and partial prefetching requires it, so both are off. Locale pages are generated with `generateStaticParams` and `setRequestLocale`.

## Folder map

```
src/app/[locale]                 French and English routes. Home is a placeholder.
src/app/api/auth/[...nextauth]   Auth.js route handler, no login screen.
src/components/layout            Header, footer, language switch.
src/components/ui                shadcn button and tokens.
src/components/home              Empty. Phase 2 homepage sections.
src/components/motion            Empty. Phase 2 sequences.
src/components/products          Empty. Product presentation.
src/components/demo              Empty. Demos.
src/i18n                         Routing, navigation, request config.
src/lib                          Shell link map, env schema.
src/server                       Auth options and a database flag that does not connect.
src/proxy.ts                     next-intl locale routing (Next.js 16 proxy, not middleware).
messages                         fr.json and en.json.
prisma                           Schema, config, SQL migration.
public/assets                    Wordmark and the Phase 2 reference image.
docs                             This file and the source inventory.
e2e                              Playwright smoke test.
```

Header and footer labels are the live menu and footer strings documented in `docs/source-inventory.md`. Menu-button names and the aria label for the nav are interface chrome, not product copy. Top-level items other than Home still link to the current biapay.net URLs, because Phase 1 does not invent those pages. Home is the only in-app page.

Login and register use the verified labels Connexion / Login and S'inscrire / Register, and the verified `connect.biapay.net` URLs. The sample's "Se connecter" and "Créer un compte" are not the live header strings, so they are not used.

## i18n routing

`src/i18n/routing.ts` sets `locales: ["fr", "en"]`, `defaultLocale: "fr"`, `localePrefix: "always"`, and `localeDetection: false`.

- `/` redirects to `/fr`
- French pages are `/fr` and `/fr/...`
- English pages are `/en` and `/en/...`
- `/api/auth/*` is excluded from the locale proxy

The live site also exposes Deutsch. That locale is recorded in the inventory and is not routed here. Adding it means a `de` locale, a `messages/de.json` taken from the German pages, and no machine-translated product copy.

`src/proxy.ts` is the Next.js 16 name for what used to be `middleware.ts`. It calls `next-intl/middleware`.

## Design tokens

`src/app/globals.css` maps the sampled live-site colors: white `#ffffff`, body `#57647c`, headings `#0e314c`, green `#96c939`, navy `#2a457d`, footer `#070d13`. Borders and muted fills are mixes of those colors with white, not a second palette. Raleway is the heading font and Open Sans is the body font, matching the theme. Spacing uses Tailwind's scale. The unused `.dark` block is the shadcn default and is not applied. Destructive red is the shadcn default because the live theme did not define an error color.

## Prisma

The schema is the content model for a marketing site.

| Model | Why it exists |
| --- | --- |
| `ProductCategory`, `Product` | Catalog structure. Copy is not stored as a single language column. |
| `LocalizedContent` | Translated fields (`ownerType`, `ownerId`, `locale`, `field`) for entities that exist once. There is no foreign key, so products, categories, and partners can share it. |
| `WebsitePage` | A page row per slug and locale, with its own title and publication status. |
| `Partner` | A name and optional public logo path. `approved` is the only status that should be shown. Nothing is seeded. |
| `DemoConfiguration` | Public demo settings as JSON. Not secrets. |
| `ContactEnquiry` | Name, email, topic, message, locale. No payment fields. |
| `ContentPublication` | A versioned publishing record, optionally tied to a page and an admin. |
| `AdminRole`, `AdminUser` | Future admin auth. `authSubject` can store an Auth.js subject. No password, no seed. |

`prisma/migrations/20261116160000_init/migration.sql` was produced offline with `prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script`. No database was contacted. `prisma.config.ts` falls back to a placeholder URL only so the CLI can load; the app does not query it. `src/server/db.ts` reports whether `DATABASE_URL` is set and does not construct a client.

The generated client is gitignored and created by `prisma generate` (`postinstall` and `prebuild`).

## Auth

`src/server/auth.ts` exports NextAuth options with an empty provider list and a JWT session. The route handler is mounted and there is no sign-in page. Admin authorization, when it is built, should read `AdminUser` and must not collect card data or gateway secrets.

## Marketing site versus payment processing

This repository is the public marketing site. Checkout, card capture, wallets, settlement, and gateway credentials stay on the existing payment systems (`connect.biapay.net` and whatever API those products already use). The schema has nowhere to put a PAN, a CVV, a bank account number, or a private key. Demo JSON is for public configuration such as a locale and a product slug. Contact messages are enquiries, not transactions.

## Out of scope for Phase 1

- The cinematic homepage, mega menu, hero, trust row, scenario cards, partner carousel, and product showcase
- Payment demos and checkout
- Login UI, seeded admins, and a connected database
- German routes
- Copying third-party partner logos
- Deployment to Vercel, Hostinger, or any other host
- Changes to the WordPress site at biapay.net or to `julianne-glitch/Julianne-s-porfolio-1`

## Phase 2

The homepage has to be more premium than `public/assets/references/agreed-landing-sample.png`: more refined type, spacing, and motion, the same brand, no generic glow, and no fake statistics. The sample's simplified nav (Solutions, Produits, Développeurs, Tarifs, Ressources), the headline « Votre ambition. Notre mouvement. », and the scenario cards are direction, not copy to paste until each claim is checked against `docs/source-inventory.md`.

Build Phase 2 from the empty `home`, `motion`, `products`, and `demo` folders. Replace the external header links with in-app pages only when the page content comes from the live site. Keep CANAL+ and DHL off the partner strip until they are found on biapay.net or an approved source. The cut-off last item in the sample's solutions row must not be given an invented label. Prices, if shown, should be the verified tariff table rather than the sample's XAF 75 000 card, which is a scenario illustration.
