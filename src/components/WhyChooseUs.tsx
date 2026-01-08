import { Shield, Palette, Target, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Unmatched Quality",
    description: "Premium 3M and Avery vinyl materials with manufacturer warranty for lasting results.",
  },
  {
    icon: Palette,
    title: "Creative Excellence",
    description: "Award-winning designers who transform your vision into stunning visual reality.",
  },
  {
    icon: Target,
    title: "Precision Installation",
    description: "Certified installers with obsessive attention to detail and flawless finishes.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Efficient project management ensuring your deadlines are always met.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="label-premium text-accent mb-4">Why Choose Us</p>
            <h2 className="heading-section text-metallic mb-6">
              Excellence Is Not
              <br />
              <span className="text-primary">An Option</span>
            </h2>
            <p className="body-premium text-muted-foreground mb-8 max-w-lg">
              We do not just apply graphics — we craft brand experiences that command 
              attention, inspire confidence, and deliver measurable business impact.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <span className="heading-section text-primary">98%</span>
                <p className="label-premium text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
              <div>
                <span className="heading-section text-primary">100%</span>
                <p className="label-premium text-muted-foreground mt-1">Quality Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="heading-card text-foreground mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
