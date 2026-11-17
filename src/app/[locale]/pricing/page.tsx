import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {isLocale} from "@/lib/shell-nav";
import {PricingExperience} from "@/components/home/pricing-experience";
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
const {locale}=await params;const fr=locale==="fr";
return {title:fr?"Tarifs BIAPAY | Comparer Starter, Advanced, Premium et Privilege":"BIAPAY Pricing | Compare Starter, Advanced, Premium & Privilege",description:fr?"Comparez les abonnements BIAPAY : Starter, Advanced, Premium et Privilege. Découvrez les tarifs publiés, les frais de transaction et les options pour votre entreprise.":"Compare BIAPAY's Starter, Advanced, Premium and Privilege plans. Explore published subscription rates, transaction fees and business features.",alternates:{canonical:`https://biapay-web-nu.vercel.app/${locale}/pricing`,languages:{en:"https://biapay-web-nu.vercel.app/en/pricing",fr:"https://biapay-web-nu.vercel.app/fr/pricing"}},openGraph:{title:fr?"Formules et tarifs BIAPAY":"BIAPAY Plans and Pricing",description:fr?"Comparez quatre formules professionnelles.":"Compare four business plans.",type:"website",locale:fr?"fr_FR":"en_US"}};
}
export default async function Page({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <PricingExperience locale={locale}/>}