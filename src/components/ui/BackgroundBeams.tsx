import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
                className
            )}
        >
            <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl transform -skew-y-12 translate-y-20 opacity-50"></div>

            {/* Moving Beams */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0.5,
                        x: Math.random() * 1000 - 500,
                        y: -100,
                        rotate: -45,
                    }}
                    animate={{
                        y: [null, 1000],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                    className="absolute top-0 left-1/2 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-orange-500 to-transparent shadow-[0_0_20px_2px_rgba(249,115,22,0.3)]"
                />
            ))}
        </div>
    );
};
