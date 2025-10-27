# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby-based personal training website for "David Entrenador" - a personal trainer in A Coruña. The site is built with TypeScript, React, and Tailwind CSS, featuring a dark theme with red accents (#dc2626 / red-700).

## Development Commands

- `npm run develop` or `npm start` - Start development server at http://localhost:8000
- `npm run build` - Build production site
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache and public directories
- `npm run typecheck` - Run TypeScript type checking without emitting files

## Architecture & Tech Stack

### Core Technologies
- **Gatsby 5.x** - Static site generator with TypeScript support
- **React 18** - UI framework
- **TypeScript** - Type-safe development (strict mode enabled)
- **Tailwind CSS** - Utility-first styling with PostCSS
- **Gatsby Image** - Optimized image loading with gatsby-plugin-image

### Key Plugins
- `gatsby-plugin-postcss` - PostCSS/Tailwind integration
- `gatsby-omni-font-loader` - Google Fonts loading (Zen Dots font)
- `gatsby-plugin-image` / `gatsby-plugin-sharp` - Image optimization
- `gatsby-plugin-sitemap` - SEO sitemap generation
- `gatsby-source-filesystem` - File system sourcing from src/images/
- `gatsby-plugin-netlify` - Netlify deployment optimization

### Project Structure

```
src/
├── components/
│   ├── Layout.tsx - Wraps all pages with Header/Footer, applies dark theme
│   ├── Header.tsx - Sticky navigation with mobile menu
│   ├── Footer.tsx - Site footer
│   └── TestimonialsSection.tsx - Testimonials component
├── pages/
│   ├── index.tsx - Home page with hero sections, animations
│   ├── services.tsx - Training services page
│   ├── pricing.tsx - Pricing/tarifas page
│   ├── about.tsx - About/sobre mí page
│   ├── contact.tsx - Contact form page
│   └── 404.tsx - Custom 404 page
└── images/ - Static images (logo.png, david.png, portada.jpg, dumbell.png, dumbells.png)
```

## Design System & Styling Guidelines

The site follows strict design rules defined in `.cursorrules`:

### Color Palette (Dark Theme)
- **Background**: `bg-black` for main sections
- **Text**: `text-white` (primary), `text-gray-300` (secondary), `text-gray-400` (muted)
- **Brand Color**: `text-red-700` (#dc2626) for accents, highlights, links
- **Card Backgrounds**: `bg-gray-900`
- **Borders**: `border-gray-800`

### Button Styles
- **Primary**: `bg-red-700 text-white hover:bg-red-800`
- **Secondary**: `bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-700`
- **Effects**: Always include `transition-colors transform hover:scale-105 duration-200`

### Layout Patterns
- Container: `container mx-auto` for content width
- Section padding: `py-16 px-8`
- Vertical spacing: `mb-4`, `mb-8`, `mb-12`, `mb-16`
- Animations: `transition-all duration-200` or `transition-colors`

### Component Patterns
1. **Layout Component** (src/components/Layout.tsx:9): Wraps all pages with `bg-black text-white` theme, includes Header and Footer
2. **Header Component** (src/components/Header.tsx:17): Sticky header with mobile hamburger menu, animated menu transitions
3. **Home Page** (src/pages/index.tsx:8): Features sequential animations, scroll indicators, hero sections with diagonal layouts

## Important Development Notes

### TypeScript Configuration
- Strict mode enabled (tsconfig.json:77)
- JSON module imports allowed (tsconfig.json:36)
- Target: ESNext with DOM/ESNext libs
- Module resolution: Node

### Image Handling
- Use `StaticImage` from `gatsby-plugin-image` for static images
- Images sourced from `./src/images/`
- All images should be optimized through Gatsby's Sharp pipeline

### Styling Approach
- **ALWAYS** follow the dark theme color specifications from `.cursorrules`
- Use Tailwind utility classes exclusively
- Maintain red (#dc2626) as primary brand color throughout
- Ensure sufficient contrast for accessibility
- All new components must match existing dark theme patterns

### Navigation Structure
The site has 5 main pages:
1. Home (/) - Hero, testimonials, features, planning section
2. Services (/services) - Training service details
3. Pricing (/pricing) - Tarifas information
4. About (/about) - Personal trainer bio
5. Contact (/contact) - Contact form

### Mobile Responsiveness
- All components use responsive Tailwind breakpoints (sm:, md:, lg:)
- Header has mobile menu with hamburger icon
- Text sizing scales: `text-base sm:text-lg lg:text-xl`
- Layout adjusts: `flex-col sm:flex-row`

## Testing & Quality

- Playwright installed for E2E testing (no test files currently present)
- TypeScript strict mode enforced - run `npm run typecheck` before commits
- No formal test runner configured yet

## Deployment

- Configured for Netlify deployment via `gatsby-plugin-netlify`
- Site metadata: `siteUrl: https://www.yourdomain.tld` (update for production)
- GraphQL type generation enabled (gatsby-config.ts:11)

## Contact Information

WhatsApp floating button configured for: +34 660 10 32 10
