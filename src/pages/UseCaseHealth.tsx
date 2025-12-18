import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Heart, Brain, Activity, Shield, Stethoscope, Pill } from 'lucide-react';

const features = [
  { icon: Brain, title: 'Cognitive Health Tracking', description: 'Monitor and improve memory retention with AI-powered insights.' },
  { icon: Heart, title: 'Patient Data Management', description: 'Secure, encrypted storage for sensitive medical records.' },
  { icon: Activity, title: 'Real-time Monitoring', description: 'Track vital health metrics with instant memory recall.' },
  { icon: Shield, title: 'HIPAA Compliant', description: 'Enterprise-grade security for healthcare data protection.' },
  { icon: Stethoscope, title: 'Clinical Decision Support', description: 'AI-assisted diagnostics with comprehensive patient history.' },
  { icon: Pill, title: 'Medication Tracking', description: 'Never miss a dose with intelligent reminder systems.' },
];

export default function UseCaseHealth() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NeuralBackground />
      <Navbar />
      
      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Healthcare Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Memory for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Healthcare</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform patient care with intelligent memory systems that enhance diagnostics, streamline records, and improve outcomes.
            </p>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
