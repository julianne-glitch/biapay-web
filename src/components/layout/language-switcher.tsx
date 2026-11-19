"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/lib/shell-nav";
import { cn } from "@/lib/utils";

const languageOptions: Locale[] = ["en", "fr"];

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const pathname = usePathname();
  const current = useLocale() as Locale;

  return (
    <nav
      aria-label={t("label")}
      className="inline-flex items-center gap-1 rounded-full border border-white/80 bg-white/40 p-1 text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_14px_rgba(18,63,152,0.08)] backdrop-blur-md"
    >
      {languageOptions.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          hrefLang={locale}
          aria-current={locale === current ? "page" : undefined}
          className={cn(
            "min-w-9 rounded-full px-2.5 py-1.5 text-center font-bold uppercase leading-none transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77bf35]",
            locale === current
              ? "bg-[#153f91] text-white shadow-[0_3px_9px_rgba(21,63,145,0.2)]"
              : "text-[#153f91]/70 hover:bg-white/75 hover:text-[#153f91]",
          )}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
