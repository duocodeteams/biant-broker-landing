"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { WHATSAPP_CHAT_URL } from "./whatsapp-url";

const trustAvatars = [
  { initials: "MR", from: "#E2482D", to: "#ff7a55" },
  { initials: "JL", from: "#3a47b8", to: "#5d6ce6" },
  { initials: "VP", from: "#212C7C", to: "#3a47b8" },
  { initials: "CN", from: "#c83b24", to: "#E2482D" },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqkyvrp";

const EMPTY_FORM = {
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

export function HeroSection() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 3600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const showErrorToast = (message: string) => {
    setToast({ type: "error", message });
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) {
      showErrorToast("Completá tu nombre y apellido.");
      return false;
    }
    if (!formData.email.trim()) {
      showErrorToast("Completá tu email.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      showErrorToast("Ingresá un email válido.");
      return false;
    }
    if (!formData.telefono.trim()) {
      showErrorToast("Completá tu teléfono con código de área.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre.trim(),
          email: formData.email.trim(),
          telefono: formData.telefono.trim(),
          mensaje: formData.mensaje.trim(),
          _subject: `Nuevo contacto desde landing - ${formData.nombre.trim()}`,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar");
      }

      setFormData(EMPTY_FORM);
      setToast({
        type: "success",
        message: "Solicitud enviada. Te vamos a contactar pronto.",
      });
    } catch {
      showErrorToast("No pudimos enviar tu solicitud. Intentá nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#0e1654] px-4 pt-32 pb-24 sm:px-6 lg:pt-36 lg:pb-28"
    >
      {/* === BACKGROUND LAYERS === */}
      {/* Foto de la compañía (base) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/hero-compania.jpg')] bg-cover bg-center"
      />

      {/* Tinte azul: equilibrio entre ver la foto y legibilidad */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-[rgba(14,22,84,0.8)] via-[rgba(26,35,112,0.72)] via-50% to-[rgba(33,44,124,0.46)]"
      />

      {/* Degradé localizado: solo oscurece la zona del copy (izquierda) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-[rgba(14,22,84,0.96)] via-[rgba(14,22,84,0.36)] via-40% to-transparent to-70%"
      />

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_60%_at_50%_30%,#000_30%,transparent_80%)]"
      />

      {/* Glow orbs (más sutiles para no pisar la foto) */}
      <div
        aria-hidden
        className="hero-orb pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full mix-blend-screen bg-[radial-gradient(closest-side,rgba(226,72,45,0.28),rgba(226,72,45,0)_70%)]"
      />
      <div
        aria-hidden
        className="hero-orb pointer-events-none absolute -bottom-32 -left-32 h-[440px] w-[440px] rounded-full mix-blend-screen bg-[radial-gradient(closest-side,rgba(93,108,230,0.35),rgba(93,108,230,0)_70%)] [animation-delay:2.5s]"
      />

      {/* Bottom fade to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-[#212C7C]/76"
      />

      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-24 z-120 w-[min(92vw,360px)]"
        >
          <div
            className={`rounded-xl border px-4 py-3 text-sm font-medium shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)] backdrop-blur ${
              toast.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {toast.message}
          </div>
        </div>
      ) : null}

      {/* === CONTENT === */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
        {/* LEFT */}
        <div className="anim-up pt-2 lg:pt-4">
      

          {/* Headline */}
          <h1 className="font-display mb-5 max-w-[17ch] text-[clamp(26px,3.6vw,46px)] text-left font-extrabold leading-[1.06] tracking-tight text-white">
            ¿Querés trabajar en una organización líder en el mercado de seguros?{" "}
            <span className="relative inline-block my-2 ">
              <span className="relative z-10 text-[40px]  text-[#E2482D] bg-clip-text">
                ¡Ésta es tu oportunidad!
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-2 -skew-x-6 rounded-sm bg-[#E2482D]/25 blur-[2px]"
              />
            </span>
          </h1>

          {/* Subhead */}
          <p className="mb-9 max-w-[58ch] text-[16px] leading-relaxed text-white lg:text-[18px]">
            Sumate a nuestro equipo de productores de seguros y recibí el soporte
            y las herramientas que necesitás para crecer en tu carrera. Completá
            el formulario a continuación y comienza a disfrutar de las mejores
            comisiones del mercado.
          </p>

          {/* CTA + Trust */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-[#E2482D] to-[#c83b24] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_40px_-10px_rgba(226,72,45,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(226,72,45,0.85)] active:scale-[0.98]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
              />
              <span
                aria-hidden
                className="icon-[mdi--whatsapp] h-5 w-5 text-[#fff] shrink-0"
              />
              <span className="relative">Contáctanos</span>
            </a>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {trustAvatars.map((a) => (
                  <span
                    key={a.initials}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0e1654] text-[10.5px] font-bold text-white shadow-sm"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${a.from}, ${a.to})`,
                    }}
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1 text-white">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5 fill-[#E2482D]"
                      aria-hidden
                    >
                      <path d="M10 1.5l2.7 5.46 6.03.88-4.36 4.25 1.03 6L10 15.27l-5.4 2.84 1.03-6L1.27 7.84l6.03-.88L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-0.5 text-[11.5px] text-white">
                 Sumate a nuestra red de productores
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="anim-up-2 relative">
          {/* Decorative back card for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-gradient-to-br from-[#E2482D]/30 to-[#212C7C]/40 blur-sm"
          />

          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[26px] border border-white/60 bg-white/95 p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] backdrop-blur sm:p-8"
          >
            {/* Top accent strip */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#212C7C] via-[#E2482D] to-[#212C7C]" />

            {/* Header */}
            <div className="mb-6 flex items-start justify-between gap-3">
              <div>
                <p className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#E2482D]/10 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#E2482D]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                  Postulación rápida
                </p>
                <h2 className="font-display text-[22px] font-bold leading-tight text-[#212C7C] lg:text-[20px]">
                  Unite al equipo y potenciá tu <span className="text-[#E2482D] font-bold">negocio</span>
                </h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#4C4C4C]/75">
                  Completá tus datos y un asesor te contactará en menos de{" "}
                  <span className="font-semibold text-[#212C7C]">24 hs</span>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <FloatingInput
                label="Nombre y Apellido"
                name="nombre"
                placeholder="Ej: Juan García"
                value={formData.nombre}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <FloatingInput
                label="Email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="mt-3.5">
              <FloatingInput
                label="Teléfono con código de área"
                name="telefono"
                type="tel"
                placeholder="Ej: 011 15-XXXX-XXXX"
                value={formData.telefono}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="mt-3.5">
              <label className="mb-1.5 block text-[11.5px] font-semibold uppercase tracking-wider text-[#4C4C4C]/70">
                Contanos sobre vos{" "}
                <span className="font-normal text-[#4C4C4C]/40 normal-case tracking-normal">
                  (opcional)
                </span>
              </label>
              <textarea
                name="mensaje"
                rows={3}
                placeholder="Tu experiencia, objetivos, productos que más te interesan..."
                value={formData.mensaje}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full resize-y rounded-xl border border-[#212C7C]/12 bg-white px-3.5 py-2.5 text-sm text-[#212C7C] placeholder:text-[#4C4C4C]/35 transition-all duration-150 focus:border-[#212C7C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(33,44,124,0.08)] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group/submit cursor-pointer relative mt-5 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-[#E2482D] to-[#c83b24] py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_-8px_rgba(226,72,45,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(226,72,45,0.7)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0 disabled:hover:shadow-[0_12px_30px_-8px_rgba(226,72,45,0.55)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/submit:translate-x-full"
              />
              {isSubmitting ? (
                <>
                  <span
                    aria-hidden
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  />
                  <span className="relative cursor-pointer">Enviando...</span>
                </>
              ) : (
                <>
                  <span className="relative cursor-pointer">Enviar mi solicitud</span>
                  <span className="relative transition-transform duration-300 group-hover/submit:translate-x-1">
                    <span className="icon-[mdi--arrow-right]" />
                  </span>
                </>
              )}
            </button>

            {/* Trust footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#212C7C]/[0.07] pt-4">
              <div className="flex items-center gap-2 text-[11.5px] text-[#4C4C4C]/65">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#212C7C]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Tus datos están protegidos
              </div>
              <div className="flex items-center gap-2 text-[11.5px] font-semibold text-[#212C7C]">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Respuesta en menos de 24 hs
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Floating-style input ---------- */

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
};

function FloatingInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[11.5px] font-semibold uppercase tracking-wider text-[#4C4C4C]/70"
      >
        {label}
        {required ? <span className="text-[#E2482D]"> *</span> : null}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full rounded-xl border border-[#212C7C]/12 bg-white px-3.5 py-2.5 text-sm text-[#212C7C] placeholder:text-[#4C4C4C]/35 transition-all duration-150 focus:border-[#212C7C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(33,44,124,0.08)] focus:outline-none"
      />
    </div>
  );
}
