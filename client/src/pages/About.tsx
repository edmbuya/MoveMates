import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Eye, Heart, Shield, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We believe in genuine connections with Kenya's culture, people, and landscapes, creating memories that last a lifetime."
    },
    {
      icon: Shield,
      title: "Safety & Excellence", 
      description: "Your safety and satisfaction are our highest priorities, backed by professional guides and quality services."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to responsible tourism that protects Kenya's environment and supports local communities."
    },
    {
      icon: Users,
      title: "Local Partnership",
      description: "We work closely with local communities, ensuring tourism benefits reach the people who call Kenya home."
    },
    {
      icon: Target,
      title: "Quality Service",
      description: "From initial inquiry to trip completion, we maintain the highest standards of personalized service and attention to detail."
    },
    {
      icon: Eye,
      title: "Cultural Respect",
      description: "We honor and celebrate Kenya's diverse cultures, promoting understanding and respect between visitors and locals."
    }
  ];

  const features = [
    {
      title: "Local Expertise",
      description: "Born and raised in Kenya, we know the hidden gems and authentic experiences that guidebooks miss."
    },
    {
      title: "Personalized Service", 
      description: "Every itinerary is tailored to your interests, budget, and travel style for a truly unique experience."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance ensures you're never alone during your Kenya adventure."
    },
    {
      title: "Quality Guaranteed",
      description: "We maintain the highest standards for accommodations, vehicles, and guide services."
    },
    {
      title: "Cultural Immersion",
      description: "Connect with local communities and experience authentic Kenyan culture beyond the tourist trail."
    },
    {
      title: "Safety First",
      description: "Comprehensive safety protocols and experienced guides ensure worry-free travels throughout Kenya."
    }
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">About Move Mates</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting travelers with the heart and soul of Kenya through authentic experiences and exceptional service
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Move Mates was born from a simple passion: to share the incredible beauty and rich culture of Kenya with travelers from around the world. Founded in 2020, we started as a small team of local tourism enthusiasts who wanted to create authentic, meaningful travel experiences.
                </p>
                <p>
                  What began as guided tours around Nairobi has evolved into a comprehensive travel service offering everything from wildlife safaris to luxury accommodations. Our deep love for Kenya and commitment to exceptional service has made us a trusted partner for thousands of visitors.
                </p>
                <p>
                  Today, Move Mates stands as a bridge between Kenya's natural wonders and travelers seeking authentic experiences, combining local expertise with world-class hospitality.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Move Mates team in Kenya" 
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="img-our-story"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground">Driven by purpose, guided by values</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="h-full">
              <CardContent className="p-8 text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional travel experiences that showcase Kenya's natural beauty, wildlife, and cultural heritage while supporting local communities and promoting sustainable tourism practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardContent className="p-8 text-center">
                <Eye className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Kenya's premier travel partner, recognized for creating transformative experiences that connect visitors with the heart and soul of our beautiful country while preserving it for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="stat-travelers">
              <div className="text-4xl font-bold text-foreground mb-2">2500+</div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="text-center" data-testid="stat-tours">
              <div className="text-4xl font-bold text-foreground mb-2">150+</div>
              <div className="text-muted-foreground">Tours Completed</div>
            </div>
            <div className="text-center" data-testid="stat-destinations">
              <div className="text-4xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Destinations</div>
            </div>
            <div className="text-center" data-testid="stat-experience">
              <div className="text-4xl font-bold text-foreground mb-2">4</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Move Mates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Move Mates?</h2>
            <p className="text-xl text-muted-foreground">What sets us apart in Kenya's tourism landscape</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Explore Kenya?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied travelers who have discovered the magic of Kenya with Move Mates. Your adventure awaits!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('tours')}
                className="bg-primary text-primary-foreground px-8 py-3 text-lg font-semibold hover:bg-primary/90"
                data-testid="button-browse-tours"
              >
                Browse Tours
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="px-8 py-3 text-lg font-semibold"
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}