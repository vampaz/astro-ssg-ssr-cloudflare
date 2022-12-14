# Welcome to [Astro](https://astro.build) SSG and SSR hybrid pattern for Cloudflare

Deploys an hybrid build to Cloudflare Pages allowing full content generation control

## โ Why

- Deploying a full SSR website isn't always optimal
- SSG is faster, cheaper, greener, and more reliable.
- SSR is sometimes required
- Cloudflare [recommends](https://developers.cloudflare.com/pages/platform/functions/routing/#function-invocation-routes) the pattern
- Because Astro is abstract enough and we can

## ๐งจ How

Build Astro with both targets and merge the result

## ๐ Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
โโโ public/
โ   โโโ favicon.svg
โ   โโโ _routes.json
โโโ src/
โ   โโโ components/
โ   โ   โโโ Card.astro
โ   โโโ layouts/
โ   โ   โโโ Layout.astro
โ   โโโ ssg/pages/
โ   โ       โโโ index.astro
โ   โ       โโโ 404.astro
โ   โโโ ssr/pages/
โ           โโโ ssr.astro
โ           โโโ dilbert-ssr.astro
โโโ package.json
โโโ astro.config.base.mjs
โโโ astro.config.ssg.mjs
โโโ astro.config.ssr.mjs
โโโ astro.config.ssr.mjs
```

## ๐ง Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Installs dependencies                           |
| `npm run dev-ssg` | Starts local SSG dev server at `localhost:3000` |
| `npm run dev-ssr` | Starts local SSR dev server at `localhost:3000` |
| `npm run build`   | Build your production site to `./dist/`         |
| `npm run preview` | Preview your full build locally with Wrangler   |
| `npm run watch`   | Update build for preview                        |

## ๐ See it running

[Demo](https://astro-ssg-ssr-cloudflare.pages.dev/)
