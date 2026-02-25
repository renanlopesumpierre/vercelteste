import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiagnosticShuffler } from './components/DiagnosticShuffler';
import { TelemetryTypewriter } from './components/TelemetryTypewriter';
import { CursorProtocolScheduler } from './components/CursorProtocolScheduler';
import { Philosophy } from './components/Philosophy';
import { Protocol } from './components/Protocol';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Add lenis smooth scrolling if performance allows, 
    // or rely on native smooth scroll for simplicity
    document.documentElement.style.scrollBehavior = 'smooth';

    // Quick refresh of ScrollTrigger when components mount
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full font-sans antialiased text-text bg-background overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <main>
        <Hero />

        {/* Features Section Container */}
        <section id="features" className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-center items-center mb-16 relative z-10">
            <div className="font-mono text-sm tracking-widest text-primary/80 uppercase">
              Artefatos Funcionais
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <DiagnosticShuffler />
            <TelemetryTypewriter />
            <CursorProtocolScheduler />
          </div>
        </section>

        <Philosophy />

        <Protocol />
      </main>

      <Footer />
    </div>
  );
}

export default App;
