import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ZoomSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const ZoomSection = ({ children, className = '', id }: ZoomSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Zoom in as section enters, zoom out as it exits
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.85, 0.95, 1, 0.95, 0.85]
  );
  
  // Opacity fade for smooth transitions
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0.3, 1, 1, 1, 0.3]
  );

  // Subtle Y movement for depth
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [60, 0, -60]
  );

  // Glow intensity based on scroll
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0.5, 1, 0.5, 0]
  );

  return (
    <div ref={sectionRef} className={`relative ${className}`} id={id}>
      {/* Transition glow effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: glowOpacity }}
      >
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />
      </motion.div>
      
      <motion.div
        style={{ scale, opacity, y }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
};
