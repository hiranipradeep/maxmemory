import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { LogoCarousel } from '@/components/LogoCarousel';
import ImmersiveSection from '@/components/ImmersiveSection';
import { ContentSection } from '@/components/ContentSection';
import { ZoomSection } from '@/components/ZoomSection';
import { UseCasesSection } from '@/components/UseCasesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';
import { ChatbotWidget } from '@/components/ChatbotWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogoCarousel />
        <ImmersiveSection />
        <ContentSection />
        <ZoomSection>
          <UseCasesSection />
        </ZoomSection>
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
