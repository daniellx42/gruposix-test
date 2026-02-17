import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Termos de Uso",
};

export default async function TermosDeUsoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main className="mx-auto max-w-3xl px-4 py-20 md:py-24">
      <Link
        href={`/${lang}`}
        className="mb-8 inline-flex items-center gap-1 text-sm text-green-700 transition-colors hover:text-green-900"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
        </svg>
        {dict.thankyou.back.includes("home") || dict.thankyou.back.includes("inicial") ? dict.thankyou.back : "Voltar"}
      </Link>

      <h1 className="mb-8 font-serif text-3xl font-bold text-green-900 md:text-4xl">
        {dict.terms.title}
      </h1>

      <div className="space-y-6 leading-relaxed text-neutral-700">
        {dict.terms.sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-2 text-lg font-semibold text-green-900">{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
        <p className="text-sm text-neutral-500">{dict.terms.lastUpdated}</p>
      </div>
    </main>
  );
}
