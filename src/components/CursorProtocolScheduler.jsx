import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const CursorProtocolScheduler = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1 });

            tl.to('.fake-cursor', { x: 50, y: 30, duration: 1, ease: 'power2.inOut' })
                .to('.fake-cursor', { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 })
                .to('.day-cell-3', { backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgba(59, 130, 246, 0.8)', duration: 0.2 }, '-=0.1')
                .to('.fake-cursor', { x: 140, y: 90, duration: 1, ease: 'power2.inOut', delay: 0.5 })
                .to('.fake-cursor', { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 })
                .to('.save-btn', { backgroundColor: 'rgba(59, 130, 246, 0.8)', color: '#fff', scale: 1.05, duration: 0.2 }, '-=0.1')
                .to('.save-btn', { scale: 1, duration: 0.1 })
                .to('.fake-cursor', { x: 0, y: 0, opacity: 0, duration: 0.5, ease: 'power2.in', delay: 1 })
                .to('.day-cell-3', { backgroundColor: 'transparent', borderColor: 'rgba(42, 42, 53, 0.5)', duration: 0.2 }, '-=0.5')
                .to('.save-btn', { backgroundColor: 'transparent', color: 'rgba(250, 248, 245, 0.6)', duration: 0.2 }, '-=0.5')
                .set('.fake-cursor', { opacity: 1, delay: 1 });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div ref={containerRef} className="glass-panel p-8 rounded-[2rem] h-[400px] flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 group-hover:text-primary transition-opacity duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="mb-8 relative z-10">
                <div className="font-mono text-xs text-primary mb-2 tracking-wider uppercase">Feature 03</div>
                <h3 className="text-2xl font-sans font-bold text-text mb-2">Fail-Safe Execution</h3>
                <p className="text-text/60 text-sm leading-relaxed max-w-[240px]">
                    Error recovery, consistency protocols, and token-efficient workflows.
                </p>
            </div>

            <div className="flex-1 mt-4 relative bg-[#0a0a0f] rounded-xl border border-slate p-6">
                <div className="flex justify-between mb-4">
                    <div className="font-mono text-xs text-text/80">Protocol Timeline</div>
                    <div className="font-mono text-xs text-primary">v2.4.1</div>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-6 relative z-10">
                    {days.map((day, i) => (
                        <div
                            key={i}
                            className={`day-cell-${i} aspect-square rounded-md border border-slate/50 flex items-center justify-center font-mono text-[10px] text-text/50 transition-colors`}
                        >
                            {day}
                        </div>
                    ))}
                </div>

                <div className="flex justify-end relative z-10">
                    <button className="save-btn px-4 py-1.5 rounded bg-transparent border border-primary/30 text-text/60 text-[10px] font-mono transition-all">
                        EXECUTE FLOW
                    </button>
                </div>

                {/* Animated Custom Cursor */}
                <div className="fake-cursor absolute top-0 left-0 z-20 pointer-events-none" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.42c.45 0 .67-.54.35-.85L6.35 2.85a.5.5 0 00-.85.35z" fill="#FAF8F5" stroke="#0D0D12" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
