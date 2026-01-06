import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Code2 } from 'lucide-react';
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

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[var(--bg-primary)]">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    "fill-white/10 stroke-white/10"
                )}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/50 to-[var(--bg-primary)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] mb-8 backdrop-blur-md"
                        >
                            <Sparkles size={16} />
                            <span className="text-sm font-medium">Disponible para nuevos proyectos</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-bold text-[var(--text-primary)] leading-tight mb-6 font-space tracking-tight">
                            Hola, soy <br />
                            <DecryptedText text={personalInfo.nm} className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] via-amber-500 to-[var(--accent-secondary)]" />
                        </h1>

                        <p className="text-[var(--text-secondary)] text-xl md:text-2xl max-w-lg mb-10 leading-relaxed font-light">
                            {personalInfo.title}. Transformo ideas complejas en experiencias digitales <span className="text-[var(--text-primary)] font-medium">memorables</span>.
                        </p>

                        <div className="flex flex-wrap gap-6 relative z-30">
                             {/* Removed Magnet wrapper to test if it fixes the button bug. Often Magnet libs mess up click events. */}
                            <ShinyButton href="/projects" className="bg-[var(--accent-primary)] text-black hover:bg-amber-400 border-none z-30">
                                Ver Proyectos <ArrowRight size={20} />
                            </ShinyButton>

                            <Magnet padding={50} magnetStrength={3}>
                                <motion.a
                                    href="/Nicolas_Moreno_CV_v1.pdf"
                                    download
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold flex items-center gap-3 hover:bg-white/10 transition-colors backdrop-blur-sm"
                                >
                                    <span>Descargar CV</span>
                                    <Download size={20} />
                                </motion.a>
                            </Magnet>
                        </div>
                    </div>

                    {/* 3D Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring" }}
                        className="relative flex justify-center lg:justify-end perspective-1000"
                    >
                        <div className="relative w-[400px] h-[500px] group">
                            {/* Holographic Card Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 rounded-[40px] blur-xl group-hover:blur-2xl transition-all duration-500" />

                            <div className="relative w-full h-full bg-[var(--bg-secondary)]/80 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-12 preserve-3d">
                                <img
                                    src={personalInfo.avatar}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />

                                {/* Floating Badge - Updated content */}
                                <motion.div
                                    className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-[var(--accent-primary)] tracking-wider">ESTADO ACTUAL</span>
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    </div>
                                    <p className="text-xl font-bold text-white">Open to Work</p>
                                    <p className="text-sm text-gray-400 flex items-center gap-2">
                                        <Code2 size={14} />
                                        Desarrollador Full Stack
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}