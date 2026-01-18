import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import PricingImage from "@/components/PricingImage";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ShowcaseSection />
      <WhyChooseUs />
      <ProcessSection />
      <PricingImage />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
