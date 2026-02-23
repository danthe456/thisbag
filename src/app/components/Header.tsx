  import { useState, useEffect } from 'react';
  import { Link, useLocation } from 'react-router-dom';
  import { Menu, X } from 'lucide-react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { Button } from './ui/button';
  import icon from '../../assets/icon.png';

  const NAV_LINKS = [
    { to: '/catalog', label: 'Catálogo' },
    { to: '/about',   label: 'Nosotros' },
    { to: '/privacy', label: 'Privacidad' },
  ];

  export default function Header() {
    const [menuOpen, setMenuOpen]   = useState(false);
    const [scrolled, setScrolled]   = useState(false);
    const { pathname }              = useLocation();

    // Sombra sutil al hacer scroll
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 8);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Cierra el menú al cambiar de ruta
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    return (
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_2px_16px_0_rgba(0,0,0,0.07)]' : 'border-b border-neutral-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={icon}
                alt="DOPACK Logo"
                className="h-9 md:h-11 w-auto object-contain hover:opacity-75 transition-opacity duration-200"
              />
            </Link>

            {/* Nav Desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ to, label }) => {
                const active = pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                      ${active
                        ? 'text-neutral-900'
                        : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                  >
                    {label}
                    {/* Indicador de ruta activa */}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-3 -bottom-px h-0.5 bg-neutral-900 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}

              {/* Separador */}
              <span className="w-px h-5 bg-neutral-200 mx-3" />

              <Button
                asChild
                size="sm"
                className="bg-neutral-900 hover:bg-[#C3A681] text-white rounded-xl px-5 h-9 text-sm font-semibold transition-colors duration-200"
              >
                <Link to="/contact">Cotizar</Link>
              </Button>
            </nav>

            {/* Botón hamburguesa — Mobile */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className="md:hidden p-2 rounded-xl hover:bg-neutral-100 transition-colors"
            >
              <Menu className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>

        {/* ── Menú Mobile ── */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
                onClick={() => setMenuOpen(false)}
              />

              {/* Panel */}
              <motion.div
                key="panel"
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="fixed top-0 inset-x-0 z-50 bg-white rounded-b-3xl shadow-2xl px-6 pt-5 pb-8"
              >
                {/* Cabecera del panel */}
                <div className="flex items-center justify-between mb-8">
                  <img src={icon} alt="DOPACK Logo" className="h-9 w-auto object-contain" />
                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Cerrar menú"
                    className="p-2 rounded-xl hover:bg-neutral-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-1 mb-8">
                  {NAV_LINKS.map(({ to, label }) => {
                    const active = pathname === to;
                    return (
                      <Link
                        key={to}
                        to={to}
                        className={`px-4 py-3 rounded-2xl text-base font-medium transition-colors
                          ${active
                            ? 'bg-neutral-900 text-white'
                            : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                          }`}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </nav>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-neutral-900 hover:bg-[#C3A681] text-white rounded-2xl h-14 text-base font-bold transition-colors duration-200"
                >
                  <Link to="/contact">Solicitar Cotización</Link>
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    );
  }