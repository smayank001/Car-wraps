import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TruckSigns = () => {
  const navigate = useNavigate();

  const handleGetQuoteClick = () => {
    navigate("/contact");
  };

  const services = [
    { name: "Basic Truck Signs", price: "$65" },
    { name: "Basic Truck Signs with Logo", price: "$95" },
    { name: "Basic Double Shade Signs", price: "$130" },
    { name: "Basic Double Shade with Logo", price: "$190" },
    { name: "Basic Chrome Signs", price: "$95" },
    { name: "Chrome Signs with Logo", price: "$150" },
    { name: "Double Shade Chrome with Logo", price: "$245" },
    { name: "Magnet Signs", price: "$90" },
    { name: "Basic Truck Signs (Color Print)", price: "$65" },
    { name: "Truck Signs with Logo (Color Print)", price: "$95" },
    { name: "Install Truck Signs", price: "$40" },
    { name: "Remove Truck Signs", price: "$50" },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Truck Signage Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional truck signage solutions to transform your commercial
            vehicles into powerful mobile advertising platforms
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-border hover:border-primary transition-colors duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need custom truck signage?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call us today or visit our shop for personalized truck signage
            solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <span className="text-xl font-semibold">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <span className="text-xl font-semibold">info@trucksigns.com</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            onClick={handleGetQuoteClick}
          >
            Get a Quote Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TruckSigns;
