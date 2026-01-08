const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 cta-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-foreground/20 rotate-45 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-foreground/20 rotate-12 translate-x-48 translate-y-48" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="label-premium text-primary-foreground/70 mb-4">Ready to Transform?</p>
          <h2 className="heading-section text-primary-foreground mb-6">
            Let Us Bring Your
            <br />
            Vision to Life
          </h2>
          <p className="body-premium text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            From concept to completion, we are here to elevate your brand with 
            premium wrapping, printing, and signage solutions. Get started today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center justify-center px-10 py-5 text-sm uppercase tracking-[0.2em] font-bold bg-foreground text-background border-2 border-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground">
              Request a Quote
            </button>
            <button className="inline-flex items-center justify-center px-10 py-5 text-sm uppercase tracking-[0.2em] font-bold bg-transparent text-primary-foreground border-2 border-primary-foreground/50 transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
