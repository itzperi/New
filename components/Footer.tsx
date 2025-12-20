import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020203] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-6 no-underline">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">
                  BRAND<span className="text-purple-500">LYON</span>
                </span>
            </a>
            <p className="text-gray-500 mb-6">
              Transforming businesses with next-gen digital solutions. Stop blending in, start leading.
            </p>
            <div className="flex gap-4">
              {[<Twitter />, <Instagram />, <Linkedin />, <Github />].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                  {React.cloneElement(icon as React.ReactElement, { size: 18 })}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#hero" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Web Design</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">App Creation</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">SEO & Marketing</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Courses & Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-4 text-sm">Join our newsletter for the latest updates and exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-purple-500"
              />
              <Button size="sm" variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2025 Brandlyon. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/5">
            {["100% Satisfaction Guarantee", "Fast Turnaround Times", "Dedicated Project Manager", "Clear Communication"].map((text, i) => (
                <div key={i} className="flex items-center gap-2 justify-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    {text}
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;