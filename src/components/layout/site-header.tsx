"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Link, usePathname } from "@/i18n/navigation";
import { accountLinks } from "@/lib/shell-nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const t = useTranslations("nav");
  const account = useTranslations("account");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--brand-blue-border)] bg-white">
      <div className="mx-auto grid min-h-[64px] w-[calc(100%-36px)] max-w-[1570px] grid-cols-[1fr_auto] items-center gap-4 min-[761px]:min-h-[80px] min-[761px]:w-[calc(100%-6.2vw)] min-[1200px]:grid-cols-[auto_1fr_auto]">
        <Link
          href="/"
          transitionTypes={pathname === "/" ? [] : ["page-back"]}
          aria-label="BIAPAY"
          aria-current={pathname === "/" ? "page" : undefined}
          className="w-fit shrink-0"
        >
          <Image
            src="/assets/brand/biapay-wordmark.webp"
            alt="BIAPAY"
            width={220}
            height={50}
            priority
            className="h-auto w-[clamp(140px,11.8vw,190px)]"
          />
        </Link>

        <nav aria-label={t("primary")} className="hidden min-[1200px]:flex min-[1200px]:justify-center">
          <NavLinks pathname={pathname} />
        </nav>

        <div className="hidden items-center gap-[14px] min-[1200px]:flex min-[1400px]:gap-[20px]">
          <LanguageSwitcher />
          <a
            href={accountLinks.login}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[clamp(42px,2.93vw,49px)] items-center whitespace-nowrap rounded-full border-2 border-[var(--brand-blue)] bg-white px-[clamp(16px,1.2vw,20px)] text-[clamp(13px,.9vw,15px)] font-semibold text-[var(--brand-blue-hover)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-blue-soft)]"
          >
            {account("login")}
          </a>
          <a
            href={accountLinks.register}
            className="inline-flex h-[clamp(42px,2.93vw,49px)] items-center whitespace-nowrap rounded-full border-2 border-[var(--brand-blue)] bg-[var(--brand-blue)] px-[clamp(16px,1.2vw,20px)] text-[clamp(13px,.9vw,15px)] font-semibold text-white shadow-[0_8px_20px_rgba(21,54,127,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--brand-blue-hover)]"
          >
            {account("register")}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center justify-self-end rounded-full border border-white/80 bg-white/50 text-[var(--brand-blue)] shadow-[0_4px_14px_rgba(18,63,152,0.08)] backdrop-blur-md transition-colors hover:bg-white/80 min-[1200px]:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label={t("primary")} className="absolute inset-x-[18px] top-full mx-auto mt-2 max-h-[calc(100dvh-90px)] max-w-[620px] overflow-y-auto rounded-2xl border border-[var(--brand-blue-border)] bg-white p-4 shadow-[0_12px_34px_rgba(8,45,112,.12)] min-[1200px]:hidden">
          <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
          <div className="mt-4 flex flex-col gap-4 border-t border-[var(--brand-blue-border)] pt-4">
            <LanguageSwitcher />
            <a href={accountLinks.login} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-[var(--brand-blue)] bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--brand-blue-hover)]">
              {account("login")}
            </a>
            <a href={accountLinks.register} className="rounded-full border-2 border-[var(--brand-blue)] bg-[var(--brand-blue)] px-5 py-3 text-center text-sm font-semibold text-white">
              {account("register")}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function NavLinks({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  const t = useTranslations("nav");
  const items = [
    { key: "home", href: "/", active: pathname === "/", chevron: false },
    { key: "merchants", href: "/pricing", active: pathname.startsWith("/pricing"), chevron: false },
    { key: "agents", href: "/agents", active: pathname.startsWith("/agents"), chevron: false },
    { key: "about", href: "/about", active: pathname.startsWith("/about"), chevron: false },
    { key: "support", href: "/resources", active: pathname.startsWith("/resources"), chevron: true },
  ] as const;

  return (
    <ul className="flex flex-col gap-1 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:gap-[clamp(9px,.8vw,12px)]">
      {items.map((item) => {
        const className = cn(
          "relative flex items-center gap-1 py-2 text-[clamp(12.5px,.95vw,15px)] font-semibold transition-colors after:pointer-events-none after:absolute after:bottom-[-10px] after:left-[3%] after:h-[11px] after:w-[94%] after:rounded-t-[50%] after:border-t-[3px] after:border-[var(--brand-green-dark)] after:opacity-0 after:transition-all after:duration-300 motion-reduce:after:transition-none max-[1199px]:px-3 max-[1199px]:after:bottom-[-5px] max-[1199px]:after:h-[7px] max-[1199px]:after:left-[12%] max-[1199px]:after:w-[76%]",
          "text-[var(--brand-blue-hover)] hover:text-[var(--brand-blue-hover)]/80",
          item.active && "font-bold after:opacity-100",
        );

        return (
          <li key={item.key}>
            <Link
              href={item.href}
              transitionTypes={
                item.key === "merchants"
                  ? pathname === "/"
                    ? ["merchant-forward"]
                    : pathname === "/pricing"
                      ? ["merchant-back"]
                      : []
                  : []
              }
              onClick={onNavigate}
              aria-current={item.active ? "page" : undefined}
              className={className}
            >
              {t(item.key)}
              {item.chevron ? <ChevronDown aria-hidden="true" className="size-[1em] stroke-[2.5]" /> : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}