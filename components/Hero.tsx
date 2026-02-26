import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const images = [
    {
      src: "./proyectos.png",
      alt: "Gestión de proyectos Nexatech",
      title: "Control Integral",
      subtitle: "Visibilidad y eficiencia tecnológica."
    },
    {
      src: "./RRHH.png",
      alt: "Gestión de Talento Humano Nexatech",
      title: "Talento Humano",
      subtitle: "Gestión estratégica del capital humano."
    },
    {
      src: "./RRHH2.png",
      alt: "Cultura y Bienestar Nexatech",
      title: "Cultura Organizacional",
      subtitle: "Potenciando el crecimiento de tu equipo."
    },
    {
      src: "./Activos.png",
      alt: "Control de Activos Nexatech",
      title: "Control de Activos",
      subtitle: "Gestión inteligente de recursos físicos."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-nexa-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexa-50 border border-nexa-100 text-nexa-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexa-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nexa-500"></span>
              </span>
              Software Empresarial a la Medida
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Software Empresarial a la Medida para Optimizar tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexa-600 to-indigo-600">Operaciones y Procesos</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Diseñamos y desarrollamos diversas plataformas digitales adaptadas a la complejidad de cada área: desde la gestión administrativa y de proyectos, hasta el control especializado de tiempos, costos, activos y documentación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-nexa-600 hover:bg-nexa-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-nexa-500/25">
                Solicita un Diagnóstico Digital
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold transition-all">
                Ver Soluciones
              </a>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-6 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-nexa-500" />
                <span>Gestión Integral de Proyectos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-nexa-500" />
                <span>Gestión Documental</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-nexa-500" />
                <span>Control de Activos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-nexa-500" />
                <span>Talento Humano</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative group/carousel">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 bg-white group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)]">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <p className="font-bold text-lg">{img.title}</p>
                        <p className="opacity-90 text-xs">{img.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block z-30">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Eficiencia</p>
                  <p className="text-2xl font-bold text-slate-900">+40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;