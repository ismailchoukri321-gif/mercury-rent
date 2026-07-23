import { MessageCircle } from "lucide-react";

const message = encodeURIComponent("Bonjour Mercury Rent, je souhaite réserver une voiture. Pouvez-vous me renseigner sur les disponibilités ?");
const whatsappUrl = `https://wa.me/212665362442?text=${message}`;

export function WhatsAppButton() {
  return <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Réserver sur WhatsApp" className="animate-whatsapp fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-bold text-white transition hover:scale-105 hover:bg-[#1ebe5d]">
    <MessageCircle size={22} fill="currentColor"/> <span className="hidden sm:inline">Réserver sur WhatsApp</span>
  </a>;
}
