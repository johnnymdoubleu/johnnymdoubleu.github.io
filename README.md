### Features:

* ✅ Astro 7
* ✅ Tailwind CSS
* ✅ Alpine.js
* ✅ TypeScript
* ✅ English and Korean language support
* ✅ Localisation with Astro's native i18n routing
* ✅ Dark/light mode
* ✅ Blog using Astro Content Collections
* ✅ Discussions with Giscus
* ✅ CMS for editing blog posts with Sveltia CMS
* ✅ Localised sitemap
* ✅ Localised RSS feeds
* ✅ Progressive Web App support

### Project Structure

Inside my Astro project, you will see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── locales/
│   │   ├── en.json
│   │   ├── kr.json
│   │   └── locales.d.ts
│   ├── pages/
│   │   ├── kr/
│   │   ├── 404.astro
│   │   └── rss.xml.ts
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── blog.ts
│   │   ├── i18n.ts
│   │   ├── site.ts
│   │   └── t.ts
│   ├── consts.ts
│   └── content.config.ts
├── .nvmrc
├── astro.config.mjs
├── package.json
├── postcss.config.cjs
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

Astro looks for `.astro`, `.md`, and `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its filename and directory structure.

English is the default language and uses unprefixed routes such as `/about/` and `/blog/`. Korean pages use the `/kr/` prefix, such as `/kr/about/` and `/kr/blog/`. Localisation is handled using Astro's native i18n routing together with the project-specific utilities in `src/utils/i18n.ts`.

The `src/components/` directory contains reusable Astro components used throughout the website.

The `src/content/` directory contains collections of related Markdown and MDX documents. Blog posts are stored in `src/content/blog/` and configured through `src/content.config.ts` using Astro's Content Layer API. The `getCollection()` and `render()` functions are used to retrieve and render blog posts.

Static assets such as images, icons, generated PWA assets, and CMS configuration files can be placed in the `public/` directory.

Tailwind CSS is processed through PostCSS using `postcss.config.cjs`, while site-wide styles are defined in `src/styles/global.css`.

### Want to learn more about Astro?

Check out the [Astro documentation](https://docs.astro.build) or join the [Astro Discord server](https://astro.build/chat).
