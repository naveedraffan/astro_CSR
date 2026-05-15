# Astro CSR Sample

A minimal multi-page [Astro](https://astro.build) app configured for **client-side rendering (static output)** with a custom build output directory, using **Yarn** as the package manager.

---

## Quick start

```bash
yarn install          # install dependencies
yarn dev              # dev server → http://localhost:4321
yarn build            # production build → ./build/
yarn preview          # preview ./build/ locally
```

---

## Build configuration

```js
// astro.config.mjs
export default defineConfig({
  output: 'static',     // CSR / SSG — no server runtime needed
  outDir: './build',    // ← custom output directory (default is ./dist)
  build: {
    assets: '_assets',           // asset subfolder inside ./build/
    inlineStylesheets: 'auto',   // inline small CSS for fewer requests
  },
});
```

After `yarn build`, serve the `./build/` folder from any static host:
- **Netlify / Vercel** — point publish directory to `build`
- **GitHub Pages** — push `build/` contents to `gh-pages` branch
- **AWS S3 + CloudFront** — upload `build/` to your bucket

---

## Project structure

```
astro-csr-sample/
├── astro.config.mjs          ← output: static, outDir: ./build
├── package.json              ← Yarn + scripts
├── tsconfig.json
├── .yarnrc.yml               ← nodeLinker: node-modules
├── .gitignore                ← ignores build/ and node_modules/
├── public/
│   └── favicon.svg
└── src/
    ├── layouts/
    │   └── Layout.astro      ← shared shell, sticky nav, active link highlight
    └── pages/
        ├── index.astro       ← home + live client clock
        ├── counter.astro     ← increment/decrement with step size + history log
        ├── todos.astro       ← todo list persisted in localStorage
        ├── gallery.astro     ← filterable + searchable card grid
        └── about.astro       ← build config reference + tech stack
```

---

## Pages

| Route | What it demonstrates |
|-------|----------------------|
| `/` | Live client-side clock ticking every second |
| `/counter` | Stateful counter with configurable step and history log |
| `/todos` | Full CRUD todo list persisted via `localStorage` |
| `/gallery` | Category filter + keyword search — all client-side |
| `/about` | Build config docs and scripts reference |

---

## Deploying

No server required — just host the `./build/` folder:

```bash
yarn build
# Then upload ./build/ to your host of choice
```

For a quick local check:

```bash
yarn preview   # serves ./build/ at http://localhost:4321
```
