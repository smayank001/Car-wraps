import ServicePageTemplate from "@/components/ServicePageTemplate";
import serviceVinyl from "@/assets/service-vinyl.jpg";
import heroCar from "@/assets/hero-car.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";

const CarWraps = () => {
  return (
    <ServicePageTemplate
      title="Car Wraps"
      tagline="Full and partial vehicle wraps for personal and commercial vehicles. Premium vinyl, expert installation, and stunning results that transform your ride."
      heroImage={serviceVinyl}
      description={[
        "A vehicle wrap is the ultimate way to customize your car, truck, or SUV. Whether you want to change your vehicle's color, add custom graphics, or create a rolling advertisement for your business, our premium wraps deliver head-turning results.",
        "We use only the highest quality cast vinyl films from leading manufacturers like 3M, Avery Dennison, and KPMF. These films are designed specifically for vehicle applications and provide exceptional conformability, durability, and color stability.",
        "Our certified installers have years of experience wrapping everything from sports cars to commercial fleets. Every wrap is applied in our climate-controlled facility to ensure optimal adhesion and a flawless finish that looks like factory paint.",
      ]}
      galleryImages={[serviceVinyl, heroCar, showcase2, showcase3]}
      benefits={[
        {
          title: "Premium Materials",
          description: "We exclusively use top-tier vinyl films from 3M, Avery, and KPMF for superior quality and longevity.",
        },
        {
          title: "Color Change Wraps",
          description: "Transform your vehicle's appearance with any color or finish including matte, gloss, satin, and chrome.",
        },
        {
          title: "Paint Protection",
          description: "Wraps protect your original paint from UV rays, scratches, and road debris while maintaining resale value.",
        },
        {
          title: "Certified Installers",
          description: "Our installation team is factory-trained and certified in proper wrap application techniques.",
        },
        {
          title: "Full Customization",
          description: "From partial accents to full color changes with custom graphics, we create exactly what you envision.",
        },
        {
          title: "Removable",
          description: "When it's time for a change, wraps can be professionally removed without damaging the original paint.",
        },
      ]}
    />
  );
};

export default CarWraps;
