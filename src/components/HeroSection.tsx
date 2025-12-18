import { ArrowRight, FileText, Link2, Video, Code2, Database, Brain, Sparkles, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";

// Neural Network Background with Zoom Animation
const NeuralNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Node structure
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      pulsePhase: number;
      layer: number;
    }

    let nodes: Node[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const w = window.innerWidth;
      const h = window.innerHeight;
      const centerX = w / 2;
      const centerY = h / 2;

      // Create layered neural network structure
      const layers = 5;
      const nodesPerLayer = [4, 6, 8, 6, 4];

      for (let layer = 0; layer < layers; layer++) {
        const layerX = centerX + (layer - 2) * (w * 0.18);
        const count = nodesPerLayer[layer];

        for (let i = 0; i < count; i++) {
          const spacing = (h * 0.6) / (count + 1);
          const y = centerY - h * 0.3 + spacing * (i + 1);

          nodes.push({
            x: layerX + (Math.random() - 0.5) * 30,
            y: y + (Math.random() - 0.5) * 30,
            baseX: layerX,
            baseY: y,
            radius: 3 + Math.random() * 3,
            pulsePhase: Math.random() * Math.PI * 2,
            layer,
          });
        }
      }

      // Add scattered ambient nodes
      for (let i = 0; i < 25; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          baseX: Math.random() * w,
          baseY: Math.random() * h,
          radius: 1 + Math.random() * 2,
          pulsePhase: Math.random() * Math.PI * 2,
          layer: -1,
        });
      }
    };

    const animate = () => {
      time += 0.008;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Zoom effect - oscillates between 0.85 and 1.15
      const zoomFactor = 1 + Math.sin(time * 0.5) * 0.12;
      const centerX = w / 2;
      const centerY = h / 2;

      // Update node positions with floating and zoom
      nodes.forEach((node, i) => {
        const floatX = Math.sin(time + node.pulsePhase) * 8;
        const floatY = Math.cos(time * 0.7 + node.pulsePhase) * 8;

        // Apply zoom transformation
        const dx = node.baseX - centerX;
        const dy = node.baseY - centerY;
        node.x = centerX + dx * zoomFactor + floatX;
        node.y = centerY + dy * zoomFactor + floatY;
      });

      // Draw connections between nodes in adjacent layers
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        if (node.layer < 0) return;

        nodes.forEach((other, j) => {
          if (i >= j) return;
          if (other.layer < 0) return;

          // Connect adjacent layers
          if (Math.abs(node.layer - other.layer) === 1) {
            const dist = Math.hypot(node.x - other.x, node.y - other.y);
            if (dist < 300) {
              const opacity = (1 - dist / 300) * 0.15;
              const pulseOpacity = opacity * (0.5 + Math.sin(time * 2 + i * 0.1) * 0.5);

              // Gradient line
              const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
              gradient.addColorStop(0, `rgba(139, 92, 246, ${pulseOpacity})`);
              gradient.addColorStop(0.5, `rgba(6, 182, 212, ${pulseOpacity * 1.5})`);
              gradient.addColorStop(1, `rgba(139, 92, 246, ${pulseOpacity})`);

              ctx.strokeStyle = gradient;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw ambient connections
      nodes.forEach((node, i) => {
        if (node.layer >= 0) return;

        nodes.forEach((other, j) => {
          if (i >= j || other.layer >= 0) return;

          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.08;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
        const glowRadius = node.radius * (2 + pulse);

        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius * 3);

        if (node.layer >= 0) {
          gradient.addColorStop(0, `rgba(139, 92, 246, ${0.4 * pulse})`);
          gradient.addColorStop(0.5, `rgba(6, 182, 212, ${0.2 * pulse})`);
          gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
        } else {
          gradient.addColorStop(0, `rgba(139, 92, 246, ${0.2 * pulse})`);
          gradient.addColorStop(1, "rgba(139, 92, 246, 0)");
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        const coreGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius);

        if (node.layer >= 0) {
          coreGradient.addColorStop(0, `rgba(255, 255, 255, ${0.9})`);
          coreGradient.addColorStop(0.5, `rgba(196, 181, 253, ${0.7})`);
          coreGradient.addColorStop(1, `rgba(139, 92, 246, ${0.5})`);
        } else {
          coreGradient.addColorStop(0, `rgba(139, 92, 246, ${0.5})`);
          coreGradient.addColorStop(1, `rgba(139, 92, 246, ${0.2})`);
        }

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (1 + pulse * 0.3), 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw data flow particles along connections
      const particleCount = 15;
      for (let p = 0; p < particleCount; p++) {
        const progress = (time * 0.3 + p / particleCount) % 1;
        const layerProgress = progress * 4;
        const currentLayer = Math.floor(layerProgress);
        const layerT = layerProgress - currentLayer;

        if (currentLayer < 4) {
          const sourceNodes = nodes.filter((n) => n.layer === currentLayer);
          const targetNodes = nodes.filter((n) => n.layer === currentLayer + 1);

          if (sourceNodes.length > 0 && targetNodes.length > 0) {
            const sourceIdx = p % sourceNodes.length;
            const targetIdx = (p + currentLayer) % targetNodes.length;
            const source = sourceNodes[sourceIdx];
            const target = targetNodes[targetIdx];

            const px = source.x + (target.x - source.x) * layerT;
            const py = source.y + (target.y - source.y) * layerT;

            const particleGradient = ctx.createRadialGradient(px, py, 0, px, py, 4);
            particleGradient.addColorStop(0, "rgba(6, 182, 212, 0.8)");
            particleGradient.addColorStop(0.5, "rgba(139, 92, 246, 0.4)");
            particleGradient.addColorStop(1, "rgba(139, 92, 246, 0)");

            ctx.fillStyle = particleGradient;
            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }} />;
};

// Data Widget Component
const DataWidget = ({
  icon: Icon,
  label,
  value,
  color,
  delay,
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

        <motion.div
          className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

// Data Flow Node
const DataFlowNode = ({
  icon: Icon,
  label,
  x,
  y,
  delay,
  color,
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
        <motion.div
          className={`absolute -inset-2 rounded-full ${color} opacity-30 blur-md`}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: delay * 0.5 }}
        />

        <div
          className={`relative w-12 h-12 rounded-xl ${color} flex items-center justify-center border border-white/20`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap font-medium">
          {label}
        </div>
      </motion.div>
    </motion.div>
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
      <motion.div
        className="absolute -inset-16 rounded-full bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-violet-600/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-2xl"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 p-[2px] shadow-2xl shadow-violet-500/50">
        <div className="w-full h-full rounded-3xl bg-background/90 backdrop-blur-xl flex items-center justify-center">
          <motion.span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            M
          </motion.span>
        </div>
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-violet-400"
          style={{ top: "50%", left: "50%" }}
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
          transition={{ duration: 6, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
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

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const leftWidgets = [];

  const rightNodes = [
    {
      icon: Code2,
      label: "Code",
      x: "75%",
      y: "15%",
      color: "bg-gradient-to-br from-emerald-500 to-green-600",
      delay: 0.4,
    },
    {
      icon: Database,
      label: "Data",
      x: "85%",
      y: "35%",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      delay: 0.6,
    },
    {
      icon: Brain,
      label: "AI",
      x: "80%",
      y: "55%",
      color: "bg-gradient-to-br from-violet-500 to-purple-600",
      delay: 0.8,
    },
    {
      icon: Globe,
      label: "Web",
      x: "70%",
      y: "75%",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      delay: 1,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Deep background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-violet-950/20" />
      <motion.div className="absolute inset-0" style={{ x: parallaxX, y: parallaxY }}>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </motion.div>

      {/* Neural Network Background with Zoom */}
      <NeuralNetworkBackground />

      {/* Left Side - Data Widgets */}
      <motion.div
        className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 space-y-4 hidden md:flex flex-col z-20"
        style={{ x: useTransform(parallaxX, (v) => v * 0.5), y: useTransform(parallaxY, (v) => v * 0.5) }}
      >
        {leftWidgets.map((widget) => (
          <DataWidget key={widget.label} {...widget} />
        ))}
      </motion.div>

      {/* Right Side - Data Flow Nodes */}
      <motion.div
        className="absolute inset-0 hidden lg:block z-20"
        style={{ x: useTransform(parallaxX, (v) => v * -0.3), y: useTransform(parallaxY, (v) => v * -0.3) }}
      >
        {rightNodes.map((node) => (
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
            Empower your AI with{" "}
            <motion.span
              className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
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
            Scalable long-term memory for intelligent applications. Give your users persistent, contextual memory that
            works across any model or modality.
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
              { value: "10M+", label: "Memories Stored" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "<50ms", label: "Latency" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
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
