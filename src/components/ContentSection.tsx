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
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-hero-glow opacity-30" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why MaxMemory
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            The Memory Layer Your AI Needs
          </h2>
          <p className="text-muted-foreground text-lg">
            Traditional AI applications forget everything between sessions. MaxMemory changes that by providing a persistent, intelligent memory layer that makes your AI truly understand users over time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl glass gradient-border hover:bg-card/80 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="max-w-4xl mx-auto mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Built for Scale
              </h3>
              <p className="text-muted-foreground mb-6">
                From prototypes to production, MaxMemory handles billions of memories with consistent sub-50ms retrieval times. Scale without worry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full bg-secondary text-sm">
                  <span className="text-primary font-semibold">10B+</span>{' '}
                  <span className="text-muted-foreground">memories indexed</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-secondary text-sm">
                  <span className="text-primary font-semibold">500K+</span>{' '}
                  <span className="text-muted-foreground">daily active apps</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-64 h-48 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <div className="text-center">
                <div className="font-heading text-5xl font-bold gradient-text mb-2">99.99%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
