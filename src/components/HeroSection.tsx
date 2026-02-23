import homeImage from "@/assets/home.jpeg";
import { useNavigate } from "react-router-dom";
import { scrollToElement } from "@/lib/scroll-utils";

const HeroSection = () => {
  const navigate = useNavigate();

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
    <section className="relative w-full h-[calc(100vh-11rem)] flex items-center justify-center bg-black overflow-hidden">
      
      {/* Properly Fitted Clear Image */}
      <img
        src={homeImage}
        alt="Home Showcase"
        className="w-full h-full object-contain"
      />

      {/* Content */}
      <div className="absolute bottom-20 left-6 md:left-12 z-10">
        <h1 className="text-yellow-400 text-xl md:text-3xl font-bold mb-3 max-w-xl">
          Premium Vehicle Wrapping & Signage
        </h1>

        <p className="text-gray-200 text-sm md:text-base max-w-lg">
          Industry-leading vehicle wraps, large-format printing, and corporate
          signage that commands attention and drives real business results.
        </p>
      </div>

    </section>
  );
};

export default HeroSection;