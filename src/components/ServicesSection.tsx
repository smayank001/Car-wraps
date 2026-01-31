import { Link } from "react-router-dom";
import serviceTruckWrap from "@/assets/truck.jpeg";
import serviceVinyl from "@/assets/service-vinyl.jpg";
import servicePrinting from "@/assets/service-printing.jpg";
import serviceSignage from "@/assets/service-signage.jpg";
import serviceBanners from "@/assets/service-banners.jpg";
import serviceMerch from "@/assets/service-merch.jpg";
import logoImage from "@/assets/logo.jpg";

const services = [
  {
    image: serviceVinyl,
    title: "Vehicle Wrapping",
    description: "Full & partial wraps for cars, trucks, and exotic vehicles",
    slug: "car-wraps",
  },
  {
    image: serviceTruckWrap,
    title: "Fleet Branding",
    description: "Commercial vehicle graphics that maximize brand visibility",
    slug: "truck-signs",
  },
  {
    image: servicePrinting,
    title: "Large Format Printing",
    description: "High-resolution prints for banners, posters, and displays",
    slug: "digital-printing",
  },
  {
    image: serviceSignage,
    title: "Corporate Signage",
    description: "Illuminated signs, channel letters, and storefront solutions",
    slug: "channel-letter-signs",
  },
  {
    image: serviceBanners,
    title: "Banners & Hoardings",
    description: "Outdoor advertising that captures attention at scale",
    slug: "flyers-banners",
  },
  {
    image: serviceMerch,
    title: "Merchandise Printing",
    description: "Custom t-shirts, apparel, and promotional products",
    slug: "t-shirt-printing",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 overflow-hidden relative h-40">
          <div className="absolute flex items-center animate-marquee-ltr">
            {[...Array(100)].map((_, index) => (
              <img
                key={index}
                src={logoImage}
                alt="Deol Signs & Wraps"
                className="h-32 w-auto object-contain opacity-90 mx-16"
              />
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="label-premium text-accent mb-4">Our Expertise</p>
          <h2 className="heading-section text-metallic mb-6">What We Do</h2>
          <p className="body-premium text-muted-foreground max-w-2xl mx-auto">
            From concept to installation, we deliver premium branding solutions
            that transform your vision into impactful visual experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.slug}`}
              key={index}
              className="service-card group block"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-t from-card to-card/80">
                <h3 className="heading-card text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="body-premium text-muted-foreground text-sm">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="mt-4 flex items-center gap-2 text-primary text-sm uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
