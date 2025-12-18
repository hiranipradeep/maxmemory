import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Building2, Users, FileText, Cog, Database, Globe } from 'lucide-react';

const features = [
  { icon: Building2, title: 'Enterprise Scale', description: 'Handle millions of records with sub-millisecond retrieval.' },
  { icon: Users, title: 'Team Collaboration', description: 'Shared memory spaces for seamless knowledge transfer.' },
  { icon: FileText, title: 'Document Intelligence', description: 'Extract and organize insights from corporate documents.' },
  { icon: Cog, title: 'Workflow Automation', description: 'Trigger actions based on memory patterns and events.' },
  { icon: Database, title: 'Data Integration', description: 'Connect with existing enterprise systems effortlessly.' },
  { icon: Globe, title: 'Global Deployment', description: 'Multi-region infrastructure for worldwide access.' },
];

export default function UseCaseEnterprise() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Building2 className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400">Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Memory for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">Enterprise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scale your organization's collective intelligence with enterprise-grade memory infrastructure.
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
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-orange-400" />
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
