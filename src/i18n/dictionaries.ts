import "server-only";
import { cache } from "react";
import type { Locale } from "./config";

const dictionaries = {
  pt: () => import("@/dictionaries/pt.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export const getDictionary = cache(async (locale: Locale) =>
  dictionaries[locale](),
);

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
