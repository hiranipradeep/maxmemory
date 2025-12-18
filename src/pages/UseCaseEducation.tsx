import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { GraduationCap, BookOpen, Users, Lightbulb, Target, Award, CheckCircle, ArrowRight, Zap, Brain, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: BookOpen, title: 'Adaptive Learning', description: 'Personalized study paths that evolve with student progress using AI-powered memory analysis.' },
  { icon: GraduationCap, title: 'Student Performance', description: 'Track academic growth with intelligent analytics and predictive insights.' },
  { icon: Users, title: 'Collaborative Learning', description: 'Connect students and educators in real-time knowledge sharing environments.' },
  { icon: Lightbulb, title: 'Smart Flashcards', description: 'AI-generated study materials based on individual learning patterns and retention rates.' },
  { icon: Target, title: 'Goal Tracking', description: 'Set and achieve learning milestones with progress visualization and reminders.' },
  { icon: Award, title: 'Certification Ready', description: 'Prepare for exams with spaced repetition algorithms optimized for long-term retention.' },
];

const stats = [
  { value: '2.5x', label: 'Faster Learning', icon: Zap },
  { value: '85%', label: 'Retention Rate', icon: Brain },
  { value: '10M+', label: 'Students', icon: Users },
  { value: '50K+', label: 'Institutions', icon: GraduationCap },
];

const benefits = [
  'Personalized learning paths for every student',
  'Real-time progress tracking and analytics',
  'Spaced repetition for optimal retention',
  'AI-powered content recommendations',
  'Seamless LMS integration',
  'Accessible learning for all abilities',
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

export default function UseCaseEducation() {
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-6"
            >
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Education Solutions</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Memory for <span className="gradient-text-multi">Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Revolutionize learning with memory systems that adapt to each student's unique cognitive patterns and learning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                For Institutions
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
                    <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
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
                  Designed for <span className="gradient-text">Learning Success</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Every feature crafted to enhance memory retention and accelerate learning outcomes.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-accent/50 transition-all duration-300 h-full"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                    >
                      <feature.icon className="w-6 h-6 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ZoomSection>

        {/* Learning Journey Section */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal delay={0.2}>
                <div className="relative order-2 lg:order-1">
                  {/* Learning visualization */}
                  <div className="glass-card p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10" />
                    <div className="relative z-10">
                      <div className="text-sm text-muted-foreground mb-4">Learning Progress</div>
                      
                      {/* Progress bars */}
                      <div className="space-y-4 mb-6">
                        {['Mathematics', 'Physics', 'Chemistry'].map((subject, i) => (
                          <div key={subject}>
                            <div className="flex justify-between text-sm mb-1">
                              <span>{subject}</span>
                              <span className="text-accent">{85 + i * 5}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${85 + i * 5}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Memory strength indicator */}
                      <div className="flex items-center justify-center gap-2 p-4 bg-secondary/50 rounded-xl">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-3 h-3 rounded-full bg-green-500"
                        />
                        <span className="text-sm">Memory Strength: <span className="text-accent font-semibold">Strong</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Accelerate <span className="gradient-text">Learning</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Our AI-powered memory system analyzes how each student learns best and creates personalized study experiences that maximize retention and understanding.
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
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ZoomSection>

        {/* Spaced Repetition Visualization */}
        <ZoomSection className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="glass-card p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5" />
                <div className="relative z-10 text-center">
                  <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Powered by Spaced Repetition
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Our algorithm determines the optimal time to review information, ensuring it moves from short-term to long-term memory efficiently.
                  </p>
                  
                  {/* Visual representation */}
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    {['Day 1', 'Day 3', 'Day 7', 'Day 14', 'Day 30'].map((day, i) => (
                      <motion.div
                        key={day}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="relative"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/50"
                        >
                          <Brain className="w-6 h-6 text-accent" />
                        </motion.div>
                        <span className="text-xs mt-2 block text-muted-foreground">{day}</span>
                        {i < 4 && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 + 0.1 }}
                            className="absolute top-1/2 left-full w-8 h-0.5 bg-accent/30 origin-left"
                            style={{ transform: 'translateY(-50%)' }}
                          />
                        )}
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
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10" />
                <div className="relative z-10">
                  <GraduationCap className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Ready to Transform Learning?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Join millions of students and educators using Memory Max to achieve better learning outcomes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" className="group">
                      Get Started Free
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg">
                      Talk to Education Team
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
