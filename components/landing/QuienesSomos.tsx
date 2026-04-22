import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

import { WHATSAPP_CHAT_URL } from "./whatsapp-url";

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

type BaseValue = {
  label: string;
  icon: ReactNode;
};

const baseValues: BaseValue[] = [
  { label: "Profesionalismo", icon: <StarIcon /> },
  { label: "Compromiso", icon: <HandshakeIcon /> },
  { label: "Respaldo", icon: <ShieldIcon /> },
];

export function QuienesSomos() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-20 relative overflow-hidden py-24 px-6 bg-gradient-to-b from-white via-[#f6f7fc] to-white"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(33,44,124,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
        aria-hidden
      />
      <div
        className="absolute -top-32 -left-24 w-80 h-80 bg-[#212C7C]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -right-24 w-96 h-96 bg-[#E2482D]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <Eyebrow>Nuestra historia</Eyebrow>
          <h2 className="font-display text-3xl lg:text-[42px] font-bold text-[#212C7C] mb-7">
            ¿Quiénes somos?
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
            Este proyecto comienza en el año 2016 con una visión distinta del mercado asegurador, no quisimos ser «uno más», teníamos una idea colectiva que marcára la diferencia, y así nació BIANT.
          </p>

          <div className="relative max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-2xl px-7 py-6 text-left shadow-[0_8px_30px_rgba(33,44,124,0.06)]">
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[#E2482D] to-[#212C7C] rounded-r-full" aria-hidden />
            <div className="absolute -top-3 left-6 bg-white border border-gray-200/80 rounded-full px-3 py-1 flex items-center gap-1.5">
              <span className="icon-[mdi--ant] text-[#212C7C] text-sm"></span>
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#212C7C]">Be ant</span>
            </div>
            <p className="text-[#4C4C4C] text-sm leading-loose pl-3 pt-1">
              Del concepto del inglés «Be ant» traducido en «se hormiga» es una comunidad colaborativa donde el beneficio de uno de sus miembros nutra el trabajo de todos, cual efecto hormiguero, donde la identidad de cada sujeto y su acompañamiento mutuo repercuta en la identidad de un todo que funcione en sistema. Elegimos el trabajo en equipo porque es una función necesaria para una construcción sólida, solidaria, real y eficiente.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10" aria-hidden>
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#212C7C]/30" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#212C7C]/70">
            Nuestro ADN
          </span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#212C7C]/30" />
        </div>

        <div className="relative mb-16 rounded-3xl overflow-hidden border border-gray-200/80 bg-gradient-to-br from-[#f1f3fb] via-white to-[#f6f8fd] p-6 sm:p-10 shadow-[0_12px_40px_rgba(33,44,124,0.06)]">
          <div className="relative z-10 flex flex-col items-center gap-4 md:gap-5">
            <div className="w-full max-w-md">
              <div className="relative bg-gradient-to-br from-[#212C7C] to-[#39438A] rounded-2xl p-7 text-white shadow-lg shadow-[#212C7C]/25 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full" aria-hidden />
                <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-[#E2482D]/20 rounded-full blur-xl" aria-hidden />
                <div className="relative">
                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2">
                    Cima
                  </span>
                  <h3 className="font-display text-xl font-bold mb-3">Visión</h3>
                  <p className="text-white/85 text-sm leading-loose">
                    Ser la opción más eficiente del mercado asegurador, acompañando a nuestros socios con profesionalismo, compromiso y respaldo en cada ocasión.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full max-w-2xl">
              <div className="relative bg-white border border-gray-200/80 border-t-4 border-t-[#E2482D] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#E2482D]/70 mb-2">
                  Pilar
                </span>
                <h3 className="font-display text-lg font-bold text-[#E2482D] mb-2">
                  Misión
                </h3>
                <p className="text-gray-500 text-sm leading-loose">
                  Llevar tranquilidad a nuestros socios brindándoles soluciones integrales con un servicio de excelencia y calidad en la contratación de sus productos.
                </p>
              </div>
              <div className="relative bg-white border border-gray-200/80 border-t-4 border-t-[#E2482D] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#E2482D]/70 mb-2">
                  Pilar
                </span>
                <h3 className="font-display text-lg font-bold text-[#E2482D] mb-2">
                  Esencia
                </h3>
                <p className="text-gray-500 text-sm leading-loose">
                  El efecto hormiguero: una comunidad colaborativa donde el beneficio de uno nutre el trabajo de todos, construyendo algo sólido, solidario y eficiente.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full max-w-3xl mt-2">
              {baseValues.map((v) => (
                <div
                  key={v.label}
                  className="bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-xl p-4 flex items-center gap-3 hover:border-[#212C7C]/30 hover:shadow-sm transition-all"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#212C7C]/5 text-[#212C7C] flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400">
                      Base
                    </span>
                    <span className="font-display font-bold text-[#212C7C] text-sm">
                      {v.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-[#212C7C] to-[#39438A] rounded-2xl p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 overflow-hidden shadow-lg shadow-[#212C7C]/20">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
            aria-hidden
          />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#E2482D]/20 rounded-full blur-2xl pointer-events-none" aria-hidden />
          <div className="flex-1 relative">
            <p className="text-white/50 text-xs mb-2">Una red única de beneficios</p>
            <p className="text-white/85 leading-relaxed max-w-xl">
              A través de nuestra extensa red y gracias al apoyo de las compañías que representamos BIANT posee un sistema único de beneficios, comisiones y descuentos adicionales para nuestros socios
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.open(WHATSAPP_CHAT_URL, "_blank")}
            className="relative shrink-0 flex items-center gap-2 bg-[#E2482D] cursor-pointer hover:bg-[#c83b24] active:scale-95 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-[#E2482D]/30"
          >
            Quiero ser parte de Biant <span className="icon-[mdi--arrow-right]"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
