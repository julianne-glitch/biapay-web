"use client";

import "./premium-home.css";
import "./premium-collage.css";
import "./premium-refinement.css";
import "./africa-map-premium.css";
import "./landing-finish.css";
import "./developer-editorial.css";
import "./classic-home.css";
import "./hero-section.css";
import "./mobile-home.css";
import Image from "next/image";
import Link from "next/link";
import { HeroFlow, HeroDecor } from "./hero-flow";
import { useTranslations } from "next-intl";
import { accountLinks, developerDocsUrl } from "@/lib/shell-nav";
import { solutionCatalog } from "@/lib/solution-catalog";
import { PartnerCarousel } from "./partner-carousel";
import { HomeFaq } from "./home-faq";
import { ViewTransition, useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Link2, X, CheckCircle2, User } from "lucide-react"; import { motion, AnimatePresence } from "motion/react";

type Locale = "fr" | "en";
export function PremiumHome({ locale }: { locale: Locale }) {
    const fr = locale === "fr"; const hero = useTranslations("hero"); const [demo, setDemo] = useState(false); const [step, setStep] = useState(0);
    useEffect(() => { if (!demo) return; function onKey(e: KeyboardEvent) { if (e.key === "Escape") setDemo(false) } window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey) }, [demo]);
    const source = (slug: string) => slug === "developers" ? developerDocsUrl : `/${locale}/${slug === "payment-gateway" || slug === "payment-solutions" ? "solutions" : slug === "pricing-3" || slug === "pricing-2" ? "pricing" : slug === "about-biapay" ? "about" : slug === "contact" ? "contact" : "solutions"}`;
    return <main className="biapay-premium">
        <section className="bp-hero2" aria-labelledby="hero-title">
            <HeroDecor />
            <div className="bp-hero2-inner">
                <div className="bp-hero2-copy">
                    <h1 id="hero-title">
                        <span>{hero("title")}</span>
                        <em>
                            {hero("accent")}
                            <svg className="bp-hero2-underline" viewBox="0 0 240 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 10 C 50 3, 150 1, 238 8" /></svg>
                        </em>
                    </h1>
                    <p className="bp-lead2"><strong>{hero("leadStrong")}</strong> {hero("leadRest")}</p>
                    <div className="bp-hero2-actions">
                        <a className="bp-h2-primary" href={accountLinks.register}><User aria-hidden="true" strokeWidth={2.2} />{hero("cta1")} <ArrowRight size={17} aria-hidden="true" /></a>
                    </div>
                </div>
                <HeroFlow />
            </div>
        </section>

        <section className="bp-products" id="solutions"><div className="bp-shell"><div className="bp-section-top"><div><h2>{fr ? "Plusieurs façons d’encaisser. Une seule plateforme." : "More ways to get paid. One platform."}</h2></div></div><div className="bp-product-grid">{solutionCatalog.map((solution, i) => { const Icon = solution.icon; return <Link key={solution.id} href={`/${locale}/solutions/${solution.slug[locale]}`} transitionTypes={["solution-forward"]} className="bp-product-card"><ViewTransition name={`solution-image-${solution.id}`} share="morph" default="none"><Image className="bp-product-card-image" src={solution.image} alt="" fill sizes="(max-width: 520px) 100vw, (max-width: 800px) 50vw, 33vw" /></ViewTransition><span className="bp-product-number">0{i + 1}</span><div className="bp-product-icon"><Icon size={25} strokeWidth={1.6} /></div><h3>{solution.title[locale]}</h3><p>{solution.summary[locale]}</p><span className="bp-product-arrow"><ArrowUpRight size={20} /></span></Link> })}</div></div></section>
        <section className="bp-last-cta"><div className="bp-shell"><h2>{fr ? <>Et si votre prochaine<br /><em>grande idée commençait ici ?</em></> : <>What if your next<br /><em>big idea starts here?</em></>}</h2><a className="bp-btn-primary" href={source("contact")}>{fr ? "Parlons de votre projet" : "Let's talk about your project"} <ArrowRight size={18} /></a></div></section>
        <PartnerCarousel locale={locale} />
        <HomeFaq locale={locale} />
        <AnimatePresence>{demo && <motion.div className="bp-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => { if (e.target === e.currentTarget) setDemo(false) }}><motion.div className="bp-demo-modal" role="dialog" aria-modal="true" aria-label={fr ? "Démo interactive" : "Interactive demo"} initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 25, opacity: 0 }}><button className="bp-modal-close" onClick={() => setDemo(false)} aria-label="Close"><X size={22} /></button><span className="bp-section-label">BIAPAY · {fr ? "DÉMONSTRATION" : "DEMONSTRATION"}</span><h2>{fr ? "Découvrez le parcours Paylink" : "Explore the Paylink journey"}</h2><p className="bp-demo-disclaimer">{fr ? "Simulation illustrative uniquement. Aucun paiement réel n'est effectué." : "Illustrative simulation only. No real payment is processed."}</p><div className="bp-demo-steps"><span className={step >= 0 ? "on" : ""}>01 {fr ? "Créer" : "Create"}</span><span className={step >= 1 ? "on" : ""}>02 {fr ? "Partager" : "Share"}</span><span className={step >= 2 ? "on" : ""}>03 {fr ? "Terminer" : "Finish"}</span></div><div className="bp-demo-panel">{step === 0 ? <><Link2 size={34} /><h3>{fr ? "Créez un lien de paiement" : "Create a payment link"}</h3><p>{fr ? "Exemple : une boutique souhaite envoyer une demande de paiement à un client." : "Example: a shop wants to send a payment request to a customer."}</p></> : step === 1 ? <><ArrowUpRight size={34} /><h3>{fr ? "Partagez votre lien" : "Share your link"}</h3><p>{fr ? "Le commerçant partage le lien avec son client via son canal préféré." : "The merchant shares the link with their customer using their preferred channel."}</p></> : <><CheckCircle2 size={34} /><h3>{fr ? "Parcours terminé" : "Journey complete"}</h3><p>{fr ? "Vous avez exploré un parcours fictif Paylink. Aucun paiement n'a été envoyé." : "You explored a fictional Paylink flow. No payment was sent."}</p></>}</div><button className="bp-btn-primary bp-demo-next" onClick={() => step === 2 ? setDemo(false) : setStep(v => v + 1)}>{step === 2 ? (fr ? "Fermer" : "Close") : (fr ? "Continuer" : "Continue")} <ArrowRight size={17} /></button></motion.div></motion.div>}</AnimatePresence>
    </main>;
}
