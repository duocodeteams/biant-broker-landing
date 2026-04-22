"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Eyebrow } from "./Eyebrow";

const companies = [
  { name: "ATM Seguros", src: "/atmseguros.webp", logoClass: "scale-100" },
  { name: "HDI Seguros", src: "/hdiseguros.webp", logoClass: "scale-100" },
  { name: "Rio Uruguay Seguros", src: "/ruslogo.webp", logoClass: "scale-[1.50]" },
  { name: "Berkley Argentina Seguros", src: "/berkleylogo.webp", logoClass: "scale-[1.70]" },
  { name: "Experta Seguros", src: "/expertaseguros.png", logoClass: "scale-[0.65]" },
  { name: "Experta ART", src: "/expertaart.png", logoClass: "scale-[0.50]" },
  { name: "Berkley Argentina ART", src: "/berkleyart.png", logoClass: "scale-[0.9]" },
  { name: "San Patricio Seguros", src: "/sanpatricio.webp", logoClass: "scale-100" },
  { name: "Finisterre Seguros", src: "/finislogo.webp", logoClass: "scale-[0.90]" },
  { name: "Federación Patronal Seguros", src: "/fedpatlogo.png", logoClass: "scale-100" },
  { name: "Prevención ART", src: "/prevlogo.webp", logoClass: "scale-[1.30]" },
  { name: "Noble Seguros", src: "/noblelogo.png", logoClass: "scale-[0.80]" },
  { name: "Orbis Seguros", src: "/orbislogo.webp", logoClass: "scale-[0.90]" },
  { name: "Galeno Seguros", src: "/galenologo.png", logoClass: "scale-[0.80]" },
  { name: "Mandina Seguros", src: "/mandinalogo.png", logoClass: "scale-[0.90]" },
  { name: "San Cristóbal Seguros", src: "/sancrislogo.png", logoClass: "scale-[0.70]" },
] as const;

const VISIBLE_COUNT = 4;

export function CompaniesCarousel() {
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCarouselIdx((p) => (p + 1) % (companies.length - VISIBLE_COUNT + 1)),
      2800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="respaldo"
      className="scroll-mt-20 bg-white border-t border-gray-100 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Eyebrow>Nuestro respaldo</Eyebrow>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#212C7C]">
            Compañías en las que confiamos
          </h2>
        </div>
        <div className="overflow-hidden">
          <div className="carousel-track flex gap-7" style={{ transform: `translateX(-${carouselIdx * 332}px)` }}>
            {companies.map((c) => (
              <div
                key={c.name}
                className="min-w-[304px] h-48 bg-gray-50 border border-gray-100 rounded-3xl flex flex-col items-center justify-center gap-4 shrink-0 overflow-hidden"
              >
                <div className="relative w-[260px] h-[112px] bg-white rounded-2xl border border-gray-100 shadow-[0_10px_28px_-18px_rgba(33,44,124,0.35)] flex items-center justify-center overflow-hidden p-4">
                  <div className={`relative h-full w-full transition-transform duration-300 ${c.logoClass}`}>
                    <Image
                      src={c.src}
                      alt={c.name}
                      fill
                      sizes="260px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="text-base text-gray-500 font-medium">{c.name}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1 mt-7">
            {Array.from({ length: companies.length - VISIBLE_COUNT + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a slide ${i + 1}`}
                onClick={() => setCarouselIdx(i)}
                className="h-8 w-8 inline-flex items-center justify-center rounded-full cursor-pointer"
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === carouselIdx ? "w-6 bg-[#E2482D]" : "w-2 bg-gray-200"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
