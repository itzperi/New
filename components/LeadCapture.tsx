import React from 'react';
import Button from './ui/Button';
import { Reveal } from './ui/Reveal';

const LeadCapture: React.FC = () => {
  return (
    <section id="lead-capture" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="glass-card rounded-3xl p-6 md:p-16 border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">

          <div className="w-full lg:w-1/2">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">Ready to Elevate Your Brand?</h2>
              <p className="text-gray-300 mb-8 text-lg text-center lg:text-left">
                Get a free 30-minute consultation and custom growth plan for your business.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8">
                {[
                  "Audit of current marketing",
                  "Recommendations for growth",
                  "Clear 90-day roadmap",
                  "No-obligation custom quote"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-[10px]">✓</div>
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2 bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-inner">
            <Reveal delay={200} width="100%">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 ml-1">Phone (Optional)</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 ml-1">Main Business Challenge</label>
                  <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none" placeholder="How can we help you scale?" />
                </div>
                <Button
                  fullWidth
                  variant="secondary"
                  size="lg"
                  className="mt-2 py-5 text-lg font-bold"
                  onClick={() => window.open('https://wa.me/918838768205?text=i%20am%20interested%20in%20your%20brandlyon%20freelancing%20services', '_blank')}
                >
                  Claim Your Free Consultation
                </Button>
                <p className="text-[10px] text-center text-gray-600 px-4">
                  By clicking, you agree to our terms and to receive a one-time follow-up. We respect your privacy.
                </p>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadCapture;