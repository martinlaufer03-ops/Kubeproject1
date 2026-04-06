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

  // ── REGALOS ──────────────────────────────────────────────────────────────

  {
    id: "001",
    name: "Champagnera Inox Dorado",
    category: "regalos",
    price: 185000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/9570-3170-1-scaled-1.jpg"],
    description: "Elegante champagnera de acero inoxidable con acabado dorado. Ideal para celebraciones y como regalo de bodas.",
    badge: "Destacado",
    inStock: true
  },
  {
    id: "002",
    name: "Vela Rojo Oscuro H10",
    category: "regalos",
    price: 55000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/9560-82-1-1.jpg"],
    description: "Vela artesanal en tono rojo oscuro, altura 10 cm, diámetro 8 cm. Perfecta para crear ambientes cálidos y especiales.",
    badge: null,
    inStock: true
  },
  {
    id: "003",
    name: "Hielera Inox con Asa de Cuero",
    category: "regalos",
    price: 220000,
    images: ["https://www.kube.com.py/wp-content/uploads/2024/12/956-373.jpg"],
    description: "Hielera de acero inoxidable con sofisticada asa de cuero negro. Un regalo elegante para los amantes del buen beber.",
    badge: "Oferta",
    inStock: true
  },
  {
    id: "004",
    name: "Jarra Sirio Dorada 0.9L",
    category: "regalos",
    price: 95000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/11/930-53.jpg"],
    description: "Jarra Sirio de 0.9 litros con acabado dorado. Ideal para agua, jugos y bebidas frías.",
    badge: null,
    inStock: true
  },
  {
    id: "005",
    name: "Velero de Cristal y Metal",
    category: "regalos",
    price: 78000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/921-6787-1.jpg"],
    description: "Portavelas de cristal con base de metal. Una pieza decorativa que también funciona como regalo con mucho estilo.",
    badge: null,
    inStock: true
  },
  {
    id: "006",
    name: "Porta-Retrato 15x20 cm",
    category: "regalos",
    price: 48000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/12/932-156-1.jpg"],
    description: "Marco de foto elegante en tamaño 15x20 cm. Un regalo personal y significativo para cualquier ocasión.",
    badge: "Nuevo",
    inStock: true
  },
  {
    id: "007",
    name: "Porta-Retrato 20x25 cm",
    category: "regalos",
    price: 65000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/12/932-92-1.jpg"],
    description: "Marco de foto de mayor tamaño, perfecto para retratos y momentos especiales. Acabado clásico y elegante.",
    badge: null,
    inStock: true
  },
  {
    id: "008",
    name: "Porta-Retrato 13x18 cm",
    category: "regalos",
    price: 38000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/932-164-1.jpg"],
    description: "Marco de foto compacto en tamaño 13x18 cm. Ideal para regalo de cumpleaños o recuerdo de viaje.",
    badge: null,
    inStock: true
  },

  // ── HOGAR ────────────────────────────────────────────────────────────────

  {
    id: "009",
    name: "Reloj de Pared a Batería",
    category: "hogar",
    price: 72000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/11/9555-3924-1.jpg"],
    description: "Reloj de pared moderno a batería. Diseño minimalista que combina con cualquier estilo de decoración.",
    badge: null,
    inStock: true
  },
  {
    id: "010",
    name: "Planta Artificial con Pote",
    category: "hogar",
    price: 58000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/11/9555-3928-1.jpg"],
    description: "Planta artificial de alta calidad con macetero incluido. Sin mantenimiento, siempre verde y fresca.",
    badge: null,
    inStock: true
  },
  {
    id: "011",
    name: "Juego de Floreros x2",
    category: "hogar",
    price: 85000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/11/9555-3933-1.jpg"],
    description: "Juego de 2 floreros de diseño complementario. Perfectos para decorar mesas, repisas o entradas.",
    badge: null,
    inStock: true
  },
  {
    id: "012",
    name: "Florero Esmeralda 20 cm",
    category: "hogar",
    price: 62000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/9560-46-1.jpg"],
    description: "Florero en tono esmeralda, 20 cm de altura. Un toque de color y elegancia para cualquier ambiente.",
    badge: "Nuevo",
    inStock: true
  },
  {
    id: "013",
    name: "Florero Decorativo",
    category: "hogar",
    price: 55000,
    images: ["https://www.kube.com.py/wp-content/uploads/2024/11/555-4553.jpg"],
    description: "Florero decorativo de líneas modernas. Ideal solo o combinado con flores naturales o artificiales.",
    badge: null,
    inStock: true
  },
  {
    id: "014",
    name: "Florero Alto",
    category: "hogar",
    price: 68000,
    images: ["https://www.kube.com.py/wp-content/uploads/2024/11/555-4561.jpg"],
    description: "Florero de diseño vertical, ideal para ramas decorativas o flores de tallo largo.",
    badge: null,
    inStock: true
  },
  {
    id: "015",
    name: "Florero Chico",
    category: "hogar",
    price: 42000,
    images: ["https://www.kube.com.py/wp-content/uploads/2025/04/9570-3320.png"],
    description: "Florero pequeño de cerámica con acabado mate. Perfecto como adorno en escritorios o estantes.",
    badge: null,
    inStock: true
  },
  {
    id: "016",
    name: "Portavela Decorativo",
    category: "hogar",
    price: 48000,
    images: ["https://www.kube.com.py/wp-content/uploads/2024/11/555-4785.jpg"],
    description: "Portavela de diseño moderno en metal. Agrega calidez y estilo a cualquier rincón del hogar.",
    badge: null,
    inStock: true
  },
  {
    id: "017",
    name: "Eucalipto con Pote",
    category: "hogar",
    price: 52000,
    images: ["https://www.kube.com.py/wp-content/uploads/2024/11/555-4708.jpg"],
    description: "Rama de eucalipto artificial con macetero incluido. Tendencia en decoración de interiores.",
    badge: "Nuevo",
    inStock: true
  },
  {
    id: "018",
    name: "Juego Posavasos x4",
    category: "hogar",
    price: 35000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/11/9555-3969-1.jpg"],
    description: "Set de 4 posavasos de diseño moderno. Protegen tus muebles con estilo.",
    badge: null,
    inStock: true
  },
  {
    id: "019",
    name: "Juego Posavasos x6",
    category: "hogar",
    price: 48000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/11/9555-3970-1.jpg"],
    description: "Set de 6 posavasos combinables. Ideales para el comedor o la sala de estar.",
    badge: null,
    inStock: true
  },
  {
    id: "020",
    name: "Macetero con Base",
    category: "hogar",
    price: 65000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/11/9555-3976-1.jpg"],
    description: "Macetero con base integrada, diseño contemporáneo. Para plantas reales o artificiales.",
    badge: null,
    inStock: true
  },
  {
    id: "021",
    name: "Bandeja Decorativa",
    category: "hogar",
    price: 58000,
    images: ["https://www.kube.com.py/wp-content/uploads/2022/05/555-4140-1.jpg"],
    description: "Bandeja decorativa para organizar accesorios o servir en la mesa. Material resistente y elegante.",
    badge: null,
    inStock: true
  },
  {
    id: "022",
    name: "Bandeja Redonda Inox",
    category: "hogar",
    price: 72000,
    images: ["https://www.kube.com.py/wp-content/uploads/2024/07/9570-3240-1.png"],
    description: "Bandeja redonda de acero inoxidable. Perfecta para servir en reuniones o como elemento decorativo.",
    badge: null,
    inStock: true
  },
  {
    id: "023",
    name: "Reloj de Pared Moderno",
    category: "hogar",
    price: 88000,
    images: ["https://www.kube.com.py/wp-content/uploads/2022/01/9555-3043-1.jpg"],
    description: "Reloj de pared de diseño contemporáneo. Gran tamaño, lectura fácil, funciona a batería.",
    badge: null,
    inStock: true
  },

  // ── BODAS ────────────────────────────────────────────────────────────────

  {
    id: "024",
    name: "Vajilla de Mesa 122 Piezas",
    category: "bodas",
    price: 890000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/11/912-1487-1.jpg"],
    description: "Vajilla completa de 122 piezas para 12 personas. Diseño clásico y elegante, ideal para listas de boda.",
    badge: "Destacado",
    inStock: true
  },
  {
    id: "025",
    name: "Vajilla de Mesa Cuadrada 30 Piezas",
    category: "bodas",
    price: 450000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/912-1455-1.jpg"],
    description: "Vajilla cuadrada de 30 piezas con diseño moderno y minimalista. Perfecta para la mesa del nuevo hogar.",
    badge: null,
    inStock: true
  },
  {
    id: "026",
    name: "6 Copas Contess Allor Negro",
    category: "bodas",
    price: 280000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/10/921-6946.jpg"],
    description: "Set de 6 copas de agua Contess Allor en negro. Elegancia moderna para la mesa de bodas.",
    badge: null,
    inStock: true
  },
  {
    id: "027",
    name: "6 Copas Bordeaux Experience",
    category: "bodas",
    price: 320000,
    images: ["https://www.kube.com.py/wp-content/uploads/2024/08/915-808-1.jpg"],
    description: "Juego de 6 copas Stolzle Bordeaux Experience de 645 ml. Cristal de alta calidad para los amantes del vino.",
    badge: "Nuevo",
    inStock: true
  },
  {
    id: "028",
    name: "Juego de Licor 7 Piezas Opera",
    category: "bodas",
    price: 245000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/9201-462-1-scaled-1.jpg"],
    description: "Set de licor de 7 piezas con diseño Opera. Jarra y 6 vasitos de cristal soplado a mano.",
    badge: null,
    inStock: true
  },
  {
    id: "029",
    name: "Juego de Ollas Gourmet 4 Piezas",
    category: "bodas",
    price: 580000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/910-5761-1.jpg"],
    description: "Set de 4 ollas Powerfresh de acero inoxidable. Equipamiento completo para la cocina del nuevo hogar.",
    badge: "Destacado",
    inStock: true
  },
  {
    id: "030",
    name: "Juego de Cubiertos Cambridge 124 Piezas",
    category: "bodas",
    price: 750000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/11/927-400-1.jpg"],
    description: "Set de 124 piezas de cubiertos Cambridge en acero inoxidable. Completo y elegante para 12 personas.",
    badge: null,
    inStock: true
  },
  {
    id: "031",
    name: "Sofa 3 Cuerpos Tela Gris",
    category: "bodas",
    price: 2800000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/5492-100-1.jpg"],
    description: "Sofá de 3 cuerpos tapizado en tela gris con patas de bronce. El regalo grande para la nueva vida juntos.",
    badge: null,
    inStock: true
  },
  {
    id: "032",
    name: "Anafe a Inducción 2 Placas",
    category: "bodas",
    price: 420000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/911-831-1.jpg"],
    description: "Hornalla a inducción de 2 placas. Moderno, seguro y eficiente para la cocina del nuevo hogar.",
    badge: null,
    inStock: true
  },

  // ── ELECTRODOMÉSTICOS (como sub-categoría de hogar) ───────────────────

  {
    id: "033",
    name: "Cafetera Superautomática DeLonghi",
    category: "hogar",
    price: 1850000,
    images: ["https://www.kube.com.py/wp-content/uploads/2018/11/952-397.png"],
    description: "Cafetera superautomática DeLonghi Dedica. Café de calidad barista en casa, con un solo toque.",
    badge: "Destacado",
    inStock: true
  },
  {
    id: "034",
    name: "Licuadora Vintage Crema/Verde",
    category: "hogar",
    price: 380000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/929-694-1-scaled-1.jpg"],
    description: "Licuadora de estilo vintage en colores crema y verde. Potente, con diseño retro que decora la cocina.",
    badge: "Nuevo",
    inStock: true
  },
  {
    id: "035",
    name: "Mini Horno Ariete 10L",
    category: "hogar",
    price: 295000,
    images: ["https://www.kube.com.py/wp-content/uploads/2025/09/929-937.jpg"],
    description: "Mini horno eléctrico Ariete de 10 litros en color crema/verde. Compacto, eficiente y con mucho estilo.",
    badge: "Nuevo",
    inStock: true
  },
  {
    id: "036",
    name: "Mixer Ariete 3 en 1",
    category: "hogar",
    price: 185000,
    images: ["https://www.kube.com.py/wp-content/uploads/2025/09/929-942.jpg"],
    description: "Mixer de mano Ariete 3 en 1 en rojo y metal. Mezcla, bate y procesa con un solo aparato.",
    badge: null,
    inStock: true
  },
  {
    id: "037",
    name: "Exprimidor de Frutas Ariete",
    category: "hogar",
    price: 145000,
    images: ["https://www.kube.com.py/wp-content/uploads/2025/09/929-939.jpg"],
    description: "Exprimidor eléctrico Ariete en negro y rojo. Jugo fresco en segundos, fácil de limpiar.",
    badge: null,
    inStock: true
  },
  {
    id: "038",
    name: "Robot de Cocina Major Titanium 6.7L",
    category: "bodas",
    price: 2200000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/952-331-1.jpg"],
    description: "Robot de cocina KitchenAid Major Titanium de 6.7 litros. El electrodoméstico estrella en toda lista de bodas.",
    badge: "Destacado",
    inStock: true
  },

  // ── GIFT CARDS ────────────────────────────────────────────────────────

  {
    id: "039",
    name: "Gift Card KUBE Gs. 50.000",
    category: "gift-cards",
    price: 50000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/9570-3170-1-scaled-1.jpg"],
    description: "Tarjeta de regalo KUBE por Gs. 50.000. El destinatario elige libremente del catálogo completo.",
    badge: null,
    inStock: true
  },
  {
    id: "040",
    name: "Gift Card KUBE Gs. 100.000",
    category: "gift-cards",
    price: 100000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/9570-3170-1-scaled-1.jpg"],
    description: "Tarjeta de regalo KUBE por Gs. 100.000. El regalo perfecto cuando no sabés qué regalar.",
    badge: null,
    inStock: true
  },
  {
    id: "041",
    name: "Gift Card KUBE Gs. 200.000",
    category: "gift-cards",
    price: 200000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/9570-3170-1-scaled-1.jpg"],
    description: "Tarjeta de regalo KUBE por Gs. 200.000. Amplia variedad para elegir el regalo ideal.",
    badge: "Destacado",
    inStock: true
  },
  {
    id: "042",
    name: "Gift Card KUBE Gs. 500.000",
    category: "gift-cards",
    price: 500000,
    images: ["https://www.kube.com.py/wp-content/uploads/2021/06/9570-3170-1-scaled-1.jpg"],
    description: "Tarjeta de regalo KUBE por Gs. 500.000. Para un regalo verdaderamente especial y sin límites.",
    badge: null,
    inStock: true
  }
];
