import { describe, expect, it } from "vitest";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import { shellNav } from "./shell-nav";

function leafKeys(value: unknown, prefix = ""): string[] {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.entries(value).flatMap(([key, child]) =>
      leafKeys(child, prefix ? `${prefix}.${key}` : key),
    );
  }

  return [prefix];
}

describe("locale messages", () => {
  it("uses the same keys in French and English", () => {
    expect(leafKeys(fr).sort()).toEqual(leafKeys(en).sort());
  });

  it("has a non-empty label for every shell nav item", () => {
    for (const item of shellNav) {
      expect(fr.nav[item.key].length).toBeGreaterThan(0);
      expect(en.nav[item.key].length).toBeGreaterThan(0);
    }
  });
});
