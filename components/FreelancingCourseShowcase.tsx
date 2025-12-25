import React from 'react';
import { ArrowLeft, BookOpen, Code, Cpu, LineChart, Rocket } from 'lucide-react';
import Button from './ui/Button';

interface FreelancingCourseShowcaseProps {
    onBack: () => void;
}

const WHATSAPP_LINK = 'https://wa.me/918838768205?text=i%20am%20interested%20in%20your%20brandlyon%20freelancing%20services';

const COURSES = [
    { title: "Digital Marketing", icon: <LineChart className="w-6 h-6" />, desc: "Master SEO, social media strategy, and brand building." },
    { title: "Performance Marketing", icon: <Rocket className="w-6 h-6" />, desc: "Deep dive into paid ads, ROAS optimization, and funnels." },
    { title: "AI Agents", icon: <Cpu className="w-6 h-6" />, desc: "Learn to build and deploy autonomous AI workforce systems." },
    { title: "Vibe Coding", icon: <Code className="w-6 h-6" />, desc: "Creative coding approaches for modern, interactive web experiences." },
    { title: "Web & Fullstack Apps", icon: <BookOpen className="w-6 h-6" />, desc: "Complete roadmap to building scalable production applications." },
];

const FreelancingCourseShowcase: React.FC<FreelancingCourseShowcaseProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#050508] pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors mb-12 self-start group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Freelancing <span className="text-gradient">Mastery</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Equip yourself with high-income skills. Expert-led courses designed for the modern digital economy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {COURSES.map((course, i) => (
                        <div key={i} className="group p-8 rounded-2xl bg-[#0f0f16] border border-white/5 hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors mb-6">
                                {course.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{course.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {course.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Join our expert-led courses and transform your freelancing career. Get personalized guidance and mentorship.
                    </p>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                    >
                        Enroll Now via WhatsApp
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FreelancingCourseShowcase;
