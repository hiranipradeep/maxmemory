import { ArrowRight, FileText, Link2, Video, Code2, Database, Brain, Sparkles, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Glowing Core Component
const GlowingCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      {/* Inner glow */}
      <Sphere args={[0.8, 32, 32]}>
        <meshBasicMaterial color="#c4b5fd" transparent opacity={0.3} />
      </Sphere>
      {/* Outer glow */}
      <Sphere args={[1.3, 32, 32]}>
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.1} />
      </Sphere>
    </Float>
  );
};

// Floating Node Component for 3D scene
const FloatingNode = ({ position, color, scale = 0.15 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[scale, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
};

// Neural Connection Lines
const NeuralLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  const lines = [];
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 2;
    lines.push({
      start: [0, 0, 0] as [number, number, number],
      end: [Math.cos(angle) * radius, Math.sin(angle) * radius, (Math.random() - 0.5) * 0.5] as [number, number, number],
    });
  }

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line.start, ...line.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
        </line>
      ))}
    </group>
  );
};

// 3D Scene Component
const Scene3D = () => {
  const nodePositions: [number, number, number][] = [
    [-2, 1, 0], [2, 1, 0], [-1.5, -1, 0.5], [1.5, -1, -0.5],
    [-2.5, 0, 0], [2.5, 0, 0], [0, 2, 0], [0, -2, 0],
    [-1, 1.5, 0.3], [1, 1.5, -0.3], [-1, -1.5, -0.3], [1, -1.5, 0.3],
  ];

  const colors = ['#8b5cf6', '#06b6d4', '#3b82f6', '#a855f7', '#0ea5e9'];

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      
      <GlowingCore />
      <NeuralLines />
      
      {nodePositions.map((pos, i) => (
        <FloatingNode 
          key={i} 
          position={pos} 
          color={colors[i % colors.length]} 
          scale={0.1 + Math.random() * 0.1}
        />
      ))}
    </>
  );
};

// Data Widget Component
const DataWidget = ({ 
  icon: Icon, 
  label, 
  value, 
  color, 
  delay 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string; 
  color: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: -50, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "backOut" }}
    >
      {/* Glow effect */}
      <motion.div 
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${color} opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-500`}
      />
      
      <motion.div
        className="relative glass-card p-4 rounded-2xl border border-white/10 backdrop-blur-xl bg-background/40"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, y: -12 }}
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">{value}</div>
            <div className="text-xs text-muted-foreground">{label}</div>
          </div>
        </div>
        
        {/* Pulse indicator */}
        <motion.div 
          className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

// Data Flow Visualization
const DataFlowNode = ({ 
  icon: Icon, 
  label, 
  x, 
  y, 
  delay,
  color
}: { 
  icon: React.ElementType; 
  label: string; 
  x: string; 
  y: string; 
  delay: number;
  color: string;
}) => {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "backOut" }}
    >
      <motion.div
        className="relative"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow ring */}
        <motion.div 
          className={`absolute -inset-2 rounded-full ${color} opacity-30 blur-md`}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: delay * 0.5 }}
        />
        
        <div className={`relative w-12 h-12 rounded-xl ${color} flex items-center justify-center border border-white/20`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap font-medium">
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
};

// SVG Connection Lines with Animation
const ConnectionLines = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        <linearGradient id="lineGradientBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradientPurple" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Animated paths from left widgets to center */}
      <motion.path
        d="M 50 200 Q 200 200 350 350"
        fill="none"
        stroke="url(#lineGradientBlue)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.path
        d="M 80 320 Q 220 320 350 380"
        fill="none"
        stroke="url(#lineGradientPurple)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      />
      <motion.path
        d="M 60 440 Q 200 440 350 400"
        fill="none"
        stroke="url(#lineGradientBlue)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.9 }}
      />
      
      {/* Paths from center to right nodes */}
      <motion.path
        d="M 650 350 Q 800 280 920 200"
        fill="none"
        stroke="url(#lineGradientPurple)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.1 }}
      />
      <motion.path
        d="M 650 380 Q 800 380 950 350"
        fill="none"
        stroke="url(#lineGradientBlue)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.3 }}
      />
      <motion.path
        d="M 650 400 Q 800 450 900 520"
        fill="none"
        stroke="url(#lineGradientPurple)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
    </svg>
  );
};

// Glowing M Logo Component
const GlowingLogo = () => {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
    >
      {/* Outer glow rings */}
      <motion.div 
        className="absolute -inset-16 rounded-full bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-violet-600/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-2xl"
        animate={{ 
          scale: [1.1, 0.9, 1.1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Main logo container */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 p-[2px] shadow-2xl shadow-violet-500/50">
        <div className="w-full h-full rounded-3xl bg-background/90 backdrop-blur-xl flex items-center justify-center">
          <motion.span 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(139, 92, 246, 0)",
                "0 0 40px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            M
          </motion.span>
        </div>
      </div>
      
      {/* Orbiting particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-violet-400"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [
              Math.cos((i / 6) * Math.PI * 2) * 80,
              Math.cos((i / 6) * Math.PI * 2 + Math.PI) * 80,
              Math.cos((i / 6) * Math.PI * 2) * 80,
            ],
            y: [
              Math.sin((i / 6) * Math.PI * 2) * 80,
              Math.sin((i / 6) * Math.PI * 2 + Math.PI) * 80,
              Math.sin((i / 6) * Math.PI * 2) * 80,
            ],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

// Main Hero Section
export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [-20, 20]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [-20, 20]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.width / 2);
        mouseY.set(e.clientY - rect.height / 2);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const leftWidgets = [
    { icon: FileText, label: 'Notes', value: '1,250', color: 'from-violet-500 to-purple-600', delay: 0.3 },
    { icon: Link2, label: 'Links', value: '5,000', color: 'from-cyan-500 to-blue-600', delay: 0.5 },
    { icon: Video, label: 'Media', value: '842', color: 'from-pink-500 to-rose-600', delay: 0.7 },
  ];

  const rightNodes = [
    { icon: Code2, label: 'Code', x: '75%', y: '15%', color: 'bg-gradient-to-br from-emerald-500 to-green-600', delay: 0.4 },
    { icon: Database, label: 'Data', x: '85%', y: '35%', color: 'bg-gradient-to-br from-blue-500 to-cyan-600', delay: 0.6 },
    { icon: Brain, label: 'AI', x: '80%', y: '55%', color: 'bg-gradient-to-br from-violet-500 to-purple-600', delay: 0.8 },
    { icon: Globe, label: 'Web', x: '70%', y: '75%', color: 'bg-gradient-to-br from-amber-500 to-orange-600', delay: 1 },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Deep background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-violet-950/20" />
      <motion.div 
        className="absolute inset-0"
        style={{ x: parallaxX, y: parallaxY }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </motion.div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 3D Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Connection Lines SVG */}
      <div className="absolute inset-0 hidden lg:block">
        <ConnectionLines />
      </div>

      {/* Left Side - Data Widgets */}
      <motion.div 
        className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 space-y-4 hidden md:flex flex-col z-20"
        style={{ x: useTransform(parallaxX, v => v * 0.5), y: useTransform(parallaxY, v => v * 0.5) }}
      >
        {leftWidgets.map((widget, i) => (
          <DataWidget key={widget.label} {...widget} />
        ))}
      </motion.div>

      {/* Right Side - Data Flow Nodes */}
      <motion.div 
        className="absolute inset-0 hidden lg:block z-20"
        style={{ x: useTransform(parallaxX, v => v * -0.3), y: useTransform(parallaxY, v => v * -0.3) }}
      >
        {rightNodes.map((node, i) => (
          <DataFlowNode key={node.label} {...node} />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-30 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Central Logo */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlowingLogo />
          </motion.div>

          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-violet-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300">Long-term Memory Infrastructure</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Empower your AI with{' '}
            <motion.span 
              className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Memory Max API
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Scalable long-term memory for intelligent applications. Give your users persistent, contextual memory that works across any model or modality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button variant="hero" size="xl" className="group relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ opacity: 0.3 }}
              />
              <span className="relative flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started in 5 Mins
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="glass" size="xl" className="border-violet-500/30 hover:border-violet-500/50">
              View Documentation
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { value: '10M+', label: 'Memories Stored' },
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '<50ms', label: 'Latency' },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(139, 92, 246, 0)",
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 10px rgba(139, 92, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-violet-500/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-2 bg-gradient-to-b from-violet-400 to-cyan-400 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
