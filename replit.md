# Heritage Hub Nepal - Application Documentation

## Overview

Heritage Hub Nepal is a cultural preservation and education platform showcasing Newari heritage through interactive storytelling. The application features two beloved Newari characters, Mincha and Bhincha, who serve as cultural ambassadors and storytellers. Built as a modern full-stack web application, it provides an engaging way to explore traditional Newari culture, stories, and heritage items.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Newari color palette
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth interactions
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety
- **Development**: TSX for hot reloading during development
- **Middleware**: Express middleware for JSON parsing, URL encoding, and logging

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with type-safe database operations
- **Connection**: Neon Database serverless adapter for PostgreSQL
- **Development Storage**: In-memory storage implementation for development
- **Schema Management**: Drizzle migrations with schema versioning

## Key Components

### Database Schema
The application defines four main entities:
- **Users**: Authentication and user management
- **Characters**: Mincha and Bhincha character definitions
- **Stories**: Cultural stories with narrator assignments
- **Heritage Items**: Cultural artifacts and traditions categorized by type

### Frontend Pages
- **Home**: Landing page with character introductions and featured content
- **Character Pages**: Individual pages for Mincha and Bhincha with their stories
- **Heritage**: Interactive exploration of Newari cultural items
- **Stories**: Collection of cultural tales with filtering capabilities

### Character System
Two main characters serve as cultural guides:
- **Mincha**: Wise Guardian with compassionate traits
- **Bhincha**: Kind Storyteller bringing joy through narratives
- Custom SVG illustrations for each character
- Character-specific story collections

### Content Categories
- **Stories**: Traditional tales with narrator attribution and reading time
- **Heritage Items**: Cultural artifacts organized by category (Architecture, Festivals, Cuisine, Arts, Religion, Music)
- **Educational Materials**: Downloadable resources for cultural education

## Data Flow

### Frontend Data Management
1. Static data stored in TypeScript files for immediate availability
2. TanStack Query handles API requests and caching
3. Wouter manages client-side navigation
4. Framer Motion provides smooth page transitions

### API Structure
1. Express server serves both API endpoints and static frontend
2. Routes prefixed with `/api` for backend functionality
3. Storage interface abstracts database operations
4. Development mode uses in-memory storage, production uses PostgreSQL

### Content Delivery
1. Vite handles asset bundling and optimization
2. Static files served from Express in production
3. Hot module replacement in development
4. SVG characters rendered as React components

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundling for production
- **PostCSS**: CSS processing with Autoprefixer

### Database and Backend
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL
- **Zod**: Schema validation
- **Express**: Web framework

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` using Vite
2. Backend bundles to `dist/index.js` using ESBuild
3. Shared schema and types maintained across environments
4. Environment variables manage database connections

### Development Workflow
1. `npm run dev` starts both frontend and backend in development mode
2. Vite middleware serves frontend with hot reloading
3. TSX provides backend hot reloading
4. Database migrations managed through Drizzle Kit

### Production Deployment
1. `npm run build` creates optimized bundles
2. `npm start` runs the production server
3. Express serves static files and API routes
4. Database schema pushed using `npm run db:push`

### Environment Configuration
- Development uses local storage and development database
- Production connects to PostgreSQL via DATABASE_URL
- Replit-specific plugins for development environment
- CORS and security headers configured for production