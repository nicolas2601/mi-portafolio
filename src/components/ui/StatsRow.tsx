import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const StatItem = ({ label, value, suffix = "", prefix = "" }: { label: string, value: number, suffix?: string, prefix?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
    const [displayValue, setDisplayValue] = React.useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-6 border-r last:border-r-0 border-white/10">
            <span className="text-4xl md:text-5xl font-bold text-white font-space mb-2">
                {prefix}{displayValue}{suffix}
            </span>
            <span className="text-sm text-gray-400 uppercase tracking-widest font-medium text-center">
                {label}
            </span>
        </div>
    );
};

export const StatsRow = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 w-full border-y border-white/10 bg-black/50 backdrop-blur-sm mb-20">
            <StatItem label="Meses de Exp." value={6} suffix="+" />
            <StatItem label="Proyectos" value={10} suffix="+" />
            <StatItem label="Certificaciones" value={6} suffix="" />
        </div>
    );
};