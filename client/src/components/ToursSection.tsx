import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BookingModal from "./BookingModal";
import toursData from "@/data/tours.json";

type Tour = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  price: string;
  priceUnit: string;
  location: string;
  image: string;
  features?: string[];
  maxGuests?: number;
  isActive: boolean;
};

export default function ToursSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX
    setTimeout(() => {
      setTours(toursData as Tour[]);
      setIsLoading(false);
    }, 100);
  }, []);

  const filteredTours = tours.filter(tour => {
    if (activeFilter === "all") return true;
    return tour.category === activeFilter;
  });

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    setShowBookingModal(true);
  };

  const filters = [
    { key: "all", label: "All Tours" },
    { key: "private", label: "Private Tours" },
    { key: "group", label: "Group Tours" },
    { key: "vehicle", label: "Vehicle Hire" },
  ];

  if (isLoading) {
    return (
      <section id="tours" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading tours...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tours" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Discover Kenya's Wonders</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From wildlife safaris to cultural experiences, explore Kenya with our expert-guided tours
          </p>
        </div>

        {/* Tour Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-lg p-2 shadow-sm">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`tab-button px-6 py-3 rounded-lg transition-all text-sm font-medium ${
                  activeFilter === filter.key
                    ? 'active bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
                data-testid={`button-filter-${filter.key}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <Card 
              key={tour.id} 
              className="tour-card overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`card-tour-${tour.id}`}
            >
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('${tour.image}')` }}>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
                  {tour.category === 'private' && 'Private Tour'}
                  {tour.category === 'group' && 'Group Tour'}
                  {tour.category === 'vehicle' && 'Vehicle Hire'}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
                  {tour.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{tour.title}</h3>
                <p className="text-muted-foreground mb-4">{tour.description}</p>
                
                {tour.features && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-foreground">
                      ${parseFloat(tour.price).toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">/{tour.priceUnit}</span>
                  </div>
                  <Button
                    onClick={() => handleBookNow(tour)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    data-testid={`button-book-tour-${tour.id}`}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTours.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No tours found for the selected filter.</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        service={selectedTour}
        serviceType="tour"
      />
    </section>
  );
}
