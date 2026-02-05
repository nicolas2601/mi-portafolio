import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "¿Cuánto cuesta desarrollar un sistema completo?",
        answer: "El costo depende del alcance y complejidad del proyecto. Un bot de WhatsApp básico puede iniciar desde $500 USD, mientras que un sistema completo con backend, frontend y automatización profunda desde $2,000 USD. Siempre entrego una propuesta detallada y transparente después de analizar tu caso específico."
    },
    {
        question: "¿Cuánto tiempo toma desarrollar mi proyecto?",
        answer: "Para un MVP (Producto Mínimo Viable) funcional, el tiempo estimado es de 2 a 4 semanas. Un sistema completo puede tomar de 6 a 12 semanas. Trabajo en sprints de 1-2 semanas, lo que garantiza demos constantes para que veas el progreso real y no tengas que esperar meses para ver resultados."
    },
    {
        question: "¿Solo haces páginas web o también sistemas complejos?",
        answer: "Me especializo en sistemas completos y robustos, no solo en 'landing pages'. Mi foco está en el Backend, APIs, arquitecturas escalables y automatización de procesos. Si necesitas automatizar operaciones, gestionar datos o construir infraestructura compleja, soy el aliado correcto."
    },
    {
        question: "¿Trabajas con empresas fuera de Bucaramanga?",
        answer: "Sí, absolutamente. Trabajo de forma remota con clientes y equipos en toda Colombia y LATAM. Para negocios locales en Bucaramanga, también tengo la disponibilidad de realizar reuniones presenciales para levantamiento de requerimientos."
    },
    {
        question: "¿Qué pasa después de entregar el proyecto?",
        answer: "No te dejo solo. Entrego documentación técnica completa, el código fuente en repositorios privados y capacitación para ti o tu equipo. Además, ofrezco planes de soporte post-lanzamiento y mantenimiento mensual para asegurar que tu sistema siga funcionando perfectamente."
    },
    {
        question: "¿Tienes experiencia con deployment real?",
        answer: "Sí. No trabajo solo en local (localhost). Todos mis proyectos se despliegan en infraestructuras de producción reales utilizando Docker, pipelines de CI/CD para integración continua y herramientas de monitoreo. Tengo experiencia desplegando en Azure, VPS Linux y gestionando servidores."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[var(--bg-secondary)]/30 border-y border-white/5 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider mb-4 border border-[var(--accent-primary)]/20">
                        <HelpCircle size={14} /> Preguntas Frecuentes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 font-space">
                        Respuestas claras a tus dudas
                    </h2>
                    <p className="text-[var(--text-secondary)]">Resolviendo las objeciones más comunes sobre desarrollo y automatización.</p>
                </div>

                <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[var(--bg-primary)] border border-white/5 hover:border-[var(--accent-primary)]/30 rounded-2xl overflow-hidden transition-colors duration-300"
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                aria-expanded={activeIndex === index}
                            >
                                <span className="text-lg font-medium text-[var(--text-primary)] font-space pr-8" itemProp="name">
                                    {faq.question}
                                </span>
                                <span className={`shrink-0 text-[var(--accent-primary)] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div
                                            className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed border-t border-white/5 pt-4"
                                            itemScope
                                            itemProp="acceptedAnswer"
                                            itemType="https://schema.org/Answer"
                                        >
                                            <div itemProp="text">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
