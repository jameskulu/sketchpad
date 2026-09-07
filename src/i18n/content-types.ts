import type { Locale } from "./locales";

export interface PageContent {
  htmlLang: string;

  // SEO
  seoTitle: string;
  seoDescription: string;

  // Home app page (SeoContent equivalent)
  home: {
    h1: string;
    intro: string[];
    toolsHeading: string;
    tools: string[];
    rankingHeading: string;
    ranking: string[];
    kidsHeading: string;
    kids: string[];
    faqHeading: string;
    faq: Array<{ q: string; a: string }>;
    closing: string[];
  };

  // About
  about: {
    h1: string;
    intro: string[];
    whatHeading: string;
    what: string[];
    privacyHeading: string;
    privacy: string[];
    contactHeading: string;
    contact: string[];
  };

  // Contact
  contact: {
    h1: string;
    intro: string[];
    emailTitle: string;
    emailDesc: string;
    githubTitle: string;
    githubDesc: string;
  };

  // Privacy
  privacy: {
    h1: string;
    updated: string;
    shortHeading: string;
    short: string[];
    storeHeading: string;
    store: string[];
    storeList: string[];
    notHeading: string;
    notList: string[];
    cookiesHeading: string;
    cookies: string[];
    changesHeading: string;
    changes: string[];
    contactHeading: string;
    contact: string[];
  };

  // Terms
  terms: {
    h1: string;
    updated: string;
    sections: Array<{ title: string; body: string[] }>;
  };
}

export type Content = Record<Locale, PageContent>;
