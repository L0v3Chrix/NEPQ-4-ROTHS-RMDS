# Technical Specification - NEPQ Training Guide

**Date:** October 23, 2025
**Project:** NEPQ Roth RMD Training Guide
**Version:** 1.0

---

## Technology Stack

### Core Framework
```yaml
Framework: Next.js 15.0
Runtime: React 18
Language: TypeScript 5.x (strict mode)
Build Tool: Turbopack (Next.js default)
Package Manager: npm
```

### Styling & UI
```yaml
CSS Framework: Tailwind CSS 3.x
Animation Library: Framer Motion 11.x
Component Style: CSS Modules + Tailwind
Font Loading: next/font for system fonts
```

### Development Tools
```yaml
Linting: ESLint (Next.js config)
Type Checking: TypeScript strict mode
Code Formatting: Prettier (optional)
Git Hooks: None (simple project)
```

---

## Project Architecture

### Directory Structure
```
/NEPQ-Roth-RMD/
├── /docs/                          # Timestamped documentation
├── /site/                          # Next.js application
│   ├── /app/
│   │   ├── layout.tsx             # Root layout with metadata
│   │   ├── page.tsx               # Main training page
│   │   ├── globals.css            # Global styles + Tailwind
│   │   └── favicon.ico
│   ├── /components/
│   │   ├── /quiz/
│   │   │   ├── QuizSection.tsx    # Quiz container
│   │   │   ├── QuizQuestion.tsx   # Individual question
│   │   │   └── QuizResults.tsx    # Results display
│   │   ├── /flashcards/
│   │   │   ├── FlashcardSection.tsx
│   │   │   ├── Flashcard.tsx
│   │   │   └── FlashcardControls.tsx
│   │   ├── /stages/
│   │   │   ├── StageSection.tsx   # Stage container
│   │   │   ├── QuestionCard.tsx   # Question with psychology
│   │   │   └── TransitionBox.tsx  # Stage transitions
│   │   ├── Header.tsx             # Page header
│   │   ├── Navigation.tsx         # Tab navigation
│   │   └── ProgressBar.tsx        # Progress indicator
│   ├── /lib/
│   │   ├── flashcardData.ts       # Flashcard content
│   │   ├── quizData.ts            # Quiz questions
│   │   └── stageData.ts           # NEPQ stage content
│   ├── /types/
│   │   └── index.ts               # TypeScript interfaces
│   ├── next.config.ts             # Next.js configuration
│   ├── tailwind.config.ts         # Tailwind configuration
│   ├── tsconfig.json              # TypeScript configuration
│   └── package.json               # Dependencies
├── README.md                       # Project overview
└── .gitignore                      # Git ignore rules
```

---

## Data Architecture

### TypeScript Interfaces

```typescript
// Stage Data Structure
interface Stage {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  transition?: Transition;
}

interface Question {
  id: string;
  number: number;
  text: string;
  psychology: Psychology;
}

interface Psychology {
  title: string;
  explanation: string;
  keyPrinciple: string;
}

interface Transition {
  text: string;
  psychology: string;
}

// Flashcard Structure
interface Flashcard {
  id: string;
  stage: string;
  question: string;
  psychology: string;
}

// Quiz Structure
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
```

---

## Component Architecture

### State Management Strategy

**No external state libraries needed** - Using React hooks only:

```typescript
// Navigation state
const [activeSection, setActiveSection] = useState('overview')

// Flashcard state
const [currentCard, setCurrentCard] = useState(0)
const [isFlipped, setIsFlipped] = useState(false)

// Quiz state
const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
const [showResults, setShowResults] = useState(false)
```

### Component Hierarchy

```
App (page.tsx)
├── Header
├── Navigation
│   └── Tab buttons (8 sections)
├── StageSection (Overview)
├── StageSection (Stages 1-6)
│   ├── StageHeader
│   ├── QuestionCard (multiple)
│   │   ├── QuestionText
│   │   ├── PsychologyToggle
│   │   └── PsychologyContent
│   └── TransitionBox
├── FlashcardSection
│   ├── ProgressBar
│   ├── Flashcard
│   │   ├── Front
│   │   └── Back
│   └── FlashcardControls
└── QuizSection
    ├── ScoreDisplay
    ├── QuizQuestion
    │   ├── QuestionText
    │   ├── Options
    │   └── Feedback
    └── QuizResults
```

---

## Styling Strategy

### Tailwind Configuration

**Color Palette:**
```typescript
// tailwind.config.ts
colors: {
  primary: {
    purple: '#667eea',
    violet: '#764ba2',
  },
  secondary: {
    pink: '#f093fb',
    coral: '#f5576c',
  },
  dark: {
    800: '#2c3e50',
    700: '#34495e',
  },
  success: '#28a745',
  error: '#dc3545',
}
```

**Custom Animations:**
```css
/* Fade in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Slide down animation */
@keyframes slideDown {
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 500px; }
}

/* Card flip animation (via Framer Motion) */
```

---

## Performance Optimizations

### Build Optimizations
1. **Static Export** - No server required (can use GitHub Pages)
2. **Code Splitting** - Lazy load quiz and flashcard sections
3. **Font Optimization** - Use next/font for system fonts
4. **CSS Purging** - Tailwind automatically removes unused styles
5. **Image Optimization** - next/image if images added later

### Runtime Optimizations
1. **Memoization** - useMemo for data filtering
2. **Callback Optimization** - useCallback for event handlers
3. **Lazy Initialization** - useState with function initialization
4. **Debouncing** - For rapid user interactions if needed

---

## Mobile Responsiveness

### Breakpoints (Tailwind defaults)
```
sm: 640px  - Small phones
md: 768px  - Tablets
lg: 1024px - Laptops
xl: 1280px - Desktops
```

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets (min 44x44px)
- Optimized animations (reduce motion on preference)
- Horizontal scroll on tab navigation if needed

---

## Deployment Configuration

### Vercel Deployment (Recommended)
```json
// vercel.json (optional)
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

### GitHub Pages Alternative
```typescript
// next.config.ts
const nextConfig = {
  output: 'export',  // Static HTML export
  basePath: '/NEPQ-4-ROTHS-RMDS',  // Repository name
  images: {
    unoptimized: true  // Required for static export
  }
}
```

---

## Environment Variables

**None required** - This is a static training application with no API integrations.

Future optional additions:
- `NEXT_PUBLIC_GA_ID` - Google Analytics (if analytics added)
- `NEXT_PUBLIC_SITE_URL` - For SEO metadata

---

## Browser Support

**Target Browsers:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

**Polyfills:** None needed (modern browsers only)

---

## Security Considerations

**No security concerns** - Static content only:
- No user data collection
- No API endpoints
- No authentication
- No cookies or localStorage (except quiz progress if added)

---

## Testing Strategy

### Manual Testing Checklist
- ✅ All navigation tabs work
- ✅ Psychology toggles expand/collapse
- ✅ Flashcards flip and navigate
- ✅ Quiz scoring accurate
- ✅ Mobile responsive (test on real devices)
- ✅ Animations smooth (60fps)
- ✅ No console errors
- ✅ TypeScript compiles without errors

### Performance Testing
- Lighthouse CI score 90+ on all metrics
- No layout shifts (CLS < 0.1)
- Fast initial load (FCP < 2s)

---

## Future Enhancements (Out of Scope)

Potential additions for future iterations:
1. **Progress Persistence** - Save quiz/flashcard progress to localStorage
2. **User Accounts** - Track learning progress over time
3. **Analytics** - Track which stages users spend most time on
4. **Print Stylesheet** - Printable cheat sheets for each stage
5. **Spaced Repetition** - Flashcard algorithm for better retention
6. **Video Integration** - Add video explanations for each stage
7. **Multi-language Support** - Translate to Spanish, etc.

---

## Technical Decisions Log

| Decision | Rationale |
|----------|-----------|
| Next.js 15 App Router | Modern approach, better performance, future-proof |
| TypeScript Strict Mode | Catch errors early, better IDE support |
| Tailwind CSS | Rapid styling, purges unused CSS, mobile-first |
| Framer Motion | Smooth animations, easy to implement |
| No State Library | Simple state, React hooks sufficient |
| Static Export | No server needed, cheaper hosting |
| Vercel Deployment | Zero-config Next.js deployment |

---

**Last Updated:** October 23, 2025
**Status:** ✅ Specification Complete
