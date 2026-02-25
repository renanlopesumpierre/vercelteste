import React, { useState, useEffect } from 'react';

const MESSAGES = [
    "Inicializando camada de controle unificada...",
    "Carregando janela de contexto do GPT-4...",
    "Sincronizando memória do Claude 3 Opus...",
    "Executando orquestração paralela...",
    "Resolvendo dependências de tarefas entre modelos...",
    "Executando fluxo de trabalho...",
    "Tarefa concluída. Latência: 240ms."
];

export const TelemetryTypewriter = () => {
    const [text, setText] = useState('');
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentMessage = MESSAGES[messageIndex];

        if (charIndex < currentMessage.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + currentMessage[charIndex]);
                setCharIndex(c => c + 1);
            }, Math.random() * 50 + 30); // Random typing speed

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setText('');
                setCharIndex(0);
                setMessageIndex((messageIndex + 1) % MESSAGES.length);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, messageIndex]);

    return (
        <div className="glass-panel p-8 rounded-[2rem] h-[400px] flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 group-hover:text-primary transition-opacity duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="mb-8 relative z-10">
                <div className="flex items-center justify-between mb-2">
                    <div className="font-mono text-xs text-primary mb-2 tracking-wider uppercase">Recurso 02</div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-primary/70 bg-primary/10 px-2 py-1 rounded-sm border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        FEED AO VIVO
                    </div>
                </div>
                <h3 className="text-2xl font-sans font-bold text-text mb-2">Orquestração Multi-LLM</h3>
                <p className="text-text/60 text-sm leading-relaxed max-w-[240px]">
                    Execute tarefas paralelas em múltiplos modelos com uma camada de controle unificada.
                </p>
            </div>

            <div className="flex-1 mt-4 bg-[#0a0a0f] rounded-xl border border-slate p-4 relative overflow-hidden flex flex-col justify-end">
                <div className="font-mono text-xs text-primary/80 whitespace-pre-wrap leading-relaxed">
                    <span className="text-text/40 mr-2">{'>'}</span>
                    {text}
                    <span className="w-2 h-[1em] inline-block bg-primary align-middle ml-1 animate-pulse" />
                </div>
                {/* Code lines visual effect in background */}
                <div className="absolute inset-0 p-4 pointer-events-none opacity-20">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-2 w-full bg-slate rounded-full mb-3 opacity-20" />
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
    );
};
