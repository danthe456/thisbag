import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#D1A664] text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">ThisBag</h3>
            <p className="text-sm leading-relaxed">
              Fabricamos bolsas personalizadas de alta calidad para empresas,
              marcas y comercios. Soluciones en papel, plástico y materiales
              ecológicos con procesos industriales certificados.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Productos</h4>
            <ul className="space-y-3 text-sm">
              <li>Bolsas de Papel</li>
              <li>Bolsas Plásticas</li>
              <li>Bolsas Ecológicas</li>
              <li>Personalización</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Nuestra Empresa</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">Procesos</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li>📍 Calle 33 No 11-83<br />Bucaramanga, Colombia</li>
              <li>📞 +57 310 263 0075</li>
              <li>✉️ comercial@thisbag.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} ThisBag Packaging · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}