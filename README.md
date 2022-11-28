# Welcome to [Astro](https://astro.build) SSG and SSR hybrid pattern

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vampaz/astro-ssg-ssr-cloudflare/tree/latest/)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/vampaz/astro-ssg-ssr-cloudflare/tree/latest/)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
/
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

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
