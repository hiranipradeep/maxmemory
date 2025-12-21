import { useState } from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
  metricLabel: string;
  brandColor: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "MaxMemory transformed our customer support AI. Our bot now remembers every interaction, leading to dramatically faster resolution times and happier customers.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechFlow",
    avatar: "SC",
    metric: "40%",
    metricLabel: "Faster Resolution",
    brandColor: "hsl(160, 60%, 45%)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    quote: "The semantic search capabilities are incredible. Our knowledge base went from a frustrating search experience to genuinely intelligent retrieval that understands context.",
    author: "Marcus Johnson",
    role: "Head of AI",
    company: "DataSync",
    avatar: "MJ",
    metric: "3x",
    metricLabel: "Search Accuracy",
    brandColor: "hsl(221, 83%, 53%)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    quote: "We evaluated five memory solutions. MaxMemory was the only one that could handle our scale while maintaining sub-50ms latency consistently.",
    author: "Elena Rodriguez",
    role: "Engineering Lead",
    company: "ScaleAI",
    avatar: "ER",
    metric: "<50ms",
    metricLabel: "Avg Latency",
    brandColor: "hsl(262, 83%, 58%)",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    quote: "Integration was seamless. Within hours, our AI agents had persistent memory that made conversations feel natural and contextually aware.",
    author: "David Park",
    role: "VP of Engineering",
    company: "NeuralPath",
    avatar: "DP",
    metric: "2hrs",
    metricLabel: "Integration Time",
    brandColor: "hsl(200, 70%, 50%)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    quote: "The real-time sync across our distributed system is flawless. Our AI assistants now share context seamlessly across all touchpoints.",
    author: "Aisha Patel",
    role: "Director of Product",
    company: "CloudMind",
    avatar: "AP",
    metric: "99.9%",
    metricLabel: "Sync Reliability",
    brandColor: "hsl(340, 60%, 55%)",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-secondary/30">
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6 border border-primary/20">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Loved by <span className="gradient-text">AI Teams</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            See what developers and teams are saying about MaxMemory.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-6xl mx-auto">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500"
            style={{ backgroundColor: activeTestimonial.brandColor }}
          >
            {/* Main Content Container */}
            <div className="relative flex flex-col lg:flex-row min-h-[500px] lg:min-h-[450px]">
              
              {/* Left: Content Pane */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Metric */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl lg:text-8xl font-bold text-white/95">
                      {activeTestimonial.metric}
                    </span>
                    <span className="text-lg lg:text-xl text-white/70 font-medium">
                      {activeTestimonial.metricLabel}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/20" />
                    <p className="text-white/90 text-lg lg:text-xl leading-relaxed pl-8">
                      {activeTestimonial.quote}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-sm border border-white/30">
                        {activeTestimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">{activeTestimonial.author}</div>
                        <div className="text-white/70 text-sm">{activeTestimonial.role} at {activeTestimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white/90 text-white/90" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Portrait Gallery */}
              <div className="lg:w-[420px] p-6 lg:p-8 flex items-center">
                <div className="flex lg:flex-col gap-3 w-full overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {testimonials.map((testimonial, index) => {
                    const isActive = index === activeIndex;
                    
                    return (
                      <button
                        key={testimonial.id}
                        onClick={() => setActiveIndex(index)}
                        className={`relative flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                          isActive 
                            ? 'w-full lg:w-full h-28 lg:h-32' 
                            : 'w-20 lg:w-full h-20 lg:h-16'
                        }`}
                      >
                        {/* Portrait Image */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ${isActive ? 'grayscale-0' : 'grayscale'}`}
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                          {/* Overlay */}
                          <div 
                            className={`absolute inset-0 transition-all duration-400 ${isActive ? 'bg-black/10' : 'bg-black/40'}`}
                          />
                        </div>

                        {/* Active Card Content */}
                        {isActive && (
                          <div className="absolute inset-0 flex items-center justify-between px-5">
                            <div className="text-left">
                              <div className="text-white font-semibold text-sm">{testimonial.author}</div>
                              <div className="text-white/70 text-xs">{testimonial.company}</div>
                            </div>
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20">
                              <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        )}

                        {/* Inactive: Small avatar indicator */}
                        {!isActive && (
                          <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:px-4">
                            <div className="hidden lg:block text-white/80 text-sm font-medium truncate">
                              {testimonial.author}
                            </div>
                          </div>
                        )}

                        {/* Selection indicator */}
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-300 ${
                            isActive ? 'bg-white/90 scale-y-100' : 'bg-transparent scale-y-0'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots for Mobile */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-primary' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
