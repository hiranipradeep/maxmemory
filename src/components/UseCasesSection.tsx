import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  FileSearch, 
  Users, 
  Workflow, 
  Bot, 
  Database,
  Zap,
  Shield,
  Globe,
  Cpu,
  BarChart3,
  Lock,
  ChevronRight
} from 'lucide-react';

const useCases = [
  {
    id: 'conversational',
    icon: MessageSquare,
    title: 'Conversational AI',
    shortTitle: 'Chat AI',
    description: 'Build chatbots that remember past conversations, user preferences, and context across sessions.',
    heroTitle: 'Intelligent Conversations',
    heroDescription: 'Create AI chatbots with persistent memory that understand context, remember user preferences, and deliver personalized responses across unlimited sessions.',
    features: [
      { icon: Zap, title: 'Real-time Sync', desc: 'Instant memory updates' },
      { icon: Shield, title: 'Context Aware', desc: 'Deep understanding' },
      { icon: Globe, title: 'Multi-language', desc: '100+ languages' },
    ],
    logos: ['OpenAI', 'Anthropic', 'Google', 'Meta', 'Cohere', 'Mistral'],
  },
  {
    id: 'knowledge',
    icon: FileSearch,
    title: 'Knowledge Base',
    shortTitle: 'Knowledge',
    description: 'Create intelligent search systems that understand semantic relationships between documents.',
    heroTitle: 'Smart Knowledge Systems',
    heroDescription: 'Transform your documents into an intelligent, searchable knowledge base with semantic understanding and contextual retrieval.',
    features: [
      { icon: Database, title: 'Vector Search', desc: 'Semantic retrieval' },
      { icon: Cpu, title: 'Smart Index', desc: 'Auto-organization' },
      { icon: BarChart3, title: 'Analytics', desc: 'Usage insights' },
    ],
    logos: ['Notion', 'Confluence', 'SharePoint', 'Dropbox', 'Google Drive', 'Box'],
  },
  {
    id: 'personalization',
    icon: Users,
    title: 'Personalization',
    shortTitle: 'Personal',
    description: 'Deliver hyper-personalized experiences by remembering user behavior and preferences.',
    heroTitle: 'Hyper-Personalized AI',
    heroDescription: 'Create truly personalized experiences that adapt to each user, learning from interactions to deliver tailored content and recommendations.',
    features: [
      { icon: Users, title: 'User Profiles', desc: 'Deep preferences' },
      { icon: Workflow, title: 'Behavior Learning', desc: 'Pattern recognition' },
      { icon: Lock, title: 'Privacy First', desc: 'Data protection' },
    ],
    logos: ['Segment', 'Amplitude', 'Mixpanel', 'Heap', 'Braze', 'Iterable'],
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Workflow Automation',
    shortTitle: 'Automation',
    description: 'Build AI agents that learn from past executions and improve over time.',
    heroTitle: 'Intelligent Automation',
    heroDescription: 'Deploy AI agents that learn from every interaction, continuously improving workflows and adapting to changing business requirements.',
    features: [
      { icon: Bot, title: 'AI Agents', desc: 'Autonomous tasks' },
      { icon: Zap, title: 'Fast Execution', desc: '<100ms latency' },
      { icon: Shield, title: 'Reliable', desc: '99.99% uptime' },
    ],
    logos: ['Zapier', 'Make', 'n8n', 'Retool', 'Temporal', 'Prefect'],
  },
  {
    id: 'assistants',
    icon: Bot,
    title: 'AI Assistants',
    shortTitle: 'Assistants',
    description: 'Create personal AI assistants that truly understand and adapt to individual users.',
    heroTitle: 'Personal AI Companions',
    heroDescription: 'Build AI assistants that form lasting relationships with users, remembering preferences, habits, and context to provide meaningful assistance.',
    features: [
      { icon: MessageSquare, title: 'Natural Dialog', desc: 'Human-like chat' },
      { icon: Cpu, title: 'Multi-modal', desc: 'Text, voice, vision' },
      { icon: Globe, title: 'Always On', desc: '24/7 availability' },
    ],
    logos: ['OpenAI', 'Anthropic', 'Google', 'Microsoft', 'Amazon', 'Apple'],
  },
  {
    id: 'rag',
    icon: Database,
    title: 'RAG Systems',
    shortTitle: 'RAG',
    description: 'Power retrieval-augmented generation with intelligent, contextual memory retrieval.',
    heroTitle: 'Advanced RAG Pipeline',
    heroDescription: 'Supercharge your RAG systems with intelligent memory that understands context, ranks relevance, and delivers precise, grounded responses.',
    features: [
      { icon: FileSearch, title: 'Hybrid Search', desc: 'Semantic + keyword' },
      { icon: Database, title: 'Vector Store', desc: '1B+ embeddings' },
      { icon: BarChart3, title: 'Re-ranking', desc: 'Precision tuning' },
    ],
    logos: ['Pinecone', 'Weaviate', 'Chroma', 'Qdrant', 'Milvus', 'FAISS'],
  },
];

export const UseCasesSection = () => {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section id="use-cases" className="py-24 relative bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-6 border border-cyan-500/20">
            Use Cases
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Endless <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Possibilities</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From simple chatbots to complex enterprise systems, MaxMemory adapts to your needs.
          </p>
        </motion.div>

        {/* Main Content with Side Navigation */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          {/* Left Navigation Menu */}
          <motion.nav 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-3 lg:sticky lg:top-24">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                {useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveCase(useCase)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left whitespace-nowrap lg:whitespace-normal w-full min-w-max lg:min-w-0 ${
                      activeCase.id === useCase.id
                        ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeCase.id === useCase.id
                        ? 'bg-cyan-500/20'
                        : 'bg-slate-800'
                    }`}>
                      <useCase.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm hidden lg:block">{useCase.title}</span>
                    <span className="font-medium text-sm lg:hidden">{useCase.shortTitle}</span>
                    {activeCase.id === useCase.id && (
                      <ChevronRight className="w-4 h-4 ml-auto hidden lg:block" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>

          {/* Main Feature Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden"
              >
                {/* Top Row: Logo Marquee */}
                <div className="border-b border-slate-800/50 py-4 px-6 bg-slate-900/50">
                  <div className="flex items-center justify-center gap-8 overflow-hidden">
                    <div className="flex items-center gap-8 animate-scroll-left">
                      {[...activeCase.logos, ...activeCase.logos].map((logo, i) => (
                        <div 
                          key={i}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50"
                        >
                          <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-cyan-400">{logo.charAt(0)}</span>
                          </div>
                          <span className="text-sm text-slate-300 font-medium whitespace-nowrap">{logo}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle Row: Hero Content */}
                <div className="px-8 py-12 text-center border-b border-slate-800/50">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-400 mb-6 shadow-lg shadow-cyan-500/25"
                  >
                    <activeCase.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    {activeCase.heroTitle}
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
                  >
                    {activeCase.heroDescription}
                  </motion.p>
                </div>

                {/* Bottom Row: 3-Column Feature List */}
                <div className="px-6 py-8 bg-slate-900/30">
                  <div className="grid md:grid-cols-3 gap-4">
                    {activeCase.features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.25 + index * 0.1 }}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-cyan-400/20 transition-all">
                          <feature.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                          <p className="text-slate-500 text-xs">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Row */}
                <div className="px-6 py-6 bg-gradient-to-r from-cyan-500/5 via-cyan-400/10 to-cyan-500/5 border-t border-cyan-500/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-900 flex items-center justify-center">
                            <span className="text-xs text-cyan-400 font-bold">{i}</span>
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-slate-400">
                        <span className="text-cyan-400 font-semibold">2,500+</span> teams using this
                      </span>
                    </div>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2">
                      Get Started
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
