import type { CSSProperties } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import "./hero-flow.css";

type Method = {
  key: "mobileMoney" | "bankCards" | "wallets" | "bankTransfers" | "otherPayments" | "cemac";
  /** Top of the card, in design pixels (the stage is 953 × 560). */
  top: number;
  /** Y of the wire start, in design pixels. */
  wire: number;
  avatar?: string;
  logos: { src: string; width: number; height: number; display: number };
  tone: "blue" | "green" | "purple" | "amber" | "teal" | "orange";
};

const methods: Method[] = [
  {
    key: "mobileMoney", top: 20, wire: 55, avatar: "/assets/hero/pay-avatar-mobile-money.webp",
    logos: { src: "/assets/hero/pay-logos-mobile-money.png", width: 456, height: 84, display: 107 }, tone: "blue"
  },
  {
    key: "bankCards", top: 112, wire: 148, avatar: "/assets/hero/pay-avatar-bank-card.webp",
    logos: { src: "/assets/hero/pay-logos-bank-card.png", width: 423, height: 84, display: 104 }, tone: "green"
  },
  {
    key: "wallets", top: 204, wire: 242, avatar: "/assets/hero/pay-avatar-wallet.webp",
    logos: { src: "/assets/hero/pay-logos-wallet.png", width: 435, height: 81, display: 106 }, tone: "purple"
  },
  {
    key: "bankTransfers", top: 296, wire: 330, avatar: "/assets/hero/pay-avatar-bank-transfer.webp",
    logos: { src: "/assets/hero/pay-logos-bank-transfer.png", width: 102, height: 102, display: 24 }, tone: "amber"
  },
  {
    key: "otherPayments", top: 383, wire: 417, avatar: "/assets/hero/pay-avatar-other.webp",
    logos: { src: "/assets/hero/pay-logos-other.png", width: 438, height: 96, display: 106 }, tone: "teal"
  },
  {
    key: "cemac", top: 466, wire: 500,
    logos: { src: "/assets/hero/pay-logos-cemac.png", width: 459, height: 90, display: 108 }, tone: "orange"
  },
];

/** Wire gradients: [colour at the card, colour at the hub]. */
const wireColors: Record<Method["tone"], [string, string]> = {
  blue: ["#3d7ffc", "#3d7ffc"],
  green: ["#3fc65a", "#3d7ffc"],
  purple: ["#a342f4", "#3d7ffc"],
  amber: ["#ffbe4a", "#f5604f"],
  teal: ["#1fb6c9", "#3d7ffc"],
  orange: ["#ff9f3a", "#f5604f"],
};

export function HeroFlow() {
  const t = useTranslations("hero");

  return (
    <div className="hf" role="group" aria-label={t("flowLabel")}>
      <div className="hf-stage">
        <svg className="hf-wires" viewBox="0 0 162 560" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            {methods.map(({ key, tone }) => (
              <linearGradient key={key} id={`hf-wire-${key}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="162" y2="0">
                <stop offset="0" stopColor={wireColors[tone][0]} />
                <stop offset="1" stopColor={wireColors[tone][1]} />
              </linearGradient>
            ))}
          </defs>
          {methods.map(({ key, wire }) => (
            <path key={key} className="hf-wire" stroke={`url(#hf-wire-${key})`} d={`M0 ${wire} C 58 ${wire}, 52 265, 162 265`} />
          ))}
        </svg>

        <ul className="hf-methods">
          {methods.map(({ key, top, avatar, logos }) => (
            <li key={key} className={`hf-method hf-method-${key}`} style={{ "--t": top, "--lw": logos.display } as CSSProperties}>
              {avatar ? (
                <Image className="hf-avatar" src={avatar} alt="" width={88} height={88} />
              ) : (
                <span className="hf-avatar hf-globe" aria-hidden="true"><Globe strokeWidth={1.8} /></span>
              )}
              <span className="hf-label">{t(key)}</span>
              <Image className="hf-logos" src={logos.src} alt="" width={logos.width} height={logos.height} />
            </li>
          ))}
        </ul>

        <div className="hf-hub">
          <Image src="/assets/brand/biapay-wordmark.webp" alt="BIAPAY" width={220} height={50} priority />
        </div>

        <div className="hf-photo">
          <Image src="/assets/hero/hero-merchant-photo.webp" alt="" fill priority sizes="(max-width: 1050px) 90vw, 28vw" />
        </div>
      </div>
    </div>
  );
}

/** Soft background shapes of the hero: blue halo, green disc, bottom-right waves. */
export function HeroDecor() {
  return (
    <svg className="bp-hero2-decor" viewBox="0 0 1672 837" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
      <defs>
        <radialGradient id="hd-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#e9f0ff" />
          <stop offset="0.7" stopColor="#f0f5ff" />
          <stop offset="1" stopColor="#f6f9ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="1430" cy="360" rx="520" ry="360" fill="url(#hd-halo)" />
      <circle cx="1740" cy="250" r="270" fill="#e5f2dc" />
      <path d="M1160 837 C 1330 780 1500 700 1672 610 L 1672 837 Z" fill="#e1f0d6" />
      <path d="M1250 837 C 1400 800 1540 760 1672 714 L 1672 837 Z" fill="#14388c" />
    </svg>
  );
}