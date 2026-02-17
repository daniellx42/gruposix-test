interface TestimonialItem {
  name: string;
  initials: string;
  location: string;
  text: string;
  result: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-green-700 to-green-900 text-sm font-bold text-white"
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-green-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-neutral-500">{testimonial.location}</p>
        </div>
        <div
          className="ml-auto flex gap-0.5 text-gold-500"
          aria-label="5 stars"
          role="img"
        >
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
      </div>
      <blockquote className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <p className="rounded-lg bg-green-50 px-3 py-2 text-center text-xs font-semibold text-green-800">
        {testimonial.result}
      </p>
    </article>
  );
}
