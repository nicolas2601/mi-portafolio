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
                    <Spotlight className="rounded-3xl h-full flex flex-col">
                        {/* Image Overlay */}
                        <div className="relative h-48 overflow-hidden rounded-t-3xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Links Overlay */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-sm">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all"
                                    >
                                        <Github size={24} />
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all"
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col relative z-20">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.slice(0, 4).map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium text-orange-300 bg-orange-500/10 rounded-full border border-orange-500/20">
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 4 && (
                                    <span className="px-3 py-1 text-xs font-medium text-slate-500 bg-slate-800 rounded-full border border-slate-700">
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
