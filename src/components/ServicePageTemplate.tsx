import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ChevronRight, CheckCircle } from "lucide-react";

interface ServicePageProps {
  title: string;
  tagline: string;
  heroImage: string;
  description: string[];
  galleryImages: string[];
  benefits: {
    title: string;
    description: string;
  }[];
}

const ServicePageTemplate = ({
  title,
  tagline,
  heroImage,
  description,
  galleryImages,
  benefits,
}: ServicePageProps) => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-up">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary">{title}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="label-premium text-accent mb-4 animate-fade-up delay-100">
              Professional Service
            </p>
            <h1 className="heading-hero text-metallic mb-6 animate-fade-up delay-200">
              {title}
            </h1>
            <p className="body-premium text-foreground/80 text-xl animate-fade-up delay-300">
              {tagline}
            </p>

            <div className="flex flex-wrap gap-4 mt-8 animate-fade-up delay-400">
              <Link to="/contact" className="btn-hero-primary">
                Get a Quote
              </Link>
              <Link to="/portfolio" className="btn-hero-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="py-24 lg:py-32 bg-card border-y border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-premium text-accent mb-4">About This Service</p>
              <h2 className="heading-section text-metallic mb-8">
                What We Offer
              </h2>
              <div className="space-y-6">
                {description.map((paragraph, index) => (
                  <p key={index} className="body-premium text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Main Gallery Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-border/50">
                <img
                  src={galleryImages[0]}
                  alt={`${title} showcase`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="label-premium text-accent mb-4">Our Work</p>
            <h2 className="heading-section text-metallic">Project Gallery</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              >
                <img
                  src={image}
                  alt={`${title} project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 lg:py-32 bg-card border-y border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="label-premium text-accent mb-4">Why Choose Us</p>
            <h2 className="heading-section text-metallic">Key Benefits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-background border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              >
                <CheckCircle className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="heading-card text-foreground mb-4">{benefit.title}</h3>
                <p className="body-premium text-muted-foreground text-sm">
                  {benefit.description}
                </p>
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

export default ServicePageTemplate;
