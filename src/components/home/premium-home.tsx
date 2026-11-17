"use client";

import "./premium-home.css";
import "./premium-collage.css";
import "./premium-refinement.css";
import "./africa-map-premium.css";
import "./landing-finish.css";
import "./developer-editorial.css";
import {PartnerCarousel} from "./partner-carousel";
import {AfricaJourney} from "./africa-journey";
import {ConnectedStories} from "./connected-stories";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, CreditCard, Link2, QrCode, ReceiptText, Ticket, Code2, ShieldCheck, X, CheckCircle2, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Locale = "fr" | "en";
const stories = [
  { key:"paylink", image:"/assets/hero/merchant.webp", fr:{tag:"COMMERCE & ENTREPRENEURS",title:"Une vente commence par une idée.",desc:"Partagez un lien de paiement. Restez concentré sur ce que vous créez."},en:{tag:"COMMERCE & ENTREPRENEURS",title:"Every sale starts with an idea.",desc:"Share a payment link. Stay focused on what you create."}},
  { key:"developer", image:"/assets/hero/developer.webp",fr:{tag:"DÉVELOPPEURS & INTÉGRATIONS",title:"Créez sans limites.",desc:"Intégrez les paiements dans vos applications grâce aux ressources API."},en:{tag:"DEVELOPERS & INTEGRATIONS",title:"Build without limits.",desc:"Connect payments to your apps with BIAPAY API resources."}},
  { key:"events", image:"/assets/hero/events.webp",fr:{tag:"ÉVÉNEMENTS & BILLETTERIE",title:"Des moments à vivre. Sans friction.",desc:"Découvrez les solutions BIAPAY pour les événements et la billetterie."},en:{tag:"EVENTS & TICKETING",title:"More moments. Less friction.",desc:"Discover BIAPAY event and ticketing solutions."}},
  { key:"business", image:"/assets/hero/business.webp",fr:{tag:"ENTREPRISES & GESTION",title:"Votre activité, en mouvement.",desc:"Encaissez, facturez et pilotez vos transactions au même endroit."},en:{tag:"BUSINESS & MANAGEMENT",title:"Keep business moving.",desc:"Accept payments, invoice and manage transactions in one place."}}
] as const;
const products = [
 {icon:Link2,slug:"biapay-paylink",fr:"Paylink",en:"Paylink",descFr:"Créez un lien pour demander un paiement.",descEn:"Create a link to request payment."},
 {icon:QrCode,slug:"qr-code-payment",fr:"Paiement QR",en:"QR payments",descFr:"Une expérience pensée pour le commerce physique.",descEn:"Designed for in-person commerce."},
 {icon:ReceiptText,slug:"online-invoicing",fr:"Facturation en ligne",en:"Online invoicing",descFr:"Simplifiez la gestion de vos demandes de paiement.",descEn:"Simplify your payment requests."},
 {icon:Ticket,slug:"biapay-event-et-e-ticketing",enSlug:"biapay-event-and-e-ticketing",fr:"Événements & e-ticketing",en:"Events & e-ticketing",descFr:"Accompagnez vos événements, de la vente à l’entrée.",descEn:"Support events from ticket sales to entry."},
 {icon:CreditCard,slug:"reglement-fractionne",enSlug:"split-settlement",fr:"Règlement fractionné",en:"Split settlement",descFr:"Explorez les options de répartition des règlements.",descEn:"Explore ways to distribute settlements."},
 {icon:Code2,slug:"developers",fr:"API & intégrations",en:"API & integrations",descFr:"Des ressources pour connecter votre activité.",descEn:"Resources to connect your business."}
];
export function PremiumHome({locale}:{locale:Locale}) {
 const fr=locale==="fr"; const [active,setActive]=useState(0); const [paused,setPaused]=useState(false); const [demo,setDemo]=useState(false); const [step,setStep]=useState(0);
 useEffect(()=>{if(paused||demo)return;const timer=setInterval(()=>setActive(v=>(v+1)%stories.length),6500);return()=>clearInterval(timer)},[paused,demo]);
 useEffect(()=>{if(!demo)return;function onKey(e:KeyboardEvent){if(e.key==="Escape")setDemo(false)}window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[demo]);

 const source=(slug:string)=>`/${locale}/${slug === "payment-gateway" || slug === "payment-solutions" ? "solutions" : slug === "developers" ? "developers" : slug === "pricing-3" || slug === "pricing-2" ? "pricing" : slug === "about-biapay" ? "about" : "solutions"}`;
 return <main className="biapay-premium">
  <section className="bp-hero">
   <div className="bp-shell bp-hero-grid">
    <div className="bp-hero-copy">
     <div className="bp-eyebrow"><span className="bp-dot"/> BIAPAY <span className="bp-eyebrow-line"/> {fr?"DES PAIEMENTS, DES POSSIBILITÉS":"PAYMENTS INTO POSSIBILITIES"}</div>
     <h1>{fr?<>Votre ambition.<br/><em>Notre mouvement.</em></>:<>Your ambition.<br/><em>Our momentum.</em></>}</h1>
     <p className="bp-lead">{fr?"Encaissez, payez, facturez et développez votre activité avec des solutions de paiement pensées pour vos ambitions.":"Accept payments, send payments, invoice and grow with payment solutions designed around your ambitions."}</p>
     <div className="bp-actions"><a className="bp-btn-primary" href={source("payment-solutions")}>{fr?"Explorer les solutions":"Explore solutions"} <ArrowUpRight size={18}/></a><button className="bp-btn-outline" onClick={()=>{setStep(0);setDemo(true)}}><Play size={15} fill="currentColor"/> {fr?"Voir comment ça marche":"See how it works"}</button></div>
     <div className="bp-hero-note"><ShieldCheck size={17}/>{fr?"Des solutions pour les entreprises, les commerçants et les développeurs.":"Solutions for businesses, merchants and developers."}</div>
    </div>
    <div className="bp-visual bp-collage" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
     <div className="bp-green-swoosh"/>
     <div className="bp-collage-track">
      {stories.map((item,i)=><button type="button" key={item.key} onClick={()=>setActive(i)} className={`bp-collage-panel ${active===i?"is-active":""}`} aria-label={item[locale].tag} aria-pressed={active===i}>
       <span className="bp-panel-image" style={{backgroundImage:`linear-gradient(0deg,rgba(5,35,29,.88),transparent 55%),url("${item.image}")`}}/>
       <span className="bp-panel-content"><span className="bp-panel-icon">{i===0?<QrCode size={19}/>:i===1?<Code2 size={19}/>:i===2?<Ticket size={19}/>:<CreditCard size={19}/>}</span><strong>{i===0?(fr?"Commerçant":"Merchant"):i===1?(fr?"Développeur":"Developer"):i===2?(fr?"Événement":"Events"):(fr?"Entreprise":"Business")}</strong><small>{item[locale].desc}</small></span>
      </button>)}
     </div>
     <div className="bp-phone" aria-label={fr?"Aperçu illustratif de l’application BIAPAY":"Illustrative BIAPAY app preview"}><div className="bp-phone-speaker"/><div className="bp-phone-status"><span>9:41</span><span>●●●</span></div><div className="bp-phone-brand">BIAPAY<span className="bp-phone-brand-dot">●</span></div><div className="bp-phone-subtitle">{fr?"Votre paiement, simplifié":"Payments, simplified"}</div><div className="bp-phone-screen"><QrCode size={86} strokeWidth={2}/></div><div className="bp-phone-scan">{fr?"Scanner & payer":"Scan & pay"} <ArrowUpRight size={12}/></div><div className="bp-phone-badge">{fr?"PAIEMENT SÉCURISÉ":"SECURE PAYMENT"}</div><div className="bp-phone-home"/></div>
     <div className="bp-payment-toast" aria-label={fr?"Exemple de confirmation de paiement":"Example payment confirmation"}><span><CheckCircle2 size={19}/></span><div><small>{fr?"Paiement reçu":"Payment received"}</small><strong>XAF 25 000</strong></div></div>
     <div className="bp-visual-controls"><button aria-label={fr?"Image précédente":"Previous image"} onClick={()=>setActive(v=>(v+stories.length-1)%stories.length)}><ChevronLeft size={19}/></button><span>{String(active+1).padStart(2,"0")} <i>/</i> 0{stories.length}</span><button aria-label={fr?"Image suivante":"Next image"} onClick={()=>setActive(v=>(v+1)%stories.length)}><ChevronRight size={19}/></button><button aria-label={paused?"Play":"Pause"} onClick={()=>setPaused(v=>!v)}>{paused?<Play size={14}/>:<Pause size={14}/>}</button></div>
    </div>
   </div>
   <div className="bp-shell bp-story-tabs">{stories.map((s,i)=><button key={s.key} className={active===i?"selected":""} onClick={()=>setActive(i)}><span>0{i+1}</span><strong>{s[locale].tag}</strong><span className="bp-tab-line"/></button>)}</div>
  </section>
  <PartnerCarousel locale={locale}/>

  <section className="bp-intro bp-shell"><div className="bp-intro-heading"><span className="bp-section-label">{fr?"UNE PLATEFORME. PLUS DE POSSIBILITÉS.":"ONE PLATFORM. MORE POSSIBILITIES."}</span><h2>{fr?<>Le paiement ne devrait<br/>jamais freiner <em>vos idées.</em></>:<>Payments should never<br/>hold back <em>your ideas.</em></>}</h2></div><p>{fr?"Du premier paiement à de nouvelles opportunités, découvrez les solutions BIAPAY adaptées à différents moments de votre activité.":"From your first payment to new opportunities, discover BIAPAY solutions for different moments in your business."}</p></section>
  <section className="bp-products" id="solutions"><div className="bp-shell"><div className="bp-section-top"><div><span className="bp-section-label">{fr?"L'ÉCOSYSTÈME BIAPAY":"THE BIAPAY ECOSYSTEM"}</span><h2>{fr?"Tout commence ici.":"It all starts here."}</h2></div><a href={source("payment-solutions")}>{fr?"Toutes les solutions":"All solutions"} <ArrowUpRight size={17}/></a></div><div className="bp-product-grid">{products.map((p,i)=>{const Icon=p.icon;return <a key={p.slug} href={source(fr?p.slug:("enSlug" in p ? p.enSlug ?? p.slug : p.slug))} className="bp-product-card"><span className="bp-product-number">0{i+1}</span><div className="bp-product-icon"><Icon size={25} strokeWidth={1.6}/></div><h3>{fr?p.fr:p.en}</h3><p>{fr?p.descFr:p.descEn}</p><span className="bp-product-arrow"><ArrowUpRight size={20}/></span></a>})}</div></div></section>
  <AfricaJourney locale={locale}/>
  <ConnectedStories locale={locale}/>
  <section className="bp-last-cta"><div className="bp-shell"><span className="bp-section-label">{fr?"VOTRE PROCHAINE ÉTAPE":"YOUR NEXT STEP"}</span><h2>{fr?<>Et si votre prochaine<br/><em>grande idée commençait ici ?</em></>:<>What if your next<br/><em>big idea starts here?</em></>}</h2><a className="bp-btn-primary" href={source("contact")}>{fr?"Parlons de votre projet":"Let's talk about your project"} <ArrowRight size={18}/></a></div></section>
  <AnimatePresence>{demo&&<motion.div className="bp-modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget)setDemo(false)}}><motion.div className="bp-demo-modal" role="dialog" aria-modal="true" aria-label={fr?"Démo interactive":"Interactive demo"} initial={{y:35,opacity:0}} animate={{y:0,opacity:1}} exit={{y:25,opacity:0}}><button className="bp-modal-close" onClick={()=>setDemo(false)} aria-label="Close"><X size={22}/></button><span className="bp-section-label">BIAPAY · {fr?"DÉMONSTRATION":"DEMONSTRATION"}</span><h2>{fr?"Découvrez le parcours Paylink":"Explore the Paylink journey"}</h2><p className="bp-demo-disclaimer">{fr?"Simulation illustrative uniquement. Aucun paiement réel n'est effectué.":"Illustrative simulation only. No real payment is processed."}</p><div className="bp-demo-steps"><span className={step>=0?"on":""}>01 {fr?"Créer":"Create"}</span><span className={step>=1?"on":""}>02 {fr?"Partager":"Share"}</span><span className={step>=2?"on":""}>03 {fr?"Terminer":"Finish"}</span></div><div className="bp-demo-panel">{step===0?<><Link2 size={34}/><h3>{fr?"Créez un lien de paiement":"Create a payment link"}</h3><p>{fr?"Exemple : une boutique souhaite envoyer une demande de paiement à un client.":"Example: a shop wants to send a payment request to a customer."}</p></>:step===1?<><ArrowUpRight size={34}/><h3>{fr?"Partagez votre lien":"Share your link"}</h3><p>{fr?"Le commerçant partage le lien avec son client via son canal préféré.":"The merchant shares the link with their customer using their preferred channel."}</p></>:<><CheckCircle2 size={34}/><h3>{fr?"Parcours terminé":"Journey complete"}</h3><p>{fr?"Vous avez exploré un parcours fictif Paylink. Aucun paiement n'a été envoyé.":"You explored a fictional Paylink flow. No payment was sent."}</p></>}</div><button className="bp-btn-primary bp-demo-next" onClick={()=>step===2?setDemo(false):setStep(v=>v+1)}>{step===2?(fr?"Fermer":"Close"):(fr?"Continuer":"Continue")} <ArrowRight size={17}/></button></motion.div></motion.div>}</AnimatePresence>
 </main>;
}
