import { Link } from 'react-router-dom';
import { Info,  Users, Shield, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import landing from '../../assets/landing1.jpeg';


const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
export default function AboutUs() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE 1: Compromiso y Calidad */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div {...fadeInLeft} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDFCFB] border border-[#C3A681]/20 text-[#C3A681] text-sm font-medium">
              <Info className="w-4 h-4" /> Sobre Nosotros
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              Compromiso con la Calidad <br /> <span className="text-[#C3A681]">y tu Marca</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              En <span className="font-semibold text-neutral-900">ThisBag</span>, no solo fabricamos bolsas; creamos la primera impresión de tu negocio. Nos tomamos en serio la responsabilidad de entregar productos que reflejen la excelencia de tu marca.
            </p>
            
            <div className="grid grid-cols-1 gap-6 pt-4">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C3A681]/10 flex items-center justify-center text-[#C3A681] group-hover:bg-[#C3A681] group-hover:text-white transition-all duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Estampados Duraderos</h4>
                  <p className="text-neutral-500 text-sm">Técnicas de impresión de alta fidelidad que resisten el uso diario sin perder color.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C3A681]/10 flex items-center justify-center text-[#C3A681] group-hover:bg-[#C3A681] group-hover:text-white transition-all duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Asesoramiento Constante</h4>
                  <p className="text-neutral-500 text-sm">Te acompañamos desde la elección del material hasta el diseño final del arte.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInRight} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
              <img 
                src={landing} 
                alt="Proceso de fabricación" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoración abstracta */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C3A681]/20 -z-10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <hr className="border-neutral-100 mb-32" />

        {/* PARTE 2: Otros Servicios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInLeft} className="order-2 lg:order-1 relative">
              
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2070&auto=format&fit=crop" alt="Impresión publicitaria" className="w-full h-full object-cover" />
              </div>
            
          </motion.div>

          <motion.div {...fadeInRight} className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              Más que solo bolsas: <br /> <span className="text-[#C3A681]">Soluciones Publicitarias</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Entendemos que una marca necesita una presencia coherente. Expandimos nuestros servicios para ofrecerte una solución integral de diseño e impresión comercial.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 pt-4">
              {[
                "Tarjetas de presentación",
                "Pancartas publicitarias",
                "Volantes y Flyers",
                "Identidad Visual",
                "Etiquetas personalizadas",
                "Material P.O.P"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#C3A681]" /> {item}
                </li>
              ))}
            </ul>

            <div className="pt-8">
               <Button asChild size="lg" className="bg-[#C3A681] hover:bg-[#a88d6a] text-white rounded-full px-8 shadow-lg transition-all hover:scale-105">
                  <Link to="/contact">Consultar otros servicios</Link>
               </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}