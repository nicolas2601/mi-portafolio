import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Code2, Terminal, Database, Cpu } from 'lucide-react';
import { personalInfo } from '../data/info';
import AnimatedGridPattern from './ui/AnimatedGridPattern';
import { DecryptedText } from './ui/DecryptedText';
import { ShinyButton } from './ui/ShinyButton';
import Magnet from './ui/Magnet';
import { cn } from '../utils/cn';

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const techBadges = [
        "Django", "NestJS", "React", "Docker", "PostgreSQL", "n8n"
    ];

    return (
        <section
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-20 bg-[var(--bg-primary)]"
            aria-label="Introducción al portafolio de Nicolás Moreno"
        >
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    "fill-white/10 stroke-white/10"
                )}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/50 to-[var(--bg-primary)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="relative z-20 text-center lg:text-left">
                        {/* Availability Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] mb-8 backdrop-blur-md hover:bg-[var(--accent-primary)]/20 transition-colors cursor-default"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium tracking-wide">Disponible para trabajar</span>
                        </motion.div>

                        {/* Main Heading H1 */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] leading-[1.1] mb-6 font-space tracking-tight">
                            Desarrollador de Software y <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] via-amber-500 to-[var(--accent-secondary)]">
                                Automatización
                            </span>
                            <br /> en Bucaramanga
                        </h1>

                        {/* Description / Subhheading H2 */}
                        <h2 className="text-[var(--text-secondary)] text-lg md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
                            Transformo procesos manuales en sistemas web automatizados.
                            Backend Developer especializado en <strong className="text-white font-medium">Django & NestJS</strong> que construye infraestructuras reales, no solo interfaces.
                        </h2>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10 opacity-90">
                            {techBadges.map((badge, index) => (
                                <motion.span
                                    key={badge}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + (index * 0.05) }}
                                    className="px-3 py-1 text-xs md:text-sm font-mono text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 rounded-md"
                                >
                                    {badge}
                                </motion.span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-30">
                            <ShinyButton href="/contact" className="bg-[var(--accent-primary)] text-black hover:bg-amber-400 border-none px-8 py-4 text-base font-bold shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-shadow">
                                Automatizar mi Negocio
                            </ShinyButton>

                            <Magnet padding={50} magnetStrength={3}>
                                <motion.a
                                    href="/projects" // Changed to internal link for "Ver Proyectos" as requested
                                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors backdrop-blur-sm w-full sm:w-auto"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Ver Proyectos Reales <ArrowRight size={18} />
                                </motion.a>
                            </Magnet>
                        </div>
                    </div>

                    {/* Visual Content / Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative hidden lg:flex justify-end items-center"
                    >
                        {/* Abstract Background Shapes behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-primary)]/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative w-[400px] h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-[var(--bg-secondary)]/30 backdrop-blur-sm shadow-2xl group">
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                            <img
                                src={personalInfo.avatar}
                                alt={`Foto de perfil de ${personalInfo.name} - Desarrollador Backend`}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />

                            {/* Floating Tech Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 right-8 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 z-20"
                            >
                                <Terminal className="text-[var(--accent-primary)]" size={24} />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-32 left-8 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 z-20"
                            >
                                <Database className="text-blue-400" size={24} />
                            </motion.div>

                            {/* Info Card at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20">
                                <p className="text-[var(--accent-primary)] font-mono text-sm mb-1">Based in Colombia</p>
                                <h3 className="text-white text-xl font-bold">Nicolas Moreno</h3>
                                <p className="text-gray-400 text-sm">Ingeniero de Sistemas (7° Sem)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}