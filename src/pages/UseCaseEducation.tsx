import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { GraduationCap, BookOpen, Users, Lightbulb, Target, Award } from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Adaptive Learning', description: 'Personalized study paths that evolve with student progress.' },
  { icon: GraduationCap, title: 'Student Performance', description: 'Track academic growth with intelligent analytics.' },
  { icon: Users, title: 'Collaborative Learning', description: 'Connect students and educators in real-time knowledge sharing.' },
  { icon: Lightbulb, title: 'Smart Flashcards', description: 'AI-generated study materials based on learning patterns.' },
  { icon: Target, title: 'Goal Tracking', description: 'Set and achieve learning milestones with progress visualization.' },
  { icon: Award, title: 'Certification Ready', description: 'Prepare for exams with spaced repetition algorithms.' },
];

export default function UseCaseEducation() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent">Education Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Memory for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionize learning with memory systems that adapt to each student's unique cognitive patterns.
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
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
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
