import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import truckImage from "@/assets/truck.jpeg";
import ServicePageTemplate from "@/components/ServicePageTemplate";

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
    <ServicePageTemplate
      title="Truck Signs"
      tagline="Transform your commercial vehicles into powerful mobile billboards. Professional graphics that turn heads and generate leads wherever you drive."
      heroImage={truckImage}
      description={[
        "Your commercial vehicles travel thousands of miles each year—make every mile count with professional truck signage that advertises your business 24/7. Our truck graphics turn your fleet into a moving marketing force that reaches customers across your entire service area.",
        "We specialize in graphics for box trucks, delivery vans, pickups, and semi-trailers. From simple vinyl lettering to full vehicle wraps, we offer solutions for every budget and branding goal. Our designs are optimized for visibility at highway speeds and in traffic.",
        "Every truck graphics project includes custom design services to ensure your branding translates effectively to the vehicle format. Our installation team has extensive experience with commercial vehicles and ensures proper application for long-lasting results.",
      ]}
      galleryImages={[truckImage, truckImage, truckImage, truckImage]}
      benefits={[
        {
          title: "Mobile Advertising",
          description:
            "Your vehicles become 24/7 billboards, generating thousands of impressions daily across your service area.",
        },
        {
          title: "Fleet Consistency",
          description:
            "Uniform graphics across your entire fleet create a professional, cohesive brand presence on the road.",
        },
        {
          title: "Custom Design",
          description:
            "Professional designers create layouts optimized for your specific vehicle types and branding requirements.",
        },
        {
          title: "Durable Materials",
          description:
            "Commercial-grade vinyl designed to withstand heavy use, highway conditions, and frequent washing.",
        },
        {
          title: "DOT Compliant",
          description:
            "We ensure all truck graphics meet DOT requirements including proper marking and visibility standards.",
        },
        {
          title: "Paint Protection",
          description:
            "Vehicle wraps protect your original paint from UV damage, scratches, and minor abrasions.",
        },
      ]}
    />
  );
};

export default TruckSigns;
