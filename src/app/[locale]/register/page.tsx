import {redirect,notFound} from "next/navigation";
import {isLocale,accountLinks} from "@/lib/shell-nav";
/** Registration and sign-in are handled by the secure BIAPAY Connect portal. */
export default async function RegisterPage({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;
 if(!isLocale(locale))notFound();
 redirect(accountLinks.register);
}
