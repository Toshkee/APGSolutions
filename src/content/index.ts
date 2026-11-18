import type { Locale } from "@/i18n";
import * as enApg from "./en/apg";
import * as enLegal from "./en/legal";
import * as esApg from "./es/apg";
import * as esLegal from "./es/legal";

// The English files define the shape. TypeScript flags any Spanish text that is missing or has the wrong shape.
export type Dictionary = typeof enApg & typeof enLegal;

const dictionaries: Record<Locale, Dictionary> = {
  en: { ...enApg, ...enLegal },
  es: { ...esApg, ...esLegal },
};

export const getDictionary = (lang: Locale) => dictionaries[lang];
