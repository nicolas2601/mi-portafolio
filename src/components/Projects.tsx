import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Activity } from 'lucide-react';
import { projects } from '../data/info';
import Spotlight from './ui/Spotlight';

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-[var(--bg-primary)] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--accent-primary)] font-mono text-sm tracking-wider uppercase mb-2 block"
                    >
                        Portafolio Seleccionado
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-space"
                    >
                        Proyectos reales con <br />
                        <span className="text-white">impacto medible</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[var(--text-secondary)] text-lg max-w-2xl"
                    >
                        Sistemas que están en producción o son funcionales, resolviendo problemas reales.
                        No son solo ejercicios de código, son soluciones.
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Spotlight className="rounded-3xl h-full flex flex-col bg-[var(--bg-secondary)]/30 border border-white/10 overflow-hidden group hover:border-[var(--accent-primary)]/30 transition-all duration-300">
                                {/* Image Area */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)]/90 via-transparent to-transparent z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Type Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                                            {project.tech[0]} {/* Main Tech as badge */}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Metrics Grid */}
                                    {project.metrics && (
                                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-black/20 border border-white/5">
                                            {project.metrics.map((metric: any, idx: number) => (
                                                <div key={idx}>
                                                    <p className="text-[var(--accent-primary)] font-bold text-lg">{metric.value}</p>
                                                    <p className="text-xs text-gray-500 uppercase font-medium">{metric.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.slice(0, 4).map((tech, i) => (
                                            <span key={i} className="text-xs text-gray-400 font-mono">
                                                #{tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links Footer */}
                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                                        <div className="flex gap-4">
                                            {project.github && (
                                                <a href={project.github} aria-label={`Ver código fuente de ${project.title}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a href={project.demo} aria-label={`Ver demo en vivo de ${project.title}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>

                                        <a href={project.github} aria-label={`Ver detalles de ${project.title}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-[var(--accent-primary)] hover:translate-x-1 transition-transform">
                                            Ver Detalles <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </Spotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
