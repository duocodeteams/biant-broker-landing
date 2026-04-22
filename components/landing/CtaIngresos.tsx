import { Eyebrow } from "./Eyebrow";
import { ArrowIcon } from "./icons";

export function CtaIngresos() {
  return (
    <section id="ingresos" className="scroll-mt-20 bg-[#FFF8F7] border-t border-[#fde0d9] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Crecé con nosotros</Eyebrow>
        <h2 className="font-display text-3xl lg:text-[40px] font-bold text-[#212C7C] mb-5">
          ¿Querés aumentar tus ingresos como productor de seguros?
        </h2>
        <p className="text-gray-500 leading-relaxed mb-9 max-w-xl mx-auto">
          En biant no solo vas a mejorar tus ingresos por el aumento de comisiones, ponete en contacto y conocé las múltiples formas de aumentar tus ingresos junto a nosotros.
        </p>
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-[#E2482D] hover:bg-[#c83b24] active:scale-95 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
        >
          Contacto <ArrowIcon />
        </button>
      </div>
    </section>
  );
}
