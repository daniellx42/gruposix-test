"use client";

import { useUTM } from "@/components/utm-provider";
import { UTM_KEYS } from "@/types/utm";

interface ThankYouContentProps {
  dict: {
    title: string;
    subtitle: string;
    utmTitle: string;
    back: string;
  };
  lang: string;
}

export function ThankYouContent({ dict, lang }: ThankYouContentProps) {
  const utmParams = useUTM();
  const hasUTM = UTM_KEYS.some((key) => utmParams[key] !== "");

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center md:py-32">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>

      <h1 className="mb-4 font-serif text-3xl font-bold text-green-900 md:text-4xl">
        {dict.title}
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-neutral-600">
        {dict.subtitle}
      </p>

      {hasUTM && (
        <div className="mb-8 rounded-xl border border-neutral-200 bg-white p-6 text-left shadow-sm">
          <h2 className="mb-4 text-sm font-semibold tracking-wide text-neutral-500 uppercase">
            {dict.utmTitle}
          </h2>
          <dl className="space-y-2">
            {UTM_KEYS.map((key) =>
              utmParams[key] ? (
                <div key={key} className="flex justify-between gap-4">
                  <dt className="text-sm font-medium text-neutral-500">{key}</dt>
                  <dd className="text-sm font-semibold text-green-900">{utmParams[key]}</dd>
                </div>
              ) : null
            )}
          </dl>
        </div>
      )}

      <a
        href={`/${lang}`}
        className="text-sm text-green-700 underline underline-offset-2 hover:text-green-900"
      >
        {dict.back}
      </a>
    </div>
  );
}
