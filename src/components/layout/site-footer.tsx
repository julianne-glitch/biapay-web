import Image from "next/image";
import {ArrowUpRight,Mail,MapPin,Phone} from "lucide-react";
import {getLocale,getTranslations} from "next-intl/server";
import {companyLink,footerNav,socialLinks,isLocale} from "@/lib/shell-nav";
export async function SiteFooter(){
 const t=await getTranslations("footer");const value=await getLocale();const locale=isLocale(value)?value:"fr";const fr=locale==="fr";
 return <footer className="relative overflow-hidden bg-[#0c302a] text-[#d7e9df]"><div className="pointer-events-none absolute -right-40 -top-56 h-[600px] w-[600px] rounded-full border border-[#6b9e69]/20"/><div className="pointer-events-none absolute -right-28 -top-40 h-[500px] w-[500px] rounded-full border border-[#6b9e69]/15"/>
  <div className="relative mx-auto max-w-7xl px-6 pb-9 pt-16 lg:px-8 lg:pt-20">
   <div className="flex flex-col gap-7 border-b border-white/15 pb-12 md:flex-row md:items-end md:justify-between"><div><Image src="/assets/brand/biapay-wordmark.png" width={170} height={45} alt="BIAPAY" className="h-9 w-auto rounded-md bg-white p-1"/><h2 className="mt-6 max-w-lg text-3xl font-extrabold tracking-[-.045em] text-white md:text-4xl">{fr?"Les paiements au rythme de vos ambitions.":"Payments that move with your ambition."}</h2></div><a href={fr?"/fr/contact":"/en/contact"} className="inline-flex w-fit items-center gap-3 rounded-full bg-[#9bd34b] px-6 py-3 text-sm font-bold text-[#11372a] transition-transform hover:-translate-y-1">{fr?"Parlons de votre projet":"Let's talk"}<ArrowUpRight size={17}/></a></div>
   <div className="grid gap-12 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
    <div className="space-y-5 text-sm leading-7"><p className="font-semibold text-white">{t("companyLegal")}</p><p className="flex items-start gap-3 text-white/65"><MapPin size={17} className="mt-1 shrink-0 text-[#a2d86a]"/><span>{t("address")}</span></p><a href={`mailto:${t("email")}`} className="flex items-center gap-3 text-white/75 hover:text-white"><Mail size={17} className="text-[#a2d86a]"/>{t("email")}</a><a href={`tel:${t("phone").replace(/\s/g,"")}`} className="flex items-center gap-3 text-white/75 hover:text-white"><Phone size={17} className="text-[#a2d86a]"/>{t("phone")}</a><a href={companyLink} className="inline-flex items-center gap-2 text-white/70 hover:text-white">{t("company")}<ArrowUpRight size={14}/></a></div>
    <div><h3 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#b6dc95]">{fr?"Découvrir":"Explore"}</h3><ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm md:grid-cols-1">{footerNav.map(item=><li key={item.key}><a className="text-white/65 transition-colors hover:text-white" href={item.href[locale]}>{t(item.key)}</a></li>)}</ul></div>
    <div><h3 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#b6dc95]">{t("socialLabel")}</h3><ul className="space-y-3 text-sm">{socialLinks.map(item=><li key={item.key}><a className="inline-flex items-center gap-2 text-white/65 transition-colors hover:text-white" href={item.href} target="_blank" rel="noopener noreferrer">{t(item.key)}<ArrowUpRight size={13}/></a></li>)}</ul></div>
   </div>
   <div className="flex flex-col gap-3 border-t border-white/15 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} BIAPAY · Business Intelligence Agency</span><span>{fr?"En ligne. En magasin. Partout.":"Online. In-store. Everywhere."}</span></div>
  </div>
 </footer>
}
