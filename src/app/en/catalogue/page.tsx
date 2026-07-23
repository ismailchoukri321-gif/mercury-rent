import { Header } from "@/components/Header";
import { CarCard } from "@/components/CarCard";
import { cars } from "@/lib/cars";

export default function EnglishCatalogue() {
  return <><Header/><main className="min-h-[calc(100vh-80px)] bg-ink text-white"><div className="shell py-14"><p className="eyebrow text-rust">Our fleet</p><h1 className="mt-2 font-display text-5xl">A car for every journey.</h1><p className="mt-4 text-white/65">Choose a vehicle and book it directly, or send us a WhatsApp message.</p><div className="my-10 flex flex-wrap gap-3">{["All vehicles", "City cars", "SUV", "Premium", "Utility"].map((filter, index) => <button key={filter} className={`rounded-full border px-5 py-2 text-sm ${index === 0 ? "border-rust bg-rust" : "border-white/15 bg-white/5"}`}>{filter}</button>)}</div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cars.map((car) => <CarCard key={car.id} car={car} locale="en"/>)}</div></div></main></>;
}
