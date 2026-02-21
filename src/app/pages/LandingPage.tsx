import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LeafyGreen, ShoppingBag, Boxes, ChevronDown, Star } from 'lucide-react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Button } from '../components/ui/button';
import { categories, products } from '../data/products';

// Imágenes
import imgRolloBiodegradable from '../../assets/rollooxobiodegradable.jpg';
import imgHero from '../../assets/bolsa premiunV.jpeg';
import imgServicio1 from '../../assets/descargar.jpeg';
import imgServicio2 from '../../assets/Imágenes de Tarjetas de presentacion - Descarga gratuita en Freepik.jpeg';
// ===============================================================
// SISTEMA DE DISEÑO
// ---------------------------------------------------------------
// FONDOS (solo 3 niveles):
//   Nivel 0 — Base cálida:    #FAFAF8 / white
//   Nivel 1 — Superficie:     #F5F3EF
//   Nivel 2 — Contraste:      #111111
//   Acento  — Solo CTA final: #C3A681
//
// DORADO (#C3A681): links hover, badge "Recomendado", rating, CTA fondo
// BORDER-RADIUS:   cards grandes → rounded-3xl (24px)
//                  cards pequeñas → rounded-2xl (16px)
//                  badges → rounded-full | botones → rounded-xl
// ESPACIADO:       Hero → py-32/40 | Core → py-24 | Aux → py-16 | Franja → py-10
// ===============================================================

// ================= ANIMACIONES =================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

// ================= COMPONENTES AUXILIARES =================
function AnimatedSection({ children, className = '', animation = fadeInUp, style }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animation}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-base font-semibold text-neutral-900 group-hover:text-[#C3A681] transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 text-neutral-500 text-sm leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

// ================= PÁGINA PRINCIPAL =================
export default function LandingPage() {
  const bentoProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#C3A681] selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          1. HERO  |  Nivel 0: #FAFAF8  |  py-32 md:py-40
      ───────────────────────────────────────────────────────── */}
      <section className="py-32 md:py-40 overflow-hidden bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-white border border-neutral-200 shadow-sm"
              >
                <Star className="w-4 h-4 text-[#C3A681] fill-current" />
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  Empaques Premium a Medida
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-neutral-900 leading-[1.05]">
                Viste tu marca{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #C3A681 0%, #a38763 100%)' }}
                >
                  con profesionalismo
                </span>
              </h1>

              <p className="text-lg text-neutral-500 mb-10 leading-relaxed max-w-xl">
                Fabricamos bolsas y empaques personalizados que elevan la percepción de tu negocio.
                Calidad superior, asesoría en diseño y medidas exactas para ti.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-neutral-900 hover:bg-neutral-700 text-white h-14 px-8 rounded-xl text-base shadow-lg transition-colors"
                >
                  <Link to="/about">Conoce Mas De Nosotros</Link>
                </Button>
               
              </div>
            </motion.div>

            {/* Imagen */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img src={imgHero} alt="Bolsas premium" className="w-full h-full object-cover" />
              </div>
              {/* Decoración de fondo */}
              <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-[#C3A681]/10 -z-10 blur-3xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-neutral-200/60 -z-10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. FRANJA DE CONFIANZA  |  Nivel 2: #111111  |  py-10
          (Contraste temprano = impacto, rompe la monotonía)
      ───────────────────────────────────────────────────────── */}
      <section className="py-10 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-8">
            Marcas que confían en nuestra calidad
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 hover:opacity-60 transition-opacity duration-500">
            <h2 className="text-2xl font-black font-serif text-white">BoutiqueVip</h2>
            <h2 className="text-2xl font-black tracking-tighter text-white">URBANSTORE</h2>
            <h2 className="text-xl font-bold uppercase border-2 border-white text-white p-1 px-2">
              Gourmet
            </h2>
            <h2 className="text-2xl font-black italic text-white">Estética&Co</h2>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. BENTO GRID  |  Nivel 0: white  |  py-24
      ───────────────────────────────────────────────────────── */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-5 leading-tight">
                No hay límites.{' '}
                <span className="text-neutral-400">
                  Tú lo imaginas, nosotros lo creamos.
                </span>
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed">
                Mira algunos de nuestros trabajos recientes. Todo se fabrica bajo pedido, asegurando
                que tu empaque sea único.
              </p>
            </div>
            <Link
              to="/catalog"
              className="text-neutral-900 font-bold hover:text-[#C3A681] transition-colors whitespace-nowrap text-sm uppercase tracking-widest"
            >
              Ver galería completa →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {bentoProducts[0] && (
              <div className="md:col-span-2 aspect-square md:aspect-video rounded-3xl overflow-hidden relative group bg-neutral-100">
                <img
                  src={bentoProducts[0].imageUrl}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={bentoProducts[0].name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <h3 className="text-white text-xl font-bold">{bentoProducts[0].name}</h3>
                </div>
              </div>
            )}
            {bentoProducts[1] && (
              <div className="aspect-square rounded-3xl overflow-hidden relative group bg-neutral-100">
                <img
                  src={bentoProducts[1].imageUrl}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={bentoProducts[1].name}
                />
              </div>
            )}
            {bentoProducts[2] && (
              <div className="aspect-square rounded-3xl overflow-hidden relative group bg-neutral-100">
                <img
                  src={bentoProducts[2].imageUrl}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={bentoProducts[2].name}
                />
              </div>
            )}
            {bentoProducts[3] && (
              <div className="md:col-span-2 aspect-square md:aspect-video rounded-3xl overflow-hidden relative group bg-neutral-100">
                <img
                  src={bentoProducts[3].imageUrl}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Acabados Premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <h3 className="text-white text-xl font-bold">Acabados Premium</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────
          4. SERVICIOS  |  Nivel 1: #F5F3EF  |  py-24
      ───────────────────────────────────────────────────────── */}
      <AnimatedSection className="py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-neutral-900 mb-4">
              Soluciones Gráficas Integrales
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              No solo hacemos bolsas. Somos tu aliado oficial para resaltar tu marca con servicios de
              litografía y publicidad de alta calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Impresión de Bolsas',
                desc: 'Bolsas de alta gama para alimentos, envíos y comercio retail.',
                icon: '🛍️',
                img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400'
              },
              {
                title: 'Gran Formato',
                desc: 'Adhesivos, pendones y avisos luminosos para tu local.',
                icon: '🖼️',
                img: imgServicio1
              },
              {
                title: 'Publicidad Impresa',
                desc: 'Artículos personalizados para incrementar tu visibilidad de marca.',
                icon: '✨',
                img: imgServicio2
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={item.title}
                  />
                  <div className="absolute top-4 right-4 bg-white/95 p-2 rounded-2xl text-xl shadow-sm">
                    {item.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-black mb-3 text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-6">{item.desc}</p>
                  <Link
                    to="/catalog"
                    className="text-neutral-900 font-black text-xs uppercase tracking-widest hover:text-[#C3A681] transition-colors"
                  >
                    Ver más servicios →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────
          5. PRODUCTO ESTRELLA  |  Nivel 0: white  |  py-24
      ───────────────────────────────────────────────────────── */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#F5F3EF] shadow-xl">
                <img
                  src={imgRolloBiodegradable}
                  alt="Rollos Oxobiodegradables"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute -top-5 -left-5 bg-neutral-900 text-white p-5 rounded-2xl shadow-xl transform -rotate-3 hidden md:block z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-[#C3A681]">
                  Top Ventas
                </p>
                <p className="text-xl font-black leading-tight">Alta Rotación</p>
              </div>
            </motion.div>

            {/* Copy */}
            <div className="space-y-8 order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5F3EF] text-xs font-bold uppercase tracking-widest text-neutral-500">
                Línea Ecológica
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
                Rollos Oxobiodegradables{' '}
                <span className="text-[#C3A681]">Máxima Eficiencia</span>
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed">
                Diseñados para negocios de alto tráfico que exigen resistencia y practicidad, sin
                comprometer su responsabilidad ambiental.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { t: 'Eco-Friendly', d: 'Biodegradable', i: '🌱' },
                  { t: 'Resistente', d: 'Calidad Pro', i: '💪' },
                  { t: 'Ahorro', d: 'Corte fácil', i: '📦' },
                  { t: 'Logística', d: 'Compacto', i: '✂️' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#F5F3EF] flex items-center gap-4"
                  >
                    <span className="text-2xl">{item.i}</span>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{item.t}</h4>
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wide">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-neutral-900 text-white hover:bg-neutral-700 h-14 px-10 rounded-xl transition-colors"
              >
                <Link to="/contact">Cotizar Rollos Ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────
          6. SELECTOR DE MATERIALES  |  Nivel 1: #F5F3EF  |  py-24
      ───────────────────────────────────────────────────────── */}
      <AnimatedSection className="py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-5">
              Elige el material ideal
            </h2>
            <p className="text-base text-neutral-500 max-w-xl mx-auto leading-relaxed">
              Cada empaque comunica algo distinto. Selecciona el material que mejor represente tu marca.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"
          >
            {categories.map((category, index) => {
              const isFeatured = index === 1;
              return (
                <motion.div
                  key={category.id}
                  variants={staggerItem}
                  className={isFeatured ? 'md:-translate-y-5' : ''}
                >
                  <Link
                    to={`/catalog?category=${category.id}`}
                    className={`group block rounded-3xl p-10 transition-all duration-300
                      ${isFeatured
                        ? 'bg-neutral-900 text-white shadow-2xl hover:bg-black'
                        : 'bg-white hover:shadow-lg border border-neutral-200/60'
                      }`}
                  >
                    {isFeatured && (
                      <span className="inline-block mb-5 text-xs font-black uppercase tracking-widest text-[#C3A681]">
                        Recomendado
                      </span>
                    )}

                    <div
                      className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center
                        ${isFeatured ? 'bg-white/10 text-white' : 'bg-[#F5F3EF] text-neutral-700'}`}
                    >
                      {index === 0 && <ShoppingBag className="w-5 h-5" />}
                      {index === 1 && <Boxes className="w-5 h-5" />}
                      {index === 2 && <LeafyGreen className="w-5 h-5" />}
                    </div>

                    <h3 className="text-xl font-black mb-3">{category.name}</h3>

                    <p
                      className={`text-sm leading-relaxed mb-6
                        ${isFeatured ? 'text-neutral-400' : 'text-neutral-500'}`}
                    >
                      {category.description}
                    </p>

                    <ul
                      className={`text-sm space-y-1.5
                        ${isFeatured ? 'text-neutral-500' : 'text-neutral-400'}`}
                    >
                      <li>• Ideal para tiendas y marcas retail</li>
                      <li>• Excelente presencia visual</li>
                      <li>• Personalización completa</li>
                    </ul>

                    <span
                      className={`inline-block mt-8 font-bold text-sm
                        ${isFeatured ? 'text-[#C3A681]' : 'text-neutral-900 group-hover:text-[#C3A681] transition-colors'}`}
                    >
                      Ver opciones →
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────
          7. TESTIMONIOS  |  Nivel 2: #111111  |  py-24
      ───────────────────────────────────────────────────────── */}
      <AnimatedSection className="py-24 bg-[#111111] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black mb-6 leading-tight">
                Testimonios de{' '}
                <span className="text-[#C3A681]">nuestros clientes</span>
              </h2>
              <p className="text-neutral-400 mb-8 text-sm leading-relaxed">
                La experiencia de quienes confían en DOPACK nos permite ser líderes en el mercado de
                Bucaramanga.
              </p>
              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-[#C3A681] text-4xl font-black">4.9</div>
                <div>
                  <p className="text-white font-bold text-sm mb-0.5">★★★★★</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">
                    Calificación en Google
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  name: 'Iustic Velasco',
                  text: 'Muy buen servicio, están atentos y la calidad de las bolsas es superior.',
                  city: 'Bucaramanga'
                },
                {
                  name: 'Andrys Soled',
                  text: 'Súper recomendado, excelente servicio, la atención de Kelly es genial.',
                  city: 'Medellín'
                },
                {
                  name: 'José Santos',
                  text: 'Excelentes precios y buena atención. Cumplieron con los tiempos de entrega.',
                  city: 'Bogotá'
                },
                {
                  name: 'Marta Rincón',
                  text: 'El diseño que me ayudaron a crear superó mis expectativas. Volveré a pedir.',
                  city: 'Cúcuta'
                }
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-8 rounded-3xl border border-white/8 hover:bg-white/10 transition-colors"
                >
                  <div className="text-[#C3A681] mb-3 text-3xl font-serif leading-none">"</div>
                  <p className="text-neutral-300 text-sm italic mb-6 leading-relaxed">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#C3A681] rounded-full flex items-center justify-center font-bold text-black text-sm flex-shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white">{t.name}</p>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                        {t.city}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────
          8. FAQ  |  Nivel 1: #F5F3EF  |  py-24
      ───────────────────────────────────────────────────────── */}
      <AnimatedSection className="py-24 bg-[#F5F3EF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Resolvemos tus dudas
            </h2>
            <p className="text-neutral-500 mt-3 text-sm">
              Lo que más nos preguntan antes de hacer el primer pedido.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100">
            <FAQItem
              question="¿Cuál es la cantidad mínima de pedido?"
              answer="Para garantizar los mejores precios de fábrica y alta calidad en personalización, nuestros pedidos inician desde las 500 unidades dependiendo del material elegido."
            />
            <FAQItem
              question="¿Tienen medidas estándar?"
              answer="No trabajamos con medidas estrictas. Nos adaptamos a las necesidades de tu producto, creando un empaque a la medida que resalte tu marca."
            />
            <FAQItem
              question="¿Hacen envíos fuera de Bogota?"
              answer="¡Sí! Despachamos a nivel nacional. Nos encargamos de que tu pedido llegue seguro a la puerta de tu negocio en cualquier ciudad de Colombia."
            />
            <FAQItem
              question="¿Me ayudan con el diseño de la bolsa?"
              answer="Por supuesto. Nuestro equipo te asesora en la disposición de tu logo, selección de acabados (tintas, estampados) y elección del mejor material para tu presupuesto."
            />
          </div>
        </div>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────────────────
          9. CTA FINAL  |  Acento: #C3A681  |  py-32
          (Único lugar donde el dorado es protagonista total)
      ───────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#C3A681] relative overflow-hidden">
        {/* Texturas de luz sutiles */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 60%, white 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, white 0%, transparent 45%)'
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-white/70 text-xs font-bold uppercase tracking-[0.25em] mb-6">
            ¿Listo para dar el siguiente paso?
          </p>
          <h2 className="text-4xl md:text-6xl font-black mb-10 text-white tracking-tight leading-tight">
            Eleva la presentación <br /> de tus productos hoy.
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white h-16 px-12 rounded-xl text-base font-bold transition-all duration-300 shadow-2xl"
          >
            <Link to="/contact">Iniciar Asesoría Gratuita</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}