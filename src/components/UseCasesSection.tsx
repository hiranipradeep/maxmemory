import { MessageSquare, FileSearch, Users, Workflow, Bot, Database } from 'lucide-react';

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

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/40" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-6 border border-accent/20">
            Use Cases
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Endless <span className="gradient-text-multi">Possibilities</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            From simple chatbots to complex enterprise systems, MaxMemory adapts to your needs.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group glass-card card-shine glow-border p-6 opacity-0 animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <useCase.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};