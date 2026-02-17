import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/scroll-reveal";

interface ProductsSectionProps {
  dict: Dictionary["products"];
  lang: Locale;
}

export function ProductsSection({ dict, lang }: ProductsSectionProps) {
  return (
    <section id="plans" className="bg-neutral-50 px-4 py-16 md:py-24" aria-labelledby="products-heading">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center md:mb-16">
            <h2 id="products-heading" className="mb-3 font-serif text-3xl font-bold text-green-900 md:text-4xl">
              {dict.title}
            </h2>
            <p className="mx-auto max-w-xl text-neutral-500 md:text-lg">{dict.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-3 md:gap-8">
          {dict.items.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 100}>
              <ProductCard
                product={product}
                labels={{ popular: dict.popular, bestValue: dict.bestValue, cta: dict.cta }}
                lang={lang}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="mt-8 text-center text-sm text-neutral-500">
            <svg viewBox="0 0 20 20" fill="currentColor" className="mr-1 inline h-4 w-4 text-green-600" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            {dict.guarantee}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
