import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

// Layout & UI
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import ScrollToTop from './app/components/ScrollToTop'; // 
import { Button } from './app/components/ui/button';

// Pages
import LandingPage from './app/pages/LandingPage.tsx';
import CatalogPage from './app/pages/CatalogPage.tsx';
import CustomizerPage from './app/pages/CustomizerPage.tsx';
import QuoteFormPage from './app/pages/QuoteFormPage.tsx';
import ContactPage from './app/pages/ContactPage.tsx';
import AboutUs from './app/pages/AboutUs.tsx';
import Privacity from './app/pages/privacity.tsx';

// --- COMPONENTE COOKIE BANNER ---
function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000); // Aparece 2 seg después
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-96 z-[100] bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#C3A681]/10 rounded-full text-[#C3A681]">
              <Cookie className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-neutral-900 leading-tight">Aviso de Cookies</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Usamos cookies para mejorar tu experiencia y analizar el tráfico. Al navegar, aceptas nuestra <a href="/privacy" className="underline font-medium text-[#C3A681]">política de privacidad</a>.
              </p>
              <div className="flex gap-3">
                <Button onClick={acceptCookies} className="bg-[#C3A681] hover:bg-[#A88D6A] text-white w-full h-9 text-xs font-bold rounded-lg transition-colors">
                  Aceptar
                </Button>
                <button onClick={() => setIsVisible(false)} className="text-xs text-neutral-400 hover:text-neutral-600 px-2 transition-colors">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- COMPONENTE PRINCIPAL APP ---
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/customize/:productId" element={<CustomizerPage />} />
          <Route path="/quote" element={<QuoteFormPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacity />} /> 
          <Route path="*" element={<div className="p-10 text-center">Página no encontrada</div>} />
        </Routes>
      </main>

      <Footer />
      
      {/* El banner se coloca aquí para que flote sobre todo el contenido */}
      <CookieBanner />
    </div>
  );
}

export default App;