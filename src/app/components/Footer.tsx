import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

// Dentro del return, al mismo nivel que <Header /> y <Footer />:
// ─────────────────────────────────────────────
// Footer alineado al sistema de diseño DOPACK
//
// Fondo: #111111  (Nivel 2 — contraste)
// Acento: #C3A681 solo en título de marca y hover
// Sin fondo dorado: el gold es escaso = poderoso
// ─────────────────────────────────────────────

const PRODUCTOS = [
  { to: '/catalog?category=paper',   label: 'Bolsas de Papel' },
  { to: '/catalog?category=plastic', label: 'Bolsas Plásticas' },
  { to: '/catalog?category=eco',     label: 'Bolsas Ecológicas' },
  { to: '/catalog',                  label: 'Todos los Productos' },
];

const EMPRESA = [
  { to: '/about',   label: 'Nuestra Empresa' },
  { to: '/about',   label: 'Acerca de Nosotros' },
  { to: '/contact', label: 'Contacto' },
  { to: '/privacy', label: 'Privacidad' },
];

const CONTACTO = [
  { icon: '📍', text: 'Calle 33 No 11-83\nBucaramanga, Colombia' },
  { icon: '📞', text: '+57 318 643 5725' },
  { icon: '✉️', text: 'dmarpack@gmail.com' },
];

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <WhatsAppButton />

      <Link
        to={to}
        className="text-neutral-400 hover:text-[#C3A681] transition-colors duration-200 text-sm"
        
      >
        {label}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      {/* ── Cuerpo principal ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Columna 1: Marca */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black tracking-tight mb-1">
              DO<span className="text-[#C3A681]">PACK</span>
            </h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-5">
              Empaques · Litografía · Publicidad
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Fabricamos bolsas personalizadas de alta calidad para empresas,
              marcas y comercios. Soluciones en papel, plástico y materiales
              ecológicos con procesos industriales certificados.
            </p>

            {/* Redes sociales (opcional — agrega tus links reales) */}
           
          </div>

          {/* Columna 2: Productos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">
              Productos
            </h4>
            <ul className="space-y-3">
              {PRODUCTOS.map((p) => (
                <FooterLink key={p.to + p.label} to={p.to} label={p.label} />
              ))}
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {EMPRESA.map((e) => (
                <FooterLink key={e.to + e.label} to={e.to} label={e.label} />
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">
              Contacto
            </h4>
            <ul className="space-y-5">
              {CONTACTO.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-base leading-none mt-0.5 flex-shrink-0">{icon}</span>
                  <span className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#C3A681] hover:border-transparent text-sm font-bold text-neutral-300 hover:text-white transition-all duration-200"
            >
              Solicitar Cotización →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Franja inferior ── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} DOPACK Packaging · Todos los derechos reservados
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="text-xs text-neutral-600 hover:text-neutral-300 transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/terms" className="text-xs text-neutral-600 hover:text-neutral-300 transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}