import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { products } from '../data/products.ts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CustomizerPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(product?.minQuantity || 100);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Button asChild>
            <Link to="/catalog">Back to Catalog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGetQuote = () => {
    // Store customization data in localStorage for the quote form
    const customizationData = {
      product,
      quantity,
      hasLogo: !!logoFile,
      logoFileName: logoFile?.name
    };
    localStorage.setItem('customization', JSON.stringify(customizationData));
    navigate('/quote');
  };

  const totalPrice = (product.basePrice * quantity).toFixed(2);

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
              <Link to="/catalog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Catalog
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Preview Section */}
          <div>
            <h2 className="text-sm font-medium text-neutral-600 mb-4">PREVIEW</h2>
            <div className="sticky top-8">
              <div className="aspect-square bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden relative">
                <ImageWithFallback
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {logoPreview && (
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-[200px] w-full">
                      <img
                        src={logoPreview}
                        alt="Your logo"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Customization Controls */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-neutral-900">
                ${product.basePrice} <span className="text-base font-normal text-neutral-600">per unit</span>
              </p>
            </div>

            {/* Product Details */}
            <div className="mb-8 pb-8 border-b border-neutral-200">
              <h3 className="text-sm font-medium text-neutral-600 mb-3">PRODUCT DETAILS</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Dimensions</span>
                  <span className="font-medium">{product.dimensions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Material</span>
                  <span className="font-medium">{product.material}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Minimum Order</span>
                  <span className="font-medium">{product.minQuantity} units</span>
                </div>
              </div>
            </div>

            {/* Logo Upload */}
            <div className="mb-8 pb-8 border-b border-neutral-200">
              <Label htmlFor="logo" className="text-sm font-medium text-neutral-600 mb-3 block">
                UPLOAD YOUR LOGO
              </Label>
              <div className="space-y-3">
                <div className="border-2 border-dashed border-neutral-200 rounded-lg p-8 text-center hover:border-neutral-300 transition-colors">
                  <input
                    id="logo"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <Label
                    htmlFor="logo"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="w-8 h-8 text-neutral-400" />
                    <span className="text-sm text-neutral-600">
                      {logoFile ? logoFile.name : 'Click to upload PNG file'}
                    </span>
                    <span className="text-xs text-neutral-500">
                      Recommended: Square image, 1000x1000px
                    </span>
                  </Label>
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <Label htmlFor="quantity" className="text-sm font-medium text-neutral-600 mb-3 block">
                QUANTITY
              </Label>
              <Input
                id="quantity"
                type="number"
                min={product.minQuantity}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || product.minQuantity)}
                className="text-base"
              />
              <p className="text-xs text-neutral-500 mt-2">
                Minimum order: {product.minQuantity} units
              </p>
            </div>

            {/* Total Price */}
            <div className="mb-8 p-6 bg-neutral-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Estimated Total</span>
                <span className="text-2xl font-semibold">${totalPrice}</span>
              </div>
              <p className="text-xs text-neutral-500 mt-2">
                Final price will be confirmed via WhatsApp
              </p>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleGetQuote}
              size="lg"
              className="w-full text-base"
              disabled={!logoFile || quantity < product.minQuantity}
            >
              Request Quote via WhatsApp
            </Button>
            {!logoFile && (
              <p className="text-xs text-neutral-500 text-center mt-2">
                Please upload your logo to continue
              </p>
            )}
          </div>
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
