import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "Simple projects (logo design, short videos) take 5-7 days. Complex work (app development, full marketing campaigns) ranges from 4-12 weeks. We'll give you exact timelines during your strategy call.",
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "We've worked across e-commerce, tech, healthcare, real estate, finance, and more. Our process adapts to any industry.",
  },
  {
    question: "What if I only need one service?",
    answer: "Perfect. You can hire us for a single service or combine multiple. We customize packages based on your needs.",
  },
  {
    question: "Can you handle ongoing work or just one-time projects?",
    answer: "Both. Many clients start with a project, then move to monthly retainers for continuous support.",
  },
  {
    question: "What's your pricing?",
    answer: "Pricing depends on scope and services. Video editing starts at [price range]. Apps start at [price range]. Marketing retainers start at [price range]. Book a call for a custom quote.",
  },
  {
    question: "Do you guarantee results?",
    answer: "We guarantee quality work and on-time delivery. For marketing/SEO, we provide transparent reporting and make data-driven adjustments to maximize ROI.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#050508]">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Common <span className="text-gradient">Questions</span></h2>
        </Reveal>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={index} delay={index * 50} width="100%">
              <div 
                className={`border border-white/5 rounded-xl bg-white/5 overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-purple-500/50' : ''}`}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg text-white">{faq.question}</span>
                  <div className={`p-1 rounded-full bg-white/10 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-purple-500' : ''}`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div 
                  className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.answer}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;