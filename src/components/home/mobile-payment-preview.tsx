"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutionCatalog } from "@/lib/solution-catalog";
import type { Locale } from "@/lib/shell-nav";

const featured = solutionCatalog.filter(({ id }) =>
  ["paylink", "qr-payment", "online-invoicing"].includes(id),
);

export function MobilePaymentPreview({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const [activeIndex, setActiveIndex] = useState(0);
  const selected = featured[activeIndex];
  const SelectedIcon = selected.icon;

  return (
    <div className="bp-mobile-preview">
      <figure className="bp-mobile-preview-figure">
        <div className="bp-mobile-preview-stage">
          <Image
            className="bp-mobile-preview-photo"
            src="/assets/hero/douala-tailor.webp"
            alt={fr ? "Une couturière travaille dans son atelier à Douala" : "A seamstress at work in her Douala workshop"}
            fill
            sizes="(max-width: 760px) calc(100vw - 36px), 1px"
          />
          <div className="bp-mobile-preview-panel" id="mobile-payment-method" aria-live="polite">
            <span className="bp-mobile-preview-icon">
              <SelectedIcon size={20} aria-hidden="true" />
            </span>
            <span className="bp-mobile-preview-text">
              <strong>{selected.title[locale]}</strong>
              <span>{selected.summary[locale]}</span>
            </span>
            <Link
              href={`/${locale}/solutions/${selected.slug[locale]}`}
              aria-label={fr ? `Découvrir ${selected.title.fr}` : `Explore ${selected.title.en}`}
              className="bp-mobile-preview-link"
            >
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figcaption>
          <span>Douala, {fr ? "Cameroun" : "Cameroon"}</span>
          <span>
            <a href="https://commons.wikimedia.org/wiki/File:Couturi%C3%A8re_dans_son_atelier.jpg">Minette Lontsie</a>
            {" · "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
            {" · "}
            {fr ? "Recadrée" : "Cropped"}
          </span>
        </figcaption>
      </figure>
      <div className="bp-mobile-preview-options" role="group" aria-label={fr ? "Explorer les solutions de paiement" : "Explore payment solutions"}>
        {featured.map((solution, index) => (
          <button
            key={solution.id}
            type="button"
            aria-controls="mobile-payment-method"
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {solution.id === "online-invoicing" ? (fr ? "Factures" : "Invoices") : solution.title[locale]}
          </button>
        ))}
      </div>
    </div>
  );
}
