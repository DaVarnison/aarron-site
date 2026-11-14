# Aarron Warnagiris — portfolio

Personal portfolio at [aarronwarnagiris.com](https://aarronwarnagiris.com),
built with Astro and deployed to GitHub Pages on every push to `main`
(`.github/workflows/deploy.yml`).

## Structure

- `src/pages/index.astro` — the whole site. The content lives in arrays at
  the top of the file (`exp`, `earlier`, `projects`, `certs`, and the skill
  lists); edit those to update the page.
- `public/` — static files served as-is (`CNAME`, `favicon.svg`, `site.js`,
  `images/`). Link them with a leading slash (`/images/...`).

## Develop

```sh
npm install
npm run dev
```

Deploys run `npm ci`, so commit `package-lock.json` whenever dependencies
change.

## Custom domain

`public/CNAME` points the site at `aarronwarnagiris.com`.
