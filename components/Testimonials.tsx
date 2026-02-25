import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-nexa-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonios</h2>
          <h3 className="text-3xl font-bold text-slate-900">Lo que dicen nuestros clientes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative">
              <Quote className="absolute top-6 right-6 text-nexa-100 w-10 h-10" />
              <p className="text-slate-600 italic mb-6 relative z-10">"{testimonial.content}"</p>
              
              <div className="mt-auto flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-nexa-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Strip (Mock) */}
        <div className="mt-16 pt-8 border-t border-slate-200 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {['Microsoft', 'Google', 'Amazon', 'Oracle', 'IBM'].map((client) => (
              <span key={client} className="text-xl font-bold text-slate-400">{client}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
