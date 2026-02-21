import { ShieldCheck, Lock, Copyright, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────────────────────
// Página de Privacidad — DOPACK
// Sistema de diseño: #111111 hero / white cards / #F5F3EF fondo
// NOTA: Este contenido es informativo. Para uso legal en producción,
// consultar con un abogado colombiano especializado en datos personales.
// ─────────────────────────────────────────────────────────────

const CARDS = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Habeas Data',
    body: `En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, sus datos personales serán recolectados, almacenados y utilizados exclusivamente para atender su solicitud de cotización o pedido. Usted tiene derecho a conocer, actualizar, rectificar y suprimir su información en cualquier momento.`,
    note: 'Ley 1581 de 2012 — Colombia',
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Confidencialidad',
    body: `Toda imagen, logotipo, arte o archivo compartido con DOPACK es tratado como material estrictamente confidencial. No utilizamos, cedemos ni distribuimos su contenido fuera del proceso productivo autorizado por usted. La información de su pedido no será compartida con terceros salvo obligación legal.`,
    note: 'Uso exclusivo del proceso productivo',
  },
  {
    icon: <Copyright className="w-5 h-5" />,
    title: 'Derechos de Autor',
    body: `El cliente declara ser titular o contar con autorización para el uso del material gráfico entregado (logotipos, imágenes, diseños). DOPACK no asume responsabilidad por el uso de material sobre el cual el cliente no tenga los derechos correspondientes, limitando su intervención a la producción contratada.`,
    note: 'Ley 23 de 1982 — Derechos de Autor',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Uso de la Información',
    body: `Los datos recopilados (nombre, empresa, teléfono, correo) se utilizan únicamente para gestionar cotizaciones, hacer seguimiento de pedidos y mejorar nuestro servicio. No realizamos envíos de publicidad no solicitada. Puede solicitar la eliminación de sus datos escribiendo a dmarpack@gmail.com.`,
    note: 'Sin spam — solo comunicación de servicio',
  },
];

export default function Privacy() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ── Hero ── */}
      <section className="bg-[#111111] pt-20 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 70% 50%, rgba(195,166,129,0.09) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-5 h-px bg-[#C3A681]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C3A681]">
                Seguridad & Transparencia
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
              Privacidad y{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #C3A681 0%, #a38763 100%)' }}
              >
                Confidencialidad
              </span>
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed max-w-xl">
              Protegemos su información y archivos bajo la normativa colombiana vigente.
              Su confianza es parte de nuestro proceso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CARDS.map(({ icon, title, body, note }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow duration-300 flex flex-col gap-5"
              >
                {/* Icono */}
                <div className="w-11 h-11 rounded-2xl bg-[#F5F3EF] flex items-center justify-center text-neutral-700">
                  {icon}
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <h3 className="font-black text-neutral-900 mb-3">{title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{body}</p>
                </div>

                {/* Nota legal al pie */}
                <div className="pt-4 border-t border-neutral-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-300">
                    {note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aviso legal inferior */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 bg-white rounded-2xl border border-neutral-100 p-6"
          >
            <p className="text-xs text-neutral-400 leading-relaxed text-center italic">
              Al enviar información o archivos a través de esta plataforma, usted autoriza de forma
              voluntaria, expresa e informada el tratamiento de los mismos conforme a la normativa
              colombiana vigente (Ley 1581 de 2012) y a los términos aquí descritos. Para ejercer
              sus derechos de acceso, corrección o eliminación de datos, contáctenos en{' '}
              <a
                href="mailto:dmarpack@gmail.com"
                className="text-[#C3A681] font-semibold hover:underline"
              >
                dmarpack@gmail.com
              </a>
              .
            </p>
          </motion.div>

          {/* Disclaimer de asesoría legal */}
          <p className="text-center text-[10px] text-neutral-300 mt-6 uppercase tracking-widest">
            Este contenido es informativo. Para asesoría legal especializada consulte un abogado.
          </p>
        </div>
      </section>

    </div>
  );
}