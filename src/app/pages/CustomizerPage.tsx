import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {  Upload } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { products } from '../data/products.ts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';


export default function CustomizerPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  // --- 1. ESTADOS ---
  const [hasLogoOption, setHasLogoOption] = useState<'yes' | 'no' | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(product?.minQuantity || 100);

  // --- 2. FUNCIONES DE LÓGICA ---
  const handleOptionChange = (option: 'yes' | 'no') => {
    setHasLogoOption(option);
    
    // Si cambia a "no", limpiamos todo rastro del logo
    if (option === 'no') {
      setLogoFile(null);
      setLogoPreview(null);
      const fileInput = document.getElementById('logo') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  };

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
    const customizationData = {
      product,
      quantity,
      hasLogo: hasLogoOption === 'yes' && !!logoFile,
      logoFileName: logoFile?.name || 'No logo provided'
    };
    localStorage.setItem('customization', JSON.stringify(customizationData));
    navigate('/quote');
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Button asChild><Link to="/catalog">Back to Catalog</Link></Button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-white">
    

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* --- SECCIÓN PREVIEW DINÁMICO --- */}
          <div>
            <h2 className="text-sm font-medium text-neutral-600 mb-4 uppercase">Vista Previa</h2>
            <div className="sticky top-8">
              <div className="aspect-square bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden relative">
                <ImageWithFallback src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                
                {/* El logo solo aparece si la opción es 'yes' y hay un archivo cargado */}
                {hasLogoOption === 'yes' && logoPreview && (
                  <div className="absolute inset-0 flex items-center justify-center p-12 animate-in zoom-in-95 duration-300">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-[180px] w-full shadow-sm">
                      <img src={logoPreview} alt="Logo preview" className="w-full h-auto object-contain max-h-[120px]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* --- CONTROLES --- */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
            </div>

            {/* Opciones de Logo */}
            <div className="mb-8 pb-8 border-b border-neutral-200">
              <Label className="text-sm font-medium text-neutral-600 mb-4 block uppercase tracking-wider">¿Añadir logo personalizado?</Label>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => handleOptionChange('no')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all font-medium ${hasLogoOption === 'no' ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'}`}
                >
                  Sin logo por ahora
                </button>
                <button
                  onClick={() => handleOptionChange('yes')}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all font-medium ${hasLogoOption === 'yes' ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'}`}
                >
                  Subir mi logo
                </button>
              </div>

              {hasLogoOption === 'yes' && (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
                  <div className="border-2 border-dashed border-neutral-200 rounded-lg p-6 text-center hover:border-neutral-300 transition-colors">
                    <input id="logo" type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                    <Label htmlFor="logo" className="cursor-pointer flex flex-col items-center gap-2">
                      <Upload className="w-6 h-6 text-neutral-400" />
                      <span className="text-sm font-medium">{logoFile ? "¡Logo listo!" : "Click para subir PNG o JPG"}</span>
                      {logoFile && <span className="text-xs text-green-600 font-mono">{logoFile.name}</span>}
                    </Label>
                  </div>
                </div>
              )}
            </div>

            {/* Cantidad */}
            <div className="mb-8">
              <Label className="text-sm font-medium text-neutral-600 mb-3 block">CANTIDAD</Label>
              <Input
                type="number"
                min={product.minQuantity}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || product.minQuantity)}
                className="text-lg h-12"
              />
            </div>

          

            {/* Botón CTA */}
            <Button
              onClick={handleGetQuote}
              size="lg"
              className="w-full text-base py-7 shadow-md transition-all active:scale-[0.98]"
              style={{ backgroundColor: '#C3A681' }}
              disabled={hasLogoOption === null || (hasLogoOption === 'yes' && !logoFile)}
            >
              Solicitar Cotización por WhatsApp
            </Button>
            
            {(hasLogoOption === 'yes' && !logoFile) && (
              <p className="text-xs text-red-500 text-center mt-3 italic">Por favor sube un archivo para continuar</p>
            )}
          </div>
        </div>
        
      </main>
        
    </div>
  );
}