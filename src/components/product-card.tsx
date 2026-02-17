import type { Locale } from "@/i18n/config";
import { CTAButton } from "@/components/cta-button";

interface ProductItem {
  id: string;
  name: string;
  description: string;
  originalPrice: string;
  currentPrice: string;
  savings: string;
  tag?: string;
  features: string[];
}

interface ProductCardProps {
  product: ProductItem;
  labels: { popular: string; bestValue: string; cta: string };
  lang: Locale;
}

export function ProductCard({ product, labels, lang }: ProductCardProps) {
  const isHighlighted = product.tag === "popular";

  return (
    <article
      className={`relative flex flex-col rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 md:p-8 ${
        isHighlighted
          ? "scale-[1.02] border-gold-500 bg-white shadow-2xl shadow-gold-500/10 md:scale-105"
          : "border-neutral-200 bg-white shadow-lg hover:shadow-xl"
      }`}
    >
      {product.tag && (
        <span
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold tracking-wider uppercase ${
            product.tag === "popular"
              ? "bg-linear-to-r from-gold-600 to-gold-500 text-white"
              : "bg-green-900 text-white"
          }`}
        >
          {product.tag === "popular" ? labels.popular : labels.bestValue}
        </span>
      )}

      <h3 className="mb-1 font-serif text-xl font-bold text-green-900 md:text-2xl">
        {product.name}
      </h3>
      <p className="mb-4 text-sm text-neutral-500">{product.description}</p>

      <div className="mb-2">
        <span className="text-sm text-neutral-500 line-through">
          {product.originalPrice}
        </span>
        <span className="ml-2 font-serif text-3xl font-bold text-green-900 md:text-4xl">
          {product.currentPrice}
        </span>
      </div>
      <p className="mb-5 text-sm font-semibold text-gold-600">
        {product.savings}
      </p>

      <ul className="mb-6 flex-1 space-y-2.5" role="list">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-neutral-700"
          >
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <CTAButton
        lang={lang}
        productId={product.id}
        variant={isHighlighted ? "primary" : "secondary"}
        className="w-full"
      >
        {labels.cta}
      </CTAButton>
    </article>
  );
}
