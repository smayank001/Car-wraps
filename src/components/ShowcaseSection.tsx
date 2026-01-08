import { useState } from "react";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import showcase4 from "@/assets/showcase-4.jpg";

const showcaseItems = [
  {
    image: showcase1,
    title: "Chrome Blue Porsche 911",
    category: "Exotic Wrap",
  },
  {
    image: showcase2,
    title: "Corporate Fleet Branding",
    category: "Fleet Graphics",
  },
  {
    image: showcase3,
    title: "Retail Interior Branding",
    category: "Interior Graphics",
  },
  {
    image: showcase4,
    title: "Matte Black BMW M4",
    category: "Sports Car Wrap",
  },
];

const ShowcaseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="featured-work" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-premium text-accent mb-4">Portfolio</p>
          <h2 className="heading-section text-metallic mb-6">Featured Work</h2>
          <p className="body-premium text-muted-foreground max-w-2xl mx-auto">
            A showcase of our finest projects, from luxury vehicle
            transformations to large-scale commercial installations.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="showcase-card aspect-[4/3]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div
                className={`absolute inset-0 z-10 flex flex-col justify-end p-8 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="label-premium text-accent mb-2">
                  {item.category}
                </p>
                <h3 className="heading-card text-foreground">{item.title}</h3>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 z-20 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute top-4 right-4 w-8 h-px bg-primary" />
                <div className="absolute top-4 right-4 w-px h-8 bg-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
