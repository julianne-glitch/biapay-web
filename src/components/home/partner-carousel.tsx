"use client";
import {useEffect,useRef,useState} from "react";
import Image from "next/image";
import {ChevronLeft,ChevronRight,Pause,Play} from "lucide-react";
import "./partner-carousel.css";
const logos=[
{name:"Business Intelligence Agency",file:"bia.png"},
{name:"UnionPay",file:"unionpay.png"},
{name:"GIMAC",file:"gimac.png"},
{name:"Mastercard",file:"mastercard.png"},
{name:"Visa",file:"visa.png"},
{name:"PayPal",file:"paypal.png"},
{name:"Orange Money",file:"orange-money.png"},
{name:"AFB",file:"afb.png"},
{name:"Stripe",file:"stripe.png"},
{name:"IBM",file:"ibm.png"},
{name:"Sara",file:"sara.png"},
{name:"MTN Mobile Money",file:"mtn-momo.jpg"},
{name:"CCA",file:"cca.png"},
{name:"UBA",file:"uba.gif"},
{name:"M2U",file:"m2u.png"},
{name:"Business Intelligence Agency",file:"bia-full.png"}
];
export function PartnerCarousel({locale}:{locale:"fr"|"en"}){
 const fr=locale==="fr";const scroller=useRef<HTMLDivElement>(null);const [paused,setPaused]=useState(false);
 const [reduced,setReduced]=useState(false);
 useEffect(()=>{const m=window.matchMedia("(prefers-reduced-motion: reduce)");const update=()=>setReduced(m.matches);update();m.addEventListener("change",update);return()=>m.removeEventListener("change",update)},[]);
 useEffect(()=>{if(paused||reduced)return;const el=scroller.current;if(!el)return;const timer=window.setInterval(()=>{if(!el)return;const half=el.scrollWidth/2;if(el.scrollLeft>=half-2)el.scrollLeft=0;el.scrollBy({left:1,behavior:"instant"})},22);return()=>window.clearInterval(timer)},[paused,reduced]);
 const move=(dir:number)=>{const el=scroller.current;if(!el)return;const half=el.scrollWidth/2;let dest=el.scrollLeft+dir*260;if(dest<0)dest=half-260;if(dest>=half)dest=0;el.scrollTo({left:dest,behavior:reduced?"instant":"smooth"})};
 return <section className="bp-partners bp-shell" aria-label={fr?"Nos partenaires de confiance":"Our trusted partners"}>
  <div className="bp-partners-heading"><div><span className="bp-partners-kicker">{fr?"UN ÉCOSYSTÈME QUI NOUS ACCOMPAGNE":"AN ECOSYSTEM BEHIND THE EXPERIENCE"}</span><h2>{fr?"Nos partenaires de confiance":"Our trusted partners"}</h2><p>{fr?"Un écosystème de confiance au cœur de nos solutions.":"An ecosystem of trusted names behind the experience."}</p></div>
  <div className="bp-partner-controls"><button onClick={()=>move(-1)} aria-label={fr?"Défiler vers la gauche":"Scroll left"}><ChevronLeft size={19}/></button><button onClick={()=>setPaused(v=>!v)} aria-label={paused?(fr?"Reprendre":"Resume"):(fr?"Mettre en pause":"Pause")}>{paused?<Play size={16}/>:<Pause size={16}/>}</button><button onClick={()=>move(1)} aria-label={fr?"Défiler vers la droite":"Scroll right"}><ChevronRight size={19}/></button></div></div>
  <div className="bp-partner-viewport" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setPaused(false)}}>
   <div className="bp-partner-track" ref={scroller} tabIndex={0} aria-label={fr?"Carrousel des partenaires":"Partner logo carousel"}>{[...logos,...logos].map((logo,i)=><div className="bp-partner-logo" key={i} aria-hidden={i>=logos.length}><Image src={"/assets/partners/"+logo.file} alt={i<logos.length?logo.name:""} width={160} height={72} sizes="160px" unoptimized/></div>)}</div>
  </div>
 </section>
}
