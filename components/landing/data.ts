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
    icon: "icon-[mdi--facebook]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alberto-sosa-07341b38a/",
    icon: "icon-[mdi--linkedin]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/biant.seguros/",
    icon: "icon-[mdi--instagram]",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_CHAT_URL,
    icon: "icon-[mdi--whatsapp]",
  },
] as const;

export const COMPANY_COUNT = 8;
