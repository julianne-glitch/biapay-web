import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { isLocale } from "@/lib/shell-nav";
import { PremiumHome } from "@/components/home/premium-home";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
 const { locale } = await params;
 if (!isLocale(locale)) notFound();
 setRequestLocale(locale);
 return <PremiumHome locale={locale as "fr" | "en"} />;
}
