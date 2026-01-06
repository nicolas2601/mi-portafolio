import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, BadgeCheck } from 'lucide-react';
import { personalInfo, workExperience, skills, certifications } from '../data/info';
import { StatsRow } from './ui/StatsRow';

export default function About() {
    return (
        <section className="min-h-screen pt-32 pb-20 relative bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-6 font-space tracking-tighter">
                        Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-amber-500">Mí</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg font-light">
                        {personalInfo.title} apasionado por crear soluciones digitales escalables y elegantes.
                    </p>
                </motion.div>

                {/* Stats Row */}
                <StatsRow />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Sticky Profile */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 space-y-8">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
                                <img
                                    src={personalInfo.avatar}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h3>
                                    <p className="text-[var(--accent-primary)] font-medium">{personalInfo.title}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center">
                                <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-[var(--accent-primary)] hover:text-black hover:border-[var(--accent-primary)] transition-all duration-300">
                                    <Github size={20} />
                                </a>
                                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-[var(--accent-primary)] hover:text-black hover:border-[var(--accent-primary)] transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href={`mailto:${personalInfo.email}`} className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-[var(--accent-primary)] hover:text-black hover:border-[var(--accent-primary)] transition-all duration-300">
                                    <Mail size={20} />
                                </a>
                            </div>

                            <a
                                href="/Nicolas_Moreno_CV_v1.pdf"
                                download
                                className="block w-full py-4 text-center rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-8 space-y-20">

                        {/* Bio */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6 font-space">Mi Historia</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                                {personalInfo.bio}
                            </p>
                        </div>

                        {/* Experience Timeline */}
                        <div>
                            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-space">Trayectoria Profesional</h3>
                            <div className="space-y-12 border-l border-white/10 ml-3 pl-10 relative">
                                {workExperience.map((job, index) => (
                                    <div key={index} className="relative group">
                                        {/* Dot */}
                                        <div className="absolute -left-[45px] top-2 w-3 h-3 rounded-full bg-[var(--bg-secondary)] border border-gray-600 group-hover:bg-[var(--accent-primary)] group-hover:border-[var(--accent-primary)] transition-colors duration-300" />

                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                            <h4 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                                {job.position}
                                            </h4>
                                            <span className="text-sm text-gray-500 font-mono">{job.period}</span>
                                        </div>

                                        <p className="text-lg text-[var(--text-secondary)] mb-4">{job.company}</p>
                                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{job.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-space">Certificaciones</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-primary)]/50 transition-colors">
                                        <div className="p-3 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] rounded-lg">
                                            <BadgeCheck size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg leading-tight mb-1">{cert.name}</h4>
                                            <p className="text-sm text-gray-400">{cert.issuer}</p>
                                            <p className="text-xs text-[var(--accent-primary)] mt-2">{cert.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div>
                            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-10 font-space">Stack Tecnológico</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[var(--accent-primary)]/30 transition-colors">
                                        <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4 capitalize">
                                            {category.replace(/([A-Z])/g, ' $1').trim()}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {Array.isArray(items) && items.map((skill: any, idx: number) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-sm text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-primary)]/50 transition-colors"
                                                >
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}