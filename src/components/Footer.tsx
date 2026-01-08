import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Vehicle Wraps", href: "/services/car-wraps" },
  { label: "Channel Letters", href: "/services/channel-letter-signs" },
  { label: "Truck Graphics", href: "/services/truck-signs" },
  { label: "Digital Printing", href: "/services/digital-printing" },
  { label: "Business Cards", href: "/services/business-cards" },
  { label: "Banners & Signs", href: "/services/flyers-banners" },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary">D</span>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-foreground">
                  Deol <span className="text-primary">Signs</span>
                </h3>
                <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  & Wraps
                </p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium vehicle wrapping, signage, and commercial branding
              solutions. Transforming businesses through powerful visual
              experiences.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-premium text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-premium text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="label-premium text-foreground mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>123 Industrial Boulevard</li>
              <li>Sacramento, CA 95814</li>
              <li className="pt-2">
                <a
                  href="tel:5551234567"
                  className="hover:text-primary transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@deolsigns.com"
                  className="hover:text-primary transition-colors"
                >
                  info@deolsigns.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Deol Signs & Wraps. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
