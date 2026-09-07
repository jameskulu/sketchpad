export type Locale = "en" | "es" | "ja" | "fr" | "de" | "pt" | "ko" | "it";

export interface LocaleMeta {
  code: Locale;
  label: string;
  /** BCP-47 tag, e.g. <html lang> and hreflang */
  lang: string;
  /** Native name shown in the language picker */
  native: string;
}

export const LOCALES: LocaleMeta[] = [
  { code: "en", label: "English", lang: "en", native: "English" },
  { code: "es", label: "Español", lang: "es", native: "Español" },
  { code: "ja", label: "日本語", lang: "ja", native: "日本語" },
  { code: "fr", label: "Français", lang: "fr", native: "Français" },
  { code: "de", label: "Deutsch", lang: "de", native: "Deutsch" },
  { code: "pt", label: "Português", lang: "pt", native: "Português" },
  { code: "ko", label: "한국어", lang: "ko", native: "한국어" },
  { code: "it", label: "Italiano", lang: "it", native: "Italiano" },
];

export const DEFAULT_LOCALE: Locale = "en";

/** Directory used for prefixed locales (matching Astro i18n config). */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
}

/** Absolute URL for a given route in a given locale (for hreflang/sitemap). */
export function absoluteLocaleUrl(locale: Locale, route = "/"): string {
  return `${SITE_URL()}${deriveLocaleHref(locale, route)}`;
}

let _siteUrl = "https://simplesketchpad.com";
export function setSiteUrl(url: string): void {
  _siteUrl = url;
}
function SITE_URL(): string {
  return _siteUrl;
}

/**
 * Given the current route (a path) and a target locale, produce the localized href.
 * e.g. deriveLocaleHref("es", "/about/") -> "/es/about/"
 */
export function deriveLocaleHref(locale: Locale, currentPath: string): string {
  const isDefault = locale === DEFAULT_LOCALE;
  const segments = currentPath.split("/").filter(Boolean);

  // Strip any existing locale prefix (the first segment, if it matches a non-default locale).
  const first = segments[0] as Locale | undefined;
  const hasPrefix = !!first && first !== DEFAULT_LOCALE && LOCALES.some((l) => l.code === first);
  const rest = hasPrefix ? segments.slice(1) : segments;

  const base = isDefault ? "/" : `/${locale}/`;
  if (rest.length === 0) return base;
  return `${base}${rest.join("/")}/`;
}

/**
 * The list of all alternate-language URLs for the current route (including itself).
 * Used to build the hreflang link set.
 */
export function localeAlternates(currentPath: string): Array<{ code: Locale; href: string }> {
  return LOCALES.map((l) => ({ code: l.code, href: deriveLocaleHref(l.code, currentPath) }));
}
