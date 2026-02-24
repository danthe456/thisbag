import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// Sistema de diseño DOPACK
// Fondos:  white / #F5F3EF / #111111
// Acento:  #C3A681 — solo en selección activa de categoría
// Radios:  cards → rounded-2xl | modal → rounded-3xl | tags → rounded-full
// ─────────────────────────────────────────────────────────────

// Componente botón de filtro reutilizable
function FilterBtn({
  active,
  accent = false,
  onClick,
  children,
}: {
  active: boolean;
  accent?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 w-full
        ${active
          ? accent
            ? 'bg-[#C3A681] text-white font-bold'
            : 'bg-neutral-900 text-white font-bold'
          : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900'
        }`}
    >
      {children}
    </button>
  );
}

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy]                     = useState('recent');
  const [selectedProduct, setSelectedProduct]   = useState<any | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // ── Filtrado ──
  let filteredProducts = products.filter((p) => {
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchMat = selectedMaterial === 'all' || p.material?.toLowerCase().includes(selectedMaterial);
    return matchCat && matchMat;
  });
  if (sortBy === 'popular') filteredProducts = [...filteredProducts].reverse();

  // ── Animaciones ──
  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const itemVariants = {
    hidden:  { y: 16, opacity: 0 },
    visible: { y: 0,  opacity: 1 },
    exit:    { scale: 0.92, opacity: 0 },
  };

  // ── Sidebar de filtros (compartido desktop/mobile) ──
  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Explorar */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400 mb-3 px-1">
          Explorar
        </h3>
        <div className="flex flex-col gap-1">
          <FilterBtn active={sortBy === 'recent'}  onClick={() => setSortBy('recent')}>
            Recién Agregados
          </FilterBtn>
          <FilterBtn active={sortBy === 'popular'} onClick={() => setSortBy('popular')}>
            Más Populares
          </FilterBtn>
        </div>
      </div>

      {/* Tipo de Empaque */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400 mb-3 px-1">
          Tipo de Empaque
        </h3>
        <div className="flex flex-col gap-1">
          <FilterBtn accent active={selectedCategory === 'all'} onClick={() => setSelectedCategory('all')}>
            Todos los tipos
          </FilterBtn>
          {categories.map((cat) => (
            <FilterBtn
              key={cat.id}
              accent
              active={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </FilterBtn>
          ))}
        </div>
      </div>

      {/* Materiales */}
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400 mb-3 px-1">
          Materiales
        </h3>
        <div className="flex flex-col gap-1">
          {[
            { id: 'all',      label: 'Cualquier Material' },
            { id: 'kraft',    label: 'Kraft' },
            { id: 'carton',   label: 'Cartón' },
            { id: 'plastico', label: 'Plástico' },
          ].map(({ id, label }) => (
            <FilterBtn key={id} active={selectedMaterial === id} onClick={() => setSelectedMaterial(id)}>
              {label}
            </FilterBtn>
          ))}
        </div>
      </div>

      {/* Limpiar */}
      {(selectedCategory !== 'all' || selectedMaterial !== 'all') && (
        <button
          onClick={() => { setSelectedCategory('all'); setSelectedMaterial('all'); }}
          className="text-xs text-neutral-400 hover:text-[#C3A681] transition-colors font-bold uppercase tracking-widest px-1"
        >
          ✕ Limpiar filtros
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">

      {/* ═══════════════════════════════════════════════════════
          ENCABEZADO  |  Nivel 2: #111111  — dinámico, no plano
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#111111] pt-20 pb-16 relative overflow-hidden">
        {/* Decoración de fondo: gradiente radial sutil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 75% 50%, rgba(195,166,129,0.12) 0%, transparent 65%), radial-gradient(ellipse at 10% 80%, rgba(195,166,129,0.07) 0%, transparent 55%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Breadcrumb / etiqueta */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-5 h-px bg-[#C3A681]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C3A681]">
                Galería de Productos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6"
            >
              Tú lo imaginas,{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #C3A681 0%, #a38763 100%)' }}
              >
                nosotros lo creamos.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-neutral-400 leading-relaxed max-w-xl"
            >
              Explora nuestros trabajos recientes. No tenemos límites: fabricamos a la medida exacta
              de tu marca, en el material y acabado que necesites.
            </motion.p>

            {/* Stats rápidos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-8 mt-10"
            >
              {[
                { n: `${products.length}+`, l: 'Diseños' },
                { n: '3',                   l: 'Materiales' },
                { n: '100%',                l: 'A medida' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="text-2xl font-black text-white">{n}</p>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 mt-0.5">{l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BARRA MOBILE DE FILTROS  |  solo en < md
      ═══════════════════════════════════════════════════════ */}
      <div className="md:hidden sticky top-16 z-30 bg-white border-b border-neutral-100 px-4 py-3 flex items-center justify-between">
        <p className="text-sm text-neutral-500">
          <span className="font-bold text-neutral-900">{filteredProducts.length}</span> diseños
        </p>
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm font-bold"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filtros
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════
          BODY: Sidebar + Grid
      ═══════════════════════════════════════════════════════ */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex gap-10 items-start">

        {/* ── Sidebar sticky desktop ── */}
        <aside className="hidden md:block w-56 flex-shrink-0 sticky top-24 self-start">
          {/* Tarjeta contenedora */}
          <div className="bg-[#F5F3EF] rounded-3xl p-6">
            <FiltersContent />
          </div>
        </aside>

        {/* ── Grid ── */}
        <section className="flex-1 min-w-0">
          {/* Contador — solo desktop */}
          <div className="hidden md:block mb-6">
            <p className="text-sm text-neutral-400">
              Mostrando{' '}
              <span className="font-bold text-neutral-900">{filteredProducts.length}</span>{' '}
              diseños de inspiración
            </p>
          </div>

          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setSelectedProduct(product)}
                  className="group relative aspect-square bg-neutral-100 cursor-pointer overflow-hidden rounded-2xl"
                >
                  <ImageWithFallback
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-center">
                    <h3 className="text-white font-bold text-base translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      {product.name}
                    </h3>
                    <p className="text-white/70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      Ver detalles →
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Estado vacío */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-40 border-2 border-dashed border-neutral-200 rounded-3xl">
              <p className="text-neutral-400 text-sm">No encontramos diseños con estos filtros.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedMaterial('all'); }}
                className="mt-4 text-[#C3A681] font-bold hover:underline text-sm"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </section>
      </main>

      {/* ═══════════════════════════════════════════════════════
          DRAWER MOBILE DE FILTROS
      ═══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              key="drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              key="drawer-panel"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
                <span className="text-base font-black text-neutral-900">Filtros</span>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 rounded-xl hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-8">
                <FiltersContent />
              </div>
              <div className="px-6 py-5 border-t border-neutral-100">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-neutral-900 text-white font-bold py-3 rounded-xl text-sm hover:bg-neutral-700 transition-colors"
                >
                  Ver {filteredProducts.length} diseños
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════
          MODAL DE DETALLE
      ═══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1,    opacity: 1, y: 0 }}
              exit={{   scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row z-10"
            >
              {/* Cerrar */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow transition-colors"
              >
                <X className="w-4 h-4 text-neutral-700" />
              </button>

              {/* Imagen */}
              <div className="w-full md:w-1/2 bg-[#F5F3EF] aspect-square md:aspect-auto h-64 md:h-auto flex-shrink-0">
                <ImageWithFallback
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C3A681] mb-3">
                  Inspiración de Diseño
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-neutral-900 mb-5 leading-tight">
                  {selectedProduct.name}
                </h2>

                <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-grow">
                  {selectedProduct.description ||
                    'Podemos replicar este estilo ajustando las dimensiones, el material y los acabados exactamente a las necesidades de tu marca.'}
                </p>

                {/* Specs */}
                <div className="space-y-2 mb-6">
                  {[
                    { l: 'Material base',      v: selectedProduct.material || 'A elección del cliente' },
                    { l: 'Acabados posibles',  v: 'Estampado, relieve, plastificado mate o brillante' },
                    { l: 'Dimensiones',        v: selectedProduct.dimensions || '100% personalizables' },
                  ].map(({ l, v }) => (
                    <div key={l} className="flex gap-3 text-sm">
                      <span className="text-neutral-400 min-w-[120px] flex-shrink-0">{l}</span>
                      <span className="text-neutral-900 font-medium">{v}</span>
                    </div>
                  ))}
                </div>

                {/* Nota */}
                <div className="bg-[#F5F3EF] rounded-2xl p-4 mb-6">
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    * Todos nuestros pedidos se fabrican bajo estrictos estándares de calidad. Las
                    cantidades mínimas varían según el material seleccionado.
                  </p>
                </div>

                {/* CTA */}
                <Link
                  to={`/quote?productId=${selectedProduct.id}`}
                  className="w-full block text-center bg-neutral-900 hover:bg-[#C3A681] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-200"
                >
                  Cotizar un diseño similar
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}