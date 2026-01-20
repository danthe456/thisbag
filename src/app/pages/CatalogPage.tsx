import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { products, categories } from '../data/products.ts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    if (value === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-semibold tracking-tight">
              ThisBag
            </Link>
            <Button asChild variant="ghost" size="sm">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Product Catalog
          </h1>
          <p className="text-neutral-600">
            Select a product to customize with your logo
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="all">All Products</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group border border-neutral-200 rounded-lg overflow-hidden hover:border-neutral-900 transition-all duration-200"
            >
              <div className="aspect-square bg-neutral-100 overflow-hidden">
                <ImageWithFallback
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-neutral-600 mb-3">{product.dimensions}</p>
                <p className="text-sm text-neutral-500 mb-4">{product.material}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">${product.basePrice}</p>
                    <p className="text-xs text-neutral-500">Min. {product.minQuantity} units</p>
                  </div>
                  <Button asChild size="sm">
                    <Link to={`/customize/${product.id}`}>Customize</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
         {/* Footer */}
      <footer className="border-t border-neutral-200 py-12" style={{ backgroundColor: 'var(--warm-beige-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">ThisBag</h3>
              <p className="text-sm text-neutral-600">
                Premium custom packaging solutions for businesses of all sizes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link to="/catalog" className="hover:text-neutral-900 transition-colors">Products</Link></li>
                <li><Link to="/catalog" className="hover:text-neutral-900 transition-colors">About</Link></li>
                <li><Link to="/catalog" className="hover:text-neutral-900 transition-colors">Get a Quote</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Contact</h4>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors block"
              >
                WhatsApp: +1 234 567 890
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-300 text-center">
            <p className="text-sm text-neutral-600">
              © 2026 ThisBag. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
