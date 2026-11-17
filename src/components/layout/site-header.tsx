"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Link, usePathname } from "@/i18n/navigation";
import { accountLinks, shellNav, type Locale } from "@/lib/shell-nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const t = useTranslations("nav");
  const account = useTranslations("account");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#e6ede4]/80 bg-white/90 backdrop-blur-xl shadow-[0_5px_30px_rgba(18,61,43,.045)]">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-5 py-3 lg:gap-5">
        <Link href="/" className="shrink-0" aria-label="BIAPAY">
          <Image
            src="/assets/brand/biapay-wordmark.png"
            alt="BIAPAY"
            width={220}
            height={50}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav aria-label={t("primary")} className="hidden flex-1 lg:block">
          <NavLinks locale={locale} pathname={pathname} />
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={accountLinks.login}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-heading hover:text-navy"
          >
            {account("login")}
          </a>
          <a
            href={accountLinks.register}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "h-10 rounded-full px-4")}
          >
            {account("register")}
          </a>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex size-10 items-center justify-center rounded-full text-heading lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border px-4 py-4 lg:hidden">
          <NavLinks
            locale={locale}
            pathname={pathname}
            onNavigate={() => setOpen(false)}
          />
          <div className="mt-4 flex flex-col gap-3">
            <LanguageSwitcher />
            <a
              href={accountLinks.login}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-heading"
            >
              {account("login")}
            </a>
            <a
              href={accountLinks.register}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "h-10 rounded-full")}
            >
              {account("register")}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLinks({
  locale,
  pathname,
  onNavigate,
}: {
  locale: Locale;
  pathname: string;
  onNavigate?: () => void;
}) {
  const t = useTranslations("nav");

  return (
    <ul className="flex flex-col gap-1 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-1">
      <li><a href={`/${locale}/solutions`} className="rounded-full px-3 py-2 text-sm font-medium text-heading hover:bg-accent">{locale==="fr"?"Produits":"Products"}</a></li>
      {shellNav.filter((item) => ["solutions","developers","pricing","about"].includes(item.key)).map((item) => {
        const label = t(item.key);
        const current = item.key === "home" && pathname === "/";
        const className = cn(
          "rounded-full px-3 py-2 text-sm font-medium text-heading hover:bg-accent",
          current && "bg-accent",
        );

        if ("internal" in item) {
          return (
            <li key={item.key}>
              <Link
                href="/"
                aria-current={current ? "page" : undefined}
                className={className}
                onClick={onNavigate}
              >
                {label}
              </Link>
            </li>
          );
        }

        return (
          <li key={item.key}>
            <a href={item.href[locale]} className={className} onClick={onNavigate}>
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
