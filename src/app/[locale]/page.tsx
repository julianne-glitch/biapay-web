import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { isLocale } from "@/lib/shell-nav";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 sm:py-24">
      <h1 className="text-4xl tracking-tight sm:text-5xl">{t("title")}</h1>
      <p className="max-w-2xl text-lg leading-8">{t("summary")}</p>
      <p className="max-w-2xl text-sm text-muted-foreground">{t("phaseNote")}</p>
    </div>
  );
}
