"use client";
import {useState} from "react";
import {ArrowRight,CheckCircle2,Code2,ShoppingBag,PlugZap} from "lucide-react";
const options=["PrestaShop","WooCommerce","Shopify","Magento"] as const;
export function IntegrationDemo({fr}:{fr:boolean}){
 const [selected,setSelected]=useState<(typeof options)[number]>("PrestaShop");
 const [replay,setReplay]=useState(0);
 return <div className="dv-live" aria-label={fr?"Démonstration illustrative d'intégration":"Illustrative integration demonstration"}>
  <div className="dv-live-top"><span><span className="dv-dot"/> BIAPAY / INTEGRATION LAB</span><span className="dv-live-tag">{fr?"DÉMONSTRATION":"INTERACTIVE PREVIEW"}</span></div>
  <div className="dv-live-tabs" role="group" aria-label={fr?"Choisissez une plateforme":"Choose a platform"}>{options.map(x=><button type="button" key={x} aria-pressed={selected===x} className={selected===x?"active":""} onClick={()=>{setSelected(x);setReplay(v=>v+1)}}>{x}</button>)}</div>
  <div className="dv-live-canvas" key={selected+"-"+replay}>
   <div className="dv-live-card dv-live-shop"><span className="dv-live-kicker">01 / {fr?"BOUTIQUE":"STOREFRONT"}</span><div className="dv-live-icon"><ShoppingBag size={25}/></div><strong>{selected}</strong><div className="dv-mock-product"><span/><div><i/><i/></div></div><span className="dv-live-small">{fr?"Commande client":"Customer order"}</span></div>
   <div className="dv-live-link"><div className="dv-live-track"><i/></div><span>{fr?"CONNEXION":"CONNECT"}</span><ArrowRight size={21}/></div>
   <div className="dv-live-card dv-live-gateway"><span className="dv-live-kicker">02 / {fr?"PASSERELLE":"GATEWAY"}</span><div className="dv-live-icon"><PlugZap size={25}/></div><strong>BIAPAY</strong><div className="dv-live-bars"><i/><i/><i/></div><span className="dv-live-small">{fr?"Traitement illustratif":"Illustrative processing"}</span></div>
   <div className="dv-live-link"><div className="dv-live-track"><i/></div><span>{fr?"PARCOURS":"CHECKOUT"}</span><ArrowRight size={21}/></div>
   <div className="dv-live-card dv-live-checkout"><span className="dv-live-kicker">03 / CHECKOUT</span><div className="dv-live-icon"><CheckCircle2 size={25}/></div><strong>{fr?"Paiement":"Payment"}</strong><div className="dv-live-payment"><span/><span/><span/></div><span className="dv-live-small">{fr?"Aperçu conceptuel":"Concept preview"}</span></div>
  </div>
  <div className="dv-live-bottom"><span><Code2 size={15}/>{fr?"Parcours illustratif — aucune transaction réelle":"Illustrative journey — no live transaction"}</span><button type="button" onClick={()=>setReplay(v=>v+1)}>{fr?"Rejouer":"Replay"} <ArrowRight size={14}/></button></div>
 </div>;
}
