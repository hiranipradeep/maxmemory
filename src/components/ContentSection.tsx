import { Brain, Layers, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export const ContentSection = () => {
  return (
    <section id="features" className="py-28 relative">
      <div className="absolute inset-0 bg-hero-glow opacity-40" />
      <div className="absolute inset-0 mesh-gradient" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why MaxMemory
          </motion.span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            The Memory Layer{' '}
            <span className="gradient-text">Your AI Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Traditional AI applications forget everything between sessions. MaxMemory changes that by providing a persistent, intelligent memory layer that makes your AI truly understand users over time.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group glass-card card-shine glow-border p-8"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 border border-primary/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Box */}
        <motion.div 
          className="max-w-4xl mx-auto mt-20 p-8 md:p-12 rounded-3xl glass-card gradient-border noise-overlay overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                Built for <span className="gradient-text">Scale</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From prototypes to production, MaxMemory handles billions of memories with consistent sub-50ms retrieval times. Scale without worry.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.div 
                  className="px-4 py-2 rounded-full bg-secondary/80 text-sm border border-border/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-primary font-bold">10B+</span>{' '}
                  <span className="text-muted-foreground">memories indexed</span>
                </motion.div>
                <motion.div 
                  className="px-4 py-2 rounded-full bg-secondary/80 text-sm border border-border/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-primary font-bold">500K+</span>{' '}
                  <span className="text-muted-foreground">daily active apps</span>
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="w-full md:w-64 h-48 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center border border-primary/20 glow-border"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <motion.div 
                  className="font-heading text-5xl md:text-6xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  99.99%
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">Uptime SLA</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
