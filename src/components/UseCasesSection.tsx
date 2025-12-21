import { MessageSquare, FileSearch, Users, Workflow, Bot, Database } from 'lucide-react';

const useCases = [
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Build chatbots that remember past conversations, user preferences, and context across sessions.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: FileSearch,
    title: 'Knowledge Base',
    description: 'Create intelligent search systems that understand semantic relationships between documents.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Users,
    title: 'Personalization',
    description: 'Deliver hyper-personalized experiences by remembering user behavior and preferences.',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Build AI agents that learn from past executions and improve over time.',
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: Bot,
    title: 'AI Assistants',
    description: 'Create personal AI assistants that truly understand and adapt to individual users.',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Database,
    title: 'RAG Systems',
    description: 'Power retrieval-augmented generation with intelligent, contextual memory retrieval.',
    color: 'bg-rose-500/10 text-rose-600',
  },
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 relative bg-background">
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-6 border border-accent/20">
            Use Cases
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Endless <span className="gradient-text">Possibilities</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From simple chatbots to complex enterprise systems, MaxMemory adapts to your needs.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group glass-card p-6 hover:shadow-large transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center mb-5`}>
                <useCase.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
