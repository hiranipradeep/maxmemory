import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const GlowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Large glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ opacity: isVisible ? 0.4 : 0 }}
      >
        <div className="w-64 h-64 rounded-full bg-gradient-radial from-primary/30 via-accent/10 to-transparent blur-3xl" />
      </motion.div>
      
      {/* Grid reveal effect */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        <svg width="200" height="200" className="opacity-20">
          <defs>
            <radialGradient id="gridGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
          <circle cx="100" cy="100" r="100" fill="url(#gridGlow)" />
          <circle cx="100" cy="100" r="80" fill="url(#grid)" mask="url(#circleMask)" />
        </svg>
      </motion.div>
      
      {/* Small cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000] w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.5
        }}
      />
    </>
  );
};
