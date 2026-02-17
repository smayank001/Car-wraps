import homeImage from "@/assets/home.jpeg";
import portfolioOne from "@/assets/portfolio-1.jpg";
import truckImage from "@/assets/truck.jpeg";

import { useNavigate } from "react-router-dom";
import { scrollToElement } from "@/lib/scroll-utils";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [homeImage, portfolioOne, truckImage];

  // Auto-play
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Update active dot
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleViewWorkClick = () => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      scrollToElement("#featured-work");
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToElement("#featured-work");
      }, 100);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen">
                {/* Background Image */}
                <img
                  src={image}
                  alt="Hero Slide"
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Left-aligned Content */}
                {/* Left-aligned Content - Positioned at bottom */}
                <div className="absolute inset-0 flex flex-col items-start justify-end text-left px-6 md:px-12 pb-20 z-10">
                  <h1 className="text-yellow-400 text-lg md:text-xl font-bold mb-1 max-w-lg leading-tight">
                    Premium Vehicle Wrapping & Signage
                  </h1>

                  <p className="text-gray-200 text-[10px] md:text-xs max-w-md mb-8">
                    Industry-leading vehicle wraps, large-format printing, and
                    corporate signage that commands attention and drives real
                    business results.
                  </p>

                  <div className="flex gap-4 flex-wrap justify-center">
                    {/* <button
                      onClick={handleViewWorkClick}
                      className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition"
                    >
                      View Our Work
                    </button>

                    <button
                      onClick={() => navigate("/contact")}
                      className="px-8 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                    >
                      Get a Quote
                    </button> */}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-6 text-white" />
        <CarouselNext className="right-6 text-white" />
      </Carousel>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
