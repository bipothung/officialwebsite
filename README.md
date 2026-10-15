# Bipothung Humtsoe — Portfolio

A responsive, editorial-style portfolio built with **Next.js App Router, TypeScript, Tailwind CSS and Framer Motion**. It uses the supplied portrait and resume PDF.

## Run locally

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Personalize

- **Portrait:** replace `public/images/profile.png`.
- **Resume PDF:** replace `public/files/Bipothung-Humtsoe-Resume.pdf`.
- **Content and sections:** edit `app/page.tsx`.
- **Design system and responsive styles:** edit `app/globals.css` and `tailwind.config.ts`.
- **Metadata:** edit `app/layout.tsx`. Replace `https://example.com` with your real deployed domain before publishing.

## Notes

- Resume details are based on the provided PDF. The capability cards describe areas of work, not invented client projects.
- The email, LinkedIn URL, role, education and experience shown on the site are taken from the supplied resume.
- The portfolio uses local assets, so the portrait and downloadable resume do not rely on third-party image hosting.
