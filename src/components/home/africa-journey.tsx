"use client";
import {useEffect,useMemo,useState} from "react";
import {AnimatePresence,motion,useReducedMotion} from "motion/react";
import {geoMercator,geoPath,geoCentroid,type GeoPermissibleObjects} from "d3-geo";
import {feature} from "topojson-client";
import world from "world-atlas/countries-110m.json";
import {ArrowUpRight,ArrowRight,CheckCircle2,MapPin,Pause,Play,ShoppingBag,Ticket,Code2,ReceiptText} from "lucide-react";
import "./africa-journey.css";
import "./africa-map-premium.css";
const destinations=[
 {city:"Douala",country:"Cameroun",enCountry:"Cameroon",code:"CM",lat:4.05,lng:9.7,fr:"Un commerçant partage un lien de paiement.",en:"A merchant shares a payment link.",amount:"25 000 XAF",type:"merchant"},
 {city:"Abidjan",country:"Côte d’Ivoire",enCountry:"Côte d’Ivoire",code:"CI",lat:5.35,lng:-4.0,fr:"Un événement ouvre sa billetterie.",en:"An event opens its ticket office.",amount:"15 000 XOF",type:"event"},
 {city:"Dakar",country:"Sénégal",enCountry:"Senegal",code:"SN",lat:14.69,lng:-17.44,fr:"Une équipe connecte son application.",en:"A team connects its application.",amount:"API CONNECTÉE",type:"developer"},
 {city:"Kinshasa",country:"RDC",enCountry:"DR Congo",code:"CD",lat:-4.32,lng:15.31,fr:"Une entreprise prépare une facture.",en:"A business prepares an invoice.",amount:"120 000 CDF",type:"business"}
] as const;
type Country={type:"Feature";geometry:GeoPermissibleObjects;properties:Record<string,unknown>;id?:string|number};
function AfricaMap({active,reduce}:{active:number;reduce:boolean|null}){
 const {countries,projection}=useMemo(()=>{
  const collection=feature(world as never,(world as {objects:{countries:unknown}}).objects.countries as never) as unknown as {features:Country[]};
  const africa=collection.features.filter(f=>{const [lon,lat]=geoCentroid(f.geometry);return lon>=-19&&lon<=53&&lat>=-35&&lat<=38&&!new Set(["682","887","512","784","634","400","376","422","760","368"]).has(String(f.id))});
  const p=geoMercator().fitExtent([[30,18],[515,450]],{type:"FeatureCollection",features:africa} as never);
  return {countries:africa,projection:p};
 },[]);
 const path=geoPath(projection);const selected=destinations[active];const point=projection([selected.lng,selected.lat])||[250,200];
 return <svg className="bp-africa-map" viewBox="0 0 540 480" role="img" aria-label="Geographically based map of Africa"><defs><linearGradient id="bp-map-fill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F4F8EF"/><stop offset="1" stopColor="#D9E8D5"/></linearGradient><filter id="bp-map-glow"><feGaussianBlur stdDeviation="7"/></filter></defs>
  {countries.map((country,i)=><path key={i} d={path(country.geometry)||""} fill="url(#bp-map-fill)" stroke="#A7C5B0" strokeWidth=".8" opacity=".98"/>)}
  {destinations.map((city,i)=>{const pt=projection([city.lng,city.lat]);if(!pt)return null;return <g key={city.code}><circle cx={pt[0]} cy={pt[1]} r={i===active?10:4} fill={i===active?"#8FCC31":"#2F6C52"} opacity={i===active?.24:.5}/><circle cx={pt[0]} cy={pt[1]} r={i===active?5:2.5} fill={i===active?"#79B82D":"#3D805B"} stroke="#fff" strokeWidth="1.6"/></g>})}
  <motion.circle key={selected.code+"glow"} cx={point[0]} cy={point[1]} r="20" fill="#93CF42" opacity=".28" filter="url(#bp-map-glow)" initial={reduce?false:{opacity:0,scale:.6}} animate={{opacity:.35,scale:1}} transition={{duration:.6}}/>
  <motion.circle key={selected.code} cx={point[0]} cy={point[1]} r="9" fill="none" stroke="#529E28" strokeWidth="2" initial={reduce?false:{r:5,opacity:1}} animate={{r:23,opacity:0}} transition={{duration:2,repeat:reduce?0:Infinity}}/>
 </svg>
}
export function AfricaJourney({locale}:{locale:"fr"|"en"}){
 const fr=locale==="fr";const [active,setActive]=useState(0);const [playing,setPlaying]=useState(true);const reduce=useReducedMotion();
 useEffect(()=>{if(!playing||reduce)return;const timer=window.setInterval(()=>setActive(v=>(v+1)%destinations.length),4600);return()=>window.clearInterval(timer)},[playing,reduce]);
 const selected=destinations[active];const Icon=selected.type==="merchant"?ShoppingBag:selected.type==="event"?Ticket:selected.type==="developer"?Code2:ReceiptText;
 return <section className="bp-africa bp-africa-v2" aria-labelledby="bp-africa-title"><div className="bp-shell bp-africa-inner">
  <div className="bp-africa-copy">
  <h2 id="bp-africa-title">{fr?<>Votre ambition<br/>n’a pas <em>de frontières.</em></>:<>Your ambition<br/>has <em>no borders.</em></>}</h2>
  <p>{fr?"À chaque idée son prochain marché. Explorez comment les liens de paiement, la billetterie, la facturation et les API BIAPAY accompagnent différents parcours.":"Every idea has a next market. Explore how BIAPAY payment links, ticketing, invoicing and APIs fit different business journeys."}</p>
  <div className="bp-africa-route" role="tablist" aria-label={fr?"Explorer les scénarios par ville":"Explore use cases by city"}>{destinations.map((place,i)=><button key={place.code} role="tab" aria-selected={i===active} className={i===active?"selected":""} onClick={()=>{setActive(i);setPlaying(false)}}><span className="bp-route-dot"/>{place.city}</button>)}</div>
  <div className="bp-africa-caption"><span className="bp-caption-icon"><MapPin size={17}/></span><div><small>{fr?"UN EXEMPLE. MILLE POSSIBILITÉS.":"ONE EXAMPLE. ENDLESS POSSIBILITIES."}</small><AnimatePresence mode="wait"><motion.strong key={active} initial={reduce?false:{opacity:0,y:7}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-7}}>{fr?selected.fr:selected.en}</motion.strong></AnimatePresence></div></div>
  <a href={fr?"/fr/solutions":"/en/solutions"} className="bp-africa-link">{fr?"Explorer les solutions":"Explore solutions"} <ArrowUpRight size={17}/></a>
  </div>
  <div className="bp-africa-art bp-africa-map-art"><div className="bp-map-grid"/><div className="bp-map-head"><span className="bp-map-dot"/> BIAPAY <span>{fr?"UNE AFRIQUE DE POSSIBILITÉS":"A CONTINENT OF POSSIBILITIES"}</span></div>
   <AfricaMap active={active} reduce={reduce}/>
   <AnimatePresence mode="wait"><motion.div className="bp-map-transaction" key={selected.code} initial={reduce?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.35}}>
   <div className="bp-map-transaction-top"><span className="bp-map-icon"><Icon size={18}/></span><span>{selected.city}<small>{fr?selected.country:selected.enCountry}</small></span><CheckCircle2 size={17} color="#7DAF3B"/></div>
   <div className="bp-map-amount">{selected.amount}</div><div className="bp-map-transaction-foot">{fr?selected.fr:selected.en}<ArrowRight size={15}/></div>
   </motion.div></AnimatePresence>
   <div className="bp-map-footer"><span>{fr?"Parcours illustratifs":"Illustrative journeys"}</span><div><span>{String(active+1).padStart(2,"0")} / 04</span><button onClick={()=>setPlaying(v=>!v)} aria-label={playing?(fr?"Pause":"Pause"):(fr?"Lecture":"Play")}>{playing?<Pause size={15}/>:<Play size={15}/>}</button></div></div>
  </div>
 </div></section>
}
