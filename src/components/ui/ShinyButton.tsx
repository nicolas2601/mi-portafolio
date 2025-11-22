import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const ShinyButton = ({ children, className, href, ...props }: any) => {
    return (
        <motion.a
            href={href}
            {...props}
            className={cn(
                "relative rounded-full px-8 py-4 bg-black border border-white/10 overflow-hidden group cursor-pointer",
                className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="relative z-10 flex items-center gap-2 font-bold text-white group-hover:text-yellow-400 transition-colors">
                {children}
            </span>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

            {/* Gold Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 blur-xl -z-10" />
        </motion.a>
    );
};
