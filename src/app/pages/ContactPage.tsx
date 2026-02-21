import { useState } from 'react';
import { Mail, Smartphone, CheckCircle2, Truck, Globe, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// ─────────────────────────────────────────────────────────────
// Página de Cotización — DOPACK
// Envío: redirige a WhatsApp con los datos del formulario
// ─────────────────────────────────────────────────────────────

const WA_NUMBER = '573186435725';

function buildWhatsAppURL(data: {
  nombre: string;
  celular: string;
  email: string;
  producto: string;
  detalles: string;
}) {
  const msg = `¡Hola DOPACK! Me gustaría solicitar una cotización 🛍️

*Nombre:* ${data.nombre}
*Celular:* ${data.celular}
*Email:* ${data.email}
*Producto:* ${data.producto}
*Detalles:* ${data.detalles}`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // Estado del formulario
  const [form, setForm] = useState({
    nombre:   '',
    celular:  '',
    email:    '',
    producto: '',
    detalles: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Abre WhatsApp con el mensaje prearmado
    window.open(buildWhatsAppURL(form), '_blank');
    setSubmitted(true);
  };

  const inputClass =
    'w-full p-3 rounded-xl border border-neutral-200 bg-white outline-none transition-all text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10';

  const labelClass = 'block text-xs font-black uppercase tracking-widest text-neutral-500 mb-2';

  return (
    <div className="bg-white overflow-hidden min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-[#111111] pt-20 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 75% 50%, rgba(195,166,129,0.10) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-5 h-px bg-[#C3A681]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C3A681]">
                Cotización
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
              Cuéntanos qué necesitas{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #C3A681 0%, #a38763 100%)' }}
              >
                y lo hacemos realidad.
              </span>
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed max-w-xl">
              Si aún no tienes logo o diseño, no te preocupes — te asesoramos desde cero
              para encontrar el empaque ideal para tu marca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contenido ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Formulario ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-neutral-100 rounded-3xl shadow-sm p-8"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Nombre + Celular */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Nombre completo</label>
                      <input
                        required
                        name="nombre"
                        type="text"
                        value={form.nombre}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Ej: Laura Martínez"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>WhatsApp / Celular</label>
                      <input
                        required
                        name="celular"
                        type="tel"
                        value={form.celular}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Correo electrónico</label>
                    <input
                      required
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="tu@empresa.com"
                    />
                  </div>

                  {/* Producto — con opción vacía inicial */}
                  <div>
                    <label className={labelClass}>¿Qué necesitas cotizar?</label>
                    <select
                      required
                      name="producto"
                      value={form.producto}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>Selecciona un producto...</option>
                      <option value="Bolsas de Papel">Bolsas de Papel</option>
                      <option value="Bolsas Ecológicas">Bolsas Ecológicas / Oxobiodegradables</option>
                      <option value="Bolsas Plásticas">Bolsas Plásticas de Alta Resistencia</option>
                      <option value="Rollos Oxobiodegradables">Rollos Oxobiodegradables</option>
                      <option value="Cajas Personalizadas">Cajas Personalizadas</option>
                      <option value="Etiquetas y Adhesivos">Etiquetas y Adhesivos</option>
                      <option value="Material Publicitario">Material Publicitario (flyers, pendones...)</option>
                      <option value="Otro servicio">Otro servicio</option>
                    </select>
                  </div>

                  {/* Detalles */}
                  <div>
                    <label className={labelClass}>
                      Detalles del pedido
                    </label>
                    <textarea
                      required
                      name="detalles"
                      rows={4}
                      value={form.detalles}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Ej: 500 bolsas de papel kraft 30×40cm, con logo a 2 tintas, manija troquelada, para tienda de ropa..."
                    />
                    <p className="text-[10px] text-neutral-400 mt-2">
                      Entre más detalle des, más precisa será tu cotización.
                    </p>
                  </div>

                  {/* Submit — abre WhatsApp */}
                  <Button
                    type="submit"
                    className="w-full h-14 text-base font-black rounded-xl bg-neutral-900 hover:bg-[#C3A681] text-white transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {/* Icono WhatsApp */}
                    <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current flex-shrink-0">
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.027 7.8L0 32l8.418-2.004A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.23 20.17c-.396-.198-2.344-1.157-2.707-1.288-.363-.132-.627-.198-.89.198-.264.396-1.023 1.288-1.254 1.552-.23.264-.462.297-.858.099-.396-.198-1.673-.616-3.187-1.967-1.178-1.05-1.973-2.347-2.203-2.743-.23-.396-.025-.61.173-.807.178-.177.396-.462.594-.693.198-.23.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.89-2.146-1.22-2.94-.32-.77-.647-.666-.89-.678l-.759-.013c-.264 0-.693.099-1.056.495-.363.396-1.386 1.354-1.386 3.302 0 1.948 1.419 3.83 1.617 4.094.198.264 2.793 4.263 6.766 5.98.946.408 1.684.652 2.26.834.95.302 1.814.259 2.497.157.762-.114 2.344-.958 2.675-1.884.33-.924.33-1.717.23-1.884-.099-.165-.363-.264-.759-.462z"/>
                    </svg>
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-[10px] text-neutral-400 text-center">
                    Al enviar aceptas nuestra{' '}
                    <Link to="/privacy" className="underline hover:text-[#C3A681] transition-colors">
                      política de privacidad
                    </Link>
                    . Te contactaremos a la brevedad.
                  </p>
                </motion.form>

              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#F5F3EF] flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-neutral-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-neutral-900 mb-2">
                      ¡Solicitud enviada!
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                      Se abrió WhatsApp con tu mensaje listo. Si no se abrió automáticamente,
                      escríbenos directamente al{' '}
                      <a
                        href={`https://wa.me/${WA_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C3A681] font-bold"
                      >
                        +57 318 643 5725
                      </a>
                      .
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 pt-2">
                    <Button
                      asChild
                      className="bg-neutral-900 hover:bg-[#C3A681] text-white rounded-xl h-12 font-bold transition-colors"
                    >
                      <Link to="/catalog">Explorar Catálogo</Link>
                    </Button>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ nombre:'', celular:'', email:'', producto:'', detalles:'' }); }}
                      className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors underline"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Columna derecha ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Canales directos */}
            {[
              {
                icon: Mail,
                label: 'Email corporativo',
                value: 'dmarpack@gmail.com',
                href: 'mailto:dmarpack@gmail.com',
              },
              {
                icon: Smartphone,
                label: 'WhatsApp ventas',
                value: '+57 318 643 5725',
                href: `https://wa.me/${WA_NUMBER}`,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-900 hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#F5F3EF] flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-neutral-400 mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-bold text-neutral-900 text-sm">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Logística */}
            <div className="w-full p-8 rounded-3xl bg-neutral-900 text-white relative overflow-hidden group">
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse at 80% 20%, rgba(195,166,129,0.6) 0%, transparent 60%)',
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-xl bg-white/10">
                    <Truck className="w-4 h-4 text-[#C3A681]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C3A681]">
                    Logística Nacional
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-3 tracking-tight leading-tight">
                  Envíos a toda Colombia
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  Despachamos con embalaje de protección premium para que tu pedido llegue
                  impecable a cualquier ciudad del país.
                </p>
                <div className="flex gap-8 items-center border-t border-white/10 pt-6">
                  <div>
                    <p className="text-2xl font-black text-white">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#C3A681] font-black mt-0.5">
                      Seguro
                    </p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-2xl font-black text-white">48–72h</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#C3A681] font-black mt-0.5">
                      Entrega estimada
                    </p>
                  </div>
                </div>
              </div>
              <Globe className="absolute -bottom-10 -right-10 w-56 h-56 text-white/5 group-hover:text-[#C3A681]/10 transition-colors duration-700" />
            </div>

            {/* Ayuda técnica */}
            <div className="bg-[#F5F3EF] p-6 rounded-2xl border border-neutral-200">
              <h4 className="font-black text-neutral-900 mb-2 flex items-center gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-[#C3A681]" />
                ¿Tienes dudas técnicas?
              </h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Si no estás seguro del gramaje, calibre de plástico o tipo de tinta, escribe{' '}
                <span className="font-bold text-neutral-700">"Asesoría técnica"</span> en los
                detalles y un experto te guiará antes de cotizar.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}