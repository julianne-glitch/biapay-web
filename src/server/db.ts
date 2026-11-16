/**
 * Phase 1 does not open a database connection.
 * Callers must not treat a missing DATABASE_URL as a successful connection.
 */
export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}
