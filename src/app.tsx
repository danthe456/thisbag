import { Routes, Route } from 'react-router-dom';
// Imports de tus páginas existentes
import LandingPage from './app/pages/LandingPage.tsx';
import CatalogPage from './app/pages/CatalogPage.tsx';
import CustomizerPage from './app/pages/CustomizerPage.tsx';
import QuoteFormPage from './app/pages/QuoteFormPage.tsx';
import ContactPage from './app/pages/ContactPage.tsx';

function App() {
  return (
    <Routes>
      {/* 1. Inicio */}
      <Route path="/" element={<LandingPage />} />

      {/* 2. Catálogo completo */}
      <Route path="/catalog" element={<CatalogPage />} />
      {/*contact page*/}
      <Route path="/contact" element={<ContactPage />} />
      {/* 3. RUTA DEL PERSONALIZADOR 
          El ':id' es un parámetro dinámico. 
          Ejemplo: /customize/bolsa-kraft-grande */}
<Route path="/customize/:productId" element={<CustomizerPage />} />

      {/* 4. Formulario de pedido/cotización */}
      <Route path="/quote" element={<QuoteFormPage />} />

      {/* 5. Ruta de seguridad para errores 404 */}
      <Route path="*" element={<div className="p-10 text-center">Página no encontrada</div>} />
    </Routes>
  );
}

export default App;