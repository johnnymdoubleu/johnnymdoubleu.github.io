# Astro 7 native i18n implementation

This directory contains the actual replacement and new source files for
`johnnymdoubleu/johnnymdoubleu.github.io`. It does not contain a migration
program.

## Apply to the repository

From the root of a clean checkout, copy the contents of this directory over the
repository, preserving paths. Then remove the two obsolete files listed below:

```sh
rm src/content/config.ts
rm 'src/pages/[locale]/rss.xml.ts'
```

Install the new dependency graph and run the build:

```sh
npm install
npm run build
```

The first `npm install` reconciles the repository's existing lockfile with Astro 7 and removes the old `astro-i18n-aut` and `@astrojs/tailwind` entries. Commit the resulting `package-lock.json`. The included GitHub Pages workflow uses `npm install` so that the first deployment is not blocked by the pre-migration lockfile; after committing the regenerated lockfile, you may change it back to `npm ci`.

## Retained URL behaviour

- English home: `/`
- English pages: `/about/`, `/publication/`, `/conference/`, `/teaching/`, `/blog/`
- Korean home: `/kr/`
- Korean pages: `/kr/about/`, `/kr/publication/`, `/kr/conference/`, `/kr/teaching/`, `/kr/blog/`
- English RSS: `/rss.xml`
- Korean RSS: `/kr/rss.xml`

The existing `src/locales/en.json` and `src/locales/kr.json` files are reused.
The local `src/utils/i18n.ts` helper replaces the four package functions used by
the site.

## Main changes

- `astro-i18n-aut` is removed.
- Astro native i18n is configured with `prefixDefaultLocale: false`.
- Korean route wrappers reuse the existing English page components.
- `@astrojs/tailwind` is removed; Tailwind 3 remains configured through PostCSS.
- Content collections use Astro's Content Layer `glob()` loader.
- Content entry references use `entry.id` instead of the removed legacy `slug`.
- RSS handlers use uppercase `GET` exports.
- Node 22.12 or later is required for Astro 7.
