# František Michal Sebestyén - Portfolio

A modern, interactive portfolio website showcasing web development projects and photography, built with Next.js and featuring 3D animations and interactive photo galleries.

## About

Personal portfolio website for Feri Sebestyén, a Slovakia-based web developer specializing in interaction-heavy Progressive Web Applications (PWAs) and complex admin interfaces.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) (with App Router)
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com)
- **3D Graphics**: [Three.js](https://threejs.org)
- **Animations**: [React Spring](https://www.react-spring.dev)
- **Icons**: [Phosphor Icons](https://phosphoricons.com)
- **Deployment**: GitHub Pages

## Features

- Interactive 3D card animations with perspective and rotation effects
- Photo gallery with gesture controls (drag, pinch, zoom)
- Responsive design optimized for desktop and mobile
- Static site generation for optimal performance
- Multiple themed pages (Portfolio, Music, Ellen)
- Smooth transitions and animations

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/FrantisekMichalSebestyen/frantisekmichalsebestyen.github.io.git

# Navigate to project directory
cd frantisekmichalsebestyen.github.io

# Install dependencies
npm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-update as you edit files. Start by modifying `src/app/(root)/page.tsx`.

### Building for Production

Build the static site:

```bash
npm run build
```

This generates an optimized production build in the `out` directory.

### Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This command builds the site and pushes the `out` directory to the `gh-pages` branch.

## Project Structure

```
frantisekmichalsebestyen.github.io/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (root)/       # Main portfolio pages
│   │   ├── ellen/        # Ellen photo gallery
│   │   └── music/        # Music page
│   ├── components/       # Reusable React components
│   │   ├── Card.tsx
│   │   ├── Photo.tsx
│   │   └── PortfolioCard.tsx
│   └── globals.css       # Global styles
├── public/               # Static assets (images, icons)
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # TailwindCSS configuration
└── package.json          # Project dependencies
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (local preview)
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Configuration

The project uses static export mode configured in `next.config.ts`:

```typescript
{
  output: 'export',
  assetPrefix: './',
  images: {
    unoptimized: true,
  }
}
```

This configuration ensures compatibility with GitHub Pages hosting.

## License

All rights reserved © František Michal Sebestyén

## Contact

- Website: [frantisekmichalsebestyen.github.io](https://frantisekmichalsebestyen.github.io)
- GitHub: [@FrantisekMichalSebestyen](https://github.com/FrantisekMichalSebestyen)
