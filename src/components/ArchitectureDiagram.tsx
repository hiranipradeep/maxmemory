import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  X
} from "lucide-react";

const pipelineSteps = [
  {
    icon: FileText,
    title: "Document Ingestion",
    details: "PDF, DOCX, Web URLs",
    expandedInfo: {
      description: "Capture and prepare documents from 50+ file formats with real-time API ingestion.",
      metrics: { throughput: "10K/min", formats: "50+" }
    }
  },
  {
    icon: Settings,
    title: "Pre-Processing",
    details: "OCR, Language Detection",
    expandedInfo: {
      description: "Validates documents with multi-language OCR and automatic encoding detection.",
      metrics: { accuracy: "99.5%", languages: "100+" }
    }
  },
  {
    icon: Sparkles,
    title: "Content Cleaning",
    details: "Noise Removal, Structuring",
    expandedInfo: {
      description: "Cleans raw text while preserving semantic meaning with intelligent filtering.",
      metrics: { noiseReduction: "95%", accuracy: "99%" }
    }
  },
  {
    icon: Layers,
    title: "Chunking Engine",
    details: "Semantic Splits",
    expandedInfo: {
      description: "Intelligently splits documents into optimal chunks maintaining coherence.",
      metrics: { avgSize: "512 tokens", coherence: "98%" }
    }
  },
  {
    icon: Cpu,
    title: "Embedding Generation",
    details: "Vector Conversion",
    expandedInfo: {
      description: "Converts text to high-dimensional vectors with GPU-accelerated inference.",
      metrics: { dimensions: "1536", latency: "<20ms" }
    }
  },
  {
    icon: Database,
    title: "Vector Storage",
    details: "FAISS, Pinecone",
    expandedInfo: {
      description: "Stores embeddings for lightning-fast similarity search at scale.",
      metrics: { capacity: "1B+", queryTime: "<10ms" }
    }
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    details: "Entity Extraction",
    expandedInfo: {
      description: "Builds semantic relationships between entities across documents.",
      metrics: { entities: "500+", accuracy: "95%" }
    }
  },
  {
    icon: Zap,
    title: "Memory Optimization",
    details: "Deduplication, Scoring",
    expandedInfo: {
      description: "Optimizes stored memories for relevance with intelligent ranking.",
      metrics: { savings: "40%", accuracy: "97%" }
    }
  },
  {
    icon: Search,
    title: "Query & Recall",
    details: "Semantic Search",
    expandedInfo: {
      description: "Retrieves relevant memories with hybrid semantic and keyword search.",
      metrics: { precision: "95%", latency: "<15ms" }
    }
  },
  {
    icon: LayoutGrid,
    title: "Context Builder",
    details: "Token Management",
    expandedInfo: {
      description: "Assembles retrieved chunks into coherent context for LLM consumption.",
      metrics: { maxTokens: "128K", efficiency: "95%" }
    }
  },
  {
    icon: Brain,
    title: "LLM Reasoning",
    details: "GPT, Claude, Llama",
    expandedInfo: {
      description: "Leverages LLMs with memory-augmented context for grounded responses.",
      metrics: { models: "10+", accuracy: "98%" }
    }
  },
  {
    icon: MessageSquare,
    title: "Response & Update",
    details: "Feedback Loop",
    expandedInfo: {
      description: "Delivers responses while updating memory based on interactions.",
      metrics: { response: "<100ms", learning: "Real-time" }
    }
  }
];

export const ArchitectureDiagram = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden bg-background">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            System Architecture
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-foreground">
            How <span className="gradient-text">MaxMemory</span> Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive pipeline transforming documents into intelligent memory
          </p>
        </motion.div>

        {/* Pipeline Grid - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {pipelineSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative"
            >
              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 group ${
                  expandedIndex === index 
                    ? 'bg-primary/10 border-primary/50 shadow-lg shadow-primary/10' 
                    : 'bg-card/60 border-border/50 hover:border-primary/30 hover:bg-card/80'
                }`}
              >
                {/* Step Number */}
                <div className="absolute top-2 right-2 text-[10px] font-mono text-muted-foreground/50">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon with animated ring */}
                <div className="relative mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    expandedIndex === index 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted/50 text-primary group-hover:bg-primary/20'
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  {expandedIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-primary"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className={`font-heading text-sm font-semibold mb-1 transition-colors ${
                  expandedIndex === index ? 'text-primary' : 'text-foreground'
                }`}>
                  {step.title}
                </h3>

                {/* Details */}
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {step.details}
                </p>

                {/* Expand indicator */}
                <ChevronRight className={`absolute bottom-3 right-3 w-4 h-4 text-muted-foreground/50 transition-transform duration-300 ${
                  expandedIndex === index ? 'rotate-90' : 'group-hover:translate-x-0.5'
                }`} />
              </motion.button>

              {/* Expanded Panel */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-20 left-0 right-0 mt-2 p-4 rounded-xl bg-card border border-primary/30 shadow-xl shadow-primary/10"
                  >
                    <button
                      onClick={() => setExpandedIndex(null)}
                      className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
                    >
                      <X className="w-3 h-3 text-muted-foreground" />
                    </button>
                    <p className="text-sm text-muted-foreground mb-3 pr-4">
                      {step.expandedInfo.description}
                    </p>
                    <div className="flex gap-2">
                      {Object.entries(step.expandedInfo.metrics).map(([key, value]) => (
                        <div key={key} className="flex-1 bg-muted/30 rounded-lg px-2 py-1.5 text-center">
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          <div className="text-sm font-semibold text-primary">{value}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Animated Flow Line */}
        <div className="mt-8 relative h-1 bg-muted/30 rounded-full overflow-hidden">
          <motion.div
            className="absolute h-full w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Compact Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {[
            { value: "12", label: "Stages" },
            { value: "<100ms", label: "Latency" },
            { value: "99.9%", label: "Accuracy" },
            { value: "∞", label: "Scale" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
