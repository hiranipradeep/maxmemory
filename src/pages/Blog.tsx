import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Clock, ArrowRight, Tag, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts } from '@/data/blogData';

const trendingTopics = [
  'Vector Memory', 'LLM Context', 'RAG Systems', 'Neural Networks', 
  'Memory Optimization', 'AI Agents', 'Knowledge Graphs', 'Embeddings'
];

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

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <NeuralBackground nodeCount={30} className="opacity-20" />
      <Navbar />
      
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">The Knowledge Hub</span>
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                  Insights & <span className="gradient-text-multi">Updates</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Deep dives into AI memory, engineering insights, and the latest from Memory Max.
                </p>
              </div>
            </ScrollReveal>

            {/* Featured Post - Holographic Style */}
            <ScrollReveal delay={0.1}>
              <Link to={`/blog/${featuredPost.id}`}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative rounded-3xl overflow-hidden mb-16 group cursor-pointer"
                >
                  {/* Holographic glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity animate-gradient-shift" />
                  
                  <div className="relative glass-card p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                    {/* Scan lines effect */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="h-px bg-primary/30" style={{ marginTop: `${i * 5}%` }} />
                      ))}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          {featuredPost.category}
                        </span>
                        <span className="text-muted-foreground text-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                            {featuredPost.authorAvatar}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{featuredPost.author}</p>
                            <p className="text-xs text-muted-foreground">{featuredPost.date}</p>
                          </div>
                        </div>
                        <Button variant="hero" size="sm" className="group/btn">
                          Read More 
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <img 
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <Tag className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-semibold">Trending Topics</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {trendingTopics.map((topic, index) => (
                  <motion.button
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' }}
                    className="px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  >
                    {topic}
                  </motion.button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Grid - Masonry Style */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {otherPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 0.05}>
                  <Link to={`/blog/${post.id}`}>
                    <motion.article
                      onHoverStart={() => setHoveredCard(index)}
                      onHoverEnd={() => setHoveredCard(null)}
                      whileHover={{ y: -5 }}
                      className="break-inside-avoid glass-card p-6 relative overflow-hidden group cursor-pointer"
                    >
                      {/* Glow effect on hover */}
                      <AnimatePresence>
                        {hoveredCard === index && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -inset-px bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl"
                          />
                        )}
                      </AnimatePresence>
                      
                      {/* Image */}
                      <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                              {post.authorAvatar}
                            </div>
                            <span className="text-xs text-muted-foreground">{post.date}</span>
                          </div>
                          <motion.div
                            initial={{ x: -5, opacity: 0 }}
                            animate={hoveredCard === index ? { x: 0, opacity: 1 } : { x: -5, opacity: 0 }}
                          >
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <ScrollReveal>
              <div className="glass-card p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold mb-3">
                    Stay in the <span className="gradient-text">Loop</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get the latest insights delivered to your inbox. No spam, just knowledge.
                  </p>
                  
                  <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
                    <div className="flex-1 relative">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary/50 h-12"
                        disabled={isSubscribed}
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || isSubscribed}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative h-12 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium overflow-hidden disabled:opacity-50"
                    >
                      {/* Liquid fill animation */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isSubmitting ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-accent origin-left"
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubscribed ? (
                          '✓ Subscribed!'
                        ) : isSubmitting ? (
                          'Subscribing...'
                        ) : (
                          <>
                            Subscribe
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
