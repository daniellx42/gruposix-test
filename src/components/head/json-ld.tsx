export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SixGreen — Premium Natural Supplement",
    description: "Premium blend of superfoods and adaptogens by Grupo Six.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    publisher: {
      "@type": "Organization",
      name: "Grupo Six",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "197.00",
      highPrice: "597.00",
      priceCurrency: "BRL",
      offerCount: 3,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
