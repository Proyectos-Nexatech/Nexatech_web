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
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg border border-slate-200 p-1 shadow-sm shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
