import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceBanners from "@/assets/service-banners.jpg";
import servicePrinting from "@/assets/service-printing.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import serviceSignage from "@/assets/service-signage.jpg";

const FlyersBanners = () => {
  return (
    <ServicePageTemplate
      title="Flyers & Banners"
      tagline="Eye-catching vinyl banners and full-color flyers for events, sales, and marketing campaigns of any scale. High impact advertising made affordable."
      heroImage={serviceBanners}
      description={[
        "Banners and flyers remain essential tools for event promotion, retail advertising, and brand awareness campaigns. Our high-quality prints combine vibrant colors with durable materials for advertising that gets noticed and lasts.",
        "Vinyl banners are available in any size from small tabletop displays to massive building-mounted installations. We offer multiple material options including scrim vinyl for outdoor durability, mesh banners for wind resistance, and fabric banners for indoor elegance.",
        "Full-color flyers are printed on premium paper stocks with options for glossy, matte, and specialty finishes. From single-sheet handouts to multi-panel brochures, we handle all your print marketing needs with consistent quality and competitive pricing.",
      ]}
      galleryImages={[serviceBanners, servicePrinting, portfolio3, serviceSignage]}
      benefits={[
        {
          title: "Large Format",
          description: "Banners up to 16 feet wide printed seamlessly with vibrant, fade-resistant inks.",
        },
        {
          title: "Multiple Materials",
          description: "Vinyl, mesh, fabric, and specialty materials for indoor and outdoor applications.",
        },
        {
          title: "Finishing Options",
          description: "Grommets, pole pockets, hem tape, and wind slits for professional installation.",
        },
        {
          title: "Retractable Displays",
          description: "Portable banner stands perfect for trade shows, events, and retail environments.",
        },
        {
          title: "Premium Flyers",
          description: "Full-color flyers on quality paper stocks with gloss, matte, and UV coating options.",
        },
        {
          title: "Rush Available",
          description: "Same-day and next-day production for urgent event and campaign needs.",
        },
      ]}
    />
  );
};

export default FlyersBanners;
