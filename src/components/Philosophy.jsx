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
            className="relative min-h-[90dvh] w-full flex items-center justify-center py-32 overflow-hidden bg-background"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div
                    className="philo-bg absolute inset-[-10%] bg-cover bg-center mix-blend-screen"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop')"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
            </div>

            <div className="philo-content relative z-10 max-w-6xl w-full px-6 flex flex-col items-center text-center">
                <div className="philo-text mb-12 max-w-2xl">
                    <p className="font-sans text-xl md:text-2xl text-text/50 font-medium tracking-wide">
                        A maioria das plataformas de IA foca em: sopa de prompts.
                    </p>
                </div>

                <div className="philo-text flex flex-col items-center">
                    <p className="font-sans text-2xl md:text-3xl font-bold text-text mb-4">
                        Nós focamos em:
                    </p>
                    <h2 className="philo-accent font-drama italic text-5xl md:text-7xl lg:text-9xl text-primary text-glow leading-[1.1]">
                        estrutura de sistema executável.
                    </h2>
                </div>
            </div>
        </section>
    );
};
