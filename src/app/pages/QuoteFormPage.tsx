import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

interface CustomizationData {
  product: {
    name: string;
    basePrice: number;
    dimensions: string;
    material: string;
  };
  quantity: number;
  hasLogo: boolean;
  logoFileName?: string;
}

export default function QuoteFormPage() {
  const navigate = useNavigate();
  const [customizationData, setCustomizationData] = useState<CustomizationData | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    quantity: 0
  });

  useEffect(() => {
    const data = localStorage.getItem('customization');
    if (data) {
      const parsed = JSON.parse(data);
      setCustomizationData(parsed);
      setFormData(prev => ({ ...prev, quantity: parsed.quantity }));
    } else {
      // Redirect to catalog if no customization data
      navigate('/catalog');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customizationData) return;

    // Generate WhatsApp message
    const message = `Hi! I'd like to request a quote for custom bags:

📦 Product: ${customizationData.product.name}
📐 Dimensions: ${customizationData.product.dimensions}
🎨 Material: ${customizationData.product.material}
📊 Quantity: ${formData.quantity} units
${customizationData.hasLogo ? `🖼️ Logo: ${customizationData.logoFileName || 'Uploaded'}` : ''}

👤 Name: ${formData.name}
📍 City: ${formData.city}

💰 Estimated Total: $${(customizationData.product.basePrice * formData.quantity).toFixed(2)}

Looking forward to your response!`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear localStorage
    localStorage.removeItem('customization');
  };

  if (!customizationData) {
    return null;
  }

  const totalPrice = (customizationData.product.basePrice * formData.quantity).toFixed(2);

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
                Back
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            Request Your Quote
          </h1>
          <p className="text-neutral-600">
            Fill in your details and we'll send your quote request via WhatsApp
          </p>
        </div>

        {/* Order Summary */}
        <div className="mb-8 p-6 bg-neutral-50 rounded-lg">
          <h2 className="text-sm font-medium text-neutral-600 mb-4">ORDER SUMMARY</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Product</span>
              <span className="font-medium">{customizationData.product.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Dimensions</span>
              <span className="font-medium">{customizationData.product.dimensions}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Material</span>
              <span className="font-medium">{customizationData.product.material}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Quantity</span>
              <span className="font-medium">{formData.quantity} units</span>
            </div>
            {customizationData.hasLogo && (
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Logo</span>
                <span className="font-medium">✓ Uploaded</span>
              </div>
            )}
            <div className="pt-4 mt-4 border-t border-neutral-200">
              <div className="flex justify-between">
                <span className="text-sm text-neutral-600">Estimated Total</span>
                <span className="text-xl font-semibold">${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium mb-2 block">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              required
              className="text-base"
            />
          </div>

          <div>
            <Label htmlFor="city" className="text-sm font-medium mb-2 block">
              City *
            </Label>
            <Input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="New York"
              required
              className="text-base"
            />
          </div>

          <div>
            <Label htmlFor="quantity-form" className="text-sm font-medium mb-2 block">
              Quantity *
            </Label>
            <Input
              id="quantity-form"
              type="number"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
              required
              className="text-base"
            />
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              size="lg"
              className="w-full text-base flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Send Quote via WhatsApp
            </Button>
            <p className="text-xs text-neutral-500 text-center mt-3">
              You'll be redirected to WhatsApp with your quote details pre-filled
            </p>
          </div>
        </form>
      </main>
        <footer className="bg-[#D1A664] text-[#000000] pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Grid principal */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

      {/* Empresa */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          This<span className="text-[color:var(--warm-khaki)]">Bag</span>
        </h3>
        <p className="text-sm leading-relaxed text-[#000000]">
          Fabricamos bolsas personalizadas de alta calidad para empresas,
          marcas y comercios. Soluciones en papel, plástico y materiales
          ecológicos con procesos industriales certificados.
        </p>
      </div>

      {/* Productos */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[color:var(--warm-khaki)]">
          Productos
        </h4>
        <ul className="space-y-3 text-sm">
          <li>Bolsas de Papel</li>
          <li>Bolsas Plásticas</li>
          <li>Bolsas Ecológicas</li>
          <li>Personalización</li>
        </ul>
      </div>

      {/* Empresa */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#000000]">
          Empresa
        </h4>
        <ul className="space-y-3 text-sm">
          <li><Link to="/about" className="hover:text-white">Nuestra Empresa</Link></li>
          <li><Link to="/process" className="hover:text-white">Procesos</Link></li>
          <li><Link to="/sustainability" className="hover:text-white">Sostenibilidad</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contacto</Link></li>
        </ul>
      </div>

      {/* Contacto */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#000000]">
          Contacto
        </h4>
        <ul className="space-y-4 text-sm text-[#000000]">
          <li>
            📍 Calle 33 No 11-83<br />
            Bucaramanga, Colombia
          </li>
          <li>
            📞 +57 310 263 0075
          </li>
          <li>
            ✉️ comercial@thisbag.com
          </li>
        </ul>
      </div>

    </div>

    {/* Línea inferior */}
    <div className="border-t border-white/10 pt-6 text-center text-xs text-[#000000]">
      © 2026 ThisBag Packaging · Todos los derechos reservados
    </div>

  </div>
</footer>
    </div>
  );
}
