"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useTransition,
  type ReactNode,
} from "react";
import { UTMParams } from "@/types/utm";
import { parseUTMFromURL, storeUTM, loadUTM } from "@/lib/utm";

const UTMContext = createContext<UTMParams>({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
});

export function useUTM() {
  return useContext(UTMContext);
}

export function UTMProvider({ children }: { children: ReactNode }) {
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });
  const [, startTransition] = useTransition();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const fromURL = parseUTMFromURL(searchParams);
    const hasURLParams = Object.values(fromURL).some((v) => v !== "");

    if (hasURLParams) {
      startTransition(() => {
        storeUTM(fromURL);
        setUtmParams(fromURL);
      });
    } else {
      const stored = loadUTM();
      startTransition(() => {
        setUtmParams(stored);
      });
    }
  }, []);

  return <UTMContext value={utmParams}>{children}</UTMContext>;
}
