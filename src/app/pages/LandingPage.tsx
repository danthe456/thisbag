import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LeafyGreen, ShoppingBag, Boxes, ChevronDown, Star } from 'lucide-react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Button } from '../components/ui/button';
import { products } from '../data/products';

// ── Imágenes ─────────────────────────────────────────────────
import imgRolloBiodegradable from '../../assets/rollooxobiodegradable.jpg';
import imgHero               from '../../assets/bolsa premiunV.jpeg';
import imgServicio1          from '../../assets/descargar.jpeg';
import imgServicio2          from '../../assets/Imágenes de Tarjetas de presentacion - Descarga gratuita en Freepik.jpeg';
import modelo1               from '../../assets/modelo1.png';
import modelo2               from '../../assets/modelo2.png';
import modelo4               from '../../assets/modelo4.png';

// ── Videos ───────────────────────────────────────────────────
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

// ═══════════════════════════════════════════════════════════════
// SISTEMA DE DISEÑO DOPACK
// Fondos:  #FAFAF8 (0) | #F5F3EF (1) | #111111 (2) | #C3A681 (CTA)
// Dorado:  links hover · badge "Recomendado" · rating · CTA fondo
// Radios:  cards → rounded-3xl | small → rounded-2xl | btn → rounded-xl
// ═══════════════════════════════════════════════════════════════

// ── Variantes de animación ────────────────────────────────────
const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
};
const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const staggerContainer: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// ── Datos estáticos ───────────────────────────────────────────
const LIFESTYLE_PANELS = [
  {
    img: modelo1, alt: 'Bolsas ecológicas de tela en colores vivos',
    label: 'Línea Tote Bag', sub: 'Cambrel · Colores a elección',
    category: 'eco', col: 'md:col-span-2',
  },
  {
    img: modelo2, alt: 'Bolsas con base troquelada en azul y rojo',
    label: 'Línea Air Bag', sub: 'Base troquel · Alta resistencia',
    category: 'eco', col: 'md:col-span-1',
  },
  {
    img: modelo4, alt: 'Bolsas ecológicas en verde, naranja y blanco',
    label: 'Línea Eco Bag', sub: 'Fuelle completo · Varios formatos',
    category: 'eco', col: 'md:col-span-1',
  },
];

const COLORES = [
  { bg: '#111111', label: 'Negro'   },
  { bg: '#FFFFFF', label: 'Blanco'  },
  { bg: '#F5E6C8', label: 'Crema'   },
  { bg: '#C4A882', label: 'Café'    },
  { bg: '#E8620A', label: 'Naranja' },
  { bg: '#D32F2F', label: 'Rojo'    },
  { bg: '#2E7D32', label: 'Verde'   },
  { bg: '#1565C0', label: 'Azul'    },
];

const MATERIALES = [
  {
    id: 'papel', name: 'Papel & Kraft',
    icon: <ShoppingBag className="w-5 h-5" />, tag: null, featured: false,
    desc: 'La opción más elegante para tiendas, boutiques y marcas premium. Transmite calidez y sofisticación desde el primer contacto.',
    specs: [
      { label: 'Ideal para', value: 'Retail, joyería, moda' },
      { label: 'Acabados',   value: 'Laminado, hot stamping, relieve' },
      { label: 'Impresión',  value: 'Full color o 1–4 tintas' },
    ],
  },
  {
    id: 'plastico', name: 'Plástico de Alta Resistencia',
    icon: <Boxes className="w-5 h-5" />, tag: 'Recomendado', featured: true,
    desc: 'Máxima durabilidad para negocios de alto volumen. Soporta peso y humedad sin perder presentación — perfecto para supermercados, droguerías y distribución masiva.',
    specs: [
      { label: 'Ideal para',  value: 'Distribución, alimentos, retail masivo' },
      { label: 'Resistencia', value: 'Alta carga y humedad' },
      { label: 'Mínimo',      value: 'Desde 500 unidades' },
    ],
  },
  {
    id: 'eco', name: 'Materiales Ecológicos',
    icon: <LeafyGreen className="w-5 h-5" />, tag: null, featured: false,
    desc: 'Oxobiodegradables, reciclados y compostables. Para marcas que comunican responsabilidad ambiental sin sacrificar calidad ni presentación.',
    specs: [
      { label: 'Ideal para',    value: 'Alimentos, e-commerce, eventos' },
      { label: 'Certificación', value: 'Oxobiodegradable' },
      { label: 'Mensaje',       value: 'Compromiso con el planeta' },
    ],
  },
];

const TESTIMONIOS = [
  { name: 'Iustic Velasco', text: 'Muy buen servicio, están atentos y la calidad de las bolsas es superior.',   city: 'Bucaramanga' },
  { name: 'Andrys Soled',   text: 'Súper recomendado, excelente servicio, la atención de Kelly es genial.',      city: 'Medellín'    },
  { name: 'José Santos',    text: 'Excelentes precios y buena atención. Cumplieron con los tiempos de entrega.', city: 'Bogotá'      },
  { name: 'Marta Rincón',   text: 'El diseño que me ayudaron a crear superó mis expectativas. Volveré a pedir.', city: 'Cúcuta'      },
];

// ── Componentes auxiliares ────────────────────────────────────
function AnimatedSection({ children, className = '', animation = fadeInUp }: {
  children: React.ReactNode;
  className?: string;
  animation?: Variants;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animation}
      className={className}
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
        <ChevronDown className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

// ═══════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL
// ═══════════════════════════════════════════════════════════════
export default function LandingPage() {
  const bentoProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#C3A681] selection:text-white">

      {/* ══════════════════════════════════════════════════════
          1. HERO  |  #FAFAF8
      ══════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
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

              <Button asChild size="lg" className="bg-neutral-900 hover:bg-neutral-700 text-white h-14 px-8 rounded-xl text-base shadow-lg transition-colors">
                <Link to="/about">Conoce Más de Nosotros</Link>
              </Button>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="relative hidden lg:block">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img src={imgHero} alt="Bolsas premium" className="w-full h-full object-cover" />
              </div>
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

      {/* ══════════════════════════════════════════════════════
          3. BENTO GRID  |  white
      ══════════════════════════════════════════════════════ */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-5 leading-tight">
                No hay límites.{' '}
                <span className="text-neutral-400">Tú lo imaginas, nosotros lo creamos.</span>
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed">
                Explora nuestras líneas de producto. Todo se fabrica bajo pedido, asegurando que tu empaque sea único.
              </p>
            </div>
            <Link to="/catalog" className="text-neutral-900 font-bold hover:text-[#C3A681] transition-colors whitespace-nowrap text-sm uppercase tracking-widest">
              Ver galería completa →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 md:h-[560px]">
            <Link to="/catalog?category=paper" className="group relative overflow-hidden rounded-3xl bg-neutral-900 md:row-span-2 aspect-[4/3] md:aspect-auto">
              <img src={bentoProducts[0]?.imageUrl} alt="Bolsas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-white text-2xl font-black mb-1">Bolsas</h3>
                <span className="text-xs font-black uppercase tracking-widest text-white/60 group-hover:text-[#C3A681] transition-colors duration-300">Ver más →</span>
              </div>
            </Link>

            <Link to="/catalog?category=eco" className="group relative overflow-hidden rounded-3xl bg-neutral-100 aspect-square md:aspect-auto">
              <img src={bentoProducts[1]?.imageUrl} alt="Etiquetas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-black mb-1">Etiquetas</h3>
                <span className="text-xs font-black uppercase tracking-widest text-white/60 group-hover:text-[#C3A681] transition-colors duration-300">Ver más →</span>
              </div>
            </Link>

            <Link to="/catalog?category=eco" className="group relative overflow-hidden rounded-3xl bg-neutral-100 aspect-square md:aspect-auto">
              <img src={bentoProducts[2]?.imageUrl} alt="Cajas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-black mb-1">Cajas</h3>
                <span className="text-xs font-black uppercase tracking-widest text-white/60 group-hover:text-[#C3A681] transition-colors duration-300">Ver más →</span>
              </div>
            </Link>

            <Link to="/catalog?category=plastic" className="group relative overflow-hidden rounded-3xl bg-neutral-900 md:col-span-2 aspect-[16/7] md:aspect-auto">
              <img src={bentoProducts[3]?.imageUrl} alt="Adhesivos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-white text-2xl font-black mb-1">Adhesivos</h3>
                <span className="text-xs font-black uppercase tracking-widest text-white/60 group-hover:text-[#C3A681] transition-colors duration-300">Ver más →</span>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════════════
          4. SERVICIOS  |  #F5F3EF
      ══════════════════════════════════════════════════════ */}
      <AnimatedSection className="py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-neutral-900 mb-4">Soluciones Gráficas Integrales</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              No solo hacemos bolsas. Somos tu aliado oficial para resaltar tu marca con servicios de litografía y publicidad de alta calidad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Impresión de Bolsas', desc: 'Bolsas de alta gama para alimentos, envíos y comercio retail.',     icon: '🛍️', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400' },
              { title: 'Gran Formato',         desc: 'Adhesivos, pendones y avisos luminosos para tu local.',              icon: '🖼️', img: imgServicio1 },
              { title: 'Publicidad Impresa',   desc: 'Artículos personalizados para incrementar tu visibilidad de marca.', icon: '✨', img: imgServicio2 },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  <div className="absolute top-4 right-4 bg-white/95 p-2 rounded-2xl text-xl shadow-sm">{item.icon}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-black mb-3 text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-6">{item.desc}</p>
                  <Link to="/catalog" className="text-neutral-900 font-black text-xs uppercase tracking-widest hover:text-[#C3A681] transition-colors">
                    Ver más servicios →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════════════
          5. ROLLO OXO  |  white
      ══════════════════════════════════════════════════════ */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#F5F3EF] shadow-xl">
                <img src={imgRolloBiodegradable} alt="Rollos Oxobiodegradables" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-5 -left-5 bg-neutral-900 text-white p-5 rounded-2xl shadow-xl transform -rotate-3 hidden md:block z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-[#C3A681]">Top Ventas</p>
                <p className="text-xl font-black leading-tight">Alta Rotación</p>
              </div>
            </motion.div>

            <div className="space-y-8 order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5F3EF] text-xs font-bold uppercase tracking-widest text-neutral-500">
                Línea Ecológica
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
                Rollos Oxobiodegradables{' '}
                <span className="text-[#C3A681]">Máxima Eficiencia</span>
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed">
                Diseñados para negocios de alto tráfico que exigen resistencia y practicidad, sin comprometer su responsabilidad ambiental.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { t: 'Eco-Friendly', d: 'Biodegradable', i: '🌱' },
                  { t: 'Resistente',   d: 'Calidad Pro',   i: '💪' },
                  { t: 'Ahorro',       d: 'Corte fácil',   i: '📦' },
                  { t: 'Logística',    d: 'Compacto',       i: '✂️' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#F5F3EF] flex items-center gap-4">
                    <span className="text-2xl">{item.i}</span>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{item.t}</h4>
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wide">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-neutral-900 text-white hover:bg-neutral-700 h-14 px-10 rounded-xl transition-colors">
                <Link to="/contact">Cotizar Rollos Ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════════════
          6. VIDEOS  |  #111111
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-px bg-[#C3A681]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C3A681]">
                  Proceso de fabricación
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Así fabricamos <br className="hidden md:block" />tu empaque.
              </h2>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              De la materia prima al empaque terminado — calidad supervisada en cada etapa del proceso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: video1, paso: 'Paso 1', titulo: 'Fabricación', desc: 'Corte, sellado y formado del material base' },
              { src: video2, paso: 'Paso 2', titulo: 'Impresión',   desc: 'Aplicación de logo, colores y acabados personalizados' },
            ].map(({ src, paso, titulo, desc }) => (
              <div key={paso} className="group relative rounded-3xl overflow-hidden bg-neutral-900 aspect-video">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <source src={src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] font-black uppercase tracking-widest text-white/70 mb-2">
                    {paso}
                  </span>
                  <h3 className="text-white text-lg font-black">{titulo}</h3>
                  <p className="text-white/50 text-xs mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. SELECTOR DE MATERIALES  |  #F5F3EF
      ══════════════════════════════════════════════════════ */}
      <AnimatedSection className="py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-5">Elige el material ideal</h2>
            <p className="text-base text-neutral-500 max-w-xl mx-auto leading-relaxed">
              Cada material tiene un propósito distinto. Te ayudamos a elegir el que mejor comunica los valores de tu marca.
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {MATERIALES.map((mat) => (
              <motion.div key={mat.id} variants={staggerItem} className={mat.featured ? 'md:-translate-y-5' : ''}>
                <Link
                  to={`/catalog?category=${mat.id}`}
                  className={`group block rounded-3xl p-8 transition-all duration-300 h-full
                    ${mat.featured
                      ? 'bg-neutral-900 text-white shadow-2xl hover:bg-black'
                      : 'bg-white hover:shadow-xl border border-neutral-200/60'}`}
                >
                  {mat.tag && (
                    <span className="inline-block mb-5 text-xs font-black uppercase tracking-widest text-[#C3A681]">
                      {mat.tag}
                    </span>
                  )}
                  <div className={`w-11 h-11 rounded-2xl mb-6 flex items-center justify-center ${mat.featured ? 'bg-white/10 text-white' : 'bg-[#F5F3EF] text-neutral-700'}`}>
                    {mat.icon}
                  </div>
                  <h3 className="text-xl font-black mb-3 leading-tight">{mat.name}</h3>
                  <p className={`text-sm leading-relaxed mb-7 ${mat.featured ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {mat.desc}
                  </p>
                  <div className={`space-y-3 mb-8 border-t pt-6 ${mat.featured ? 'border-white/10' : 'border-neutral-100'}`}>
                    {mat.specs.map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-start gap-4 text-xs">
                        <span className={mat.featured ? 'text-neutral-500' : 'text-neutral-400'}>{label}</span>
                        <span className={`font-semibold text-right ${mat.featured ? 'text-neutral-200' : 'text-neutral-700'}`}>{value}</span>
                      </div>
                    ))}
                  </div>
                  <span className={`inline-flex items-center gap-1 font-bold text-sm transition-colors ${mat.featured ? 'text-[#C3A681]' : 'text-neutral-900 group-hover:text-[#C3A681]'}`}>
                    Ver opciones →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
{/* ══════════════════════════════════════════════════════
          2. LIFESTYLE STRIP  |  #111111
          Imágenes de modelos con bolsas ecológicas cambrel
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#111111] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-2 mb-5">
            <span className="w-5 h-px bg-[#C3A681]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C3A681]">
              Bolsas ecológicas — Cambrel 70gr
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {LIFESTYLE_PANELS.map(({ img, alt, label, sub, category, col }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-2xl bg-neutral-800 ${col}`}
              >
                <div className="aspect-[4/5] md:aspect-auto md:h-[460px] w-full">
                  <img
                    src={img} alt={alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C3A681] mb-1">{sub}</p>
                  <h3 className="text-white text-xl font-black leading-tight mb-3">{label}</h3>
                  <Link
                    to={`/catalog?category=${category}`}
                    className="text-xs font-black uppercase tracking-widest text-white/50 group-hover:text-[#C3A681] transition-colors duration-300"
                  >
                    Ver en catálogo →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-5 pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600">
              Colores disponibles
            </span>
            {COLORES.map(({ bg, label }) => (
              <div key={label} className="flex items-center gap-1.5 group/color">
                <div className="w-5 h-5 rounded-full border border-white/10 flex-shrink-0" style={{ backgroundColor: bg }} />
                <span className="text-[10px] text-neutral-600 group-hover/color:text-neutral-300 transition-colors hidden sm:block">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. TESTIMONIOS  |  #111111
      ══════════════════════════════════════════════════════ */}
      <AnimatedSection className="py-24 bg-[#111111] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black mb-6 leading-tight">
                Testimonios de <span className="text-[#C3A681]">nuestros clientes</span>
              </h2>
              <p className="text-neutral-400 mb-8 text-sm leading-relaxed">
                La experiencia de quienes confían en DOPACK nos permite ser líderes en el mercado de Bucaramanga.
              </p>
              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="text-[#C3A681] text-4xl font-black">4.9</div>
                <div>
                  <p className="text-white font-bold text-sm mb-0.5">★★★★★</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">Calificación en Google</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              {TESTIMONIOS.map((t, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/[0.08] hover:bg-white/10 transition-colors">
                  <div className="text-[#C3A681] mb-3 text-3xl font-serif leading-none">"</div>
                  <p className="text-neutral-300 text-sm italic mb-6 leading-relaxed">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#C3A681] rounded-full flex items-center justify-center font-bold text-black text-sm flex-shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white">{t.name}</p>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════════════
          9. FAQ  |  #F5F3EF
      ══════════════════════════════════════════════════════ */}
      <AnimatedSection className="py-24 bg-[#F5F3EF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">Resolvemos tus dudas</h2>
            <p className="text-neutral-500 mt-3 text-sm">Lo que más nos preguntan antes de hacer el primer pedido.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100">
            <FAQItem question="¿Cuál es la cantidad mínima de pedido?"  answer="Para garantizar los mejores precios de fábrica y alta calidad en personalización, nuestros pedidos inician desde las 500 unidades dependiendo del material elegido." />
            <FAQItem question="¿Tienen medidas estándar?"               answer="No trabajamos con medidas estrictas. Nos adaptamos a las necesidades de tu producto, creando un empaque a la medida que resalte tu marca." />
            <FAQItem question="¿Hacen envíos fuera de Bogota?"     answer="¡Sí! Despachamos a nivel nacional. Nos encargamos de que tu pedido llegue seguro a la puerta de tu negocio en cualquier ciudad de Colombia." />
            <FAQItem question="¿Me ayudan con el diseño de la bolsa?"   answer="Por supuesto. Nuestro equipo te asesora en la disposición de tu logo, selección de acabados (tintas, estampados) y elección del mejor material para tu presupuesto." />
          </div>
        </div>
      </AnimatedSection>

      {/* ══════════════════════════════════════════════════════
          10. CTA FINAL  |  #C3A681
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#C3A681] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse at 20% 60%, white 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, white 0%, transparent 45%)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-white/70 text-xs font-bold uppercase tracking-[0.25em] mb-6">
            ¿Listo para dar el siguiente paso?
          </p>
          <h2 className="text-4xl md:text-6xl font-black mb-10 text-white tracking-tight leading-tight">
            Eleva la presentación <br />de tus productos hoy.
          </h2>
          <Button asChild size="lg" className="bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white h-16 px-12 rounded-xl text-base font-bold transition-all duration-300 shadow-2xl">
            <Link to="/contact">Iniciar Asesoría Gratuita</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}