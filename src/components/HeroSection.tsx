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

  const handleGetQuoteClick = () => {
    navigate("/contact");
  };

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <Carousel
          className="w-full h-full"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="h-full">
            <CarouselItem className="h-full">
              {/* <div className="relative w-full h-full">
                <img
                  src={homeImage}
                  alt="Home showcase"
                  className="w-half h-half object-cover object-center"
                />
                <div className="diagonal-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
              </div> */}
              <div className="relative w-full h-[110vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={homeImage}
                  alt="Home slider"
                  className="w-full h-full object-contain opacity-60"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="h-full">
              <div className="relative w-full h-full">
                <img
                  src={heroCar}
                  alt="Premium car wrap showcase"
                  className="w-full h-full object-cover object-center"
                />
                <div className="diagonal-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Pre-headline */}
          <p className="label-premium text-accent mb-6 animate-fade-up opacity-0 delay-100">
            Premium Vehicle Wrapping & Signage
          </p>

          {/* Main Headline */}
          <h1 className="heading-hero text-metallic mb-8 animate-fade-up opacity-0 delay-200">
            Transform
            <br />
            <span className="text-primary">Your Brand</span>
            <br />
            Into Art
          </h1>

          {/* Subheadline */}
          <p className="body-premium text-muted-foreground max-w-xl mb-12 animate-fade-up opacity-0 delay-300">
            Industry-leading vehicle wraps, large-format printing, and corporate
            signage that commands attention and drives results. Where precision
            meets creativity.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-400">
            <button className="btn-hero-primary" onClick={handleGetQuoteClick}>
              Get a Quote
            </button>
            <button
              className="btn-hero-secondary"
              onClick={handleViewWorkClick}
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up opacity-0 delay-500">
        <span className="label-premium text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
