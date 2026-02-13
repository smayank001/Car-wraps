import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeSearchTerm = searchParams.get("search") || "";

  const performSearch = () => {
    const trimmed = searchQuery.trim();
    const q = trimmed.toLowerCase();
    if (!q) return;

    let target = "/";

    if (q.includes("service")) {
      target = "/services";
    } else if (q.includes("portfolio") || q.includes("work")) {
      target = "/portfolio";
    } else if (q.includes("about")) {
      target = "/about";
    } else if (q.includes("contact") || q.includes("quote")) {
      target = "/contact";
    }

    window.location.href = `${target}?search=${encodeURIComponent(trimmed)}`;

    setSearchQuery("");
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-6 lg:px-12 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative">
              <div className="relative">
                <img
                  src={logoImage}
                  alt=""
                  className="w-28 h-28 object-contain transition-all duration-300 group-hover:opacity-90 -mt-8 -mb-8 animate-logo-run"
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
                  className={`text-xs uppercase tracking-[0.15em] font-bold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${location.pathname === link.href
                    ? "text-primary after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Search + CTAs */}
            <div className="hidden md:flex items-center gap-3">
              {/* Search Input */}
              <form
                className="relative"
                onSubmit={(e) => {
                  e.preventDefault();
                  performSearch();
                }}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-36 lg:w-52 rounded-full bg-secondary/60 border border-border/40 px-4 py-1.5 text-[11px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* CTAs */}
              <button
                onClick={() => {
                  // Check if we're on the home page, if so scroll to the Featured Work section
                  if (
                    window.location.pathname === "/" ||
                    window.location.pathname === ""
                  ) {
                    const element = document.getElementById("featured-work");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  } else {
                    // If we're not on home page, navigate to home and then scroll
                    window.location.href = "/#featured-work";
                  }
                }}
                className="inline-flex items-center justify-center px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-bold bg-transparent text-foreground border border-foreground/30 transition-all duration-300 hover:border-accent hover:text-accent"
              >
                View Our Work
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-bold bg-primary text-primary-foreground border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary"
              >
                Get a Quote
              </Link>
            </div>

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
                {/* Mobile Search */}
                <div className="mb-2">
                  <form
                    className="relative"
                    onSubmit={(e) => {
                      e.preventDefault();
                      performSearch();
                    }}
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full rounded-full bg-secondary/60 border border-border/40 px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm uppercase tracking-[0.15em] font-bold transition-colors py-2 ${location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    // Check if we're on the home page, if so scroll to the Featured Work section
                    if (
                      window.location.pathname === "/" ||
                      window.location.pathname === ""
                    ) {
                      const element = document.getElementById("featured-work");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    } else {
                      // If we're not on home page, navigate to home and then scroll
                      window.location.href = "/#featured-work";
                    }
                  }}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-bold bg-transparent text-foreground border border-foreground/30"
                >
                  View Our Work
                </button>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-bold bg-primary text-primary-foreground"
                >
                  Get a Quote
                </Link>
              </nav>
            </div>
          )}
        </div>

        {/* Running Marquee Line - directly below navbar */}
        <div className="bg-primary py-1 overflow-hidden border-t border-border/30">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mx-8">
              ✨ Premium Vehicle Wrapping & Signage - Transform Your Brand Into
              Art ✨
            </span>
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mx-8">
              ✨ Industry-Leading Quality & Service ✨
            </span>
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mx-8">
              ✨ Professional Fleet Branding Solutions ✨
            </span>
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mx-8">
              ✨ Custom Design & Installation ✨
            </span>
          </div>
        </div>

        {/* Simple search result indicator */}
        {activeSearchTerm && (
          <div className="bg-background/95 border-t border-border/30">
            <div className="container mx-auto px-6 lg:px-12 py-2 text-[11px] md:text-xs text-muted-foreground">
              Showing results for:{" "}
              <span className="font-semibold text-primary">
                {activeSearchTerm}
              </span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
