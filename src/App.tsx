import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Detail Pages
import ChannelLetterSigns from "./pages/services/ChannelLetterSigns";
import DigitalPrinting from "./pages/services/DigitalPrinting";
import TruckSigns from "./pages/services/TruckSigns";
import CarWraps from "./pages/services/CarWraps";
import BusinessCards from "./pages/services/BusinessCards";
import YardSigns from "./pages/services/YardSigns";
import FlyersBanners from "./pages/services/FlyersBanners";
import TShirtPrinting from "./pages/services/TShirtPrinting";
import CommercialBranding from "./pages/services/CommercialBranding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/channel-letter-signs"
            element={<ChannelLetterSigns />}
          />
          <Route
            path="/services/digital-printing"
            element={<DigitalPrinting />}
          />
          <Route path="/services/truck-signs" element={<TruckSigns />} />
          <Route path="/services/car-wraps" element={<CarWraps />} />
          <Route path="/services/business-cards" element={<BusinessCards />} />
          <Route path="/services/yard-signs" element={<YardSigns />} />
          <Route path="/services/flyers-banners" element={<FlyersBanners />} />
          <Route
            path="/services/t-shirt-printing"
            element={<TShirtPrinting />}
          />
          <Route
            path="/services/commercial-branding"
            element={<CommercialBranding />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
