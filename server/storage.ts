import { type Tour, type Accommodation, type Booking, type ContactMessage, type InsertTour, type InsertAccommodation, type InsertBooking, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Tours
  getTours(): Promise<Tour[]>;
  getTour(id: string): Promise<Tour | undefined>;
  createTour(tour: InsertTour): Promise<Tour>;
  
  // Accommodations
  getAccommodations(): Promise<Accommodation[]>;
  getAccommodation(id: string): Promise<Accommodation | undefined>;
  createAccommodation(accommodation: InsertAccommodation): Promise<Accommodation>;
  
  // Bookings
  getBookings(): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  
  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private tours: Map<string, Tour>;
  private accommodations: Map<string, Accommodation>;
  private bookings: Map<string, Booking>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.tours = new Map();
    this.accommodations = new Map();
    this.bookings = new Map();
    this.contactMessages = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed tours
    const sampleTours: Tour[] = [
      {
        id: "1",
        title: "Maasai Mara Private Safari",
        description: "Exclusive wildlife experience with personal guide and luxury accommodation in Kenya's premier safari destination.",
        category: "private",
        duration: "3 Days",
        price: "1200.00",
        priceUnit: "person",
        location: "Maasai Mara",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Private Guide", "Luxury Lodge", "Game Drives", "All Meals"],
        maxGuests: 6,
        isActive: true,
      },
      {
        id: "2",
        title: "Mount Kenya Adventure",
        description: "Join fellow adventurers for an unforgettable trek up Africa's second highest mountain with expert guides.",
        category: "group",
        duration: "5 Days",
        price: "800.00",
        priceUnit: "person",
        location: "Mount Kenya",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Expert Guides", "Camping Equipment", "Meals", "Permits"],
        maxGuests: 12,
        isActive: true,
      },
      {
        id: "3",
        title: "Safari Vehicle + Driver",
        description: "Professional driver and 4WD vehicle for your custom safari adventure. Perfect for independent travelers.",
        category: "vehicle",
        duration: "Per Day",
        price: "150.00",
        priceUnit: "day",
        location: "Kenya",
        image: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["4WD Vehicle", "Professional Driver", "Fuel Included", "Insurance"],
        maxGuests: 7,
        isActive: true,
      },
      {
        id: "4",
        title: "Amboseli Elephant Experience",
        description: "Get up close with magnificent elephants against the backdrop of Mount Kilimanjaro.",
        category: "private",
        duration: "2 Days",
        price: "900.00",
        priceUnit: "person",
        location: "Amboseli National Park",
        image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Elephant Viewing", "Mountain Views", "Lodge Stay", "Photography"],
        maxGuests: 8,
        isActive: true,
      },
      {
        id: "5",
        title: "Coastal Cultural Safari",
        description: "Explore the rich Swahili culture and pristine beaches of Kenya's stunning coastline.",
        category: "group",
        duration: "3 Days",
        price: "650.00",
        priceUnit: "person",
        location: "Kenyan Coast",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Cultural Tours", "Beach Access", "Local Guides", "Traditional Meals"],
        maxGuests: 15,
        isActive: true,
      },
      {
        id: "6",
        title: "Luxury SUV + Guide",
        description: "Premium vehicle with experienced local guide for comfortable exploration of Kenya's highlands.",
        category: "vehicle",
        duration: "Per Day",
        price: "200.00",
        priceUnit: "day",
        location: "Kenya Highlands",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Luxury SUV", "Expert Guide", "Air Conditioning", "WiFi"],
        maxGuests: 5,
        isActive: true,
      }
    ];

    // Seed accommodations
    const sampleAccommodations: Accommodation[] = [
      {
        id: "1",
        title: "Executive Penthouse",
        description: "Luxury 3-bedroom penthouse with stunning city views, modern amenities, and premium furnishings.",
        location: "Kilimani, Nairobi",
        bedrooms: 3,
        price: "180.00",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["WiFi", "Pool", "Parking", "City View"],
        maxGuests: 6,
        isActive: true,
      },
      {
        id: "2",
        title: "Business Apartment",
        description: "Perfect for business travelers, featuring workspace, high-speed internet, and concierge services.",
        location: "Westlands, Nairobi",
        bedrooms: 2,
        price: "120.00",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Office", "Gym", "24/7 Security", "High-Speed WiFi"],
        maxGuests: 4,
        isActive: true,
      },
      {
        id: "3",
        title: "Beachfront Villa",
        description: "Stunning oceanfront villa with private beach access, perfect for family vacations and romantic escapes.",
        location: "Diani Beach, Mombasa",
        bedrooms: 4,
        price: "350.00",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Beach Access", "Pool", "Chef", "Ocean View"],
        maxGuests: 8,
        isActive: true,
      },
      {
        id: "4",
        title: "Forest Eco-Lodge",
        description: "Sustainable luxury accommodation in pristine forest setting with wildlife viewing opportunities.",
        location: "Aberdare Forest",
        bedrooms: 2,
        price: "220.00",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Eco-Friendly", "Wildlife View", "Fireplace", "Nature Trails"],
        maxGuests: 4,
        isActive: true,
      },
      {
        id: "5",
        title: "Luxury Safari Camp",
        description: "Glamping experience with luxury amenities in the heart of Maasai Mara wildlife reserve.",
        location: "Maasai Mara",
        bedrooms: 1,
        price: "450.00",
        image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Game Drives", "All Meals", "Butler Service", "Wildlife View"],
        maxGuests: 2,
        isActive: true,
      },
      {
        id: "6",
        title: "Designer Apartment",
        description: "Contemporary design meets comfort in this stylish apartment with rooftop terrace and garden views.",
        location: "Karen, Nairobi",
        bedrooms: 2,
        price: "160.00",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        features: ["Rooftop", "Garden View", "Modern Design", "Parking"],
        maxGuests: 4,
        isActive: true,
      }
    ];

    sampleTours.forEach(tour => this.tours.set(tour.id, tour));
    sampleAccommodations.forEach(acc => this.accommodations.set(acc.id, acc));
  }

  async getTours(): Promise<Tour[]> {
    return Array.from(this.tours.values()).filter(tour => tour.isActive);
  }

  async getTour(id: string): Promise<Tour | undefined> {
    return this.tours.get(id);
  }

  async createTour(insertTour: InsertTour): Promise<Tour> {
    const id = randomUUID();
    const tour: Tour = { ...insertTour, id, isActive: true };
    this.tours.set(id, tour);
    return tour;
  }

  async getAccommodations(): Promise<Accommodation[]> {
    return Array.from(this.accommodations.values()).filter(acc => acc.isActive);
  }

  async getAccommodation(id: string): Promise<Accommodation | undefined> {
    return this.accommodations.get(id);
  }

  async createAccommodation(insertAccommodation: InsertAccommodation): Promise<Accommodation> {
    const id = randomUUID();
    const accommodation: Accommodation = { ...insertAccommodation, id, isActive: true };
    this.accommodations.set(id, accommodation);
    return accommodation;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = {
      ...insertBooking,
      id,
      status: "pending",
      totalAmount: "0.00",
      createdAt: new Date().toISOString(),
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date().toISOString(),
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
