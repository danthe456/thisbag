import imgbolsa1  from '../../assets/bolsa desayunoV.png';
import imgbolsa4  from '../../assets/bolsa estandarV.jpeg';
import imgbolsa5  from '../../assets/bolsa estandar2V.jpeg';
import imgbolsa7  from '../../assets/bolsa lujoV.png';
import imgbolsa8  from '../../assets/bolsa luxV.jpg';
import imgbolsa11 from '../../assets/bolsa premiunV.jpeg';
import imgbolsa12 from '../../assets/BolsaDulcesV.png';
import imgbolsa15 from '../../assets/caja estandarV.jpg';
import imgbolsa16 from '../../assets/CajaSimpleV.png';
import imgbolsa17 from '../../assets/empaque carton.jpeg';
import imgbolsa3  from '../../assets/bolsa plastica.jpeg';
import imgbolsa6  from '../../assets/bolsa plastica2.jpeg';
import imgbolsa13 from '../../assets/bolsa plastica3.jpeg';
import imgbolsa14 from '../../assets/nuevo1.jpeg';
import imgbolsa18 from '../../assets/nuevo2.jpg';
import imgbolsa19 from '../../assets/nuevo3.jpg';
import imgbolsa20 from '../../assets/nuevo4.jpeg';
import imgbolsa21 from '../../assets/nuevo5.jpeg';
import imgbolsa22 from '../../assets/nuevo6.jpg';
import imgbolsa23 from '../../assets/nuevo7.jpg';
import imgbolsa24 from '../../assets/nuevo8.jpeg';
import imgbolsa25 from '../../assets/nuevo9.jpg';
import imgbolsa26 from '../../assets/nuevo10.jpg';
import imgbolsa27 from '../../assets/nuevo11.jpg';
import imgbolsa28 from '../../assets/nuevo12.jpg';
import imgbolsa29 from '../../assets/nuevo13.jpg';
import imgbolsa30 from '../../assets/nuevo14.jpg';
import imgbolsa31 from '../../assets/nuevo15.jpg';
import imgbolsa32 from '../../assets/nuevo16.jpg';
import imgbolsa33 from '../../assets/nuevo17.jpeg';
import imgbolsa34 from '../../assets/nuevo18.jpeg';
import imgbolsa35 from '../../assets/nuevo19.jpeg';
import imgbolsa36 from '../../assets/nuevo20.jpeg';
import imgbolsa37 from '../../assets/nuevo21.jpeg';
import imgbolsa38 from '../../assets/nuevo22.jpeg';
import imgbolsa39 from '../../assets/nuevo23.jpeg';

/* ================================
   Types
================================ */

export type ProductCategory = 'paper' | 'plastic' | 'eco';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  imageUrl: string;
  dimensions: string;
  material: string;
  description?: string;
  minQuantity?: string | number;
}

/* ================================
   Products Catalog
================================ */

export const products: Product[] = [

  /* ──────────────────────────────────────────────
     BOLSAS DE PAPEL
     Material base: papel kraft en distintos gramajes
     Uso: retail, moda, alimentos, regalos
  ────────────────────────────────────────────── */

  {
    id: 'paper-001',
    name: 'Bolsa Desayuno Kraft',
    category: 'paper',
    imageUrl: imgbolsa1,
    dimensions: '20 × 28 × 8 cm',
    material: 'Papel kraft 90gsm',
    description: 'Ideal para panaderías, cafeterías y tiendas de desayunos. Tamaño compacto con fondo reforzado.',
    minQuantity: 500,
  },
  {
    id: 'paper-002',
    name: 'Bolsa Boutique Mediana',
    category: 'paper',
    imageUrl: imgbolsa14,
    dimensions: '25 × 35 × 10 cm',
    material: 'Papel kraft 120gsm',
    description: 'Tamaño estándar para tiendas de ropa y accesorios. Excelente base para personalización con logo.',
    minQuantity: 500,
  },
  {
    id: 'paper-003',
    name: 'Bolsa Retail con Manija Plana',
    category: 'paper',
    imageUrl: imgbolsa18,
    dimensions: '28 × 38 × 10 cm',
    material: 'Papel kraft 120gsm',
    description: 'Manija plana recortada integrada al cuerpo. Diseño limpio, ideal para marcas minimalistas.',
    minQuantity: 500,
  },
  {
    id: 'paper-004',
    name: 'Bolsa Regalo Pequeña',
    category: 'paper',
    imageUrl: imgbolsa19,
    dimensions: '18 × 25 × 8 cm',
    material: 'Papel couché 150gsm',
    description: 'Perfecta para joyerías, perfumerías y tiendas de regalos. Superficie lisa lista para impresión full color.',
    minQuantity: 500,
  },
  {
    id: 'paper-005',
    name: 'Bolsa Corporativa con Cordón',
    category: 'paper',
    imageUrl: imgbolsa22,
    dimensions: '30 × 40 × 12 cm',
    material: 'Papel kraft 150gsm reforzado',
    description: 'Manija de cordón trenzado. Alta resistencia para eventos corporativos, ferias y lanzamientos de marca.',
    minQuantity: 500,
  },
  {
    id: 'paper-006',
    name: 'Bolsa Gourmet para Alimentos',
    category: 'paper',
    imageUrl: imgbolsa24,
    dimensions: '22 × 30 × 10 cm',
    material: 'Papel kraft grado alimenticio 110gsm',
    description: 'Con recubrimiento interior apto para contacto con alimentos. Ideal para restaurantes y tiendas gourmet.',
    minQuantity: 500,
  },
  {
    id: 'paper-007',
    name: 'Bolsa Estándar Económica',
    category: 'paper',
    imageUrl: imgbolsa25,
    dimensions: '25 × 35 × 10 cm',
    material: 'Papel kraft 90gsm',
    description: 'Solución económica de alto volumen. Ideal para comercios con alto tráfico de clientes.',
    minQuantity: 1000,
  },
  {
    id: 'paper-008',
    name: 'Bolsa Grande para Calzado',
    category: 'paper',
    imageUrl: imgbolsa26,
    dimensions: '35 × 45 × 15 cm',
    material: 'Papel kraft 150gsm',
    description: 'Formato grande especialmente diseñado para zapatillas y artículos voluminosos.',
    minQuantity: 500,
  },
  {
    id: 'paper-009',
    name: 'Bolsa Kraft Natural Sin Impresión',
    category: 'paper',
    imageUrl: imgbolsa29,
    dimensions: '30 × 40 × 12 cm',
    material: 'Papel kraft natural 120gsm',
    description: 'Acabado natural sin recubrimiento. Base perfecta para sello de caucho o sticker personalizado.',
    minQuantity: 500,
  },
  {
    id: 'paper-010',
    name: 'Bolsa Estándar para Comercio',
    category: 'paper',
    imageUrl: imgbolsa4,
    dimensions: '30 × 40 × 12 cm',
    material: 'Papel kraft reforzado 130gsm',
    description: 'El formato más solicitado por tiendas de ropa y comercios generales. Resistente y económico.',
    minQuantity: 500,
  },
  {
    id: 'paper-011',
    name: 'Bolsa Premium Laminada',
    category: 'paper',
    imageUrl: imgbolsa5,
    dimensions: '32 × 42 × 12 cm',
    material: 'Papel kraft laminado brillante 150gsm',
    description: 'Acabado laminado brillante que eleva la percepción de la marca. Para tiendas de lujo y retail premium.',
    minQuantity: 500,
  },
  {
    id: 'paper-012',
    name: 'Bolsa para Dulces y Repostería',
    category: 'paper',
    imageUrl: imgbolsa12,
    dimensions: '20 × 30 × 8 cm',
    material: 'Papel grado alimenticio 100gsm',
    description: 'Especialmente tratada para panadería, repostería y dulcerías. Higiénica y resistente a la grasa.',
    minQuantity: 500,
  },
  {
    id: 'paper-013',
    name: 'Bolsa de Lujo con Acabado Mate',
    category: 'paper',
    imageUrl: imgbolsa11,
    dimensions: '35 × 45 × 12 cm',
    material: 'Papel laminado mate premium 180gsm',
    description: 'El empaque más exclusivo de nuestra línea de papel. Acabado mate suave al tacto, para marcas de alto valor.',
    minQuantity: 500,
  },

  /* ──────────────────────────────────────────────
     BOLSAS PLÁSTICAS
     Material: polietileno oxobiodegradable
     Uso: supermercados, distribución, comercio masivo
  ────────────────────────────────────────────── */

  {
    id: 'plastic-001',
    name: 'Rollo Oxobiodegradable para Comercio',
    category: 'plastic',
    imageUrl: imgbolsa3,
    dimensions: 'Medida personalizable',
    material: 'Polietileno oxobiodegradable de alta resistencia',
    description: 'En rollo continuo para negocios de alto tráfico. Corte fácil, resistente a la humedad y carga pesada.',
    minQuantity: '1 rollo',
  },
  {
    id: 'plastic-002',
    name: 'Bolsa Plástica con Asa Suave',
    category: 'plastic',
    imageUrl: imgbolsa33,
    dimensions: '30 × 40 cm',
    material: 'Polietileno oxobiodegradable 60 micras',
    description: 'Asa suave integrada para mayor comodidad del usuario. Ideal para tiendas de barrio y minimercados.',
    minQuantity: 1000,
  },
  {
    id: 'plastic-003',
    name: 'Bolsa Plástica Estampada',
    category: 'plastic',
    imageUrl: imgbolsa34,
    dimensions: '30 × 40 cm',
    material: 'Polietileno oxobiodegradable 60 micras',
    description: 'Con zona de impresión para logo de hasta 2 tintas. Excelente relación costo-impacto visual.',
    minQuantity: 1000,
  },
  {
    id: 'plastic-004',
    name: 'Bolsa con Manija Troquelada Grande',
    category: 'plastic',
    imageUrl: imgbolsa6,
    dimensions: '38 × 48 cm',
    material: 'Polietileno oxobiodegradable 70 micras',
    description: 'Manija troquelada integrada en formato grande. Para supermercados, droguerías y ferreterías.',
    minQuantity: '1 rollo',
  },
  {
    id: 'plastic-005',
    name: 'Bolsa Industrial de Alta Carga',
    category: 'plastic',
    imageUrl: imgbolsa13,
    dimensions: '45 × 55 cm',
    material: 'Polietileno oxobiodegradable calibre pesado 80 micras',
    description: 'Máxima resistencia para productos pesados. Soporta hasta 15 kg sin deformarse.',
    minQuantity: '1 rollo',
  },
  {
    id: 'plastic-006',
    name: 'Bolsa Plástica Translúcida',
    category: 'plastic',
    imageUrl: imgbolsa35,
    dimensions: '35 × 45 cm',
    material: 'Polietileno transparente oxobiodegradable 60 micras',
    description: 'Material semitransparente que permite ver el contenido. Usada en tiendas de ropa y accesorios.',
    minQuantity: '1 rollo',
  },
  {
    id: 'plastic-007',
    name: 'Bolsa Plástica Negra Comercial',
    category: 'plastic',
    imageUrl: imgbolsa36,
    dimensions: '35 × 45 cm',
    material: 'Polietileno negro oxobiodegradable 70 micras',
    description: 'Acabado negro sólido para una presentación discreta y elegante. Muy popular en tiendas de ropa.',
    minQuantity: '1 rollo',
  },
  {
    id: 'plastic-008',
    name: 'Bolsa Plástica Mediana con Logo',
    category: 'plastic',
    imageUrl: imgbolsa37,
    dimensions: '30 × 40 cm',
    material: 'Polietileno oxobiodegradable 60 micras',
    description: 'Formato mediano con impresión de logo a 1 tinta incluida. La opción más popular de nuestra línea plástica.',
    minQuantity: 1000,
  },
  {
    id: 'plastic-009',
    name: 'Bolsa Plástica para Panadería',
    category: 'plastic',
    imageUrl: imgbolsa38,
    dimensions: '25 × 35 cm',
    material: 'Polietileno grado alimenticio oxobiodegradable 50 micras',
    description: 'Especialmente formulada para contacto con alimentos. Para panaderías, fruterías y tiendas de snacks.',
    minQuantity: '1 rollo',
  },
  {
    id: 'plastic-010',
    name: 'Bolsa Plástica Pequeña Multiuso',
    category: 'plastic',
    imageUrl: imgbolsa39,
    dimensions: '20 × 30 cm',
    material: 'Polietileno oxobiodegradable 50 micras',
    description: 'Formato pequeño para accesorios, joyería, papelería y productos de mostrador.',
    minQuantity: '1 rollo',
  },

  /* ──────────────────────────────────────────────
     ECO / CAJAS Y MATERIALES SOSTENIBLES
     Material: cartón reciclado, kraft natural, tela
     Uso: e-commerce, eventos, packaging premium
  ────────────────────────────────────────────── */

  {
    id: 'eco-001',
    name: 'Bolsa de Tela con Manija Larga',
    category: 'eco',
    imageUrl: imgbolsa7,
    dimensions: '35 × 40 cm',
    material: 'Tela no tejana 100% reciclable 80gsm',
    description: 'Reutilizable y resistente. Ideal para marcas que quieren comunicar compromiso ambiental.',
    minQuantity: 100,
  },
  {
    id: 'eco-002',
    name: 'Tote Bag de Tela Premium',
    category: 'eco',
    imageUrl: imgbolsa8,
    dimensions: '38 × 42 cm',
    material: 'Tela canvas 100% algodón reforzado',
    description: 'Material de algodón canvas de alta densidad. Larga vida útil, lavable y con excelente área de impresión.',
    minQuantity: 100,
  },
  {
    id: 'eco-003',
    name: 'Caja de Cartón Estándar para E-commerce',
    category: 'eco',
    imageUrl: imgbolsa15,
    dimensions: '40 × 30 × 15 cm',
    material: 'Cartón corrugado reciclado calibre 3mm',
    description: 'Resistente para envíos nacionales. Estructura corrugada que protege el contenido durante el transporte.',
    minQuantity: 500,
  },
  {
    id: 'eco-004',
    name: 'Caja Kraft Simple para Retail',
    category: 'eco',
    imageUrl: imgbolsa16,
    dimensions: '30 × 20 × 12 cm',
    material: 'Cartón kraft natural 450gsm',
    description: 'Caja plana de ensamble rápido sin pegamento. Perfecta para productos de cosmética y accesorios.',
    minQuantity: 500,
  },
  {
    id: 'eco-005',
    name: 'Caja Corrugada para Envíos Grandes',
    category: 'eco',
    imageUrl: imgbolsa17,
    dimensions: '45 × 35 × 25 cm',
    material: 'Cartón corrugado reciclado doble pared 5mm',
    description: 'Para productos pesados o frágiles que requieren protección extra durante el envío a nivel nacional.',
    minQuantity: 500,
  },
  {
    id: 'eco-006',
    name: 'Bolsa Kraft Biodegradable con Sello',
    category: 'eco',
    imageUrl: imgbolsa32,
    dimensions: '25 × 35 × 10 cm',
    material: 'Papel kraft certificado FSC 120gsm',
    description: 'Papel con certificación forestal FSC. Para marcas que comunican sostenibilidad en cada empaque.',
    minQuantity: 500,
  },
  {
    id: 'eco-007',
    name: 'Bolsa Reciclada para Eventos',
    category: 'eco',
    imageUrl: imgbolsa31,
    dimensions: '30 × 40 × 10 cm',
    material: 'Papel reciclado post-consumo 110gsm',
    description: 'Fabricada con papel 100% post-consumo. Ideal para ferias, eventos y activaciones de marca sostenible.',
    minQuantity: 500,
  },
  {
    id: 'eco-008',
    name: 'Bolsa Kraft para Cosméticos',
    category: 'eco',
    imageUrl: imgbolsa30,
    dimensions: '22 × 30 × 8 cm',
    material: 'Papel kraft laminado mate 140gsm',
    description: 'Formato compacto con acabado mate. Muy solicitada por marcas de cosmética natural y skincare.',
    minQuantity: 500,
  },
  {
    id: 'eco-009',
    name: 'Bolsa Ecológica para Comercio Justo',
    category: 'eco',
    imageUrl: imgbolsa20,
    dimensions: '28 × 38 × 10 cm',
    material: 'Papel kraft natural sin blanqueadores 120gsm',
    description: 'Sin químicos de blanqueamiento. Perfecta para tiendas orgánicas, naturistas y comercio justo.',
    minQuantity: 500,
  },
  {
    id: 'eco-010',
    name: 'Bolsa de Papel Reciclado con Ventana',
    category: 'eco',
    imageUrl: imgbolsa21,
    dimensions: '22 × 32 × 8 cm',
    material: 'Papel reciclado 110gsm con ventana celofán',
    description: 'Ventana de celofán biodegradable para mostrar el producto. Ideal para panadería y repostería artesanal.',
    minQuantity: 500,
  },
  {
    id: 'eco-011',
    name: 'Bolsa Eco para Joyería',
    category: 'eco',
    imageUrl: imgbolsa23,
    dimensions: '15 × 22 × 6 cm',
    material: 'Papel kraft premium 160gsm con cordón de algodón',
    description: 'Formato pequeño con cordón de algodón natural. Para joyería artesanal, bisutería y accesorios premium.',
    minQuantity: 500,
  },
  {
    id: 'eco-012',
    name: 'Bolsa Multiuso con Base Reforzada',
    category: 'eco',
    imageUrl: imgbolsa27,
    dimensions: '32 × 42 × 12 cm',
    material: 'Papel kraft reciclado 130gsm base cartón',
    description: 'Base de cartón integrada para mayor estabilidad. Para regalos, canastas y productos de mayor peso.',
    minQuantity: 500,
  },
  {
    id: 'eco-013',
    name: 'Bolsa Kraft Grande para Supermercado Eco',
    category: 'eco',
    imageUrl: imgbolsa28,
    dimensions: '38 × 50 × 15 cm',
    material: 'Papel kraft reciclado 150gsm reforzado',
    description: 'Alternativa ecológica a la bolsa plástica de supermercado. Alta capacidad y resistencia para compras del día.',
    minQuantity: 500,
  },
];

/* ================================
   Categories
================================ */

export const categories = [
  {
    id: 'paper',
    name: 'Bolsas de Papel',
    description: 'Kraft, laminado y couché en distintos gramajes. Para retail, moda, alimentos y regalos.',
  },
  {
    id: 'plastic',
    name: 'Bolsas Plásticas',
    description: 'Polietileno oxobiodegradable de alta resistencia. Para supermercados, distribución y comercio masivo.',
  },
  {
    id: 'eco',
    name: 'Línea Ecológica',
    description: 'Cajas, totes y bolsas de materiales reciclados, certificados y biodegradables.',
  },
];