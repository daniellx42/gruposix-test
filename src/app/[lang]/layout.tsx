import type { Metadata } from "next";
import { inter, merriweather } from "@/lib/fonts";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { UTMProvider } from "@/components/utm-provider";
import { JsonLd } from "@/components/head/json-ld";
import "../globals.css";
import { Keywords } from "@/components/head/keywords";
import { Preconnect } from "@/components/head/preconnect";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: {
      default: dict.meta.title,
      template: `%s | Grupo Six`,
    },
    description: dict.meta.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "pt-BR": "/pt",
        "en-US": "/en",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html
      lang={lang === "pt" ? "pt-BR" : "en"}
      className={`${inter.variable} ${merriweather.variable}`}
    >
      <head>
        <JsonLd />
        <Keywords />
        <Preconnect />
      </head>
      <body>
        <UTMProvider>{children}</UTMProvider>
      </body>
    </html>
  );
}
