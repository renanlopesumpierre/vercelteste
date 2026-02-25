import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MagneticButton } from './MagneticButton';

export const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background parallax
            gsap.to('.hero-bg', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Text animation entrance
            gsap.from('.hero-element', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                stagger: 0.15,
            });

            // Subtle glow pulse
            gsap.to('.hero-glow', {
                opacity: 0.8,
                scale: 1.1,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] w-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-24 overflow-hidden"
        >
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0">
                <div
                    className="hero-bg absolute inset-0 bg-cover bg-center brightness-[0.7] transform scale-110"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop')",
                        backgroundPosition: '50% 30%'
                    }}
                />
                {/* Soft abstract blue glow source */}
                <div className="hero-glow absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

                {/* Gradient overlays to text area */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-5xl">
                <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    System Active
                </div>

                <h1 className="flex flex-col mb-8 text-glow">
                    <span className="hero-element font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-text">
                        Cognition meets
                    </span>
                    <span className="hero-element font-drama italic text-7xl md:text-9xl lg:text-[180px] leading-[0.9] text-primary/95 pr-8 mt-2 md:-ml-4">
                        Execution.
                    </span>
                </h1>

                <div className="hero-element max-w-xl text-lg md:text-xl font-sans text-text/70 leading-relaxed mb-10">
                    NEOCORTEX is the unified cognitive operating layer for builders who design, orchestrate, and ship real AI systems without prompt soup.
                </div>

                <div className="hero-element flex flex-wrap items-center gap-6">
                    <MagneticButton href="#request-access" className="bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                        Solicitar acesso
                    </MagneticButton>
                    <a href="#architecture" className="font-mono text-sm tracking-widest text-text/50 hover:text-text transition-colors uppercase border-b border-text/20 pb-1 hover:border-text">
                        View Architecture
                    </a>
                </div>
            </div>
        </section>
    );
};
