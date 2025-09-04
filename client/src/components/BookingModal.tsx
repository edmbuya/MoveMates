import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  serviceType: z.string(),
  serviceId: z.string(),
  customerName: z.string().min(1, "Name is required"),
  customerEmail: z.string().email("Invalid email address"),
  customerPhone: z.string().optional(),
  checkInDate: z.string().min(1, "Date is required"),
  checkOutDate: z.string().optional(),
  adults: z.number().min(1),
  children: z.number().min(0),
  specialRequests: z.string().optional(),
});

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

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Tour | Accommodation | null;
  serviceType: "tour" | "accommodation";
}

export default function BookingModal({ isOpen, onClose, service, serviceType }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType,
      serviceId: service?.id || "",
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      checkInDate: "",
      checkOutDate: "",
      adults: 1,
      children: 0,
      specialRequests: "",
    },
  });

  const onSubmit = (data: BookingFormData) => {
    if (!service) return;
    
    setIsSubmitting(true);
    
    try {
      // Save booking to localStorage
      const booking = {
        ...data,
        serviceId: service.id,
        serviceType,
        id: Date.now().toString(),
        status: "pending",
        createdAt: new Date().toISOString(),
        serviceName: service.title,
      };

      const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      existingBookings.push(booking);
      localStorage.setItem('bookings', JSON.stringify(existingBookings));

      toast({
        title: "Booking Submitted!",
        description: "Your booking request has been submitted successfully. We'll contact you soon to confirm.",
      });
      form.reset();
      setIsSubmitting(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto" data-testid="modal-booking">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Book {serviceType === "tour" ? "Tour" : "Accommodation"}
          </DialogTitle>
          <div className="text-muted-foreground">
            <h3 className="font-semibold text-foreground">{service.title}</h3>
            <p className="text-sm mt-1">
              {"location" in service ? service.location : ""}
              {serviceType === "tour" && "duration" in service && ` • ${service.duration}`}
            </p>
          </div>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-booking-modal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="customerName">Full Name *</Label>
              <Input
                id="customerName"
                {...form.register("customerName")}
                placeholder="Your full name"
                data-testid="input-customer-name"
              />
              {form.formState.errors.customerName && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.customerName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="customerEmail">Email *</Label>
              <Input
                id="customerEmail"
                type="email"
                {...form.register("customerEmail")}
                placeholder="your@email.com"
                data-testid="input-customer-email"
              />
              {form.formState.errors.customerEmail && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.customerEmail.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="customerPhone">Phone Number</Label>
            <Input
              id="customerPhone"
              {...form.register("customerPhone")}
              placeholder="+254 xxx xxx xxx"
              data-testid="input-customer-phone"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="checkInDate">
                {serviceType === "tour" ? "Start Date" : "Check-in Date"} *
              </Label>
              <Input
                id="checkInDate"
                type="date"
                {...form.register("checkInDate")}
                data-testid="input-booking-check-in"
              />
              {form.formState.errors.checkInDate && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.checkInDate.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="checkOutDate">
                {serviceType === "tour" ? "End Date" : "Check-out Date"}
              </Label>
              <Input
                id="checkOutDate"
                type="date"
                {...form.register("checkOutDate")}
                data-testid="input-booking-check-out"
              />
            </div>
          </div>

          {/* Service-specific options */}
          {serviceType === "tour" && (
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Select>
                <SelectTrigger data-testid="select-tour-destination">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="amboseli">Amboseli National Park</SelectItem>
                  <SelectItem value="maasai-mara">Maasai Mara</SelectItem>
                  <SelectItem value="mount-kenya">Mount Kenya</SelectItem>
                  <SelectItem value="tsavo">Tsavo National Park</SelectItem>
                  <SelectItem value="lake-nakuru">Lake Nakuru</SelectItem>
                  <SelectItem value="samburu">Samburu National Reserve</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {serviceType === "accommodation" && (
            <div>
              <Label htmlFor="apartmentType">Apartment Type</Label>
              <Select>
                <SelectTrigger data-testid="select-apartment-type">
                  <SelectValue placeholder="Select apartment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="one-bedroom">One Bedroom</SelectItem>
                  <SelectItem value="two-bedroom">Two Bedroom</SelectItem>
                  <SelectItem value="three-bedroom">Three Bedroom</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="adults">Adults *</Label>
              <Select value={form.watch("adults")?.toString()} onValueChange={(value) => form.setValue("adults", parseInt(value))}>
                <SelectTrigger data-testid="select-booking-adults">
                  <SelectValue placeholder="Select adults" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Adult</SelectItem>
                  <SelectItem value="2">2 Adults</SelectItem>
                  <SelectItem value="3">3 Adults</SelectItem>
                  <SelectItem value="4">4 Adults</SelectItem>
                  <SelectItem value="5">5 Adults</SelectItem>
                  <SelectItem value="6">6 Adults</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="children">Children</Label>
              <Select value={form.watch("children")?.toString()} onValueChange={(value) => form.setValue("children", parseInt(value))}>
                <SelectTrigger data-testid="select-booking-children">
                  <SelectValue placeholder="Select children" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0 Children</SelectItem>
                  <SelectItem value="1">1 Child</SelectItem>
                  <SelectItem value="2">2 Children</SelectItem>
                  <SelectItem value="3">3 Children</SelectItem>
                  <SelectItem value="4">4 Children</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              {...form.register("specialRequests")}
              rows={3}
              placeholder="Any special requirements or requests..."
              data-testid="textarea-special-requests"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              data-testid="button-booking-cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-booking-submit"
            >
              {isSubmitting ? "Submitting..." : "Submit Booking"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
