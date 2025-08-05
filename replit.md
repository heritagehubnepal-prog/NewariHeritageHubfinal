# Heritage Hub Nepal - Application Documentation

## Overview

Heritage Hub Nepal is a cultural and eco-friendly initiative aimed at preserving Nepal's heritage while promoting sustainability, zero-waste practices, and community engagement. Starting in Hadigaun and expanding to culturally significant regions (Patan, Bhaktapur, Pokhara, Lumbini), the hub features engaging activities like farmers markets, cultural performances, workshops, storytelling sessions, and refreshment zones.

The platform showcases two beloved mascot characters who represent the beautiful union of tradition and modernity:

**Mincha** - An enthusiastic young man who married into Newari culture through his beloved wife Bhincha. Though not originally from the Newari community, he is deeply fascinated by the rich cultural heritage and actively learning traditions, stories, and customs. His passion for eco-friendly practices drives him to discover connections between ancient myths and sustainable living, making him a bridge between modern environmental consciousness and traditional wisdom.

**Bhincha** - Traditional Newari cultural guardian representing authentic heritage in her beautiful traditional attire - black Haku Patasi sari with red borders, golden threaded patterns, and ceremonial jewelry. As Mincha's wife, she lovingly shares her cultural knowledge while guiding cultural performances, storytelling sessions, and heritage workshops across all Heritage Hub locations.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 20, 2025)

- **Upgraded to Best Animation Technologies**: Implemented GSAP, Lottie, and advanced visual effects for premium user experience
- **GSAP Advanced Animations**: Added scroll-triggered animations, morphing backgrounds, particle systems, and character interactions
- **Lottie Character System**: Created interactive character animations with fallback SVG support and enhanced visual feedback
- **Enhanced Hero Section**: Built cinematic hero with animated text typing, floating characters, and particle backgrounds
- **Particle & Morphing Effects**: Added dynamic particle systems and morphing background elements for immersive experience
- **Advanced Character Showcase**: Created magical character interactions with sparkle effects and floating animations
- **Visual Performance**: Optimized animations for smooth 60fps performance across all devices
- **Admin System**: Maintained complete admin panel with authentication and content management capabilities
- **Admin Platform Guide**: Created comprehensive guide showing credentials, access methods, and content management workflows
- Updated Mincha's character background: He is not originally from the Newari community but married into it through his beloved wife Bhincha
- Refined character relationship: Mincha is a cultural learner who is fascinated by Newari stories and traditions
- Enhanced character dynamic: Mincha brings eco-friendly perspective while respectfully learning from Bhincha's cultural heritage
- Updated character descriptions to reflect this beautiful union of tradition and modernity through their marriage
- Maintained Mincha's passion for connecting ancient myths with sustainable practices while emphasizing his role as a cultural bridge-builder

## Previous Changes (January 17, 2025)

- Enhanced all content with authentic Newari cultural research from comprehensive academic document
- Updated heritage items with 12 specific cultural sites including Nyatapola Temple, Changu Narayan, Uma-Maheswara sculpture, and Guru Padmasambhava's sacred caves
- Replaced stories with 7 authentic legends including Bisket Jatra's cursed princess, Phewa Lake formation, and King Manadeva's sacred pillar
- Enhanced cultural quiz with 12 research-based questions covering Licchavi dynasty, temple architecture, festivals, and sustainability practices
- Updated Memory Match game with 20 cultural/sustainability pairs based on specific heritage elements and eco-practices
- Improved Story Builder with 10 prompts featuring authentic locations and cultural elements from Hadigaun, Patan, Bhaktapur, Pokhara, and Lumbini
- Updated homepage descriptions to reference specific temples, lakes, and cultural practices from the research
- Integrated academic content about King Bhupatindra Malla, Siddhi Narsingh Malla, Nagas, Garudas, and Vajrayana Buddhism
- **Redesigned Bhincha character with authentic traditional Newari dress** featuring black Haku Patasi sari with red borders, golden patterns, traditional Cholo blouse, Surwal pants, heavy gold Tilhari necklace, Pote glass bead jewelry, and ceremonial accessories based on provided reference images

## Previous Changes (January 15, 2025)

- Completely redesigned Heritage Hub Nepal platform based on comprehensive business requirements
- Enhanced UI/UX with earthy sustainability colors (eco-green, bamboo-yellow, sage-green, earth-orange)
- Added comprehensive Heritage Hub Services section showcasing all revenue streams:
  - Eco-Products & Merchandise (bamboo crafts, microgreens kits, character merchandise)
  - Training & Workshops (urban farming, zero-waste practices, cultural preservation)
  - Event Hosting (weddings, corporate retreats, cultural festivals)
  - Farmers Market Stalls (NPR 500-1,000/day vendor spaces)
  - Heritage Refreshments (eco-friendly snacks and traditional drinks)
  - Digital Content (recorded workshops and storytelling sessions)
- Implemented regional expansion roadmap (Hadigaun → Patan → Bhaktapur → Pokhara → Lumbini)
- Created Character Integration section showing marketing, education, and product design applications
- Updated character descriptions to reflect Heritage Hub Nepal business model and versatility
- Enhanced character designs with eco-friendly and traditional elements reflecting their adaptability
- Added character collaboration showcase demonstrating harmony between tradition and modernity
- Improved responsive design with modern animations and cultural patterns
- Integrated PostgreSQL database with Drizzle ORM replacing in-memory storage
- Database contains characters, stories, heritage items, and user tables with sample data
- Characters, heritage items, and stories now populated with authentic Newari cultural content
- Implemented comprehensive educational game features with interactive character animations
- Added Cultural Quiz game with 5 difficulty levels and character narration
- Created Memory Match game with cultural/sustainability pairs and performance tracking
- Built Story Builder game with guided prompts and character feedback
- Enhanced character SVG components with interactive animations and click handlers
- Added Games page with full navigation integration and character encouragement

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
- **Production Storage**: PostgreSQL database with authenticated content
- **Schema Management**: Drizzle migrations with schema versioning and sample data seeding

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
- **Games**: Educational gaming platform with three interactive learning experiences

### Character System
Two main characters serve as cultural guides:
- **Mincha**: Modern eco-friendly ambassador with interactive animations
- **Bhincha**: Traditional cultural guardian with click interactions
- Custom SVG illustrations with hover effects and animations
- Character-specific story collections and game narration
- Interactive character components with props for game integration

### Content Categories
- **Stories**: Traditional tales with narrator attribution and reading time
- **Heritage Items**: Cultural artifacts organized by category (Architecture, Festivals, Cuisine, Arts, Religion, Music)
- **Educational Materials**: Downloadable resources for cultural education
- **Interactive Games**: Three educational game types with difficulty progression and performance tracking

### Educational Game Features
- **Cultural Quiz**: Knowledge testing with character narration and explanations
- **Memory Match**: Concentration game with cultural/sustainability theme pairs
- **Story Builder**: Creative writing with guided prompts and character feedback
- Performance tracking with scores, streaks, and completion certificates
- Character-guided learning with personalized reactions and encouragement

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