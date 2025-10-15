import realisationCuisineBlancheIlot from "@/assets/realisation-cuisine-blanche-ilot-quartz-laval.jpg";
import realisationCuisineComplete from "@/assets/realisation-cuisine-complete-luminaires-terrebonne.jpg";
import realisationCuisineIlotBois from "@/assets/realisation-cuisine-ilot-bois-comptoir-repentigny.jpg";
import realisationCuisineOuverte from "@/assets/realisation-cuisine-ouverte-escalier-montreal.jpg";
import realisationCuisineWaterfall from "@/assets/realisation-cuisine-ilot-waterfall-rive-nord.jpg";
import realisationArmoiresGrises from "@/assets/realisation-armoires-grises-encastrees-quebec.jpg";
import realisationSalleBain from "@/assets/realisation-salle-bain-moderne-douche-vitre.jpg";
import realisationGardeManger from "@/assets/realisation-garde-manger-bois-rangement.jpg";
import realisationCuisineCompacte from "@/assets/realisation-cuisine-compacte-blanche-brillante.jpg";
import realisationArmoiresBlanches from "@/assets/realisation-armoires-blanches-haute-brillance.jpg";

export interface Project {
  image: string;
  title: string;
  location: string;
  details: string;
  year: string;
  category?: string;
  city?: string;
}

export const projects: Project[] = [
  {
    image: realisationCuisineBlancheIlot,
    title: "Cuisine blanche avec îlot central",
    location: "Laval",
    city: "Laval",
    details: "Armoires shaker blanches • Comptoir quartz • Îlot fonctionnel avec rangement",
    year: "2024",
    category: "Cuisine complète"
  },
  {
    image: realisationCuisineComplete,
    title: "Cuisine moderne avec luminaires intégrés",
    location: "Terrebonne",
    city: "Rive-Nord",
    details: "Design contemporain • Éclairage LED • Finition haute brillance",
    year: "2024",
    category: "Cuisine complète"
  },
  {
    image: realisationCuisineIlotBois,
    title: "Cuisine avec îlot bois naturel",
    location: "Repentigny",
    city: "Rive-Nord",
    details: "Îlot waterfall • Comptoir quartz • Touches de bois chaleureux",
    year: "2024",
    category: "Cuisine complète"
  },
  {
    image: realisationCuisineOuverte,
    title: "Cuisine ouverte sur escalier",
    location: "Montréal",
    city: "Montréal",
    details: "Concept ouvert • Design aéré • Armoires modernes grises",
    year: "2024",
    category: "Cuisine complète"
  },
  {
    image: realisationCuisineWaterfall,
    title: "Cuisine avec îlot waterfall",
    location: "Rive-Nord",
    city: "Rive-Nord",
    details: "Îlot cascade • Comptoir quartz premium • Finition mate",
    year: "2024",
    category: "Cuisine complète"
  },
  {
    image: realisationArmoiresGrises,
    title: "Armoires grises encastrées",
    location: "Québec",
    city: "Québec",
    details: "Micro-ondes encastré • Porte slab grise • Quincaillerie moderne",
    year: "2024",
    category: "Armoires spécialisées"
  },
  {
    image: realisationSalleBain,
    title: "Salle de bain moderne",
    location: "Montréal",
    city: "Montréal",
    details: "Douche vitrée • Vanité suspendue • Finition contemporaine",
    year: "2024",
    category: "Salle de bain"
  },
  {
    image: realisationGardeManger,
    title: "Garde-manger en bois",
    location: "Laval",
    city: "Laval",
    details: "Rangement optimisé • Étagères ajustables • Finition bois naturel",
    year: "2024",
    category: "Rangement"
  },
  {
    image: realisationCuisineCompacte,
    title: "Cuisine compacte haute brillance",
    location: "Montréal",
    city: "Montréal",
    details: "Armoires blanches brillantes • Petit espace optimisé • Design moderne",
    year: "2024",
    category: "Cuisine compacte"
  },
  {
    image: realisationArmoiresBlanches,
    title: "Armoires blanches haute brillance",
    location: "Rive-Sud",
    city: "Rive-Sud",
    details: "Finition laquée • Design minimaliste • Éclat impeccable",
    year: "2024",
    category: "Cuisine moderne"
  }
];

export const getProjectsByCity = (city: string): Project[] => {
  return projects.filter(project => 
    project.city?.toLowerCase().includes(city.toLowerCase())
  );
};
