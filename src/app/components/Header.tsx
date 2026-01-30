import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import icon from '../../assets/icon.png'; // Ajusta la ruta a tu logo

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-tight">
            <img src={icon} alt="ThisBag Logo" className="h-10 w-auto object-contain hover:opacity-80 transition-opacity" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/catalog" className="text-sm text-neutral-600 hover:text-neutral-900 font-medium">Products</Link>
            <Link to="/about" className="text-sm text-neutral-600 hover:text-neutral-900 font-medium">About</Link>
            <Link to="/privacy" className="text-sm text-neutral-600 hover:text-neutral-900 font-medium py-2 border-b-2 border-transparent hover:border-neutral-300">Privacy</Link>
            <Button asChild size="sm" style={{ backgroundColor: '#C3A681', color: '#fff' }}>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 rounded-md hover:bg-neutral-100 transition">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-b-2xl shadow-xl px-6 pt-6 pb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-semibold">Menu</span>
                <button onClick={() => setMenuOpen(false)}><X className="w-6 h-6" /></button>
              </div>
              <nav className="flex flex-col gap-6">
                <Link to="/catalog" onClick={() => setMenuOpen(false)} className="text-lg font-medium">Products</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)} className="text-lg font-medium">About</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-lg font-medium py-3 border-b border-neutral-50">Contact</Link>
                <Button asChild size="lg" className="mt-4" style={{ backgroundColor: '#C3A681', color: '#fff' }}>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}