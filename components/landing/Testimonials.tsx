import { Eyebrow } from "./Eyebrow";
import { testimonials } from "./data";

function GoogleGIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      aria-hidden
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-20 bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Eyebrow>Testimonios</Eyebrow>
          <h2 className="font-display text-3xl lg:text-[42px] font-bold text-[#212C7C] mb-5">
            Somos tu mejor Socio
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
            Amplia tus posibilidades de crecimiento Junto a Biant, te ofrecemos
            una amplia gama de coberturas en el ramo que necesites para que
            siempre tengas opción para hacer crecer tu cartera y aumentar tus
            ingresos.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
            No solo ofrecemos una amplia cobertura, sino también un ambiente de
            trabajo positivo y colaborativo. En nuestra organización, valoramos
            a nuestros productores y les brindamos las herramientas y el apoyo
            que necesitan para tener éxito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_44px_-16px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              <span
                aria-label="Reseña de Google"
                className="absolute top-5 right-5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white ring-1 ring-gray-200 shadow-sm"
              >
                <GoogleGIcon className="h-5 w-5" />
              </span>

              <div className="flex items-center gap-3 mb-3 pr-12">
                <div className="relative shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white border border-gray-200"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white ring-2 ring-white shadow-sm">
                    <GoogleGIcon className="h-3 w-3" />
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[15px] text-gray-900 leading-tight truncate">
                    {t.name}
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-1.5 mb-3"
                aria-label="5 de 5 estrellas"
              >
                <span className="flex items-center gap-0.5 text-[#FBBC04]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-[18px] w-[18px]" />
                  ))}
                </span>
                <span className="text-[12px] text-gray-500 font-medium">5,0</span>
              </div>

              <p className="text-gray-700 text-[14px] leading-relaxed flex-1">
                “{t.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
