import { DEFAULT_LOCALE, LOCALES } from "@src/consts";

export type Locale = keyof typeof LOCALES;

const localeCodes = Object.keys(LOCALES) as Locale[];
const localeSet = new Set<string>(localeCodes);
const localBase = "https://astro.local";

function toUrl(value: string | URL): URL {
  return value instanceof URL ? value : new URL(value, localBase);
}

function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && localeSet.has(value);
}

function ensureLeadingSlash(pathname: string): string {
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

/** Return the locale encoded in a URL, or the configured default locale. */
export function getLocale(value: string | URL): Locale {
  const firstSegment = toUrl(value).pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : (DEFAULT_LOCALE as Locale);
}

/** Return an empty prefix for English and /kr for Korean. */
export function getLocaleUrlPrefix(value: string | URL): string {
  const locale = getLocale(value);
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/** Remove a supported locale prefix while retaining the page path. */
export function getUrlWithoutLocale(value: string | URL): string {
  const pathname = ensureLeadingSlash(toUrl(value).pathname);
  const segments = pathname.split("/");

  if (isLocale(segments[1])) {
    segments.splice(1, 1);
  }

  const result = segments.join("/");
  return result === "" ? "/" : ensureLeadingSlash(result);
}

/** Build the equivalent URL for another locale, preserving query and hash. */
export function getLocalizedPath(value: string | URL, locale: Locale): string {
  const url = toUrl(value);
  const unprefixedPath = getUrlWithoutLocale(url);
  const localizedPath =
    locale === DEFAULT_LOCALE
      ? unprefixedPath
      : `/${locale}${unprefixedPath === "/" ? "/" : unprefixedPath}`;

  return `${localizedPath}${url.search}${url.hash}`;
}
