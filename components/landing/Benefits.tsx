import { Eyebrow } from "./Eyebrow";
import { benefits } from "./benefits-data";

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-20 bg-white py-24 px-6">
      <div className="max-w-8xl mx-auto">
        <div className="text-center  mb-16">
          <Eyebrow> ¿Por qué elegirnos?</Eyebrow>
          <h2 className="font-display text-center text-3xl lg:text-[38px] xl:text-[44px] font-bold text-[#212C7C] mb-4 lg:whitespace-nowrap">
            ¡No te conformes con ser un productor de seguros más!
          </h2>
          <p className="text-lg font-semibold text-[#E2482D] mb-2">Convertite en un Socio Estratégico de Biant</p>
          <p className="text-gray-400">
            Descubrí ahora algunos <strong className="text-[#212C7C]">Beneficios</strong> de trabajar en Biant Seguros
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((b) => (
            <div key={b.num} className="benefit-card relative border border-gray-100 rounded-2xl p-8 overflow-hidden w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <span className="font-display absolute top-4 right-5 text-5xl font-black text-[#f0f2ff] leading-none select-none">{b.num}</span>
              <div className="mb-5">{b.icon}</div>
              <h3 className="font-display text-lg font-bold text-[#212C7C] mb-3">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E2482D] rounded-l-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
