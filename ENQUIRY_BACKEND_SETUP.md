# BIAPAY contact and registration enquiries

The new bilingual Contact and Registration pages submit to `POST /api/enquiries`. The endpoint validates input with Zod, checks explicit privacy consent, has a honeypot field, and sends the enquiry to BIAPAY through Resend's email API. It does not collect payment credentials or create payment accounts.

## Configure in Vercel (server-side only)

- `BIAPAY_ENQUIRY_RESEND_API_KEY`: Resend API key for a verified sending domain.
- `BIAPAY_ENQUIRY_FROM_EMAIL`: verified sender address, e.g. `BIAPAY Website <website@your-verified-domain>`.
- `BIAPAY_ENQUIRY_TO_EMAIL`: BIAPAY-controlled inbox receiving submissions.

Do not prefix any variable with `NEXT_PUBLIC_`. Configure the verified domain and secrets in Vercel, then redeploy. Without configuration the endpoint fails closed with HTTP 503 and shows a message directing visitors to email BIAPAY directly. Do not claim form submissions are delivered until the email provider is configured and a real end-to-end delivery test passes.

The Registration page is an **onboarding enquiry**, not an account-registration system. Existing secure payment account login remains at `https://connect.biapay.net/login`. Actual account creation must be implemented through an approved authenticated BIAPAY backend contract, not a guessed API or local credentials. Add rate limiting, spam protection, and retention policies before high-volume production use.
