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
import VideoContentShowcase from './components/VideoContentShowcase';
import AIAppDevShowcase from './components/AIAppDevShowcase';
import BusinessAnalyticsShowcase from './components/BusinessAnalyticsShowcase';
import FreelancingCourseShowcase from './components/FreelancingCourseShowcase';

function App() {
  const [view, setView] = useState<'home' | 'web-showcase' | 'marketing-showcase' | 'design-showcase' | 'video-showcase' | 'ai-showcase' | 'analytics-showcase' | 'courses-showcase'>('home');

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
              onShowVideoShowcase={() => setView('video-showcase')}
              onShowAIShowcase={() => setView('ai-showcase')}
              onShowAnalyticsShowcase={() => setView('analytics-showcase')}
              onShowCoursesShowcase={() => setView('courses-showcase')}
            />



            <Process />
            <Testimonials />
            <FAQ />
            <LeadCapture />
          </>
        ) : view === 'web-showcase' ? (
          <WebDesignShowcase onBack={() => setView('home')} />
        ) : view === 'marketing-showcase' ? (
          <MarketingShowcase onBack={() => setView('home')} />
        ) : view === 'design-showcase' ? (
          <GraphicDesignShowcase onBack={() => setView('home')} />
        ) : view === 'video-showcase' ? (
          <VideoContentShowcase onBack={() => setView('home')} />
        ) : view === 'ai-showcase' ? (
          <AIAppDevShowcase onBack={() => setView('home')} />
        ) : view === 'analytics-showcase' ? (
          <BusinessAnalyticsShowcase onBack={() => setView('home')} />
        ) : (
          <FreelancingCourseShowcase onBack={() => setView('home')} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;