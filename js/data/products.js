// products.js — all product data for the KUBE site.
// This is the "database" for Phase 1. Every page that shows products
// reads from this array. In Phase 2 this gets replaced with an API call.
//
// Each product has:
//   id       — unique identifier, used in the URL: producto.html?id=001
//   name     — product name shown on cards and detail page
//   category — used by the filter buttons on the listing page
//   price    — in Guaraníes (PYG), Paraguay's currency
//   images   — array of image paths; first image is the main/thumbnail
//   description — shown on the detail page
//   badge    — small label on the card ("Oferta", "Nuevo", null = no badge)
//   inStock  — true/false

const products = [
  {
    id: "001",
    name: "Caja de Regalo Premium",
    category: "regalos",
    price: 150000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Una caja de regalo cuidadosamente armada con productos seleccionados. Ideal para cualquier ocasión especial.",
    badge: "Destacado",
    inStock: true
  },
  {
    id: "002",
    name: "Set de Velas Aromáticas",
    category: "regalos",
    price: 85000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Set de 3 velas aromáticas artesanales con fragancias de jazmín, lavanda y vainilla.",
    badge: null,
    inStock: true
  },
  {
    id: "003",
    name: "Canasta Gourmet",
    category: "regalos",
    price: 220000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Canasta con selección de productos gourmet importados: quesos, conservas, chocolates y más.",
    badge: "Oferta",
    inStock: true
  },
  {
    id: "004",
    name: "Marco de Fotos Personalizado",
    category: "hogar",
    price: 65000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Marco de madera con grabado personalizado. Disponible en varios tamaños.",
    badge: "Nuevo",
    inStock: true
  },
  {
    id: "005",
    name: "Kit de Spa en Casa",
    category: "regalos",
    price: 195000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Kit completo para una experiencia de spa en casa: sales de baño, mascarillas, aceites esenciales.",
    badge: null,
    inStock: true
  },
  {
    id: "006",
    name: "Juego de Copas de Cristal",
    category: "bodas",
    price: 280000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Set de 6 copas de cristal bohemio. Perfecto para incluir en listas de boda.",
    badge: null,
    inStock: true
  },
  {
    id: "007",
    name: "Cojines Decorativos x2",
    category: "hogar",
    price: 90000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Par de cojines decorativos en tela de algodón con diseños exclusivos.",
    badge: null,
    inStock: true
  },
  {
    id: "008",
    name: "Difusor de Aromas",
    category: "hogar",
    price: 120000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Difusor ultrasónico de aromas con luz LED. Incluye 3 aceites esenciales.",
    badge: "Nuevo",
    inStock: true
  },
  {
    id: "009",
    name: "Vajilla Minimalista 12 piezas",
    category: "bodas",
    price: 450000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Vajilla de cerámica de diseño minimalista. Set de 12 piezas para 4 personas.",
    badge: "Destacado",
    inStock: true
  },
  {
    id: "010",
    name: "Gift Card KUBE",
    category: "gift-cards",
    price: 100000,
    images: [
      "assets/images/product-placeholder.jpg"
    ],
    description: "Tarjeta de regalo KUBE. El destinatario elige lo que más le guste.",
    badge: null,
    inStock: true
  }
];
