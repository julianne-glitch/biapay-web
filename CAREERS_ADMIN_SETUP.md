# BIAPAY Careers publishing setup

The careers page reads published vacancies from `content/jobs.json` in the repository's main branch. An authorized editor can add draft or published vacancies through `/en/careers/manage` or `/fr/careers/manage`. The endpoint `POST /api/admin/jobs` is **disabled by default** until both server-side secrets are configured.

## Required server-side environment variables

- `BIAPAY_CAREERS_ADMIN_KEY`: randomly generated administrator access key of at least 32 characters. Share securely with authorized HR staff; never put it in the repository.
- `BIAPAY_JOBS_GITHUB_TOKEN`: fine-grained GitHub token with **Contents: Read and write** limited to the `julianne-glitch/biapay-web` repository. Configure it only as a server environment variable in Vercel. Do not put it in `NEXT_PUBLIC_*`.

After adding both environment variables, redeploy the site. The management page accepts the admin key for each submission, with no browser persistence. It creates a commit on the main branch updating `content/jobs.json`. Drafts remain hidden. Published jobs appear on the public careers page, which reads the repository with no-store caching. Applications are directed to the admin-supplied HTTPS application URL; the marketing website does not collect applicants' personal data.

Security limitations before production use: this is a shared-key administrative workflow, **not** individual accounts, audit trails, MFA, rate limiting, or a full applicant tracking system. Restrict access to a trusted HR team and replace with role-based admin login before broad organizational rollout. The API fails closed when configuration is absent. Do not publish any job without an approved application destination. No jobs have been fabricated or seeded.
