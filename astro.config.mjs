import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import alpine from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";
import tailwindcss from '@tailwindcss/vite';
import { DEFAULT_LOCALE, LOCALES, SITE_URL } from "./src/consts";


const defaultLocale = DEFAULT_LOCALE;
const locales = LOCALES;
const localeCodes = Object.keys(LOCALES);

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  compressHTML: true,
  i18n: {
    locales: localeCodes,
    defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: "directory",
  },
  vite: {
    logLevel: "error",
    define: {
      __DATE__: `'${new Date()}'`,
    },
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        academicons: ["*"],
        tabler: ["*"],
        mdi: ["*"],
      },
    }),
    mdx(),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
    }),
    alpine(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
