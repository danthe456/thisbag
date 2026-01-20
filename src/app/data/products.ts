import imgbolsa1 from '../../assets/bolsa desayuno.png';
import imgbolsa2 from '../../assets/bolsa eco.jpeg';
import imgbolsa3 from '../../assets/bolsa eco2.jpeg';
import imgbolsa4 from '../../assets/bolsa estandar.jpeg';
import imgbolsa5 from '../../assets/bolsa estandar2.jpeg';
import imgbolsa6 from '../../assets/bolsa estandar3.jpeg';
import imgbolsa7 from '../../assets/bolsa lujo.png';
import imgbolsa8 from '../../assets/bolsa lux.jpg';
import imgbolsa9 from '../../assets/bolsa papel duro.jpeg';
import imgbolsa10 from '../../assets/bolsa manija.jpeg';
import imgbolsa11 from '../../assets/bolsa premiun.jpeg';
import imgbolsa12 from '../../assets/BolsaDulces.png';
import imgbolsa13 from '../../assets/BolsaNAtural.png';
import imgbolsa14 from '../../assets/bolsaPapelElect.png';
import imgbolsa15 from '../../assets/caja estandar.jpg';
import imgbolsa16 from '../../assets/CajaSimple.png';
import imgbolsa17 from '../../assets/empaque carton.jpeg';
import imgbolsa18 from '../../assets/tote bag.jpg';
import imgbolsa19 from '../../assets/tote bag2.png';
export interface Product {
  id: string;
  name: string;
  category: 'paper' | 'plastic' | 'eco';
  imageUrl: string;
  dimensions: string;
  material: string;
  basePrice: number;
  minQuantity: number;
}
  
export const products: Product[] = [
  {
    id: 'paper-001',
    name: 'Classic Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa1,
    dimensions: '25cm x 35cm x 10cm',
    material: 'Premium kraft paper 120gsm',
    basePrice: 2.50,
    minQuantity: 100
  },
   {
    id: 'paper-001',
    name: 'Classic Paper Bag',
    category: 'paper',
    imageUrl: imgbolsa19,
    dimensions: '25cm x 35cm x 10cm',
    material: 'Premium kraft paper 120gsm',
    basePrice: 2.50,
    minQuantity: 100
  },
  {
    id: 'paper-002',
    name: 'Premium Paper Tote',
    category: 'paper',
    imageUrl: imgbolsa2,
    dimensions: '30cm x 40cm x 12cm',
    material: 'Extra strong kraft paper 150gsm',
    basePrice: 3.20,
    minQuantity: 100
  },
  {
    id: 'plastic-001',
    name: 'Reusable Plastic Bag',
    category: 'plastic',
    imageUrl: imgbolsa3,
    dimensions: '35cm x 45cm',
    material: 'Durable LDPE plastic',
    basePrice: 1.80,
    minQuantity: 200
  },
  {
    id: 'plastic-002',
    name: 'Heavy-Duty Plastic Tote',
    category: 'plastic',
    imageUrl: imgbolsa4,
    dimensions: '40cm x 50cm',
    material: 'Reinforced HDPE plastic',
    basePrice: 2.30,
    minQuantity: 200
  },
  {
    id: 'eco-001',
    name: 'Biodegradable Bag',
    category: 'eco',
    imageUrl: imgbolsa5,
    dimensions: '28cm x 38cm x 10cm',
    material: 'Compostable plant-based material',
    basePrice: 3.50,
    minQuantity: 150
  },
  {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa6,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa7,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa8,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa9,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa10,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa11,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa12,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa18,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa13,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa14,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa15,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa16,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  },
   {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: imgbolsa17,
    dimensions: '35cm x 40cm',
    material: '100% organic cotton canvas',
    basePrice: 4.80,
    minQuantity: 50
  }

];

export const categories = [
  { id: 'paper', name: 'Paper Bags', description: 'Classic, eco-friendly paper options' },
  { id: 'plastic', name: 'Plastic Bags', description: 'Durable and reusable plastic solutions' },
  { id: 'eco', name: 'Eco-Friendly Bags', description: 'Sustainable and biodegradable materials' }
];
