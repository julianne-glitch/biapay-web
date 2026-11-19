import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPage } from "@/components/layout/interior-page";
import { PageTransition } from "@/components/layout/page-transition";
import { isLocale, locales } from "@/lib/shell-nav";
import { solutionCatalog } from "@/lib/solution-catalog";

type PageParams = {
  locale: string;
  slug: string;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    solutionCatalog.map((solution) => ({
      locale,
      slug: solution.slug[locale],
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const solution = solutionCatalog.find(
    (item) => item.slug[locale] === slug,
  );
  if (!solution) return {};

  return {
    title: `${solution.title[locale]} | BIAPAY`,
    description: solution.details[locale].description,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const solution = solutionCatalog.find(
    (item) => item.slug[locale] === slug,
  );
  if (!solution) notFound();

  const detail = solution.details[locale];

  return (
    <PageTransition>
      <InteriorPage
        locale={locale}
        eyebrow={detail.eyebrow}
        title={detail.title}
        highlight={detail.highlight}
        description={detail.description}
        sectionTitle={detail.sectionTitle}
        items={detail.items}
        image={solution.image}
        transitionName={`solution-image-${solution.id}`}
        backHref={`/${locale}#solutions`}
        backLabel={locale === "fr" ? "Toutes les solutions" : "All solutions"}
      />
    </PageTransition>
  );
}
