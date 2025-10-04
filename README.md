# Regal Gifts Boutique

A responsive e-commerce storefront built with Vite, React, TypeScript and Tailwind CSS. This project contains a small product catalog, cart context, and a collection of UI components (shadcn-style + Radix primitives) used to build the Regal Gifts Boutique website.

Key features
- Vite + React + TypeScript starter
- Tailwind CSS for utility-first styling
- Reusable component library under `src/components` (UI primitives, layout, product cards, etc.)
- Cart state via `contexts/CartContext`
- Client-side routing with `react-router-dom`
- Querying with `@tanstack/react-query`

Tech stack
- Vite
- React 18
- TypeScript
- Tailwind CSS
- Radix UI primitives
- React Router
- TanStack Query
- Zod for validation
- Sonner for toast notifications

Quick start

Prerequisites
- Node.js 18+ (or a compatible LTS)
- npm (or pnpm/yarn if you prefer)

Install

Open a terminal in the project root and run:

```powershell
npm install
```

Run development server

```powershell
npm run dev
```

Build for production

```powershell
npm run build
```

Preview production build locally

```powershell
npm run preview
```

Lint the codebase

```powershell
npm run lint
```

Scripts (from package.json)
- `dev` - start Vite dev server
- `build` - build for production
- `build:dev` - build using the development mode
- `preview` - preview the production build
- `lint` - run ESLint across the project

Project structure (important files)
- `index.html` - Vite entry
- `src/main.tsx` - app bootstrap
- `src/App.tsx` - top-level app and routes
- `src/pages/` - route pages (Index, Shop, OurStory, Craftsmanship, NotFound)
- `src/components/` - UI components and small feature components
	- `layout/` - `Header`, `Footer`
	- `home/` - homepage sections (HeroBanner, FeaturedProducts, etc.)
	- `product/` - `ProductCard`, `ProductQuickView`
- `src/contexts/CartContext.tsx` - cart state and actions
- `src/data/products.ts` - local sample product data
- `src/lib/utils.ts` - helper utilities
- `public/` - static assets

Notes and maintenance
- This repository currently contains sample product data in `src/data/products.ts`. Replace or connect to a real API/backend when ready.
- No LICENSE file is included. Add a `LICENSE` if you plan to open-source the project.

Deployment

This app builds to static assets with Vite and can be deployed to Vercel, Netlify, or any static hosting that serves the output of `npm run build`.

Contributing
- Open an issue or submit pull requests. Keep changes focused and add small tests where appropriate.

Contact
- Repo: Global-TFC/regal-gifts-boutique

Happy hacking — enjoy building beautiful gift pages!


