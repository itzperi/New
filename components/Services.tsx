import React from 'react';
import { Video, Globe, Smartphone, Palette, TrendingUp, Monitor, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Reveal } from './ui/Reveal';

interface ServicesProps {
  onShowWebShowcase?: () => void;
  onShowMarketingShowcase?: () => void;
  onShowDesignShowcase?: () => void;
  onShowVideoShowcase?: () => void;
  onShowAIShowcase?: () => void;
  onShowAnalyticsShowcase?: () => void;
  onShowCoursesShowcase?: () => void;
}

interface Service {
  id: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  tags?: string[];
  image?: string;
  link?: string;
  actionLabel?: string;
  points?: string[];
  video?: string;
}

const ANALYTICS_POINTS = [
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

const SERVICES: Service[] = [
  {
    id: 'video',
    title: "Video Editing & Content",
    description: "Cinema-quality editing and high-impact reels. Elevating your brand through the unique 'vortx' visual style.",
    icon: <Video className="w-6 h-6" />,
    tags: ["Reels", "@vort._.x", "Viral Content"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    link: "https://www.instagram.com/vort._.x",
    actionLabel: "View Showcase"
  },
  {
    id: 'marketing',
    title: "Digital Marketing & SEO",
    description: "Influencer-led growth and high-performance lead generation. Local SEO dominance for service businesses.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["SEO", "Influencer", "@doeshi_influencer_offl"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    actionLabel: "View Results"
  },
  {
    id: 'webdesign',
    title: "Web Design",
    description: "Stunning, high-converting websites built to represent your brand. Mobile-first, fast, and SEO-optimized.",
    icon: <Monitor className="w-6 h-6" />,
    tags: ["UI/UX", "Next.js", "E-commerce"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    actionLabel: "View Showcase"
  },
  {
    id: 'courses',
    title: "Freelancing Courses",
    description: "Expert-led training to empower individuals with modern digital strategy and high-income freelancing skills.",
    icon: <GraduationCap className="w-6 h-6" />,
    tags: ["Freelancing", "Skill Building", "Mentorship"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    actionLabel: "View Courses"
  },
  {
    id: 'graphic',
    title: "Graphic Design",
    description: "Premium visual communication from logos to brand systems. Trusted by Juicey, Madras BBQ, and Boss Catering.",
    icon: <Palette className="w-6 h-6" />,
    tags: ["Branding", "Mascot Logos", "Vector Art"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
    actionLabel: "View Portfolio"
  },
  {
    id: 'analytics',
    title: "Business Analytics",
    description: "Insight-driven growth. We analyze user behavior and conversion data to turn complex metrics into profit.",
    icon: <TrendingUp className="w-6 h-6" />,
    tags: ["Funnel Data", "Insights", "Growth"],
    image: "/services/business-analytics.png",
    points: ANALYTICS_POINTS,
    actionLabel: "View Analytics"
  }
];

const Services: React.FC<ServicesProps> = ({
  onShowWebShowcase,
  onShowMarketingShowcase,
  onShowDesignShowcase,
  onShowVideoShowcase,
  onShowAIShowcase,
  onShowAnalyticsShowcase,
  onShowCoursesShowcase
}) => {
  const handleCardClick = (service: any) => {
    if (service.id === 'webdesign') onShowWebShowcase?.();
    else if (service.id === 'marketing') onShowMarketingShowcase?.();
    else if (service.id === 'graphic') onShowDesignShowcase?.();
    else if (service.id === 'video') onShowVideoShowcase?.();
    else if (service.id === 'apps') onShowAIShowcase?.();
    else if (service.id === 'analytics') onShowAnalyticsShowcase?.();
    else if (service.id === 'courses') onShowCoursesShowcase?.();
    else if (service.link) window.open(service.link, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold">What We <span className="text-purple-500">Deliver</span></h2>
            <p className="text-gray-400 mt-4 max-w-lg">
              Strategic digital transformation and creative excellence to scale your brand and automate your operations.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isInteractive = ['webdesign', 'marketing', 'graphic'].includes(service.id) || !!service.link;
            return (
              <Reveal key={index} delay={index * 50}>
                <div
                  onClick={() => handleCardClick(service)}
                  className={`group rounded-3xl overflow-hidden bg-[#13131d] border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] flex flex-col h-full ${isInteractive ? 'cursor-pointer' : ''}`}
                >
                  <div className="h-56 overflow-hidden relative">
                    {service.video ? (
                      <video
                        src={service.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    ) : (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13131d] via-transparent to-transparent z-10" />
                    <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/10">
                      {service.icon}
                    </div>
                    {isInteractive && (
                      <div className="absolute top-4 right-4 z-20 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-widest">
                        {service.actionLabel || 'Visit Page'}
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
                      {service.title}
                    </h3>

                    {service.points ? (
                      <div className="space-y-2 mb-6">
                        {service.points.map((pt, i) => (
                          <div key={i} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                            <CheckCircle2 className="w-3 h-3 text-purple-500 shrink-0 mt-0.5" />
                            {pt}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags?.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-lg bg-white/5 text-gray-500 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;