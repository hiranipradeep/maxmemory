import { ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const blogs = [
  {
    title: 'Understanding Semantic Memory in AI Applications',
    excerpt: 'Dive deep into how semantic memory works and why it\'s crucial for building intelligent AI systems that truly understand context.',
    author: 'Alex Thompson',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    color: 'from-violet-500/20 to-purple-600/20',
  },
  {
    title: 'Building Personalized AI Assistants at Scale',
    excerpt: 'Learn the architecture patterns and best practices for creating AI assistants that deliver personalized experiences to millions of users worldwide.',
    author: 'Sarah Chen',
    date: 'Dec 12, 2024',
    readTime: '6 min read',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60',
    color: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    title: 'The Future of RAG: Beyond Simple Retrieval',
    excerpt: 'Explore advanced RAG techniques that combine semantic search with contextual memory for superior AI responses and enhanced user experiences.',
    author: 'Marcus Johnson',
    date: 'Dec 10, 2024',
    readTime: '10 min read',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60',
    color: 'from-emerald-500/20 to-teal-600/20',
  },
  {
    title: 'Memory Optimization Techniques for LLM Applications',
    excerpt: 'Practical strategies for optimizing memory usage and retrieval speed in production LLM applications that serve millions of requests.',
    author: 'Elena Rodriguez',
    date: 'Dec 8, 2024',
    readTime: '7 min read',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60',
    color: 'from-amber-500/20 to-orange-600/20',
  },
];

interface BlogCardProps {
  blog: typeof blogs[0];
  index: number;
  totalCards: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const BlogCard = ({ blog, index, totalCards, containerRef }: BlogCardProps) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cardProgress = index / totalCards;
  const nextCardProgress = (index + 1) / totalCards;

  // Scale down as the next card overlaps
  const scale = useTransform(
    scrollYProgress,
    [cardProgress, nextCardProgress],
    [1, 0.92]
  );

  // Darken as the card gets pushed back
  const opacity = useTransform(
    scrollYProgress,
    [cardProgress, nextCardProgress],
    [1, 0.6]
  );

  // Add slight y movement for parallax depth
  const y = useTransform(
    scrollYProgress,
    [cardProgress, nextCardProgress],
    [0, -30]
  );

  return (
    <div 
      className="sticky top-24 h-[70vh] min-h-[500px]"
      style={{ zIndex: index }}
    >
      <motion.article
        style={{ scale, opacity, y }}
        className="h-full w-full cursor-pointer group"
      >
        <div 
          className={`relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br ${blog.color} border border-border/50 backdrop-blur-sm shadow-2xl`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
            {/* Category Badge */}
            <motion.span 
              className="inline-block w-fit px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {blog.category}
            </motion.span>

            {/* Title */}
            <motion.h3 
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {blog.title}
            </motion.h3>

            {/* Excerpt */}
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {blog.excerpt}
            </motion.p>

            {/* Meta & CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                <span className="hidden sm:inline">{blog.date}</span>
              </div>
              
              <Button variant="ghost" className="w-fit group/btn">
                Read Article
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Card Number Indicator */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12">
            <span className="text-6xl md:text-8xl font-bold text-foreground/5">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export const BlogSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.span 
              className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Blog
            </motion.span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Latest Insights
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Deep dives into AI, memory systems, and the future of intelligent applications.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="ghost" className="mt-4 md:mt-0 group">
              View All Posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Sticky Stack Container */}
        <div 
          ref={containerRef}
          className="relative"
          style={{ height: `${blogs.length * 80}vh` }}
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.title}
              blog={blog}
              index={index}
              totalCards={blogs.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
