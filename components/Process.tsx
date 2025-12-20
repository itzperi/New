import React from 'react';
import { Phone, FileText, Rocket, LineChart } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const STEPS = [
  {
    title: "Discovery Call",
    description: "We learn your goals, challenges, and vision. No pressure, just conversation.",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    title: "Custom Strategy",
    description: "We create a tailored plan with clear timelines and deliverables. You approve before we start.",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "Execution & Launch",
    description: "Our team handles everything while you stay updated. We deliver on time, every time.",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Growth & Optimization",
    description: "We monitor results, adjust strategies, and keep improving your performance.",
    icon: <LineChart className="w-5 h-5" />,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How It <span className="text-purple-500">Works</span></h2>
              <p className="text-gray-400 text-lg mb-8">
                A simple, transparent process designed to get you results without the headache.
              </p>
              
              <div className="relative pl-8 border-l border-white/10 space-y-12">
                {STEPS.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-[#0a0a0f] border border-purple-500 flex items-center justify-center text-purple-500 z-10">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="w-full md:w-1/2">
            <Reveal delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-purple-600/10 transition-colors z-10" />
                <img 
                    src="https://picsum.photos/seed/meeting/800/800" 
                    alt="Strategy Meeting" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Card Element */}
                <div className="absolute bottom-8 right-8 z-20 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-xs shadow-xl animate-float">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-semibold text-white">Project Status</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mb-2 overflow-hidden">
                        <div className="bg-purple-500 h-full w-[85%] rounded-full" />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                        <span>On Track</span>
                        <span>85% Complete</span>
                    </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;