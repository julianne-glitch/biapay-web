export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const accountLinks = {
  login: "https://connect.biapay.net/login",
  register: "https://connect.biapay.net/register",
} as const;

export const companyLink = "https://www.groupebia.com/";

type LocaleHref = Record<Locale, string>;

export const shellNav = [
  { key: "home", internal: true },
  {
    key: "about",
    href: {
      fr: "https://biapay.net/about-biapay/?lang=fr",
      en: "https://biapay.net/about-biapay/",
    },
  },
  {
    key: "news",
    href: {
      fr: "https://biapay.net/blog/?lang=fr",
      en: "https://biapay.net/blog/",
    },
  },
  {
    key: "gateway",
    href: {
      fr: "https://biapay.net/payment-gateway/?lang=fr",
      en: "https://biapay.net/payment-gateway/",
    },
  },
  {
    key: "solutions",
    href: {
      fr: "https://biapay.net/payment-solutions/?lang=fr",
      en: "https://biapay.net/payment-solutions/",
    },
  },
  {
    key: "pricing",
    href: {
      fr: "https://biapay.net/pricing-3/?lang=fr",
      en: "https://biapay.net/pricing-2/",
    },
  },
  {
    key: "developers",
    href: {
      fr: "https://biapay.net/developers/?lang=fr",
      en: "https://biapay.net/developers/",
    },
  },
  {
    key: "help",
    href: {
      fr: "https://biapay.net/help-center/?lang=fr",
      en: "https://biapay.net/help-center/",
    },
  },
] as const;

export const footerNav: ReadonlyArray<{
  key:
    | "about"
    | "careers"
    | "contact"
    | "legal"
    | "terms"
    | "privacy"
    | "partners"
    | "help";
  href: LocaleHref;
}> = [
  {
    key: "about",
    href: {
      fr: "https://biapay.net/about-biapay/?lang=fr",
      en: "https://biapay.net/about-biapay/",
    },
  },
  {
    key: "careers",
    href: {
      fr: "https://biapay.net/careers/?lang=fr",
      en: "https://biapay.net/careers/",
    },
  },
  {
    key: "contact",
    href: {
      fr: "https://biapay.net/contact/?lang=fr",
      en: "https://biapay.net/contact/",
    },
  },
  {
    key: "legal",
    href: {
      fr: "https://biapay.net/legal/?lang=fr",
      en: "https://biapay.net/legal/",
    },
  },
  {
    key: "terms",
    href: {
      fr: "https://biapay.net/terms-conditions/?lang=fr",
      en: "https://biapay.net/terms-conditions/",
    },
  },
  {
    key: "privacy",
    href: {
      fr: "https://biapay.net/privacy-policy/?lang=fr",
      en: "https://biapay.net/privacy-policy/",
    },
  },
  {
    key: "partners",
    href: {
      fr: "https://biapay.net/partners/?lang=fr",
      en: "https://biapay.net/partners/",
    },
  },
  {
    key: "help",
    href: {
      fr: "https://biapay.net/help-center/?lang=fr",
      en: "https://biapay.net/help-center/",
    },
  },
];

export const socialLinks = [
  { key: "facebook", href: "https://www.facebook.com/biapayFR/" },
  { key: "twitter", href: "https://www.twitter.com/BIAPAY_official" },
  { key: "linkedin", href: "https://www.linkedin.com/company/14047052/" },
  { key: "youtube", href: "https://www.youtube.com/channel/UC9GTYkkjOunvnuorQzE0CSw" },
] as const;
