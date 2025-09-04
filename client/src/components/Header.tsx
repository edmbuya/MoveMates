import { useState } from "react";
import { Link } from "wouter";
import { Compass, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <Compass className="text-primary text-2xl" />
            <h1 className="text-2xl font-bold text-foreground">Move Mates</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('tours')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-nav-tours"
            >
              Tours
            </button>
            <button 
              onClick={() => scrollToSection('accommodations')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-nav-accommodations"
            >
              Accommodations
            </button>
            <Link 
              href="/about" 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-nav-about"
            >
              About
            </Link>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-nav-contact"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-book-now"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="button-mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('tours')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="button-mobile-nav-tours"
              >
                Tours
              </button>
              <button 
                onClick={() => scrollToSection('accommodations')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="button-mobile-nav-accommodations"
              >
                Accommodations
              </button>
              <Link 
                href="/about" 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="link-mobile-nav-about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="button-mobile-nav-contact"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('booking')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit"
                data-testid="button-mobile-book-now"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
