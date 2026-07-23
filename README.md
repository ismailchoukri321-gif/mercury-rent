# Mercury Rent

Site de location de voitures réalisé avec Next.js 15, TypeScript, Tailwind CSS et Prisma/PostgreSQL.

## Démarrage

1. Copiez `.env.example` en `.env` et renseignez `DATABASE_URL`.
2. Installez les dépendances : `pnpm install`.
3. Créez le schéma : `pnpm prisma db push`.
4. Lancez le projet : `pnpm dev`.

## Parcours inclus

- Accueil et moteur de recherche
- Catalogue de véhicules
- Formulaire de réservation
- Espace client et tableau de bord administrateur
- API de démonstration : `/api/cars` et `/api/bookings`

Les données visuelles du front sont actuellement des données de démonstration dans `src/lib/cars.ts`. Le schéma Prisma est prêt à les remplacer par PostgreSQL.
