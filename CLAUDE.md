# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # ESLint via next lint
npx prettier --write .  # Format all files
```

There are no automated tests in this project.

## Architecture

**Finrex** is a personal finance tracker built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, MUI, and TanStack Query v5.

### Route groups

- `src/app/(auth)/login/` — Unauthenticated pages (login/register)
- `src/app/(realApp)/` — Protected pages with shared `Header` layout: `insights`, `revenue`, `goals`, `profit`, `profile`
- `src/features/` — Feature modules outside the app router (currently `profit`)

Authentication is enforced by `src/middleware.ts`, which checks for a `finrex.auth` cookie and redirects unauthenticated users to `/login`.

### Data flow

- All API calls go through `src/api/api.ts`, which wraps a single axios instance pointed at `NEXT_PUBLIC_URL_FINREX_API`.
- The axios interceptor calls `handleError` (from `src/api/services/errorHandler.ts`) on every non-2xx response, routing error messages to a globally registered handler.
- Mutations are defined per-feature in `utils/mutations.ts` files and use TanStack Query's `useMutation`.
- Form validation uses `react-hook-form` + `zod/v4` schemas (see `schemas/` directories). Import zod as `import * as z from 'zod/v4'`.

### Key conventions

- Path constants (page routes and API endpoints) are centralized in `src/libs/paths.ts`.
- `@/*` maps to `src/*` (TypeScript path alias).
- SVG files are imported as React components via `@svgr/webpack` (type declarations in `src/types/svg.d.ts`).
- The global `QueryClient` is a singleton at `src/app/(auth)/login/utils/queryClient.ts` and wrapped in `src/app/(auth)/login/utils/providers.tsx` alongside `ProfilePicContext`.
- Token for auth is stored in `localStorage` as `finrex.auth` and also expected as a cookie by the middleware.

### Prettier config (`.prettierrc`)

Single quotes, semi-colons, 120 print width, 2-space tabs, `es5` trailing commas, `prettier-plugin-tailwindcss` for class sorting.
