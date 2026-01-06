import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/info';

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
        reset();
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
            {/* Decorative Background for Contact Section */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-[var(--accent-primary)]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[var(--accent-secondary)]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Contact Info */}
            <div className="space-y-10 relative z-10">
                <div className="bg-[var(--bg-secondary)]/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 font-space">Información de Contacto</h3>

                    <div className="space-y-6">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group">
                            <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium break-all">{personalInfo.email}</p>
                            </div>
                        </a>

                        <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group">
                            <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Teléfono</p>
                                <p className="font-medium">{personalInfo.phone}</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 text-[var(--text-secondary)] group">
                            <div className="p-4 bg-white/5 rounded-2xl">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Ubicación</p>
                                <p className="font-medium">{personalInfo.location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 p-6 bg-[var(--bg-secondary)]/50 backdrop-blur-xl border border-white/5 rounded-3xl hover:border-[var(--accent-primary)]/50 transition-colors flex flex-col items-center gap-3 group">
                        <Linkedin size={32} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                        <span className="text-sm font-medium text-gray-300">LinkedIn</span>
                    </a>
                    <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex-1 p-6 bg-[var(--bg-secondary)]/50 backdrop-blur-xl border border-white/5 rounded-3xl hover:border-[var(--accent-primary)]/50 transition-colors flex flex-col items-center gap-3 group">
                        <Github size={32} className="text-gray-400 group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium text-gray-300">GitHub</span>
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-xl p-8 md:p-10 rounded-[40px] border border-white/10 shadow-2xl relative z-10">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 font-space">Envíame un mensaje</h3>
                <p className="text-[var(--text-secondary)] mb-8">Responderé lo antes posible.</p>

                {isSubmitSuccessful ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                    >
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle size={40} className="text-green-500" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                        <p className="text-gray-400">Gracias por contactarme. Te responderé pronto.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nombre</label>
                            <input
                                id="name"
                                autoComplete="name"
                                {...register('name', { required: 'El nombre es requerido' })}
                                className={`w-full px-6 py-4 bg-black/50 border rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-[var(--accent-primary)] focus:ring-[var(--accent-primary)]/20'
                                    }`}
                                placeholder="Tu nombre"
                            />
                            {errors.name && (
                                <span className="flex items-center gap-1 text-red-400 text-xs ml-1">
                                    <AlertCircle size={12} /> {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                            <input
                                id="email"
                                autoComplete="email"
                                {...register('email', {
                                    required: 'El email es requerido',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Email inválido"
                                    }
                                })}
                                className={`w-full px-6 py-4 bg-black/50 border rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-[var(--accent-primary)] focus:ring-[var(--accent-primary)]/20'
                                    }`}
                                placeholder="tu@email.com"
                            />
                            {errors.email && (
                                <span className="flex items-center gap-1 text-red-400 text-xs ml-1">
                                    <AlertCircle size={12} /> {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Mensaje</label>
                            <textarea
                                id="message"
                                autoComplete="off"
                                {...register('message', { required: 'El mensaje es requerido' })}
                                rows={4}
                                className={`w-full px-6 py-4 bg-black/50 border rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-[var(--accent-primary)] focus:ring-[var(--accent-primary)]/20'
                                    }`}
                                placeholder="Cuéntame sobre tu proyecto..."
                            />
                            {errors.message && (
                                <span className="flex items-center gap-1 text-red-400 text-xs ml-1">
                                    <AlertCircle size={12} /> {errors.message.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Enviar Mensaje</span>
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}