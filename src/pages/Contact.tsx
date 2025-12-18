import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Send, Check, MapPin, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serverLocations = [
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
];

interface FloatingLabelInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  textarea?: boolean;
}

const FloatingLabelInput = ({ label, type = 'text', value, onChange, required, textarea }: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const isActive = isFocused || hasValue;

  const Component = textarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <Component
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`w-full bg-background/50 border rounded-xl px-4 pt-6 pb-2 text-foreground outline-none transition-all duration-300 ${
          isFocused ? 'border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]' : 'border-border/50'
        } ${textarea ? 'h-32 resize-none' : 'h-14'}`}
      />
      <motion.label
        animate={{
          y: isActive ? -8 : 4,
          scale: isActive ? 0.8 : 1,
          color: isFocused ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
        }}
        className="absolute left-4 top-4 origin-left pointer-events-none text-muted-foreground"
      >
        {label}
      </motion.label>
    </div>
  );
};

const Globe3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let rotation = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;

      ctx.clearRect(0, 0, width, height);

      // Draw globe background
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, 'hsla(240, 15%, 12%, 1)');
      gradient.addColorStop(1, 'hsla(240, 15%, 6%, 1)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw globe glow
      const glowGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.5);
      glowGradient.addColorStop(0, 'hsla(250, 85%, 65%, 0.1)');
      glowGradient.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Draw latitude lines
      ctx.strokeStyle = 'hsla(250, 85%, 65%, 0.2)';
      ctx.lineWidth = 0.5;
      for (let i = -3; i <= 3; i++) {
        const y = centerY + (i / 3) * radius * 0.8;
        const latRadius = Math.sqrt(radius * radius - Math.pow(y - centerY, 2)) || 0;
        
        ctx.beginPath();
        ctx.ellipse(centerX, y, latRadius, latRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI + rotation;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * Math.abs(Math.cos(angle)), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw server nodes
      serverLocations.forEach((location, index) => {
        const lng = (location.lng + rotation * 50) * (Math.PI / 180);
        const lat = location.lat * (Math.PI / 180);
        
        const x = centerX + radius * Math.cos(lat) * Math.sin(lng) * 0.9;
        const y = centerY - radius * Math.sin(lat) * 0.9;
        const z = Math.cos(lat) * Math.cos(lng);

        if (z > -0.2) {
          const size = 4 + z * 3;
          const opacity = 0.5 + z * 0.5;

          // Node glow
          const nodeGlow = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
          nodeGlow.addColorStop(0, `hsla(250, 85%, 65%, ${opacity * 0.5})`);
          nodeGlow.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(x, y, size * 4, 0, Math.PI * 2);
          ctx.fillStyle = nodeGlow;
          ctx.fill();

          // Node
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(250, 85%, 65%, ${opacity})`;
          ctx.fill();

          // Pulse effect
          const pulseSize = size + Math.sin(Date.now() * 0.003 + index) * 3;
          ctx.beginPath();
          ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(280, 70%, 60%, ${opacity * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw connections between nodes
      ctx.strokeStyle = 'hsla(250, 85%, 65%, 0.1)';
      ctx.lineWidth = 0.5;
      serverLocations.forEach((loc1, i) => {
        serverLocations.slice(i + 1).forEach((loc2) => {
          const lng1 = (loc1.lng + rotation * 50) * (Math.PI / 180);
          const lat1 = loc1.lat * (Math.PI / 180);
          const lng2 = (loc2.lng + rotation * 50) * (Math.PI / 180);
          const lat2 = loc2.lat * (Math.PI / 180);
          
          const x1 = centerX + radius * Math.cos(lat1) * Math.sin(lng1) * 0.9;
          const y1 = centerY - radius * Math.sin(lat1) * 0.9;
          const z1 = Math.cos(lat1) * Math.cos(lng1);
          
          const x2 = centerX + radius * Math.cos(lat2) * Math.sin(lng2) * 0.9;
          const y2 = centerY - radius * Math.sin(lat2) * 0.9;
          const z2 = Math.cos(lat2) * Math.cos(lng2);

          if (z1 > -0.2 && z2 > -0.2) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });
      });

      rotation += 0.002;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  );
};

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <NeuralBackground nodeCount={25} className="opacity-20" />
      <Navbar />
      
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <ScrollReveal>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Connect the Nodes</span>
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                Get in <span className="gradient-text-multi">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Our team is always here to help.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Content - Split Screen */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 3D Globe */}
              <ScrollReveal>
                <div className="relative">
                  <div className="aspect-square max-w-lg mx-auto relative">
                    <Globe3D />
                    
                    {/* Server status overlay */}
                    <div className="absolute bottom-4 left-4 glass rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                        />
                        <span className="text-sm font-medium">6 Active Regions</span>
                      </div>
                      <p className="text-xs text-muted-foreground">99.99% Uptime</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal delay={0.2}>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6">Send us a message</h2>
                  
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <FloatingLabelInput
                            label="Your Name"
                            value={formData.name}
                            onChange={(value) => setFormData({ ...formData, name: value })}
                            required
                          />
                          <FloatingLabelInput
                            label="Email Address"
                            type="email"
                            value={formData.email}
                            onChange={(value) => setFormData({ ...formData, email: value })}
                            required
                          />
                        </div>
                        
                        <FloatingLabelInput
                          label="Subject"
                          value={formData.subject}
                          onChange={(value) => setFormData({ ...formData, subject: value })}
                          required
                        />
                        
                        <FloatingLabelInput
                          label="Your Message"
                          value={formData.message}
                          onChange={(value) => setFormData({ ...formData, message: value })}
                          required
                          textarea
                        />
                        
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold relative overflow-hidden"
                        >
                          <AnimatePresence mode="wait">
                            {isSubmitting ? (
                              <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center"
                              >
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                  className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full"
                                />
                              </motion.div>
                            ) : (
                              <motion.span
                                key="text"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center justify-center gap-2"
                              >
                                Send Message
                                <Send className="w-4 h-4" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', delay: 0.2 }}
                          className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-6"
                        >
                          <Check className="w-10 h-10 text-primary-foreground" />
                        </motion.div>
                        <h3 className="text-2xl font-heading font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          We'll get back to you within 24 hours.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: '', email: '', subject: '', message: '' });
                          }}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Live Support Badge */}
                  <div className="mt-6 pt-6 border-t border-border/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                      />
                      <span className="text-sm text-muted-foreground">Live support available</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Avg. response: 5 mins</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Mail, title: 'Email Us', info: 'hello@memorymax.ai', subtext: 'We reply within 24h' },
                { icon: MapPin, title: 'Headquarters', info: 'San Francisco, CA', subtext: '548 Market St' },
                { icon: MessageCircle, title: 'Live Chat', info: 'Available 24/7', subtext: 'Instant support' },
              ].map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card p-6 text-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4"
                    >
                      <item.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                    <p className="text-foreground font-medium">{item.info}</p>
                    <p className="text-xs text-muted-foreground">{item.subtext}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
