import type { NextAuthOptions } from "next-auth";

/**
 * Placeholder admin auth. next-auth 4.24.15 is the stable release.
 * next-auth 5 is still published only as a beta tag, so it is not used here.
 * No providers, no login page, and no seeded credentials.
 * AdminUser in Prisma is the future authorization record. This config
 * does not store payment data, API keys, or customer credentials.
 */
export const authOptions: NextAuthOptions = {
  providers: [],
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
};
