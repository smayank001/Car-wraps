import { Award, Users, Wrench, Building2 } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Wrench,
    value: "State-of-Art",
    label: "Equipment",
  },
  {
    icon: Users,
    value: "2,500+",
    label: "Projects Completed",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Corporate Clients",
  },
];

const TrustStrip = () => {
  return (
    <section className="relative py-8 bg-card border-y border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-badge">
              <item.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
              <span className="heading-card text-foreground mb-1">{item.value}</span>
              <span className="label-premium text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
