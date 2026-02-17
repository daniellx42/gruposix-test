import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { ThankYouContent } from "./_components/content";

export const metadata: Metadata = {
  title: "Obrigado",
  robots: { index: false, follow: false },
};

export default async function ObrigadoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return <ThankYouContent dict={dict.thankyou} lang={lang} />;
}
