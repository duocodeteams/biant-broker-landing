"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Eyebrow } from "./Eyebrow";

type CompanyItem = {
  name: string;
  src: string;
  logoClass: string;
  /** Logo con trazos blancos sobre fondo transparente — necesita fondo oscuro */
  darkBg?: boolean;
};

const MOBILE_VISIBLE_COUNT = 1;
const DESKTOP_VISIBLE_COUNT = 4;
const DESKTOP_BREAKPOINT = 1024;
const CARD_WIDTH = 304;
const CARD_GAP = 28;
const CARD_SPAN = CARD_WIDTH + CARD_GAP;

const companiesSeguros: CompanyItem[] = [
  { name: "ATM Seguros", src: "/atmseguros.webp", logoClass: "scale-100" },
  { name: "Agrosalta Seguros", src: "/agrosalta.webp", logoClass: "scale-100" },
  { name: "Barbuss Seguros", src: "/barbuslogo.webp", logoClass: "scale-100" },
  { name: "Beneficio Personas Seguras", src: "/beneficios.png", logoClass: "scale-100" },
  { name: "Allianz Seguros", src: "/allianzlogo.png", logoClass: "scale-100" },
  { name: "Sancor Seguros", src: "/sancorlogo.png", logoClass: "scale-100" },
  { name: "La Holando Sudamericana Seguros", src: "/holandologo.webp", logoClass: "scale-100" },
  { name: "Digna Seguros", src: "/dignalogo.webp", logoClass: "scale-100" },
  { name: "Iapser Seguros", src: "/iapslogo.webp", logoClass: "scale-100" },
  { name: "La Equidad Social Seguros", src: "/laequidadlogo.png", logoClass: "scale-100", darkBg: true },
  { name: "Swiss Medical Seguros", src: "/swisslogo.webp", logoClass: "scale-100" },
  { name: "BBVA Seguros", src: "/bbvasf.png", logoClass: "scale-100" },
  { name: "Galicia Seguros", src: "/galicialogo.webp", logoClass: "scale-100" },
  { name: "Evolución Seguros", src: "/evlogo.webp", logoClass: "scale-100" },
  { name: "Aseguradora de Créditos y Garantías", src: "/acglogo.png", logoClass: "scale-100" },
  { name: "Nación Seguros", src: "/nacionlogo.webp", logoClass: "scale-100" },
  { name: "Metropol Seguros", src: "/metrologo.png", logoClass: "scale-100" },
  { name: "Life Seguros", src: "/lifesf.png", logoClass: "scale-100" },
  { name: "Euroamérica Seguros", src: "/eurologo.jpg", logoClass: "scale-100" },
  { name: "Rio Uruguay Seguros", src: "/ruslogo.webp", logoClass: "scale-[1.50]" },
  { name: "Experta Seguros", src: "/expertaseguros.png", logoClass: "scale-[0.65]" },
  { name: "San Patricio Seguros", src: "/sanpatricio.webp", logoClass: "scale-100" },
  { name: "Federación Patronal Seguros", src: "/fedpatlogo.png", logoClass: "scale-100" },
  { name: "Mercantil Andina Seguros", src: "/mandinalogo.png", logoClass: "scale-[0.90]" },
  { name: "San Cristóbal Seguros", src: "/sancrislogo.png", logoClass: "scale-[0.70]" },
  { name: "Asociart ART", src: "/asociaart.webp", logoClass: "scale-100" },
  { name: "Federación Patronal ART", src: "/fedeartlogo.png", logoClass: "scale-[0.80]" },
  { name: "Experta ART", src: "/expertaart.png", logoClass: "scale-[0.68]" },
  { name: "Iapser ART", src: "/iapslogo.webp", logoClass: "scale-110" },
  { name: "Swiss Medical ART", src: "/swisslogo.webp", logoClass: "scale-110" },
  { name: "Prevención ART", src: "/prevlogo.webp", logoClass: "scale-110" },
];

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(MOBILE_VISIBLE_COUNT);

  useEffect(() => {
    function syncVisibleCount() {
      setVisibleCount(
        window.innerWidth >= DESKTOP_BREAKPOINT ? DESKTOP_VISIBLE_COUNT : MOBILE_VISIBLE_COUNT
      );
    }

    syncVisibleCount();
    window.addEventListener("resize", syncVisibleCount);
    return () => window.removeEventListener("resize", syncVisibleCount);
  }, []);

  return visibleCount;
}

function useSlideCount(itemsLength: number, visibleCount: number) {
  return Math.max(1, Math.ceil(itemsLength / visibleCount));
}

function resolveScale(logoClass: string) {
  const arbitraryScale = logoClass.match(/^scale-\[(.+)\]$/);
  if (arbitraryScale) {
    const parsed = Number(arbitraryScale[1]);
    return Number.isFinite(parsed) ? parsed : 1;
  }

  const presetScale = logoClass.match(/^scale-(\d{2,3})$/);
  if (presetScale) {
    const parsed = Number(presetScale[1]) / 100;
    return Number.isFinite(parsed) ? parsed : 1;
  }

  return 1;
}

type CarouselRowProps = {
  title: string;
  description: string;
  items: CompanyItem[];
};

function CompanyCarouselRow({ title, description, items }: CarouselRowProps) {
  const baseId = useId();
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const visibleCount = useVisibleCount();
  const totalSlides = useSlideCount(items.length, visibleCount);
  const canNavigate = totalSlides > 1;

  useEffect(() => {
    setCarouselIdx((prev) => Math.min(prev, totalSlides - 1));
  }, [totalSlides]);

  useEffect(() => {
    if (!canNavigate || isAutoPlayPaused) return;
    const id = setInterval(
      () => setCarouselIdx((p) => (p + 1) % totalSlides),
      2800
    );
    return () => clearInterval(id);
  }, [canNavigate, isAutoPlayPaused, totalSlides]);

  function handlePrev() {
    setCarouselIdx((p) => (p - 1 + totalSlides) % totalSlides);
  }

  function handleNext() {
    setCarouselIdx((p) => (p + 1) % totalSlides);
  }

  const logoBoxH = "h-[112px]";
  const logoPadding = "p-4";
  const overflowForScale = "overflow-hidden";

  return (
    <div>
      <div className="mb-8 text-center sm:text-left">
        <h3 className="font-display text-lg font-bold text-[#212C7C] sm:text-xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <div className="overflow-hidden contain-content">
        <div
          className="carousel-track flex gap-7 will-change-transform backface-hidden transform-[translateZ(0)]"
          style={{ transform: `translateX(-${carouselIdx * (CARD_SPAN * visibleCount)}px)` }}
        >
          {items.map((c) => (
            <div
              key={`${baseId}-${c.name}`}
              className="flex h-48 min-h-0 min-w-[304px] shrink-0 flex-col items-center justify-center gap-4 overflow-clip rounded-3xl border border-gray-100 bg-gray-50"
            >
              <div
                className={`relative flex w-[260px] min-h-0 items-center justify-center ${logoBoxH} ${logoPadding} ${overflowForScale} rounded-2xl border border-gray-100 bg-white shadow-[0_10px_28px_-18px_rgba(33,44,124,0.35)]`}
              >
                <div
                  className="relative h-full w-full min-h-0 min-w-0 origin-center transform-gpu transition-transform duration-300 will-change-transform"
                  style={{ transform: `scale(${resolveScale(c.logoClass)})` }}
                >
                  <div
                    className={`relative h-full w-full ${c.darkBg ? "rounded-lg bg-gray-300 p-2" : ""}`}
                  >
                    <Image
                      src={c.src}
                      alt={c.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 260px"
                      className="object-contain [image-rendering:auto]"
                    />
                  </div>
                </div>
              </div>
              <span className="px-2 text-center text-base font-medium text-gray-500">
                {c.name}
              </span>
            </div>
          ))}
        </div>
        {canNavigate && (
          <div className="mt-7 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label={`${title} — slide anterior`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-[#212C7C] shadow-[0_8px_20px_-16px_rgba(33,44,124,0.45)] transition hover:border-[#212C7C]/30 hover:bg-gray-50"
            >
              <span aria-hidden className="icon-[mdi--chevron-left] h-5 w-5" />
            </button>

            <div className="hidden items-center gap-0 lg:flex">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={`${baseId}-dot-${i}`}
                  type="button"
                  aria-label={`${title} — ir al slide ${i + 1}`}
                  onClick={() => setCarouselIdx(i)}
                  className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === carouselIdx ? "w-6 bg-[#E2482D]" : "w-2 bg-gray-200"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label={`${title} — slide siguiente`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-[#212C7C] shadow-[0_8px_20px_-16px_rgba(33,44,124,0.45)] transition hover:border-[#212C7C]/30 hover:bg-gray-50"
            >
              <span aria-hidden className="icon-[mdi--chevron-right] h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setIsAutoPlayPaused((prev) => !prev)}
              aria-label={`${title} — ${isAutoPlayPaused ? "reanudar" : "pausar"} reproducción automática`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-[#212C7C] shadow-[0_8px_20px_-16px_rgba(33,44,124,0.45)] transition hover:border-[#212C7C]/30 hover:bg-gray-50"
            >
              <span
                aria-hidden
                className={`h-4 w-4 ${isAutoPlayPaused ? "icon-[mdi--play]" : "icon-[mdi--pause]"}`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function CompaniesCarousel() {
  return (
    <section
      id="respaldo"
      className="scroll-mt-20 border-t border-gray-100 bg-white py-16 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Eyebrow>Nuestro respaldo</Eyebrow>
          <h2 className="font-display text-2xl font-bold text-[#212C7C] lg:text-3xl">
            Compañías en las que confiamos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
            Trabajamos con compañías líderes para ofrecer coberturas de calidad y respaldo real en
            cada póliza.
          </p>
        </div>

        <CompanyCarouselRow
          title="Seguros"
          description="Coberturas de daños, vida, accidentes y afines."
          items={companiesSeguros}
        />
      </div>
    </section>
  );
}
