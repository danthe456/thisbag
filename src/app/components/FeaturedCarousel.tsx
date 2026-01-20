import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import type { Product } from '../data/products';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeaturedCarouselProps {
  products: Product[];
}

export default function FeaturedCarousel({ products }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev < products.length - itemsPerView ? prev + 1 : prev
    );
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < products.length - itemsPerView;

  return (
    <div className="relative">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 hover:border-neutral-900 disabled:opacity-30 disabled:hover:border-neutral-200 transition-colors"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 hover:border-neutral-900 disabled:opacity-30 disabled:hover:border-neutral-200 transition-colors"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` 
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[calc(33.333%-1rem)] flex-shrink-0"
            >
              <div className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square bg-neutral-50 overflow-hidden h-[300px] w-full"> 
                      <ImageWithFallback
                        src={product.imageUrl || (product as any).image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--warm-accent)' }}>
                    {product.material}
                  </p>
                  <Button asChild size="sm" className="w-full" style={{ backgroundColor: 'var(--warm-khaki)' }}>
                    <Link to={`/customize/${product.id}`}>Customize</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / itemsPerView) === index
                ? 'w-8 bg-neutral-900'
                : 'w-1 bg-neutral-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
