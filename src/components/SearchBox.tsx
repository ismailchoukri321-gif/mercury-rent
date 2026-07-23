import Link from "next/link";
import { CalendarDays, MapPin, Search } from "lucide-react";

export function SearchBox() {
  return <div className="rounded-2xl bg-black p-4 shadow-soft">
    <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_1fr_auto]">
      <label className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white">
        <span className="eyebrow flex items-center gap-2 text-white/60"><MapPin size={13}/> Départ</span>
        <select className="mt-1 w-full bg-transparent text-sm font-semibold text-white outline-none">
          <option className="text-ink">Tanger</option><option className="text-ink">Tétouan</option><option className="text-ink">Al Hoceïma</option><option className="text-ink">Nador</option>
        </select>
      </label>
      <label className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white">
        <span className="eyebrow flex items-center gap-2 text-white/60"><CalendarDays size={13}/> Prise en charge</span>
        <input type="date" className="mt-1 w-full bg-transparent text-sm font-semibold text-white outline-none [color-scheme:dark]"/>
      </label>
      <label className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white">
        <span className="eyebrow flex items-center gap-2 text-white/60"><CalendarDays size={13}/> Retour</span>
        <input type="date" className="mt-1 w-full bg-transparent text-sm font-semibold text-white outline-none [color-scheme:dark]"/>
      </label>
      <Link href="/catalogue" className="flex items-center justify-center gap-2 rounded-xl bg-rust px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-ink"><Search size={18}/> Rechercher</Link>
    </div>
  </div>
}
