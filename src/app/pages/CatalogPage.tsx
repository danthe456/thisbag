import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'framer-motion'; // Añadimos esto

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const validCategories = categories.map(c => c.id);

  const selectedCategory = validCategories.includes(searchParams.get('category') || 'all')
    ? searchParams.get('category') || 'all'
    : 'all';

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (value: string) => {
    setSearchParams(value === 'all' ? {} : { category: value });
  };

  // Variantes para la cuadrícula (Contenedor)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Aparecen uno tras otro
    }
  };

  // Variantes para cada producto (Tarjeta)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ================= Header ================= */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900"
          >
            Product Catalog
          </motion.h1>
          <motion.p 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-neutral-600 max-w-xl"
          >
            Choose your packaging solution and customize it with your brand identity.
          </motion.p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ================= Filters ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
            {/* Mejoramos la visibilidad de la pestaña activa */}
            <TabsList className="flex flex-wrap gap-2 bg-neutral-100 p-1 rounded-xl">
              {categories.map(category => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`
                    capitalize px-6 py-2 rounded-lg transition-all
                    data-[state=active]:bg-neutral-900 data-[state=active]:text-white data-[state=active]:shadow-md
                    data-[state=inactive]:hover:bg-neutral-200
                  `}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <p className="text-sm text-neutral-500">
            Showing <span className="font-bold text-neutral-800">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* ================= Product Grid con Animaciones ================= */}
        <motion.div 
          layout // Hace que la cuadrícula se reacomode suavemente
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -5 }} // Efecto sutil al pasar el mouse
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-square bg-neutral-100 overflow-hidden">
                  <ImageWithFallback
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-neutral-900 mb-1 group-hover:text-[#C3A681] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-widest">
                    {product.dimensions}
                  </p>
                  <p className="text-sm text-neutral-600 mb-6 line-clamp-2">
                    {product.material}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-neutral-400 font-bold">Pedido Mínimo</span>
                      <span className="text-sm font-semibold text-neutral-800">{product.minQuantity} unidades</span>
                    </div>

                    <Button asChild size="sm" className="bg-[#C3A681] hover:bg-neutral-900 transition-colors rounded-lg">
                      <Link to={`/customize/${product.id}`}>Customize</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-40 border-2 border-dashed border-neutral-100 rounded-3xl"
          >
            <p className="text-neutral-400">No products found in this category.</p>
          </motion.div>
        )}
      </main>
    </div>
  );
}