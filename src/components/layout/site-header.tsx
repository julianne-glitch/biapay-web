"use client";

import { useEffect, useState } from "react";
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
  const isOverlayHeroPage = pathname === "/";
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [overHero, setOverHero] = useState(isOverlayHeroPage);
  const [overDarkHeroSection, setOverDarkHeroSection] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - previousScrollY;
      setCompact(currentScrollY > 24);

      if (open || currentScrollY <= 24) {
        setHidden(false);
      } else if (Math.abs(scrollDelta) > 4) {
        setHidden(scrollDelta > 0);
      }

      previousScrollY = currentScrollY;

      const darkSections = isOverlayHeroPage
        ? document.querySelectorAll(
            ".bp-developer",
          )
        : [];
      const heroSections = isOverlayHeroPage
        ? document.querySelectorAll(".bp-hero2")
        : [];
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 84;
      const intersectsHeader = (section: Element) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top < headerHeight && bounds.bottom > 0;
      };
      const coversHeader = (section: Element) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= 0 && bounds.bottom >= headerHeight;
      };

      setOverHero(Array.from(heroSections).some(coversHeader));
      setOverDarkHeroSection(
        Array.from(darkSections).some(intersectsHeader),
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname, isOverlayHeroPage, open]);

  return (
    <header className={cn(
      "z-40 w-full transition-transform duration-300 ease-in-out motion-reduce:transition-none",
      isOverlayHeroPage ? "fixed top-0" : "sticky top-0",
      hidden && !open ? "-translate-y-full pointer-events-none" : "translate-y-0",
      overHero
        ? "bg-transparent"
        : overDarkHeroSection
          ? "bg-[var(--brand-ink)] shadow-[0_8px_24px_rgba(15,35,70,0.12)]"
          : "bg-[var(--brand-blue-soft)] shadow-[0_8px_24px_rgba(15,35,70,0.08)]",
    )}>
      <div className={cn(
        "mx-auto grid w-[calc(100%-6.2vw)] max-w-[1570px] grid-cols-[1fr_auto] items-center gap-4 border-b transition-[min-height] duration-300 motion-reduce:transition-none min-[1200px]:grid-cols-[auto_1fr_auto] max-[1050px]:w-[calc(100%-48px)] max-[760px]:w-[calc(100%-36px)] max-[760px]:max-w-[620px]",
        isOverlayHeroPage ? "border-transparent" : "border-[var(--brand-blue-border)]",
        compact ? "min-h-[72px]" : "min-h-[84px] min-[1400px]:min-h-[104px]",
      )}>
        <Link
          href="/"
          transitionTypes={pathname === "/" ? [] : ["page-back"]}
          aria-label="BIAPAY"
          aria-current={pathname === "/" ? "page" : undefined}
          className={cn("w-fit shrink-0", overDarkHeroSection && "rounded-xl bg-white px-3 py-2")}
        >
          <Image
            src="/assets/brand/biapay-wordmark.webp"
            alt="BIAPAY"
            width={220}
            height={50}
            priority
            className={cn("h-auto w-[clamp(148px,11.8vw,200px)] transition-all duration-300", compact && "w-[clamp(148px,10.2vw,170px)]")}
          />
        </Link>

        <nav aria-label={t("primary")} className="hidden min-[1200px]:flex min-[1200px]:justify-center">
          <NavLinks pathname={pathname} compact={compact} light={overDarkHeroSection} />
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
        <div id="mobile-nav" className="mx-auto mb-4 w-[calc(100%-6.2vw)] max-w-[1570px] rounded-2xl border border-[var(--brand-blue-border)] bg-white px-4 py-4 shadow-[0_12px_34px_rgba(8,45,112,.12)] min-[1200px]:hidden max-[1050px]:w-[calc(100%-48px)] max-[760px]:w-[calc(100%-36px)] max-[760px]:max-w-[620px]">
          <NavLinks pathname={pathname} compact={compact} light={false} onNavigate={() => setOpen(false)} />
          <div className="mt-4 flex flex-col gap-4 border-t border-[var(--brand-blue-border)] pt-4">
            <LanguageSwitcher />
            <a href={accountLinks.login} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-[var(--brand-blue)] bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--brand-blue-hover)]">
              {account("login")}
            </a>
            <a href={accountLinks.register} className="rounded-full border-2 border-[var(--brand-blue)] bg-[var(--brand-blue)] px-5 py-3 text-center text-sm font-semibold text-white">
              {account("register")}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLinks({
  pathname,
  compact,
  light,
  onNavigate,
}: {
  pathname: string;
  compact: boolean;
  light: boolean;
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
          light ? "text-white hover:text-[var(--brand-green-light)]" : "text-[var(--brand-blue-hover)] hover:text-[var(--brand-blue-hover)]/80",
          item.active &&
            cn(
              light ? "font-bold text-[var(--brand-green-light)]" : "font-bold text-[var(--brand-blue-hover)]",
              "after:opacity-100",
              compact ? "after:-translate-y-0.5" : "after:translate-y-0",
            ),
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