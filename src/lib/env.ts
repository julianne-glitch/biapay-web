import { z } from "zod";

/**
 * Placeholder environment contract. This does not connect to anything.
 * Auth.js v5 names (AUTH_*) and the stable next-auth v4 names (NEXTAUTH_*)
 * are both accepted so the later admin auth migration does not rename secrets.
 */
export const envSchema = z
  .object({
    DATABASE_URL: z.string().min(1),
    AUTH_SECRET: z.string().min(1).optional(),
    NEXTAUTH_SECRET: z.string().min(1).optional(),
    AUTH_URL: z.url().optional(),
    NEXTAUTH_URL: z.url().optional(),
    NEXT_PUBLIC_SITE_URL: z.url().optional(),
  })
  .refine((value) => Boolean(value.AUTH_SECRET || value.NEXTAUTH_SECRET), {
    message: "AUTH_SECRET or NEXTAUTH_SECRET is required",
    path: ["AUTH_SECRET"],
  });

export type AppEnv = z.infer<typeof envSchema>;
