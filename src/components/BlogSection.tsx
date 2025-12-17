import { ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogs = [
  {
    title: 'Understanding Semantic Memory in AI Applications',
    excerpt: 'Dive deep into how semantic memory works and why it\'s crucial for building intelligent AI systems that truly understand context.',
    author: 'Alex Thompson',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'Technical',
    featured: true,
  },
  {
    title: 'Building Personalized AI Assistants at Scale',
    excerpt: 'Learn the architecture patterns and best practices for creating AI assistants that deliver personalized experiences to millions.',
    author: 'Sarah Chen',
    date: 'Dec 12, 2024',
    readTime: '6 min read',
    category: 'Tutorial',
    featured: false,
  },
  {
    title: 'The Future of RAG: Beyond Simple Retrieval',
    excerpt: 'Explore advanced RAG techniques that combine semantic search with contextual memory for superior AI responses.',
    author: 'Marcus Johnson',
    date: 'Dec 10, 2024',
    readTime: '10 min read',
    category: 'Research',
    featured: false,
  },
  {
    title: 'Memory Optimization Techniques for LLM Applications',
    excerpt: 'Practical strategies for optimizing memory usage and retrieval speed in production LLM applications.',
    author: 'Elena Rodriguez',
    date: 'Dec 8, 2024',
    readTime: '7 min read',
    category: 'Performance',
    featured: false,
  },
  {
    title: 'Privacy-First AI: Encrypting User Memories',
    excerpt: 'A comprehensive guide to implementing end-to-end encryption for AI memory systems while maintaining functionality.',
    author: 'David Kim',
    date: 'Dec 5, 2024',
    readTime: '9 min read',
    category: 'Security',
    featured: false,
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-card/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Blog
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Latest Insights
            </h2>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group">
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Blog Scroll Container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none md:hidden" />

          {/* Scrollable container */}
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
            {blogs.map((blog, index) => (
              <article
                key={blog.title}
                className={`flex-shrink-0 w-80 md:w-auto group cursor-pointer ${
                  blog.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${
                  blog.featured ? 'md:p-8' : ''
                }`}>
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {blog.category}
                  </span>

                  {/* Title */}
                  <h3 className={`font-heading font-semibold mb-3 group-hover:text-primary transition-colors ${
                    blog.featured ? 'text-2xl md:text-3xl' : 'text-lg'
                  }`}>
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`text-muted-foreground mb-4 line-clamp-3 ${
                    blog.featured ? 'text-base md:line-clamp-4' : 'text-sm'
                  }`}>
                    {blog.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
