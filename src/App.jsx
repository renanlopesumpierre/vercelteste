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
import { AuroraBackground } from './components/ui/aurora-background';
import { motion } from 'framer-motion';

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

      <main className="relative z-10 w-full min-h-screen">
        <Hero />

        {/* Features Section Container */}
        <AuroraBackground
          className="relative w-full py-24 flex-col gap-0 items-center justify-start h-auto !bg-transparent"
          showRadialGradient={true}
        >
          <section id="features" className="relative w-full px-6 md:px-12 max-w-7xl mx-auto z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center items-center mb-16 relative z-10"
            >
              <div className="font-mono text-sm tracking-widest text-primary/80 uppercase">
                Artefatos Funcionais
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <DiagnosticShuffler />
              <TelemetryTypewriter />
              <CursorProtocolScheduler />
            </div>
          </section>
        </AuroraBackground>

        <Philosophy />

        <Protocol />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
