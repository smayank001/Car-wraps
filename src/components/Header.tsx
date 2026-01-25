import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/logo.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <img
                src={logoImage}
                alt=""
                className="w-24 h-24 object-contain transition-all duration-300 group-hover:opacity-90 -mt-6 -mb-6"
              />
            </div>
            <div>
              <h1 className="text-sm uppercase tracking-[0.2em] font-bold text-foreground">
                <span className="text-primary"></span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground"></p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xs uppercase tracking-[0.15em] font-bold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                  location.pathname === link.href
                    ? "text-primary after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold bg-primary text-primary-foreground border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border/30 pt-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.15em] font-bold transition-colors py-2 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold bg-primary text-primary-foreground"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
