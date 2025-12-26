import { useRef, useState, useEffect } from 'react';
import { MessageSquare, FileSearch, Database, Workflow, Bot, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const useCases = [
  {
    step: 1,
    label: 'CONNECT',
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Build chatbots that remember past conversations, user preferences, and context across sessions.',
    visualization: 'chat',
  },
  {
    step: 2,
    label: 'INGEST',
    icon: FileSearch,
    title: 'Knowledge Base',
    description: 'Create intelligent search systems that understand semantic relationships between documents.',
    visualization: 'documents',
  },
  {
    step: 3,
    label: 'EMBED',
    icon: Database,
    title: 'Vector Storage',
    description: 'Store and retrieve embeddings with lightning-fast semantic similarity search.',
    visualization: 'nodes',
  },
  {
    step: 4,
    label: 'ENRICH',
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Build AI agents that learn from past executions and improve over time.',
    visualization: 'cube',
  },
  {
    step: 5,
    label: 'RETRIEVE',
    icon: Bot,
    title: 'AI Assistants',
    description: 'Create personal AI assistants that truly understand and adapt to individual users.',
    visualization: 'assistant',
  },
  {
    step: 6,
    label: 'EVOLVE',
    icon: RefreshCw,
    title: 'Memory Lifecycle',
    description: 'Automatically update, derive, forget, and extend memories as your system learns.',
    visualization: 'hexagon',
  },
];

// Chat Visualization
const ChatVisualization = ({ isActive }: { isActive: boolean }) => (
  <div className="relative h-48 flex flex-col gap-3 p-4">
    <div className={`flex gap-3 items-start transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '0ms' }}>
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
        <Bot className="w-4 h-4 text-primary" />
      </div>
      <div className="bg-muted/50 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[200px]">
        <p className="text-xs text-foreground">How can I help you today?</p>
      </div>
    </div>
    <div className={`flex gap-3 items-start justify-end transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '200ms' }}>
      <div className="bg-primary/20 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[200px]">
        <p className="text-xs text-foreground">Remember our last conversation?</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
        <MessageSquare className="w-4 h-4 text-accent" />
      </div>
    </div>
    <div className={`flex gap-3 items-start transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '400ms' }}>
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
        <Bot className="w-4 h-4 text-primary" />
      </div>
      <div className="bg-muted/50 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[200px]">
        <p className="text-xs text-foreground">Of course! We discussed AI memory systems...</p>
      </div>
    </div>
  </div>
);

// Documents Visualization
const DocumentsVisualization = ({ isActive }: { isActive: boolean }) => (
  <div className="relative h-48 flex items-center justify-center">
    <div className="relative">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`absolute w-32 h-40 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: isActive 
              ? `translateX(${(i - 1) * 40}px) translateY(${Math.abs(i - 1) * 10}px) rotate(${(i - 1) * 5}deg)`
              : `translateY(20px)`,
            transitionDelay: `${i * 100}ms`,
            zIndex: 3 - Math.abs(i - 1),
          }}
        >
          <div className="p-3 space-y-2">
            <div className="w-full h-2 rounded bg-muted/50" />
            <div className="w-3/4 h-2 rounded bg-muted/30" />
            <div className="w-5/6 h-2 rounded bg-muted/30" />
            <div className="w-2/3 h-2 rounded bg-muted/30" />
          </div>
          <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${i * 100 + 300}ms` }}>
            <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Node Graph Visualization
const NodesVisualization = ({ isActive }: { isActive: boolean }) => {
  const nodes = [
    { x: 50, y: 30 }, { x: 80, y: 60 }, { x: 20, y: 70 },
    { x: 50, y: 90 }, { x: 85, y: 100 }, { x: 15, y: 110 },
  ];
  
  return (
    <div className="relative h-48 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 140">
        {/* Connection lines */}
        {nodes.map((node, i) => 
          nodes.slice(i + 1).map((target, j) => (
            <line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
              className={`stroke-primary/30 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}
              strokeWidth="0.5"
              style={{ transitionDelay: `${(i + j) * 50}ms` }}
            />
          ))
        )}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i} className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
            <circle cx={node.x} cy={node.y} r="6" className="fill-primary/20 stroke-primary" strokeWidth="1" />
            <circle cx={node.x} cy={node.y} r="2" className="fill-primary">
              {isActive && (
                <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
              )}
            </circle>
          </g>
        ))}
        {/* Flowing data particle */}
        {isActive && (
          <circle r="1.5" className="fill-accent">
            <animateMotion dur="3s" repeatCount="indefinite" path="M50,30 L80,60 L50,90 L20,70 L50,30" />
          </circle>
        )}
      </svg>
    </div>
  );
};

// 3D Cube Visualization
const CubeVisualization = ({ isActive }: { isActive: boolean }) => (
  <div className="relative h-48 flex items-center justify-center perspective-1000">
    <div className={`relative w-24 h-24 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ transformStyle: 'preserve-3d', transform: isActive ? 'rotateX(-20deg) rotateY(30deg)' : 'rotateX(0deg) rotateY(0deg)' }}>
      {/* Cube faces */}
      <div className="absolute inset-0 border-2 border-primary/50 bg-primary/10 backdrop-blur-sm" style={{ transform: 'translateZ(48px)' }}>
        <div className="p-2 text-[8px] text-primary font-mono">Vector</div>
      </div>
      <div className="absolute inset-0 border-2 border-accent/50 bg-accent/10 backdrop-blur-sm" style={{ transform: 'rotateY(90deg) translateZ(48px)' }}>
        <div className="p-2 text-[8px] text-accent font-mono">Graph</div>
      </div>
      <div className="absolute inset-0 border-2 border-primary/30 bg-primary/5" style={{ transform: 'rotateX(90deg) translateZ(48px)' }} />
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-lg blur-xl transition-opacity duration-500 ${isActive ? 'opacity-60' : 'opacity-0'}`} style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent)' }} />
    </div>
  </div>
);

// Assistant Visualization
const AssistantVisualization = ({ isActive }: { isActive: boolean }) => (
  <div className="relative h-48 flex items-center justify-center">
    <div className={`relative transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
      {/* Central AI */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
        <Bot className="w-10 h-10 text-primary" />
      </div>
      {/* Orbiting elements */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`absolute w-8 h-8 rounded-full bg-card/50 border border-border/50 flex items-center justify-center transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
          style={{
            top: '50%',
            left: '50%',
            transform: isActive 
              ? `translate(-50%, -50%) rotate(${i * 90}deg) translateX(60px) rotate(-${i * 90}deg)`
              : 'translate(-50%, -50%)',
            transitionDelay: `${i * 100}ms`,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-primary/50" />
        </div>
      ))}
      {/* Pulse rings */}
      {isActive && [1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-primary/20"
          style={{
            animation: `ping ${2 + i * 0.5}s cubic-bezier(0, 0, 0.2, 1) infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  </div>
);

// Hexagon Lifecycle Visualization
const HexagonVisualization = ({ isActive }: { isActive: boolean }) => {
  const labels = ['Update', 'Derive', 'Extend', 'Forget', 'Learn', 'Adapt'];
  
  return (
    <div className="relative h-48 flex items-center justify-center">
      <svg className="w-40 h-40" viewBox="0 0 100 100">
        {/* Hexagon path */}
        <polygon
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
          className={`fill-none stroke-primary/30 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}
          strokeWidth="1"
        />
        {/* Corner nodes with labels */}
        {[[50, 5], [90, 27.5], [90, 72.5], [50, 95], [10, 72.5], [10, 27.5]].map(([x, y], i) => (
          <g key={i} className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
            <circle cx={x} cy={y} r="4" className="fill-primary/30 stroke-primary" strokeWidth="1" />
            <text x={x} y={y as number + (y as number < 50 ? -8 : 12)} textAnchor="middle" className="fill-muted-foreground text-[6px] font-medium">
              {labels[i]}
            </text>
          </g>
        ))}
        {/* Rotating indicator */}
        {isActive && (
          <circle r="2" className="fill-accent">
            <animateMotion dur="4s" repeatCount="indefinite" path="M50,5 L90,27.5 L90,72.5 L50,95 L10,72.5 L10,27.5 Z" />
          </circle>
        )}
      </svg>
    </div>
  );
};

const visualizationMap: Record<string, React.FC<{ isActive: boolean }>> = {
  chat: ChatVisualization,
  documents: DocumentsVisualization,
  nodes: NodesVisualization,
  cube: CubeVisualization,
  assistant: AssistantVisualization,
  hexagon: HexagonVisualization,
};

export const UseCasesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.use-case-card');
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      
      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="use-cases" className="relative bg-background">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sticky Left Panel */}
          <div className="lg:w-2/5 lg:sticky lg:top-24 lg:h-fit py-16 lg:py-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-6 border border-accent/20">
              Use Cases
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Build <span className="gradient-text">Memory-First</span> AI Applications
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From simple chatbots to complex enterprise systems, MaxMemory provides the infrastructure for AI that truly remembers.
            </p>
            <Button size="lg" className="group">
              Get Started
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            
            {/* Progress indicators */}
            <div className="hidden lg:flex flex-col gap-3 mt-12">
              {useCases.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-12 bg-primary' 
                      : index < activeIndex 
                        ? 'w-8 bg-primary/50' 
                        : 'w-6 bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scrolling Right Panel */}
          <div ref={containerRef} className="lg:w-3/5 py-8 lg:py-24 space-y-8">
            {useCases.map((useCase, index) => {
              const Visualization = visualizationMap[useCase.visualization];
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={useCase.step}
                  className={`use-case-card group relative rounded-2xl border backdrop-blur-sm transition-all duration-500 overflow-hidden ${
                    isActive 
                      ? 'border-primary/50 bg-card/80 shadow-lg shadow-primary/5' 
                      : 'border-border/50 bg-card/40'
                  }`}
                >
                  {/* Glow effect */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.1), transparent 60%)',
                    }}
                  />
                  
                  <div className="relative p-6 lg:p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-xs font-mono font-bold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                        #{useCase.step} — {useCase.label}
                      </span>
                    </div>
                    
                    {/* Title and Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'bg-primary/20 text-primary' : 'bg-muted/50 text-muted-foreground'
                      }`}>
                        <useCase.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`font-heading text-xl font-semibold mb-2 transition-colors duration-300 ${
                          isActive ? 'text-foreground' : 'text-foreground/70'
                        }`}>
                          {useCase.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Visualization */}
                    <div className={`mt-6 rounded-xl bg-background/50 border border-border/30 overflow-hidden transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-50'
                    }`}>
                      <Visualization isActive={isActive} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
