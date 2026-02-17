import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { CTAButton } from "@/components/cta-button";
import { ScrollReveal } from "@/components/scroll-reveal";

interface HeroProps {
  dict: Dictionary["hero"];
  lang: Locale;
}

export function Hero({ dict, lang }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center overflow-hidden bg-linear-to-br from-green-950 via-green-900 to-green-800"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-700/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-green-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pt-24 pb-16 text-center md:pt-32 md:pb-24">
        <ScrollReveal delay={0}>
          <span className="mb-6 inline-block rounded-full border border-green-500/30 bg-green-800/50 px-4 py-1.5 text-xs font-medium tracking-wider text-green-200 uppercase backdrop-blur-sm">
            {dict.badge}
          </span>
        </ScrollReveal>

        <div className="mb-6 animate-fade-in">
          <h1 className="font-serif text-4xl leading-tight font-black text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {dict.title}{" "}
            <span className="bg-linear-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              {dict.highlight}
            </span>
          </h1>
        </div>

        <div className="mb-8 animate-fade-in animation-delay-200">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-green-100/80 md:text-xl">
            {dict.subtitle}
          </p>
        </div>

        <ScrollReveal delay={300}>
          <div className="flex flex-col items-center gap-4">
            <CTAButton
              lang={lang}
              productId="3pack"
              className="w-full max-w-sm"
            >
              {dict.cta}
            </CTAButton>
            <div className="flex items-center gap-2 text-sm text-green-300/70">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-gold-400"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              {dict.trust}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {["MC", "RF", "AL", "PH", "LS"].map((initials, i) => (
                <div
                  key={initials}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-green-900 bg-green-700 text-xs font-bold text-white"
                  style={{ zIndex: 5 - i }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-green-300/60">{dict.trustedBy}</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute right-0 bottom-0 left-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 55 1440 60V60H0Z"
            fill="#fafaf5"
          />
        </svg>
      </div>
    </section>
  );
}
