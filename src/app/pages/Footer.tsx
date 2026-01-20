import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const khakiColor = '#C3A681';

  return (
    <footer className="bg-[#1A2F15] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Logo */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">
              This<span style={{ color: khakiColor }}>Bag</span>
            </h2>
            <p className="text-neutral-400 text-sm">
              Soluciones sostenibles en empaques con materiales premium.
            </p>
            <div className="flex gap-4">
              <a className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Facebook className="w-5 h-5" />
              </a>
              <a className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="uppercase tracking-wider font-semibold mb-4" style={{ color: khakiColor }}>
              Horarios
            </h3>
            <p className="text-sm text-neutral-300">
              Lun–Vie: 8:00–5:30<br />
              Sáb: 8:00–12:00
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="uppercase tracking-wider font-semibold mb-4" style={{ color: khakiColor }}>
              Información
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Inicio</Link></li>
              <li><Link to="/catalog" className="hover:text-white">Productos</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="uppercase tracking-wider font-semibold mb-4" style={{ color: khakiColor }}>
              Contacto
            </h3>
            <div className="space-y-3 text-sm text-neutral-300">
              <p className="flex gap-2"><MapPin className="w-4 h-4" /> Bucaramanga</p>
              <p className="flex gap-2"><Phone className="w-4 h-4" /> +57 310 263 0075</p>
              <p className="flex gap-2"><Mail className="w-4 h-4" /> comercial@thisbag.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-neutral-400">
          © 2026 ThisBag Packaging. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
