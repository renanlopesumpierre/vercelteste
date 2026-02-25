import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
    {
        step: "01",
        title: "Structural Intent",
        desc: "Define the underlying architecture before code generation. No hallucination, just logic.",
        Visual: () => (
            <svg viewBox="0 0 100 100" className="w-full h-full border border-primary/20 rounded-full animate-spin-slow">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-primary/60" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                <polygon points="50,15 65,80 35,80" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
            </svg>
        )
    },
    {
        step: "02",
        title: "Parallel Execution",
        desc: "Orchestrate multiple agents concurrently across isolated execution contexts.",
        Visual: () => (
            <div className="relative w-full h-full overflow-hidden border border-primary/20 rounded-xl bg-[#0a0a0f]">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="bg-primary/20 rounded-sm" />
                    ))}
                </div>
                <div className="absolute top-0 bottom-0 left-0 w-2 bg-primary/80 blur-sm shadow-[0_0_15px_#3b82f6] animate-scan" style={{ animation: 'scan 2.5s infinite linear' }} />
                <style>{`@keyframes scan { 0% { left: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { left: 100%; opacity: 0; } }`}</style>
            </div>
        )
    },
    {
        step: "03",
        title: "Continuous Validation",
        desc: "Real-time state verification ensures every module aligns with systemic constraints.",
        Visual: () => (
            <svg viewBox="0 0 200 100" className="w-full h-full stroke-primary fill-none stroke-2">
                <path
                    d="M 0 50 L 50 50 L 65 20 L 85 80 L 115 10 L 135 70 L 150 50 L 200 50"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    className="animate-pulse-waveform"
                    style={{ animation: 'drawWave 3s infinite ease-in-out' }}
                />
                <style>{`@keyframes drawWave { 0% { stroke-dashoffset: 400; } 50% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -400; } }`}</style>
            </svg>
        )
    }
];

export const Protocol = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, index) => {
                if (index === cards.length - 1) return; // Don't animate the last card out

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    animation: gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: 'blur(20px)',
                        ease: 'none'
                    }),
                    scrub: true,
                });
            });

            // Pin the very last card briefly to allow scrolling past
            ScrollTrigger.create({
                trigger: cards[cards.length - 1],
                start: "top top",
                end: "+=50%",
                pin: true,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="relative w-full bg-background pt-24 pb-48">
            {/* Section header */}
            <div className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
                <div className="font-mono text-sm tracking-widest text-primary mb-4 uppercase">
                    System Logic
                </div>
                <h2 className="text-4xl md:text-6xl font-sans font-bold text-text">
                    Core Protocol
                </h2>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative">
                {protocols.map((proto, index) => (
                    <div
                        key={index}
                        className="protocol-card min-h-[60vh] w-full flex items-center justify-center mb-12"
                        style={{ zIndex: index }}
                    >
                        <div className="w-full glass-panel border border-slate/40 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-24 shadow-2xl relative overflow-hidden bg-background">

                            {/* Content */}
                            <div className="flex-1 z-10">
                                <div className="font-mono text-5xl font-light text-primary/30 mb-6 font-mono">{proto.step}</div>
                                <h3 className="text-3xl md:text-4xl font-sans font-bold text-text mb-4 mt-2">
                                    {proto.title}
                                </h3>
                                <p className="text-lg text-text/60 leading-relaxed font-sans mt-4 max-w-sm">
                                    {proto.desc}
                                </p>
                            </div>

                            {/* Visualization Area */}
                            <div className="w-full md:w-[40%] aspect-square relative z-10 flex items-center justify-center p-8">
                                <proto.Visual />
                                {/* subtle background glow behind visual */}
                                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl -z-10" />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
