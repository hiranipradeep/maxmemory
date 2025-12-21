import { Brain, Layers, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Semantic Memory',
    description: 'Store and retrieve memories based on meaning, not just keywords. Our advanced embedding system understands context and relationships.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Layers,
    title: 'Hierarchical Storage',
    description: 'Organize memories in intelligent hierarchies. From quick facts to deep knowledge, access the right level of detail instantly.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Zap,
    title: 'Real-time Sync',
    description: 'Memories sync across all your AI applications in milliseconds. Never lose context, even across different platforms.',
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'End-to-end encryption ensures your memories stay private. You control who and what has access to your data.',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
];

export const ContentSection = () => {
  return (
    <section id="features" className="py-24 relative bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6 border border-primary/20">
            Why MaxMemory
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            The Memory Layer{' '}
            <span className="gradient-text">Your AI Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Traditional AI applications forget everything between sessions. MaxMemory changes that by providing a persistent, intelligent memory layer that makes your AI truly understand users over time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative glass-card p-8 hover:shadow-large transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Box */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground tracking-tight">
                  Built for <span className="gradient-text">Scale</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From prototypes to production, MaxMemory handles billions of memories with consistent sub-50ms retrieval times. Scale without worry.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-full bg-background text-sm border border-border">
                    <span className="text-primary font-bold">10B+</span>{' '}
                    <span className="text-muted-foreground">memories indexed</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-background text-sm border border-border">
                    <span className="text-primary font-bold">500K+</span>{' '}
                    <span className="text-muted-foreground">daily active apps</span>
                  </div>
                </div>
              </div>
              
              {/* Visual element */}
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-soft" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Zap className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
