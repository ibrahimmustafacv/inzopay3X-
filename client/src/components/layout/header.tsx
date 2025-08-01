import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-royal-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-egyptian-pattern"></div>
      </div>
      <nav className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-pharaoh-gold flex items-center">
            <LogIn className="mr-2" size={28} />
            INZOPAY
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-pharaoh-gold transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="hover:text-pharaoh-gold transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="hover:text-pharaoh-gold transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-pharaoh-gold transition-colors"
            >
              Contact
            </button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-pharaoh-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-royal-navy py-4 px-4 space-y-4 mt-4 border-t border-pharaoh-gold">
            <button 
              onClick={() => scrollToSection('services')}
              className="block hover:text-pharaoh-gold transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block hover:text-pharaoh-gold transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block hover:text-pharaoh-gold transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block hover:text-pharaoh-gold transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
