# Welcome to [Astro](https://astro.build) SSG and SSR hybrid pattern for Cloudflare

Deploys an hybrid build to Cloudflare Pages allowing full content generation control

## ❓ Why

- Deploying a full SSR website isn't always optimal
- SSG is faster, cheaper, greener, and more reliable.
- SSR is sometimes required
- Cloudflare [recommends](https://developers.cloudflare.com/pages/platform/functions/routing/#function-invocation-routes) the pattern
- Because Astro is abstract enough and we can

## 🧨 How

Build Astro with both targets and merge the result

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
├── public/
│   └── favicon.svg
│   └── _routes.json
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── ssg/pages/
│   │       └── index.astro
│   │       └── 404.astro
│   └── ssr/pages/
│           └── ssr.astro
│           └── dilbert-ssr.astro
├── package.json
├── astro.config.base.mjs
├── astro.config.ssg.mjs
├── astro.config.ssr.mjs
└── astro.config.ssr.mjs
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Installs dependencies                           |
| `npm run dev-ssg` | Starts local SSG dev server at `localhost:3000` |
| `npm run dev-ssr` | Starts local SSR dev server at `localhost:3000` |
| `npm run build`   | Build your production site to `./dist/`         |
| `npm run preview` | Preview your full build locally with Wrangler   |
| `npm run watch`   | Update build for preview                        |

## 👀 See it running

[Demo](https://astro-ssg-ssr-cloudflare.pages.dev/)
