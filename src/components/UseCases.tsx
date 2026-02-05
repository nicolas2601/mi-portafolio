import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Briefcase, Building, Code } from 'lucide-react';
import { ShinyButton } from './ui/ShinyButton';

const BusinessFeatures = [
    "Bot de WhatsApp para reservas automáticas",
    "Sistema de pagos integrado",
    "Panel de control para tu negocio",
    "Automatización de procesos repetitivos",
    "Una persona que hace todo el sistema"
];

const RecruiterFeatures = [
    "Arquitectura de APIs y microservicios",
    "Deploy real con Docker y CI/CD",
    "Experiencia en producción (no solo local)",
    "Stack moderno: NestJS, Django, React",
    "Automatización con n8n y bots"
];

export default function UseCases() {
    return (
        <section className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 font-space">
                        ¿Para quién trabajo?
                    </h2>
                    <p className="text-[var(--text-secondary)]">Dos enfoques, una misma calidad técnica.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Business Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#1a1a1a] border border-amber-500/30 rounded-3xl p-8 hover:border-amber-500/60 transition-colors group relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Building size={120} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/20 rounded-xl text-amber-500">
                                    <Building size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Para Negocios</h3>
                                    <p className="text-amber-500 text-sm font-medium">Bucaramanga y Colombia</p>
                                </div>
                            </div>

                            <div className="mb-8 bg-black/40 p-6 rounded-xl border border-white/10">
                                <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-3 font-semibold">Tu Problema</h4>
                                <ul className="space-y-2 text-[var(--text-secondary)]">
                                    <li className="flex gap-2 text-sm">⛔ Procesos manuales que consumen tiempo</li>
                                    <li className="flex gap-2 text-sm">⛔ Falta de automatización en ventas</li>
                                    <li className="flex gap-2 text-sm">⛔ Sin sistema de gestión de clientes</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-4 font-semibold">Lo que obtienes</h4>
                                <ul className="space-y-3">
                                    {BusinessFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                                            <Check className="shrink-0 w-5 h-5 text-amber-500" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href="/contact" className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                                Agendar llamada <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Recruiter Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#1a1a1a] border border-blue-500/30 rounded-3xl p-8 hover:border-blue-500/60 transition-colors group relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Code size={120} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                    <Code size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Para Equipos Técnicos</h3>
                                    <p className="text-blue-400 text-sm font-medium">Remoto / LATAM</p>
                                </div>
                            </div>

                            <div className="mb-8 bg-black/40 p-6 rounded-xl border border-white/10">
                                <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-3 font-semibold">Lo que buscas</h4>
                                <ul className="space-y-2 text-[var(--text-secondary)]">
                                    <li className="flex gap-2 text-sm">🔍 Backend developer productivo</li>
                                    <li className="flex gap-2 text-sm">🔍 Experiencia real (no tutoriales)</li>
                                    <li className="flex gap-2 text-sm">🔍 Autonomía para deployment</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-gray-400 text-sm uppercase tracking-wide mb-4 font-semibold">Lo que aporto</h4>
                                <ul className="space-y-3">
                                    {RecruiterFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                                            <Check className="shrink-0 w-5 h-5 text-blue-400" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href="/projects" className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                                Ver proyectos <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
