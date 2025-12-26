import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn } from './ui/testimonials-columns-1';
import { Reveal } from './ui/Reveal';

const testimonials = [
  {
    text: "Brandlyon took our social media from average to industry-leading. Our engagement tripled in 60 days.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Dr. A. Shanmugasundaram",
    role: "AVIT College Founder ",
  },
  {
    text: "The WhatsApp AI bot they built transformed how we operate. We're saving 15 hours a week on manual tasks.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Ankush Shetty",
    role: "Founder -  Gaadi Bazzar",
  },
  {
    text: "Incredible attention to detail. The branding package they delivered gave us the confidence to pitch to Fortune 500s.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sandeep Sri",
    role: "Founder -SP. A Motors Private Limited",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Periyanan P",
    role: "Founder - Zappy Businesses",
  },
  {
    text: "This agency's seamless integration enhanced our business operations. Highly recommend their modern approach.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Dadasaheb Bhagat",
    role: "Founder -Design Template",
  },
  {
    text: "Brandlyon took our social media from average to industry-leading. Our engagement tripled in 60 days.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Dr. A. Shanmugasundaram",
    role: "AVIT College Founder ",
  },
  {
    text: "The WhatsApp AI bot they built transformed how we operate. We're saving 15 hours a week on manual tasks.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Ankush Shetty",
    role: "Founder -  Gaadi Bazzar",
  },
  {
    text: "Incredible attention to detail. The branding package they delivered gave us the confidence to pitch to Fortune 500s.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sandeep Sri",
    role: "Founder -SP. A Motors Private Limited",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Periyanan P",
    role: "Founder - Zappy Businesses",
  }
  
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const STATS = [
  { value: "300%+", label: "Organic Traffic Growth" },
  { value: "50+", label: "Custom Apps Launched" },
  { value: "1M+", label: "Monthly Impressions" },
  { value: "200+", label: "Brands Transformed" },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#050508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Stats Grid */}
        <Reveal width="100%">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/5 py-12">
                {STATS.map((stat, i) => (
                    <div key={i} className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">{stat.value}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-purple-500/30 bg-purple-500/5 py-1 px-4 rounded-full text-xs font-bold text-purple-400 tracking-widest uppercase">
                Testimonials
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            What our <span className="text-gradient">users say</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            See how Brandlyon has transformed workflows and scaled brands globally.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;