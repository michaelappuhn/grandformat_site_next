# Grand Format – Product Design & Development Agency

This is the official website for [**Grand Format**](https://grandformat.xyz), a Los Angeles-based product design and development agency run by @michaelappuhn.

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
- yarn (recommended) or npm, pnpm, bun

## Getting Started

First, clone the repository and install dependencies:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

The development server uses **Turbopack** for lightning‑fast hot module replacement (HMR).

## Building for Production

```bash
yarn build
```

Then start the production server:

```bash
yarn start
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

## Resources

Useful documentation for the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [p5.js Reference](https://p5js.org/reference/)
- [MDX Documentation](https://mdxjs.com/)
