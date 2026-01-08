import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import aboutFacility from "@/assets/about-facility.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "5000+", label: "Projects Completed" },
  { number: "500+", label: "Happy Clients" },
  { number: "100%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We use only premium materials and industry-leading equipment to ensure lasting results that exceed expectations.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your vision is our priority. We work closely with you to understand your needs and deliver custom solutions.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines. Our streamlined processes ensure your project is completed on schedule, every time.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "From vehicle wraps to signage, every product is designed for durability and long-term performance.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-card to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="label-premium text-accent mb-4 animate-fade-up">Our Story</p>
            <h1 className="heading-hero text-metallic mb-6 animate-fade-up delay-100">
              About Us
            </h1>
            <p className="body-premium text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
              Trusted by businesses across the region for premium signage, 
              vehicle wraps, and commercial branding solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={aboutFacility}
                  alt="Our printing facility"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary" />
            </div>

            {/* Content */}
            <div>
              <p className="label-premium text-accent mb-4">Who We Are</p>
              <h2 className="heading-section text-metallic mb-6">
                Crafting Visual Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground body-premium">
                <p>
                  Deol Signs & Wraps has been the trusted partner for businesses seeking 
                  premium branding solutions. From humble beginnings to becoming a leading 
                  name in the signage and vehicle wrap industry, our journey has been 
                  defined by passion, precision, and commitment to excellence.
                </p>
                <p>
                  Our state-of-the-art facility houses the latest printing technology, 
                  enabling us to deliver vibrant, durable results that make brands stand out. 
                  Whether it's a single business card or a complete fleet transformation, 
                  we approach every project with the same dedication to quality.
                </p>
                <p>
                  Today, we proudly serve businesses of all sizes—from local startups to 
                  national corporations—helping them communicate their brand story through 
                  powerful visual solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="label-premium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <p className="label-premium text-accent mb-4">Our Team</p>
              <h2 className="heading-section text-metallic mb-6">
                Expert Craftsmen
              </h2>
              <div className="space-y-4 text-muted-foreground body-premium">
                <p>
                  Our team consists of skilled designers, experienced installers, and 
                  dedicated project managers who share a common goal: delivering exceptional 
                  results that exceed client expectations.
                </p>
                <p>
                  With decades of combined experience in vehicle wrapping, signage fabrication, 
                  and commercial printing, we bring expertise and creativity to every project. 
                  Continuous training ensures we stay at the forefront of industry innovations.
                </p>
              </div>
              
              {/* Key points */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 border border-border/50 bg-card">
                  <div className="text-2xl font-bold text-primary mb-1">3M</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Certified Installers</p>
                </div>
                <div className="p-4 border border-border/50 bg-card">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Client Support</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={aboutTeam}
                  alt="Our professional team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card border-y border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="label-premium text-accent mb-4">What Drives Us</p>
            <h2 className="heading-section text-metallic mb-6">Our Values</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 border border-primary/50 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="heading-card text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
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

export default About;
