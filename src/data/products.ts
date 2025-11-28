export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  currency: "DZD";
  colors: string[];
  badges?: string[];
  shortDescription: string;
  description: string;
  images: { src: string; alt: string }[];
  features: string[];
  availability: "in-stock" | "limited" | "preorder";
  collections: string[];
};

export const products: Product[] = [
  {
    id: "rvn-001",
    name: "Naviforce Double Montre",
    slug: "naviforce-double-montre",
    price: 15900,
    currency: "DZD",
    colors: ["Noir", "Argent"],
    badges: ["Produit original"],
    shortDescription: "Naviforce double montre, produit original garantie.",
    description:
      "Montre Naviforce double design, produit 100% original avec garantie. Cadran moderne, fonctionnalités avancées et finition premium pour un look élégant et contemporain.",
    images: [
      {
        src: "/watches/1.jpg",
        alt: "Naviforce double montre originale",
      },
      {
        src: "/watches/12.jpg",
        alt: "Détail du cadran Naviforce",
      },
      {
        src: "/watches/13.jpg",
        alt: "Naviforce double montre vue de côté",
      },
    ],
    features: [
      "Produit original avec garantie",
      "Design double cadran moderne",
      "Finition premium",
      "Fonctionnalités avancées",
    ],
    availability: "in-stock",
    collections: ["montres homme", "collection premium"],
  },
  {
    id: "rvn-002",
    name: "MONTRE FESTINA MOTEUR MÉCANIQUE",
    slug: "montre-festina-moteur-mecanique",
    price: 18900,
    currency: "DZD",
    colors: ["Acier", "Noir"],
    badges: ["Best seller"],
    shortDescription: "Montre Festina avec moteur mécanique, étanche et bracelet en acier inoxydable.",
    description:
      "Montre Festina équipée d'un mouvement mécanique de précision. Montre étanche, bracelet en acier inoxydable de qualité supérieure. Design classique et élégant pour toutes occasions.",
    images: [
      {
        src: "/watches/2.jpg",
        alt: "Montre Festina moteur mécanique",
      },
      {
        src: "/watches/2.jpg",
        alt: "Détail bracelet acier inoxydable Festina",
      },
      {
        src: "/watches/2.jpg",
        alt: "Montre Festina vue complète",
      },
    ],
    features: [
      "Moteur mécanique de précision",
      "Montre étanche",
      "Bracelet en acier inoxydable",
      "Design classique et élégant",
    ],
    availability: "in-stock",
    collections: ["montres mécaniques", "collection Festina"],
  },
  {
    id: "rvn-003",
    name: "Montre Rolex",
    slug: "montre-rolex",
    price: 45000,
    currency: "DZD",
    colors: ["Or", "Acier", "Or rose"],
    badges: ["Luxe"],
    shortDescription: "Montre Rolex authentique, symbole d'excellence et de prestige.",
    description:
      "Montre Rolex authentique, représentant l'excellence en horlogerie. Finition impeccable, mouvement de précision suisse et design intemporel qui incarne le luxe et la réussite.",
    images: [
      {
        src: "/watches/3.jpg",
        alt: "Montre Rolex authentique",
      },
      {
        src: "/watches/3.jpg",
        alt: "Détail cadran Rolex",
      },
      {
        src: "/watches/3.jpg",
        alt: "Montre Rolex bracelet",
      },
    ],
    features: [
      "Authentique et certifiée",
      "Mouvement de précision suisse",
      "Finition luxueuse",
      "Design intemporel",
    ],
    availability: "limited",
    collections: ["luxe", "montres de prestige"],
  },
  {
    id: "rvn-004",
    name: "MONTRE TOMI ORIGINAL",
    slug: "montre-tomi-original-1",
    price: 12900,
    currency: "DZD",
    colors: ["Noir", "Brun"],
    badges: ["Original"],
    shortDescription: "Montre TOMI originale, étanche, bracelet en cuir, waterproof.",
    description:
      "Montre TOMI 100% originale avec garantie. Montre étanche et waterproof, parfaite pour toutes activités. Bracelet en cuir de qualité supérieure pour un confort optimal.",
    images: [
      {
        src: "/watches/4.jpg",
        alt: "Montre TOMI originale étanche",
      },
      {
        src: "/watches/4.jpg",
        alt: "Bracelet cuir TOMI",
      },
      {
        src: "/watches/4.jpg",
        alt: "Montre TOMI waterproof",
      },
    ],
    features: [
      "Montre étanche",
      "Bracelet en cuir",
      "Waterproof",
      "Produit original",
    ],
    availability: "in-stock",
    collections: ["montres sport", "collection TOMI"],
  },
  {
    id: "rvn-005",
    name: "MONTRE TOMI ORIGINAL",
    slug: "montre-tomi-original-2",
    price: 12900,
    currency: "DZD",
    colors: ["Noir", "Marron"],
    badges: ["Original"],
    shortDescription: "Montre TOMI originale, étanche, bracelet en cuir, waterproof.",
    description:
      "Montre TOMI authentique avec garantie d'origine. Conçue pour résister à l'eau avec fonction waterproof. Bracelet en cuir premium pour un style élégant et confortable au quotidien.",
    images: [
      {
        src: "/watches/5.jpg",
        alt: "Montre TOMI originale étanche",
      },
      {
        src: "/watches/5.jpg",
        alt: "Détail bracelet cuir TOMI",
      },
      {
        src: "/watches/5.jpg",
        alt: "Montre TOMI waterproof vue complète",
      },
    ],
    features: [
      "Montre étanche",
      "Bracelet en cuir",
      "Waterproof",
      "Produit original",
    ],
    availability: "in-stock",
    collections: ["montres sport", "collection TOMI"],
  },
  {
    id: "rvn-006",
    name: "MONTRE TOMI ORIGINAL",
    slug: "montre-tomi-original-3",
    price: 12900,
    currency: "DZD",
    colors: ["Noir", "Beige"],
    badges: ["Original"],
    shortDescription: "Montre TOMI originale, étanche, bracelet en cuir, waterproof.",
    description:
      "Montre TOMI garantie originale. Caractéristiques étanches et waterproof pour une utilisation en toutes conditions. Bracelet en cuir souple et durable pour un confort exceptionnel.",
    images: [
      {
        src: "/watches/7.jpg",
        alt: "Montre TOMI originale étanche",
      },
      {
        src: "/watches/7.jpg",
        alt: "Bracelet cuir premium TOMI",
      },
      {
        src: "/watches/7.jpg",
        alt: "Montre TOMI waterproof design",
      },
    ],
    features: [
      "Montre étanche",
      "Bracelet en cuir",
      "Waterproof",
      "Produit original",
    ],
    availability: "in-stock",
    collections: ["montres sport", "collection TOMI"],
  },
  {
    id: "rvn-007",
    name: 'Montre Homme "NAVIFORCE" Original',
    slug: "montre-homme-naviforce-original",
    price: 14900,
    currency: "DZD",
    colors: ["Noir", "Argent"],
    badges: ["Original", "Disponible en deux couleurs"],
    shortDescription: "Montre homme NAVIFORCE originale, disponible en deux couleurs, water resistant.",
    description:
      "Montre homme NAVIFORCE 100% originale, disponible en deux couleurs. Water resistant pour une utilisation polyvalente. Design masculin et moderne, parfaite pour l'homme moderne qui apprécie la qualité et le style.",
    images: [
      {
        src: "/watches/9.jpg",
        alt: "Montre homme NAVIFORCE originale",
      },
      {
        src: "/watches/9.jpg",
        alt: "NAVIFORCE water resistant",
      },
      {
        src: "/watches/9.jpg",
        alt: "Montre NAVIFORCE deux couleurs",
      },
    ],
    features: [
      "Produit original",
      "Disponible en deux couleurs",
      "Water resistant",
      "Design masculin moderne",
    ],
    availability: "in-stock",
    collections: ["montres homme", "collection NAVIFORCE"],
  },
];
