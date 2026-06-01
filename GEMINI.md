# Caverna de Adulão — Centro de Reabilitação

A React-based website for a Christian rehabilitation center, built with **Next.js**, **React**, and **Tailwind CSS**.

## Project Overview

- **Purpose:** Provide information about the "Caverna de Adulão" rehabilitation center, including mission, services (treatment), team, and how to help.
- **Architecture:** Next.js App Router for routing and server-side rendering.
- **Tech Stack:**
  - **Framework:** [Next.js](https://nextjs.org/) (React).
  - **Language:** TypeScript.
  - **Runtime & Package Manager:** [Bun](https://bun.sh/).
  - **Styling:** [Tailwind CSS 4](https://tailwindcss.com/).
  - **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI + Lucide React).

## Directory Structure

- `src/app/`: File-based routing using Next.js App Router.
- `src/components/`:
  - `ui/`: Shared Shadcn UI components.
  - `site/`: Project-specific layout components like `Header`, `Footer`, and `PageHeader`.
- `src/lib/`: Utility functions (`utils.ts`).
- `src/hooks/`: Custom React hooks.
- `src/assets/`: Images and other static assets.
- `src/data/`: Static content for the pages.

## Building and Running

### Development

```bash
bun run dev
```

Starts the Next.js development server.

### Build for Production

```bash
bun run build
```

Generates an optimized production build.

### Preview Production Build

```bash
bun run start
```

Runs the production build locally.

### Linting and Formatting

```bash
bun run lint
bun run format
```

## Development Conventions

- **Routing:** All new pages should be added as folders with `page.tsx` in `src/app/`.
- **UI Components:** Prefer using or extending components in `src/components/ui`. Use `cn()` utility from `@/lib/utils` for tailwind class merging.
- **Styling:** Use Tailwind CSS utility classes. Global styles are in `src/app/globals.css`.
- **Data:** Use the files in `src/data/` to manage the content of the pages.
