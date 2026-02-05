import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Github, FileText, Mail, MessageSquare } from 'lucide-react';
import { ShinyButton } from './ui/ShinyButton';

export default function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with brand gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] to-black z-0" />

            {/* Ambient Light */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--accent-primary)]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-space"
                    >
                        ¿Listo para automatizar tu negocio <br />
                        <span className="text-gray-500">o construir tu sistema?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[var(--text-secondary)] text-lg"
                    >
                        Agenda una llamada de 30 minutos sin compromiso. <br className="hidden md:block" />
                        Analizamos tu caso y te doy una propuesta clara y accionable.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Business Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[var(--bg-secondary)]/50 border border-[var(--accent-primary)]/20 rounded-3xl p-8 backdrop-blur-sm hover:border-[var(--accent-primary)]/50 transition-colors flex flex-col items-center text-center group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[var(--accent-primary)]/10 flex items-center justify-center mb-6 text-[var(--accent-primary)] group-hover:scale-110 transition-transform duration-300">
                            <Calendar size={32} />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">Para Negocios</h3>
                        <p className="text-gray-400 mb-8 flex-grow">
                            ¿Tienes procesos manuales que consumen tiempo? <br />
                            Hablemos de cómo automatizarlos y escalar.
                        </p>

                        <ShinyButton href="https://cal.com/nicolasmoreno" className="w-full bg-[var(--accent-primary)] text-black hover:bg-amber-400 font-bold py-4 rounded-xl flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all">
                            <Calendar size={20} />
                            Agendar Llamada
                        </ShinyButton>
                    </motion.div>

                    {/* Tech Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[var(--bg-secondary)]/30 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-[var(--bg-secondary)]/50 transition-colors flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <Github size={32} />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">Para Equipos Técnicos</h3>
                        <p className="text-gray-400 mb-8 flex-grow">
                            ¿Buscas un backend developer con experiencia real? <br />
                            Revisa mi código o descárgate mi CV.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <a
                                href="https://github.com/nicolas2601"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white font-bold flex items-center justify-center gap-2"
                            >
                                <Github size={20} />
                                Ver GitHub
                            </a>
                            <a
                                href="/CV.pdf"
                                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white font-bold flex items-center justify-center gap-2"
                            >
                                <FileText size={20} />
                                Descargar CV
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Direct Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 pt-16 border-t border-white/5 text-center"
                >
                    <p className="text-gray-400 mb-6 uppercase tracking-wider text-sm font-semibold">O escríbeme directamente:</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
                        <a href="mailto:nm5571762@gmail.com" className="flex items-center justify-center gap-3 text-lg text-white hover:text-[var(--accent-primary)] transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                                <Mail size={18} />
                            </div>
                            nm5571762@gmail.com
                        </a>
                        <a href="https://wa.me/573502328517" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-lg text-white hover:text-green-400 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                <MessageSquare size={18} />
                            </div>
                            +57 350 232 8517
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
