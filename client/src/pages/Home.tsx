import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import BookingForm from "@/components/BookingForm";
import ToursSection from "@/components/ToursSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <HeroCarousel />
      <BookingForm />
      <ToursSection />
      <AccommodationsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <div className="floating-chat">
        <a 
          href="https://wa.me/254112344722" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button 
            size="icon" 
            className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all bg-green-500 hover:bg-green-600 text-white"
            data-testid="button-whatsapp"
          >
            <SiWhatsapp className="h-6 w-6" />
          </Button>
        </a>
      </div>
    </div>
  );
}
