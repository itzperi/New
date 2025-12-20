import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface BusinessAnalyticsShowcaseProps {
    onBack: () => void;
}

const ANALYTICS_CONTENT = [
    "We analyze your audience behavior, funnel data, and conversion drop-offs.",
    "We identify real fears, desires, and trust gaps from user actions.",
    "We study competitors to find missed emotional triggers.",
    "Data shows us why users hesitate before buying.",
    "We turn insights into clear, human messaging.",
    "We use ethical FOMO based on real numbers, not hype.",
    "Scarcity, urgency, and social proof come from analytics.",
    "Website copy speaks like a human, not a corporation.",
    "Every section guides users toward a confident decision.",
    "Results improve continuously through testing and feedback."
];

const BusinessAnalyticsShowcase: React.FC<BusinessAnalyticsShowcaseProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#050508] pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors mb-12 self-start group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Business <span className="text-gradient">Analytics</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Turning data into decisions. We don't just track numbers; we decode human behavior to optimize your growth.
                    </p>
                </div>

                <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {ANALYTICS_CONTENT.map((point, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1 bg-purple-500/10 p-2 rounded-full h-fit">
                                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                </div>
                                <p className="text-gray-300 leading-relaxed font-light text-lg">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessAnalyticsShowcase;
