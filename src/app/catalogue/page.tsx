import { Header } from "@/components/Header";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/lib/cars";

export default function Catalogue() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-80px)] bg-ink text-white">
        <div className="shell py-14">
          <p className="eyebrow text-rust">Notre flotte</p>
          <h1 className="mt-2 font-display text-5xl">Un véhicule pour chaque départ.</h1>
          <p className="mt-4 max-w-xl text-white/65">Choisissez un véhicule, puis réservez directement ou contactez-nous sur WhatsApp.</p>
          <div className="my-10 flex flex-wrap gap-3">
            {["Tous les véhicules", "Citadine", "SUV", "Premium", "Utilitaire"].map((filter, index) => (
              <button key={filter} className={`rounded-full border px-5 py-2 text-sm transition ${index === 0 ? "border-rust bg-rust text-white" : "border-white/15 bg-white/5 text-white hover:border-white/40"}`}>
                {filter}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </div>
      </main>
    </>
  );
}
