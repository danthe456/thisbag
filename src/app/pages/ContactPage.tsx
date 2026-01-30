import { useState } from 'react';
import { Mail, Smartphone, CheckCircle2, Truck, Globe, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const khakiColor = '#C3A681';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Mantenemos el estado de éxito hasta que el usuario decida volver
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Título de la página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2D2D2D]">
            Solicita una Cotización
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto. Si aún no tienes logo, no te preocupes, 
            te ayudamos a elegir el empaque ideal para tu marca.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: Formulario */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-neutral-700">Nombre Completo</label>
                      <input required type="text" className="w-full p-3 rounded-xl border border-neutral-200 outline-none transition-all focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20" placeholder="Ej: Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-neutral-700">WhatsApp / Celular</label>
                      <input required type="tel" className="w-full p-3 rounded-xl border border-neutral-200 outline-none transition-all focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20" placeholder="+57 300..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">Correo Electrónico</label>
                    <input required type="email" className="w-full p-3 rounded-xl border border-neutral-200 outline-none transition-all focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20" placeholder="tu@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">¿Qué necesitas cotizar?</label>
                    <select className="w-full p-3 rounded-xl border border-neutral-200 outline-none bg-white focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20 transition-all cursor-pointer text-neutral-600">
                      <option>Bolsas de Papel</option>
                      <option>Bolsas Ecológicas</option>
                      <option>Bolsas Plásticas Reutilizables</option>
                      <option>Diseño de Marca / Logo</option>
                      <option>Otro servicio publicitario</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neutral-700">Detalles del pedido</label>
                    <textarea required rows={4} className="w-full p-3 rounded-xl border border-neutral-200 outline-none transition-all focus:border-[#C3A681] focus:ring-2 focus:ring-[#C3A681]/20" placeholder="Ej: Necesito 500 bolsas medianas con logo a una tinta..."></textarea>
                  </div>

                  <Button type="submit" className="w-full py-7 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]" style={{ backgroundColor: khakiColor, color: 'white' }}>
                    Enviar Solicitud
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-green-50">
                      <CheckCircle2 className="w-16 h-16 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">¡Solicitud Enviada!</h3>
                    <p className="text-neutral-500 mt-2">Hemos recibido tu mensaje. Un asesor se contactará contigo vía WhatsApp en menos de 24 horas.</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild style={{ backgroundColor: khakiColor }}>
                      <Link to="/catalog">Explorar Catálogo</Link>
                    </Button>
                    <button onClick={() => setSubmitted(false)} className="text-sm text-neutral-400 hover:text-neutral-600 underline">
                      Enviar otro mensaje
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Columna Derecha: Contacto y Envíos */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Canales Directos */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { 
                  icon: Mail, 
                  label: 'Email Corporativo', 
                  value: 'dmarpack@gmail.com',
                  href: 'mailto:dmarpack@gmail.com' 
                },
                { 
                  icon: Smartphone, 
                  label: 'WhatsApp Ventas', 
                  value: '+57 318 643 5725',
                  href: 'https://wa.me/573186435725' 
                },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-100 hover:border-[#C3A681] hover:shadow-md transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#F3F0E9] group-hover:bg-[#C3A681] group-hover:text-white transition-colors" style={{ color: khakiColor }}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-0.5">{item.label}</h3>
                    <p className="font-bold text-neutral-900">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Tarjeta de Logística */}
            <div className="w-full p-8 rounded-3xl bg-neutral-900 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6 text-[#C3A681]">
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Logística Nacional</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 tracking-tight">Envíos a toda Colombia</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  Gestionamos envíos nacionales con empaques de protección premium para asegurar 
                  que tu marca llegue impecable a cualquier ciudad.
                </p>
                
                <div className="flex gap-8 items-center border-t border-white/10 pt-8">
                  <div>
                    <p className="text-2xl font-bold text-white">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#C3A681] font-bold">Seguro</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-2xl font-bold text-white">48-72h</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#C3A681] font-bold">Entrega Media</p>
                  </div>
                </div>
              </div>

              <Globe className="absolute -bottom-12 -right-12 w-64 h-64 text-white/5 group-hover:text-[#C3A681]/10 transition-colors duration-700" />
            </div>

            {/* Banner de Ayuda */}
            <div className="bg-[#C3A681]/10 p-6 rounded-2xl border border-[#C3A681]/20">
               <h4 className="font-bold text-[#C3A681] mb-2 flex items-center gap-2 text-sm uppercase">
                 <ArrowRight className="w-4 h-4" /> ¿Necesitas ayuda técnica?
               </h4>
               <p className="text-xs text-neutral-600 leading-relaxed">
                 Si tienes dudas sobre gramajes de papel, calibres de plástico o tipos de tintas, 
                 escribe "Asesoría Técnica" en tu mensaje y un experto te llamará.
               </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}