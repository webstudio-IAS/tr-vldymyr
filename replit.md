# WFITS Transport Services Website

## Overview

This is a single-page marketing website for **WFITS** (WF International Transport Services), a professional transport and moving company. The site features a hero section, services overview, testimonials, and a contact form that submits inquiries to a PostgreSQL database. It's built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — currently just a single home page and a 404 page
- **Styling**: Tailwind CSS with CSS variables for theming, using a premium blue & slate color palette
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, located in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll-reveal animations on sections
- **Forms**: react-hook-form with Zod validation via @hookform/resolvers
- **Data Fetching**: TanStack React Query for server state management
- **Icons**: Lucide React
- **Fonts**: DM Sans (body) and Raleway (display headings) via Google Fonts

### Backend
- **Framework**: Express 5 running on Node.js with TypeScript (executed via tsx)
- **API Pattern**: A shared route definition object in `shared/routes.ts` defines API paths, HTTP methods, Zod input schemas, and response schemas. Both client and server import from this shared module for type safety.
- **Current API endpoints**:
  - `POST /api/messages` — Creates a contact form message
- **Dev Server**: Vite dev server is integrated as middleware during development (see `server/vite.ts`), with HMR support
- **Production**: Client is built to `dist/public`, server is bundled with esbuild to `dist/index.cjs`

### Shared Layer (`shared/`)
- `schema.ts` — Drizzle ORM table definitions and Zod schemas (using drizzle-zod)
- `routes.ts` — API route contracts with input/output schemas, used by both frontend and backend

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL, connected via `DATABASE_URL` environment variable
- **Connection**: Uses `pg` Pool via `server/db.ts`
- **Schema push**: `npm run db:push` uses drizzle-kit to push schema changes
- **Current tables**:
  - `messages` — stores contact form submissions (id, name, email, phone, message, createdAt)

### Storage Pattern
- `server/storage.ts` defines an `IStorage` interface and a `DatabaseStorage` implementation
- This abstraction allows swapping storage implementations if needed

### Build System
- **Dev**: `npm run dev` — runs tsx with Vite middleware for HMR
- **Build**: `npm run build` — runs `script/build.ts` which builds client with Vite and server with esbuild
- **Production**: `npm start` — runs the bundled `dist/index.cjs`
- Server dependencies are selectively bundled (allowlist in `script/build.ts`) to reduce cold start times

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

## External Dependencies

- **PostgreSQL** — Primary database, required via `DATABASE_URL` environment variable. Used with `connect-pg-simple` for potential session storage.
- **Unsplash** — Hero and testimonial images are loaded from Unsplash CDN URLs (no API key needed, just direct image URLs)
- **Google Fonts** — DM Sans, Montserrat, Fira Code, Geist Mono, and Architects Daughter fonts loaded via CDN
- **Replit Plugins** — `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` are used in development when running on Replit (conditionally loaded only when `REPL_ID` env var is present)

## Vercel Deployment

The project is configured for deployment on Vercel alongside the existing Replit setup:

- **`vercel.json`** — Configures the Vite build command, output directory (`dist/public`), and URL rewrites
- **`api/messages.ts`** — Vercel serverless function that handles `POST /api/messages` (contact form submissions). Uses Drizzle ORM + pg directly (self-contained, no path alias dependencies)
- **`vite.config.ts`** — Replit-specific plugins are conditionally loaded only when `REPL_ID` is set, so builds work cleanly on Vercel
- **Environment Variables on Vercel**: `DATABASE_URL` must be set in Vercel project settings to connect to a PostgreSQL database
- **SPA Routing**: A catch-all rewrite in `vercel.json` sends all non-API routes to `index.html` for client-side routing