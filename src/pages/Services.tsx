import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import serviceChannelLetters from "@/assets/service-channel-letters.jpg";
import serviceVinyl from "@/assets/service-vinyl.jpg";
import serviceTruckWrap from "@/assets/service-truck-wrap.jpg";
import servicePrinting from "@/assets/service-printing.jpg";
import serviceBusinessCards from "@/assets/service-business-cards.jpg";
import serviceSignage from "@/assets/service-signage.jpg";
import serviceBanners from "@/assets/service-banners.jpg";
import serviceMerch from "@/assets/service-merch.jpg";

const services = [
  {
    image: serviceChannelLetters,
    title: "Channel Letter Signs",
    description: "Custom illuminated 3D letters that make your business stand out day and night. LED-lit, durable, and designed for maximum visibility.",
    icon: "🏢",
    slug: "channel-letter-signs",
  },
  {
    image: servicePrinting,
    title: "Digital Printing",
    description: "High-resolution large format printing for banners, posters, displays, and promotional materials with vibrant, lasting colors.",
    icon: "🖨️",
    slug: "digital-printing",
  },
  {
    image: serviceTruckWrap,
    title: "Truck Signs",
    description: "Transform your commercial vehicles into mobile billboards. Professional graphics that turn heads and generate leads on the road.",
    icon: "🚛",
    slug: "truck-signs",
  },
  {
    image: serviceVinyl,
    title: "Car Wraps",
    description: "Full and partial vehicle wraps for personal and commercial vehicles. Premium vinyl, expert installation, stunning results.",
    icon: "🚗",
    slug: "car-wraps",
  },
  {
    image: serviceBusinessCards,
    title: "Business Cards",
    description: "Premium business cards that leave lasting impressions. Multiple finishes including matte, gloss, and metallic options.",
    icon: "💼",
    slug: "business-cards",
  },
  {
    image: serviceSignage,
    title: "Yard Signs",
    description: "Durable corrugated signs perfect for real estate, events, political campaigns, and temporary promotions.",
    icon: "📍",
    slug: "yard-signs",
  },
  {
    image: serviceBanners,
    title: "Flyers & Banners",
    description: "Eye-catching vinyl banners and full-color flyers for events, sales, and marketing campaigns of any scale.",
    icon: "🎯",
    slug: "flyers-banners",
  },
  {
    image: serviceMerch,
    title: "Print on T-Shirts",
    description: "Custom apparel printing for businesses, events, and promotional merchandise. Screen printing and DTG available.",
    icon: "👕",
    slug: "t-shirt-printing",
  },
  {
    image: serviceSignage,
    title: "Commercial Branding",
    description: "Complete branding solutions including storefronts, interior graphics, window displays, and corporate environments.",
    icon: "✨",
    slug: "commercial-branding",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-card to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="label-premium text-accent mb-4 animate-fade-up">What We Offer</p>
            <h1 className="heading-hero text-metallic mb-6 animate-fade-up delay-100">
              Our Services
            </h1>
            <p className="body-premium text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
              From vehicle wraps to commercial signage, we deliver premium branding solutions 
              that transform your vision into powerful visual experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                to={`/services/${service.slug}`}
                key={index} 
                className="group relative bg-card border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-glow block"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 border border-border flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="heading-card text-foreground mb-3">{service.title}</h3>
                  <p className="body-premium text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-card border-y border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="label-premium text-accent mb-4">How We Work</p>
            <h2 className="heading-section text-metallic mb-6">Simple Process</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consult", desc: "Share your vision and requirements" },
              { step: "02", title: "Design", desc: "We create custom concepts" },
              { step: "03", title: "Produce", desc: "Premium materials & printing" },
              { step: "04", title: "Install", desc: "Professional installation" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/30 mb-4">{item.step}</div>
                <h3 className="heading-card text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Services;
