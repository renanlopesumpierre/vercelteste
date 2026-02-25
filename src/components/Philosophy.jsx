import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { motion } from 'framer-motion';
import { EtheralShadow } from './ui/etheral-shadow';

export const Philosophy = () => {
    const sectionRef = useRef(null);

    // Keep GSAP for parallax and complex custom scroll triggers if needed, 
    // but we will use Framer Motion for the elegant entrance animations of the text.
    useEffect(() => {
        const ctx = gsap.context(() => {
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="philosophy"
            className="relative min-h-[70dvh] w-full flex items-center justify-center py-32 bg-background overflow-hidden"
        >
            {/* Embedded Etheral Shadow Background */}
            <div className="absolute inset-0 z-0">
                <EtheralShadow
                    animation={{ scale: 100, speed: 90 }}
                    noise={{ opacity: 1, scale: 1.2 }}
                    sizing="fill"
                >
                    <></>
                </EtheralShadow>

                {/* Top and Bottom Gradient Fades to blend Ethereal Shadow smoothly with the sections above and below */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none z-10" />
            </div>

            <div className="philo-content relative z-10 max-w-6xl w-full px-6 flex flex-col items-center text-center">

                {/* Reference Pill */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-xs font-mono font-medium tracking-widest uppercase mb-12 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-primary animate-pulse" />
                    Diferencial Arquitetural
                </motion.div>

                {/* Main Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="w-full max-w-4xl font-sans font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-text tracking-tight leading-[1.1] mb-10"
                >
                    Construa, direcione e expanda <span className="text-primary text-glow">sistemas executáveis.</span>
                </motion.h2>

                {/* Sub-description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <p className="font-sans text-base md:text-lg lg:text-xl text-text/60 font-medium tracking-wide leading-relaxed">
                        A maioria das plataformas foca em modelos. A Neocortex foca na orquestração: recupere o controle sobre a lógica, gargalos de dados e fluxos assíncronos da sua inteligência artificial.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};
