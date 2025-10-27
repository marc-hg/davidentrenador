# David Entrenador - Personal Training Website

A modern, responsive website for David Entrenador, a personal trainer based in A Coruña. Built with Gatsby, React, TypeScript, and Tailwind CSS.

**Live site:** [davidentrenador.es](https://davidentrenador.es)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Development Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run develop
   ```

   Your site will be running at `http://localhost:8000`

3. **Start coding!**
   - Edit pages in `src/pages/`
   - Edit components in `src/components/`
   - Changes will hot-reload automatically

## 📦 Available Scripts

- `npm start` or `npm run develop` - Start development server
- `npm run build` - Build production site
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache and build artifacts
- `npm run typecheck` - Run TypeScript type checking

## 🏗️ Tech Stack

- **Gatsby 5** - Static site generator
- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Gatsby Image** - Optimized image loading

## 📁 Project Structure

```
src/
├── components/      # Reusable React components
│   ├── Layout.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── TestimonialsSection.tsx
├── pages/          # Page components (auto-routed)
│   ├── index.tsx
│   ├── services.tsx
│   ├── pricing.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   └── 404.tsx
└── images/         # Static images
```

## 🎨 Design System

The site follows a dark theme with red accents:
- Background: Black (#000000)
- Primary text: White (#FFFFFF)
- Brand color: Red (#dc2626 / red-700)
- See `.cursorrules` for complete design specifications

## 🚢 Deployment

This site is deployed on **Cloudflare Pages** with automatic deployments configured.

- **Live URL:** [davidentrenador.es](https://davidentrenador.es)
- **Auto-deploy:** Push to `main` branch triggers automatic deployment
- **Cloudflare Account:** davidentrenador1982@gmail.com

The site includes `gatsby-plugin-netlify` for optimization headers that work with Cloudflare Pages.

## 📝 Notes

- All components use TypeScript strict mode
- Design guidelines are enforced in `.cursorrules`
- Images are optimized through Gatsby's Sharp pipeline
- See `CLAUDE.md` for detailed development guidelines
