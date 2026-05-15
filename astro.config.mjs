import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ── Output mode ──────────────────────────────────────────────────────────
  // 'static'  → full CSR / SSG: every page pre-rendered to plain HTML + JS
  // 'server'  → full SSR (requires an adapter)
  // 'hybrid'  → SSG by default, opt individual pages into SSR
  output: 'static',

  // ── Build output directory ────────────────────────────────────────────────
  // Change this to any path you like. Default would be 'dist'.
  // After `yarn build` all static assets are written here.
  outDir: './build',

  // ── Build options ─────────────────────────────────────────────────────────
  build: {
    // Inline small CSS files (<= 4 kB) directly into HTML for fewer requests
    inlineStylesheets: 'auto',
    // Asset file names inside build/
    assets: '_assets',
  },

  // ── Dev server ────────────────────────────────────────────────────────────
  server: {
    port: 4321,
    host: true,          // expose on the local network (0.0.0.0)
  },

  // ── Vite pass-through ────────────────────────────────────────────────────
  vite: {
    build: {
      // Split vendor chunks for better long-term caching
      chunkSizeWarningLimit: 600,
    },
  },
});
