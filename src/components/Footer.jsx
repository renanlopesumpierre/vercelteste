import React from 'react';
import { Terminal } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#08080c] pt-24 pb-12 rounded-t-[4rem] px-6 md:px-12 relative overflow-hidden">
            {/* Decorative top glow */}
            <div className="absolute top-0 left-1/2 -px-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 text-transparent" />
            <div className="absolute top-0 left-1/2 -px-1/2 w-1/2 h-24 bg-primary/10 blur-3xl rounded-full" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">

                {/* Brand & Purpose */}
                <div className="max-w-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <Terminal className="w-6 h-6 text-primary" />
                        <span className="font-sans font-bold tracking-tight text-text text-2xl">
                            NEOCORTEX
                        </span>
                    </div>
                    <p className="font-sans text-text/60 leading-relaxed text-sm mb-8">
                        A cognitive operating layer for builders who design and ship real AI systems.
                        Turn intent into executable structure.
                    </p>

                    {/* System Status Indicator */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                        </span>
                        <span className="font-mono text-xs font-semibold text-green-500/90 tracking-widest uppercase">
                            System Operational
                        </span>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="w-full md:w-auto grid grid-cols-2 gap-12 sm:gap-24 font-sans text-sm">
                    <div>
                        <h4 className="text-text font-semibold mb-6 tracking-wide">Infrastructure</h4>
                        <ul className="space-y-4 text-text/50">
                            <li><a href="#" className="hover:text-primary transition-colors">CLI Agents</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Orchestration</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-text font-semibold mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-4 text-text/50">
                            <li><a href="#" className="hover:text-primary transition-colors">Philosophy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Legal */}
            <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-slate/50 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text/40">
                <p>© 2026 Neocortex Systems. All execution rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-primary transition-colors">X (Twitter)</a>
                    <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
};
