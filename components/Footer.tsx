import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-12 lg:gap-8 mb-12">
          <div className="flex-1 min-w-[250px] max-w-sm">
            <a href="#" className="flex items-center mb-6">
              <img
                src="./Logo-Nexa-footer.jpg"
                alt="Nexatech Logo Footer"
                className="h-20 w-auto object-contain rounded-lg shadow-lg"
              />
            </a>
            <p className="text-sm leading-relaxed mb-6 font-medium text-slate-300">
              NexaTech – Ingeniería y Tecnología para el Control Inteligente de tu Empresa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="min-w-[120px]">
            <h4 className="text-white font-bold mb-6">Compañía</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-nexa-400 transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-nexa-400 transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-nexa-400 transition-colors">Blog Tech</a></li>
              <li><a href="#" className="hover:text-nexa-400 transition-colors">Prensa</a></li>
            </ul>
          </div>

          <div className="min-w-[280px]">
            <h4 className="text-white font-bold mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-nexa-400 transition-colors">Desarrollo de Software a la Medida</a></li>
              <li><a href="#services" className="hover:text-nexa-400 transition-colors">Automatización de Procesos</a></li>
              <li><a href="#services" className="hover:text-nexa-400 transition-colors">Dashboards y Analítica</a></li>
              <li><a href="#services" className="hover:text-nexa-400 transition-colors">Consultoría en Transformación Digital</a></li>
              <li><a href="#services" className="hover:text-nexa-400 transition-colors">Soporte y Evolución de Sistemas</a></li>
            </ul>
          </div>

          <div className="min-w-[120px]">
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-nexa-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-nexa-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-nexa-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col items-center gap-4 text-xs text-center">
          <div className="space-y-1">
            <p className="tracking-[0.2em] font-bold text-slate-500 uppercase">Powering Progress</p>
            <p className="italic">© 2026 Nexatech - Todos los derechos reservados</p>
          </div>
          <p className="text-slate-600">Designed with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;