// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://simplesketchpad.com',
  i18n: {
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Emit <xhtml:link rel="alternate" hreflang="..."> alternates for every
      // locale version of each page so search engines treat all 9 languages
      // as independent, canonical pages (Google's recommended pattern).
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ja: 'ja',
          fr: 'fr',
          de: 'de',
          pt: 'pt',
          ko: 'ko',
          it: 'it',
          zh: 'zh-CN',
        },
      },
      serialize(item) {
        // Fresh pages are crawled sooner; lastmod reflects the site content date.
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
