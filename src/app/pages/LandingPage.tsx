import { useRef } from 'react'; // Se agregó useRef
import { Link } from 'react-router-dom';
import { Package, Zap, Shield, LeafyGreen,ShoppingBag ,Boxes ,Menu, X   } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion'; // Importación de tipo por separado// Cambiado de 'motion/react' a 'framer-motion'
import { Button } from '../components/ui/button';
import { categories, products } from '../data/products';
import FeaturedCarousel from '../components/FeaturedCarousel';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

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
    transition: { duration: 0.6, ease: "easeOut" } // Asegúrate de usar comillas dobles
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
  const [menuOpen, setMenuOpen] = useState(false);
  const collageImages = [
    { url: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop', alt: 'Paper bag with logo' },
    { url: 'https://images.unsplash.com/photo-1607462109225-eee0b4c50eb7?w=400&h=500&fit=crop', alt: 'Premium tote bag' },
    { url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=600&fit=crop', alt: 'Cotton bag' },
    { url: 'https://images.unsplash.com/photo-1594031018540-7f2b2b1e2d4a?w=400&h=600&fit=crop', alt: 'Reusable bags' },
    { url: 'https://images.unsplash.com/photo-1614964303073-e9fc4e7f5f09?w=500&h=400&fit=crop', alt: 'Eco-friendly packaging' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-2xl font-semibold tracking-tight">
        ThisBag
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/catalog" className="text-sm text-neutral-600 hover:text-neutral-900">
          Products
        </Link>
        <Link to="/catalog" className="text-sm text-neutral-600 hover:text-neutral-900">
          About
        </Link>
        <Button
          asChild
          size="sm"
          style={{ backgroundColor: '#C3A681', color: '#fff' }}
        >
          <Link to="/contact">Contact Us</Link>
        </Button>
      </nav>

      {/* Mobile Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden p-2 rounded-md hover:bg-neutral-100 transition"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </div>

  {/* Mobile Menu Overlay */}
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
      onClick={() => setMenuOpen(false)}
    >
      {/* Menu Panel */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-b-2xl shadow-xl px-6 pt-6 pb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          <Link
            to="/catalog"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium"
          >
            Products
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium"
          >
            Contact
          </Link>

          <Button
            asChild
            size="lg"
            className="mt-4"
            style={{ backgroundColor: '#C3A681', color: '#fff' }}
          >
            <Link to="/catalog">Get a Quote</Link>
          </Button>
        </nav>
      </motion.div>
    </motion.div>
  )}
</header>

      {/* Hero Section with Image */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: 'var(--warm-beige-light)', color: 'var(--warm-accent)' }}
              >
                <span className="text-sm font-medium">Premium Custom Packaging</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Custom Packaging for Your Brand
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                Design personalized reusable bags with your logo. Premium quality, fast turnaround, and competitive pricing for small businesses.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
               
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link to="/catalog">View Products</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=800&fit=crop"
                  alt="Custom reusable bags"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl -z-10"
                style={{ backgroundColor: 'var(--warm-beige-light)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Products</h2>
            <p className="text-neutral-600 text-lg">Discover our most popular packaging solutions</p>
          </div>
          <FeaturedCarousel products={featuredProducts} />
        </div>
      </AnimatedSection>

      {/* Category Cards */}
      <AnimatedSection className="py-20" style={{ backgroundColor: '#FDFCFB' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Choose Your Style</h2>
      <p className="text-neutral-600 text-lg">Select from our range of sustainable materials</p>
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
            className="group relative bg-white border border-neutral-200 rounded-lg p-8 transition-all duration-300 block overflow-hidden h-64"
          >
            {/* Contenido Principal (Visible siempre) */}
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
              <div 
                className="w-12 h-12 rounded-full mb-4 flex items-center justify-center shadow-sm"
                style={{ backgroundColor: '#C3A681' }}
              >
                {index === 0 && <ShoppingBag className="w-6 h-6 text-white" />}
                {index === 1 && <Boxes className="w-6 h-6 text-white" />}
                {index === 2 && <LeafyGreen className="w-6 h-6 text-white" />}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-neutral-900">
                {category.name}
              </h3>
              <p className="text-neutral-600 text-sm">
                {category.description}
              </p>
            </div>

            {/* Capa de Información Extra (La extrusión) */}
            <div 
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-8 flex flex-col justify-end"
              style={{ backgroundColor: '#C3A681' }}
            >
              <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">
                Key Benefits
              </h4>
              <p className="text-white/90 text-sm italic">
                {index === 0 && "100% Recyclable, premium texture, and high strength for luxury brands."}
                {index === 1 && "Moisture resistant, durable for heavy items, and versatile for retail."}
                {index === 2 && "Compostable materials, zero waste footprint, and eco-certified."}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </div>
</AnimatedSection>

      {/* Photo Collage Section */}
      <AnimatedSection className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Crafted with Care</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Every bag tells a story of quality, sustainability, and attention to detail
            </p>
          </div>
          
          {/* Masonry-style collage */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {collageImages.map((image, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`
                  ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                  ${index === 2 ? 'md:row-span-2' : ''}
                  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300
                `}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-20" style={{ backgroundColor: 'var(--warm-beige-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { icon: Zap, title: 'Customizable', desc: 'Upload your logo and see it on your bag in real-time', color: '#C3A681' },
              { icon: Package, title: 'Reusable', desc: 'Durable materials designed for repeated use', color: '#C3A681' },
              { icon: Shield, title: 'Made to Order', desc: 'Professional quality with fast turnaround times', color: '#C3A681' }
            ].map((benefit, index) => (
              <motion.div key={index} variants={staggerItem} className="text-center">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: benefit.color }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
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
            style={{ backgroundColor: '#ffd395', color: '#ffffff' }}
          >
            <Link to="/catalog">Start Your Order</Link>
          </Button>
        </div>
      </AnimatedSection>

      {/* Footer */}
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
