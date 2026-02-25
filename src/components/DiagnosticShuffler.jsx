import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DiagnosticShuffler = () => {
    const containerRef = useRef(null);
    const [cards, setCards] = useState([
        { id: 1, label: 'Topologia do Sistema', status: 'Otimizado' },
        { id: 2, label: 'Distribuição de Nós', status: 'Equilibrado' },
        { id: 3, label: 'Interpretador de Intenção', status: 'Ativo' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="glass-panel p-8 rounded-[2rem] h-[400px] flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 group-hover:text-primary transition-opacity duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="mb-8">
                <div className="font-mono text-xs text-primary mb-2 tracking-wider uppercase">Recurso 01</div>
                <h3 className="text-2xl font-sans font-bold text-text mb-2">CLI Focada em Arquitetura</h3>
                <p className="text-text/60 text-sm leading-relaxed max-w-[240px]">
                    Transforme intenção em estrutura de sistema executável, não em sopa de prompts.
                </p>
            </div>

            <div className="relative flex-1 mt-4">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="absolute left-0 right-0 p-4 rounded-xl border border-slate/50 bg-[#16161E] shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex justify-between items-center"
                        style={{
                            top: `${index * 24}px`,
                            scale: 1 - index * 0.05,
                            opacity: 1 - index * 0.2,
                            zIndex: 10 - index,
                        }}
                    >
                        <span className="font-mono text-xs text-text/80">{card.label}</span>
                        <span className="flex items-center gap-2 font-mono text-xs text-primary">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            {card.status}
                        </span>
                    </div>
                ))}
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
    );
};
