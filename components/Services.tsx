import React from 'react';
import { SERVICES, BENEFITS } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-nexa-600 font-semibold tracking-wide uppercase text-sm mb-3">Nuestras Soluciones</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tecnología modular para cada necesidad</h3>
          <p className="text-slate-600 text-lg">
            Convierte datos operativos en decisiones estratégicas. Elimina reprocesos, reduce errores y centraliza la información con nuestras plataformas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-nexa-100/50 transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-nexa-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
              
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-nexa-600 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
              </div>
              
              <a href="#contact" className="inline-flex items-center text-nexa-600 font-semibold hover:text-nexa-700 mt-auto relative z-10">
                Solicitar Diagnóstico
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-2">Beneficios Clave</h3>
                <p className="text-slate-400">Menos improvisación. Más control. Mejores resultados.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {BENEFITS.map((benefit) => (
                    <div key={benefit.id} className="flex flex-col items-center text-center max-w-[200px]">
                        <div className="flex justify-center mb-4 bg-slate-800 w-16 h-16 rounded-full items-center mx-auto text-nexa-400">
                            {benefit.icon}
                        </div>
                        <div className="font-medium text-slate-200">{benefit.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;