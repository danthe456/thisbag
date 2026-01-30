import { ShieldCheck, Lock, Copyright } from "lucide-react";

export default function Privacity() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-50 to-white border-t border-neutral-200 py-20 mt-20">
      
      {/* Decorative blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C3A681]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-[#C3A681]">
            Seguridad & Transparencia
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Compromiso de Privacidad y Confidencialidad
          </h2>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto">
            Protegemos su información, archivos y propiedad intelectual bajo estándares legales y técnicos de alto nivel.
          </p>

          <div className="mt-6 h-[3px] w-24 bg-[#C3A681] mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Habeas Data */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#C3A681]/10 text-[#C3A681] mb-4 group-hover:scale-105 transition">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-900 mb-2">
              Habeas Data
            </h3>

            <p className="text-xs text-neutral-600 leading-relaxed">
              En cumplimiento de la <strong>Ley 1581 de 2012</strong> y la Constitución Política de Colombia, 
              sus datos personales serán tratados bajo estrictos estándares de seguridad y utilizados únicamente 
              para fines relacionados con su solicitud.
            </p>
          </div>

          {/* Confidencialidad */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#C3A681]/10 text-[#C3A681] mb-4 group-hover:scale-105 transition">
              <Lock className="w-6 h-6" />
            </div>

            <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-900 mb-2">
              Confidencialidad
            </h3>

            <p className="text-xs text-neutral-600 leading-relaxed">
              Toda imagen, logo o arte compartido con <strong>ThisBag</strong> es tratado como material estrictamente confidencial. 
              No usamos, vendemos ni distribuimos su contenido fuera del proceso productivo autorizado.
            </p>
          </div>

          {/* Derechos de Autor */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#C3A681]/10 text-[#C3A681] mb-4 group-hover:scale-105 transition">
              <Copyright className="w-6 h-6" />
            </div>

            <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-900 mb-2">
              Derechos de Autor
            </h3>

            <p className="text-xs text-neutral-600 leading-relaxed">
              El cliente declara poseer los derechos legales del material entregado. 
              <strong> ThisBag</strong> no comercializa diseños de terceros, limitando su uso exclusivamente 
              a la personalización contratada.
            </p>
          </div>

        </div>

        {/* Footer Legal Notice */}
        <div className="mt-12 bg-neutral-50 border border-neutral-200 rounded-xl p-5 text-center">
          <p className="text-[11px] text-neutral-500 leading-relaxed italic">
            Al enviar información o archivos a través de esta plataforma, usted autoriza de forma voluntaria, expresa e informada 
            el tratamiento de los mismos conforme a la normativa colombiana vigente y a los términos aquí descritos.
          </p>
        </div>

      </div>
    </section>
  );
}
