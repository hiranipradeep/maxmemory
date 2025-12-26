import { motion } from "framer-motion";
import { 
  FileText, 
  Settings, 
  Sparkles, 
  Layers, 
  Cpu, 
  Database, 
  Network, 
  Zap, 
  Search, 
  LayoutGrid, 
  Brain, 
  MessageSquare,
  ChevronDown
} from "lucide-react";

const pipelineSteps = [
  {
    icon: FileText,
    title: "Document Ingestion",
    subtitle: "User / System Input",
    details: ["PDF, DOCX, TXT", "Web URL, Email", "Notes & Documents"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Settings,
    title: "Pre-Processing Layer",
    details: ["File validation", "Language detection", "Text extraction (OCR)", "Metadata extraction"],
    color: "from-cyan-500 to-teal-500"
  },
  {
    icon: Sparkles,
    title: "Content Cleaning",
    details: ["Remove noise", "Normalize text", "Section detection", "Paragraph structuring"],
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Layers,
    title: "Chunking Engine",
    details: ["Semantic chunking", "Token optimization", "Context-preserving splits"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Cpu,
    title: "Embedding Generation",
    details: ["Chunks → Vectors", "OpenAI / BGE / E5", "High-dimensional space"],
    color: "from-emerald-500 to-primary"
  },
  {
    icon: Database,
    title: "Vector Storage",
    details: ["Pinecone / Weaviate", "FAISS indexing", "User isolation"],
    color: "from-primary to-violet-500"
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    subtitle: "Optional Enhancement",
    details: ["Entity extraction", "Relationship mapping", "Cross-doc linking"],
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Memory Optimization",
    details: ["Deduplication", "Importance scoring", "Relevance weighting"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Search,
    title: "Query & Recall",
    details: ["Semantic search", "Top-K retrieval", "Similarity matching"],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: LayoutGrid,
    title: "Context Builder",
    details: ["Rank & merge chunks", "Token management", "Prompt-ready context"],
    color: "from-rose-500 to-orange-500"
  },
  {
    icon: Brain,
    title: "LLM Reasoning",
    details: ["GPT / Claude / Local", "Memory as context", "Grounded responses"],
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: MessageSquare,
    title: "Response & Update",
    details: ["Answer to user", "Feedback loop", "Memory reinforcement"],
    color: "from-amber-500 to-yellow-500"
  }
];

// Animated data flow particle component
const DataFlowParticle = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
    initial={{ y: 0, opacity: 0, scale: 0.5 }}
    animate={{ 
      y: [0, 100], 
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1, 0.5]
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Animated connecting arrow between stages
const FlowArrow = ({ index }: { index: number }) => (
  <div className="absolute left-1/2 -translate-x-1/2 h-8 flex flex-col items-center justify-center" style={{ top: '100%' }}>
    {/* Animated line */}
    <div className="relative w-0.5 h-full overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 to-primary"
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{
          duration: 1.5,
          delay: index * 0.15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
    {/* Arrow head */}
    <motion.div
      animate={{ y: [0, 3, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown className="w-4 h-4 text-primary" />
    </motion.div>
  </div>
);

// Mobile flow arrow
const MobileFlowArrow = ({ index }: { index: number }) => (
  <div className="absolute left-6 -translate-x-1/2 h-6 flex flex-col items-center justify-center" style={{ top: '100%' }}>
    <div className="relative w-0.5 h-full overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 to-primary"
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{
          duration: 1.5,
          delay: index * 0.1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  </div>
);

export const ArchitectureDiagram = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            System Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">MemoryMax</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive pipeline that transforms your documents into intelligent, queryable memory
          </p>
        </motion.div>

        {/* Pipeline Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop View - Vertical Flow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Central Animated Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 via-primary/30 to-yellow-500/30" />
                {/* Multiple flowing particles */}
                {[0, 0.4, 0.8, 1.2, 1.6].map((delay, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-8 rounded-full bg-gradient-to-b from-transparent via-primary to-transparent"
                    initial={{ top: '-5%' }}
                    animate={{ top: '105%' }}
                    transition={{
                      duration: 4,
                      delay,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
              
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Connecting line from card to center */}
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 h-0.5 w-[5%] overflow-hidden ${
                      index % 2 === 0 ? 'right-[50%] mr-6' : 'left-[50%] ml-6'
                    }`}
                  >
                    <motion.div
                      className={`absolute top-0 h-full w-full bg-gradient-to-r ${
                        index % 2 === 0 ? 'from-primary/50 to-primary' : 'from-primary to-primary/50'
                      }`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                      style={{ transformOrigin: index % 2 === 0 ? 'right' : 'left' }}
                    />
                    {/* Flowing dot on horizontal line */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50"
                      initial={{ x: index % 2 === 0 ? '100%' : '-100%', opacity: 0 }}
                      animate={{ 
                        x: index % 2 === 0 ? [100, 0] : [0, 100],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  {/* Content Card */}
                  <div className={`w-[45%] ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                        {index % 2 !== 0 && (
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-bold text-foreground">{step.title}</h3>
                          {step.subtitle && (
                            <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                          )}
                        </div>
                        {index % 2 === 0 && (
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                            <step.icon className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                      <ul className={`text-sm text-muted-foreground space-y-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                        {step.details.map((detail, i) => (
                          <li key={i} className={`flex items-center gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                            {index % 2 !== 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />}
                            <span>{detail}</span>
                            {index % 2 === 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <step.icon className="w-6 h-6 text-white relative z-10" />
                    </motion.div>
                    
                    {/* Downward arrow indicator (except last) */}
                    {index < pipelineSteps.length - 1 && (
                      <motion.div
                        className="absolute left-1/2 -translate-x-1/2 mt-2"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ChevronDown className="w-5 h-5 text-primary/70" />
                      </motion.div>
                    )}
                  </div>

                  {/* Empty Space */}
                  <div className="w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View - Single Column */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Left Animated Line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 via-primary/30 to-yellow-500/30" />
                {/* Flowing particles */}
                {[0, 0.6, 1.2].map((delay, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-6 rounded-full bg-gradient-to-b from-transparent via-primary to-transparent"
                    initial={{ top: '-3%' }}
                    animate={{ top: '103%' }}
                    transition={{
                      duration: 5,
                      delay,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
              
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative flex items-start mb-8 pl-16"
                >
                  {/* Node */}
                  <div className="absolute left-0 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2, delay: index * 0.1, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <step.icon className="w-5 h-5 text-white relative z-10" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                  >
                    <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                    {step.subtitle && (
                      <p className="text-xs text-primary mb-2">{step.subtitle}</p>
                    )}
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "12", label: "Pipeline Stages" },
              { value: "<100ms", label: "Query Latency" },
              { value: "99.9%", label: "Accuracy Rate" },
              { value: "∞", label: "Scalability" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-all"
              >
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};