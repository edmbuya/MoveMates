import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function BookingForm() {
  const [serviceType, setServiceType] = useState("");
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking search:', { serviceType, destination, checkInDate, checkOutDate, adults, children });
    // TODO: Implement booking search functionality
  };

  return (
    <section id="booking" className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Plan Your Perfect Adventure</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover Kenya's wonders with our expert-guided tours and luxury accommodations
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Plan Your Adventure</h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-booking-search">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="service-type" className="text-foreground font-medium mb-2">
                    Service Type
                  </Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger className="w-full" data-testid="select-service-type">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private-tours">Private Tours</SelectItem>
                      <SelectItem value="group-tours">Group Tours</SelectItem>
                      <SelectItem value="vehicle-hire">Vehicle Hire</SelectItem>
                      <SelectItem value="accommodations">Accommodations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="destination" className="text-foreground font-medium mb-2">
                    Destination
                  </Label>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger className="w-full" data-testid="select-destination">
                      <SelectValue placeholder="Select Destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="amboseli">Amboseli National Park</SelectItem>
                      <SelectItem value="maasai-mara">Maasai Mara</SelectItem>
                      <SelectItem value="mount-kenya">Mount Kenya</SelectItem>
                      <SelectItem value="diani-beach">Diani Beach</SelectItem>
                      <SelectItem value="tsavo">Tsavo National Park</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="check-in" className="text-foreground font-medium mb-2">
                    Check-in Date
                  </Label>
                  <Input
                    id="check-in"
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full"
                    data-testid="input-check-in-date"
                  />
                </div>
                <div>
                  <Label htmlFor="check-out" className="text-foreground font-medium mb-2">
                    Check-out Date
                  </Label>
                  <Input
                    id="check-out"
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full"
                    data-testid="input-check-out-date"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="adults" className="text-foreground font-medium mb-2">
                    Adults
                  </Label>
                  <Select value={adults} onValueChange={setAdults}>
                    <SelectTrigger className="w-full" data-testid="select-adults">
                      <SelectValue placeholder="1 Adult" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Adult</SelectItem>
                      <SelectItem value="2">2 Adults</SelectItem>
                      <SelectItem value="3">3 Adults</SelectItem>
                      <SelectItem value="4">4 Adults</SelectItem>
                      <SelectItem value="5+">5+ Adults</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="children" className="text-foreground font-medium mb-2">
                    Children
                  </Label>
                  <Select value={children} onValueChange={setChildren}>
                    <SelectTrigger className="w-full" data-testid="select-children">
                      <SelectValue placeholder="0 Children" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0 Children</SelectItem>
                      <SelectItem value="1">1 Child</SelectItem>
                      <SelectItem value="2">2 Children</SelectItem>
                      <SelectItem value="3">3 Children</SelectItem>
                      <SelectItem value="4+">4+ Children</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground px-12 py-4 text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
                  data-testid="button-search-book"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search & Book
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
