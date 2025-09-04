export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Move Mates</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Your premier destination for luxury tours and exceptional accommodations. Experience premium comfort and service in prime locations across Kenya.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience in hospitality and tourism, we curate a collection of premium experiences that meet the highest standards of comfort, style, and adventure. Our mission is to provide guests with unforgettable journeys while showcasing the natural beauty and rich culture of Kenya.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center" data-testid="stat-adventures">
                <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                <div className="text-muted-foreground">Adventures</div>
              </div>
              <div className="text-center" data-testid="stat-guests">
                <div className="text-3xl font-bold text-foreground mb-2">10,000+</div>
                <div className="text-muted-foreground">Happy Guests</div>
              </div>
              <div className="text-center" data-testid="stat-support">
                <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional safari guide with tourists" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-about"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
