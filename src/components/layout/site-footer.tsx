import { getLocale, getTranslations } from "next-intl/server";
import { companyLink, footerNav, socialLinks, isLocale } from "@/lib/shell-nav";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const localeValue = await getLocale();
  const locale = isLocale(localeValue) ? localeValue : "fr";

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3 text-sm leading-6">
          <p className="font-heading text-base text-white">{t("companyLegal")}</p>
          <p>
            <span className="block text-white/70">{t("addressLabel")}</span>
            {t("address")}
          </p>
          <p>
            <span className="block text-white/70">{t("emailLabel")}</span>
            <a className="underline-offset-4 hover:underline" href={`mailto:${t("email")}`}>
              {t("email")}
            </a>
          </p>
          <p>
            <span className="block text-white/70">{t("phoneLabel")}</span>
            <a className="underline-offset-4 hover:underline" href={`tel:${t("phone").replace(/\s/g, "")}`}>
              {t("phone")}
            </a>
          </p>
          <p>
            <a className="underline-offset-4 hover:underline" href={companyLink}>
              {t("company")}
            </a>
          </p>
        </div>

        <ul className="space-y-2 text-sm">
          {footerNav.map((item) => (
            <li key={item.key}>
              <a className="hover:underline" href={item.href[locale]}>
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <p className="text-sm text-white/70">{t("socialLabel")}</p>
          <ul className="mt-2 space-y-2 text-sm">
            {socialLinks.map((item) => (
              <li key={item.key}>
                <a
                  className="hover:underline"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
