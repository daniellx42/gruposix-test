"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useUTM } from "@/components/utm-provider";
import { UTM_KEYS } from "@/types/utm";
import type { Locale } from "@/i18n/config";

interface CheckoutContentProps {
  dict: {
    title: string;
    subtitle: string;
    orderSummary: string;
    total: string;
    pix: {
      title: string;
      instructions: string;
      copyCode: string;
      copied: string;
    };
    finalize: string;
    secure: string;
    back: string;
  };
  products: Array<{
    id: string;
    name: string;
    currentPrice: string;
    description: string;
  }>;
  lang: Locale;
}

export function CheckoutContent({
  dict,
  products,
  lang,
}: CheckoutContentProps) {
  const searchParams = useSearchParams();
  const utmParams = useUTM();
  const [copied, setCopied] = useState(false);
  const [processing, setProcessing] = useState(false);

  const productId = searchParams.get("product") || "3pack";
  const product = products.find((p) => p.id === productId) || products[1];

  const handleCopy = async () => {
    await navigator.clipboard.writeText("FAKE_PIX_CODE");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFinalize = () => {
    setProcessing(true);
    const utmQuery = UTM_KEYS.filter((key) => utmParams[key])
      .map((key) => `${key}=${encodeURIComponent(utmParams[key])}`)
      .join("&");
    const url = `/${lang}/obrigado${utmQuery ? `?${utmQuery}` : ""}`;

    setTimeout(() => {
      window.location.href = url;
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-24 md:py-32">
      <div className="mb-8 text-center">
        <h1 className="mb-2 font-serif text-3xl font-bold text-green-900">
          {dict.title}
        </h1>
        <p className="text-neutral-500">{dict.subtitle}</p>
      </div>

      <div className="mb-6 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-neutral-500 uppercase">
          {dict.orderSummary}
        </h2>
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-3">
          <div>
            <p className="font-medium text-green-900">{product.name}</p>
            <p className="text-xs text-neutral-500">{product.description}</p>
          </div>
          <p className="font-serif text-lg font-bold text-green-900">
            {product.currentPrice}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-green-900">{dict.total}</p>
          <p className="font-serif text-2xl font-bold text-green-900">
            {product.currentPrice}
          </p>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-green-900">
          {dict.pix.title}
        </h2>
        <p className="mb-5 text-sm text-neutral-500">{dict.pix.instructions}</p>

        <div className="mx-auto mb-5 flex h-48 w-48 items-center justify-center rounded-lg bg-white p-2 shadow-inner">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full"
            aria-label="QR Code"
          >
            <rect width="100" height="100" fill="white" />
            <g fill="#064e3b">
              <rect x="5" y="5" width="25" height="25" />
              <rect x="70" y="5" width="25" height="25" />
              <rect x="5" y="70" width="25" height="25" />
              <rect x="10" y="10" width="15" height="15" fill="white" />
              <rect x="75" y="10" width="15" height="15" fill="white" />
              <rect x="10" y="75" width="15" height="15" fill="white" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="79" y="14" width="7" height="7" />
              <rect x="14" y="79" width="7" height="7" />
              <rect x="35" y="5" width="5" height="5" />
              <rect x="45" y="5" width="5" height="5" />
              <rect x="55" y="5" width="5" height="5" />
              <rect x="35" y="15" width="5" height="5" />
              <rect x="50" y="15" width="10" height="5" />
              <rect x="35" y="25" width="10" height="5" />
              <rect x="55" y="25" width="5" height="5" />
              <rect x="5" y="35" width="5" height="5" />
              <rect x="15" y="35" width="10" height="5" />
              <rect x="35" y="35" width="5" height="5" />
              <rect x="45" y="35" width="5" height="5" />
              <rect x="55" y="35" width="10" height="5" />
              <rect x="75" y="35" width="10" height="5" />
              <rect x="5" y="45" width="5" height="5" />
              <rect x="20" y="45" width="5" height="5" />
              <rect x="35" y="45" width="10" height="5" />
              <rect x="55" y="45" width="5" height="5" />
              <rect x="70" y="45" width="5" height="5" />
              <rect x="85" y="45" width="10" height="5" />
              <rect x="10" y="55" width="5" height="5" />
              <rect x="25" y="55" width="5" height="5" />
              <rect x="40" y="55" width="10" height="5" />
              <rect x="60" y="55" width="5" height="5" />
              <rect x="75" y="55" width="10" height="5" />
              <rect x="35" y="65" width="5" height="5" />
              <rect x="50" y="65" width="5" height="5" />
              <rect x="65" y="65" width="5" height="5" />
              <rect x="80" y="65" width="5" height="5" />
              <rect x="35" y="75" width="10" height="5" />
              <rect x="55" y="75" width="5" height="5" />
              <rect x="70" y="75" width="15" height="5" />
              <rect x="35" y="85" width="5" height="5" />
              <rect x="50" y="85" width="10" height="5" />
              <rect x="70" y="85" width="5" height="5" />
              <rect x="85" y="85" width="10" height="5" />
            </g>
          </svg>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="w-full rounded-lg border border-green-900 px-4 py-3 text-sm font-semibold text-green-900 transition-all hover:bg-green-50 active:scale-[0.98]"
        >
          {copied ? dict.pix.copied : dict.pix.copyCode}
        </button>
      </div>

      <button
        type="button"
        onClick={handleFinalize}
        disabled={processing}
        className="w-full rounded-xl bg-linear-to-r from-gold-600 to-gold-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {processing ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                className="opacity-25"
              />
              <path
                d="M4 12a8 8 0 018-8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="opacity-75"
              />
            </svg>
            Processando...
          </span>
        ) : (
          dict.finalize
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-400">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
            clipRule="evenodd"
          />
        </svg>
        {dict.secure}
      </p>

      <div className="mt-6 text-center">
        <a
          href={`/${lang}`}
          className="text-sm text-neutral-500 underline underline-offset-2 hover:text-green-700"
        >
          {dict.back}
        </a>
      </div>
    </div>
  );
}
