# Move Mates - Safari Tours & Accommodations Platform

## Overview

Move Mates is a full-stack web application for booking safari tours and luxury accommodations in Kenya. The platform showcases various tour packages (private tours, group tours, vehicle hire) and premium accommodations with detailed information, pricing, and booking capabilities. Built with a modern tech stack, it provides a seamless experience for travelers looking to explore Kenya's wildlife destinations like Maasai Mara, Amboseli National Park, and Mount Kenya.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a warm beige color scheme designed for safari/tourism aesthetic
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development
- **Architecture Pattern**: RESTful API with clean separation of concerns
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Middleware**: Custom logging middleware for API request tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Development**: Hot module replacement and dev server integration with Vite

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema**: Four main entities - Tours, Accommodations, Bookings, and Contact Messages
- **Validation**: Drizzle-Zod integration for runtime type validation
- **Migrations**: Automated database migrations with Drizzle Kit

### Key Features
- **Tours Management**: Support for different tour categories (private, group, vehicle hire)
- **Accommodations**: Luxury vacation rentals with detailed amenities and pricing
- **Booking System**: Comprehensive booking flow with customer information capture
- **Contact System**: Contact form for customer inquiries
- **Responsive Design**: Mobile-first approach with desktop optimization

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Styling & UI**: Tailwind CSS, Radix UI components, Lucide React icons
- **Validation**: Zod for schema validation, Hookform Resolvers for form validation
- **Utility Libraries**: clsx and tailwind-merge for conditional styling

### Backend Dependencies
- **Server**: Express.js with TypeScript support via tsx
- **Database**: Neon Database Serverless driver for PostgreSQL
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Utility Libraries**: date-fns for date manipulation, nanoid for ID generation

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript compiler for type checking
- **Development**: esbuild for server bundling, PostCSS for CSS processing
- **Replit Integration**: Specialized Replit plugins for development environment

### Database Configuration
- PostgreSQL database with connection via environment variable `DATABASE_URL`
- Drizzle configured for PostgreSQL dialect with automatic migrations
- Schema located in `shared/schema.ts` for code sharing between frontend and backend