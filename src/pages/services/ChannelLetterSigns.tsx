import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceChannelLetters from "@/assets/service-channel-letters.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import serviceSignage from "@/assets/service-signage.jpg";

const ChannelLetterSigns = () => {
  return (
    <ServicePageTemplate
      title="Channel Letter Signs"
      tagline="Custom illuminated 3D letters that make your business stand out day and night with professional LED-lit signage designed for maximum visibility and lasting impact."
      heroImage={serviceChannelLetters}
      description={[
        "Channel letter signs are the gold standard for business signage, offering unmatched visibility and professional appeal. Our custom-fabricated 3D letters are designed to capture attention and communicate your brand identity with clarity and impact.",
        "We use premium-grade aluminum construction with high-efficiency LED illumination that provides bright, even lighting while keeping energy costs low. Each sign is precision-manufactured to your exact specifications, ensuring perfect alignment and consistent quality.",
        "From front-lit letters that illuminate your logo to halo-lit designs that create an elegant glow effect, we offer a complete range of channel letter solutions. Our expert installation team ensures your signage is mounted securely and positioned for optimal visibility.",
      ]}
      galleryImages={[serviceChannelLetters, portfolio1, portfolio2, serviceSignage]}
      benefits={[
        {
          title: "LED Illumination",
          description: "Energy-efficient LED lighting provides bright, consistent illumination with lower operating costs and longer lifespan than traditional neon.",
        },
        {
          title: "Custom Design",
          description: "Every letter is fabricated to match your exact brand specifications including fonts, colors, and sizing for perfect brand consistency.",
        },
        {
          title: "Durable Construction",
          description: "Premium aluminum and acrylic materials ensure your signage withstands weather and maintains its appearance for years.",
        },
        {
          title: "Day & Night Visibility",
          description: "Illuminated letters ensure your business is visible and recognizable around the clock, maximizing brand exposure.",
        },
        {
          title: "Professional Installation",
          description: "Our certified installation team handles all mounting and electrical connections with proper permitting and safety compliance.",
        },
        {
          title: "Code Compliant",
          description: "We handle all permit requirements and ensure your signage meets local codes and regulations.",
        },
      ]}
    />
  );
};

export default ChannelLetterSigns;
