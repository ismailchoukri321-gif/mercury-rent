export type Car = { id: string; name: string; category: string; transmission: string; seats: number; luggage: number; fuel: string; price: number; image: string; badge?: string };
export const cars: Car[] = [
 { id:"dacia-duster", name:"Dacia Duster", category:"SUV", transmission:"Manuelle", seats:5, luggage:3, fuel:"Diesel", price:390, badge:"Le plus demandé", image:"/cars/dacia-duster.png" },
 { id:"peugeot-208", name:"Peugeot 208", category:"Citadine", transmission:"Automatique", seats:5, luggage:2, fuel:"Essence", price:320, image:"/cars/peugeot-208.jpg" },
 { id:"renault-clio", name:"Renault Clio 5", category:"Citadine", transmission:"Manuelle", seats:5, luggage:2, fuel:"Essence", price:290, image:"/cars/renault-clio.png" },
 { id:"hyundai-tucson", name:"Hyundai Tucson", category:"SUV", transmission:"Automatique", seats:5, luggage:4, fuel:"Hybride", price:690, badge:"Nouveau", image:"/cars/hyundai-tucson.png" },
 { id:"mercedes-a", name:"Mercedes Classe A", category:"Premium", transmission:"Automatique", seats:5, luggage:3, fuel:"Essence", price:850, image:"/cars/mercedes-a.png" },
 { id:"fiat-doblo", name:"Fiat Doblo", category:"Utilitaire", transmission:"Manuelle", seats:5, luggage:5, fuel:"Diesel", price:490, image:"/cars/fiat-doblo.png" }
];
