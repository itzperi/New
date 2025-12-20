import React from 'react';
import { AnimatedFolder, Project } from './ui/3d-folder';
import { ArrowLeft } from 'lucide-react';
import Button from './ui/Button';

interface WebDesignShowcaseProps {
  onBack: () => void;
}

const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "avit",
    title: "AVIT College",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    link: "https://avit.ac.in/"
  },
  {
    id: "wooddecor",
    title: "Wood Decor",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    link: "https://wooddecor.site/"
  },
  {
    id: "lifeline",
    title: "Lifeline Facility",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800",
    link: "https://www.lifelinefacility.in/"
  },
  {
    id: "aicns",
    title: "AICNS Conference",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "https://www.aicnsconf.com/"
  },
  {
    id: "gaadi",
    title: "GaadiBazaar",
    image: "https://images.unsplash.com/photo-1549239120-285223a6ce97?auto=format&fit=crop&q=80&w=800",
    link: "https://www.gaadibazaar.in/"
  },
  {
    id: "svagara",
    title: "Svagara Design",
    image: "https://images.unsplash.com/photo-1541462608141-ad4d150fe23b?auto=format&fit=crop&q=80&w=800",
    link: "https://svargadesign.com/"
  },
  {
    id: "3dfriend",
    title: "My3DFriend",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    link: "https://my3dfriend.com/"
  },
  {
    id: "stark",
    title: "Stark Studio",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    link: "https://stark-architect-showcase.vercel.app/"
  }
];

const MARQUEE_TEXTS = [
  "HIGH PERFORMANCE", "CUSTOM APPS", "MODERN UI/UX", "SCALABLE SYSTEMS", 
  "CONVERSION OPTIMIZED", "MOBILE FIRST", "AI INTEGRATED", "NEXT-GEN DESIGN"
];

const WebDesignShowcase: React.FC<WebDesignShowcaseProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050508] pt-24 pb-20">
      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our <span className="text-gradient">Web Designs</span></h1>
        <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
          Hover over the collection below to explore our high-performance digital experiences. 
          Click any card to view the live production site.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="w-full bg-purple-600/5 border-y border-white/5 py-6 mb-20 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {MARQUEE_TEXTS.map((text, j) => (
                <span key={j} className="text-white/20 font-black text-3xl mx-12 select-none italic tracking-tighter hover:text-purple-500/50 transition-colors">
                  {text}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3D Folder Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
        <div className="w-full flex justify-center py-20 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl border border-white/5 shadow-inner">
            <AnimatedFolder 
              title="Featured Client Projects" 
              projects={PORTFOLIO_PROJECTS} 
            />
        </div>
      </section>

      {/* CTA Section */}
      <div className="max-w-2xl mx-auto text-center mt-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to launch your own?</h2>
        <Button 
          variant="secondary" 
          size="lg" 
          onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
        >
            Start Your Project
        </Button>
      </div>
    </div>
  );
};

export default WebDesignShowcase;