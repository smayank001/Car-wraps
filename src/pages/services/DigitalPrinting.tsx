import ServicePageTemplate from "@/components/ServicePageTemplate";
import servicePrinting from "@/assets/service-printing.jpg";
import serviceBanners from "@/assets/service-banners.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const DigitalPrinting = () => {
  return (
    <ServicePageTemplate
      title="Digital Printing"
      tagline="High-resolution large format printing for banners, posters, displays, and promotional materials with vibrant, lasting colors that make your brand stand out."
      heroImage={servicePrinting}
      description={[
        "Our state-of-the-art digital printing capabilities deliver stunning visual quality for all your marketing and branding needs. Using the latest wide-format printing technology, we produce vibrant, high-resolution prints on a variety of substrates.",
        "From trade show displays and retail graphics to outdoor banners and wall murals, our digital printing services cover the full spectrum of large format applications. We use UV-stable inks that resist fading and weathering for long-lasting results.",
        "Our team of print specialists ensures color accuracy and consistency across all your materials, maintaining brand integrity whether you're printing a single poster or a large-scale campaign. Fast turnaround times mean you get your prints when you need them.",
      ]}
      galleryImages={[servicePrinting, serviceBanners, portfolio3, portfolio4]}
      benefits={[
        {
          title: "High Resolution",
          description: "Crystal-clear prints up to 1440 DPI ensure sharp images and text, even when viewed up close.",
        },
        {
          title: "Vibrant Colors",
          description: "Advanced color management and premium inks deliver rich, accurate colors that bring your designs to life.",
        },
        {
          title: "Multiple Materials",
          description: "Print on vinyl, fabric, canvas, rigid substrates, and specialty materials for any application.",
        },
        {
          title: "Weather Resistant",
          description: "UV-stable inks and lamination options ensure your outdoor prints resist fading, rain, and sun damage.",
        },
        {
          title: "Fast Turnaround",
          description: "Rush orders available with same-day and next-day printing options for urgent projects.",
        },
        {
          title: "Any Size",
          description: "From small format prints to massive billboards, we handle projects of any scale.",
        },
      ]}
    />
  );
};

export default DigitalPrinting;
