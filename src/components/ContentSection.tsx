import { Brain, Layers, Zap, Shield, Network, Database, GitBranch, Cpu, Activity, Globe, Lock, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: Brain,
    title: 'Semantic Memory',
    description: 'Store and retrieve memories based on meaning, not just keywords. Our advanced embedding system understands context and relationships.',
    accentColor: 'from-violet-500 to-purple-600',
    glowColor: 'shadow-violet-500/30',
  },
  {
    icon: Layers,
    title: 'Hierarchical Storage',
    description: 'Organize memories in intelligent hierarchies. From quick facts to deep knowledge, access the right level of detail instantly.',
    accentColor: 'from-cyan-500 to-blue-600',
    glowColor: 'shadow-cyan-500/30',
  },
  {
    icon: Zap,
    title: 'Real-time Sync',
    description: 'Memories sync across all your AI applications in milliseconds. Never lose context, even across different platforms.',
    accentColor: 'from-amber-500 to-orange-600',
    glowColor: 'shadow-amber-500/30',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'End-to-end encryption ensures your memories stay private. You control who and what has access to your data.',
    accentColor: 'from-emerald-500 to-green-600',
    glowColor: 'shadow-emerald-500/30',
  },
];

const graphNodes = [
  { icon: Network, label: 'Neural', x: '10%', y: '20%', delay: 0 },
  { icon: Database, label: 'Store', x: '85%', y: '15%', delay: 0.2 },
  { icon: GitBranch, label: 'Branch', x: '5%', y: '70%', delay: 0.4 },
  { icon: Cpu, label: 'Process', x: '90%', y: '65%', delay: 0.6 },
  { icon: Activity, label: 'Monitor', x: '50%', y: '5%', delay: 0.8 },
  { icon: Globe, label: 'Global', x: '15%', y: '45%', delay: 1 },
  { icon: Lock, label: 'Secure', x: '80%', y: '40%', delay: 1.2 },
  { icon: Sparkles, label: 'AI', x: '45%', y: '85%', delay: 1.4 },
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
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const zoomVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

export const ContentSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotateNodes = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  // Zoom transition effects
  const sectionScale = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0.85, 0.95, 1, 0.95, 0.85]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0.3, 1, 1, 1, 0.3]);
  const sectionY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const transitionGlow = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0.6, 1, 0.6, 0]);

  return (
    <div className="relative">
      {/* Transition glow */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ opacity: transitionGlow }}>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/15 to-transparent" />
      </motion.div>
      
      <motion.section 
        id="features" 
        className="py-28 relative overflow-hidden" 
        ref={sectionRef}
        style={{ scale: sectionScale, opacity: sectionOpacity, y: sectionY }}
      >
      {/* Animated Background Glow */}
      <motion.div 
        className="absolute inset-0 bg-hero-glow"
        style={{ opacity: glowOpacity, scale: backgroundScale }}
      />
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Floating Graph Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {graphNodes.map((node, index) => (
          <motion.div
            key={node.label}
            className="absolute"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: node.delay, ease: "backOut" }}
          >
            <motion.div
              className="relative group"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4 + index * 0.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glow ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              />
              {/* Node circle */}
              <div className="relative w-12 h-12 rounded-full bg-background/80 border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/20">
                <node.icon className="w-5 h-5 text-primary" />
              </div>
              {/* Label */}
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-medium whitespace-nowrap">
                {node.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
        
        {/* Connecting lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 10% 20% Q 50% 50% 85% 15%"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M 5% 70% Q 50% 50% 90% 65%"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <motion.path
            d="M 15% 45% Q 50% 30% 80% 40%"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.9 }}
          />
        </svg>
      </div>
      
      <div className="container relative z-10 px-4">
        {/* Section Header with Zoom Effect */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6 border border-primary/20"
            variants={zoomVariants}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px hsl(var(--primary) / 0.4)"
            }}
          >
            Why MaxMemory
          </motion.span>
          <motion.h2 
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            variants={zoomVariants}
          >
            The Memory Layer{' '}
            <motion.span 
              className="gradient-text inline-block"
              whileInView={{
                textShadow: [
                  "0 0 20px hsl(var(--primary) / 0)",
                  "0 0 40px hsl(var(--primary) / 0.5)",
                  "0 0 20px hsl(var(--primary) / 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Your AI Needs
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
            variants={itemVariants}
          >
            Traditional AI applications forget everything between sessions. MaxMemory changes that by providing a persistent, intelligent memory layer that makes your AI truly understand users over time.
          </motion.p>
        </motion.div>

        {/* Features Grid with Enhanced Animations */}
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
              className="group relative"
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Glow effect on hover */}
              <motion.div 
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${feature.accentColor} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
              />
              
              <div className="relative glass-card card-shine glow-border p-8 h-full">
                {/* Animated corner accents */}
                <motion.div 
                  className="absolute top-0 left-0 w-20 h-20 overflow-hidden pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br ${feature.accentColor} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity`} />
                </motion.div>
                
                <motion.div 
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accentColor} flex items-center justify-center mb-6 relative overflow-hidden`}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Inner glow */}
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <feature.icon className="w-7 h-7 text-white relative z-10" />
                </motion.div>
                
                <motion.h3 
                  className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                
                {/* Bottom highlight line */}
                <motion.div 
                  className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${feature.accentColor} rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Box with Zoom Animation */}
        <motion.div 
          className="max-w-4xl mx-auto mt-20 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Outer glow */}
          <motion.div 
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-2xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.98, 1.02, 0.98]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative p-8 md:p-12 rounded-3xl glass-card gradient-border noise-overlay overflow-hidden">
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/40"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <motion.h3 
                  className="font-heading text-2xl md:text-3xl font-bold mb-4 tracking-tight"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Built for <span className="gradient-text">Scale</span>
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  From prototypes to production, MaxMemory handles billions of memories with consistent sub-50ms retrieval times. Scale without worry.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div 
                    className="px-4 py-2 rounded-full bg-secondary/80 text-sm border border-border/50 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: "0 0 20px hsl(var(--primary) / 0.3)"
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-primary font-bold relative z-10">10B+</span>{' '}
                    <span className="text-muted-foreground relative z-10">memories indexed</span>
                  </motion.div>
                  <motion.div 
                    className="px-4 py-2 rounded-full bg-secondary/80 text-sm border border-border/50 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: "0 0 20px hsl(var(--primary) / 0.3)"
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <span className="text-primary font-bold relative z-10">500K+</span>{' '}
                    <span className="text-muted-foreground relative z-10">daily active apps</span>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Stats Card with Zoom Effect */}
              <motion.div 
                className="w-full md:w-64 h-48 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center border border-primary/20 glow-border relative overflow-hidden"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                {/* Rotating ring */}
                <motion.div 
                  className="absolute inset-4 rounded-full border border-dashed border-primary/30"
                  style={{ rotate: rotateNodes }}
                />
                
                {/* Pulsing glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="text-center relative z-10">
                  <motion.div 
                    className="font-heading text-5xl md:text-6xl font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                  >
                    99.99%
                  </motion.div>
                  <motion.div 
                    className="text-sm text-muted-foreground font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    Uptime SLA
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
    </div>
  );
};
