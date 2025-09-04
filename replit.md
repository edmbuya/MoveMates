# Overview

Move Mates is a static tourism website for a Kenyan safari and accommodation booking company. The site showcases luxury safari tours, accommodations, and vehicle hire services with a focus on Kenya's wildlife destinations like Maasai Mara and Mount Kenya. The website serves as a marketing and information platform for potential customers to learn about services and contact the company for bookings.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Static HTML Website**: Multi-page static site with traditional HTML structure
- **Responsive Design**: Mobile-first CSS approach with hamburger navigation for smaller screens
- **Client-Side JavaScript**: Pure vanilla JavaScript for interactive features without frameworks
- **CSS Custom Properties**: CSS variables for consistent theming and color management
- **Component-Based Styling**: Modular CSS organization with reusable classes

## Content Management
- **Data-Driven Content**: Tours and accommodations data stored in JavaScript objects within script.js
- **Dynamic Rendering**: Client-side JavaScript populates tour listings and accommodation cards from data arrays
- **Image Integration**: External image hosting via Unsplash CDN for high-quality photography
- **SEO Optimization**: Proper meta tags, Open Graph tags, and semantic HTML structure

## Navigation and UX
- **Single Page Application Feel**: Smooth scrolling navigation between sections on the main page
- **Multi-Page Structure**: Separate pages for legal content (privacy, terms, cookies) and about information
- **Interactive Elements**: Carousel functionality, mobile hamburger menu, and scroll-based navigation
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features

## Design System
- **Color Palette**: Earth-tone color scheme using CSS custom properties for safari/nature theme
- **Typography**: System font stack for performance and consistency across devices
- **Visual Hierarchy**: Clear content structure with proper heading levels and spacing
- **Accessibility**: Semantic HTML structure and proper contrast ratios

# External Dependencies

## CDN Resources
- **Font Awesome 6.4.0**: Icon library for UI elements and visual enhancements
- **Unsplash Images**: External image hosting for high-quality safari and tourism photography

## Third-Party Services
- **Image CDN**: Unsplash API for optimized image delivery with query parameters for sizing and quality
- **No Analytics**: Currently no tracking or analytics services integrated
- **No Payment Processing**: Contact-based booking system without integrated payment gateways

## Browser Compatibility
- **Modern Browser Support**: CSS Grid, Flexbox, and CSS Custom Properties
- **Responsive Design**: Viewport meta tags and responsive CSS for mobile compatibility
- **Progressive Enhancement**: Core functionality without JavaScript dependencies