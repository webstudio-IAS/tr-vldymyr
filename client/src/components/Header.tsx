import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Truck, Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? "glass-nav py-3" : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <a href="#home" className="flex items-center" data-testid="link-logo">
            <div className="bg-primary text-white p-2 rounded-lg mr-2 sm:mr-3 shadow-lg shadow-primary/25">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className={`font-display font-bold text-xl sm:text-2xl tracking-tight transition-colors ${isScrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>
              WF<span className="text-primary">ITS</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
                data-testid={`link-nav-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            className={`md:hidden p-2 rounded-md transition-colors ${isScrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 font-medium py-3 px-4 rounded-lg transition-colors active:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
              data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(' ', '-')}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
