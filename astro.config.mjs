import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import alpine from "@astrojs/alpinejs";
import partytown from '@astrojs/partytown'
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import { DEFAULT_LOCALE, LOCALES, SITE_URL } from "./src/consts";

const defaultLocale = DEFAULT_LOCALE;
const locales = LOCALES;

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	trailingSlash: "always",
	build: {
		format: "directory",
	},
	vite: {
		logLevel: "error",
		define: {
			__DATE__: `'${new Date()}'`,
		},
	},
	integrations: [
    icon({
      include: {
				academicons: ["*"],
				tabler: ["*"],
        mdi: ["*"], // (Default) Loads entire Material Design Icon set
      },
    }),
		mdx(),
		sitemap({
			i18n: {
				locales,
				defaultLocale,
			},
			filter: filterSitemapByDefaultLocale({
				defaultLocale,
			}),
		}),
		tailwind({
			applyBaseStyles: false,
		}),
		alpine(),
		i18n({
			locales,
			defaultLocale,
			exclude: ["pages/api/**/*", "pages/rss.xml.ts", "pages/[locale]/rss.xml.ts"],
		}),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
	],
});
