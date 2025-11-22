import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-slate-950 text-center relative z-10">
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                <span>© {new Date().getFullYear()} Nicolas Moreno.</span>
                <span className="hidden sm:inline">Hecho con</span>
                <Heart size={14} className="text-orange-500 fill-orange-500 animate-pulse" />
                <span className="hidden sm:inline">y mucho café.</span>
            </div>
        </footer>
    );
}
