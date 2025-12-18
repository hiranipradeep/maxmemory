import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Building2, Users, FileText, Cog, Database, Globe, CheckCircle, ArrowRight, Zap, Shield, Server, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Building2, title: 'Enterprise Scale', description: 'Handle millions of records with sub-millisecond retrieval across global infrastructure.' },
  { icon: Users, title: 'Team Collaboration', description: 'Shared memory spaces for seamless knowledge transfer across departments.' },
  { icon: FileText, title: 'Document Intelligence', description: 'Extract and organize insights from corporate documents automatically.' },
  { icon: Cog, title: 'Workflow Automation', description: 'Trigger actions based on memory patterns and events for process optimization.' },
  { icon: Database, title: 'Data Integration', description: 'Connect with existing enterprise systems through robust API and webhooks.' },
  { icon: Globe, title: 'Global Deployment', description: 'Multi-region infrastructure for worldwide access with data residency options.' },
];

const stats = [
  { value: '10M+', label: 'API Calls/Day', icon: Zap },
  { value: '99.99%', label: 'Uptime SLA', icon: Server },
  { value: '500+', label: 'Enterprise Clients', icon: Building2 },
  { value: '6', label: 'Global Regions', icon: Globe },
];

const benefits = [
  'Dedicated infrastructure and resources',
  'Custom SLA and support packages',
  'On-premise deployment options',
  'Enterprise SSO integration',
  'Advanced security and compliance',
  'Dedicated success manager',
];

const integrations = [
  'Salesforce', 'SAP', 'Oracle', 'Microsoft 365', 'Slack', 'Jira', 'Confluence', 'ServiceNow'
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

export default function UseCaseEnterprise() {
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/20 mb-6"
            >
              <Building2 className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-muted-foreground">Enterprise Solutions</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Memory for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">Enterprise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Scale your organization's collective intelligence with enterprise-grade memory infrastructure designed for the world's most demanding applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Enterprise Docs
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
                    <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary mb-1">
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
                  Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">Enterprise Scale</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Every feature designed to meet the rigorous demands of large-scale organizations.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-orange-500/50 transition-all duration-300 h-full"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors"
                    >
                      <feature.icon className="w-6 h-6 text-orange-400" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ZoomSection>

        {/* Architecture Section */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal delay={0.2}>
                <div className="relative">
                  {/* Architecture visualization */}
                  <div className="glass-card p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-primary/10" />
                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <span className="text-sm text-muted-foreground">Global Infrastructure</span>
                      </div>
                      
                      {/* Network visualization */}
                      <div className="relative h-64">
                        {/* Central node */}
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500/50 flex items-center justify-center"
                        >
                          <Network className="w-8 h-8 text-orange-400" />
                        </motion.div>
                        
                        {/* Satellite nodes */}
                        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                          const x = 50 + 35 * Math.cos((angle * Math.PI) / 180);
                          const y = 50 + 35 * Math.sin((angle * Math.PI) / 180);
                          return (
                            <motion.div
                              key={angle}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              animate={{ scale: [1, 1.2, 1] }}
                              style={{ 
                                position: 'absolute',
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: 'translate(-50%, -50%)'
                              }}
                              className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center"
                            >
                              <Server className="w-4 h-4 text-primary" />
                            </motion.div>
                          );
                        })}
                        
                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                            const x = 50 + 35 * Math.cos((angle * Math.PI) / 180);
                            const y = 50 + 35 * Math.sin((angle * Math.PI) / 180);
                            return (
                              <motion.line
                                key={angle}
                                x1="50"
                                y1="50"
                                x2={x}
                                y2={y}
                                stroke="hsl(var(--primary))"
                                strokeWidth="0.5"
                                strokeDasharray="2,2"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                              />
                            );
                          })}
                        </svg>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        {['US-East', 'EU-West', 'AP-South'].map((region, i) => (
                          <div key={region} className="text-center p-2 bg-secondary/50 rounded-lg">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                              className="w-2 h-2 rounded-full bg-green-500 mx-auto mb-1"
                            />
                            <span className="text-xs text-muted-foreground">{region}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">Architecture</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Our globally distributed infrastructure ensures your data is always available, secure, and performant, no matter where your teams are located.
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
                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ZoomSection>

        {/* Integrations Section */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Seamless <span className="gradient-text">Integrations</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Connect Memory Max with your existing enterprise tools and workflows.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((integration, index) => (
                <ScrollReveal key={integration} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-6 py-3 glass rounded-full text-sm font-medium"
                  >
                    {integration}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ZoomSection>

        {/* Security Section */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="glass-card p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-primary/5 to-orange-500/5" />
                <div className="relative z-10 grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold mb-2">SOC2 Type II</h3>
                    <p className="text-muted-foreground text-sm">Independently audited security controls</p>
                  </div>
                  <div className="text-center">
                    <Database className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold mb-2">Data Residency</h3>
                    <p className="text-muted-foreground text-sm">Choose where your data lives</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold mb-2">Enterprise SSO</h3>
                    <p className="text-muted-foreground text-sm">SAML, OIDC, and custom providers</p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-primary/10 to-orange-500/10" />
                <div className="relative z-10">
                  <Building2 className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Ready for Enterprise Scale?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Join hundreds of Fortune 500 companies using Memory Max to power their AI applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" className="group">
                      Contact Enterprise Sales
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Download Whitepaper
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
