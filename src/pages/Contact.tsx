import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["62 South Park Blvd", "Greenwood, IN 46143"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(317) 300-5900"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["deol.signs@gmail.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 8AM - 6PM", "Sat: 9AM - 2PM"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-card to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="label-premium text-accent mb-4 animate-fade-up">
              Get In Touch
            </p>
            <h1 className="heading-hero text-metallic mb-6 animate-fade-up delay-100">
              Contact Us
            </h1>
            <p className="body-premium text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
              Ready to transform your brand? Reach out for a free consultation
              and quote on your next signage or wrap project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card border-y border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 border border-primary/50 flex items-center justify-center">
                  <item.icon
                    className="w-6 h-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="heading-card text-foreground text-sm mb-2">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <p className="label-premium text-accent mb-4">Send A Message</p>
              <h2 className="heading-section text-metallic mb-8">
                Request A Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="label-premium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="label-premium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="label-premium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="label-premium text-foreground mb-2 block">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-card border border-border/50 text-foreground focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="vehicle-wrap">Vehicle Wrap</option>
                      <option value="truck-graphics">Truck Graphics</option>
                      <option value="channel-letters">
                        Channel Letter Signs
                      </option>
                      <option value="banners">Banners & Signage</option>
                      <option value="printing">Digital Printing</option>
                      <option value="apparel">T-Shirt Printing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label-premium text-foreground mb-2 block">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-hero-primary w-full md:w-auto flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="flex flex-col justify-center">
              <div className="bg-card border border-border/50 p-8 lg:p-12">
                <p className="label-premium text-accent mb-4">
                  Why Work With Us
                </p>
                <h3 className="heading-section text-metallic text-2xl mb-6">
                  Premium Quality, Every Time
                </h3>

                <div className="space-y-6 text-muted-foreground body-premium">
                  <p>
                    We're committed to delivering exceptional results that
                    exceed expectations. From initial consultation to final
                    installation, our team ensures a seamless experience.
                  </p>

                  <ul className="space-y-4">
                    {[
                      "Free design consultation",
                      "Premium 3M & Avery materials",
                      "Professional installation",
                      "Competitive pricing",
                      "Quick turnaround times",
                      "Satisfaction guaranteed",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="mt-8 pt-8 border-t border-border/30">
                  <p className="label-premium text-foreground mb-3">
                    Need Immediate Help?
                  </p>
                  <a
                    href="tel:317-300-5900"
                    className="text-2xl font-bold text-primary hover:text-accent transition-colors"
                  >
                    (317) 300-5900
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
