import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Send, Check, MapPin, Mail, Phone, Clock, MessageCircle, Users, Headphones, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'We respond within 24 hours',
      value: 'hello@memorymax.ai',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm PST',
      value: '+1 (555) 123-4567',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come say hello at our HQ',
      value: '548 Market St, San Francisco, CA',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Available 24/7 for support',
      value: 'Start a conversation',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const supportOptions = [
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Get help with API integration, debugging, and technical issues.',
    },
    {
      icon: Users,
      title: 'Sales Inquiry',
      description: 'Learn about enterprise pricing, custom solutions, and partnerships.',
    },
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Dedicated support for large-scale deployments and custom requirements.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground"
            >
              We'd Love to{' '}
              <span className="gradient-text">Hear From You</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Have questions about MemoryMax? Want to discuss enterprise solutions? 
              Our team is ready to help you unlock the full potential of AI memory.
            </motion.p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <p className="text-sm font-medium text-primary">{method.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form Section */}
              <div className="lg:col-span-3">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-card rounded-3xl border border-border p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-heading font-bold mb-2 text-foreground">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
                  
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Your Name</label>
                            <Input
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Email Address</label>
                            <Input
                              type="email"
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              className="h-12"
                            />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Company</label>
                            <Input
                              placeholder="Your Company"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Subject</label>
                            <Input
                              placeholder="How can we help?"
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              required
                              className="h-12"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Message</label>
                          <Textarea
                            placeholder="Tell us more about your project or question..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            className="min-h-[150px] resize-none"
                          />
                        </div>
                        
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12"
                          size="lg"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                              />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Send Message
                              <Send className="w-4 h-4" />
                            </span>
                          )}
                        </Button>
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
                          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                        >
                          <Check className="w-10 h-10 text-green-600" />
                        </motion.div>
                        <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: '', email: '', company: '', subject: '', message: '' });
                          }}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Side Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Support Options */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-3xl border border-border p-6"
                >
                  <h3 className="font-heading font-bold text-lg mb-4 text-foreground">How Can We Help?</h3>
                  <div className="space-y-4">
                    {supportOptions.map((option, index) => (
                      <div key={option.title} className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <option.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{option.title}</h4>
                          <p className="text-xs text-muted-foreground">{option.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Response Time */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-primary/20 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">Average reply time</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">2</span>
                    <span className="text-muted-foreground">hours during business hours</span>
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card rounded-3xl border border-border p-6"
                >
                  <h4 className="font-heading font-bold mb-4 text-foreground">Office Hours</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium text-foreground">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium text-foreground">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-green-600 font-medium">We're currently online</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
                Talk to Our AI Assistant
              </h2>
              <p className="text-muted-foreground">
                Get instant answers and support from our AI-powered assistant.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
                <iframe
                  src="https://lab.anam.ai/frame/jCNbKlQSLCFZ_kyvhguLz"
                  width="100%"
                  height="480"
                  allow="microphone"
                  className="block"
                  title="AI Assistant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              Looking for Quick Answers?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out our documentation and FAQ section for instant answers to common questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="default" size="lg">
                View Documentation
              </Button>
              <Button variant="outline" size="lg">
                Browse FAQ
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;