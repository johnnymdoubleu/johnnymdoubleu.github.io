/**
 * From https://github.com/trktml/lotusforafrica/blob/main/src/utils/translationTools.ts
 */
import { DEFAULT_LOCALE, LOCALES } from "@src/consts";
import { getLocale } from "@utils/i18n";
import en from "@locales/en.json";
import kr from "@locales/kr.json";

const handler = {
  get(target: any, prop: any) {
    return target[prop].replaceAll("\n", "<br/>");
  },
};

const kr_proxy = new Proxy(kr, handler);
const en_proxy = new Proxy(en, handler);

export const defaultLocale = DEFAULT_LOCALE;
export const locales = LOCALES;

/** Return all translations for the locale encoded in the URL. */
export default function t(astroUrl: URL): Locales {
  const locale = getLocale(astroUrl);

  switch (locale) {
    case "kr":
      return kr_proxy as Locales;
    default:
      return en_proxy as Locales;
  }
}

export function tFn(astroUrl: URL) {
  const locale = getLocale(astroUrl);
  const translations: any = locale === "kr" ? kr_proxy : en_proxy;

  return (key: string): string => {
    if (key in translations) {
      return translations[key];
    }

    console.warn(`Missing translation key: ${key}`);
    return key;
  };
}

/** Localize an internal path using the locale encoded in astroUrl. */
export function localizePath(link: string | URL, astroUrl: string | URL): string {
  const locale = getLocale(astroUrl);
  let localizedLink = "";

  if (locale !== defaultLocale) {
    localizedLink = `/${locale}/${link}`.replaceAll("//", "/");
  } else {
    localizedLink = String(link);
  }

  if (!localizedLink.endsWith("/")) {
    localizedLink += "/";
  }

  return localizedLink;
}
