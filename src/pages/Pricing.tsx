import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Check, Zap, Brain, Rocket, Crown, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for side projects and experimentation',
    features: [
      { text: '10,000 memory operations/month', included: true },
      { text: '100MB storage', included: true },
      { text: 'Basic vector search', included: true },
      { text: 'Community support', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    icon: Brain,
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'For growing applications that need more power',
    features: [
      { text: '500,000 memory operations/month', included: true },
      { text: '10GB storage', included: true },
      { text: 'Advanced vector search', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom integrations', included: false },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Scale',
    icon: Rocket,
    monthlyPrice: 199,
    yearlyPrice: 159,
    description: 'For teams building production AI applications',
    features: [
      { text: 'Unlimited memory operations', included: true },
      { text: '100GB storage', included: true },
      { text: 'Premium vector search', included: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom integrations', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Custom solutions for large organizations',
    features: [
      { text: 'Custom volume', included: true },
      { text: 'Unlimited storage', included: true },
      { text: 'Dedicated infrastructure', included: true },
      { text: 'Dedicated support', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'On-premise option', included: true },
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

const faqs = [
  {
    question: 'What counts as a memory operation?',
    answer: 'A memory operation includes storing, retrieving, updating, or deleting a memory entry. Vector search queries count as one operation each.',
  },
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Yes! You can change your plan at any time. Upgrades are instant, and downgrades take effect at the next billing cycle.',
  },
  {
    question: 'Is there a free trial for paid plans?',
    answer: 'All paid plans come with a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'What happens if I exceed my limits?',
    answer: 'We will notify you before you reach your limit. You can upgrade or purchase additional capacity at any time.',
  },
];

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<{ plan: number; feature: number } | null>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <NeuralBackground nodeCount={35} className="opacity-20" />
      <Navbar />
      
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <ScrollReveal>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6"
              >
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Simple, Transparent Pricing</span>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                Choose Your <span className="gradient-text-multi">Memory</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
                Scale your AI application with flexible pricing that grows with you.
              </p>
            </ScrollReveal>

            {/* Billing Toggle */}
            <ScrollReveal delay={0.2}>
              <div className="flex items-center justify-center gap-4 mb-16">
                <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
                <motion.button
                  onClick={() => setIsYearly(!isYearly)}
                  className="relative w-16 h-8 rounded-full bg-secondary p-1"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg"
                    animate={{ x: isYearly ? 32 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </motion.button>
                <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Yearly
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">Save 20%</span>
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, planIndex) => (
                <ScrollReveal key={plan.name} delay={planIndex * 0.1}>
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: isYearly && plan.popular ? [1, 1.02, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                    className={`relative h-full ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-primary-foreground z-10">
                        Most Popular
                      </div>
                    )}
                    
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`glass-card p-6 h-full flex flex-col relative overflow-hidden ${
                        plan.popular ? 'border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.2)]' : ''
                      }`}
                    >
                      {/* Background glow for popular */}
                      {plan.popular && (
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                      )}
                      
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4"
                        >
                          <plan.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        
                        <h3 className="text-xl font-heading font-bold mb-1">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                        
                        <div className="mb-6">
                          {plan.monthlyPrice !== null ? (
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={isYearly ? 'yearly' : 'monthly'}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                              >
                                <span className="text-4xl font-heading font-bold">
                                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                </span>
                                <span className="text-muted-foreground">/month</span>
                              </motion.div>
                            </AnimatePresence>
                          ) : (
                            <span className="text-2xl font-heading font-bold">Custom</span>
                          )}
                        </div>
                        
                        <ul className="space-y-3 mb-6 flex-grow">
                          {plan.features.map((feature, featureIndex) => (
                            <motion.li
                              key={feature.text}
                              onHoverStart={() => setHoveredFeature({ plan: planIndex, feature: featureIndex })}
                              onHoverEnd={() => setHoveredFeature(null)}
                              className="flex items-start gap-3 group"
                            >
                              <motion.div
                                animate={{
                                  scale: hoveredFeature?.plan === planIndex && hoveredFeature?.feature === featureIndex ? 1.2 : 1,
                                  rotate: hoveredFeature?.plan === planIndex && hoveredFeature?.feature === featureIndex ? 360 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                  feature.included 
                                    ? 'bg-primary/20 text-primary' 
                                    : 'bg-muted text-muted-foreground'
                                }`}
                              >
                                <Check className="w-3 h-3" />
                              </motion.div>
                              <span className={`text-sm ${feature.included ? '' : 'text-muted-foreground line-through'}`}>
                                {feature.text}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <Button 
                          variant={plan.popular ? 'hero' : 'outline'} 
                          className="w-full group"
                        >
                          {plan.cta}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Frequently Asked <span className="gradient-text">Questions</span>
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={faq.question} delay={index * 0.05}>
                  <motion.div
                    className="glass-card overflow-hidden"
                    animate={{ 
                      borderColor: expandedFaq === index ? 'hsl(var(--primary) / 0.5)' : 'hsl(var(--border) / 0.3)'
                    }}
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-heading font-semibold">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HelpCircle className="w-5 h-5 text-primary" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="px-6 pb-6 text-muted-foreground">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Join thousands of developers building smarter AI applications with Memory Max.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" size="lg">
                      Talk to Sales
                    </Button>
                  </div>
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

export default Pricing;
