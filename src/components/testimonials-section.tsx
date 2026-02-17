import type { Dictionary } from "@/i18n/dictionaries";
import { TestimonialCard } from "@/components/testimonial-card";
import { ScrollReveal } from "@/components/scroll-reveal";

interface TestimonialsSectionProps {
  dict: Dictionary["testimonials"];
}

export function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="px-4 py-16 md:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center md:mb-16">
            <h2 id="testimonials-heading" className="mb-3 font-serif text-3xl font-bold text-green-900 md:text-4xl">
              {dict.title}
            </h2>
            <p className="mx-auto max-w-xl text-neutral-500 md:text-lg">{dict.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {dict.items.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 100}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
