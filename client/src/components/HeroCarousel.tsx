import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Amboseli National Park",
    location: "Kajiado County, Kenya",
    description: "Famous for large elephant herds and spectacular views of Mount Kilimanjaro",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    title: "Maasai Mara",
    location: "Narok County, Kenya",
    description: "Witness the great migration and experience Africa's most iconic wildlife",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Mount Kenya",
    location: "Central Kenya",
    description: "Conquer Africa's second highest peak with expert mountain guides",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen carousel-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide relative h-full ${index === currentSlide ? 'active' : ''}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 hero-overlay flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <p className="text-lg mb-2 opacity-90 flex items-center justify-center">
                <MapPin className="mr-2 h-5 w-5" />
                {slide.location}
              </p>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">{slide.title}</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.description}</p>
              <Button
                onClick={scrollToTours}
                className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
                data-testid="button-explore-tours"
              >
                Explore Tours
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
            data-testid={`button-carousel-indicator-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
