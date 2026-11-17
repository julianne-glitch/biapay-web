import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {isLocale} from "@/lib/shell-nav";
import {EnquiryLayout} from "@/components/forms/enquiry-layout";
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;return {title:locale==="fr"?"Contacter BIAPAY | Écrivez à notre équipe":"Contact BIAPAY | Let's Talk Payments & Partnerships",description:locale==="fr"?"Contactez BIAPAY via notre formulaire pour vos questions sur les paiements, les intégrations et les partenariats.":"Contact BIAPAY about payments, technical integration, partnerships or general enquiries using our secure enquiry form.",alternates:{canonical:`https://biapay-web-nu.vercel.app/${locale}/contact`,languages:{en:"https://biapay-web-nu.vercel.app/en/contact",fr:"https://biapay-web-nu.vercel.app/fr/contact"}}}}
export default async function Page({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <EnquiryLayout locale={locale} kind="contact"/>}
