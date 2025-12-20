import React from 'react';
import Button from './ui/Button';
import { PlayCircle } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { LogoCloud } from './ui/logo-cloud-4';

const logos = [
  { src: "/brands/avit-logo.png", alt: "AVIT College" },
  { src: "/brands/gaadi-bazaar-logo.png", alt: "Gaadi Bazaar" },
  { src: "/brands/spa-motors-logo.png", alt: "SPA Motors" },
  { src: "/brands/design-template-hub-logo.png", alt: "Design Template Hub" },
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 pb-16 md:pt-32 md:pb-20 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-purple-900/40 via-purple-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">

        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-medium text-purple-300 mb-4 md:mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Accepting New Clients for 2025
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            Transform Your Brand <br className="hidden sm:block" />
            <span className="text-gradient">Into a Market Leader</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-6 md:mb-10 leading-relaxed px-4">
            Full-service digital agency delivering cinema-quality video, marketing dominance, and AI-powered systems that drive real business growth.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 sm:px-0">
            <Button size="lg" variant="secondary" fullWidth className="sm:w-auto" onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Your Free Strategy Call
            </Button>
            <Button size="lg" variant="outline" fullWidth className="sm:w-auto gap-2" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              <PlayCircle className="w-5 h-5" />
              View Our Work
            </Button>
          </div>
        </Reveal>

        {/* Logo Cloud Section */}
        <div className="mt-20 w-full">
          <Reveal delay={400} width="100%">
            <div className="mb-8">
              <span className="block font-medium text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
                Already used by
              </span>
              <span className="font-bold text-lg md:text-xl text-white tracking-tight">
                Best in the Game
              </span>
            </div>
            <LogoCloud logos={logos} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;