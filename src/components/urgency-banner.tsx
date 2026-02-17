import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { CountdownTimer } from "@/components/countdown-timer";
import { CTAButton } from "@/components/cta-button";
import { ScrollReveal } from "@/components/scroll-reveal";

interface UrgencyBannerProps {
  dict: Dictionary["urgency"];
  lang: Locale;
}

export function UrgencyBanner({ dict, lang }: UrgencyBannerProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-green-950 via-green-900 to-green-800 px-4 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="mb-3 font-serif text-3xl font-bold text-white md:text-4xl">
            {dict.title}
          </h2>
          <p className="mb-8 text-green-200/80 md:text-lg">{dict.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mb-8">
            <CountdownTimer
              labels={{
                hours: dict.hours,
                minutes: dict.minutes,
                seconds: dict.seconds,
              }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mb-6 flex items-center justify-center gap-2 text-sm text-gold-400">
            <span
              className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-500"
              aria-hidden="true"
            />
            {dict.stock}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <CTAButton lang={lang} productId="3pack" className="w-full max-w-sm">
            {dict.cta}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
