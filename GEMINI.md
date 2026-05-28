# Caverna de Adulão — Centro de Reabilitação

A React-based website for a Christian rehabilitation center, built with **TanStack Start**, **Vite**, and **Tailwind CSS**.

## Project Overview

- **Purpose:** Provide information about the "Caverna de Adulão" rehabilitation center, including mission, services (treatment), team, and how to help.
- **Architecture:** Server-Side Rendered (SSR) application using TanStack Start for routing, data fetching, and hydration.
- **Tech Stack:**
  - **Framework:** [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/overview) (React + TanStack Router + TanStack Query).
  - **Language:** TypeScript.
  - **Runtime & Package Manager:** [Bun](https://bun.sh/).
  - **Build Tool:** [Vite](https://vitejs.dev/).
  - **Styling:** [Tailwind CSS 4](https://tailwindcss.com/).
  - **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI + Lucide React).
  - **Platform:** [Cloudflare Pages/Workers](https://workers.cloudflare.com/).

## Directory Structure

- `src/routes/`: File-based routing using TanStack Router. Includes `__root.tsx` for the main layout.
- `src/components/`:
  - `ui/`: Shared Shadcn UI components.
  - `site/`: Project-specific layout components like `Header`, `Footer`, and `PageHeader`.
- `src/lib/`: Utility functions (`utils.ts`), error handling (`error-capture.ts`, `error-page.ts`).
- `src/hooks/`: Custom React hooks.
- `src/assets/`: Images and other static assets.
- `src/server.ts`: Custom SSR entry point for Cloudflare, featuring error wrapping.
- `src/router.tsx`: Router instance creation and configuration.
- `wrangler.jsonc`: Cloudflare Workers/Pages configuration.

## Building and Running

### Development

```bash
bun run dev
```

Starts the Vite development server.

### Build for Production

```bash
bun run build
```

Generates a production build optimized for Cloudflare.

### Preview Production Build

```bash
bun run preview
```

Previews the production build locally.

### Linting and Formatting

```bash
bun run lint
bun run format
```

## Development Conventions

- **Routing:** All new pages should be added as files in `src/routes/`. The route tree is automatically generated into `src/routeTree.gen.ts`.
- **UI Components:** Prefer using or extending components in `src/components/ui`. Use `cn()` utility from `@/lib/utils` for tailwind class merging.
- **Styling:** Use Tailwind CSS utility classes. Global styles are in `src/styles.css`.
- **Data Fetching:** Use TanStack Query (via `useQuery`, etc.) for client-side state and data fetching.
- **Error Handling:** The project uses a custom error capture and rendering system in `src/lib/error-capture.ts` and `src/lib/error-page.ts`.
- **SSR Entry:** The custom `src/server.ts` wraps the default TanStack Start server entry to provide branded error pages for catastrophic failures.
