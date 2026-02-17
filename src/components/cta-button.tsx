"use client";

import { useUTM } from "@/components/utm-provider";
import { appendUTMToURL } from "@/lib/utm";
import type { Locale } from "@/i18n/config";

interface CTAButtonProps {
  children: React.ReactNode;
  productId?: string;
  lang: Locale;
  variant?: "primary" | "secondary";
  className?: string;
}

export function CTAButton({
  children,
  productId,
  lang,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const utmParams = useUTM();

  const baseURL = `/${lang}/checkout${productId ? `?product=${productId}` : ""}`;
  const href = appendUTMToURL(baseURL, utmParams);

  const styles =
    variant === "primary"
      ? "bg-linear-to-r from-gold-600 to-gold-500 text-white shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/30 hover:brightness-110"
      : "bg-green-900 text-white shadow-lg hover:bg-green-800";

  return (
    <a
      href={href}
      className={`inline-block rounded-xl px-8 py-4 text-center text-lg font-bold transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-400/50 active:scale-[0.98] ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
