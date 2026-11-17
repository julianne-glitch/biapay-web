import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {isLocale} from "@/lib/shell-nav";
import {SolutionsShowcase} from "@/components/home/solutions-showcase";
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
const {locale}=await params;
const fr=locale==="fr";
return {
title:fr?"Solutions de paiement en ligne et en magasin | BIAPAY":"Online & In-Store Payment Solutions | BIAPAY",
description:fr?"Découvrez les solutions de paiement BIAPAY : passerelle de paiement, Paylink, facturation numérique, paiements QR, commerce et événements.":"Explore BIAPAY payment solutions: payment gateway, Paylink, online invoicing, QR payments, in-store commerce and event payments.",
alternates:{canonical:`https://biapay-web-nu.vercel.app/${locale}/solutions`,languages:{en:"https://biapay-web-nu.vercel.app/en/solutions",fr:"https://biapay-web-nu.vercel.app/fr/solutions"}},
openGraph:{title:fr?"Solutions de paiement BIAPAY":"BIAPAY Payment Solutions",description:fr?"Une plateforme, plusieurs façons d'encaisser.":"One platform, multiple ways to get paid.",type:"website",locale:fr?"fr_FR":"en_US"}
}}
export default async function Page({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <SolutionsShowcase locale={locale}/>}