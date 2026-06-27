import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Workflow, Trophy, FolderGit2, BadgeCheck, Clock } from 'lucide-react';
import { skills } from '../data/info';

const groups = [
    { key: 'backend', label: 'Backend', icon: Server, items: skills.backend, accent: 'text-sky-300' },
    { key: 'frontend', label: 'Frontend', icon: Layout, items: skills.frontend, accent: 'text-violet-300' },
    { key: 'databases', label: 'Bases de Datos', icon: Database, items: skills.databases, accent: 'text-emerald-300' },
    { key: 'automationAndCloud', label: 'Automatización & Cloud', icon: Workflow, items: skills.automationAndCloud, accent: 'text-amber-300' },
];

const stats = [
    { icon: Clock, value: '2+', label: 'Años construyendo' },
    { icon: FolderGit2, value: '9+', label: 'Proyectos públicos' },
    { icon: BadgeCheck, value: '6', label: 'Certificaciones' },
    { icon: Trophy, value: 'Top', label: 'Hackathon Colombia 5.0' },
];

export default function TechStack() {
    return (
        <section id="stack" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden border-t border-white/5">
            <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent-secondary)]/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-white/10 bg-white/5 mb-20"
                >
                    {stats.map((s, i) => (
                        <div key={i} className="bg-[var(--bg-primary)] p-6 md:p-8 flex flex-col items-center text-center group hover:bg-[var(--bg-secondary)]/40 transition-colors">
                            <s.icon className="w-6 h-6 text-[var(--accent-primary)] mb-3 group-hover:scale-110 transition-transform" />
                            <span className="text-3xl md:text-4xl font-bold text-white font-space leading-none mb-1.5">{s.value}</span>
                            <span className="text-[11px] md:text-xs text-gray-400 uppercase tracking-widest font-medium">{s.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Header */}
                <div className="mb-14">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--accent-primary)] font-mono text-sm tracking-[0.2em] uppercase mb-3 inline-flex items-center gap-2"
                    >
                        <span className="h-px w-8 bg-[var(--accent-primary)]/60" />
                        Stack Técnico
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-space tracking-tight"
                    >
                        Herramientas que <span className="text-gradient-gold">domino</span>
                    </motion.h2>
                </div>

                {/* Skill groups */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {groups.map((g, gi) => (
                        <motion.div
                            key={g.key}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * 0.08 }}
                            className="rounded-2xl border border-white/10 bg-[var(--bg-secondary)]/30 p-6 hover:border-[var(--accent-primary)]/30 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <g.icon className={`w-5 h-5 ${g.accent}`} />
                                </div>
                                <h3 className="text-lg font-bold text-white">{g.label}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {g.items.map((item) => (
                                    <span
                                        key={item.name}
                                        className="px-3 py-1.5 rounded-lg bg-black/30 border border-white/5 text-sm text-gray-300 font-mono hover:border-[var(--accent-primary)]/40 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
