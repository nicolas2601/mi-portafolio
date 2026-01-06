import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagnetProps {
    children: React.ReactNode;
    className?: string;
    padding?: number;
    disabled?: boolean;
    magnetStrength?: number;
}

export default function Magnet({
    children,
    className = "",
    padding = 100,
    disabled = false,
    magnetStrength = 2,
}: MagnetProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled || !ref.current) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            className={`relative inline-block ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            animate={{ x: x / magnetStrength, y: y / magnetStrength }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
