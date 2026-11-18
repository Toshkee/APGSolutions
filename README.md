# APG Solutions

Website for APG Solutions, a CDL driver recruiting company in Nashville, TN.

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Motion

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

This branch (`apg-design`) implements the designer's APG Solutions landing page from Figma.

- `src/content/en/` and `src/content/es/`: all copy in English and Spanish (edit content here; change both languages together). Phone, email and site URL are in `src/content/site.ts`
- `src/app/[lang]/`: the pages. English is served at `/`, `/about`…, Spanish at `/es`, `/es/about`… (`src/proxy.ts` maps the plain addresses to English)
- `public/share/`: link preview images. After changing the Spanish hero text, run `python3 scripts/make-share-image.py` to remake `og-es.jpg`
- `src/components/apg/`: page sections (Nav, Hero, Stats, Problem, TwoSides, Benefits, HowItWorks, Pricing, DriverTypes, Faq, Cta + LeadForm, Footer)
- `src/app/actions.ts`: lead form Server Action for carriers and drivers (sends email through Resend)
- `public/apg/`: logo, hero photo and icons exported from Figma

## Contact form

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY`: API key from https://resend.com
- `CONTACT_TO_EMAIL`: inbox that receives form submissions
- `CONTACT_FROM_EMAIL`: verified sender address

Without these, the form logs submissions to the terminal in development and shows an error in production.

## Before launch

- Replace placeholder phone and email in `src/content/site.ts`, and team members in `src/content/en/apg.ts` and `src/content/es/apg.ts`
- Have a native Spanish speaker on the client's side approve the Spanish copy, and their lawyer the Spanish Privacy Policy and Terms
- Replace placeholder media (Pixabay video, Pexels photo) with the client's own footage if available
- Set the environment variables above on the hosting platform

`archive/static-v1/` holds the first static HTML version. `research/` holds the market research and font comparison pages.
