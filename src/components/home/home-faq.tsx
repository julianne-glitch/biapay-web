import "./home-faq.css";

type Locale = "fr" | "en";

const faq = {
  fr: [
    {
      question: "Quels moyens de paiement mes clients peuvent-ils utiliser ?",
      answer:
        "BIAPAY peut réunir plusieurs moyens d’encaissement, comme le Mobile Money, les cartes bancaires, les wallets et les virements. Les options disponibles dépendent du pays et de la configuration de votre compte.",
    },
    {
      question: "Où retrouver les paiements reçus ?",
      answer:
        "Les paiements traités avec BIAPAY sont centralisés dans votre Wallet BIAPAY, pour vous aider à suivre vos encaissements au même endroit.",
    },
    {
      question: "Puis-je encaisser sans site web ?",
      answer:
        "Oui. Avec Paylink, créez un lien de paiement et partagez-le directement avec votre client.",
    },
    {
      question: "Puis-je accepter des paiements en magasin ?",
      answer:
        "BIAPAY propose des parcours adaptés au commerce physique, notamment le paiement par QR. Les options disponibles dépendent de votre pays et de la configuration de votre compte.",
    },
    {
      question: "Les mêmes moyens de paiement sont-ils disponibles partout ?",
      answer:
        "Non. La disponibilité varie selon le pays, les prestataires et la configuration de votre compte. Contactez notre équipe pour vérifier les options adaptées à votre activité.",
    },
    {
      question: "Comment commencer avec BIAPAY ?",
      answer:
        "Créez votre compte marchand ou contactez notre équipe pour échanger sur votre activité et les moyens d’encaissement adaptés à vos besoins.",
    },
  ],
  en: [
    {
      question: "Which payment methods can my customers use?",
      answer:
        "BIAPAY can bring together different ways to get paid, including Mobile Money, bank cards, wallets and transfers. Available options depend on your country and account configuration.",
    },
    {
      question: "Where can I find the payments I receive?",
      answer:
        "Payments processed with BIAPAY are centralized in your BIAPAY Wallet, helping you track your collections in one place.",
    },
    {
      question: "Can I accept payments without a website?",
      answer:
        "Yes. With Paylink, create a payment link and share it directly with your customer.",
    },
    {
      question: "Can I accept payments in-store?",
      answer:
        "BIAPAY offers flows suited to in-store commerce, including QR payments. Available options depend on your country and account configuration.",
    },
    {
      question: "Are the same payment methods available everywhere?",
      answer:
        "No. Availability varies by country, provider and account configuration. Contact our team to check the options that fit your business.",
    },
    {
      question: "How do I get started with BIAPAY?",
      answer:
        "Create a merchant account or contact our team to discuss your business and the collection methods that fit your needs.",
    },
  ],
} as const;

export function HomeFaq({ locale }: { locale: Locale }) {
  return (
    <section className="bp-faq" aria-labelledby="bp-faq-title">
      <div className="bp-faq-layout">
        <div className="bp-faq-heading">
          <h2 id="bp-faq-title">
            {locale === "fr" ? "Questions fréquentes" : "Frequently asked questions"}
          </h2>
          <p>
            {locale === "fr"
              ? "Les réponses pour choisir vos moyens d’encaissement et démarrer avec BIAPAY."
              : "Answers to help you choose how to get paid and get started with BIAPAY."}
          </p>
        </div>
        <div className="bp-faq-list">
          {faq[locale].map(({ question, answer }, index) => (
            <details className="bp-faq-item" key={question} open={index === 0}>
              <summary>
                <span>{question}</span>
                <span className="bp-faq-toggle" aria-hidden="true" />
              </summary>
              <div className="bp-faq-answer">
                <p>{answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
