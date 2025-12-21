import { Zap } from 'lucide-react';

const ImmersiveSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-4 block">
            Experience the Future
          </span>
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Dive Into
            <span className="block">Immersive Design</span>
          </h2>
          
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Seamless, cinematic experiences. Every interaction feels natural and intentional.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 text-primary-foreground font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-2xl mx-auto">
            {[
              { value: "10x", label: "Faster" },
              { value: "99%", label: "Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-primary-foreground/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveSection;
