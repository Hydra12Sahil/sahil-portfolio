import { Button } from "@/components/ui/button";
import { BarChart2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-elevated"
          : "bg-card/80 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 group"
          data-ocid="header.logo"
          aria-label="Go to top"
        >
          <BarChart2 className="w-5 h-5 text-accent transition-transform group-hover:scale-110" />
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            Sahil
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              data-ocid={`header.nav.${link.label.toLowerCase()}`}
              className="px-3 py-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted/60"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold shadow-accent transition-smooth"
            onClick={() => scrollTo("#contact")}
            data-ocid="header.cta_button"
          >
            Get In Touch
          </Button>
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            data-ocid="header.hamburger_button"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-card/98 backdrop-blur-md border-t border-border px-4 py-3 flex flex-col gap-1"
          data-ocid="header.mobile_menu"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              data-ocid={`header.mobile.${link.label.toLowerCase()}`}
              className="text-left px-3 py-2.5 text-sm font-body text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold"
            onClick={() => scrollTo("#contact")}
            data-ocid="header.mobile.cta_button"
          >
            Get In Touch
          </Button>
        </div>
      )}
    </header>
  );
}
