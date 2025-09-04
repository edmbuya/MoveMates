import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import BookingModal from "./BookingModal";
import accommodationsData from "@/data/accommodations.json";

type Accommodation = {
  id: string;
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  price: string;
  image: string;
  features?: string[];
  maxGuests: number;
  isActive: boolean;
};

export default function AccommodationsSection() {
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX
    setTimeout(() => {
      setAccommodations(accommodationsData as Accommodation[]);
      setIsLoading(false);
    }, 100);
  }, []);

  const handleBookNow = (accommodation: Accommodation) => {
    setSelectedAccommodation(accommodation);
    setShowBookingModal(true);
  };

  if (isLoading) {
    return (
      <section id="accommodations" className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading accommodations...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="accommodations" className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Luxury Accommodations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium vacation rentals and serviced apartments in Kenya's most desirable locations
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations?.map((accommodation) => (
            <Card 
              key={accommodation.id} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`card-accommodation-${accommodation.id}`}
            >
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('${accommodation.image}')` }}>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
                  <MapPin className="inline mr-1 h-3 w-3" />
                  {accommodation.location}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{accommodation.title}</h3>
                <p className="text-muted-foreground mb-4">{accommodation.description}</p>
                
                {accommodation.features && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {accommodation.bedrooms} Bedroom{accommodation.bedrooms > 1 ? 's' : ''}
                    </Badge>
                    {accommodation.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-foreground">
                      ${parseFloat(accommodation.price).toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">/night</span>
                  </div>
                  <Button
                    onClick={() => handleBookNow(accommodation)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    data-testid={`button-book-accommodation-${accommodation.id}`}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {(!accommodations || accommodations.length === 0) && !isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No accommodations available at the moment.</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        service={selectedAccommodation}
        serviceType="accommodation"
      />
    </section>
  );
}
