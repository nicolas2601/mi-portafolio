import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github, ArrowRight, ArrowUpRight, Star,
    Cpu, Shield, Sparkles, Smartphone, Terminal, Code2
} from 'lucide-react';
import { projects, projectCategories, personalInfo } from '../data/info';
import Spotlight from './ui/Spotlight';

// Visual identity per category: accent gradient + icon for image-less cards
const categoryStyle: Record<string, { glow: string; icon: React.ComponentType<any>; ring: string }> = {
    'IA & Agentes': { glow: 'from-violet-500/30 via-indigo-500/10 to-transparent', icon: Sparkles, ring: 'text-violet-300' },
    'Seguridad': { glow: 'from-emerald-500/30 via-teal-500/10 to-transparent', icon: Shield, ring: 'text-emerald-300' },
    'Backend & IoT': { glow: 'from-sky-500/30 via-cyan-500/10 to-transparent', icon: Cpu, ring: 'text-sky-300' },
    'Mobile & ML': { glow: 'from-pink-500/30 via-rose-500/10 to-transparent', icon: Smartphone, ring: 'text-pink-300' },
    'Dev Tools': { glow: 'from-amber-400/30 via-yellow-500/10 to-transparent', icon: Terminal, ring: 'text-amber-300' },
};

function CategoryIcon({ category, className }: { category: string; className?: string }) {
    const Icon = categoryStyle[category]?.icon ?? Code2;
    return <Icon className={className} />;
}

export default function Projects() {
    const [active, setActive] = useState<string>('Todos');

    const filtered = active === 'Todos'
        ? projects
        : projects.filter((p) => (p as any).category === active);

    return (
        <section id="projects" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-[var(--accent-primary)]/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="mb-12">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--accent-primary)] font-mono text-sm tracking-[0.2em] uppercase mb-3 inline-flex items-center gap-2"
                    >
                        <span className="h-px w-8 bg-[var(--accent-primary)]/60" />
                        Portafolio Seleccionado
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-5 font-space tracking-tight"
                    >
                        Proyectos reales con <br className="hidden sm:block" />
                        <span className="text-gradient-gold">impacto medible</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[var(--text-secondary)] text-lg max-w-2xl"
                    >
                        Sistemas en producción, hackathons y herramientas open-source. No son ejercicios
                        de clase — son soluciones a problemas reales, con el código a la vista.
                    </motion.p>
                </div>

                {/* Category Filter Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {projectCategories.map((cat) => {
                        const isActive = active === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                aria-pressed={isActive}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                    isActive
                                        ? 'text-black border-transparent'
                                        : 'text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="filter-pill"
                                        className="absolute inset-0 rounded-full bg-[var(--accent-primary)]"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, index) => {
                            const cat = (project as any).category as string;
                            const style = categoryStyle[cat];
                            const hasImage = Boolean((project as any).image);

                            return (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Spotlight className={`rounded-3xl h-full flex flex-col bg-[var(--bg-secondary)]/40 border overflow-hidden group transition-all duration-300 ${
                                        project.featured
                                            ? 'border-[var(--accent-primary)]/40 hover:border-[var(--accent-primary)]/70 shadow-[0_0_40px_-12px_rgba(255,215,0,0.25)]'
                                            : 'border-white/10 hover:border-white/25'
                                    }`}>
                                        {/* Visual Header */}
                                        <div className="relative h-48 overflow-hidden">
                                            {hasImage ? (
                                                <>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-[var(--bg-secondary)]/20 to-transparent z-10" />
                                                    <img
                                                        src={(project as any).image}
                                                        alt={project.title}
                                                        width={600}
                                                        height={400}
                                                        loading="lazy"
                                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                </>
                                            ) : (
                                                // Image-less fallback: gradient + category glyph + faux code grid
                                                <div className="absolute inset-0 bg-[var(--bg-secondary)]">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${style?.glow ?? 'from-white/10 to-transparent'}`} />
                                                    <div
                                                        className="absolute inset-0 opacity-[0.07]"
                                                        style={{
                                                            backgroundImage:
                                                                'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
                                                            backgroundSize: '22px 22px',
                                                        }}
                                                    />
                                                    <CategoryIcon
                                                        category={cat}
                                                        className={`absolute -bottom-6 -right-4 w-40 h-40 opacity-10 ${style?.ring ?? 'text-white'}`}
                                                    />
                                                    <div className="absolute inset-0 flex items-center px-6">
                                                        <span className="font-mono text-2xl font-bold text-white/80 leading-tight">
                                                            {'</>'} <br />
                                                            <span className="text-base text-white/40">{project.tech[0]}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Featured ribbon */}
                                            {project.featured && (
                                                <div className="absolute top-4 right-4 z-20">
                                                    <span className="flex items-center gap-1 px-2.5 py-1 bg-[var(--accent-primary)] rounded-full text-[10px] font-extrabold text-black uppercase tracking-wider">
                                                        <Star size={11} className="fill-black" /> Destacado
                                                    </span>
                                                </div>
                                            )}

                                            {/* Category badge */}
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-white">
                                                    <CategoryIcon category={cat} className="w-3.5 h-3.5" />
                                                    {cat}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2.5 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                                                {project.title}
                                            </h3>

                                            <p className="text-[var(--text-secondary)] text-sm mb-5 line-clamp-3 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Metrics */}
                                            {project.metrics && (
                                                <div className="grid grid-cols-2 gap-3 mb-5 p-3.5 rounded-xl bg-black/30 border border-white/5">
                                                    {project.metrics.map((metric: any, idx: number) => (
                                                        <div key={idx}>
                                                            <p className="text-[var(--accent-primary)] font-bold text-base leading-none mb-1">{metric.value}</p>
                                                            <p className="text-[11px] text-gray-500 uppercase font-medium tracking-wide">{metric.label}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Tech stack */}
                                            <div className="flex flex-wrap gap-1.5 mb-5">
                                                {project.tech.slice(0, 5).map((tech, i) => (
                                                    <span key={i} className="text-[11px] text-gray-400 font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Footer / links */}
                                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-3">
                                                {(project as any).github ? (
                                                    <a
                                                        href={(project as any).github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`Ver código de ${project.title} en GitHub`}
                                                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-[var(--accent-primary)] hover:text-black border border-white/10 text-sm font-semibold text-white transition-all duration-300"
                                                    >
                                                        <Github size={16} /> Ver código
                                                    </a>
                                                ) : (
                                                    <span className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-medium text-gray-500">
                                                        Proyecto privado
                                                    </span>
                                                )}
                                                {(project as any).demo && (
                                                    <a
                                                        href={(project as any).demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`Ver demo de ${project.title}`}
                                                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[var(--accent-primary)] text-black text-sm font-bold hover:brightness-110 transition-all"
                                                    >
                                                        Demo <ArrowUpRight size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </Spotlight>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
                >
                    <p className="text-[var(--text-secondary)]">
                        Hay más en mi GitHub — hackathons, experimentos y herramientas.
                    </p>
                    <a
                        href={personalInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-primary)] text-black font-bold hover:gap-3 transition-all duration-300"
                    >
                        <Github size={18} />
                        Ver todos los repos
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
