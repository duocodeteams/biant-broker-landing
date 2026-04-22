import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-semibold tracking-[.15em] uppercase text-[#E2482D] mb-3">{children}</p>;
}
