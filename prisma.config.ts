import { defineConfig } from "prisma/config";

const placeholderUrl = "postgresql://user:password@127.0.0.1:5432/biapay";

/**
 * The fallback URL only lets the Prisma CLI load without a real database.
 * It is not a connection, and nothing in the app uses it to query Postgres.
 */
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL ?? placeholderUrl,
  },
});
