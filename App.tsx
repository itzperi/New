import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Button from './components/ui/Button';
import WebDesignShowcase from './components/WebDesignShowcase';
import MarketingShowcase from './components/MarketingShowcase';
import GraphicDesignShowcase from './components/GraphicDesignShowcase';
import VideoContentShowcase from './components/VideoContentShowcase';
import AIAppDevShowcase from './components/AIAppDevShowcase';
import BusinessAnalyticsShowcase from './components/BusinessAnalyticsShowcase';
import FreelancingCourseShowcase from './components/FreelancingCourseShowcase';
import FloatingCTAs from './components/FloatingCTAs';

function App() {
  const [view, setView] = useState<'home' | 'web-showcase' | 'marketing-showcase' | 'design-showcase' | 'video-showcase' | 'ai-showcase' | 'analytics-showcase' | 'courses-showcase'>('home');

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      setView('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to change view and update history
  const changeView = (newView: typeof view) => {
    setView(newView);
    window.history.pushState({ view: newView }, '', `#${newView}`);
  };

  // Function to go back to home and scroll to services
  const backToServices = () => {
    setView('home');
    window.history.pushState({ view: 'home' }, '', '#home');
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Features />
            <Services
              onShowWebShowcase={() => changeView('web-showcase')}
              onShowMarketingShowcase={() => changeView('marketing-showcase')}
              onShowDesignShowcase={() => changeView('design-showcase')}
              onShowVideoShowcase={() => changeView('video-showcase')}
              onShowAIShowcase={() => changeView('ai-showcase')}
              onShowAnalyticsShowcase={() => changeView('analytics-showcase')}
              onShowCoursesShowcase={() => changeView('courses-showcase')}
            />



            <Process />
            <Testimonials />
            <FAQ />
          </>
        ) : view === 'web-showcase' ? (
          <WebDesignShowcase onBack={backToServices} />
        ) : view === 'marketing-showcase' ? (
          <MarketingShowcase onBack={backToServices} />
        ) : view === 'design-showcase' ? (
          <GraphicDesignShowcase onBack={backToServices} />
        ) : view === 'video-showcase' ? (
          <VideoContentShowcase onBack={backToServices} />
        ) : view === 'ai-showcase' ? (
          <AIAppDevShowcase onBack={backToServices} />
        ) : view === 'analytics-showcase' ? (
          <BusinessAnalyticsShowcase onBack={backToServices} />
        ) : (
          <FreelancingCourseShowcase onBack={backToServices} />
        )}
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}

export default App;