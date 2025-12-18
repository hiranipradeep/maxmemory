import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { LogoCarousel } from '@/components/LogoCarousel';
import ImmersiveSection from '@/components/ImmersiveSection';
import { ContentSection } from '@/components/ContentSection';
import { UseCasesSection } from '@/components/UseCasesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogoCarousel />
        <ImmersiveSection />
        <ContentSection />
        <UseCasesSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
