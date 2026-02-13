import heroCar from "@/assets/hero-car.jpg";
import homeImage from "@/assets/home.jpeg";
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

  // Auto-play functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Update current slide index
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleViewWorkClick = () => {
    // Check if we're on the home page, if so scroll to the Featured Work section
    if (window.location.pathname === "/" || window.location.pathname === "") {
      scrollToElement("#featured-work");
    } else {
      // If we're not on home page, navigate to home and then scroll
      navigate("/");
      // Delay the scroll slightly to ensure page loads
      setTimeout(() => {
        scrollToElement("#featured-work");
      }, 100);
    }
  };

  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Left Half - Fixed Image */}
      <div className="w-1/2 h-screen relative">
        <div className="absolute inset-0">
          <img
            src={homeImage}
            alt="Home showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>
      </div>

      {/* Right Half - Carousel Slider */}
      <div className="w-1/2 h-screen relative">
        <Carousel
          className="w-full h-full"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="h-full">
            <CarouselItem className="h-full relative">
              <div className="absolute inset-0">
                <img
                  src={heroCar}
                  alt="Premium car wrap showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-background/70 to-transparent" />
              </div>
            </CarouselItem>
            <CarouselItem className="h-full relative">
              <div className="absolute inset-0">
                <img
                  src={homeImage}
                  alt="Home showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-background/70 to-transparent" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 text-white hover:text-white hover:bg-white/20" />
          <CarouselNext className="right-4 text-white hover:text-white hover:bg-white/20" />
        </Carousel>
      </div>

      {/* Content - Positioned on the left side */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center z-20">
        <div className="max-w-md px-8">
          {/* Pre-headline */}
          <p className="label-premium text-accent mb-6 animate-fade-up opacity-0 delay-100">
            Premium Vehicle Wrapping & Signage
          </p>

          {/* Main Headline */}
          {/* <h1 className="heading-hero text-metallic mb-8 animate-fade-up opacity-0 delay-200">
            Transform
            <br />
            <span className="text-primary">Your Brand</span>
            <br />
            Into Art
          </h1> */}

          {/* Subheadline */}
          <p className="body-premium text-muted-foreground mb-12 animate-fade-up opacity-0 delay-300">
            Industry-leading vehicle wraps, large-format printing, and corporate
            signage that commands attention and drives results.
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Positioned on the right side */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 animate-fade-up opacity-0 delay-500">
        <span className="label-premium text-white">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
