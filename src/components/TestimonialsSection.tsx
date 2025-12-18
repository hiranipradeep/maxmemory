import { useState } from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    brandColor: "hsl(160, 60%, 45%)", // Mint green
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
    brandColor: "hsl(270, 50%, 55%)", // Soft purple
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
    brandColor: "hsl(45, 90%, 55%)", // Golden yellow
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
    brandColor: "hsl(200, 70%, 50%)", // Sky blue
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
    brandColor: "hsl(340, 60%, 55%)", // Rose pink
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Loved by <span className="gradient-text">AI Teams</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            See what developers and teams are saying about MaxMemory.
          </p>
        </motion.div>

        {/* Expandable Carousel */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Dynamic Background */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ backgroundColor: activeTestimonial.brandColor }}
              />
            </AnimatePresence>

            {/* Main Content Container */}
            <div className="relative flex flex-col lg:flex-row min-h-[500px] lg:min-h-[450px]">
              
              {/* Left: Content Pane */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    {/* Metric */}
                    <div className="flex items-baseline gap-3">
                      <motion.span 
                        className="text-6xl lg:text-8xl font-bold text-white/95"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                      >
                        {activeTestimonial.metric}
                      </motion.span>
                      <motion.span 
                        className="text-lg lg:text-xl text-white/70 font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        {activeTestimonial.metricLabel}
                      </motion.span>
                    </div>

                    {/* Quote */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="relative"
                    >
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/20" />
                      <p className="text-white/90 text-lg lg:text-xl leading-relaxed pl-8">
                        {activeTestimonial.quote}
                      </p>
                    </motion.div>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                      className="pt-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-sm border border-white/30">
                          {activeTestimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-lg">{activeTestimonial.author}</div>
                          <div className="text-white/70 text-sm">{activeTestimonial.role} at {activeTestimonial.company}</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Rating */}
                    <motion.div 
                      className="flex gap-1 pt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-white/90 text-white/90" />
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Portrait Gallery */}
              <div className="lg:w-[420px] p-6 lg:p-8 flex items-center">
                <div className="flex lg:flex-col gap-3 w-full overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {testimonials.map((testimonial, index) => {
                    const isActive = index === activeIndex;
                    
                    return (
                      <motion.button
                        key={testimonial.id}
                        onClick={() => setActiveIndex(index)}
                        className={`relative flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                          isActive 
                            ? 'w-full lg:w-full h-28 lg:h-32' 
                            : 'w-20 lg:w-full h-20 lg:h-16'
                        }`}
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : 0.98,
                        }}
                        whileHover={{ scale: isActive ? 1 : 1.02 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        layout
                      >
                        {/* Portrait Image */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                          {/* Overlay */}
                          <motion.div 
                            className="absolute inset-0"
                            animate={{
                              backgroundColor: isActive ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.4)',
                            }}
                            transition={{ duration: 0.4 }}
                          />
                        </motion.div>

                        {/* Active Card Content */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 flex items-center justify-between px-5"
                            >
                              <div className="text-left">
                                <div className="text-white font-semibold text-sm">{testimonial.author}</div>
                                <div className="text-white/70 text-xs">{testimonial.company}</div>
                              </div>
                              <div 
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                              >
                                <ArrowRight className="w-5 h-5 text-white" />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Inactive: Small avatar indicator */}
                        {!isActive && (
                          <motion.div 
                            className="absolute inset-0 flex items-center justify-center lg:justify-start lg:px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="hidden lg:block text-white/80 text-sm font-medium truncate">
                              {testimonial.author}
                            </div>
                          </motion.div>
                        )}

                        {/* Selection indicator */}
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                          animate={{
                            backgroundColor: isActive ? 'rgba(255,255,255,0.9)' : 'transparent',
                            scaleY: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
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
        </motion.div>
      </div>
    </section>
  );
};
