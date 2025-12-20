import React from 'react';
import { AnimatedFolder, Project } from './ui/3d-folder';
import { ArrowLeft } from 'lucide-react';
import Button from './ui/Button';

interface GraphicDesignShowcaseProps {
  onBack: () => void;
}

const DESIGN_PROJECTS: Project[] = [
  {
    id: "juicey",
    title: "Juicey Resto Cafe",
    image: "https://images.unsplash.com/photo-1466632348570-8152827a2753?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "madrasbbq",
    title: "Madras BBQ Spot",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "bosscatering",
    title: "Boss Catering",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "briyaniwala",
    title: "Briyaniwala",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc9?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "minutesmemories",
    title: "Minutes Memories",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7b?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "jpfood",
    title: "JP Food Factory",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "deltakaran",
    title: "Delta Karan",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "foodmail",
    title: "Food Mail",
    image: "https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

const MARQUEE_TEXTS = [
  "PREMIUM BRANDING", "MASCOT LOGOS", "VISUAL SYSTEMS", "PACKAGING DESIGN", 
  "RESTAURANT IDENTITY", "CINEMATIC GRAPHICS", "VECTOR ART", "BRAND GUIDELINES"
];

const GraphicDesignShowcase: React.FC<GraphicDesignShowcaseProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050508] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Graphic <span className="text-gradient">Design Identity</span></h1>
        <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
          Crafting memorable visual experiences for elite food brands and lifestyle businesses.
        </p>
      </div>

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

      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
        <div className="w-full flex justify-center py-20 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl border border-white/5 shadow-inner">
            <AnimatedFolder 
              title="Graphic Design Portfolio" 
              projects={DESIGN_PROJECTS} 
            />
        </div>
      </section>

      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Need a visual upgrade?</h2>
        <Button 
          variant="secondary" 
          size="lg"
          onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Design Brief
        </Button>
      </div>
    </div>
  );
};

export default GraphicDesignShowcase;