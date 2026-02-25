import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const MagneticButton = ({ children, className = '', onClick, href }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const ctx = gsap.context(() => {
            button.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = button.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) * 0.3;
                const y = (e.clientY - top - height / 2) * 0.3;

                gsap.to(button, {
                    x,
                    y,
                    duration: 0.6,
                    ease: 'power3.out',
                });
            });

            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.3)',
                });
            });
        }, button);

        return () => ctx.revert();
    }, []);

    const baseClasses = `
    relative overflow-hidden inline-flex items-center justify-center 
    px-6 py-3 rounded-full font-mono text-sm font-medium transition-all 
    duration-300 hover:-translate-y-[1px] group ${className}
  `;

    const content = (
        <>
            <span className="relative z-10">{children}</span>
            <span className="absolute inset-0 z-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-full"></span>
        </>
    );

    if (href) {
        return (
            <a ref={buttonRef} href={href} className={baseClasses}>
                {content}
            </a>
        );
    }

    return (
        <button ref={buttonRef} onClick={onClick} className={baseClasses}>
            {content}
        </button>
    );
};
