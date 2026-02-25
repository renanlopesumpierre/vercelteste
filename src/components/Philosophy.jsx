import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background parallax
            gsap.to('.philo-bg', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Text reveal animation
            gsap.from('.philo-text', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.philo-content',
                    start: 'top 80%',
                },
            });

            gsap.from('.philo-accent', {
                opacity: 0,
                scale: 0.9,
                duration: 1.5,
                delay: 0.4,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.philo-content',
                    start: 'top 80%',
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="philosophy"
            className="relative min-h-[70dvh] w-full flex items-center justify-center py-32 overflow-hidden bg-background"
        >
            <div className="philo-content relative z-10 max-w-6xl w-full px-6 flex flex-col items-center text-center">

                {/* Reference Pill */}
                <div className="philo-text inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-xs font-mono font-medium tracking-widest uppercase mb-12 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-primary animate-pulse" />
                    Diferencial Arquitetural
                </div>

                {/* Main Headline */}
                <h2 className="philo-accent w-full max-w-4xl font-sans font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-text tracking-tight leading-[1.1] mb-10">
                    Construa, direcione e expanda <span className="text-primary text-glow">sistemas executáveis.</span>
                </h2>

                {/* Sub-description */}
                <div className="philo-text max-w-2xl">
                    <p className="font-sans text-base md:text-lg lg:text-xl text-text/60 font-medium tracking-wide leading-relaxed">
                        A maioria das plataformas foca em modelos. A Neocortex foca na orquestração: recupere o controle sobre a lógica, gargalos de dados e fluxos assíncronos da sua inteligência artificial.
                    </p>
                </div>

            </div>

            {/* Background Texture - Lighter, abstract gradients if needed, mostly clean per reference */}
            <div className="absolute inset-x-0 bottom-[-20%] h-[500px] w-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};
