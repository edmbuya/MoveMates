// Data for tours and accommodations
const toursData = [
    {
        "id": "1",
        "title": "Maasai Mara Private Safari",
        "description": "Exclusive wildlife experience with personal guide and luxury accommodation in Kenya's premier safari destination.",
        "category": "private",
        "duration": "3 Days",
        "price": "1200.00",
        "priceUnit": "person",
        "location": "Maasai Mara",
        "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Private Guide", "Luxury Lodge", "Game Drives", "All Meals"],
        "maxGuests": 6,
        "isActive": true
    },
    {
        "id": "2",
        "title": "Mount Kenya Adventure",
        "description": "Join fellow adventurers for an unforgettable trek up Africa's second highest mountain with expert guides.",
        "category": "group",
        "duration": "5 Days",
        "price": "800.00",
        "priceUnit": "person",
        "location": "Mount Kenya",
        "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Expert Guides", "Camping Equipment", "Meals", "Permits"],
        "maxGuests": 12,
        "isActive": true
    },
    {
        "id": "3",
        "title": "Safari Vehicle + Driver",
        "description": "Professional driver and 4WD vehicle for your custom safari adventure. Perfect for independent travelers.",
        "category": "vehicle",
        "duration": "Per Day",
        "price": "150.00",
        "priceUnit": "day",
        "location": "Kenya",
        "image": "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["4WD Vehicle", "Professional Driver", "Fuel Included", "Insurance"],
        "maxGuests": 7,
        "isActive": true
    },
    {
        "id": "4",
        "title": "Amboseli Elephant Experience",
        "description": "Get up close with magnificent elephants against the backdrop of Mount Kilimanjaro.",
        "category": "private",
        "duration": "2 Days",
        "price": "900.00",
        "priceUnit": "person",
        "location": "Amboseli National Park",
        "image": "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Elephant Viewing", "Mountain Views", "Lodge Stay", "Photography"],
        "maxGuests": 8,
        "isActive": true
    },
    {
        "id": "5",
        "title": "Coastal Cultural Safari",
        "description": "Explore the rich Swahili culture and pristine beaches of Kenya's stunning coastline.",
        "category": "group",
        "duration": "3 Days",
        "price": "650.00",
        "priceUnit": "person",
        "location": "Kenyan Coast",
        "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Cultural Tours", "Beach Access", "Local Guides", "Traditional Meals"],
        "maxGuests": 15,
        "isActive": true
    },
    {
        "id": "6",
        "title": "Luxury SUV + Guide",
        "description": "Premium vehicle with experienced local guide for comfortable exploration of Kenya's highlands.",
        "category": "vehicle",
        "duration": "Per Day",
        "price": "200.00",
        "priceUnit": "day",
        "location": "Kenya Highlands",
        "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Luxury SUV", "Expert Guide", "Air Conditioning", "WiFi"],
        "maxGuests": 5,
        "isActive": true
    }
];

const accommodationsData = [
    {
        "id": "1",
        "title": "Executive Penthouse",
        "description": "Luxury 3-bedroom penthouse with stunning city views, modern amenities, and premium furnishings.",
        "location": "Kilimani, Nairobi",
        "bedrooms": 3,
        "price": "180.00",
        "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["WiFi", "Pool", "Parking", "City View"],
        "maxGuests": 6,
        "isActive": true
    },
    {
        "id": "2",
        "title": "Business Apartment",
        "description": "Perfect for business travelers, featuring workspace, high-speed internet, and concierge services.",
        "location": "Westlands, Nairobi",
        "bedrooms": 2,
        "price": "120.00",
        "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Office", "Gym", "24/7 Security", "High-Speed WiFi"],
        "maxGuests": 4,
        "isActive": true
    },
    {
        "id": "3",
        "title": "Beachfront Villa",
        "description": "Stunning oceanfront villa with private beach access, perfect for family vacations and romantic escapes.",
        "location": "Diani Beach, Mombasa",
        "bedrooms": 4,
        "price": "350.00",
        "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Beach Access", "Pool", "Chef", "Ocean View"],
        "maxGuests": 8,
        "isActive": true
    },
    {
        "id": "4",
        "title": "Forest Eco-Lodge",
        "description": "Sustainable luxury accommodation in pristine forest setting with wildlife viewing opportunities.",
        "location": "Aberdare Forest",
        "bedrooms": 2,
        "price": "220.00",
        "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Eco-Friendly", "Wildlife View", "Fireplace", "Nature Trails"],
        "maxGuests": 4,
        "isActive": true
    },
    {
        "id": "5",
        "title": "Luxury Safari Camp",
        "description": "Glamping experience with luxury amenities in the heart of Maasai Mara wildlife reserve.",
        "location": "Maasai Mara",
        "bedrooms": 1,
        "price": "450.00",
        "image": "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Game Drives", "All Meals", "Butler Service", "Wildlife View"],
        "maxGuests": 2,
        "isActive": true
    },
    {
        "id": "6",
        "title": "Designer Apartment",
        "description": "Contemporary design meets comfort in this stylish apartment with rooftop terrace and garden views.",
        "location": "Karen, Nairobi",
        "bedrooms": 2,
        "price": "160.00",
        "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "features": ["Rooftop", "Garden View", "Modern Design", "Parking"],
        "maxGuests": 4,
        "isActive": true
    }
];

// Global variables
let currentSlide = 0;
let currentBookingService = null;
let currentServiceType = null;

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const toursGrid = document.getElementById('tours-grid');
const accommodationsGrid = document.getElementById('accommodations-grid');
const bookingModal = document.getElementById('booking-modal');
const bookingForm = document.getElementById('booking-form');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCarousel();
    loadTours();
    loadAccommodations();
    initializeFilters();
    initializeForms();
    initializeModal();
    setMinDate();
});

// Navigation Functions
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Carousel Functions
function initializeCarousel() {
    // Auto-advance carousel
    setInterval(nextSlide, 5000);
}

function nextSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function currentSlideFunc(n) {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = n - 1;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Tours Functions
function loadTours() {
    toursGrid.innerHTML = '';
    toursData.forEach(tour => {
        if (tour.isActive) {
            const tourCard = createTourCard(tour);
            toursGrid.appendChild(tourCard);
        }
    });
}

function createTourCard(tour) {
    const card = document.createElement('div');
    card.className = 'tour-card';
    card.setAttribute('data-category', tour.category);
    
    card.innerHTML = `
        <img src="${tour.image}" alt="${tour.title}" class="card-image">
        <div class="card-content">
            <h3 class="card-title">${tour.title}</h3>
            <p class="card-description">${tour.description}</p>
            <div class="card-details">
                <div class="card-price">$${tour.price}/${tour.priceUnit}</div>
                <div class="card-meta">
                    <span><i class="fas fa-clock"></i> ${tour.duration}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${tour.location}</span>
                </div>
            </div>
            <div class="card-features">
                ${tour.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <button class="book-btn" onclick="openBookingModal('${tour.id}', 'tour')">Book Now</button>
        </div>
    `;
    
    return card;
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            filterTours(category);
        });
    });
}

function filterTours(category) {
    const tourCards = document.querySelectorAll('.tour-card');
    
    tourCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Accommodations Functions
function loadAccommodations() {
    accommodationsGrid.innerHTML = '';
    accommodationsData.forEach(accommodation => {
        if (accommodation.isActive) {
            const accommodationCard = createAccommodationCard(accommodation);
            accommodationsGrid.appendChild(accommodationCard);
        }
    });
}

function createAccommodationCard(accommodation) {
    const card = document.createElement('div');
    card.className = 'accommodation-card';
    
    card.innerHTML = `
        <img src="${accommodation.image}" alt="${accommodation.title}" class="card-image">
        <div class="card-content">
            <h3 class="card-title">${accommodation.title}</h3>
            <p class="card-description">${accommodation.description}</p>
            <div class="card-details">
                <div class="card-price">$${accommodation.price}/night</div>
                <div class="card-meta">
                    <span><i class="fas fa-bed"></i> ${accommodation.bedrooms} bed${accommodation.bedrooms > 1 ? 's' : ''}</span>
                    <span><i class="fas fa-users"></i> ${accommodation.maxGuests} guests</span>
                </div>
            </div>
            <div class="card-features">
                ${accommodation.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <button class="book-btn" onclick="openBookingModal('${accommodation.id}', 'accommodation')">Book Now</button>
        </div>
    `;
    
    return card;
}

// Modal Functions
function initializeModal() {
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function openBookingModal(serviceId, serviceType) {
    const service = serviceType === 'tour' 
        ? toursData.find(tour => tour.id === serviceId)
        : accommodationsData.find(acc => acc.id === serviceId);
    
    if (!service) return;
    
    currentBookingService = service;
    currentServiceType = serviceType;
    
    // Update modal title
    document.getElementById('modal-title').textContent = `Book ${service.title}`;
    
    // Populate booking options
    const bookingOption = document.getElementById('booking-option');
    bookingOption.innerHTML = '';
    
    if (serviceType === 'tour') {
        // For tours, show destinations or tour types
        const destinations = ['Maasai Mara', 'Mount Kenya', 'Amboseli', 'Tsavo', 'Lake Nakuru'];
        destinations.forEach(destination => {
            const option = document.createElement('option');
            option.value = destination;
            option.textContent = destination;
            bookingOption.appendChild(option);
        });
    } else {
        // For accommodations, show apartment types
        const apartmentTypes = ['Standard Room', 'Deluxe Suite', 'Presidential Suite', 'Family Room'];
        apartmentTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            bookingOption.appendChild(option);
        });
    }
    
    // Show modal
    document.getElementById('booking-modal').style.display = 'block';
}

// Form Functions
function initializeForms() {
    // Contact form
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Booking form
    bookingForm.addEventListener('submit', handleBookingSubmit);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const contactData = {
        id: Date.now().toString(),
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        createdAt: new Date().toISOString()
    };
    
    // Save to localStorage
    try {
        const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        existingMessages.push(contactData);
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
        
        showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
        contactForm.reset();
    } catch (error) {
        showToast('Error sending message. Please try again.', 'error');
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    
    if (!currentBookingService) return;
    
    const formData = new FormData(bookingForm);
    const bookingData = {
        id: Date.now().toString(),
        serviceType: currentServiceType,
        serviceId: currentBookingService.id,
        serviceName: currentBookingService.title,
        customerName: formData.get('customerName'),
        customerEmail: formData.get('customerEmail'),
        customerPhone: formData.get('customerPhone'),
        bookingOption: formData.get('bookingOption'),
        checkInDate: formData.get('checkInDate'),
        checkOutDate: formData.get('checkOutDate'),
        adults: formData.get('adults'),
        children: formData.get('children'),
        specialRequests: formData.get('specialRequests'),
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    // Save to localStorage
    try {
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        existingBookings.push(bookingData);
        localStorage.setItem('bookings', JSON.stringify(existingBookings));
        
        showToast('Booking submitted successfully! We\'ll contact you soon to confirm.', 'success');
        bookingForm.reset();
        document.getElementById('booking-modal').style.display = 'none';
    } catch (error) {
        showToast('Error submitting booking. Please try again.', 'error');
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    const checkInDate = document.getElementById('check-in-date');
    const checkOutDate = document.getElementById('check-out-date');
    
    if (checkInDate) checkInDate.min = today;
    if (checkOutDate) checkOutDate.min = today;
    
    // Update check-out min date when check-in changes
    if (checkInDate) {
        checkInDate.addEventListener('change', function() {
            if (checkOutDate) {
                checkOutDate.min = this.value;
            }
        });
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Expose global functions for HTML onclick handlers
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.currentSlide = currentSlideFunc;
window.scrollToSection = scrollToSection;
window.openBookingModal = openBookingModal;