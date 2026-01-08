import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceSignage from "@/assets/service-signage.jpg";
import serviceBanners from "@/assets/service-banners.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const YardSigns = () => {
  return (
    <ServicePageTemplate
      title="Yard Signs"
      tagline="Durable corrugated signs perfect for real estate, events, political campaigns, and temporary promotions that need high visibility at ground level."
      heroImage={serviceSignage}
      description={[
        "Yard signs are one of the most cost-effective forms of outdoor advertising. Our corrugated plastic signs are lightweight, durable, and weather-resistant—perfect for temporary campaigns and long-term directional signage alike.",
        "We produce yard signs in standard sizes for real estate, elections, and events, as well as custom sizes for unique applications. Full-color digital printing ensures your message is vibrant and readable from a distance.",
        "Whether you need 10 signs or 10,000, our production capacity handles orders of any size with consistent quality and fast turnaround. We also supply wire stakes, frames, and other mounting hardware for complete solutions.",
      ]}
      galleryImages={[serviceSignage, serviceBanners, portfolio5, portfolio6]}
      benefits={[
        {
          title: "Weather Resistant",
          description: "Corrugated plastic construction withstands rain, wind, and sun without warping or fading.",
        },
        {
          title: "Double-Sided",
          description: "Print on both sides for maximum visibility from all directions without additional cost.",
        },
        {
          title: "Custom Sizes",
          description: "Standard 18x24 and 24x36 sizes plus custom dimensions for any application.",
        },
        {
          title: "Fast Production",
          description: "Quick turnaround for political campaigns, real estate launches, and time-sensitive promotions.",
        },
        {
          title: "Complete Kits",
          description: "Signs include wire stakes or frames—everything you need for immediate deployment.",
        },
        {
          title: "Bulk Discounts",
          description: "Volume pricing makes large orders affordable for campaigns and multi-location businesses.",
        },
      ]}
    />
  );
};

export default YardSigns;
