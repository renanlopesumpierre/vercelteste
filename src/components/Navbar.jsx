import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from './MagneticButton';
import { Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -50',
                onUpdate: (self) => {
                    setIsScrolled(self.direction === 1 || self.scroll() > 50);
                },
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
            <nav
                ref={navRef}
                className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] w-full max-w-5xl ${isScrolled
                        ? 'glass-panel shadow-lg shadow-black/20 translate-y-0'
                        : 'bg-transparent border-transparent translate-y-2'
                    }`}
            >
                <div className="flex items-center gap-3">
                    <Terminal className="w-6 h-6 text-primary" />
                    <span className="font-sans font-bold tracking-tight text-text text-lg">
                        NEOCORTEX
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-text/80">
                    <a href="#features" className="hover:text-primary transition-colors">Architecture</a>
                    <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
                    <a href="#protocol" className="hover:text-primary transition-colors">Protocol</a>
                </div>

                <div className="flex items-center gap-4">
                    <a href="#login" className="hidden md:block text-sm font-medium text-text/80 hover:text-white transition-colors">
                        Sign In
                    </a>
                    <MagneticButton href="#request-access">
                        Solicitar acesso
                    </MagneticButton>
                </div>
            </nav>
        </div>
    );
};
