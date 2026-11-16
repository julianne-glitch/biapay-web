import { expect, test } from "@playwright/test";

test("french shell renders", async ({ page }) => {
  await page.goto("/fr");

  await expect(page).toHaveTitle(/BIAPAY/);
  const header = page.getByRole("banner");
  await expect(header.getByRole("img", { name: "BIAPAY" })).toBeVisible();
  await expect(header.getByRole("link", { name: "Accueil" })).toBeVisible();
  await expect(header.getByRole("link", { name: "Solutions" })).toBeVisible();
  await expect(header.getByRole("link", { name: "Connexion" })).toBeVisible();
  await expect(header.getByRole("link", { name: "S'inscrire" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 1, name: "BIAPAY" })).toBeVisible();
  await expect(page.getByRole("contentinfo")).toContainText("Business Intelligence Agency SAS");
});

test("english shell renders", async ({ page }) => {
  await page.goto("/en");

  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(header.getByRole("link", { name: "Pricing" })).toBeVisible();
  await expect(header.getByRole("link", { name: "Login" })).toBeVisible();
  await expect(header.getByRole("link", { name: "Register" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 1, name: "BIAPAY" })).toBeVisible();
});

test("root redirects to the french locale", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/fr\/?$/);
});

test("mobile menu opens in french", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/fr");

  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Solutions" })).toBeHidden();
  await header.getByRole("button", { name: "Ouvrir le menu" }).click();
  await expect(header.getByRole("link", { name: "Solutions" })).toBeVisible();
});
