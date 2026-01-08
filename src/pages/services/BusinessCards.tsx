import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceBusinessCards from "@/assets/service-business-cards.jpg";
import servicePrinting from "@/assets/service-printing.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const BusinessCards = () => {
  return (
    <ServicePageTemplate
      title="Business Cards"
      tagline="Premium business cards that leave lasting impressions. Multiple finishes including matte, gloss, and metallic options for every professional need."
      heroImage={serviceBusinessCards}
      description={[
        "In a digital world, a premium business card still makes a powerful first impression. Our business cards are designed and printed to represent your brand with the quality and professionalism your business deserves.",
        "We offer an extensive range of paper stocks, finishes, and specialty options to create cards that stand out. From classic 16pt cardstock to ultra-thick 32pt, from soft-touch lamination to metallic foil stamping, we have options to match any brand aesthetic.",
        "Our design team can create custom card layouts or work with your existing brand guidelines. With fast turnaround times and competitive pricing, getting professional business cards has never been easier.",
      ]}
      galleryImages={[serviceBusinessCards, servicePrinting, portfolio3, portfolio4]}
      benefits={[
        {
          title: "Premium Stock",
          description: "Choose from 14pt to 32pt cardstock, plus specialty papers like cotton, linen, and recycled options.",
        },
        {
          title: "Specialty Finishes",
          description: "Matte, gloss, soft-touch lamination, spot UV, embossing, debossing, and foil stamping available.",
        },
        {
          title: "Custom Shapes",
          description: "Stand out with rounded corners, die-cut shapes, or folded cards that break the mold.",
        },
        {
          title: "Fast Turnaround",
          description: "Standard orders ship in 3-5 business days with rush options available for same-day printing.",
        },
        {
          title: "Design Services",
          description: "Professional designers create custom layouts that perfectly represent your brand identity.",
        },
        {
          title: "Bulk Pricing",
          description: "Competitive volume pricing for large orders with consistent quality across every card.",
        },
      ]}
    />
  );
};

export default BusinessCards;
