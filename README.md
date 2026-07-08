# Accounting Masters Group — Next.js site

This is a Next.js (App Router) rebuild of the original Vite/React site, ready to deploy on Vercel.

## What changed from the original

- **Routing**: `wouter` → Next.js App Router (`app/page.tsx`, `app/resources/page.tsx`, `app/resources/[slug]/page.tsx`).
- **Article pages** are statically generated at build time (`generateStaticParams`) and each gets its own `<title>`/meta description (`generateMetadata`) — better SEO than the original single-page-app version.
- **Images**: moved into `public/` and switched to `next/image` for automatic optimization/resizing on Vercel.
- **Contact form**: the original called an internal `@workspace/api-client-react` package that isn't part of this site. It's replaced with a local API route at `app/api/contact/route.ts` that sends the submission as an email via [Resend](https://resend.com). See "Wiring up the contact form" below for the env vars it needs.
- Everything else (Tailwind v4 theme, shadcn/ui components, Framer Motion, fonts, copy) is unchanged.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploying to Vercel

1. Push this folder to a GitHub/GitLab/Bitbucket repo (or run `vercel` from inside this folder with the Vercel CLI).
2. In Vercel, "Add New Project" → import the repo. Framework preset should auto-detect as **Next.js** — no config needed.
3. Deploy. No environment variables are required for the site to build and run.

## Wiring up the contact form

The contact form sends via [Resend](https://resend.com). To turn it on:

1. Create a free Resend account and grab an API key from https://resend.com/api-keys.
2. (Recommended) Verify your own domain at https://resend.com/domains so you can send "from" your own address (e.g. `noreply@accountingmastersgroup.ca`). Until you do this, you can still send using Resend's shared test address `onboarding@resend.dev` as the "from" address — but it's best for real production use to verify your own domain.
3. In Vercel → your project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` — the API key from step 1
   - `CONTACT_TO_EMAIL` — the inbox that should receive messages, e.g. `info@accountingmastersgroup.ca`
   - `CONTACT_FROM_EMAIL` — the verified sending address from step 2 (optional; defaults to `onboarding@resend.dev` if omitted)
4. Redeploy. Submissions will arrive as emails, with the visitor's own email address set as "reply-to" so you can respond directly.

If `RESEND_API_KEY` or `CONTACT_TO_EMAIL` aren't set (e.g. in local dev), the route still validates input and returns success, but only logs the submission to the console instead of emailing it — so the form won't error out before you've configured Resend.

## Notes / possible follow-ups

- `metadataBase` in `app/layout.tsx` is set to a placeholder domain (`https://www.accountingmastersgroup.ca`) — update it to the real production domain once you have one, so Open Graph image URLs resolve correctly.
- The Google Fonts `@import` in `app/globals.css` works as-is; swapping to `next/font/google` would shave a little load time if you want to optimize further.
