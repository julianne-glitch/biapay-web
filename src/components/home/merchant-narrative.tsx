"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  ArrowDownToLine,
  ChartNoAxesCombined,
  CreditCard,
  Eye,
} from "lucide-react";

type MerchantNarrativeProps = {
  locale: "en" | "fr";
};

export function MerchantStory({ locale }: MerchantNarrativeProps) {
  const fr = locale === "fr";

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".px-story-reveal");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scenes = [
    {
      title: fr
        ? "Recevez vos paiements sans chercher"
        : "Get paid without the hassle",
      description: fr
        ? "Entre les demandes des clients et les différents moyens de paiement, recevoir un règlement ne devrait pas devenir une recherche sans fin."
        : "Between customer requests and different ways to pay, receiving a payment should not feel like a never-ending search.",
      image: "/assets/hero/pb-1.jpg",
      alt: fr
        ? "Commerçante dans sa boutique, concentrée sur son téléphone"
        : "Shop owner in her store, focused on her phone",
    },
    {
      title: fr
        ? "Une installation simple, sans complications"
        : "Simple setup, less hassle",
      description: fr
        ? "Comparer les options, comprendre la configuration et préparer l'intégration peut détourner votre attention de votre activité."
        : "Comparing options, understanding setup and preparing an integration can take focus away from running your business.",
      image: "/assets/hero/pb-2.jpg",
      alt: fr
        ? "Commerçant préoccupé dans sa boutique"
        : "Concerned shop owner in his store",
    },
    {
      title: fr
        ? "Gardez le contrôle de vos paiements"
        : "Stay in control of your payments",
      description: fr
        ? "Sans une meilleure visibilité sur les opérations, il devient plus difficile de suivre les paiements et de garder le contrôle."
        : "Without better visibility into operations, it becomes harder to follow payments and stay in control.",
      image: "/assets/hero/pb-3.jpg",
      alt: fr
        ? "Commerçante vérifiant son téléphone dans son atelier"
        : "Shop owner checking her phone in her workspace",
    },
  ];

  const benefits = [
    {
      Icon: CreditCard,
      title: fr ? "ENCAISSER" : "GET PAID",
      description: fr
        ? "Recevez les paiements depuis plusieurs canaux compatibles avec votre pays et votre compte."
        : "Receive payments through multiple channels compatible with your country and account.",
    },
    {
      Icon: ArrowDownToLine,
      title: fr ? "RETIRER" : "WITHDRAW",
      description: fr
        ? "Accédez à vos fonds via les moyens de retrait disponibles pour votre compte."
        : "Access your funds through the withdrawal methods available for your account.",
    },
    {
      Icon: ChartNoAxesCombined,
      title: fr ? "GÉRER" : "MANAGE",
      description: fr
        ? "Suivez vos transactions et simplifiez le suivi de votre activité."
        : "Track your transactions and simplify activity tracking.",
    },
    {
      Icon: Eye,
      title: fr ? "CONTRÔLER" : "STAY IN CONTROL",
      description: fr
        ? "Retrouvez vos opérations et gardez une meilleure visibilité sur vos paiements."
        : "Find your operations and gain better visibility into your payments.",
    },
  ];

  return (
    <>
      <section className="px-story" aria-labelledby="px-story-title">
        <div className="px-container">
          <div className="px-story-scenes">
            {scenes.map((scene, index) => (
              <article className="px-story-scene px-story-reveal" key={scene.title}>
                <div className="px-story-copy">
                  <h3>{scene.title}</h3>
                  <p>{scene.description}</p>
                </div>
                <div className={`px-story-visual${index % 2 === 1 ? " px-story-visual-reversed" : ""}`}>
                  <Image src={scene.image} alt={scene.alt} fill sizes="(max-width: 760px) 100vw, 52vw" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="px-benefits" aria-labelledby="px-benefits-title">
        <div className="px-container">
          <div className="px-benefits-heading px-story-reveal">
            <h2 id="px-benefits-title">
              {fr ? "Quatre façons d'avancer, depuis un même espace." : "Four ways forward, from one place."}
            </h2>
          </div>
          <div className="px-benefit-grid">
            {benefits.map(({ Icon, title, description }, index) => (
              <article className="px-benefit-card px-story-reveal" key={title}>
                <div className={`px-benefit-art px-benefit-art-${index + 1}`} aria-hidden="true">
                  <span className="px-benefit-icon"><Icon size={24} strokeWidth={1.7} /></span>
                  {index === 0 && (
                    <span className="px-art-channels">
                      <i /><i /><i />
                    </span>
                  )}
                  {index === 1 && <span className="px-art-funds"><i /><i /></span>}
                  {index === 2 && (
                    <span className="px-art-bars">
                      <i /><i /><i /><i /><i />
                    </span>
                  )}
                  {index === 3 && (
                    <span className="px-art-activity">
                      <i /><i /><i />
                    </span>
                  )}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
