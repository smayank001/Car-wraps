import priceImage from "@/assets/price.jpeg";

const PricingImage = () => {
  return (
    <section className="py-20 bg-card border-y border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* <div className="text-center mb-12">
          <h2 className="heading-section text-metallic mb-4">Our Pricing</h2>
          <p className="body-premium text-muted-foreground max-w-2xl mx-auto">
            Check out our competitive pricing for various services
          </p>
        </div> */}

        {/* <div className="flex justify-center">
          <div className="max-w-2xl w-half rounded-lg overflow-hidden shadow-xl">
            <img
              src={priceImage}
              alt="Deol Signs & Wraps Pricing Information"
              className="w-half h-auto object-contain"
            />
          </div>
        </div> */}
        {/* <div className="flex justify-center">
          <div className="max-w-2xl rounded-lg overflow-hidden shadow-xl">
            <img
              src={priceImage}
              alt="Deol Signs & Wraps Pricing Information"
              className="w-96 mx-auto h-auto object-contain"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PricingImage;
