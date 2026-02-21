import imgbolsa1 from '../../assets/bolsa desayunoV.png';
import imgbolsa4 from '../../assets/bolsa estandarV.jpeg';
import imgbolsa5 from '../../assets/bolsa estandar2V.jpeg';
import imgbolsa7 from '../../assets/bolsa lujoV.png';
import imgbolsa8 from '../../assets/bolsa luxV.jpg';
import imgbolsa11 from '../../assets/bolsa premiunV.jpeg';
import imgbolsa12 from '../../assets/BolsaDulcesV.png';
import imgbolsa15 from '../../assets/caja estandarV.jpg';
import imgbolsa16 from '../../assets/CajaSimpleV.png';
import imgbolsa17 from '../../assets/empaque carton.jpeg';
import imgbolsa3 from '../../assets/bolsa plastica.jpeg';
import imgbolsa6 from '../../assets/bolsa plastica2.jpeg';
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
  minQuantity?: string | number; // Nueva propiedad para cantidad mínima
}

/* ================================
   Products Catalog
================================ */

export const products: Product[] = [

  /* ---------- PAPER BAGS ---------- */

  {
    id: 'paper-001',
    name: 'Classic Kraft Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa1,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
 {
    id: 'paper-002',
    name: 'Classic Kraft Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa14,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  }, {
    id: 'paper-003',
    name: 'Classic Kraft Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa18,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  }, {
    id: 'paper-004',
    name: 'Classic Kraft Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa19,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },  {
    id: 'paper-005',
    name: 'Classic Kraft Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa22,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },  {
    id: 'paper-006',
    name: 'Classic Kraft Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa24,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  }, {
    id: 'paper-007',
    name: 'Classic Kraft Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa25,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  }, {
    id: 'paper-008',
    name: 'Classic Kraft Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa26,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
     {
    id: 'paper-009',
    name: 'Classic Kraft Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa29,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
  {
    id: 'paper-0010',
    name: 'Standard Paper Shopping Bag',
    category: 'paper',
    imageUrl: imgbolsa4,
    dimensions: '30 × 40 × 12 cm',
    material: 'Reinforced kraft paper',
    minQuantity: 1000,
   
  },

  {
    id: 'paper-0011',
    name: 'Premium Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa5,
    dimensions: '32 × 42 × 12 cm',
    material: 'High density kraft paper',
       minQuantity: 1000,

  },

  {
    id: 'paper-0012',
    name: 'Candy Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa12,
    dimensions: '20 × 30 × 8 cm',
    material: 'Food grade paper',
       minQuantity: 1000,

  },

  {
    id: 'paper-0013',
    name: 'Luxury Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa11,
    dimensions: '35 × 45 × 12 cm',
    material: 'Premium laminated paper',
        minQuantity: 1000,

    
  },

  /* ---------- PLASTIC BAGS ---------- */

  {
    id: 'plastic-001',
    name: 'Eco Plastic Bag',
    category: 'plastic',
    imageUrl: imgbolsa3,
    dimensions: '30 × 40 cm',
    material: 'plástico oxobiodegradable de alta resistencia',
            minQuantity: "1 rollo de material ",

  },
   {
    id: 'plastic-002',
    name: 'Classic Plastic Bag',
    category: 'plastic',
    imageUrl: imgbolsa33,
    dimensions: '25 × 35 × 10 cm',
    material: 'Plástico oxobiodegradable de alta resistencia',
    minQuantity: 1000,
    
  }, {
    id: 'plastic-003',
    name: 'Classic Plastic Bag',
    category: 'plastic',
    imageUrl: imgbolsa34,
    dimensions: '25 × 35 × 10 cm',
    material: 'Plástico oxobiodegradable de alta resistencia',
    minQuantity: 1000,
    
  },

  {
    id: 'plastic-004',
    name: 'Handled Plastic Bag',
    category: 'plastic',
    imageUrl: imgbolsa6,
    dimensions: '35 × 45 cm',
    material: 'plástico oxobiodegradable de alta resistencia',
                minQuantity: "1 rollo de material ",

  },

  {
    id: 'plastic-005',
    name: 'Heavy Duty Plastic Bag',
    category: 'plastic',
    imageUrl: imgbolsa13,
    dimensions: '40 × 50 cm',
    material: 'plástico oxobiodegradable de alta resistencia',
                minQuantity: "1 rollo de material ",

  },

  /* ---------- ECO FRIENDLY ---------- */

  {
    id: 'eco-001',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa7,
    dimensions: '35 × 40 cm',
    material: '100% organic cotton',
    minQuantity: 100,
    
  },

  {
    id: 'eco-002',
    name: 'Premium Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa8,
    dimensions: '38 × 42 cm',
    material: 'Reinforced cotton canvas',
           minQuantity: 100,

  },

  {
    id: 'eco-003',
    name: 'Eco Packaging Box',
    category: 'eco',
    imageUrl: imgbolsa15,
    dimensions: '40 × 30 × 15 cm',
    material: 'Recycled cardboard',
        minQuantity: 1000,

  },

  {
    id: 'eco-004',
    name: 'Simple Kraft Box',
    category: 'eco',
    imageUrl: imgbolsa16,
    dimensions: '30 × 20 × 12 cm',
    material: 'Natural kraft cardboard',
       minQuantity: 1000,

  },

  {
    id: 'eco-005',
    name: 'Corrugated Shipping Box',
    category: 'eco',
    imageUrl: imgbolsa17,
    dimensions: '45 × 35 × 25 cm',
    material: 'Corrugated recycled cardboard',
        minQuantity: 1000,

  },
 {
    id: 'eco-006',
    name: 'Classic Kraft Paper Bag',
    category: 'eco',
    imageUrl: imgbolsa32,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
   {
    id: 'eco-007',
    name: 'Classic Kraft Paper Bag',
    category: 'eco',
    imageUrl: imgbolsa31,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
   {
    id: 'eco-008',
    name: 'Classic Kraft Paper Bag',
    category: 'eco',
    imageUrl: imgbolsa30,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
  {
    id: 'eco-009',
    name: 'Classic Kraft Paper Bag',
    category: 'eco',
    imageUrl: imgbolsa20,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
   {
    id: 'eco-0010',
    name: 'Classic Kraft Paper Bag',
    category: 'eco',
    imageUrl: imgbolsa21,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
  {
    id: 'eco-0011',
    name: 'Classic Kraft Paper Bag',
    category: 'eco',
    imageUrl: imgbolsa23,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },{
    id: 'eco-0012',
    name: 'Classic Kraft Paper Bag',
    category: 'eco',
    imageUrl: imgbolsa27,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
  {
    id: 'eco-0013',
    name: 'Classic Kraft Paper Bag',
    category: 'eco',
    imageUrl: imgbolsa28,
    dimensions: '25 × 35 × 10 cm',
    material: 'Kraft paper 120gsm',
    minQuantity: 1000,
    
  },
];

/* ================================
   Categories
================================ */

export const categories = [
  { id: 'paper', name: 'Paper Bags' , description: 'Opciones de papel clásicas y ecológicas'},
  { id: 'plastic', name: 'Plastic Bags', description: 'Soluciones plásticas duraderas y reutilizables' },
  { id: 'eco', name: 'Eco Friendly',description: 'Materiales sostenibles y biodegradables'  }
];
