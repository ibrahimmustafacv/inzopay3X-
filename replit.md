# Overview

Inzopay is a full-stack web application providing electronic payment services with an ancient Egyptian-themed design. The platform allows businesses to process digital payments, manage subscriptions, and sell digital products online. It features a modern React frontend with shadcn/ui components, Express.js backend, and PostgreSQL database integration through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in client-side rendering (CSR) mode
- **UI Framework**: shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom Egyptian-themed design tokens (royal-navy, pharaoh-gold, sand colors)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for development and production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with `/api` prefix routing
- **Development**: Hot reload with Vite middleware integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) for development

## Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless driver
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Environment-based DATABASE_URL configuration

## Project Structure
- **Monorepo**: Single repository with client, server, and shared code
- **Client**: Located in `/client` directory with Vite configuration
- **Server**: Located in `/server` directory with Express setup
- **Shared**: Common TypeScript types and database schema in `/shared`
- **Path Aliases**: TypeScript path mapping for clean imports (@, @shared, @assets)

## Development Workflow
- **Development**: `npm run dev` starts Express server with Vite middleware
- **Database**: `npm run db:push` applies schema changes
- **Build**: Vite builds client, esbuild bundles server
- **Type Safety**: Shared TypeScript configuration across all layers

## Authentication & Data Models
- **User Schema**: Basic user model with id, username, and password fields
- **Validation**: Zod schemas for runtime type validation
- **Storage**: Pluggable storage interface supporting different backends

# External Dependencies

## UI & Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (specifically simple-icons for social media)

## State & Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with @hookform/resolvers for validation
- **Wouter**: Lightweight routing library

## Database & Backend
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL database provider
- **Express.js**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store (prepared for session management)

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking across the entire stack
- **ESBuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Tailwind CSS integration

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx & class-variance-authority**: Conditional CSS class management
- **nanoid**: Secure URL-safe unique string generator