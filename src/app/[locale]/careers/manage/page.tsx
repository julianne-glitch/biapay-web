import { PageTransition } from "@/components/layout/page-transition";
import {notFound} from "next/navigation";
import {isLocale} from "@/lib/shell-nav";
import {CareersAdmin} from "@/components/careers/careers-admin";
import "./manage.css";
export const metadata={title:"BIAPAY | Careers Administration",robots:{index:false,follow:false}};
export default async function Page({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <PageTransition><CareersAdmin locale={locale}/></PageTransition>}
