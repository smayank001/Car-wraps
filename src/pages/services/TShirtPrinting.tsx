import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceMerch from "@/assets/service-merch.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import servicePrinting from "@/assets/service-printing.jpg";

const TShirtPrinting = () => {
  return (
    <ServicePageTemplate
      title="Print on T-Shirts"
      tagline="Custom apparel printing for businesses, events, and promotional merchandise. Screen printing and DTG options for orders of any size."
      heroImage={serviceMerch}
      description={[
        "Custom apparel is a powerful way to promote your brand, unify your team, and create memorable event merchandise. Our t-shirt printing services combine quality craftsmanship with competitive pricing for results that look and feel premium.",
        "We offer both screen printing for large orders and direct-to-garment (DTG) printing for smaller runs and complex designs. Our selection includes t-shirts, polos, hoodies, hats, and other apparel items from top brands like Gildan, Bella+Canvas, and Next Level.",
        "From corporate uniforms to concert merchandise, from sports teams to promotional giveaways, we handle apparel orders of every type and size. Our design team can create custom graphics or work with your existing artwork to deliver finished products that exceed expectations.",
      ]}
      galleryImages={[serviceMerch, portfolio4, portfolio6, servicePrinting]}
      benefits={[
        {
          title: "Screen Printing",
          description: "Traditional screen printing delivers vibrant, durable prints ideal for large orders and simple designs.",
        },
        {
          title: "DTG Printing",
          description: "Direct-to-garment technology allows full-color, photo-quality prints with no minimum order requirements.",
        },
        {
          title: "Quality Apparel",
          description: "Premium blanks from Gildan, Bella+Canvas, Next Level, and other top apparel brands.",
        },
        {
          title: "Custom Designs",
          description: "Professional design services to create logos, graphics, and artwork for your apparel.",
        },
        {
          title: "No Minimums",
          description: "DTG printing means you can order as few as one shirt—perfect for samples and small events.",
        },
        {
          title: "Fast Delivery",
          description: "Rush production available for events and time-sensitive promotional needs.",
        },
      ]}
    />
  );
};

export default TShirtPrinting;
