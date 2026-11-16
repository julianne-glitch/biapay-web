# BIAPAY web

Phase 1 foundation for the BIAPAY marketing site. It is not the live WordPress site and it does not process payments.

French is the default locale (`/fr`). English is `/en`. The homepage is a placeholder. See `docs/architecture.md` and `docs/source-inventory.md`.

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm test
npm run test:e2e
```

Copy `.env.example` to `.env` when a database or admin secret is available. PostgreSQL is not required to build or run the shell. Do not deploy this phase.
