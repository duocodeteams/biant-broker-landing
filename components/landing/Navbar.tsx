"use client";

import { useEffect, useState, type ComponentType } from "react";
import {
  IconAlianzas,
  IconBeneficios,
  IconClose,
  IconContacto,
  IconIngresos,
  IconInicio,
  IconMenu,
  IconNosotros,
} from "./nav-section-icons";
import { WHATSAPP_CHAT_URL } from "./whatsapp-url";

type NavLink = {
  id: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
};

const navLinks: NavLink[] = [
  { id: "inicio", label: "Inicio", Icon: IconInicio },
  { id: "beneficios", label: "Beneficios", Icon: IconBeneficios },
  { id: "crecimiento", label: "Crecimiento", Icon: IconIngresos },
  { id: "respaldo", label: "Respaldo", Icon: IconAlianzas },
  { id: "nosotros", label: "Nosotros", Icon: IconNosotros },
  { id: "contacto", label: "Contacto", Icon: IconContacto },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const y = window.scrollY + 140;
      let current = navLinks[0].id;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= y) current = link.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-4"
        }`}
      >
        {/* Subtle gradient hairline at very top when not scrolled */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        />

        <div
          className={`mx-auto max-w-7xl transition-all duration-500 ease-out ${
            scrolled ? "px-3 sm:px-4" : "px-4 sm:px-6"
          }`}
        >
          <nav
            aria-label="Principal"
            className={`relative flex items-center justify-between gap-3 transition-all duration-500 ease-out xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-center xl:gap-4 ${
              scrolled
                ? "h-[68px] rounded-2xl border border-[#212C7C]/[0.06] bg-white px-3 shadow-[0_10px_40px_-10px_rgba(33,44,124,0.18)] backdrop-blur-xl  sm:px-4"
                : "h-[96px] border-transparent bg-transparent px-2 shadow-none backdrop-blur-none sm:px-3"
            }`}
          >
            {/* Logo */}
            <a
              href="#inicio"
              aria-label="BIANT Seguros — Ir al inicio"
              className="group relative flex shrink-0 items-center gap-3 justify-self-start rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#E2482D]/50 focus-visible:ring-offset-2"
            >
              {/* Logo color único, blanqueado por filtro cuando el navbar está sobre el hero */}
              <span
                className={`relative block shrink-0 transition-all duration-500 group-hover:scale-[1.02] ${
                  scrolled ? "h-14 w-[140px]" : "h-20 w-[180px]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="./biantlogosf.png"
                  alt="Biant Seguros"
                  className={`h-full w-full object-cover transition-all duration-500 ${
                    scrolled
                      ? "scale-110 filter-none"
                      : "brightness-0 invert drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
                  }`}
                />
              </span>

             
            </a>

            {/* Desktop nav — columna central: centrado real respecto al viewport (1fr | auto | 1fr) */}
            <ul className="relative hidden min-w-0 items-center justify-center gap-0.5 justify-self-center xl:flex">
              {navLinks.map(({ id, label, Icon }) => {
                const active = activeId === id;
                return (
                  <li key={id} className="relative">
                    <a
                      href={`#${id}`}
                      className={`group/link relative flex items-center gap-1.5 rounded-full px-3 py-2 text-[12.5px] font-medium transition-colors duration-300 ${
                        scrolled
                          ? active
                            ? "text-[#212C7C]"
                            : "text-[#4C4C4C] hover:text-[#212C7C]"
                          : active
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {/* Active pill background */}
                      <span
                        className={`pointer-events-none absolute inset-0 rounded-full transition-all duration-300 ease-out ${
                          active
                            ? scrolled
                              ? "scale-100 bg-gradient-to-b from-[#212C7C]/[0.07] to-[#212C7C]/[0.04] opacity-100 ring-1 ring-inset ring-[#212C7C]/[0.08]"
                              : "scale-100 bg-white/10 opacity-100 ring-1 ring-inset ring-white/15"
                            : "scale-90 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100 " +
                              (scrolled
                                ? "group-hover/link:bg-[#212C7C]/[0.04]"
                                : "group-hover/link:bg-white/[0.06]")
                        }`}
                      />
                      <Icon
                        className={`relative size-[15px] shrink-0 transition-all duration-200 ${
                          active
                            ? "opacity-100"
                            : "opacity-60 group-hover/link:opacity-100"
                        }`}
                      />
                      <span className="relative">{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Right side */}
            <div className="flex shrink-0 items-center justify-self-end gap-2">
              <a
                href={WHATSAPP_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/cta relative hidden items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 active:scale-[0.97] sm:inline-flex ${
                  scrolled
                    ? "bg-gradient-to-br from-[#E2482D] to-[#c83b24] shadow-[0_8px_24px_-6px_rgba(226,72,45,0.55)] hover:shadow-[0_12px_30px_-6px_rgba(226,72,45,0.7)] hover:-translate-y-px"
                    : "bg-gradient-to-br from-[#E2482D] to-[#c83b24] ring-1 ring-white/30 hover:ring-white/50"
                }`}
              >
                {/* Shine sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
                />
              
                <span
                  aria-hidden
                  className="icon-[mdi--whatsapp] h-4 w-4 shrink-0"
                />
                <span className="relative">WhatsApp</span>
              </a>

              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                onClick={() => setMenuOpen((o) => !o)}
                className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 xl:hidden ${
                  scrolled
                    ? "bg-[#212C7C]/[0.04] text-[#212C7C] ring-1 ring-inset ring-[#212C7C]/[0.06] hover:bg-[#212C7C]/[0.08]"
                    : "bg-white/10 text-white ring-1 ring-inset ring-white/15 hover:bg-white/15"
                }`}
              >
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-300 ${
                    menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                >
                  <IconMenu />
                </span>
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-300 ${
                    menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                >
                  <IconClose />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 xl:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-[#0b1240]/70 backdrop-blur-md transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute inset-x-3 top-[5.25rem] origin-top overflow-hidden rounded-3xl border border-white/40 bg-white shadow-[0_30px_80px_-15px_rgba(33,44,124,0.45)] transition-[transform,opacity] duration-300 ease-out sm:inset-x-6 sm:max-w-xl sm:left-1/2 sm:-translate-x-1/2 ${
            menuOpen
              ? "scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
          style={menuOpen ? { maxHeight: "calc(100dvh - 6.5rem)" } : undefined}
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#212C7C] via-[#E2482D] to-[#212C7C]" />

          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E2482D]">
                BIANT Seguros
              </p>
              <p className="mt-0.5 text-[13px] font-semibold text-[#212C7C]">
                Navegá la propuesta
              </p>
            </div>
            <span className="rounded-full bg-[#212C7C]/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#212C7C]/70">
              Menú
            </span>
          </div>

          <div className="max-h-[calc(100dvh-13rem)] overflow-y-auto px-3 pb-3">
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {navLinks.map(({ id, label, Icon }) => {
                const active = activeId === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setMenuOpen(false)}
                      className={`group/item relative flex items-center gap-3 overflow-hidden rounded-2xl px-3 py-3 text-[15px] font-medium transition-all ${
                        active
                          ? "bg-gradient-to-br from-[#FFF4F1] to-[#FFE7E0] text-[#E2482D] ring-1 ring-inset ring-[#E2482D]/15"
                          : "text-[#212C7C] hover:bg-[#F5F6FB]"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          active
                            ? "bg-gradient-to-br from-[#E2482D] to-[#c83b24] text-white shadow-[0_8px_20px_-4px_rgba(226,72,45,0.5)]"
                            : "bg-[#F0F2FA] text-[#212C7C] group-hover/item:bg-white group-hover/item:shadow-sm"
                        }`}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="relative">{label}</span>
                      <svg
                        viewBox="0 0 24 24"
                        className={`ml-auto h-4 w-4 transition-all duration-200 ${
                          active
                            ? "translate-x-0 text-[#E2482D]"
                            : "-translate-x-1 text-[#4C4C4C]/30 group-hover/item:translate-x-0 group-hover/item:text-[#212C7C]"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <a
            href={WHATSAPP_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="group/mcta relative flex items-center justify-center gap-2 overflow-hidden border-t border-[#212C7C]/[0.08] bg-gradient-to-br from-[#E2482D] to-[#c83b24] py-4 text-sm font-semibold text-white transition-all hover:from-[#d94228] hover:to-[#b8351f]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/mcta:translate-x-full"
            />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span
              aria-hidden
              className="icon-[mdi--whatsapp] h-4 w-4 shrink-0"
            />
            <span className="relative">Contactanos por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
