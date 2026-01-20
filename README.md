# Grand Format – Product Design & Development Agency

This is the official website for **Grand Format**, a product design and development agency that solves wicked problems by building tools and services around the needs of our clients’ customers and teams.

The site is built with a modern stack that combines high‑performance web technologies with generative visual design.

## Tech Stack

- **Next.js 15.5.9** (Pages Router) – with Turbopack for instant development updates
- **React 19.1.0** – with the latest React features
- **Tailwind CSS v4** – for utility‑first styling
- **Sass/SCSS** – for custom styles and theming
- **p5.js 2.2.0** – for the interactive, generative background
- **MDX** – for content‑rich pages
- **Node.js** – using LTS v22.17.1

## Prerequisites

- Node.js (LTS v22.17.1 or later)
- npm (or yarn, pnpm, bun)

## Getting Started

First, clone the repository and install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

The development server uses **Turbopack** for lightning‑fast hot module replacement (HMR).

## Building for Production

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Project Structure

- `pages/` – Next.js Pages Router pages (`.js` and `.jsx`)
- `components/` – React components (`.jsx`) with accompanying SCSS modules
- `styles/` – Global SCSS, Tailwind, and color variables
- `public/` – Static assets (icons, images, etc.)

## Key Features

- **Generative Background**: The `PhotocopyBackground` component uses p5.js to create a dynamic, mouse‑responsive texture that evokes the look of a photocopied document.
- **Responsive & Accessible**: Built with Tailwind CSS for a fully responsive layout and semantic HTML for accessibility.
- **Optimized Fonts**: Fonts are loaded via `next/font` (Libre Franklin and Fira Mono) for optimal performance.
- **Content‑Ready**: MDX support allows for rich content pages that mix Markdown and React components.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [p5.js Reference](https://p5js.org/reference/)
- [MDX Documentation](https://mdxjs.com/)

## Deploy on Vercel

The easiest way to deploy this Next.js site is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
