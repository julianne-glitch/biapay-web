import {
  Code2,
  CreditCard,
  Link2,
  QrCode,
  ReceiptText,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "./shell-nav";

type LocalizedText = Record<Locale, string>;

export type SolutionDetailItem = {
  title: string;
  description: string;
};

export type SolutionDetail = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  sectionTitle: string;
  items: SolutionDetailItem[];
};

export type SolutionCatalogEntry = {
  id: string;
  slug: LocalizedText;
  icon: LucideIcon;
  image: string;
  title: LocalizedText;
  summary: LocalizedText;
  details: Record<Locale, SolutionDetail>;
};

export const solutionCatalog: SolutionCatalogEntry[] = [
  {
    id: "paylink",
    slug: { fr: "biapay-paylink", en: "biapay-paylink" },
    icon: Link2,
    image: "/assets/hero/customer.webp",
    title: { fr: "Paylink", en: "Paylink" },
    summary: {
      fr: "Créez un lien pour demander un paiement.",
      en: "Create a link to request payment.",
    },
    details: {
      fr: {
        eyebrow: "SOLUTION DE PAIEMENT · PAYLINK",
        title: "Un lien de paiement.",
        highlight: "Une demande simplifiée.",
        description:
          "Créez un lien à partager avec votre client pour faciliter une demande de paiement à distance. Les moyens proposés dépendent des options disponibles pour votre compte.",
        sectionTitle: "De la demande à l’encaissement",
        items: [
          {
            title: "Créez une demande",
            description: "Formulez le montant et l’objet du paiement à demander.",
          },
          {
            title: "Partagez le lien",
            description: "Transmettez-le au client par le canal de votre choix.",
          },
          {
            title: "Recevez les paiements",
            description:
              "Les encaissements reçus sont centralisés dans votre Wallet BIAPAY.",
          },
        ],
      },
      en: {
        eyebrow: "PAYMENT SOLUTION · PAYLINK",
        title: "One payment link.",
        highlight: "A simpler request.",
        description:
          "Create a link to share with your customer and simplify remote payment requests. Available payment methods depend on your account setup.",
        sectionTitle: "From request to collection",
        items: [
          {
            title: "Create a request",
            description: "Set out the amount and purpose of the requested payment.",
          },
          {
            title: "Share the link",
            description: "Send it to your customer through your preferred channel.",
          },
          {
            title: "Receive payments",
            description:
              "Payments received are centralized in your BIAPAY Wallet.",
          },
        ],
      },
    },
  },
  {
    id: "qr-payment",
    slug: { fr: "qr-code-payment", en: "qr-code-payment" },
    icon: QrCode,
    image: "/assets/hero/particular.jpg",
    title: { fr: "Paiement QR", en: "QR payments" },
    summary: {
      fr: "Une expérience pensée pour le commerce physique.",
      en: "Designed for in-person commerce.",
    },
    details: {
      fr: {
        eyebrow: "PAIEMENT EN POINT DE VENTE",
        title: "Le paiement au comptoir.",
        highlight: "Par QR code.",
        description:
          "Proposez le paiement QR à vos clients en magasin. Les moyens de paiement disponibles peuvent varier selon le pays et la configuration du marchand.",
        sectionTitle: "Un parcours pensé pour le commerce physique",
        items: [
          {
            title: "Présentez le QR code",
            description:
              "Mettez à disposition de votre client le point de départ du parcours de paiement.",
          },
          {
            title: "Laissez votre client payer",
            description:
              "Il suit les options de paiement disponibles pour votre activité.",
          },
          {
            title: "Centralisez l’encaissement",
            description:
              "Les paiements reçus sont regroupés dans votre Wallet BIAPAY.",
          },
        ],
      },
      en: {
        eyebrow: "IN-PERSON PAYMENTS",
        title: "At the point of sale.",
        highlight: "Pay by QR code.",
        description:
          "Offer QR payments to customers in your store. Available payment methods may vary by country and merchant setup.",
        sectionTitle: "A journey designed for in-person commerce",
        items: [
          {
            title: "Present the QR code",
            description:
              "Give your customer a clear starting point for the payment journey.",
          },
          {
            title: "Let your customer pay",
            description:
              "They follow the payment options available for your business.",
          },
          {
            title: "Centralize collections",
            description:
              "Payments received are brought together in your BIAPAY Wallet.",
          },
        ],
      },
    },
  },
  {
    id: "online-invoicing",
    slug: { fr: "online-invoicing", en: "online-invoicing" },
    icon: ReceiptText,
    image: "/assets/hero/business.webp",
    title: { fr: "Facturation en ligne", en: "Online invoicing" },
    summary: {
      fr: "Simplifiez la gestion de vos demandes de paiement.",
      en: "Simplify your payment requests.",
    },
    details: {
      fr: {
        eyebrow: "FACTURATION EN LIGNE",
        title: "Organisez vos demandes.",
        highlight: "Facilitez le paiement.",
        description:
          "La facturation en ligne BIAPAY vous aide à présenter vos demandes de paiement de façon structurée et à simplifier les échanges avec vos clients.",
        sectionTitle: "Une demande claire, un parcours plus simple",
        items: [
          {
            title: "Structurez la demande",
            description:
              "Présentez les informations liées au règlement dans un format clair.",
          },
          {
            title: "Partagez les informations",
            description:
              "Transmettez à votre client les éléments nécessaires à sa demande de paiement.",
          },
          {
            title: "Retrouvez vos encaissements",
            description:
              "Les paiements reçus sont centralisés dans votre Wallet BIAPAY.",
          },
        ],
      },
      en: {
        eyebrow: "ONLINE INVOICING",
        title: "Organize your requests.",
        highlight: "Make payment simpler.",
        description:
          "BIAPAY online invoicing helps you present payment requests clearly and simplify the exchange with your customers.",
        sectionTitle: "A clear request for a simpler journey",
        items: [
          {
            title: "Structure your request",
            description:
              "Present payment details in a clear, organized format.",
          },
          {
            title: "Share the information",
            description:
              "Send your customer the information they need for the payment request.",
          },
          {
            title: "Find your collections",
            description:
              "Payments received are centralized in your BIAPAY Wallet.",
          },
        ],
      },
    },
  },
  {
    id: "event-ticketing",
    slug: {
      fr: "biapay-event-et-e-ticketing",
      en: "biapay-event-et-e-ticketing",
    },
    icon: Ticket,
    image: "/assets/hero/events.webp",
    title: {
      fr: "Événements & e-ticketing",
      en: "Events & e-ticketing",
    },
    summary: {
      fr: "Accompagnez vos événements, de la vente à l’entrée.",
      en: "Support events from ticket sales to entry.",
    },
    details: {
      fr: {
        eyebrow: "ÉVÉNEMENTS & BILLETTERIE",
        title: "Vendez vos billets.",
        highlight: "Accompagnez vos participants.",
        description:
          "Associez la billetterie en ligne et les billets électroniques pour accompagner la vente de billets et l’entrée à vos événements.",
        sectionTitle: "Du billet à l’expérience événementielle",
        items: [
          {
            title: "Présentez votre événement",
            description:
              "Organisez les informations de billetterie autour de votre événement.",
          },
          {
            title: "Accompagnez la réservation",
            description:
              "Proposez un parcours numérique aux participants qui réservent leur billet.",
          },
          {
            title: "Prolongez le parcours jusqu’à l’entrée",
            description:
              "L’e-ticketing accompagne le participant jusqu’à son accès à l’événement.",
          },
        ],
      },
      en: {
        eyebrow: "EVENTS & TICKETING",
        title: "Sell your tickets.",
        highlight: "Support your attendees.",
        description:
          "Bring online ticketing and electronic tickets together to support ticket sales and entry at your events.",
        sectionTitle: "From ticket purchase to event experience",
        items: [
          {
            title: "Present your event",
            description:
              "Organize ticketing information around your event.",
          },
          {
            title: "Support reservations",
            description:
              "Offer a digital journey to attendees reserving their tickets.",
          },
          {
            title: "Continue the journey to entry",
            description:
              "E-ticketing supports attendees through to event access.",
          },
        ],
      },
    },
  },
  {
    id: "split-settlement",
    slug: {
      fr: "reglement-fractionne",
      en: "reglement-fractionne",
    },
    icon: CreditCard,
    image: "/assets/hero/partner.webp",
    title: {
      fr: "Règlement fractionné",
      en: "Split settlement",
    },
    summary: {
      fr: "Explorez les options de répartition des règlements.",
      en: "Explore settlement distribution options.",
    },
    details: {
      fr: {
        eyebrow: "RÉPARTITION DES RÈGLEMENTS",
        title: "Répartissez les règlements.",
        highlight: "Selon votre organisation.",
        description:
          "Explorez les options de répartition des règlements pour les opérations qui impliquent plusieurs parties. Les modalités applicables sont à confirmer avec BIAPAY.",
        sectionTitle: "Un cadre adapté à vos opérations",
        items: [
          {
            title: "Identifiez les flux concernés",
            description:
              "Précisez les montants et les parties concernées par la répartition.",
          },
          {
            title: "Définissez les modalités",
            description:
              "Les règles dépendent de votre accord et de la configuration retenue.",
          },
          {
            title: "Validez votre parcours",
            description:
              "L’équipe BIAPAY peut confirmer les possibilités adaptées à votre activité.",
          },
        ],
      },
      en: {
        eyebrow: "SETTLEMENT DISTRIBUTION",
        title: "Split settlements.",
        highlight: "Around your business.",
        description:
          "Explore settlement distribution options for transactions involving multiple parties. Applicable terms should be confirmed with BIAPAY.",
        sectionTitle: "A framework for your operations",
        items: [
          {
            title: "Identify the relevant flows",
            description:
              "Specify the amounts and parties involved in the distribution.",
          },
          {
            title: "Define the terms",
            description:
              "Rules depend on your agreement and the selected configuration.",
          },
          {
            title: "Validate your journey",
            description:
              "The BIAPAY team can confirm which options fit your business.",
          },
        ],
      },
    },
  },
  {
    id: "api-integrations",
    slug: {
      fr: "integrations-api",
      en: "integrations-api",
    },
    icon: Code2,
    image: "/assets/hero/developer.webp",
    title: {
      fr: "API & intégrations",
      en: "API & integrations",
    },
    summary: {
      fr: "Des ressources pour connecter votre activité.",
      en: "Resources to connect your business.",
    },
    details: {
      fr: {
        eyebrow: "API & INTÉGRATIONS",
        title: "Connectez BIAPAY.",
        highlight: "À votre environnement.",
        description:
          "Explorez les options d’intégration pour les plateformes e-commerce et les sites personnalisés. La disponibilité des plugins et les prérequis sont à confirmer avec BIAPAY.",
        sectionTitle: "Des options selon votre plateforme",
        items: [
          {
            title: "Plateformes e-commerce",
            description:
              "Les options présentées incluent WooCommerce, PrestaShop, Shopify et Magento.",
          },
          {
            title: "Sites personnalisés",
            description:
              "Le guide BIAPAY mentionne des intégrations sur mesure pour des environnements Java, .NET et PHP.",
          },
          {
            title: "Documentation et assistance",
            description:
              "Contactez l’équipe pour confirmer la documentation à jour et l’accompagnement adapté.",
          },
        ],
      },
      en: {
        eyebrow: "API & INTEGRATIONS",
        title: "Connect BIAPAY.",
        highlight: "To your environment.",
        description:
          "Explore integration options for ecommerce platforms and custom websites. Plugin availability and requirements should be confirmed with BIAPAY.",
        sectionTitle: "Options for your platform",
        items: [
          {
            title: "Ecommerce platforms",
            description:
              "Options described include WooCommerce, PrestaShop, Shopify and Magento.",
          },
          {
            title: "Custom websites",
            description:
              "The BIAPAY guide mentions custom integrations for Java, .NET and PHP environments.",
          },
          {
            title: "Documentation and support",
            description:
              "Contact the team to confirm current documentation and the support available.",
          },
        ],
      },
    },
  },
];
