import { Brain, Layers, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Semantic Memory',
    description: 'Store and retrieve memories based on meaning, not just keywords. Our advanced embedding system understands context and relationships.',
  },
  {
    icon: Layers,
    title: 'Hierarchical Storage',
    description: 'Organize memories in intelligent hierarchies. From quick facts to deep knowledge, access the right level of detail instantly.',
  },
  {
    icon: Zap,
    title: 'Real-time Sync',
    description: 'Memories sync across all your AI applications in milliseconds. Never lose context, even across different platforms.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'End-to-end encryption ensures your memories stay private. You control who and what has access to your data.',
  },
];

export const ContentSection = () => {
  return (
    <section id="features" className="py-28 relative">
      <div className="absolute inset-0 bg-hero-glow opacity-40" />
      <div className="absolute inset-0 mesh-gradient" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6 border border-primary/20">
            Why MaxMemory
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            The Memory Layer{' '}
            <span className="gradient-text">Your AI Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Traditional AI applications forget everything between sessions. MaxMemory changes that by providing a persistent, intelligent memory layer that makes your AI truly understand users over time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card card-shine glow-border p-8 opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-primary/10">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="max-w-4xl mx-auto mt-20 p-8 md:p-12 rounded-3xl glass-card gradient-border noise-overlay overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                Built for <span className="gradient-text">Scale</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From prototypes to production, MaxMemory handles billions of memories with consistent sub-50ms retrieval times. Scale without worry.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full bg-secondary/80 text-sm border border-border/50">
                  <span className="text-primary font-bold">10B+</span>{' '}
                  <span className="text-muted-foreground">memories indexed</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-secondary/80 text-sm border border-border/50">
                  <span className="text-primary font-bold">500K+</span>{' '}
                  <span className="text-muted-foreground">daily active apps</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-64 h-48 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center border border-primary/20 glow-border">
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl font-bold gradient-text mb-2">99.99%</div>
                <div className="text-sm text-muted-foreground font-medium">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};