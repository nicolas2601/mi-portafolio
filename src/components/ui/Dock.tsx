import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Briefcase, Mail, Github, Linkedin } from 'lucide-react';

const navItems = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Sobre Mí', href: '/about', icon: User },
    { name: 'Proyectos', href: '/projects', icon: Briefcase },
    { name: 'Contacto', href: '/contact', icon: Mail },
];

const socialItems = [
    { name: 'GitHub', href: 'https://github.com/nicolas2601', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/nicolas-moreno-dev', icon: Linkedin },
];

function DockIcon({ mouseX, item }: { mouseX: any, item: any }) {
    const ref = React.useRef<HTMLAnchorElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            ref={ref}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{ width }}
            className="aspect-square rounded-full bg-[var(--bg-secondary)]/50 border border-white/10 backdrop-blur-md flex items-center justify-center relative group hover:bg-[var(--bg-secondary)]/80 transition-colors"
        >
            <motion.div
                className="text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors"
                style={{ width: useTransform(width, [40, 80], [20, 40]) }}
            >
                <item.icon className="w-full h-full" />
            </motion.div>

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 whitespace-nowrap pointer-events-none">
                {item.name}
            </span>
        </motion.a>
    );
}

export default function Dock() {
    const mouseX = useMotionValue(Infinity);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex items-end gap-4 px-4 py-3 rounded-2xl bg-[var(--bg-primary)]/40 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
                {navItems.map((item) => (
                    <DockIcon key={item.name} mouseX={mouseX} item={item} />
                ))}

                <div className="w-px h-8 bg-white/10 mx-2 self-center" />

                {socialItems.map((item) => (
                    <DockIcon key={item.name} mouseX={mouseX} item={item} />
                ))}
            </motion.div>
        </div>
    );
}
