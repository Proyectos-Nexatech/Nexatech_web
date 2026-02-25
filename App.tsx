import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { CheckCircle2 } from 'lucide-react';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />
            <main>
                <Hero />
                <Services />

                {/* About Us Section */}
                <div id="about" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="text-nexa-600 font-semibold tracking-wide uppercase text-sm mb-3 block">Quiénes Somos</span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ingeniería + Tecnología para Empresas que Exigen Control</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    En <span className="font-bold text-slate-900">Nexatech</span> desarrollamos software empresarial a la medida que transforma la manera en que las organizaciones gestionan sus operaciones.
                                    Combinamos experiencia en ingeniería y gestión empresarial para crear soluciones digitales.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {[
                                    "Visibilidad en tiempo real",
                                    "Control operativo y financiero",
                                    "Trazabilidad completa de la información",
                                    "Automatización de procesos críticos"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <CheckCircle2 className="text-nexa-500 w-6 h-6" />
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-slate-600 font-medium italic">
                                "No desarrollamos aplicaciones genéricas. Diseñamos plataformas adaptadas a la realidad de tu empresa."
                            </p>
                        </div>
                    </div>
                    {/* Simple decoration */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-nexa-100 rounded-full blur-3xl opacity-60"></div>
                </div>

                {/* Why Nexatech Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <img
                                    src="./Gestion.png"
                                    alt="Gestión operativa Nexatech"
                                    className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-nexa-600 font-semibold tracking-wide uppercase text-sm mb-3">Por Qué Nexatech</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Entendemos la Operación, No Solo el Código</h3>
                                <p className="text-slate-600 text-lg mb-8">
                                    Hablamos el lenguaje de la ingeniería y lo convertimos en soluciones digitales efectivas. Nuestra diferencia está en la combinación de:
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Experiencia técnica en entornos industriales",
                                        "Conocimiento en gestión empresarial",
                                        "Desarrollo de software escalable",
                                        "Enfoque en resultados medibles"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-nexa-500"></div>
                                            <span className="text-slate-700 font-medium text-lg">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;