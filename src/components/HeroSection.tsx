import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

// LEFT IMAGE (Original)
import homeImage from "@/assets/home.jpeg";

// RIGHT SLIDER MOCK IMAGES
import slideOne from "@/assets/about-facility.jpg";
import slideTwo from "@/assets/truck.jpeg";
import slideThree from "@/assets/service-merch.jpg";

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  // Auto-play
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="h-screen flex overflow-hidden bg-black">

      {/* ================= LEFT SIDE (70%) IMAGE ONLY ================= */}
      <div className="w-[70%] h-screen">
        <img
          src={homeImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ================= RIGHT SIDE (30%) FIXED SLIDER ================= */}
      <div className="w-[30%] h-screen relative overflow-hidden">
        <Carousel
          className="w-full h-full"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="h-full">
            <CarouselItem className="h-full min-w-full">
              <img
                src={slideOne}
                alt="Slide One"
                className="w-full h-screen object-cover"
              />
            </CarouselItem>

            <CarouselItem className="h-full min-w-full">
              <img
                src={slideTwo}
                alt="Slide Two"
                className="w-full h-screen object-cover"
              />
            </CarouselItem>

            <CarouselItem className="h-full min-w-full">
              <img
                src={slideThree}
                alt="Slide Three"
                className="w-full h-screen object-cover"
              />
            </CarouselItem>
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="left-3 text-white bg-black/40 hover:bg-black/70" />
          <CarouselNext className="right-3 text-white bg-black/40 hover:bg-black/70" />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
