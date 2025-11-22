import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { workExperience } from '../data/info';

export default function ExperienceTimeline() {
    return (
        <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent transform md:-translate-x-1/2" />

            <div className="space-y-12">
                {workExperience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-32px] md:left-1/2 top-0 w-16 h-16 flex items-center justify-center transform md:-translate-x-1/2">
                            <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-black shadow-[0_0_20px_rgba(168,85,247,0.5)] z-10" />
                        </div>

                        {/* Content Card */}
                        <div className="flex-1">
                            <div className={`group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                }`}>
                                {/* Hover Glow */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-xl -z-10" />

                                <div className={`flex items-center gap-3 mb-4 text-purple-400 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                    }`}>
                                    <Briefcase size={20} />
                                    <h3 className="text-xl font-bold text-white">{job.position}</h3>
                                </div>

                                <h4 className="text-2xl font-bold text-gray-200 mb-2">{job.company}</h4>

                                <div className={`flex flex-wrap gap-4 text-sm text-gray-400 mb-6 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                    }`}>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {job.period}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        {job.location}
                                    </span>
                                </div>

                                <p className="text-gray-300 leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                        </div>

                        {/* Empty Space for Grid Layout */}
                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
