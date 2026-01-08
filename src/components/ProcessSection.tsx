import { Lightbulb, PenTool, Printer, Wrench } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Consultation",
    description: "We discuss your vision, goals, and requirements to understand your brand perfectly.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Our creative team develops stunning concepts and detailed mockups for approval.",
  },
  {
    icon: Printer,
    number: "03",
    title: "Production",
    description: "Using premium materials and cutting-edge equipment to produce your graphics.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Installation",
    description: "Expert installation by certified professionals for a flawless, lasting finish.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-premium text-accent mb-4">Our Process</p>
          <h2 className="heading-section text-metallic mb-6">How We Work</h2>
          <p className="body-premium text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach that ensures quality, efficiency, and complete satisfaction 
            from initial concept to final installation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="process-step group">
                {/* Number */}
                <span className="absolute top-0 right-0 text-6xl font-bold text-border/50 -z-10 group-hover:text-primary/20 transition-colors duration-300">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center border border-primary/30 mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="heading-card text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
