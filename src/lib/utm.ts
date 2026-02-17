import { UTMParams, UTM_KEYS } from "@/types/utm";

const STORAGE_KEY = "vsl_utm_params";

export function parseUTMFromURL(searchParams: URLSearchParams): UTMParams {
  const params: UTMParams = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  };

  for (const key of UTM_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  }

  return params;
}

export function storeUTM(params: UTMParams): void {
  if (typeof window === "undefined") return;
  const hasAny = UTM_KEYS.some((k) => params[k] !== "");
  if (hasAny) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  }
}

export function loadUTM(): UTMParams {
  if (typeof window === "undefined") {
    return { utm_source: "", utm_medium: "", utm_campaign: "", utm_term: "", utm_content: "" };
  }

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UTMParams;
    }
  } catch {
    // Ignore parse errors
  }

  return { utm_source: "", utm_medium: "", utm_campaign: "", utm_term: "", utm_content: "" };
}

export function appendUTMToURL(path: string, params: UTMParams): string {
  const utmEntries = UTM_KEYS
    .filter((key) => params[key])
    .map((key) => `${key}=${encodeURIComponent(params[key])}`);

  if (utmEntries.length === 0) return path;

  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}${utmEntries.join("&")}`;
}
