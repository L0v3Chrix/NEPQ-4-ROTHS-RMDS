# NEPQ Training Guide - Roth Conversions, RMDs & Infinite Banking

Interactive training application for mastering the NEPQ (Neuro-Emotional Persuasion Questioning) sales methodology, specifically tailored for Roth conversions, RMDs, and infinite banking strategies.

## 🎯 Features

- **Interactive Learning Modules**: 6 stages of NEPQ methodology with detailed questions and psychology
- **Flashcard Practice Mode**: Memorize questions with 3D flip animations
- **Quiz Mode**: Test your understanding with 10 comprehensive questions
- **Mobile Responsive**: Optimized for all device sizes
- **Modern UI**: Beautiful gradients and smooth animations

## 📚 Documentation

All project documentation is located in the `/docs` folder:

- [Project Kickoff](./docs/2025-10-23-project-kickoff.md) - Project goals and scope
- [Technical Specification](./docs/2025-10-23-technical-spec.md) - Architecture and tech stack
- [Component Breakdown](./docs/2025-10-23-component-breakdown.md) - Component details and design system
- [Deployment Plan](./docs/2025-10-23-deployment-plan.md) - Deployment instructions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to site folder
cd site

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
/NEPQ-Roth-RMD/
├── /docs/                  # Comprehensive documentation
├── /site/                  # Next.js application
│   ├── /app/              # Next.js App Router
│   ├── /components/       # React components
│   ├── /lib/              # Data files and utilities
│   ├── /types/            # TypeScript type definitions
│   └── package.json
├── nepq-training-guide.html  # Original HTML file
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Build Tool**: Turbopack

## 🎨 NEPQ Methodology

The training covers six essential stages:

1. **Connection Questions** - Build rapport and trust
2. **Situation Questions** - Understand current state
3. **Problem Awareness** - Help discover gaps
4. **Solution Awareness** - Guide toward possibilities
5. **Consequence Questions** - Amplify urgency
6. **Commitment Questions** - Secure next steps

## 📱 Mobile Optimization

- Touch-friendly interactions
- Responsive design for all screen sizes
- Optimized animations for performance
- Horizontal scroll navigation on mobile

## 🚢 Deployment

### Vercel (Recommended) ⭐

**⚠️ IMPORTANT: This project uses a `/site` subfolder structure.**

#### Option 1: Vercel Dashboard (Easiest)

1. Go to: https://vercel.com/new
2. Import repository: `L0v3Chrix/NEPQ-4-ROTHS-RMDS`
3. **CRITICAL:** Set **Root Directory** to `site` (not blank!)
4. Click Deploy

#### Option 2: Vercel CLI

```bash
# Navigate to site folder first
cd site

# Login and deploy
vercel login
vercel --prod
```

**Why Root Directory Matters:**
- The Next.js app lives in `/site` folder
- Vercel needs to know where to find `package.json`
- Without this setting, you'll get a 404 error

See complete deployment guide: [Vercel 404 Fix](./docs/2025-10-23-vercel-404-fix-complete.md)

### Troubleshooting

If you get a 404 error after deploying:
- Check that Root Directory is set to `site` in Vercel settings
- See detailed fix: `/docs/2025-10-23-vercel-404-fix-complete.md`

### All Documentation

- [Deployment Plan](./docs/2025-10-23-deployment-plan.md) - Original deployment instructions
- [Bug Report & Fixes](./docs/2025-10-23-bug-report-and-fixes.md) - Troubleshooting guide
- [Vercel 404 Fix](./docs/2025-10-23-vercel-404-fix-complete.md) - Complete error resolution

## 📄 License

This project is for educational and training purposes.

## 🤝 Contributing

This is a training application. For questions or improvements, please open an issue.

---

**Built with** ❤️ **by** [Raize The Vibe](https://raizethevibe.com)
