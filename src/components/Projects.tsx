import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/info';
import Spotlight from './ui/Spotlight';

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Spotlight className="rounded-3xl h-full flex flex-col bg-[var(--bg-secondary)] border-white/5">
                        {/* Image Overlay */}
                        <div className="relative h-48 overflow-hidden rounded-t-3xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Links Overlay */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 rounded-full text-white hover:bg-[var(--accent-primary)] hover:text-black hover:scale-110 transition-all"
                                    >
                                        <Github size={24} />
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 rounded-full text-white hover:bg-[var(--accent-primary)] hover:text-black hover:scale-110 transition-all"
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col relative z-20">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.slice(0, 4).map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 rounded-full border border-[var(--accent-primary)]/20">
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 4 && (
                                    <span className="px-3 py-1 text-xs font-medium text-[var(--text-secondary)] bg-white/5 rounded-full border border-white/10">
                                        +{project.tech.length - 4}
                                    </span>
                                )}
                            </div>
                        </div>
                    </Spotlight>
                </motion.div>
            ))}
        </div>
    );
}
