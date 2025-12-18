import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { TrendingUp, Lock, BarChart3, Wallet, PieChart, CreditCard, CheckCircle, ArrowRight, Zap, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: TrendingUp, title: 'Market Intelligence', description: 'Real-time market data with historical pattern recognition and predictive analytics.' },
  { icon: Lock, title: 'Secure Transactions', description: 'Bank-grade encryption for all financial operations with complete audit trails.' },
  { icon: BarChart3, title: 'Portfolio Analytics', description: 'AI-driven insights for optimal investment strategies and risk management.' },
  { icon: Wallet, title: 'Budget Tracking', description: 'Smart categorization and spending pattern analysis with anomaly detection.' },
  { icon: PieChart, title: 'Risk Assessment', description: 'Predictive models for informed decision making based on historical data.' },
  { icon: CreditCard, title: 'Fraud Detection', description: 'Instant anomaly detection with memory-based verification and alerts.' },
];

const stats = [
  { value: '$2.5B+', label: 'Transactions Processed', icon: CreditCard },
  { value: '< 5ms', label: 'Fraud Detection', icon: AlertTriangle },
  { value: '99.99%', label: 'Accuracy Rate', icon: TrendingUp },
  { value: 'PCI DSS', label: 'Compliant', icon: Shield },
];

const benefits = [
  'Real-time fraud detection and prevention',
  'Comprehensive transaction history analysis',
  'Automated compliance reporting',
  'Risk scoring and assessment',
  'Customer behavior insights',
  'Secure multi-tenant architecture',
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

export default function UseCaseFinance() {
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 mb-6"
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-muted-foreground">Finance Solutions</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Memory for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">Finance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Empower financial decisions with intelligent memory that tracks, analyzes, and predicts market movements with unparalleled accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Security Docs
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
                    <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary mb-1">
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
                  Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">Financial Excellence</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Enterprise-grade features designed for the most demanding financial applications.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-emerald-500/50 transition-all duration-300 h-full"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors"
                    >
                      <feature.icon className="w-6 h-6 text-emerald-400" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ZoomSection>

        {/* Real-time Dashboard Section */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Real-time <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">Intelligence</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Memory Max provides financial institutions with the speed and accuracy needed for modern trading, risk management, and fraud prevention.
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
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="relative">
                  {/* Trading visualization */}
                  <div className="glass-card p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-primary/10" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-muted-foreground">Transaction Monitor</span>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                          <span className="text-xs text-green-400">Live</span>
                        </motion.div>
                      </div>
                      
                      {/* Transaction list */}
                      <div className="space-y-3">
                        {[
                          { id: 'TXN-001', amount: '$12,450.00', status: 'verified', time: '2ms' },
                          { id: 'TXN-002', amount: '$8,320.50', status: 'verified', time: '3ms' },
                          { id: 'TXN-003', amount: '$156,000.00', status: 'analyzing', time: '...' },
                        ].map((txn, i) => (
                          <motion.div
                            key={txn.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                          >
                            <div>
                              <span className="text-xs text-muted-foreground">{txn.id}</span>
                              <div className="font-semibold">{txn.amount}</div>
                            </div>
                            <div className="text-right">
                              <span className={`text-xs ${txn.status === 'verified' ? 'text-green-400' : 'text-yellow-400'}`}>
                                {txn.status}
                              </span>
                              <div className="text-xs text-muted-foreground">{txn.time}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Chart simulation */}
                      <div className="mt-6 h-24 flex items-end gap-1">
                        {[40, 65, 45, 80, 55, 70, 60, 85, 50, 75, 65, 90].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="flex-1 bg-gradient-to-t from-emerald-500/50 to-emerald-500/20 rounded-t"
                          />
                        ))}
                      </div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-primary/5 to-emerald-500/5" />
                <div className="relative z-10 text-center">
                  <Lock className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Bank-Grade Security
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Every transaction is protected by multiple layers of security, ensuring your financial data remains safe and compliant.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    {['PCI DSS', 'SOC2 Type II', 'ISO 27001', 'GDPR'].map((cert, i) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 bg-secondary/50 rounded-xl"
                      >
                        <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <span className="text-sm font-semibold">{cert}</span>
                      </motion.div>
                    ))}
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
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-primary/10 to-emerald-500/10" />
                <div className="relative z-10">
                  <TrendingUp className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Ready to Transform Finance?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Join leading financial institutions using Memory Max for faster, more secure operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" className="group">
                      Schedule a Demo
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Contact Enterprise Sales
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
