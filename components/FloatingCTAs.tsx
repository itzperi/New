import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { MagneticButton } from './ui/magnetic-button';

const FloatingCTAs: React.FC = () => {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            {/* WhatsApp CTA */}
            <MagneticButton distance={0.4}>
                <button
                    onClick={() => window.open('https://wa.me/918838768205?text=i%20am%20interested%20in%20your%20brandlyon%20freelancing%20services', '_blank')}
                    className="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                    aria-label="Contact us on WhatsApp"
                >
                    <MessageCircle className="w-8 h-8 text-white" />
                    <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Chat on WhatsApp
                    </span>
                </button>
            </MagneticButton>

            {/* Instagram CTA */}
            <MagneticButton distance={0.4}>
                <button
                    onClick={() => window.open('https://www.instagram.com/doeshi_influencer_offl', '_blank')}
                    className="group relative w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                    aria-label="Follow us on Instagram"
                >
                    <Instagram className="w-8 h-8 text-white" />
                    <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Follow on Instagram
                    </span>
                </button>
            </MagneticButton>
        </div>
    );
};

export default FloatingCTAs;
