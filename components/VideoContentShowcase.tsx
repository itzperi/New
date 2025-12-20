import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from './ui/Button';

interface VideoContentShowcaseProps {
    onBack: () => void;
}

const VideoContentShowcase: React.FC<VideoContentShowcaseProps> = ({ onBack }) => {
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
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Video Editing & <span className="text-gradient">Content</span></h1>
                <p className="text-gray-400 max-w-xl text-lg leading-relaxed mb-12">
                    High-impact visuals, vortex style editing, and viral reels strategy.
                </p>

                <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                    {/* Placeholder for the requested attached video which wasn't found, using a relevant stock video instead */}
                    <video
                        src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-4354-large.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => window.open('https://www.instagram.com/vort._.x', '_blank')}
                        >
                            View Our Work on Instagram
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoContentShowcase;
