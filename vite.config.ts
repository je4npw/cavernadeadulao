import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      client: {
        entry: "src/client.tsx",
      },
      server: {
        entry: "src/server.ts",
      },
    }),
    tsconfigPaths(),
    tailwindcss(),
    viteReact(),
    cloudflare({
      viteEnvironment: { name: "ssr" },
    }),
  ],
});
