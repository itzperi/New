import React from 'react';
import { ArrowLeft, Bot, MessageSquare, Mic } from 'lucide-react';
import Button from './ui/Button';

interface AIAppDevShowcaseProps {
    onBack: () => void;
}

const AIAppDevShowcase: React.FC<AIAppDevShowcaseProps> = ({ onBack }) => {
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
                <h1 className="text-4xl md:text-6xl font-bold mb-8">AI <span className="text-gradient">Agents & Apps</span></h1>

                <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-12 space-y-6">
                    <p>
                        We do AI agents according to your business needs. From intelligent
                        <span className="text-purple-400 font-bold"> Chatbots</span> that handle customer support 24/7 to
                        <span className="text-purple-400 font-bold"> Voice Bots</span> that automate your calls.
                    </p>
                    <p>
                        Our custom full-stack applications integrate seamlessly with modern AI to automate workflows and scale your operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
                    {[
                        { icon: <Bot className="w-8 h-8" />, title: "AI Agents", desc: "Custom autonomous agents for specific business logic." },
                        { icon: <MessageSquare className="w-8 h-8" />, title: "Chatbots", desc: "Intelligent conversational interfaces for engaging users." },
                        { icon: <Mic className="w-8 h-8" />, title: "Voice Bots", desc: "Natural voice interactions for automated support." },
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center hover:bg-white/10 transition-colors">
                            <div className="text-purple-400 mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative mb-12">
                    <video
                        src="https://assets.mixkit.co/videos/preview/mixkit-artificial-intelligence-interface-concept-99-large.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Button
                            variant="secondary"
                            onClick={() => window.open('https://wa.me/918838768205?text=i%20am%20interested%20in%20your%20brandlyon%20freelancing%20services', '_blank')}
                        >
                            Build Your AI Agent
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAppDevShowcase;
