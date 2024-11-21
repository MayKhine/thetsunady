# Thet Su Nady Portfolio

### Link: https://maykhine.github.io/thetsunady/

### React + TypeScript + Vite Project

- rm -rf dist
  - remove the dist file
- pnpm build
  - build dist
- pnpm clean:gh-pages && pnpm deploy:gh-pages
  - clean gh pages and deploy

* have to have
  vite.config.ts: base: "/thetsunady",
  package.json: "homepage": "https://maykhine.github.io/thetsunady",
