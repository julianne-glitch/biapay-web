import { describe, expect, it } from "vitest";
import { envSchema } from "./env";

describe("envSchema", () => {
  it("rejects an empty database url", () => {
    const result = envSchema.safeParse({
      DATABASE_URL: "",
      AUTH_SECRET: "placeholder",
    });

    expect(result.success).toBe(false);
  });

  it("accepts a placeholder database url and either auth secret", () => {
    const result = envSchema.safeParse({
      DATABASE_URL: "postgresql://user:password@127.0.0.1:5432/biapay",
      NEXTAUTH_SECRET: "placeholder",
      NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
    });

    expect(result.success).toBe(true);
  });
});
