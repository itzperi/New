import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import Button from './components/ui/Button';
import WebDesignShowcase from './components/WebDesignShowcase';
import MarketingShowcase from './components/MarketingShowcase';
import GraphicDesignShowcase from './components/GraphicDesignShowcase';

function App() {
  const [view, setView] = useState<'home' | 'web-showcase' | 'marketing-showcase' | 'design-showcase'>('home');

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Features />
            <Services 
              onShowWebShowcase={() => setView('web-showcase')} 
              onShowMarketingShowcase={() => setView('marketing-showcase')}
              onShowDesignShowcase={() => setView('design-showcase')}
            />
            
            {/* Final Call To Action Section */}
            <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#050508] text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-600/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to <span className="text-gradient">Dominate Your Market?</span></h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Your brand deserves more than just a presence. It deserves a legacy.</p>
                    <div className="flex flex-col items-center gap-6">
                        <Button variant="secondary" size="lg" className="px-12 py-5 text-xl" onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}>
                            Let's Build Something Iconic
                        </Button>
                        <p className="text-sm text-gray-600">Join the elite brands partnered with Brandlyon.</p>
                    </div>
                </div>
            </section>

            <Process />
            <Testimonials />
            <FAQ />
            <LeadCapture />
          </>
        ) : view === 'web-showcase' ? (
          <WebDesignShowcase onBack={() => setView('home')} />
        ) : view === 'marketing-showcase' ? (
          <MarketingShowcase onBack={() => setView('home')} />
        ) : (
          <GraphicDesignShowcase onBack={() => setView('home')} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;