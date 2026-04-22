import type { ReactNode } from "react";

export type BenefitItem = {
  num: string;
  title: string;
  text: string;
  icon: ReactNode;
};

export const benefits: BenefitItem[] = [
  {
    num: "01",
    title: "Mejorá tus Comisiones",
    text: "Sabemos que como productor de seguros, buscás siempre maximizar tus ganancias. Por eso, en nuestra organización ofrecemos comisiones competitivas y atractivas para que puedas alcanzar tus objetivos de venta y obtener los resultados que mereces.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="19" stroke="#E2482D" strokeWidth="1.5" />
        <path d="M12 24l5-5 4 4 7-8" stroke="#E2482D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 16h4v4" stroke="#E2482D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Soporte en Siniestros",
    text: "Con nuestro soporte de siniestros, no tenés que preocuparte por los trámites y gestiones necesarios ante un siniestro. Nos encargamos de todo para que puedas enfocarte en lo más importante: tus clientes y su satisfacción",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="19" stroke="#E2482D" strokeWidth="1.5" />
        <path d="M20 12v2M20 26v2M12 20h2M26 20h2" stroke="#E2482D" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" stroke="#E2482D" strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Trabajo en Equipo",
    text: "En Biant, creemos que el trabajo en equipo es clave para alcanzar el éxito. Como productor de seguros, te ofrecemos la oportunidad de formar parte de un equipo comprometido con el crecimiento mutuo. Trabajaremos juntos para alcanzar nuestras metas y lograr un éxito duradero.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="19" stroke="#E2482D" strokeWidth="1.5" />
        <circle cx="15" cy="17" r="3" stroke="#E2482D" strokeWidth="1.8" />
        <circle cx="25" cy="17" r="3" stroke="#E2482D" strokeWidth="1.8" />
        <path d="M10 28c0-3.3 2.2-5 5-5M25 23c2.8 0 5 1.7 5 5" stroke="#E2482D" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 28c0-1.7.9-3 3-3s3 1.3 3 3" stroke="#E2482D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Redes Sociales",
    text: "Con Biant, no tendrás que preocuparte por la gestión de tus redes sociales y la creación de contenido. Te ofrecemos un equipo especializado en marketing digital para que puedas enfocarte en tu negocio mientras aumentamos tu presencia en línea y atraemos nuevos clientes",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="19" stroke="#E2482D" strokeWidth="1.5" />
        <circle cx="14" cy="20" r="2.5" stroke="#E2482D" strokeWidth="1.8" />
        <circle cx="26" cy="14" r="2.5" stroke="#E2482D" strokeWidth="1.8" />
        <circle cx="26" cy="26" r="2.5" stroke="#E2482D" strokeWidth="1.8" />
        <path d="M16.2 18.8l7.6-3.6M16.2 21.2l7.6 3.6" stroke="#E2482D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Capacitación Continua",
    text: "Ofrecemos una formación constante y actualizada para nuestros productores de seguros, de manera que siempre estén al día en las tendencias y novedades del mercado, lo que les permitirá ofrecer a sus clientes las soluciones más adecuadas a sus necesidades",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="19" stroke="#E2482D" strokeWidth="1.5" />
        <path d="M13 16h14M13 20h10M13 24h7" stroke="#E2482D" strokeWidth="2" strokeLinecap="round" />
        <rect x="11" y="12" width="18" height="16" rx="2" stroke="#E2482D" strokeWidth="1.8" />
      </svg>
    ),
  },
];
