import Image from "next/image";
import {ArrowUpRight,Mail,MapPin,Phone} from "lucide-react";
import {getLocale,getTranslations} from "next-intl/server";
import {companyLink,footerNav,socialLinks,isLocale} from "@/lib/shell-nav";
export async function SiteFooter(){
 const t=await getTranslations("footer");const value=await getLocale();const locale=isLocale(value)?value:"fr";const fr=locale==="fr";
 return <footer className="relative overflow-hidden border-t border-white/80 bg-[#edf3f7]/90 text-[#173c31] shadow-[0_-12px_40px_rgba(18,63,152,0.08)] backdrop-blur-2xl backdrop-saturate-150">
  <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-10 lg:px-8 lg:pt-12">
   <div className="flex flex-col gap-5 border-b border-[#153f91]/15 pb-8 md:flex-row md:items-end md:justify-between"><div><Image src="/assets/brand/biapay-wordmark.webp" width={220} height={50} alt="BIAPAY" className="h-9 w-auto rounded-md p-1"/></div><a href={fr?"/fr/contact":"/en/contact"} className="inline-flex w-fit items-center gap-3 rounded-full bg-[#9bd34b] px-6 py-3 text-sm font-bold text-[#11372a] transition-transform hover:-translate-y-1">{fr?"Parlons de votre projet":"Let's talk"}<ArrowUpRight size={17}/></a></div>
   <div className="grid gap-x-12 gap-y-8 py-8 md:grid-cols-[1.4fr_1fr_1fr]">
    <div className="space-y-5 text-sm leading-7"><p className="font-semibold text-[#123f98]">{t("companyLegal")}</p><p className="flex items-start gap-3 text-[#526c62]"><MapPin size={17} className="mt-1 shrink-0 text-[#5b8b45]"/><span>{t("address")}</span></p><a href={`mailto:${t("email")}`} className="flex items-center gap-3 text-[#36584a] hover:text-[#123f98]"><Mail size={17} className="text-[#5b8b45]"/>{t("email")}</a><a href={`tel:${t("phone").replace(/\s/g,"")}`} className="flex items-center gap-3 text-[#36584a] hover:text-[#123f98]"><Phone size={17} className="text-[#5b8b45]"/>{t("phone")}</a><a href={companyLink} className="inline-flex items-center gap-2 text-[#36584a] hover:text-[#123f98]">{t("company")}<ArrowUpRight size={14}/></a></div>
    <div><h3 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#47703c]">{fr?"Découvrir":"Explore"}</h3><ul className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm md:grid-cols-1">{footerNav.map(item=><li key={item.key}><a className="text-[#526c62] transition-colors hover:text-[#123f98]" href={item.href[locale]}>{t(item.key)}</a></li>)}</ul></div>
    <div><h3 className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#47703c]">{t("socialLabel")}</h3><ul className="space-y-3 text-sm">{socialLinks.map(item=><li key={item.key}><a className="inline-flex items-center gap-2 text-[#526c62] transition-colors hover:text-[#123f98]" href={item.href} target="_blank" rel="noopener noreferrer">{t(item.key)}<ArrowUpRight size={13}/></a></li>)}</ul></div>
   </div>
   <div className="flex flex-col gap-3 border-t border-[#153f91]/15 pt-5 text-xs text-[#6a7d75] sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} BIAPAY · Business Intelligence Agency</span><span>{fr?"En ligne. En magasin. Partout.":"Online. In-store. Everywhere."}</span></div>
  </div>
 </footer>
}
