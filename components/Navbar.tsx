import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isMobileMenuOpen ? 'bg-[#050508] py-3' : isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center group relative z-[60] no-underline">
          <img
            src="/brandlyon-logo.png"
            alt="Brandlyon Logo"
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <span className="hidden text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">
            BRAND<span className="text-purple-500">LYON</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center bg-white/5 rounded-full px-6 py-2 border border-white/10 backdrop-blur-md">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 -translate-x-1/2 group-hover:w-1/2"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open('https://wa.me/918838768205?text=i%20am%20interested%20in%20your%20brandlyon%20freelancing%20services', '_blank')}
          >
            Book Strategy Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 relative z-[60] hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-[#050508] transition-opacity duration-300 md:hidden flex flex-col pt-24 px-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ zIndex: 1000, backgroundColor: '#050508' }}
      >
        <div className="flex flex-col gap-6 py-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-2xl font-bold text-white text-left transition-colors flex items-center justify-between group"
            >
              {item.label}
              <ArrowRight className="w-5 h-5 text-purple-500" />
            </button>
          ))}
        </div>

        <div className="mt-auto pb-12">
          <Button
            variant="secondary"
            fullWidth
            size="lg"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.open('https://wa.me/918838768205?text=i%20am%20interested%20in%20your%20brandlyon%20freelancing%20services', '_blank');
            }}
          >
            Book Strategy Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;