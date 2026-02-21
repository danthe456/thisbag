import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─────────────────────────────────────────────
// Cambia estos valores por los tuyos:
const WHATSAPP_NUMBER = '573186435725'; 
const WHATSAPP_MESSAGE = '¡Hola! Me interesa cotizar un empaque personalizado para mi marca. 🛍️';
// ─────────────────────────────────────────────

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible]         = useState(false);

  // Aparece después de 1.5s para no ser invasivo
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Muestra el tooltip automáticamente al aparecer, luego lo oculta
  useEffect(() => {
    if (!visible) return;
    setShowTooltip(true);
    const t = setTimeout(() => setShowTooltip(false), 4000);
    return () => clearTimeout(t);
  }, [visible]);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{   opacity: 0, scale: 0.6,  y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 260 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.95 }}
                animate={{ opacity: 1, x: 0,  scale: 1    }}
                exit={{   opacity: 0, x: 12, scale: 0.95  }}
                transition={{ duration: 0.2 }}
                className="bg-white text-neutral-900 text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-neutral-100 whitespace-nowrap"
              >
                👋 ¡Pulsa aquí para cotizar!
                {/* Flecha derecha */}
                <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-neutral-100 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón principal */}
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{   scale: 0.95 }}
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
            style={{ backgroundColor: '#25D366' }}
          >
            {/* Pulso animado */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

            {/* Icono SVG oficial de WhatsApp */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-7 h-7 relative z-10"
              fill="white"
            >
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.027 7.8L0 32l8.418-2.004A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.2a13.14 13.14 0 01-6.698-1.832l-.48-.285-4.996 1.19 1.235-4.862-.314-.5A13.147 13.147 0 012.8 16C2.8 8.71 8.71 2.8 16 2.8S29.2 8.71 29.2 16 23.29 29.2 16 29.2zm7.23-9.83c-.396-.198-2.344-1.157-2.707-1.288-.363-.132-.627-.198-.89.198-.264.396-1.023 1.288-1.254 1.552-.23.264-.462.297-.858.099-.396-.198-1.673-.616-3.187-1.967-1.178-1.05-1.973-2.347-2.203-2.743-.23-.396-.025-.61.173-.807.178-.177.396-.462.594-.693.198-.23.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.89-2.146-1.22-2.94-.32-.77-.647-.666-.89-.678l-.759-.013c-.264 0-.693.099-.1056.495-.363.396-1.386 1.354-1.386 3.302 0 1.948 1.419 3.83 1.617 4.094.198.264 2.793 4.263 6.766 5.98.946.408 1.684.652 2.26.834.95.302 1.814.259 2.497.157.762-.114 2.344-.958 2.675-1.884.33-.924.33-1.717.23-1.884-.099-.165-.363-.264-.759-.462z" />
            </svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}