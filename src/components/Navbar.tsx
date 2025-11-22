import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';

const navItems = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Sobre Mí', href: '/about', icon: User },
    { name: 'Proyectos', href: '/projects', icon: Briefcase },
    { name: 'Contacto', href: '/contact', icon: Mail },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`mx-auto max-w-4xl rounded-full border border-white/10 bg-slate-950/50 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${isScrolled ? 'px-6 py-3' : 'px-8 py-4'
                        }`}>
                        <div className="flex items-center justify-between">
                            <a href="/" className="text-2xl font-bold font-space bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                                NM
                            </a>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center space-x-2">
                                {navItems.map((item) => {
                                    const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));

                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group overflow-hidden ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-white/10 rounded-full"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <span className="relative z-10">{item.name}</span>

                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-md" />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden text-slate-300 hover:text-white p-2"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-32 px-6 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col space-y-8">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center space-x-6 text-3xl font-bold text-slate-300 hover:text-white group"
                                >
                                    <span className="p-3 rounded-xl bg-white/5 group-hover:bg-orange-500/20 transition-colors text-orange-400">
                                        <item.icon size={32} />
                                    </span>
                                    <span className="font-space">{item.name}</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Decorative Background */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
