import { useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NeuralBackground } from '@/components/NeuralBackground';
import { getBlogPost, getRelatedPosts, BlogPost as BlogPostType } from '@/data/blogData';
import { ArrowLeft, Clock, User, Calendar, Tag, Share2, Twitter, Linkedin, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

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

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = getBlogPost(id || '');
  const relatedPosts = getRelatedPosts(id || '', 3);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({ title: 'Link copied!', description: 'The article link has been copied to your clipboard.' });
        return;
    }
    
    if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative z-10 pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NeuralBackground nodeCount={30} className="opacity-20" />
      <Navbar />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <div ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: imageY, scale: imageScale }}
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </motion.div>
          
          {/* Header Content */}
          <motion.div 
            className="absolute inset-0 flex items-end"
            style={{ opacity: headerOpacity }}
          >
            <div className="container mx-auto px-4 pb-16">
              {/* Back Button */}
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              {/* Category */}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
              >
                {post.category}
              </motion.span>
              
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl"
              >
                {post.title}
              </motion.h1>
              
              {/* Meta */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 text-muted-foreground"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {post.authorAvatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author}</p>
                    <p className="text-xs">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar - Share & Tags */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Share */}
                <ScrollReveal>
                  <div className="glass-card p-6">
                    <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-primary" />
                      Share
                    </h3>
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleShare('twitter')}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleShare('linkedin')}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleShare('copy')}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <LinkIcon className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </ScrollReveal>
                
                {/* Tags */}
                <ScrollReveal delay={0.1}>
                  <div className="glass-card p-6">
                    <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </aside>
            
            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <ScrollReveal>
                <div 
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:font-heading prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground
                    prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-card prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl
                    prose-ul:text-muted-foreground
                    prose-ol:text-muted-foreground
                    prose-li:marker:text-primary
                    prose-table:border-collapse
                    prose-th:border prose-th:border-border prose-th:bg-secondary prose-th:px-4 prose-th:py-2
                    prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2
                  "
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
                />
              </ScrollReveal>
              
              {/* Author Card */}
              <ScrollReveal>
                <div className="mt-16 glass-card p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-primary-foreground flex-shrink-0">
                      {post.authorAvatar}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{post.author}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{post.authorRole}</p>
                      <p className="text-muted-foreground text-sm">
                        Building the future of AI memory systems. Passionate about creating intelligent applications that truly understand users.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 border-t border-border">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <h2 className="text-3xl font-heading font-bold mb-12">
                  Related <span className="gradient-text">Articles</span>
                </h2>
              </ScrollReveal>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <ScrollReveal key={relatedPost.id} delay={index * 0.1}>
                    <Link to={`/blog/${relatedPost.id}`}>
                      <motion.article
                        whileHover={{ y: -5 }}
                        className="glass-card overflow-hidden group cursor-pointer h-full"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                        </div>
                        <div className="p-6">
                          <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                          <h3 className="font-heading font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                          <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                            <span>{relatedPost.date}</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <div className="glass-card p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-heading font-bold mb-4">
                    Ready to Build with AI Memory?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Start building intelligent AI applications with Memory Max today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" className="group">
                      Get Started Free
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg">
                      View Documentation
                    </Button>
                  </div>
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

// Simple markdown to HTML converter
function formatMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Tables
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.every(c => c.trim().match(/^-+$/))) {
        return '';
      }
      const isHeader = match.includes('---');
      const tag = isHeader ? 'th' : 'td';
      return `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
    })
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br/>');
}

export default BlogPostPage;
