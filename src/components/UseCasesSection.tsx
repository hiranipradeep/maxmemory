import { MessageSquare, FileSearch, Users, Workflow, Bot, Database } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const useCases = [
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Build chatbots that remember past conversations, user preferences, and context across sessions.',
    gradient: 'from-primary to-primary/60',
  },
  {
    icon: FileSearch,
    title: 'Knowledge Base',
    description: 'Create intelligent search systems that understand semantic relationships between documents.',
    gradient: 'from-accent to-accent/60',
  },
  {
    icon: Users,
    title: 'Personalization',
    description: 'Deliver hyper-personalized experiences by remembering user behavior and preferences.',
    gradient: 'from-primary via-accent to-primary',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Build AI agents that learn from past executions and improve over time.',
    gradient: 'from-accent via-primary to-accent',
  },
  {
    icon: Bot,
    title: 'AI Assistants',
    description: 'Create personal AI assistants that truly understand and adapt to individual users.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Database,
    title: 'RAG Systems',
    description: 'Power retrieval-augmented generation with intelligent, contextual memory retrieval.',
    gradient: 'from-accent to-primary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export const UseCasesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.85, 0.95, 1, 0.95, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0.3, 1, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0.5, 1, 0.5, 0]);

  return (
    <div ref={sectionRef} className="relative">
      {/* Transition glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: glowOpacity }}>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-accent/10 to-transparent" />
      </motion.div>
      
      <motion.section id="use-cases" className="py-28 relative overflow-hidden" style={{ scale, opacity, y }}>
      <div className="absolute inset-0 bg-card/40" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-6 border border-accent/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Use Cases
          </motion.span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Endless <span className="gradient-text-multi">Possibilities</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            From simple chatbots to complex enterprise systems, MaxMemory adapts to your needs.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="group glass-card card-shine glow-border p-6 relative"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative z-10">
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <useCase.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
    </div>
  );
};
