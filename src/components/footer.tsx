import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

interface FooterProps {
  dict: Dictionary["footer"];
  lang: Locale;
}

export function Footer({ dict, lang }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-xs leading-relaxed text-neutral-500 md:text-sm">
          {dict.disclaimer}
        </p>
        <nav
          aria-label="Legal links"
          className="mb-6 flex justify-center gap-6"
        >
          <Link
            href={`/${lang}/politica-privacidade`}
            className="text-sm text-neutral-500 underline-offset-2 transition-colors hover:text-green-700 hover:underline"
          >
            {dict.privacy}
          </Link>
          <Link
            href={`/${lang}/termos-de-uso`}
            className="text-sm text-neutral-500 underline-offset-2 transition-colors hover:text-green-700 hover:underline"
          >
            {dict.terms}
          </Link>
        </nav>
        <p className="text-xs text-neutral-500">
          &copy; {year} {dict.brand}. {dict.rights}
        </p>
      </div>
    </footer>
  );
}
