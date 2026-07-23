import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mercury Rent | Location de voitures au Maroc",
  description: "Réservez votre voiture simplement au Maroc.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className="font-sans">{children}</body></html>;
}
