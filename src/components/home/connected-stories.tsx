"use client";
import {useEffect,useState} from "react";
import {AnimatePresence,motion,useReducedMotion} from "motion/react";
import {ArrowRight,ArrowUpRight,Check,FileText,Ticket,Link2,Code2,Pause,Play,MessageCircle} from "lucide-react";
import "./connected-stories.css";
const scenes=[
 {key:"invoice",icon:FileText,fr:"Facturation",en:"Invoicing",fromFr:"Bonjour, la facture est prête.",fromEn:"Hello, the invoice is ready.",toFr:"Parfait, envoyez-moi le lien.",toEn:"Perfect, send me the link.",statusFr:"Facture partagée",statusEn:"Invoice shared",actionFr:"Créer et partager une facture",actionEn:"Create and share an invoice"},
 {key:"events",icon:Ticket,fr:"Billetterie",en:"Event ticketing",fromFr:"Les billets sont disponibles !",fromEn:"Tickets are available!",toFr:"Super, je réserve ma place.",toEn:"Great, I'll book my spot.",statusFr:"Billet électronique",statusEn:"Digital ticket",actionFr:"Créer une billetterie",actionEn:"Create an event ticket"},
 {key:"paylink",icon:Link2,fr:"Lien de paiement",en:"Payment links",fromFr:"Je vous envoie un lien sécurisé.",fromEn:"I'm sending a secure link.",toFr:"Bien reçu, merci !",toEn:"Got it, thank you!",statusFr:"Lien partagé",statusEn:"Payment link shared",actionFr:"Partager un lien de paiement",actionEn:"Share a payment link"},
 {key:"api",icon:Code2,fr:"Intégrations",en:"Integrations",fromFr:"On connecte notre boutique ?",fromEn:"Shall we connect our store?",toFr:"Oui, l’API est prête.",toEn:"Yes, the API is ready.",statusFr:"Ressources API",statusEn:"API resources",actionFr:"Connecter une application",actionEn:"Connect an application"}
] as const;
export function ConnectedStories({locale}:{locale:"fr"|"en"}){
 const fr=locale==="fr";const [active,setActive]=useState(0);const [playing,setPlaying]=useState(true);const reduce=useReducedMotion();
 useEffect(()=>{if(!playing||reduce)return;const t=window.setInterval(()=>setActive(i=>(i+1)%scenes.length),5500);return()=>window.clearInterval(t)},[playing,reduce]);
 const scene=scenes[active];const Icon=scene.icon;
 return <section className="bp-connected" aria-labelledby="bp-connected-title"><div className="bp-shell bp-connected-wrap">
 <div className="bp-connected-heading"><div><span className="bp-connected-kicker"><MessageCircle size={15}/>{fr?"UN ÉCOSYSTÈME, DES POSSIBILITÉS":"ONE ECOSYSTEM, MANY POSSIBILITIES"}</span><h2 id="bp-connected-title">{fr?<>Les idées se rencontrent.<br/><em>Les projets avancent.</em></>:<>Ideas connect.<br/><em>Business moves.</em></>}</h2><p>{fr?"D'une conversation à une facture, d'un événement à une intégration : découvrez les solutions BIAPAY à travers des histoires du quotidien.":"From a conversation to an invoice, from an event to an integration: see how BIAPAY fits the way people work together."}</p></div><div className="bp-connected-controls"><span>{String(active+1).padStart(2,"0")} / 04</span><button onClick={()=>setPlaying(v=>!v)} aria-label={playing?"Pause animation":"Play animation"}>{playing?<Pause size={16}/>:<Play size={16}/>}</button></div></div>
 <div className="bp-connected-tabs" role="tablist" aria-label={fr?"Choisir un parcours BIAPAY":"Choose a BIAPAY journey"}>{scenes.map((item,i)=>{const ItemIcon=item.icon;return <button key={item.key} role="tab" aria-selected={i===active} className={i===active?"active":""} onClick={()=>{setActive(i);setPlaying(false)}}><ItemIcon size={17}/>{fr?item.fr:item.en}<span className="bp-tab-line"/></button>})}</div>
 <div className="bp-connected-stage">
  <div className="bp-person bp-person-left"><div className="bp-person-photo bp-person-photo-left"/><div className="bp-person-caption"><span className="bp-person-online"/><div><strong>{fr?"Une entrepreneure":"A business owner"}</strong><small>Douala · Cameroun</small></div></div></div>
  <div className="bp-connected-middle"><div className="bp-connected-line"><span/><span/></div><div className="bp-connected-orbit"><span className="bp-connected-orbit-icon"><Icon size={23}/></span><span>BIAPAY</span></div><AnimatePresence mode="wait"><motion.div key={scene.key} className="bp-message-stack" initial={reduce?false:{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.35}}>
   <div className="bp-message bp-message-first"><span className="bp-msg-avatar">A</span><span>{fr?scene.fromFr:scene.fromEn}</span><Check size={14}/></div>
   <div className="bp-message bp-message-second"><span>{fr?scene.toFr:scene.toEn}</span><span className="bp-msg-avatar bp-msg-avatar-green">B</span></div>
   <div className="bp-message-product"><span><Icon size={18}/></span><div><small>BIAPAY · {fr?scene.fr:scene.en}</small><strong>{fr?scene.statusFr:scene.statusEn}</strong></div><ArrowRight size={18}/></div>
  </motion.div></AnimatePresence>
  </div>
  <div className="bp-person bp-person-right"><div className="bp-person-photo bp-person-photo-right"/><div className="bp-person-caption"><span className="bp-person-online"/><div><strong>{fr?"Un partenaire":"A business partner"}</strong><small>{fr?"Une autre équipe, même ambition":"Another team, same ambition"}</small></div></div></div>
 </div>
 <div className="bp-connected-bottom"><div><span className="bp-connected-bottom-icon"><Icon size={20}/></span><div><small>{fr?"DÉCOUVREZ LE PARCOURS":"EXPLORE THE JOURNEY"}</small><strong>{fr?scene.actionFr:scene.actionEn}</strong></div></div><a href={fr?"/fr/solutions":"/en/solutions"}>{fr?"Découvrir BIAPAY":"Explore BIAPAY"}<ArrowUpRight size={17}/></a></div>
 </div></section>
}
