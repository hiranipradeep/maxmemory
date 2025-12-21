import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
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
    metric: "40%",
    metricLabel: "Faster Resolution",
    brandColor: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    quote: "The semantic search capabilities are incredible. Our knowledge base went from a frustrating search experience to genuinely intelligent retrieval that understands context.",
    author: "Marcus Johnson",
    role: "Head of AI",
    company: "DataSync",
    metric: "3x",
    metricLabel: "Search Accuracy",
    brandColor: "from-blue-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    quote: "We evaluated five memory solutions. MaxMemory was the only one that could handle our scale while maintaining sub-50ms latency consistently.",
    author: "Elena Rodriguez",
    role: "Engineering Lead",
    company: "ScaleAI",
    metric: "<50ms",
    metricLabel: "Avg Latency",
    brandColor: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    quote: "Integration was seamless. Within hours, our AI agents had persistent memory that made conversations feel natural and contextually aware.",
    author: "David Park",
    role: "VP of Engineering",
    company: "NeuralPath",
    metric: "2hrs",
    metricLabel: "Integration Time",
    brandColor: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    quote: "The real-time sync across our distributed system is flawless. Our AI assistants now share context seamlessly across all touchpoints.",
    author: "Aisha Patel",
    role: "Director of Product",
    company: "CloudMind",
    metric: "99.9%",
    metricLabel: "Sync Reliability",
    brandColor: "from-rose-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container px-4">
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

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Photo Grid */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                      index === activeIndex 
                        ? 'ring-4 ring-primary shadow-lg scale-105 z-10' 
                        : 'opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
                    }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                    {index === activeIndex && (
                      <div className={`absolute inset-0 bg-gradient-to-t ${testimonial.brandColor} opacity-20`} />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-lg"
                >
                  {/* Metric */}
                  <div className={`inline-flex items-baseline gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${testimonials[activeIndex].brandColor} mb-6`}>
                    <span className="text-3xl lg:text-4xl font-bold text-white">
                      {testimonials[activeIndex].metric}
                    </span>
                    <span className="text-sm text-white/80 font-medium">
                      {testimonials[activeIndex].metricLabel}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-foreground text-lg lg:text-xl leading-relaxed pl-6">
                      {testimonials[activeIndex].quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg">
                        {testimonials[activeIndex].author}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mt-6 pt-6 border-t border-border">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Navigation for Mobile */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex 
                    ? 'w-8 h-2 bg-primary' 
                    : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};