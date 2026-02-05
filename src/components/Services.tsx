import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap, Rocket, Check, Bot, Server, Globe } from 'lucide-react';
import Spotlight from './ui/Spotlight';

const services = [
    {
        title: "Backend & APIs",
        description: "Diseño arquitecturas robustas que soportan tu operación sin caerse.",
        icon: Terminal,
        features: [
            "APIs REST escalables",
            "Microservicios con Docker",
            "Integraciones complejas",
            "Bases de datos optimizadas"
        ],
        highlight: false
    },
    {
        title: "Automatización de Procesos",
        description: "Tu negocio funcionando 24/7. Menos trabajo manual, más ventas.",
        icon: Zap,
        features: [
            "Bots de WhatsApp/Telegram",
            "Flujos automáticos (n8n)",
            "Sistemas de reservas",
            "Pagos automatizados"
        ],
        highlight: true,
        badge: "Especialidad"
    },
    {
        title: "Sistemas Fullstack",
        description: "Plataformas web completas, desde el servidor hasta el móvil.",
        icon: Rocket,
        features: [
            "Paneles Administrativos",
            "Dashboards React/Next.js",
            "Apps Móviles (React Native)",
            "Deploy en Producción"
        ],
        highlight: false
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--accent-primary)]/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--accent-primary)] font-mono text-sm tracking-wider uppercase mb-2 block"
                    >
                        Lo que hago
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-space"
                    >
                        Construyo sistemas web completos, <br />
                        <span className="text-gray-500">no solo interfaces</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[var(--text-secondary)] text-lg leading-relaxed"
                    >
                        Desarrollo soluciones end-to-end que automatizan tus procesos manuales <br className="hidden md:block" />
                        y permiten que tu operación escale sin aumentar costos.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="relative"
                        >
                            <Spotlight
                                className={`
                                    h-full flex flex-col p-8 rounded-3xl transition-all duration-300 border
                                    ${service.highlight
                                        ? 'bg-[var(--bg-secondary)]/50 border-[var(--accent-primary)]/50 shadow-[0_0_30px_rgba(251,191,36,0.1)] md:-translate-y-4 z-10'
                                        : 'bg-[var(--bg-secondary)]/30 border-white/5 hover:border-white/10 hover:bg-[var(--bg-secondary)]/50'
                                    }
                                `}
                            >
                                {service.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-[var(--accent-primary)] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            {service.badge}
                                        </span>
                                    </div>
                                )}

                                <div className={`
                                    w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white
                                    ${service.highlight ? 'bg-[var(--accent-primary)] text-black' : 'bg-white/5 border border-white/10'}
                                `}>
                                    <service.icon size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{service.title}</h3>

                                <p className="text-[var(--text-secondary)] mb-8 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mt-auto">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check className={`shrink-0 w-5 h-5 ${service.highlight ? 'text-[var(--accent-primary)]' : 'text-gray-500'}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Spotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
