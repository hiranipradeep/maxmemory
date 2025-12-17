import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "MaxMemory transformed our customer support AI. Our bot now remembers every interaction, leading to 40% faster resolution times.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "The semantic search capabilities are incredible. Our knowledge base went from a frustrating search experience to genuinely intelligent retrieval.",
    author: "Marcus Johnson",
    role: "Head of AI at DataSync",
    avatar: "MJ",
    rating: 5,
  },
  {
    quote: "We evaluated five memory solutions. MaxMemory was the only one that could handle our scale while maintaining sub-50ms latency.",
    author: "Elena Rodriguez",
    role: "Engineering Lead at ScaleAI",
    avatar: "ER",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6 border border-primary/20">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Loved by <span className="gradient-text">AI Teams</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            See what developers and teams are saying about MaxMemory.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card card-shine glow-border p-8 opacity-0 animate-slide-up relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-primary/15" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-8 leading-relaxed text-[15px]">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};