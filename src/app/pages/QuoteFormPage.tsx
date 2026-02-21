import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MessageCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { products } from '../data/products'; // Asegúrate de que la ruta sea correcta

export default function QuoteFormPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Obtenemos el producto directamente de la URL
  const productId = searchParams.get('productId');
  const product = products.find(p => p.id === productId);

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    size: 'Mediano (Estándar)',
    material: product?.material || 'A convenir',
    quantity: '500 unidades (Mínimo)',
    logoType: '1 Tinta'
  });

  // Si no hay producto, lo mandamos al catálogo para que elija uno
  useEffect(() => {
    if (!productId || !product) {
      navigate('/catalog');
    }
  }, [productId, product, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mensaje estructurado para WhatsApp
    const message = `*Nueva Solicitud de Asesoría - DOPACK*%0A%0A` +
      `*Cliente:* ${formData.name}%0A` +
      `*Ciudad:* ${formData.city}%0A%0A` +
      `*Diseño de Referencia:* ${product?.name}%0A` +
      `*Tamaño:* ${formData.size}%0A` +
      `*Material:* ${formData.material}%0A` +
      `*Logo:* ${formData.logoType}%0A` +
      `*Cantidad:* ${formData.quantity}%0A%0A` +
      `Me gustaría recibir asesoría profesional para mi marca basada en este diseño.`;

    const whatsappUrl = `https://wa.me/573000000000?text=${message}`; // REEMPLAZA CON EL NÚMERO REAL
    window.open(whatsappUrl, '_blank');
  };

  if (!product) return null;

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Botón Volver */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-neutral-400 hover:text-black transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a la galería
        </button>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[32px] overflow-hidden shadow-sm border border-neutral-100">
          
          {/* LADO IZQUIERDO: Resumen Visual */}
          <div className="bg-neutral-50 p-8 lg:p-12">
            <div className="sticky top-12">
              <span className="text-[#C3A681] font-bold text-xs uppercase tracking-widest">Inspiración Elegida</span>
              <h2 className="text-3xl font-black text-neutral-900 mt-2 mb-6">{product.name}</h2>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C3A681] mt-0.5" />
                  <p className="text-sm text-neutral-600">Asesoría personalizada en diseño y materiales.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C3A681] mt-0.5" />
                  <p className="text-sm text-neutral-600">Ajuste de medidas según la necesidad de tu negocio.</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Formulario Consultivo */}
          <div className="p-8 lg:p-12">
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-neutral-900">Cuéntanos tu idea</h1>
              <p className="text-neutral-500 mt-2">No necesitas datos técnicos. Nosotros te guiaremos.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Sección: Identificación */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Tu Nombre / Empresa</Label>
                  <input 
                    required
                    className="w-full border-b border-neutral-200 focus:border-[#C3A681] py-2 outline-none transition-colors bg-transparent"
                    placeholder="Ej: Boutique Central"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Ciudad de entrega</Label>
                  <input 
                    required
                    className="w-full border-b border-neutral-200 focus:border-[#C3A681] py-2 outline-none transition-colors bg-transparent"
                    placeholder="Ej: Bucaramanga"
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
              </div>

              {/* Sección: Opciones de Producto */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Referencia de Tamaño</Label>
                  <select 
                    className="w-full bg-neutral-50 border-none rounded-xl p-4 outline-none text-sm appearance-none cursor-pointer"
                    onChange={(e) => setFormData({...formData, size: e.target.value})}
                  >
                    <option>Pequeño (Joyas, Accesorios)</option>
                    <option selected>Mediano (Ropa, Calzado)</option>
                    <option>Grande (Cajas, Chaquetas)</option>
                    <option>Personalizado (Yo daré las medidas)</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Preferencia de Material</Label>
                  <select 
                    className="w-full bg-neutral-50 border-none rounded-xl p-4 outline-none text-sm appearance-none cursor-pointer"
                    onChange={(e) => setFormData({...formData, material: e.target.value})}
                  >
                    <option>Kraft Natural (Sostenible)</option>
                    <option>Propalcote / Blanco (Premium)</option>
                    <option>Plástico Biodegradable</option>
                    <option>Cartón Corrugado</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Logo y Personalización</Label>
                  <div className="flex flex-wrap gap-2">
                    {['1 Tinta', 'Full Color', 'Hot Stamping',].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({...formData, logoType: opt})}
                        className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                          formData.logoType === opt 
                          ? 'bg-black text-white border-black' 
                          : 'border-neutral-200 text-neutral-500 hover:border-black'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Cantidad Estimada</Label>
                  <select 
                    className="w-full bg-neutral-50 border-none rounded-xl p-4 outline-none text-sm appearance-none cursor-pointer"
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  >
                    <option>500 unidades (Mínimo)</option>
                    <option>1,000 unidades</option>
                    <option>3,000+ unidades</option>
                  </select>
                </div>
              </div>

              {/* Botón WhatsApp */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-16 rounded-2xl text-lg font-bold shadow-lg shadow-green-200 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Iniciar Asesoría en WhatsApp
                </Button>
                <p className="text-[10px] text-center text-neutral-400 mt-4 uppercase tracking-widest font-medium">
                  Atención personalizada de Lunes a Sábado
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}