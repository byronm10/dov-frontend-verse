import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.backend"), href: "/backend" }, // Add this new link
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-portfolio-blue">
          Issa <span className="text-accent">Dovale</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Language Toggle - Positioned at top right */}
      <div className="absolute top-4 right-4 md:right-8">
        <ToggleGroup 
          type="single" 
          value={language} 
          onValueChange={(value) => {
            if (value) setLanguage(value as "en" | "es");
          }}
          className="border rounded-full overflow-hidden shadow-sm"
        >
          <ToggleGroupItem 
            value="en" 
            className="px-3 py-1.5 text-xs font-medium data-[state=on]:bg-accent data-[state=on]:text-white"
            aria-label="Toggle English"
          >
            EN
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="es" 
            className="px-3 py-1.5 text-xs font-medium data-[state=on]:bg-accent data-[state=on]:text-white"
            aria-label="Toggle Spanish"
          >
            ES
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-md md:hidden transition-all duration-200 overflow-hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium py-2 text-gray-700 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium py-2 text-gray-700 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
