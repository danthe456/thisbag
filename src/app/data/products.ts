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
    imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop',
    dimensions: '25cm x 35cm x 10cm',
    material: 'Premium kraft paper 120gsm',
    basePrice: 2.50,
    minQuantity: 100
  },
  {
    id: 'paper-002',
    name: 'Premium Paper Tote',
    category: 'paper',
    imageUrl: 'https://images.unsplash.com/photo-1607462109225-eee0b4c50eb7?w=400&h=400&fit=crop',
    dimensions: '30cm x 40cm x 12cm',
    material: 'Extra strong kraft paper 150gsm',
    basePrice: 3.20,
    minQuantity: 100
  },
  {
    id: 'plastic-001',
    name: 'Reusable Plastic Bag',
    category: 'plastic',
    imageUrl: 'https://images.unsplash.com/photo-1594031018540-7f2b2b1e2d4a?w=400&h=400&fit=crop',
    dimensions: '35cm x 45cm',
    material: 'Durable LDPE plastic',
    basePrice: 1.80,
    minQuantity: 200
  },
  {
    id: 'plastic-002',
    name: 'Heavy-Duty Plastic Tote',
    category: 'plastic',
    imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop',
    dimensions: '40cm x 50cm',
    material: 'Reinforced HDPE plastic',
    basePrice: 2.30,
    minQuantity: 200
  },
  {
    id: 'eco-001',
    name: 'Biodegradable Bag',
    category: 'eco',
    imageUrl: 'https://images.unsplash.com/photo-1614964303073-e9fc4e7f5f09?w=400&h=400&fit=crop',
    dimensions: '28cm x 38cm x 10cm',
    material: 'Compostable plant-based material',
    basePrice: 3.50,
    minQuantity: 150
  },
  {
    id: 'eco-002',
    name: 'Organic Cotton Tote',
    category: 'eco',
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
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
