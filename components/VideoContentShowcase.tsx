import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { AnimatedFolder, Project } from './ui/3d-folder';

interface VideoContentShowcaseProps {
    onBack: () => void;
}

// Video editing and content Instagram pages
const VIDEO_EDITING_LINKS = [
    {
        id: "vortx",
        title: "Vortex Style Editing",
        description: "Cinema-quality edits with unique vortex visual style",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
        url: "https://www.instagram.com/vort._.x",
        type: "Instagram"
    },
    {
        id: "brandlyon",
        title: "Brandlyon Official",
        description: "Our official portfolio and brand showcase",
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=800",
        url: "https://www.instagram.com/brandlyon_offl",
        type: "Instagram"
    },
    {
        id: "lakshmi",
        title: "Lakshmi Medical Centre",
        description: "Medical center reels and promotional content",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        url: "https://www.instagram.com/lakshmi.medicalcentre/reels/",
        type: "Instagram Reels"
    }
];

// Full Portfolio with 3D folder animation
const PORTFOLIO_PROJECT: Project = {
    id: "portfolio",
    title: "Full Video Editing Portfolio",
    image: "/portfolio/video-editing-portfolio.png",
    link: "https://drive.google.com/drive/folders/1M3G0BgnyuWMtzrpoqIxJiVp6rPNvEbHU"
};

const CONTENT_LINK = {
    id: "doeshi",
    title: "Doeshi Influencer",
    description: "Content creation and influencer marketing",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800",
    url: "https://www.instagram.com/doeshi_influencer_offl",
    type: "Instagram"
};

const MARQUEE_TEXTS = [
    "VORTEX STYLE", "CINEMA QUALITY", "VIRAL REELS", "HIGH IMPACT",
    "MOTION GRAPHICS", "BRAND STORYTELLING", "SOCIAL FIRST", "CREATIVE EDITING"
];

const VideoContentShowcase: React.FC<VideoContentShowcaseProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#050508] pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Video Editing & <span className="text-gradient">Content</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        High-impact visuals, vortex style editing, and viral content strategy. Explore our work across platforms.
                    </p>
                </div>

                {/* Marquee Section */}
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

                {/* Video Editing Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Video <span className="text-purple-500">Editing</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {VIDEO_EDITING_LINKS.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative rounded-2xl overflow-hidden bg-[#0f0f16] border border-white/5 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                            >
                                <div className="aspect-video overflow-hidden relative">
                                    <img
                                        src={link.image}
                                        alt={link.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f16] via-transparent to-transparent" />
                                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {link.type}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors flex items-center gap-2">
                                        {link.title}
                                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h3>
                                    <p className="text-gray-400 text-sm">{link.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Full Portfolio with 3D Folder Animation */}
                    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
                        <h3 className="text-2xl font-bold mb-8 text-center">
                            <span className="text-purple-500">Full Portfolio</span>
                        </h3>
                        <div className="w-full flex justify-center py-20 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl border border-white/5 shadow-inner">
                            <AnimatedFolder
                                title="Complete Video Editing Collection"
                                projects={[PORTFOLIO_PROJECT]}
                            />
                        </div>
                    </section>
                </div>

                {/* Content Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="text-purple-500">Content</span> Creation
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <a
                            href={CONTENT_LINK.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-2xl overflow-hidden bg-[#0f0f16] border border-white/5 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] block"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={CONTENT_LINK.image}
                                    alt={CONTENT_LINK.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f16] via-transparent to-transparent" />
                                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {CONTENT_LINK.type}
                                </div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors flex items-center justify-center gap-2">
                                    {CONTENT_LINK.title}
                                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-gray-400">{CONTENT_LINK.description}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoContentShowcase;
