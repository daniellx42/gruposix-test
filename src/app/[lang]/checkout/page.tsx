import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Suspense } from "react";
import { CheckoutContent } from "./_components/checkout-content";

export const metadata: Metadata = {
  title: "Checkout",
  robots: { index: false, follow: false },
};

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const products = dict.products.items.map((p) => ({
    id: p.id,
    name: p.name,
    currentPrice: p.currentPrice,
    description: p.description,
  }));

  return (
    <Suspense>
      <CheckoutContent
        dict={dict.checkout}
        products={products}
        lang={lang as Locale}
      />
    </Suspense>
  );
}
