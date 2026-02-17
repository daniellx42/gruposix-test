import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { VideoPlayer } from "@/components/video-player";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import dynamic from "next/dynamic";

const Benefits = dynamic(() =>
  import("@/components/benefits").then((mod) => mod.Benefits),
);
const ProductsSection = dynamic(() =>
  import("@/components/products-section").then((mod) => mod.ProductsSection),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/testimonials-section").then(
    (mod) => mod.TestimonialsSection,
  ),
);
const UrgencyBanner = dynamic(() =>
  import("@/components/urgency-banner").then((mod) => mod.UrgencyBanner),
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}`,
    },
  };
}
const IMAGE_URL =
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1920&q=80";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Navbar dict={dict.nav} lang={lang as Locale} />
      <main>
        <Hero dict={dict.hero} lang={lang as Locale} />

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="mb-8 text-center">
                <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-gold-600 uppercase">
                  {dict.video.sectionTitle}
                </span>
                <h2 className="mb-3 font-serif text-3xl font-bold text-green-900 md:text-4xl">
                  {dict.video.title}
                </h2>
                <p className="mx-auto max-w-xl text-neutral-500 md:text-lg">
                  {dict.video.subtitle}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <VideoPlayer label={dict.video.label} />
            </ScrollReveal>
          </div>
        </section>

        <div className="relative h-48 w-full overflow-hidden md:h-64">
          <Image
            src={IMAGE_URL}
            alt="Natural healthy food and supplements"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1920}
            height={256}
          />
          <div className="absolute inset-0 bg-linear-to-r from-green-900/60 via-green-900/30 to-green-900/60" />
        </div>

        <Benefits dict={dict.benefits} />
        <ProductsSection dict={dict.products} lang={lang as Locale} />
        <TestimonialsSection dict={dict.testimonials} />
        <UrgencyBanner dict={dict.urgency} lang={lang as Locale} />
      </main>
      <Footer dict={dict.footer} lang={lang as Locale} />
    </>
  );
}
