"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChartNoAxesCombined,
  Check,
  Info,
  WalletCards,
} from "lucide-react";
import { MerchantStory } from "./merchant-narrative";
import "./pricing-experience.css";
import "./merchant-narrative.css";

const plans = [
  { name: "Starter", price: 900, pos: "3", users: "2", currencies: "XAF", settle: "Mon / Wed / Fri", local: "1.5%", cards: "2.75%", wallets: "2.75%", bank: "1.50%", biapay: "0.5%" },
  { name: "Advanced", price: 4900, pos: "10", users: "5", currencies: "XAF, EUR, USD", settle: "Daily", local: "1.5%", cards: "2.75%", wallets: "2.75%", bank: "1.50%", biapay: "0.5%" },
  { name: "Premium", price: 49900, pos: "20", users: "10", currencies: "XAF, EUR, USD", settle: "Real-time*", local: "1.5%", cards: "2.50%", wallets: "2.50%", bank: "1.50%", biapay: "0.5%" },
  { name: "Privilege", price: null, pos: "Unlimited", users: "Unlimited", currencies: "All available", settle: "By agreement", local: "Custom", cards: "Custom", wallets: "Custom", bank: "Custom", biapay: "Custom" },
];

type Plan = (typeof plans)[number];
type CompareRow = {
  en: string;
  fr: string;
  get: (plan: Plan, money: (amount: number) => string) => string;
};

const compareRows: CompareRow[] = [
  { en: "Monthly subscription", fr: "Abonnement mensuel", get: (plan, money) => plan.price === null ? "On request" : `${money(plan.price)} XAF` },
  { en: "Point-of-sale locations", fr: "Points de vente", get: (plan) => plan.pos },
  { en: "Included sub-users", fr: "Sous-utilisateurs inclus", get: (plan) => plan.users },
  { en: "Transaction currencies", fr: "Devises de transaction", get: (plan) => plan.currencies },
  { en: "Settlement frequency", fr: "Fréquence de règlement", get: (plan) => plan.settle },
  { en: "Local mobile money fee", fr: "Frais mobile money local", get: (plan) => plan.local },
  { en: "Card payment fee", fr: "Frais de paiement par carte", get: (plan) => plan.cards },
  { en: "International wallet fee", fr: "Frais des portefeuilles internationaux", get: (plan) => plan.wallets },
  { en: "Online banking fee", fr: "Frais banque en ligne", get: (plan) => plan.bank },
  { en: "BIAPAY mobile payment fee", fr: "Frais mobile BIAPAY", get: (plan) => plan.biapay },
];

const heroImages = [
  "/assets/hero/handsome-african-supermarket-salesperson-smiling-looking-camera-while-holding-cellphone_536628-1180.jpg",
  "/assets/hero/photo-black-african-man-having-phone-conversation-while-shopping-store_536628-757.jpg",
  "/assets/hero/male-fashion-designer-leaning-rack-clothes_13339-111552.jpg",
  "/assets/hero/artisan-packaging-handmade-soap-products-workshop_1203138-207335.jpg",
  "/assets/hero/portrait-beautiful-african-american-smiling-cashier-lady-working-grocery-store-looking-camera_505521-561.jpg",
];

export function PricingExperience({ locale }: { locale: "en" | "fr" }) {
  const fr = locale === "fr";
  const [compare, setCompare] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(
      () => setHeroImageIndex((index) => (index + 1) % heroImages.length),
      3000,
    );
    return () => window.clearInterval(interval);
  }, []);

  const money = (amount: number) => new Intl.NumberFormat(fr ? "fr-FR" : "en-US").format(amount);
  const localizePlanValue = (value: string) => {
    if (!fr) return value;
    const translations: Record<string, string> = {
      Unlimited: "Illimité",
      "All available": "Toutes disponibles",
      "Mon / Wed / Fri": "Lun. / mer. / ven.",
      Daily: "Quotidien",
      "Real-time*": "Temps réel*",
      "By agreement": "Sur accord",
      Custom: "Personnalisé",
    };
    return translations[value] ?? value;
  };

  return (
    <div className="px-page">
      <section className="px-hero" aria-labelledby="px-hero-title">
        <div className="px-hero-background" aria-hidden="true">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`px-hero-image${index === heroImageIndex ? " is-active" : ""}`}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>
        <div className="px-container px-hero-inner">
          <h1 id="px-hero-title">
            {fr ? (
              <><span className="px-hero-first-line">Recevoir un paiement ne devrait pas</span><br /><em>compliquer votre journée.</em></>
            ) : (
              <><span className="px-hero-first-line">Getting paid should not</span><br /><em>complicate your day.</em></>
            )}
          </h1>
          <p>
            {fr
              ? "Quand les paiements se dispersent, chaque étape demande plus d'attention. Et si le parcours pouvait être plus clair ?"
              : "When payments are spread across different places, every step needs more attention. What if the process could be clearer?"}
          </p>
          <div className="px-hero-actions">
            <a href="#plans" className="px-primary">
              {fr ? "Découvrir les formules" : "Explore plans"} <ArrowRight size={17} />
            </a>
            <Link href={`/${locale}/contact`} className="px-secondary">
              {fr ? "Parler à un conseiller" : "Speak with our team"} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <MerchantStory locale={locale} />

      <section id="plans" className="px-plans" aria-labelledby="px-plans-title">
        <div className="px-container">
          <div className="px-heading">
            <div>
              <h2 id="px-plans-title">
                {fr ? "Choisissez le forfait qui vous correspond." : "Choose the plan that fits your business."}
              </h2>
            </div>
          </div>

          <div className="px-plan-grid">
            {plans.map((plan, index) => (
              <article key={plan.name} className={`px-plan px-plan-${index}`}>
                <div className="px-plan-top">
                  <h3>{plan.name}</h3>
                  <p>
                    {[
                      fr ? "Pour commencer à encaisser" : "Start collecting payments",
                      fr ? "Pour les activités en croissance" : "For growing businesses",
                      fr ? "Pour les opérations à plus grande échelle" : "For larger-scale operations",
                      fr ? "Une offre adaptée à vos besoins" : "Tailored to your requirements",
                    ][index]}
                  </p>
                  <div className="px-price">
                    {plan.price === null ? (
                      <strong className="px-onrequest">{fr ? "Sur devis" : "On request"}</strong>
                    ) : (
                      <>
                        <strong>{money(plan.price)}</strong>
                        <span>XAF <small>/ {fr ? "mois" : "month"}</small></span>
                      </>
                    )}
                  </div>
                </div>
                <div className="px-plan-features">
                  <span><Check size={15} />{localizePlanValue(plan.pos)} {fr ? "points de vente" : "POS locations"}</span>
                  <span><Check size={15} />{localizePlanValue(plan.users)} {fr ? "sous-utilisateurs" : "sub-users"}</span>
                  <span><Check size={15} />{localizePlanValue(plan.currencies)}</span>
                  <span>
                    <Check size={15} />
                    {fr ? "Règlement : " : "Settlement: "}
                    {index === 0
                      ? (fr ? "lun./mer./ven." : "Mon/Wed/Fri")
                      : index === 1
                        ? (fr ? "quotidien" : "daily")
                        : index === 2
                          ? (fr ? "temps réel*" : "real-time*")
                          : (fr ? "sur accord" : "by agreement")}
                  </span>
                </div>
                <Link
                  href={plan.price === null ? `/${locale}/contact` : `/${locale}/register`}
                  className="px-plan-action"
                >
                  {plan.price === null
                    ? (fr ? "Demander une offre" : "Request a quote")
                    : (fr ? "Créer mon compte" : "Create an account")}
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>

          <div className="px-disclaimer">
            <Info size={17} />
            <p>
              {fr
                ? "Les montants affichés proviennent de la grille tarifaire du site BIAPAY existant. Ils sont hors TVA et peuvent avoir changé. La validation KYC est nécessaire pour les transactions réelles. Certaines fonctionnalités et méthodes de paiement sont soumises à disponibilité."
                : "Figures are from the pricing schedule on BIAPAY's existing website. They exclude VAT and may have changed. KYC approval is required for live transactions. Some features and payment methods are subject to availability."}
            </p>
          </div>
        </div>
      </section>

      <section className="px-compare" aria-labelledby="px-compare-title">
        <div className="px-container">
          <div className="px-heading">
            <div>
              <h2 id="px-compare-title">{fr ? "Les détails comptent." : "Details make the difference."}</h2>
            </div>
            <button
              type="button"
              onClick={() => setCompare((value) => !value)}
              className="px-compare-toggle"
              aria-expanded={compare}
            >
              {compare
                ? (fr ? "Masquer le comparatif" : "Hide comparison")
                : (fr ? "Afficher le comparatif" : "Compare all plans")}
              <ArrowRight size={17} />
            </button>
          </div>

          {compare && (
            <div className="px-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>{fr ? "Service" : "Feature"}</th>
                    {plans.map((plan) => <th key={plan.name}>{plan.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.en}>
                      <th scope="row">{fr ? row.fr : row.en}</th>
                      {plans.map((plan) => (
                        <td key={plan.name}>
                          {row.en === "Monthly subscription" && plan.price === null
                            ? (fr ? "Sur devis" : "On request")
                            : localizePlanValue(row.get(plan, money))}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="px-notes">
            <h3>{fr ? "À savoir avant de choisir" : "Before you choose"}</h3>
            <div className="px-notes-grid">
              <div>
                <WalletCards size={23} />
                <strong>{fr ? "Frais de transaction" : "Transaction fees"}</strong>
                <p>
                  {fr
                    ? "Par défaut, les frais sont supportés par le commerçant, sauf configuration différente."
                    : "By default, fees are borne by the merchant unless configured otherwise."}
                </p>
              </div>
              <div>
                <ChartNoAxesCombined size={23} />
                <strong>{fr ? "Délais de règlement" : "Settlement timing"}</strong>
                <p>
                  {fr
                    ? "Les virements bancaires peuvent prendre jusqu'à deux jours ouvrables. Le temps réel indiqué pour Premium concerne les comptes mobile money ou wallets admissibles."
                    : "Bank transfers may take up to two working days. Premium real-time settlement is specified for eligible mobile money accounts or wallets."}
                </p>
              </div>
              <div>
                <Building2 size={23} />
                <strong>{fr ? "Activation du compte" : "Account activation"}</strong>
                <p>
                  {fr
                    ? "Un compte de test est attribué à l'inscription ; l'approbation KYC est requise pour les transactions réelles."
                    : "A test plan is assigned at registration; KYC approval is required for live transactions."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
