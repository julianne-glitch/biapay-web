export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const accountLinks = {
  login: "https://connect.biapay.net/login",
  register: "https://connect.biapay.net/login",
} as const;

export const developerDocsUrl = "https://biapay-docs.biapay.net";

export const companyLink = "https://www.groupebia.com/";

type LocaleHref = Record<Locale, string>;

export const shellNav = [
  { key: "home", internal: true },
  {
    key: "about",
    href: {
      fr: "/fr/about",
      en: "/en/about",
    },
  },
  {
    key: "news",
    href: {
      fr: "/fr/resources",
      en: "/en/resources",
    },
  },
  {
    key: "gateway",
    href: {
      fr: "/fr/solutions",
      en: "/en/solutions",
    },
  },
  {
    key: "solutions",
    href: {
      fr: "/fr/solutions",
      en: "/en/solutions",
    },
  },
  {
    key: "pricing",
    href: {
      fr: "/fr/pricing",
      en: "/en/pricing",
    },
  },
  {
    key: "agents",
    href: {
      fr: "/fr/agents",
      en: "/en/agents",
    },
  },
  {
    key: "developers",
    href: {
      fr: developerDocsUrl,
      en: developerDocsUrl,
    },
  },
  {
    key: "help",
    href: {
      fr: "/fr/resources",
      en: "/en/resources",
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
      fr: "/fr/about",
      en: "/en/about",
    },
  },
  {
    key: "careers",
    href: {
      fr: "/fr/careers",
      en: "/en/careers",
    },
  },
  {
    key: "contact",
    href: {
      fr: "/fr/contact",
      en: "/en/contact",
    },
  },
  {
    key: "legal",
    href: {
      fr: "/fr/legal",
      en: "/en/legal",
    },
  },
  {
    key: "terms",
    href: {
      fr: "/fr/terms",
      en: "/en/terms",
    },
  },
  {
    key: "privacy",
    href: {
      fr: "/fr/privacy",
      en: "/en/privacy",
    },
  },
  {
    key: "partners",
    href: {
      fr: "/fr/partners",
      en: "/en/partners",
    },
  },
  {
    key: "help",
    href: {
      fr: "/fr/resources",
      en: "/en/resources",
    },
  },
];

export const socialLinks = [
  { key: "facebook", href: "https://www.facebook.com/biapayFR/" },
  { key: "twitter", href: "https://www.twitter.com/BIAPAY_official" },
  { key: "linkedin", href: "https://www.linkedin.com/company/14047052/" },
  { key: "youtube", href: "https://www.youtube.com/channel/UC9GTYkkjOunvnuorQzE0CSw" },
] as const;
