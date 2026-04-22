import { Eyebrow } from "./Eyebrow";

const socials = [
  { label: "Instagram", icon: "icon-[mdi--instagram]", href: "https://www.instagram.com/biant.seguros/" },
  { label: "Facebook", icon: "icon-[mdi--facebook]", href: "#" },
  { label: "LinkedIn", icon: "icon-[mdi--linkedin]", href: "https://www.linkedin.com/in/seguros-biant-4202a21a6/" },
] as const;

export function RedesSociales() {
  return (
    <section
      id="crecimiento"
      className="scroll-mt-20 relative overflow-hidden bg-gradient-to-br from-[#39438A] via-[#212C7C] to-[#0e1654] py-24 px-6"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#E2482D]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[30rem] h-[30rem] rounded-full bg-[#3a47b8]/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <Eyebrow>
            <span className="text-[#ffb8a8]">Marketing Digital</span>
          </Eyebrow>
          <h2 className="font-display text-3xl lg:text-[42px] leading-[1.1] font-bold text-white mb-5">
            Poténciate con las{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#E2482D]">Redes Sociales</span>
              <span className="absolute inset-x-0 bottom-1 h-2 bg-white/20 rounded-sm" aria-hidden />
            </span>
          </h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-xl">
            En Biant entendemos lo importante que es una presencia sólida en
            redes para atraer nuevos clientes. Te damos recursos profesionales
            para destacar en cada plataforma y conseguir resultados reales en tu
            negocio de seguros.
          </p>

          <div className="flex items-center gap-3 mb-4 max-w-xs">
            <span className="text-white text-[11px] uppercase tracking-[0.2em] font-semibold">
              Seguinos en
            </span>
            <div className="h-px flex-1 bg-white" />
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="group inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.08] border border-white/10 hover:bg-[#E2482D] hover:border-[#E2482D] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className={`${s.icon} h-5 w-5 text-white/85 group-hover:text-white`} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[460px] h-[420px] lg:h-[460px]">
            <div className="pointer-events-none absolute inset-0 m-auto w-72 h-72 rounded-full bg-gradient-to-br from-[#E2482D]/30 to-[#3a47b8]/30 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 m-auto w-[300px] h-[300px] rounded-full border border-dashed border-white/15" />
            <div className="pointer-events-none absolute inset-0 m-auto w-[200px] h-[200px] rounded-full border border-white/10" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-3xl bg-gradient-to-br from-[#E2482D] to-[#c83b24] shadow-2xl shadow-[#E2482D]/50 flex items-center justify-center rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
              <span className="icon-[mdi--instagram] h-16 w-16 text-white" />
            </div>

            <div className="absolute top-4 left-6 w-20 h-20 rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-md flex items-center justify-center rotate-[8deg] shadow-xl shadow-black/30 hover:rotate-0 transition-transform duration-500">
              <span className="icon-[mdi--facebook] h-9 w-9 text-white" />
            </div>

            <div className="absolute top-10 right-2 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#212C7C] to-[#3a47b8] border border-white/10 flex items-center justify-center -rotate-[5deg] shadow-xl shadow-[#212C7C]/40 hover:rotate-0 transition-transform duration-500">
              <span className="icon-[mdi--linkedin] h-10 w-10 text-white" />
            </div>

            <div className="absolute bottom-8 left-0 w-24 h-24 rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-md flex items-center justify-center -rotate-[8deg] shadow-xl shadow-black/30 hover:rotate-0 transition-transform duration-500">
              <span className="icon-[mdi--youtube] h-11 w-11 text-white" />
            </div>

            <div className="absolute bottom-4 right-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3a47b8] to-[#5d6ce6] border border-white/10 flex items-center justify-center rotate-[10deg] shadow-xl shadow-[#3a47b8]/40 hover:rotate-0 transition-transform duration-500">
              <span className="icon-[mdi--tiktok] h-9 w-9 text-white" />
            </div>

            <div className="absolute top-28 right-24 w-11 h-11 rounded-xl bg-[#E2482D] flex items-center justify-center shadow-lg shadow-[#E2482D]/50 rotate-[-12deg]">
              <span className="icon-[mdi--heart] h-5 w-5 text-white" />
            </div>
            <div className="absolute bottom-24 right-32 w-9 h-9 rounded-xl bg-white/[0.12] border border-white/15 backdrop-blur-md flex items-center justify-center rotate-[6deg]">
              <span className="icon-[mdi--comment-outline] h-4 w-4 text-white" />
            </div>
            <div className="absolute top-44 left-8 w-10 h-10 rounded-xl bg-white/[0.12] border border-white/15 backdrop-blur-md flex items-center justify-center -rotate-[8deg]">
              <span className="icon-[mdi--share-variant] h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto mt-24">
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#E2482D]/40 via-white/10 to-[#3a47b8]/40 pointer-events-none" />

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.1] to-white/[0.04] border border-white/15 backdrop-blur-sm p-8 lg:p-12">
          <span
            aria-hidden
            className="icon-[mdi--trending-up] pointer-events-none absolute -bottom-16 -right-12 h-72 w-72 text-[#E2482D]/10"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#3a47b8]/25 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E2482D] to-[#c83b24] flex items-center justify-center shadow-lg shadow-[#E2482D]/40">
                  <span className="icon-[mdi--trending-up] h-6 w-6 text-white" />
                </div>
                <Eyebrow>
                  <span className="text-[#ffb8a8]">Ingresos</span>
                </Eyebrow>
              </div>
              <h3 className="font-display text-2xl lg:text-[32px] leading-tight font-bold text-white mb-4 max-w-2xl">
                ¿Querés aumentar tus{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#fff]">ingresos</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 h-2 bg-[#E2482D] rounded-sm"
                  />
                </span>{" "}
                como productor de seguros?
              </h3>
              <p className="text-white/75 leading-relaxed max-w-xl">
                En Biant no solo vas a mejorar tus ingresos por el aumento de
                comisiones. Ponete en contacto y conocé las múltiples formas de
                aumentar tus ingresos junto a nosotros.
              </p>
            </div>

            <button
              type="button"
              className="group/btn relative inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#E2482D] to-[#c83b24] hover:from-[#d94228] hover:to-[#b8351f] active:scale-[0.98] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-[0_14px_40px_-10px_rgba(226,72,45,0.7)] hover:shadow-[0_18px_50px_-10px_rgba(226,72,45,0.9)] shrink-0 lg:self-center"
            >
              <span>Contactanos</span>
              <span className="inline-flex transition-transform duration-300 group-hover/btn:translate-x-1">
                <span className="icon-[mdi--arrow-right]"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
