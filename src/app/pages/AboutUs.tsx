import { Link } from 'react-router-dom';
import { Sparkles, Palette, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, type Easing } from 'framer-motion';
import { Button } from '../components/ui/button';
import landing from '../../assets/landing1.jpeg';

// ─────────────────────────────────────────────────────────────
// Sistema de diseño DOPACK
// Fondos:  white → #F5F3EF → #111111 → #C3A681 (solo CTA)
// Títulos: font-black | Botones: bg-neutral-900 rounded-xl
// ─────────────────────────────────────────────────────────────

// Tipamos 'ease' explícitamente como Easing para satisfacer TS + Framer Motion
const EASE: Easing = 'easeOut';

const fadeInLeft = {
  initial:    { opacity: 0, x: -40 },
  whileInView:{ opacity: 1, x: 0   },
  viewport:   { once: true },
  transition: { duration: 0.6, ease: EASE },
};

const fadeInRight = {
  initial:    { opacity: 0, x: 40 },
  whileInView:{ opacity: 1, x: 0  },
  viewport:   { once: true },
  transition: { duration: 0.6, ease: EASE },
};

const fadeInUp = {
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.5, ease: EASE },
};

export default function AboutUs() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ═══════════════════════════════════════════════════════
          HERO  |  Nivel 2: #111111
          Sin años, sin cifras — solo propósito y declaración
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#111111] pt-20 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 80% 40%, rgba(195,166,129,0.10) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-5 h-px bg-[#C3A681]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C3A681]">
                Quiénes somos
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              El empaque es la primera{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #C3A681 0%, #a38763 100%)' }}
              >
                impresión de tu marca.
              </span>
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed max-w-2xl">
              En DOPACK nacimos con una convicción clara: un empaque bien hecho no es un gasto,
              es una inversión en cómo el mundo percibe tu negocio. Por eso fabricamos con
              atención al detalle que pocas imprentas ofrecen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PARTE 1: PROPÓSITO  |  Nivel 0: white
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <motion.div {...fadeInLeft} className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight mb-5">
                  Fabricamos con propósito,{' '}
                  <span className="text-[#C3A681]">no en serie.</span>
                </h2>
                <p className="text-base text-neutral-500 leading-relaxed">
                  No somos una imprenta que produce volumen sin criterio. Cada pedido pasa por
                  un proceso de revisión de arte, selección de material y control de acabados
                  antes de salir de nuestras instalaciones en Bucaramanga.
                </p>
              </div>

              {/* Pilares */}
              <div className="space-y-5">
                {[
                  {
                    icon: <Sparkles className="w-5 h-5" />,
                    title: 'Atención al detalle',
                    desc:  'Revisamos cada arte antes de imprimir. Tu logo, colores y medidas exactas — nada queda al azar.',
                  },
                  {
                    icon: <Palette className="w-5 h-5" />,
                    title: 'Asesoría de diseño incluida',
                    desc:  'Te acompañamos desde la elección del material hasta la aprobación del arte final, sin costo adicional.',
                  },
                  {
                    icon: <Leaf className="w-5 h-5" />,
                    title: 'Línea ecológica activa',
                    desc:  'Contamos con materiales oxobiodegradables y reciclados para marcas que quieren comunicar responsabilidad.',
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-[#F5F3EF] flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-black text-neutral-900 text-sm mb-1">{title}</h4>
                      <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Imagen */}
            <motion.div {...fadeInRight} className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
                <img
                  src={landing}
                  alt="Proceso de fabricación DOPACK"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-56 h-56 rounded-full bg-[#C3A681]/10 -z-10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PARTE 2: VALORES  |  Nivel 1: #F5F3EF
          Sin cifras — basado en proceso y filosofía
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
              Cómo trabajamos
            </h2>
            <p className="text-neutral-500 text-base max-w-xl mx-auto leading-relaxed">
              Nuestro proceso es simple y transparente. Sin sorpresas, sin demoras innecesarias.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'Nos contactas',     desc: 'Por WhatsApp o formulario. Cuéntanos qué necesitas — material, medida y cantidad aproximada.' },
              { n: '02', title: 'Asesoría de diseño', desc: 'Revisamos tu arte o te ayudamos a construirlo. Definimos material, acabado y producción.' },
              { n: '03', title: 'Aprobación',         desc: 'Te enviamos una prueba digital para aprobación antes de iniciar la producción.' },
              { n: '04', title: 'Entrega',            desc: 'Producimos y despachamos a Bucaramanga o a cualquier ciudad de Colombia.' },
            ].map(({ n, title, desc }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-7 border border-neutral-100 relative"
              >
                <span className="text-5xl font-black text-neutral-100 leading-none block mb-4">
                  {n}
                </span>
                <h4 className="font-black text-neutral-900 mb-2">{title}</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PARTE 3: SERVICIOS  |  Nivel 0: white
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Imagen */}
            <motion.div {...fadeInLeft} className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2070&auto=format&fit=crop"
                  alt="Impresión publicitaria"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-[#F5F3EF] -z-10 blur-2xl" />
            </motion.div>

            {/* Copy */}
            <motion.div {...fadeInRight} className="order-1 lg:order-2 space-y-7">
              <div>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-5 h-px bg-[#C3A681]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C3A681]">
                    Más que bolsas
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight mb-5">
                  Soluciones gráficas <br />
                  <span className="text-[#C3A681]">para toda tu marca.</span>
                </h2>
                <p className="text-base text-neutral-500 leading-relaxed">
                  Tu marca necesita coherencia visual en cada punto de contacto con el cliente.
                  Por eso ampliamos nuestros servicios más allá del empaque.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Tarjetas de presentación',
                  'Pancartas y pendones',
                  'Volantes y flyers',
                  'Etiquetas personalizadas',
                  'Material P.O.P',
                  'Identidad visual',
                  'Adhesivos y stickers',
                  'Gran formato',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C3A681] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-neutral-900 hover:bg-[#C3A681] text-white rounded-xl px-8 h-14 font-bold transition-colors duration-200"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Consultar servicios
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA FINAL  |  Acento: #C3A681
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#C3A681] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 60%, white 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, white 0%, transparent 45%)',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <p className="text-white/70 text-xs font-black uppercase tracking-[0.25em] mb-5">
              ¿Listo para empezar?
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
              Cuéntanos qué necesitas y <br className="hidden md:block" />
              nosotros lo hacemos realidad.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white h-14 px-10 rounded-xl font-bold transition-all duration-200"
              >
                <Link to="/contact">Solicitar cotización</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/40 hover:border-white text-white bg-transparent h-14 px-10 rounded-xl font-bold transition-all duration-200"
              >
                <Link to="/catalog">Ver catálogo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}