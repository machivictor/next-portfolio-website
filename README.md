This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## SEO notes

- Default metadata is defined in `app/layout.tsx` using Next.js Metadata API.
- A dynamic sitemap is available at `/sitemap.xml` (generated from `src/data/portfolio`).
- Robots directives live in `public/robots.txt` pointing to the sitemap.
- Structured data (JSON-LD) for the site owner is injected in the root layout.
- Preconnect and preload optimizations added for fonts and the headshot image.

To validate: visit `/sitemap.xml` and `/robots.txt`, and run the URL through the Google Rich Results Test and Lighthouse.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Project structure / refactor notes

- Core site constants and metadata are centralized in `src/config/site.ts` for cleaner imports and single-source-of-truth.
- SEO assets and routes:
	- `app/layout.tsx` — site metadata, JSON-LD injection, preconnects
	- `app/sitemap.xml/route.ts` — dynamic sitemap generated from `src/data/portfolio`
	- `public/robots.txt` and `public/site.webmanifest`
