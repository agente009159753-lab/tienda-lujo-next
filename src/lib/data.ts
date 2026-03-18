export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  img: string;
  category: string;
  description?: string;
  gallery?: string[];
}

// 1. Array de productos "por defecto" (Initial Seed Data)
// We add different luxury images to the gallery array to simulate the 5-image gallery experience.
const defaultProducts: Product[] = [
  { 
    id: 1, 
    name: "Silla Lounge Eames Vintage", 
    brand: "Herman Miller", 
    price: "$6,500", 
    img: "/img/prod_1_eames_chair_1773804081121.png", 
    category: "muebles",
    description: "Una auténtica silla Lounge Eames de mediados de siglo con su otomana correspondiente. Cuero negro italiano original sobre madera de palisandro brasileño. Esta pieza icónica ha sido cuidadosamente restaurada para mantener su pátina vintage, ofreciendo no solo un pedazo de historia del diseño, sino un confort insuperable para espacios residenciales o ejecutivos.",
    gallery: ["/img/prod_4_knoll_chair_1773804099453.png", "/img/prod_7_velvet_sofa_1773804113110.png", "/img/prod_8_walnut_table_1773804124970.png", "/img/luxury_lamp.png"]
  },
  { 
    id: 2, 
    name: "Chandelier Moderno Gold", 
    brand: "Flos", 
    price: "$4,200", 
    img: "/img/prod_2_flos_chandelier_1773804140887.png", 
    category: "iluminacion",
    description: "Impresionante candelabro escultórico en oro cepillado de 24 kilates con globos de cristal opalino soplados a boca. Diseñado para espacios de doble altura, proporciona una iluminación difusa y cálida que transforma toda la atmósfera arquitectónica de cualquier salón comedor principal o vestíbulo de lujo.",
    gallery: ["/img/prod_5_artemide_lamp_1773804155548.png", "/img/prod_15_arco_lamp_1773804168459.png", "/img/prod_17_vintage_pendant_1773804180162.png", "/img/prod_18_minimalist_sconce_1773804190565.png"]
  },
  { 
    id: 3, 
    name: "Lienzo Abstracto 'Eter'", 
    brand: "Galería Contemporánea", 
    price: "$12,000", 
    img: "/img/prod_3_abstract_canvas_1773804217052.png", 
    category: "arte",
    description: "Pintura original de gran formato (200x150cm). Técnica mixta que involucra óleo, acrílico y aplicaciones de pan de oro real de 18 kilates sobre lienzo belga pesado. Cada ángulo de visión refleja la luz de una manera completamente distinta, creando una experiencia emotiva constante en la sala de estar.",
    gallery: ["/img/prod_6_bronze_sculpture_1773804234116.png", "/img/prod_9_urban_photo_1773804248376.png", "/img/prod_3_abstract_canvas_1773804217052.png", "/img/prod_6_bronze_sculpture_1773804234116.png"]
  },
  { 
    id: 4, 
    name: "Silla Accent Minimalista", 
    brand: "Knoll", 
    price: "$2,100", 
    img: "/img/prod_4_knoll_chair_1773804099453.png", 
    category: "muebles",
    description: "Una expresión magistral del minimalismo de entreguerras. Marco de acero tubular sin uniones visibles, retapizada profesionalmente en lana virgen color azul marino nocturno. Ideal para estudios, bibliotecas o rincones de lectura contemporáneos.",
    gallery: ["/img/prod_1_eames_chair_1773804081121.png", "/img/prod_7_velvet_sofa_1773804113110.png", "/img/prod_8_walnut_table_1773804124970.png", "/img/prod_4_knoll_chair_1773804099453.png"]
  },
  { 
    id: 5, 
    name: "Lámpara de Mesa Escultural", 
    brand: "Artemide", 
    price: "$1,850", 
    img: "/img/prod_5_artemide_lamp_1773804155548.png",
    category: "iluminacion",
    description: "Más que una lámpara, es una escultura luminosa. Su diseño fluido y vanguardista emite una luz suave y difusa que transforma la atmósfera de las bibliotecas o mesitas de noche modernas.",
    gallery: ["/img/prod_5_artemide_lamp_1773804155548.png", "/img/prod_5_artemide_lamp_1773804155548.png", "/img/prod_5_artemide_lamp_1773804155548.png", "/img/prod_5_artemide_lamp_1773804155548.png"]
  },
  { 
    id: 6, 
    name: "Escultura de Bronce", 
    brand: "Artista Independiente", 
    price: "$8,500", 
    img: "/img/prod_6_bronze_sculpture_1773804234116.png",
    category: "arte",
    description: "Escultura de fundición pesada y acabados precisos patinados en negro. Su silueta fluida genera sombras cautivadoras a medida que interactúa con la luz ambiental desde distintos ángulos.",
    gallery: ["/img/prod_3_abstract_canvas_1773804217052.png", "/img/prod_9_urban_photo_1773804248376.png", "/img/prod_6_bronze_sculpture_1773804234116.png", "/img/prod_6_bronze_sculpture_1773804234116.png"]
  },
  { 
    id: 7, 
    name: "Sofá Modular de Terciopelo Verde", 
    brand: "B&B Italia", 
    price: "$14,500", 
    img: "/img/prod_7_velvet_sofa_1773804113110.png", 
    category: "muebles",
    description: "Sofá modular ultra-lujoso tapizado en terciopelo de seda de algodón importado de Milán en tono esmeralda. Sus módulos interconectables mediante imanes ocultos permiten hasta 4 configuraciones distintas.",
    gallery: ["/img/prod_1_eames_chair_1773804081121.png", "/img/prod_4_knoll_chair_1773804099453.png", "/img/prod_8_walnut_table_1773804124970.png", "/img/prod_7_velvet_sofa_1773804113110.png"]
  },
  { 
    id: 8, 
    name: "Mesa de Centro en Nogal", 
    brand: "Cassina", 
    price: "$3,800", 
    img: "/img/prod_8_walnut_table_1773804124970.png", 
    category: "muebles",
    description: "Una obra maestra de la carpintería artesanal moderna. Madera de nogal negro cosechada de forma sostenible, tallada para crear curvas orgánicas fluidas que sostienen un voladizo de cristal templado extraclark.",
    gallery: ["/img/prod_1_eames_chair_1773804081121.png", "/img/prod_4_knoll_chair_1773804099453.png", "/img/prod_7_velvet_sofa_1773804113110.png", "/img/prod_8_walnut_table_1773804124970.png"]
  },
  { 
    id: 9, 
    name: "Fotografía Original 'Urban'", 
    brand: "Exposición NYC", 
    price: "$4,200", 
    img: "/img/prod_9_urban_photo_1773804248376.png",
    category: "arte",
    description: "Impresión en película de gelatina de plata con altos contrastes de edición limitada. Captura el brutalista y a la vez hermoso contorno de rascacielos neoyorquinos, enmarcado con museo-glass antirreflejos.",
    gallery: ["/img/prod_9_urban_photo_1773804248376.png", "/img/prod_9_urban_photo_1773804248376.png", "/img/prod_9_urban_photo_1773804248376.png", "/img/prod_9_urban_photo_1773804248376.png"]
  },
  { 
    id: 10, 
    name: "Anillo de Diamante Ovalado", 
    brand: "Cartier", 
    price: "$25,000", 
    img: "/img/prod_10_cartier_ring_1773804260128.png",
    category: "joyeria",
    description: "Máxima pureza en su diamante de gran kilataje y talla oval, descansando sobre una banda elegante e invisible en platino macizo de ley. Símbolo indiscutido del lujo.",
    gallery: ["/img/prod_11_bvlgari_pearls_1773804275740.png", "/img/prod_12_rolex_watch_1773804289108.png", "/img/prod_10_cartier_ring_1773804260128.png", "/img/prod_10_cartier_ring_1773804260128.png"]
  },
  { 
    id: 11, 
    name: "Collar Vintage de Perlas", 
    brand: "Bvlgari", 
    price: "$18,500", 
    img: "/img/prod_11_bvlgari_pearls_1773804275740.png",
    category: "joyeria",
    description: "Tres vueltas de puras perlas cultivadas impecables, que se unen en un asombroso broche central repleto de diamantes y un exótico zafiro corte princesa azul profundo de procedencia Bvlgari.",
    gallery: ["/img/prod_10_cartier_ring_1773804260128.png", "/img/prod_12_rolex_watch_1773804289108.png", "/img/prod_11_bvlgari_pearls_1773804275740.png", "/img/prod_11_bvlgari_pearls_1773804275740.png"]
  },
  { 
    id: 12, 
    name: "Reloj Automático de Colección", 
    brand: "Rolex", 
    price: "$32,000", 
    img: "/img/prod_12_rolex_watch_1773804289108.png",
    category: "joyeria",
    description: "Una pieza de relojería suiza inmaculada. Brazalete jubilee mixto en oro y acero, corona estriada icónica, cristal de zafiro y un calibre manufactura automático infalible que reta el paso de las décadas.",
    gallery: ["/img/prod_10_cartier_ring_1773804260128.png", "/img/prod_11_bvlgari_pearls_1773804275740.png", "/img/prod_12_rolex_watch_1773804289108.png", "/img/prod_12_rolex_watch_1773804289108.png"]
  },
  { 
    id: 15, 
    name: "Lámpara de Pie Arco", 
    brand: "Flos", 
    price: "$3,600", 
    img: "/img/prod_15_arco_lamp_1773804168459.png",
    category: "iluminacion",
    description: "Diseñada por los hermanos Castiglioni, esta lámpara cuenta con una base de mármol de Carrara sólido y un brazo telescópico de acero inoxidable. Su largo arco permite iluminar el centro de la habitación sin requerir instalaciones en el techo.",
    gallery: ["/img/prod_15_arco_lamp_1773804168459.png", "/img/prod_15_arco_lamp_1773804168459.png", "/img/prod_15_arco_lamp_1773804168459.png", "/img/prod_15_arco_lamp_1773804168459.png"]
  },
  { 
    id: 17, 
    name: "Lámpara Colgante Vintage", 
    brand: "Louis Poulsen", 
    price: "$2,100", 
    img: "/img/prod_17_vintage_pendant_1773804180162.png",
    category: "iluminacion",
    description: "Diseño clásico danés que juega con la luz. Sus capas de metal reflectante están diseñadas para ocultar la bombilla y proporcionar una luz de trabajo completamente libre de deslumbramientos.",
    gallery: ["/img/prod_17_vintage_pendant_1773804180162.png", "/img/prod_17_vintage_pendant_1773804180162.png", "/img/prod_17_vintage_pendant_1773804180162.png", "/img/prod_17_vintage_pendant_1773804180162.png"]
  },
  { 
    id: 18, 
    name: "Aplique de Pared Minimalista", 
    brand: "Vibia", 
    price: "$850", 
    img: "/img/prod_18_minimalist_sconce_1773804190565.png",
    category: "iluminacion",
    description: "Simplicidad extrema y puramente lineal. Este aplique de pared, acabado en metal negro mate, rebota su luz LED directamente hacia la pared, entregando una luz abstracta perfecta para pasillos minimalistas.",
    gallery: ["/img/prod_18_minimalist_sconce_1773804190565.png", "/img/prod_18_minimalist_sconce_1773804190565.png", "/img/prod_18_minimalist_sconce_1773804190565.png", "/img/prod_18_minimalist_sconce_1773804190565.png"]
  },
  { 
    id: 19, 
    name: "Lámpara de Escritorio Clásica", 
    brand: "Anglepoise", 
    price: "$450", 
    img: "/img/prod_19_classic_desk_lamp_1773804202398.png",
    category: "iluminacion",
    description: "El estándar británico de la lámpara de arquitecto. Su sistema de resortes tensores permite un movimiento suave y posicionamiento exacto, fabricada enteramente en acero cepillado industrial.",
    gallery: ["/img/prod_19_classic_desk_lamp_1773804202398.png", "/img/prod_19_classic_desk_lamp_1773804202398.png", "/img/prod_19_classic_desk_lamp_1773804202398.png", "/img/prod_19_classic_desk_lamp_1773804202398.png"]
  }
];

export function getProducts(): Product[] {      
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem('luxury_products_v2');
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as Product[];
      if (parsed.length > 0 && !parsed[0].hasOwnProperty('gallery')) {
        console.log("Migrating old products data to new schema with galleries...");
        localStorage.setItem('luxury_products_v2', JSON.stringify(defaultProducts));
        return defaultProducts;
      }
      return parsed;
    } catch(e) {        
      console.error("Error parsing stored products", e);
    }
  }
  
  // Initialize if empty
  localStorage.setItem('luxury_products_v2', JSON.stringify(defaultProducts));
  return defaultProducts;
}

export function saveProduct(product: Omit<Product, 'id'>) {
  if (typeof window === 'undefined') return;
  
  const currentProducts = getProducts();
  const newProduct = {
    ...product,
    id: Date.now(), // Generate a unique mock ID
  };
  
  const updatedProducts = [...currentProducts, newProduct];
  localStorage.setItem('luxury_products_v2', JSON.stringify(updatedProducts));
  return newProduct;
}

export function getProductById(id: string): Product | undefined {
  const products = getProducts();
  return products.find(p => p.id.toString() === id);
}

export function deleteProduct(id: number) {
   if (typeof window === 'undefined') return;
   const currentProducts = getProducts();
   const updatedProducts = currentProducts.filter(p => p.id !== id);
   localStorage.setItem('luxury_products_v2', JSON.stringify(updatedProducts));
}

export function updateProduct(updatedProduct: Product) {
  if (typeof window === 'undefined') return;
  const currentProducts = getProducts();
  const updatedProducts = currentProducts.map(p => 
    p.id === updatedProduct.id ? updatedProduct : p
  );
  localStorage.setItem('luxury_products_v2', JSON.stringify(updatedProducts));
  return updatedProduct;
}
