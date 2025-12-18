import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralBackground } from "@/components/NeuralBackground";
import { motion } from "framer-motion";
import { Book, Code, Terminal, Copy, Check, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="h-8 w-8 bg-background/50 hover:bg-background/80"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="bg-card/50 border border-border rounded-lg p-4 overflow-x-auto">
        <code className="text-sm text-foreground/90">{code}</code>
      </pre>
      <span className="absolute bottom-2 right-2 text-xs text-muted-foreground">{language}</span>
    </div>
  );
};

const Documentation = () => {
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
      name: "JavaScript/Node.js",
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NeuralBackground />
      <Navbar />

      <main className="relative z-10 pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Book className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Developer Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API & SDK{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to integrate MemoryMax into your applications.
              Comprehensive guides, API references, and SDK documentation.
            </p>
          </motion.div>
        </section>

        {/* Quick Start */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              Quick Start
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <h3 className="font-semibold">Get API Key</h3>
                <p className="text-sm text-muted-foreground">
                  Sign up and generate your API key from the dashboard.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <h3 className="font-semibold">Install SDK</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred SDK and install it via package manager.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <h3 className="font-semibold">Start Building</h3>
                <p className="text-sm text-muted-foreground">
                  Initialize the client and start storing/retrieving memories.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* API Reference */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              API Reference
            </h2>
            <div className="space-y-6">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="bg-card/30 backdrop-blur-xl border border-border rounded-xl overflow-hidden"
                >
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 rounded-md text-xs font-bold ${
                          endpoint.method === "GET"
                            ? "bg-green-500/20 text-green-400"
                            : endpoint.method === "POST"
                            ? "bg-blue-500/20 text-blue-400"
                            : endpoint.method === "PUT"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="text-foreground font-mono">{endpoint.path}</code>
                    </div>
                    <p className="text-muted-foreground">{endpoint.description}</p>
                  </div>
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    <div className="p-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3">Request</h4>
                      <CodeBlock code={endpoint.request} language="json" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3">Response</h4>
                      <CodeBlock code={endpoint.response} language="json" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SDKs */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Official SDKs</h2>
            <Tabs defaultValue="Python" className="w-full">
              <TabsList className="bg-card/50 border border-border mb-6">
                {sdks.map((sdk) => (
                  <TabsTrigger
                    key={sdk.name}
                    value={sdk.name}
                    className="data-[state=active]:bg-primary/20"
                  >
                    <span className="mr-2">{sdk.icon}</span>
                    {sdk.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {sdks.map((sdk) => (
                <TabsContent key={sdk.name} value={sdk.name}>
                  <div className="bg-card/30 backdrop-blur-xl border border-border rounded-xl p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Installation</h3>
                      <CodeBlock code={sdk.install} language="bash" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Usage Example</h3>
                      <CodeBlock code={sdk.usage} language={sdk.name.toLowerCase()} />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </section>

        {/* Authentication */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Authentication</h2>
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
          </motion.div>
        </section>

        {/* Rate Limits */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Rate Limits</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Plan</th>
                    <th className="text-left py-3 px-4 font-semibold">Requests/min</th>
                    <th className="text-left py-3 px-4 font-semibold">Requests/day</th>
                    <th className="text-left py-3 px-4 font-semibold">Max Memory Size</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Free</td>
                    <td className="py-3 px-4">10</td>
                    <td className="py-3 px-4">1,000</td>
                    <td className="py-3 px-4">1 MB</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Pro</td>
                    <td className="py-3 px-4">100</td>
                    <td className="py-3 px-4">50,000</td>
                    <td className="py-3 px-4">10 MB</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Enterprise</td>
                    <td className="py-3 px-4">Unlimited</td>
                    <td className="py-3 px-4">Unlimited</td>
                    <td className="py-3 px-4">100 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-6">
              Create your account and start building with MemoryMax today.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="default" className="gap-2">
                Get API Key <ChevronRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="gap-2">
                View on GitHub <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
