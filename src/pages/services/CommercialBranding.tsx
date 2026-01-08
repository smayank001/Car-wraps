import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceSignage from "@/assets/service-signage.jpg";
import serviceChannelLetters from "@/assets/service-channel-letters.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import showcase4 from "@/assets/showcase-4.jpg";

const CommercialBranding = () => {
  return (
    <ServicePageTemplate
      title="Commercial Branding"
      tagline="Complete branding solutions including storefronts, interior graphics, window displays, and corporate environments that define your brand identity."
      heroImage={serviceSignage}
      description={[
        "Commercial branding transforms your physical space into a powerful extension of your brand identity. From street-facing storefronts to interior environments, we create cohesive visual experiences that reinforce your brand at every touchpoint.",
        "Our comprehensive branding services include storefront signage, window graphics, wall murals, wayfinding systems, and environmental graphics. We work with businesses of all sizes—from single retail locations to national franchise rollouts.",
        "Every project begins with understanding your brand, your space, and your objectives. Our design team develops solutions that maximize brand impact while respecting architectural context and local regulations. Professional installation ensures every element is perfectly executed.",
      ]}
      galleryImages={[serviceSignage, serviceChannelLetters, portfolio2, showcase4]}
      benefits={[
        {
          title: "Complete Solutions",
          description: "End-to-end branding from concept design through fabrication, installation, and project management.",
        },
        {
          title: "Storefront Impact",
          description: "Exterior signage and graphics that attract customers and establish your presence in the marketplace.",
        },
        {
          title: "Interior Experience",
          description: "Wall graphics, environmental design, and wayfinding that enhance the customer journey inside your space.",
        },
        {
          title: "Window Graphics",
          description: "Perforated vinyl, frosted films, and printed graphics that balance visibility with privacy and branding.",
        },
        {
          title: "Multi-Location",
          description: "Scalable solutions for franchises and chains that maintain brand consistency across all locations.",
        },
        {
          title: "Permit Handling",
          description: "We manage the permit process to ensure your signage meets all local codes and regulations.",
        },
      ]}
    />
  );
};

export default CommercialBranding;
