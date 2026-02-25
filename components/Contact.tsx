import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/72f8d052bf34a9542a0ae1381247b72d", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión. Por favor, revisa tu internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          <div className="lg:w-5/12 space-y-8">
            <div>
              <h2 className="text-nexa-400 font-semibold tracking-wide uppercase text-sm mb-3">Contáctanos</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Optimizar tu Empresa?</h3>
              <p className="text-slate-400 leading-relaxed">
                Analizamos tus procesos y diseñamos una solución digital personalizada para tu organización. Solicita tu Diagnóstico Digital sin costo.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-nexa-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-slate-400">proyectos@nexatech.com.co</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-nexa-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Teléfono</h4>
                  <p className="text-slate-400">+57 3152560715 / +57 300 3719229</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-nexa-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Oficina</h4>
                  <p className="text-slate-400">Manga calle 25 Nº 23-90<br />Cartagena, Colombia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-slate-900">
              <h3 className="text-2xl font-bold mb-6">Solicita tu diagnóstico</h3>

              {submitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center">
                  <p className="font-bold">¡Solicitud recibida!</p>
                  <p className="text-sm">Uno de nuestros consultores te contactará para agendar.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre Completo</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexa-500 bg-slate-50 transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Correo Corporativo</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexa-500 bg-slate-50 transition-all"
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Cuéntanos sobre tu necesidad</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexa-500 bg-slate-50 transition-all resize-none"
                      placeholder="Me interesa un software para..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-nexa-600 hover:bg-nexa-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Agendar Evaluación
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;