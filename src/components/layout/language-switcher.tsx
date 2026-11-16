"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, type Locale } from "@/lib/shell-nav";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const pathname = usePathname();
  const current = useLocale() as Locale;

  return (
    <nav aria-label={t("label")} className="flex items-center gap-1 text-sm">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          hrefLang={locale}
          aria-current={locale === current ? "true" : undefined}
          className={cn(
            "rounded-full px-2 py-1 font-medium",
            locale === current
              ? "bg-accent text-heading"
              : "text-foreground hover:text-heading",
          )}
        >
          {t(locale)}
        </Link>
      ))}
    </nav>
  );
}
