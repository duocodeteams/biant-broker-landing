import { WHATSAPP_CHAT_URL } from "./whatsapp-url";

export const testimonials = [
  {
    name: "Mariana Rebord",
    initials: "MR",
    image:
      "https://ui-avatars.com/api/?name=Mariana+Rebord&background=212C7C&color=fff&bold=true&size=128&format=png",
    text: "Excelente atención, siempre disponibles para resolver con celeridad todos los inconvenientes. Muy recomendables para trabajar, desde que trabajo con ellos me siento muy acompañada y bien guiada.",
  },
  {
    name: "Martin Amado",
    initials: "MA",
    image:
      "https://ui-avatars.com/api/?name=Martin+Amado&background=E2482D&color=fff&bold=true&size=128&format=png",
    text: "En Biant aumente el piso comisionario que tenia, comencé a ganar mas comisión sobre mi cartera.",
  },
  {
    name: "Leandro Casas",
    initials: "LC",
    image:
      "https://ui-avatars.com/api/?name=Leandro+Casas&background=39438A&color=fff&bold=true&size=128&format=png",
    text: "Destaco el valor fundamental que es el cooperativismo que tiene la organización para con la atención a los pedidos que realizo diariamente.",
  },
] as const;

export const socialIcons = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100051135743378",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seguros-biant-4202a21a6/",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/biant.seguros/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_CHAT_URL,
    path: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.1 19.79 19.79 0 0 1 1.61 2.46 2 2 0 0 1 3.6.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.06 6.06l1.21-1.21a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  },
] as const;

export const COMPANY_COUNT = 8;
