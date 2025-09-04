import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import BookingForm from "@/components/BookingForm";
import ToursSection from "@/components/ToursSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { MessageCircle } from "lucide-react";
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
      
      {/* Floating Chat Button */}
      <div className="floating-chat">
        <Button 
          size="icon" 
          className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all"
          data-testid="button-chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
