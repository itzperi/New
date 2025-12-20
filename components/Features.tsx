import React from 'react';
import { Zap, Users, Trophy, Cpu, BarChart3 } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const FEATURES = [
  {
    title: "Launch Faster",
    description: "Get professional content and campaigns ready in days, not months.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Grow Your Audience",
    description: "Strategic marketing that brings qualified leads to your doorstep.",
    icon: <Users className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Stand Out Instantly",
    description: "Premium video and design that makes competitors fade into the background.",
    icon: <Trophy className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Scale Smarter",
    description: "Custom apps and AI tools that automate your growth.",
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Make Better Decisions",
    description: "Clear analytics that show exactly what's working and what isn't.",
    icon: <BarChart3 className="w-6 h-6 text-green-400" />,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#050508] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose <span className="text-gradient">Brandlyon?</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                We combine creative artistry with data-driven strategy to deliver results that actually move the needle for your business.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="glass-card p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 group h-full">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;