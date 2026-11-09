# Easy Motion Recruiting

Website for Easy Motion Recruiting, a CDL driver recruiting company in Nashville, TN.

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Motion

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `src/content/site.ts`: all copy, contact details, services and team (edit content here)
- `src/components/`: page sections (Nav, Hero, Services, About, Team, Contact, Footer)
- `src/app/actions.ts`: contact form Server Action (sends email through Resend)
- `public/media/`: hero video and poster
- `src/assets/`: images imported with `next/image`

## Contact form

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY`: API key from https://resend.com
- `CONTACT_TO_EMAIL`: inbox that receives form submissions
- `CONTACT_FROM_EMAIL`: verified sender address

Without these, the form logs submissions to the terminal in development and shows an error in production.

## Before launch

- Replace placeholder phone, email and team members in `src/content/site.ts`
- Replace placeholder media (Pixabay video, Pexels photo) with the client's own footage if available
- Set the environment variables above on the hosting platform

`archive/static-v1/` holds the first static HTML version. `research/` holds the market research and font comparison pages.
