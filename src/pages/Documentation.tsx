import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Book, Code, Terminal, Copy, Check, ExternalLink, ChevronRight, Zap, Shield, Clock, Server, FileCode, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="h-8 w-8 bg-secondary/80 hover:bg-secondary"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="bg-secondary/50 border border-border rounded-xl p-4 overflow-x-auto">
        <code className="text-sm text-foreground/90 font-mono">{code}</code>
      </pre>
      <span className="absolute bottom-3 right-3 text-xs text-muted-foreground font-mono">{language}</span>
    </div>
  );
};

const Documentation = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-50ms latency for all memory operations",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption",
    },
    {
      icon: Clock,
      title: "99.99% Uptime",
      description: "Reliable infrastructure you can depend on",
    },
    {
      icon: Server,
      title: "Global CDN",
      description: "Distributed across 6 regions worldwide",
    },
  ];

  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/memory/store",
      description: "Store a new memory with associated metadata",
      request: `{
  "content": "Meeting notes from Q4 planning",
  "metadata": {
    "type": "document",
    "tags": ["meeting", "planning"],
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`,
      response: `{
  "id": "mem_abc123",
  "status": "stored",
  "embedding_id": "emb_xyz789"
}`
    },
    {
      method: "GET",
      path: "/api/v1/memory/retrieve",
      description: "Retrieve memories based on semantic search",
      request: `{
  "query": "quarterly planning discussions",
  "limit": 10,
  "threshold": 0.7
}`,
      response: `{
  "results": [
    {
      "id": "mem_abc123",
      "content": "Meeting notes from Q4 planning",
      "similarity": 0.92,
      "metadata": {...}
    }
  ]
}`
    },
    {
      method: "DELETE",
      path: "/api/v1/memory/{id}",
      description: "Delete a specific memory by ID",
      request: `// No request body required`,
      response: `{
  "id": "mem_abc123",
  "status": "deleted"
}`
    },
    {
      method: "PUT",
      path: "/api/v1/memory/{id}",
      description: "Update an existing memory",
      request: `{
  "content": "Updated meeting notes",
  "metadata": {
    "updated_at": "2024-01-16T09:00:00Z"
  }
}`,
      response: `{
  "id": "mem_abc123",
  "status": "updated"
}`
    }
  ];

  const sdks = [
    {
      name: "Python",
      icon: "🐍",
      install: "pip install memorymax",
      usage: `from memorymax import MemoryMax

client = MemoryMax(api_key="your_api_key")

# Store a memory
result = client.store(
    content="Important meeting notes",
    metadata={"type": "document"}
)

# Retrieve memories
memories = client.retrieve(
    query="meeting notes",
    limit=5
)`
    },
    {
      name: "JavaScript",
      icon: "📦",
      install: "npm install @memorymax/sdk",
      usage: `import { MemoryMax } from '@memorymax/sdk';

const client = new MemoryMax({ apiKey: 'your_api_key' });

// Store a memory
const result = await client.store({
  content: 'Important meeting notes',
  metadata: { type: 'document' }
});

// Retrieve memories
const memories = await client.retrieve({
  query: 'meeting notes',
  limit: 5
});`
    },
    {
      name: "Go",
      icon: "🔷",
      install: "go get github.com/memorymax/go-sdk",
      usage: `package main

import "github.com/memorymax/go-sdk"

func main() {
    client := memorymax.NewClient("your_api_key")

    // Store a memory
    result, _ := client.Store(memorymax.StoreRequest{
        Content:  "Important meeting notes",
        Metadata: map[string]string{"type": "document"},
    })

    // Retrieve memories
    memories, _ := client.Retrieve(memorymax.RetrieveRequest{
        Query: "meeting notes",
        Limit: 5,
    })
}`
    }
  ];

  const quickLinks = [
    { icon: FileCode, title: "API Reference", description: "Complete API documentation", href: "#api-reference" },
    { icon: Package, title: "SDKs", description: "Official client libraries", href: "#sdks" },
    { icon: Terminal, title: "Quick Start", description: "Get started in 5 minutes", href: "#quick-start" },
    { icon: Book, title: "Guides", description: "In-depth tutorials", href: "#guides" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Book className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Developer Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground">
              Build with{" "}
              <span className="gradient-text">MemoryMax</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to integrate persistent AI memory into your applications.
              Comprehensive guides, API references, and SDK documentation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="gap-2">
                Get API Key <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Quick Links Cards */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-border p-8">
            <h2 className="text-2xl font-heading font-bold mb-8 text-center text-foreground">Why MemoryMax?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground">Quick Start</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Get API Key", desc: "Sign up and generate your API key from the dashboard." },
                { step: "2", title: "Install SDK", desc: "Choose your preferred SDK and install via package manager." },
                { step: "3", title: "Start Building", desc: "Initialize the client and start storing/retrieving memories." },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-6 left-[calc(100%-1rem)] w-8 h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="container mx-auto px-4 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground">API Reference</h2>
          </div>
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="p-6 border-b border-border">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        endpoint.method === "GET"
                          ? "bg-green-100 text-green-700"
                          : endpoint.method === "POST"
                          ? "bg-blue-100 text-blue-700"
                          : endpoint.method === "PUT"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-foreground font-mono text-sm bg-secondary px-3 py-1 rounded-lg">{endpoint.path}</code>
                  </div>
                  <p className="text-muted-foreground">{endpoint.description}</p>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                  <div className="p-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Request</h4>
                    <CodeBlock code={endpoint.request} language="json" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Response</h4>
                    <CodeBlock code={endpoint.response} language="json" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SDKs */}
        <section id="sdks" className="container mx-auto px-4 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Official SDKs</h2>
          </div>
          <Tabs defaultValue="Python" className="w-full">
            <TabsList className="bg-secondary border border-border mb-6 p-1">
              {sdks.map((sdk) => (
                <TabsTrigger
                  key={sdk.name}
                  value={sdk.name}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                >
                  <span className="mr-2">{sdk.icon}</span>
                  {sdk.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {sdks.map((sdk) => (
              <TabsContent key={sdk.name} value={sdk.name}>
                <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">Installation</h3>
                    <CodeBlock code={sdk.install} language="bash" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">Usage Example</h3>
                    <CodeBlock code={sdk.usage} language={sdk.name.toLowerCase()} />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Authentication */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground">Authentication</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              All API requests require authentication using an API key. Include your key in the
              Authorization header:
            </p>
            <CodeBlock
              code={`Authorization: Bearer YOUR_API_KEY

# Example curl request
curl -X POST https://api.memorymax.ai/v1/memory/store \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"content": "Your memory content"}'`}
              language="bash"
            />
          </div>
        </section>

        {/* Rate Limits */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-card border border-border rounded-3xl p-8">
            <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Rate Limits</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Plan</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Requests/min</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Requests/day</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Max Memory Size</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">Free</td>
                    <td className="py-4 px-4">10</td>
                    <td className="py-4 px-4">1,000</td>
                    <td className="py-4 px-4">1 MB</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">Pro</td>
                    <td className="py-4 px-4">100</td>
                    <td className="py-4 px-4">50,000</td>
                    <td className="py-4 px-4">10 MB</td>
                  </tr>
                  <tr className="hover:bg-secondary/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">Enterprise</td>
                    <td className="py-4 px-4">Unlimited</td>
                    <td className="py-4 px-4">Unlimited</td>
                    <td className="py-4 px-4">100 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-primary/20 p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Create your account and start building with MemoryMax today. Get your first 1,000 API calls free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/auth">
                <Button size="lg" className="gap-2">
                  Get API Key <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="gap-2">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;