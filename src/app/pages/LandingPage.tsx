import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {  LeafyGreen, ShoppingBag, Boxes } from 'lucide-react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Button } from '../components/ui/button';
import { categories, products } from '../data/products';
import FeaturedCarousel from '../components/FeaturedCarousel';
import imgRolloBiodegradable from '../../assets/rollooxobiodegradable.jpg';
import imgHero from '../../assets/bolsa premiunV.jpeg';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: Variants;
  style?: React.CSSProperties;
}

function AnimatedSection({ children, className = '', animation = fadeInUp, style }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: '#F3F0E9', color: '#C3A681' }}
              >
                <span className="text-sm font-medium">Premium Custom Packaging</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-neutral-900">
                Empaques Personalizados para tu Marca
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                Diseñamos soluciones de empaque que elevan tu marca. Calidad premium, tiempos rápidos y precios competitivos para negocios en crecimiento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#C3A681] hover:bg-neutral-800 text-white">
                  <Link to="/catalog">Ver Catálogo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Solicitar Cotización</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src={imgHero} alt="Bolsas premium" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl -z-10 bg-[#F3F0E9]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">Productos Destacados</h2>
            <p className="text-neutral-600 text-lg">Descubre nuestras soluciones de empaque más populares</p>
          </div>
          <FeaturedCarousel products={featuredProducts} />
        </div>
      </AnimatedSection>

      {/* Categories */}
      <AnimatedSection className="py-20" style={{ backgroundColor: '#FDFCFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">Categorías Disponibles</h2>
            <p className="text-neutral-600 text-lg">Selecciona el material ideal para tu marca</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div key={category.id} variants={staggerItem}>
                <Link
                  to={`/catalog?category=${category.id}`}
                  className="group relative bg-white border border-neutral-200 rounded-2xl p-8 transition-all duration-300 block overflow-hidden h-64 shadow-sm hover:shadow-md"
                >
                  <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-[#C3A681] shadow-sm">
                      {index === 0 && <ShoppingBag className="w-6 h-6 text-white" />}
                      {index === 1 && <Boxes className="w-6 h-6 text-white" />}
                      {index === 2 && <LeafyGreen className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{category.description}</p>
                  </div>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-8 flex flex-col justify-end bg-[#C3A681]">
                    <h4 className="text-white font-black mb-2 uppercase tracking-wider text-[10px]">Beneficios Clave</h4>
                    <p className="text-white/90 text-xs italic leading-snug">
                       {index === 0 && "Textura premium y alta resistencia para marcas de lujo."}
                       {index === 1 && "Duraderas y versátiles, perfectas para todo tipo de comercio."}
                       {index === 2 && "Materiales compostables con huella de carbono cero."}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* PRODUCTO ESTRELLA: ROLOO OXO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-100 shadow-2xl">
                <img src={imgRolloBiodegradable} alt="Rollos Oxobiodegradables" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 bg-[#C3A681] text-white p-6 rounded-2xl shadow-xl transform rotate-3 hidden md:block">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black">Top Ventas</p>
                <p className="text-2xl font-black">Líder en Rotación</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-neutral-900 leading-tight">
                Bolsas Oxobiodegradables <br />
                <span className="text-[#C3A681]">Máxima Eficiencia por Rollo</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Nuestros rollos están diseñados para negocios de alto tráfico que no quieren comprometer el medio ambiente.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { t: "Eco-Friendly", d: "Biodegradable", i: "🌱" },
                  { t: "Resistente", d: "Calidad Pro", i: "💪" },
                  { t: "Ahorro", d: "Corte fácil", i: "📦" },
                  { t: "Logística", d: "Compacto", i: "✂️" }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <span className="text-2xl block mb-1">{item.i}</span>
                    <h4 className="font-bold text-sm">{item.t}</h4>
                    <p className="text-[10px] text-neutral-400 uppercase font-bold">{item.d}</p>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-[#C3A681] text-white hover:bg-neutral-900 h-14 px-10 rounded-xl">
                <Link to="/contact">Cotizar Rollos Ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <AnimatedSection className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">

            Ready to Create Your Custom Bags?

          </h2>

          <p className="text-lg text-neutral-600 mb-8">

            Get started with a quick quote and bring your brand to life

          </p>

          <Button

            asChild

            size="lg"

            className="text-base px-12"

            style={{ backgroundColor: '#d2ae7b', color: '#ffffff' }}

          >

            <Link to="/catalog">Start Your Order</Link>

          </Button>

        </div>

      </AnimatedSection>
    </div>
  );
}