import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import showcase4 from "@/assets/showcase-4.jpg";

const categories = ["All", "Vehicle Wraps", "Signs", "Fleet", "Banners"];

const portfolioItems = [
  {
    image: portfolio1,
    title: "Matte Black Mercedes AMG",
    category: "Vehicle Wraps",
    description: "Full matte wrap with red accent details",
  },
  {
    image: portfolio2,
    title: "Corporate Fleet Branding",
    category: "Fleet",
    description: "Complete fleet graphics for delivery company",
  },
  {
    image: portfolio3,
    title: "Restaurant Channel Letters",
    category: "Signs",
    description: "LED illuminated storefront signage",
  },
  {
    image: portfolio4,
    title: "Building Banner Installation",
    category: "Banners",
    description: "Large format outdoor advertising",
  },
  {
    image: portfolio5,
    title: "Chrome Lamborghini Huracan",
    category: "Vehicle Wraps",
    description: "Mirror chrome wrap for exotic vehicle",
  },
  {
    image: portfolio6,
    title: "Real Estate Signage",
    category: "Signs",
    description: "Custom yard signs and property marketing",
  },
  {
    image: showcase1,
    title: "Blue Chrome Porsche 911",
    category: "Vehicle Wraps",
    description: "Premium chrome blue wrap transformation",
  },
  {
    image: showcase2,
    title: "Commercial Van Graphics",
    category: "Fleet",
    description: "Full wrap with corporate branding",
  },
  {
    image: showcase3,
    title: "Retail Interior Branding",
    category: "Signs",
    description: "Complete storefront and interior graphics",
  },
  {
    image: showcase4,
    title: "Matte Black BMW M4",
    category: "Vehicle Wraps",
    description: "Stealth matte wrap with gloss accents",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-card to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="label-premium text-accent mb-4 animate-fade-up">Our Work</p>
            <h1 className="heading-hero text-metallic mb-6 animate-fade-up delay-100">
              Portfolio
            </h1>
            <p className="body-premium text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
              Explore our collection of premium vehicle wraps, commercial signage, 
              and branding projects delivered to satisfied clients.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-card border-y border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border/50 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Content */}
                <div className={`absolute inset-0 z-10 flex flex-col justify-end p-6 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <p className="label-premium text-accent mb-2">{item.category}</p>
                  <h3 className="heading-card text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 z-20 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-4 right-4 w-8 h-px bg-primary" />
                  <div className="absolute top-4 right-4 w-px h-8 bg-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-card border-y border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="label-premium text-muted-foreground">Vehicle Wraps</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="label-premium text-muted-foreground">Signs Installed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="label-premium text-muted-foreground">Fleet Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="label-premium text-muted-foreground">Print Jobs</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Portfolio;
