import Image from "next/image";
import { socialIcons } from "./data";
import { WHATSAPP_CHAT_URL } from "./whatsapp-url";

const FOOTER_ADDRESS = "AV. BELGRANO 485 PISO 5 CABA CP 1092";
const GOOGLE_MAPS_PLACE_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Belgrano+485%2C+Piso+5%2C+C1092AAC%2C+Buenos+Aires%2C+Argentina";

export function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-20 bg-[#212C7C] pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <Image
                src="/biantlogosf.png"
                alt="Biant Seguros"
                width={180}
                height={48}
                className="h-14 max-w-[350px] object-cover brightness-0 invert"
                priority={false}
              />
            </div>
            <p className="text-white text-sm leading-relaxed text-left max-w-xs">
              Una comunidad colaborativa de productores de seguros comprometidos con el crecimiento mutuo y la excelencia en el servicio.
            </p>
            <div className="mt-4 text-left max-w-xs">
              <p className="text-[11px] font-bold text-[#E2482D] tracking-[.12em] uppercase mb-2">
                Ubicación
              </p>
              <p className="text-white text-xs leading-relaxed mb-2">
                {FOOTER_ADDRESS}
              </p>
              <a
                href={GOOGLE_MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#ffb8a8] text-xs font-medium hover:underline"
              >
                <span
                  aria-hidden
                  className="icon-[mdi--map-marker] h-4 w-4 shrink-0 text-[#E2482D]"
                />
                Ver en Google Maps
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-[#E2482D] tracking-[.12em] uppercase mb-4">Regulatorio</h4>
            <p className="text-white text-xs mb-1">Nº de inscripcion SSN</p>
            <p className="text-white text-xl font-bold tracking-wide mb-3">99723</p>
            <a href="https://www.ssn.gob.ar" target="_blank" rel="noreferrer" className="text-[#ffb8a8] text-xs hover:underline">
              www.ssn.gob.ar
            </a>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-[#E2482D] tracking-[.12em] uppercase mb-4">Atención</h4>
            <p className="text-white text-xs mb-1">Atención al Asegurado</p>
            <a
              href={WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold text-base mb-3 inline-block hover:text-[#ffb8a8] transition-colors underline-offset-4 hover:underline"
            >
              0800-666-8400
            </a>
            <p className="text-white text-xs mb-1 mt-4">Organismo de Control</p>
            <a href="https://www.ssn.gob.ar" target="_blank" rel="noreferrer" className="text-[#ffb8a8] text-xs hover:underline">
              www.ssn.gob.ar
            </a>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-[#E2482D] tracking-[.12em] uppercase mb-4">Redes</h4>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((s) => {
                const external = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    aria-label={s.label}
                    {...(external
                      ? { target: "_blank" as const, rel: "noopener noreferrer" }
                      : {})}
                    onClick={
                      s.href === WHATSAPP_CHAT_URL
                        ? (e) => {
                            e.preventDefault();
                          }
                        : undefined
                    }
                    className="w-10 h-10 rounded-full bg-white/8 border border-white/15 flex items-center justify-center hover:bg-[#E2482D] transition-colors duration-200 cursor-pointer"
                  >
                    <span className={`${s.icon} h-4 w-4 text-white`} />
                  </a>
                );
              })}            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-white text-xs">© {new Date().getFullYear()} BIANT Seguros. Todos los derechos reservados.</span>
          <span className="text-white text-xs">Supervisado por la Superintendencia de Seguros de la Nación</span>
        </div>
      </div>
    </footer>
  );
}
