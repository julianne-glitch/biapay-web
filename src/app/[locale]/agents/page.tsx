import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  FileCheck2,
  LayoutDashboard,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";
import { isLocale } from "@/lib/shell-nav";
import { PageTransition } from "@/components/layout/page-transition";
import { AgentImagePreview } from "./agent-image-preview";
import "./agents.css";
import "../hero-photo-backgrounds.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const fr = locale === "fr";

  return {
    title: fr ? "Agents BIAPAY | Rejoignez notre réseau" : "BIAPAY Agents | Join our network",
    description: fr
      ? "Rejoignez le réseau d'agents BIAPAY : accompagnez l'enrôlement des clients, les dossiers KYC/KYB et le suivi de votre activité."
      : "Join the BIAPAY agent network: support client enrollment, KYC/KYB files and activity tracking.",
  };
}

export default async function AgentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const fr = locale === "fr";
  const features = [
    {
      image: "reg-requests.png",
      alt: fr ? "Liste des demandes d'inscription dans l'espace Agent BIAPAY" : "Registration requests list in the BIAPAY Agent portal",
      title: fr ? "Vos demandes, en vue" : "Every request in view",
      description: fr
        ? "Retrouvez les demandes d'inscription et gardez le fil de leur traitement depuis votre espace."
        : "Review registration requests and follow their handling from your workspace.",
    },
    {
      image: "profile.png",
      alt: fr ? "Profil client dans l'espace Agent BIAPAY" : "Customer profile in the BIAPAY Agent portal",
      title: fr ? "Un profil mieux suivi" : "A clearer customer profile",
      description: fr
        ? "Consultez les informations du profil client pour accompagner son dossier."
        : "Review customer profile information as you support their application.",
    },
    {
      image: "wallet.png",
      alt: fr ? "Vue du wallet dans l'espace Agent BIAPAY" : "Wallet view in the BIAPAY Agent portal",
      title: fr ? "Le wallet sous contrôle" : "Your wallet, in view",
      description: fr
        ? "Accédez à la vue wallet présentée dans votre espace Agent."
        : "Access the wallet view shown in your Agent workspace.",
    },
    {
      image: "trans-history.png",
      alt: fr ? "Historique des transactions dans l'espace Agent BIAPAY" : "Transaction history in the BIAPAY Agent portal",
      title: fr ? "L'historique à portée de main" : "Transaction history at hand",
      description: fr
        ? "Retrouvez les transactions affichées pour garder une vue claire sur l'activité."
        : "Review the transactions shown to keep activity in sight.",
    },
  ];

  const kycScreens = [
    { image: "kyc1.png", alt: fr ? "Capture d'écran du parcours KYC BIAPAY" : "Screenshot from the BIAPAY KYC flow" },
    { image: "kyc2.png", alt: fr ? "Capture d'écran du parcours KYC BIAPAY" : "Screenshot from the BIAPAY KYC flow" },
    { image: "kyc3.png", alt: fr ? "Capture d'écran du parcours KYC BIAPAY" : "Screenshot from the BIAPAY KYC flow" },
    { image: "kyc5.png", alt: fr ? "Capture d'écran du parcours KYC BIAPAY" : "Screenshot from the BIAPAY KYC flow" },
    { image: "kyc6.png", alt: fr ? "Capture d'écran du parcours KYC BIAPAY" : "Screenshot from the BIAPAY KYC flow" },
  ];

  const steps = [
    {
      number: "01",
      title: fr ? "Soumettez votre demande" : "Submit your application",
      description: fr
        ? "Présentez votre profil et transmettez les informations nécessaires à l'étude de votre dossier."
        : "Share your profile and submit the information needed to review your application.",
    },
    {
      number: "02",
      title: fr ? "Accompagnez les clients" : "Enroll and support clients",
      description: fr
        ? "Aidez les particuliers et les entreprises dans leur enrôlement et la soumission des pièces KYC/KYB."
        : "Help individuals and businesses enroll and submit their KYC/KYB documents.",
    },
    {
      number: "03",
      title: fr ? "Suivez votre activité" : "Track your activity",
      description: fr
        ? "Consultez les opérations et les commissions calculées selon les règles de votre programme Agent."
        : "Review operations and commissions calculated under your Agent program terms.",
    },
  ];

  const trustItems = [
    {
      number: "01",
      title: fr ? "Accès selon les rôles" : "Role-based access",
      description: fr
        ? "Les accès aux informations et aux opérations dépendent du rôle attribué à chaque utilisateur."
        : "Access to information and operations depends on each user's assigned role.",
    },
    {
      number: "02",
      title: fr ? "Opérations suivies" : "Traceable operations",
      description: fr
        ? "Les opérations réalisées dans la plateforme sont suivies dans l'espace de gestion."
        : "Operations performed on the platform can be followed in the management space.",
    },
    {
      number: "03",
      title: fr ? "Dossiers KYC/KYB" : "KYC/KYB files",
      description: fr
        ? "Les dossiers transmis sont soumis au processus de vérification BIAPAY avant activation."
        : "Submitted files are subject to BIAPAY's review process before activation.",
    },
  ];

  return (
    <PageTransition>
      <div className="agents-page">
      <section className="agents-hero" aria-labelledby="agents-title">
        <div className="agents-container agents-hero-grid">
          <div className="agents-hero-copy">
            <h1 id="agents-title">
              {fr ? (
                <>
                  Enrôlez des clients.
                  <br />
                  Collectez les paiements.
                  <em> Développez-vous.</em>
                </>
              ) : (
                <>
                  Enroll clients.
                  <br />
                  Collect payments.
                  <em> Grow every week.</em>
                </>
              )}
            </h1>
            <p className="agents-hero-lead">
              {fr
                ? "Rejoignez le réseau BIAPAY : accompagnez l'ouverture de comptes, les dossiers KYC/KYB et le suivi des opérations depuis votre espace Agent."
                : "Join the BIAPAY network: support account enrollment, KYC/KYB files and activity tracking from your Agent space."}
            </p>
          </div>
          <div className="agents-dashboard-shot">
            <AgentImagePreview
              src="/assets/biapay-agent-screen/dashboard.png"
              alt={fr ? "Tableau de bord de l'espace Agent BIAPAY" : "BIAPAY Agent workspace dashboard"}
              className="agents-dashboard-window"
              openLabel={fr ? "Agrandir" : "Enlarge"}
              closeLabel={fr ? "Fermer l'image" : "Close image"}
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <span className="agents-dashboard-caption">
              <span className="agents-dashboard-caption-icon"><LayoutDashboard size={19} aria-hidden="true" /></span>
              <span>
                <small>{fr ? "VOTRE ESPACE DE PILOTAGE" : "YOUR CONTROL CENTER"}</small>
                <strong>{fr ? "Tout commence ici." : "Your work starts here."}</strong>
              </span>
            </span>
            <span className="agents-dashboard-index">BIAPAY / AGENT</span>
          </div>
        </div>
        <div className="agents-container agents-proof">
          <span><Users size={17} aria-hidden="true" />{fr ? "Enrôlement clients" : "Client enrollment"}</span>
          <span><FileCheck2 size={17} aria-hidden="true" />KYC / KYB</span>
          <span><WalletCards size={17} aria-hidden="true" />{fr ? "Suivi des opérations" : "Activity tracking"}</span>
        </div>
      </section>

      <section id="agents-how-it-works" className="agents-steps-section">
        <div className="agents-container">
          <div className="agents-section-heading">
            <span className="agents-kicker">{fr ? "LE PARCOURS" : "HOW IT WORKS"}</span>
            <h2>{fr ? <>De l&apos;inscription à <em>votre activité.</em></> : <>From sign-up to <em>your first activity.</em></>}</h2>
            <p>
              {fr
                ? "Un parcours conçu pour vous accompagner à chaque étape, de votre demande au suivi de vos opérations."
                : "A guided path to support you at each stage, from your application to tracking your operations."}
            </p>
          </div>
          <div className="agents-steps-grid">
            {steps.map((step) => (
              <article className="agents-step" key={step.number}>
                <span className="agents-step-number">{step.number}</span>
                <div className="agents-step-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-features-section">
        <div className="agents-container">
          <div className="agents-section-heading agents-section-heading-left">
            <span className="agents-kicker">{fr ? "GUIDE DE L'ESPACE AGENT" : "YOUR AGENT WORKSPACE"}</span>
            <h2>
              {fr ? <>Moins de recherche.<br /><em>Plus d&apos;action.</em></> : <>Less searching.<br /><em>More doing.</em></>}
            </h2>
            <p>
              {fr
                ? "Un aperçu concret des écrans qui accompagnent les demandes, les profils et le suivi des opérations."
                : "A real look at the screens for handling requests, customer profiles and transaction activity."}
            </p>
          </div>
          <div className="agents-feature-grid">
            {features.map(({ image, alt, title, description }, index) => (
              <article className="agents-feature" key={title}>
                <div className="agents-feature-image">
                  <AgentImagePreview
                    src={`/assets/biapay-agent-screen/${image}`}
                    alt={alt}
                    className="agents-feature-image-preview"
                    openLabel={fr ? "Agrandir" : "Enlarge"}
                    closeLabel={fr ? "Fermer l'image" : "Close image"}
                    sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 30vw"
                  />
                  <span className="agents-feature-number">0{index + 1}</span>
                </div>
                <div className="agents-feature-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-kyc-section">
        <div className="agents-container">
          <div className="agents-kyc-heading">
            <span className="agents-kicker">{fr ? "DEMANDE & VÉRIFICATION" : "APPLICATION & VERIFICATION"}</span>
            <h2>{fr ? <>Un dossier avance.<br /><em>Vous gardez le fil.</em></> : <>Applications move forward.<br /><em>You stay in the loop.</em></>}</h2>
            <p>
              {fr
                ? "Parcourez les écrans du parcours KYC/KYB et accompagnez la transmission des informations nécessaires à l'examen des dossiers."
                : "Explore the KYC/KYB screens and support the submission of information required for application review."}
            </p>
          </div>
          <div className="agents-kyc-gallery">
            {kycScreens.map((screen, index) => (
              <figure className="agents-kyc-screen" key={screen.image}>
                <AgentImagePreview
                  src={`/assets/biapay-agent-screen/${screen.image}`}
                  alt={screen.alt}
                  className="agents-kyc-screen-preview"
                  openLabel={fr ? "Agrandir" : "Enlarge"}
                  closeLabel={fr ? "Fermer l'image" : "Close image"}
                  sizes="(max-width: 680px) 72vw, 25vw"
                />
                <figcaption>{fr ? `ÉCRAN ${String(index + 1).padStart(2, "0")}` : `SCREEN ${String(index + 1).padStart(2, "0")}`}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-trust-section">
        <div className="agents-container">
          <div className="agents-section-heading agents-section-heading-left">
            <span className="agents-kicker">{fr ? "CONFIANCE & CONTRÔLE" : "TRUST & CONTROL"}</span>
            <h2>
              {fr ? <>Un réseau organisé.<br /><em>Des opérations suivies.</em></> : <>A connected network.<br /><em>Traceable operations.</em></>}
            </h2>
          </div>
          <div className="agents-trust-grid">
            {trustItems.map((item) => (
              <article key={item.number} className="agents-trust-card">
                <span>{item.number}</span>
                <ShieldCheck size={22} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-cta-section">
        <div className="agents-container agents-cta-panel">
          <div>
            <span className="agents-kicker">{fr ? "REJOIGNEZ LE RÉSEAU BIAPAY" : "JOIN THE BIAPAY NETWORK"}</span>
            <h2>
              {fr ? <>Prêt à devenir<br /><em>Agent BIAPAY ?</em></> : <>Ready to become<br /><em>a BIAPAY Agent?</em></>}
            </h2>
            <p>
              {fr
                ? "Parlez à notre équipe pour connaître les étapes d'inscription et les conditions du programme Agent."
                : "Talk to our team about the application process and Agent program terms."}
            </p>
          </div>
          <Link href="http://207.180.233.45:3000/" className="agents-primary">
            {fr ? "Devenir agent BIAPAY" : "Become a BIAPAY Agent"}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="agents-container agents-disclaimer">
          {fr
            ? "Les opérations, fonctions disponibles et modalités de commission dépendent de votre pays, des services activés et des conditions BIAPAY applicables à votre compte."
            : "Available operations, features and commission terms depend on your country, enabled services and the BIAPAY terms that apply to your account."}
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
