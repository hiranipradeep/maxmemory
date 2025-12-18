import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Brain, Zap, Shield, Users, Sparkles, Network } from 'lucide-react';

const teamMembers = [
  { name: 'Alex Chen', role: 'CEO & Founder', image: 'AC' },
  { name: 'Sarah Kim', role: 'CTO', image: 'SK' },
  { name: 'Marcus Johnson', role: 'Head of AI', image: 'MJ' },
  { name: 'Elena Rodriguez', role: 'Lead Engineer', image: 'ER' },
  { name: 'David Park', role: 'Product Lead', image: 'DP' },
  { name: 'Lisa Wang', role: 'Design Director', image: 'LW' },
];

const timeline = [
  { year: '2021', title: 'The Spark', description: 'Founded with a vision to revolutionize AI memory systems.' },
  { year: '2022', title: 'First Breakthrough', description: 'Launched our first vector memory API with 10x faster retrieval.' },
  { year: '2023', title: 'Scale Achieved', description: 'Reached 1M+ API calls per day across 500+ companies.' },
  { year: '2024', title: 'The Future', description: 'Introducing multi-modal memory with real-time learning.' },
];

const values = [
  { icon: Brain, title: 'Innovation First', description: 'Pushing the boundaries of what AI memory can achieve.' },
  { icon: Shield, title: 'Privacy by Design', description: 'Your data belongs to you. Always encrypted, never compromised.' },
  { icon: Users, title: 'Community Driven', description: 'Built by developers, for developers. Open source at heart.' },
];

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

const HexagonFrame = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <clipPath id="hexClip">
          <polygon points="50,2 95,25 95,75 50,98 5,75 5,25" />
        </clipPath>
      </defs>
      <polygon
        points="50,2 95,25 95,75 50,98 5,75 5,25"
        fill="none"
        stroke="url(#hexGradient)"
        strokeWidth="1"
        className="animate-pulse-glow"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center" style={{ clipPath: 'polygon(50% 2%, 95% 25%, 95% 75%, 50% 98%, 5% 75%, 5% 25%)' }}>
      {children}
    </div>
  </div>
);

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <NeuralBackground nodeCount={40} className="opacity-30" />
      <Navbar />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto max-w-5xl text-center relative">
            <ScrollReveal>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
              >
                <Network className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">The Neural Architecture</span>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                Building the{' '}
                <span className="gradient-text-multi">Synapses</span>
                <br />of the Future
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're on a mission to give every AI application the gift of memory—
                persistent, scalable, and intelligent.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4" ref={timelineRef}>
          <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
                History of <span className="gradient-text">Memory</span>
              </h2>
            </ScrollReveal>
            
            <div className="relative">
              {/* Animated Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/30 -translate-x-1/2">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-accent to-primary"
                  style={{ height: lineHeight }}
                />
              </div>
              
              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 0.1}>
                  <div className={`flex items-center gap-8 mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="glass-card p-6 inline-block">
                        <span className="text-primary font-heading font-bold text-2xl">{item.year}</span>
                        <h3 className="text-xl font-heading font-semibold mt-2">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]"
                    />
                    
                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
                Core <span className="gradient-text">Values</span>
              </h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ 
                      rotateY: 5, 
                      rotateX: -5,
                      scale: 1.02 
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="glass-card p-8 h-full relative overflow-hidden group"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6"
                      >
                        <value.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
                The <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                A network of brilliant minds working together to shape the future of AI memory.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ scale: 1.1, y: -10 }}
                    className="text-center group"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 relative">
                      {/* Hexagon frame with glow */}
                      <div className="absolute inset-0">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <defs>
                            <linearGradient id={`hexGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="hsl(var(--primary))" />
                              <stop offset="100%" stopColor="hsl(var(--accent))" />
                            </linearGradient>
                          </defs>
                          <polygon
                            points="50,5 93,25 93,75 50,95 7,75 7,25"
                            fill="hsl(var(--card))"
                            stroke={`url(#hexGrad-${index})`}
                            strokeWidth="2"
                            className="group-hover:filter group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300"
                          />
                        </svg>
                      </div>
                      {/* Avatar content */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-heading font-bold gradient-text-multi">{member.image}</span>
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-sm">{member.name}</h3>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="glass-card p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
                <div className="relative z-10">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Ready to Join the Network?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Become part of the future of AI memory. Start building with Memory Max today.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                  >
                    Get Started Free
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
