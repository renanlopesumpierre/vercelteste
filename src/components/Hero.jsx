import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MagneticButton } from './MagneticButton';
import { SplineBackground } from './SplineBackground';

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
            {/* Background Image / Pattern OR Spline 3D */}
            <SplineBackground
                sceneUrl="https://prod.spline.design/c06ozcenR9pt91-5/scene.splinecode"
                fallbackImageUrl="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop"
                className="absolute inset-0 z-0 bg-[#0a0f1c]" // Adjusting base to a very dark blue/black to match
            >
                {/* Removed gradient overlays that were washing out the Spline model's natural colors and lights */}
            </SplineBackground>

            <div className="relative z-10 max-w-5xl">
                <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    Sistema Ativo
                </div>

                <h1 className="flex flex-col mb-8 text-glow">
                    <span className="hero-element font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-text">
                        Cognição encontra
                    </span>
                    <span className="hero-element font-drama italic text-7xl md:text-9xl lg:text-[180px] leading-[0.9] text-primary/95 pr-8 mt-2 md:-ml-4">
                        Execução.
                    </span>
                </h1>

                <div className="hero-element max-w-xl text-lg md:text-xl font-sans text-text/70 leading-relaxed mb-10">
                    O NEOCORTEX é a camada operacional cognitiva unificada para criadores que projetam, orquestram e entregam sistemas de IA reais sem a bagunça de prompts.
                </div>

                <div className="hero-element flex flex-wrap items-center gap-6">
                    <MagneticButton href="#request-access" className="bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                        Solicitar acesso
                    </MagneticButton>
                    <a href="#architecture" className="font-mono text-sm tracking-widest text-text/50 hover:text-text transition-colors uppercase border-b border-text/20 pb-1 hover:border-text">
                        Ver Arquitetura
                    </a>
                </div>
            </div>
        </section>
    );
};
