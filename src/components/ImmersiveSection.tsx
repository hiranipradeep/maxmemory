import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ImmersiveSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale from 0.7 to 1 as user scrolls
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.7, 1, 1]);
  
  // Border radius from 48px to 0 as it expands
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], [48, 0]);
  
  // Opacity for content
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.5], [60, 0]);
  
  // Section zoom transitions
  const { scrollYProgress: wrapperProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"]
  });
  
  const sectionScale = useTransform(wrapperProgress, [0, 0.1, 0.5, 0.9, 1], [0.85, 0.92, 1, 0.92, 0.85]);
  const sectionOpacity = useTransform(wrapperProgress, [0, 0.1, 0.3, 0.9, 1], [0.3, 0.8, 1, 1, 0.3]);
  const transitionGlow = useTransform(wrapperProgress, [0, 0.2, 0.4, 0.8, 1], [0, 0.5, 1, 0.5, 0]);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Transition glow */}
      <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ opacity: transitionGlow }}>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/10 to-transparent" />
      </motion.div>
      
      <motion.div style={{ scale: sectionScale, opacity: sectionOpacity }}>
        <section 
          ref={containerRef}
          className="relative min-h-[200vh] flex items-start justify-center py-20"
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ 
            scale,
            borderRadius,
          }}
          className="relative w-[95vw] h-[85vh] bg-gradient-to-br from-primary via-accent to-primary overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div 
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/30 to-transparent rounded-full blur-3xl"
              animate={{ 
                rotate: -360,
                scale: [1.2, 1, 1.2],
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <motion.div 
            style={{ opacity: contentOpacity, y: contentY }}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8"
          >
            <motion.span 
              className="text-white/70 text-sm font-medium tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Experience the Future
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 max-w-4xl leading-tight"
            >
              Dive Into
              <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Immersive Design
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-white/80 text-lg md:text-xl max-w-2xl mb-8"
            >
              Scroll-driven animations that create seamless, cinematic experiences. 
              Every interaction feels natural and intentional.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 shadow-2xl">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "10x", label: "Faster" },
                { value: "99%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
    </motion.div>
    </div>
  );
};

export default ImmersiveSection;
