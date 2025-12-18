import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { TrendingUp, Lock, BarChart3, Wallet, PieChart, CreditCard } from 'lucide-react';

const features = [
  { icon: TrendingUp, title: 'Market Intelligence', description: 'Real-time market data with historical pattern recognition.' },
  { icon: Lock, title: 'Secure Transactions', description: 'Bank-grade encryption for all financial operations.' },
  { icon: BarChart3, title: 'Portfolio Analytics', description: 'AI-driven insights for optimal investment strategies.' },
  { icon: Wallet, title: 'Budget Tracking', description: 'Smart categorization and spending pattern analysis.' },
  { icon: PieChart, title: 'Risk Assessment', description: 'Predictive models for informed decision making.' },
  { icon: CreditCard, title: 'Fraud Detection', description: 'Instant anomaly detection with memory-based verification.' },
];

export default function UseCaseFinance() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400">Finance Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Memory for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">Finance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empower financial decisions with intelligent memory that tracks, analyzes, and predicts market movements.
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
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
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
