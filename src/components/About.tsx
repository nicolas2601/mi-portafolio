import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { personalInfo, workExperience, skills } from '../data/info';
import { StatsRow } from './ui/StatsRow';

export default function About() {
    return (
        <section className="min-h-screen pt-32 pb-20 relative bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-space tracking-tighter">
                        Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Mí</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Arquitecto de software y desarrollador apasionado por crear soluciones digitales escalables y elegantes.
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h3>
                                    <p className="text-yellow-500 font-medium">{personalInfo.title}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center">
                                {[
                                    { icon: Github, href: "https://github.com/nicolas2601" },
                                    { icon: Linkedin, href: "https://linkedin.com/in/nicolas-moreno-dev" },
                                    { icon: Mail, href: "mailto:nicolasmoreno2601@gmail.com" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
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
                            <h3 className="text-3xl font-bold text-white mb-6 font-space">Mi Historia</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {personalInfo.bio}
                            </p>
                        </div>

                        {/* Experience Timeline */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-10 font-space">Trayectoria Profesional</h3>
                            <div className="space-y-12 border-l border-white/10 ml-3 pl-10 relative">
                                {workExperience.map((job, index) => (
                                    <div key={index} className="relative group">
                                        {/* Dot */}
                                        <div className="absolute -left-[45px] top-2 w-3 h-3 rounded-full bg-gray-800 border border-gray-600 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-colors duration-300" />

                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                            <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                                {job.position}
                                            </h4>
                                            <span className="text-sm text-gray-500 font-mono">{job.period}</span>
                                        </div>

                                        <p className="text-lg text-gray-400 mb-4">{job.company}</p>
                                        <p className="text-gray-400 leading-relaxed text-sm">{job.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-10 font-space">Stack Tecnológico</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-yellow-500/30 transition-colors">
                                        <h4 className="text-lg font-bold text-white mb-4 capitalize">
                                            {category.replace(/([A-Z])/g, ' $1').trim()}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {Array.isArray(items) && items.map((skill: any) => (
                                                <span
                                                    key={skill.name}
                                                    className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-sm text-gray-300"
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
