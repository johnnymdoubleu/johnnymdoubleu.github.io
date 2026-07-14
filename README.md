### Features:

-   ✅ Tailwind CSS
-   ✅ Alpine js
-   ✅ Typescript
-   ✅ English and Korean Language Support
-   ✅ Localisation (with astro-i18n-aut)
-   ✅ Dark/light mode
-   ✅ Blog
-   ✅ Discussions (with Giscus)
-   ✅ CMS for editing blog post (with Sveltia CMS)
-   ✅ Sitemap (localised)
-   ✅ RSS (localised)
-   ✅ PWA

### 🚀 Project Structure

Inside of my Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── locales/
│   |   ├── en.json
│   |   ├── kr.json
│   |   └── locales.d.ts
│   ├── pages/
|   |   └── /...
│   ├── styles/
│   |   └── global.css
│   ├── utils/
│   |   ├── blog.ts
│   |   ├── site.ts
│   |   └── t.ts
│   └── consts.ts/
├── astro.config.mjs
├── README.md
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

### 👀 Want to learn more about Astro?

Check out [Astro documentation](https://docs.astro.build) or jump into Astro [Discord server](https://astro.build/chat).
