import type { Locale } from "./locales";

export type ToolPageKey = "online-drawing" | "drawing-board" | "whiteboard" | "graph-paper" | "kids-drawing";

export const TOOL_PAGE_KEYS: ToolPageKey[] = ["online-drawing", "drawing-board", "whiteboard", "graph-paper", "kids-drawing"];

export interface ToolPageFaq {
  q: string;
  a: string;
}

export interface ToolPageSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface ToolPageRelated {
  key: ToolPageKey;
  label: string;
  blurb: string;
}

export type ToolRelatedInfo = Record<ToolPageKey, { label: string; blurb: string }>;

export const TOOL_DISPLAY_ORDER: ToolPageKey[] = ["online-drawing", "drawing-board", "whiteboard", "graph-paper", "kids-drawing"];

export const TOOL_ROUTES: Record<ToolPageKey, string> = {
  "online-drawing": "/online-drawing",
  "drawing-board": "/drawing-board",
  whiteboard: "/whiteboard",
  "graph-paper": "/graph-paper",
  "kids-drawing": "/kids-drawing",
};

export interface ToolPageContent {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string[];
  sections: ToolPageSection[];
  relatedHeading: string;
  related: ToolRelatedInfo;
  faqHeading: string;
  faq: ToolPageFaq[];
  closing: string[];
}

export type ToolPageContentMap = Record<ToolPageKey, ToolPageContent>;

export type ToolContent = Record<Locale, ToolPageContentMap>;