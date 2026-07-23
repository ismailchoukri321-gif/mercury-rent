"use client";

import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const english = pathname === "/en" || pathname.startsWith("/en/");
  const frenchPath = english ? (pathname.replace(/^\/en/, "") || "/") : pathname;
  const englishPath = english ? pathname : `/en${pathname === "/" ? "" : pathname}`;

  return (
    <div className="flex overflow-hidden rounded-lg border border-white/20 text-xs font-bold">
      <a href={frenchPath} className={`px-2.5 py-1.5 transition ${!english ? "bg-white text-ink" : "text-white/65 hover:text-white"}`}>FR</a>
      <a href={englishPath} className={`px-2.5 py-1.5 transition ${english ? "bg-white text-ink" : "text-white/65 hover:text-white"}`}>EN</a>
    </div>
  );
}
