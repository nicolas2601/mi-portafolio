import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import AnimatedGridPattern from './ui/AnimatedGridPattern';

interface PageHeroProps {
    title: string;
    subtitle: string;
    variant?: 'default' | 'services' | 'projects' | 'about' | 'contact';
}

export default function PageHero({ title, subtitle, variant = 'default' }: PageHeroProps) {
    const variants = {
        default: { color: 'var(--accent-primary)', gradient: 'from-[var(--accent-primary)] via-amber-500 to-[var(--accent-secondary)]' },
        services: { color: '#3b82f6', gradient: 'from-blue-400 via-cyan-400 to-teal-400' },
        projects: { color: '#8b5cf6', gradient: 'from-violet-400 via-purple-400 to-fuchsia-400' },
        about: { color: '#10b981', gradient: 'from-emerald-400 via-green-400 to-lime-400' },
        contact: { color: '#f43f5e', gradient: 'from-rose-400 via-red-400 to-orange-400' },
    };

    const currentVariant = variants[variant] || variants.default;

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--bg-primary)]">
            <AnimatedGridPattern
                numSquares={20}
                maxOpacity={0.05}
                duration={3}
                repeatDelay={1}
                className="inset-x-0 inset-y-[-20%] h-[150%] skew-y-6 stroke-white/5"
            />

            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[${currentVariant.color}]/10 rounded-full blur-[100px] pointer-events-none`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentVariant.gradient}`}>
                            {title}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-light">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
