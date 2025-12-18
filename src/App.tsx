import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlowCursor } from "@/components/GlowCursor";
import { ApiStatusHeader } from "@/components/ApiStatusHeader";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import UseCaseHealth from "./pages/UseCaseHealth";
import UseCaseEducation from "./pages/UseCaseEducation";
import UseCaseFinance from "./pages/UseCaseFinance";
import UseCaseEnterprise from "./pages/UseCaseEnterprise";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GlowCursor />
      <ApiStatusHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/use-cases/health" element={<UseCaseHealth />} />
          <Route path="/use-cases/education" element={<UseCaseEducation />} />
          <Route path="/use-cases/finance" element={<UseCaseFinance />} />
          <Route path="/use-cases/enterprise" element={<UseCaseEnterprise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
