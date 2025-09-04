import { Link } from "wouter";
import { Compass, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div data-testid="footer-company">
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="text-primary text-2xl" />
              <h3 className="text-2xl font-bold">Move Mates</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premier destination for luxury tours and exceptional accommodations. Experience premium comfort and service in prime locations across Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-links">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tours')} 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="link-footer-tours"
                >
                  Tours
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('accommodations')} 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="link-footer-accommodations"
                >
                  Accommodations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-private-tours">
                  Private Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-group-tours">
                  Group Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-vacation-rentals">
                  Vacation Rentals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-serviced-apartments">
                  Serviced Apartments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-vehicle-hire">
                  Vehicle Hire
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary h-5 w-5" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary h-5 w-5" />
                <span className="text-gray-300">+254 11 234 4732</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary h-5 w-5" />
                <span className="text-gray-300">movemates1@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Move Mates. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors" data-testid="link-terms">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors" data-testid="link-privacy">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors" data-testid="link-cookies">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
