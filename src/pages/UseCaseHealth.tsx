import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Heart, Brain, Activity, Shield, Stethoscope, Pill, CheckCircle, ArrowRight, Zap, Database, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Brain, title: 'Cognitive Health Tracking', description: 'Monitor and improve memory retention with AI-powered insights and personalized recommendations.' },
  { icon: Heart, title: 'Patient Data Management', description: 'Secure, encrypted storage for sensitive medical records with instant retrieval capabilities.' },
  { icon: Activity, title: 'Real-time Monitoring', description: 'Track vital health metrics with instant memory recall and predictive analytics.' },
  { icon: Shield, title: 'HIPAA Compliant', description: 'Enterprise-grade security for healthcare data protection with full audit trails.' },
  { icon: Stethoscope, title: 'Clinical Decision Support', description: 'AI-assisted diagnostics with comprehensive patient history at your fingertips.' },
  { icon: Pill, title: 'Medication Tracking', description: 'Never miss a dose with intelligent reminder systems and drug interaction alerts.' },
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA', icon: Activity },
  { value: '< 10ms', label: 'Query Response', icon: Zap },
  { value: '500+', label: 'Healthcare Partners', icon: Heart },
  { value: 'SOC2', label: 'Certified', icon: Shield },
];

const benefits = [
  'Reduce patient wait times by 40%',
  'Improve diagnostic accuracy with complete history',
  'Eliminate duplicate tests and procedures',
  'Enable seamless care coordination',
  'Reduce administrative burden by 60%',
  'Achieve full regulatory compliance',
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

const ZoomSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
};

export default function UseCaseHealth() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NeuralBackground nodeCount={40} className="opacity-30" />
      <Navbar />
      
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6"
            >
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Healthcare Solutions</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Memory for <span className="gradient-text-multi">Healthcare</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Transform patient care with intelligent memory systems that enhance diagnostics, streamline records, and improve outcomes across the entire care continuum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <ZoomSection className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-6 text-center"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-heading font-bold gradient-text-multi mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ZoomSection>

        {/* Features Grid */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                  Built for <span className="gradient-text">Healthcare Excellence</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Every feature designed with patient safety and care quality in mind.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300 h-full"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    >
                      <feature.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ZoomSection>

        {/* Benefits Section */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Transform Your <span className="gradient-text">Patient Care</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Memory Max provides healthcare organizations with the tools they need to deliver exceptional patient experiences while maintaining the highest standards of security and compliance.
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li 
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="relative">
                  {/* Animated visualization */}
                  <div className="glass-card p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="relative z-10 space-y-6">
                      {/* Memory nodes visualization */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                          />
                          <span className="text-sm">Patient Record Access</span>
                        </div>
                        <span className="text-xs text-primary">8ms</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                          />
                          <span className="text-sm">Clinical History Query</span>
                        </div>
                        <span className="text-xs text-primary">12ms</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent)/0.5)]"
                          />
                          <span className="text-sm">Medication Check</span>
                        </div>
                        <span className="text-xs text-primary">5ms</span>
                      </div>
                      
                      {/* Connection lines */}
                      <svg className="w-full h-24 mt-4" viewBox="0 0 300 80">
                        <motion.path
                          d="M 30 40 Q 150 10 270 40"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="30"
                          cy="40"
                          r="6"
                          fill="hsl(var(--primary))"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle
                          cx="150"
                          cy="20"
                          r="4"
                          fill="hsl(var(--accent))"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.circle
                          cx="270"
                          cy="40"
                          r="6"
                          fill="hsl(var(--primary))"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ZoomSection>

        {/* Security Section */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="glass-card p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
                <div className="relative z-10 grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold mb-2">HIPAA Compliant</h3>
                    <p className="text-muted-foreground text-sm">Full compliance with healthcare data regulations</p>
                  </div>
                  <div className="text-center">
                    <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold mb-2">End-to-End Encryption</h3>
                    <p className="text-muted-foreground text-sm">AES-256 encryption for all patient data</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold mb-2">SOC2 Type II</h3>
                    <p className="text-muted-foreground text-sm">Independently audited security controls</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ZoomSection>

        {/* CTA Section */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <div className="glass-card p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
                <div className="relative z-10">
                  <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Ready to Transform Healthcare Delivery?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Join leading healthcare organizations using Memory Max to deliver better patient outcomes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" className="group">
                      Schedule a Demo
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ZoomSection>
      </main>

      <Footer />
    </div>
  );
}
