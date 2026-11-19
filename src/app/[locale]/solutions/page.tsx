import { notFound, redirect } from "next/navigation";
import { isLocale } from "@/lib/shell-nav";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  redirect(`/${locale}#solutions`);
}