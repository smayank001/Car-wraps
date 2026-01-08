import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceTruckWrap from "@/assets/service-truck-wrap.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import showcase1 from "@/assets/showcase-1.jpg";

const TruckSigns = () => {
  return (
    <ServicePageTemplate
      title="Truck Signs"
      tagline="Transform your commercial vehicles into powerful mobile billboards. Professional graphics that turn heads and generate leads wherever you drive."
      heroImage={serviceTruckWrap}
      description={[
        "Your commercial vehicles travel thousands of miles each year—make every mile count with professional truck signage that advertises your business 24/7. Our truck graphics turn your fleet into a moving marketing force that reaches customers across your entire service area.",
        "We specialize in graphics for box trucks, delivery vans, pickups, and semi-trailers. From simple vinyl lettering to full vehicle wraps, we offer solutions for every budget and branding goal. Our designs are optimized for visibility at highway speeds and in traffic.",
        "Every truck graphics project includes custom design services to ensure your branding translates effectively to the vehicle format. Our installation team has extensive experience with commercial vehicles and ensures proper application for long-lasting results.",
      ]}
      galleryImages={[serviceTruckWrap, portfolio1, portfolio5, showcase1]}
      benefits={[
        {
          title: "Mobile Advertising",
          description: "Your vehicles become 24/7 billboards, generating thousands of impressions daily across your service area.",
        },
        {
          title: "Fleet Consistency",
          description: "Uniform graphics across your entire fleet create a professional, cohesive brand presence on the road.",
        },
        {
          title: "Custom Design",
          description: "Professional designers create layouts optimized for your specific vehicle types and branding requirements.",
        },
        {
          title: "Durable Materials",
          description: "Commercial-grade vinyl designed to withstand heavy use, highway conditions, and frequent washing.",
        },
        {
          title: "DOT Compliant",
          description: "We ensure all truck graphics meet DOT requirements including proper marking and visibility standards.",
        },
        {
          title: "Paint Protection",
          description: "Vehicle wraps protect your original paint from UV damage, scratches, and minor abrasions.",
        },
      ]}
    />
  );
};

export default TruckSigns;
