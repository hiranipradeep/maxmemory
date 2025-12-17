import { MessageSquare, FileSearch, Users, Workflow, Bot, Database } from 'lucide-react';

const useCases = [
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Build chatbots that remember past conversations, user preferences, and context across sessions.',
    color: 'from-primary to-primary/50',
  },
  {
    icon: FileSearch,
    title: 'Knowledge Base',
    description: 'Create intelligent search systems that understand semantic relationships between documents.',
    color: 'from-accent to-accent/50',
  },
  {
    icon: Users,
    title: 'Personalization',
    description: 'Deliver hyper-personalized experiences by remembering user behavior and preferences.',
    color: 'from-primary to-accent',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Build AI agents that learn from past executions and improve over time.',
    color: 'from-accent to-primary',
  },
  {
    icon: Bot,
    title: 'AI Assistants',
    description: 'Create personal AI assistants that truly understand and adapt to individual users.',
    color: 'from-primary to-primary/50',
  },
  {
    icon: Database,
    title: 'RAG Systems',
    description: 'Power retrieval-augmented generation with intelligent, contextual memory retrieval.',
    color: 'from-accent to-accent/50',
  },
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-card/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Use Cases
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Endless Possibilities
          </h2>
          <p className="text-muted-foreground text-lg">
            From simple chatbots to complex enterprise systems, MaxMemory adapts to your needs.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
