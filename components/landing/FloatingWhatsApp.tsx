import { WHATSAPP_CHAT_URL } from "./whatsapp-url";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-100 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_-4px_rgba(37,211,102,0.65)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_-4px_rgba(37,211,102,0.75)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-8 sm:right-8"
    >
      <span className="icon-[mdi--whatsapp] h-8 w-8 shrink-0" aria-hidden />
    </a>
  );
}
