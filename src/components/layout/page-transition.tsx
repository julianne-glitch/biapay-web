import { ViewTransition, type ReactNode } from "react";

const transitionClasses = {
  "page-forward": "page-forward",
  "page-back": "page-back",
  "solution-forward": "solution-forward",
  "solution-back": "solution-back",
  "merchant-forward": "merchant-forward",
  "merchant-back": "merchant-back",
  default: "page-forward",
} as const;

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={transitionClasses}
      exit={transitionClasses}
      default="page-forward"
    >
      {children}
    </ViewTransition>
  );
}
