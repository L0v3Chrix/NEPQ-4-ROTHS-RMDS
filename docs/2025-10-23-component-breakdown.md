# Component Breakdown & Design System

**Date:** October 23, 2025
**Project:** NEPQ Training Guide
**Purpose:** Detailed component architecture and design specifications

---

## Design System

### Color Palette

```typescript
// Primary Colors
const colors = {
  // Brand gradient
  primary: {
    purple: '#667eea',
    violet: '#764ba2',
  },

  // Secondary gradient
  secondary: {
    pink: '#f093fb',
    coral: '#f5576c',
  },

  // Dark tones
  dark: {
    900: '#2c3e50',
    800: '#34495e',
    700: '#495057',
  },

  // Neutral
  gray: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
  },

  // Status
  success: '#28a745',
  successLight: '#d4edda',
  successDark: '#155724',
  error: '#dc3545',
  errorLight: '#f8d7da',
  errorDark: '#721c24',
}
```

### Typography

```typescript
// Font Family (System fonts via next/font)
const fonts = {
  sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
}

// Font Sizes
const textSizes = {
  'header-lg': '2em',      // Main header
  'header-md': '1.8em',    // Stage headers
  'body-lg': '1.2em',      // Large body
  'body': '1em',           // Standard body
  'body-sm': '0.95em',     // Small body
}

// Font Weights
const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}
```

### Spacing

```typescript
// Consistent spacing scale
const spacing = {
  xs: '10px',
  sm: '15px',
  md: '20px',
  lg: '25px',
  xl: '30px',
  '2xl': '40px',
}
```

### Border Radius

```typescript
const borderRadius = {
  sm: '5px',
  md: '8px',
  lg: '10px',
  xl: '15px',
  full: '50%',
}
```

### Shadows

```typescript
const shadows = {
  card: '0 5px 15px rgba(102, 126, 234, 0.2)',
  container: '0 20px 60px rgba(0, 0, 0, 0.3)',
  button: '0 5px 15px rgba(102, 126, 234, 0.4)',
}
```

---

## Component Specifications

### 1. Header Component

**File:** `components/Header.tsx`

**Purpose:** Display main page title and description

**Props:** None (static content)

**Structure:**
```tsx
<div className="header">
  <h1>🎯 NEPQ Training Guide</h1>
  <p>Roth Conversions, RMDs & Infinite Banking</p>
</div>
```

**Styling:**
- Background: Linear gradient (dark gray tones)
- Text: White, centered
- Padding: 30px
- Responsive: Reduce font size on mobile

---

### 2. Navigation Component

**File:** `components/Navigation.tsx`

**Purpose:** Tab navigation for 8 sections

**Props:**
```typescript
interface NavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}
```

**Sections:**
1. Overview
2. Stage 1: Connection
3. Stage 2: Situation
4. Stage 3: Problem
5. Stage 4: Solution
6. Stage 5: Consequence
7. Stage 6: Commitment
8. 🎴 Practice
9. 📝 Quiz

**Features:**
- Horizontal scroll on mobile
- Active tab indicator (bottom border)
- Smooth hover effects
- Click to change active section

**Styling:**
- Background: Light gray
- Active tab: Purple text + purple bottom border
- Hover: Slightly darker background

---

### 3. StageSection Component

**File:** `components/stages/StageSection.tsx`

**Purpose:** Container for each NEPQ stage

**Props:**
```typescript
interface StageSectionProps {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  transition?: Transition;
  isActive: boolean;
}
```

**Structure:**
```tsx
<div className={isActive ? 'stage-section active' : 'stage-section'}>
  <StageHeader title={title} description={description} />
  {questions.map(q => <QuestionCard key={q.id} question={q} />)}
  {transition && <TransitionBox transition={transition} />}
</div>
```

**Animation:**
- Fade in when becoming active
- 300ms transition duration

---

### 4. QuestionCard Component

**File:** `components/stages/QuestionCard.tsx`

**Purpose:** Display question with expandable psychology section

**Props:**
```typescript
interface QuestionCardProps {
  question: Question;
}

interface Question {
  number: number;
  text: string;
  psychology: {
    title: string;
    explanation: string;
    keyPrinciple: string;
  };
}
```

**State:**
```typescript
const [isExpanded, setIsExpanded] = useState(false)
```

**Structure:**
```tsx
<div className="question-card">
  <div className="question-text">
    <span className="question-icon">Q{number}</span>
    <span>{text}</span>
  </div>

  <button onClick={() => setIsExpanded(!isExpanded)}>
    {isExpanded ? '🔼 Hide Psychology' : '💡 Show Psychology'}
  </button>

  {isExpanded && (
    <div className="psychology-content">
      <div className="psychology-title">{psychology.title}</div>
      <div className="psychology-text">
        {psychology.explanation}
        <br /><br />
        <strong>Key Principle:</strong> {psychology.keyPrinciple}
      </div>
    </div>
  )}
</div>
```

**Interactions:**
- Hover: Shadow + slight translate
- Click button: Toggle psychology content
- Smooth slide-down animation

---

### 5. FlashcardSection Component

**File:** `components/flashcards/FlashcardSection.tsx`

**Purpose:** Interactive flashcard practice mode

**State:**
```typescript
const [currentCard, setCurrentCard] = useState(0)
const [isFlipped, setIsFlipped] = useState(false)
```

**Structure:**
```tsx
<div className="flashcard-section">
  <ProgressBar current={currentCard + 1} total={flashcards.length} />

  <Flashcard
    flashcard={flashcards[currentCard]}
    isFlipped={isFlipped}
    onFlip={() => setIsFlipped(!isFlipped)}
  />

  <FlashcardControls
    onPrevious={handlePrevious}
    onFlip={() => setIsFlipped(!isFlipped)}
    onNext={handleNext}
    canGoPrevious={currentCard > 0}
    canGoNext={currentCard < flashcards.length - 1}
  />
</div>
```

---

### 6. Flashcard Component

**File:** `components/flashcards/Flashcard.tsx`

**Purpose:** Individual flashcard with flip animation

**Props:**
```typescript
interface FlashcardProps {
  flashcard: {
    stage: string;
    question: string;
    psychology: string;
  };
  isFlipped: boolean;
  onFlip: () => void;
}
```

**Animation:** 3D flip effect using CSS transform and Framer Motion

**Structure:**
```tsx
<motion.div
  className="flashcard-container"
  onClick={onFlip}
  animate={{ rotateY: isFlipped ? 180 : 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="flashcard-front">
    <div className="flashcard-text">
      {flashcard.stage}: {flashcard.question}
    </div>
  </div>

  <div className="flashcard-back">
    <div className="flashcard-text">
      {flashcard.psychology}
    </div>
  </div>
</motion.div>
```

---

### 7. QuizSection Component

**File:** `components/quiz/QuizSection.tsx`

**Purpose:** Interactive quiz with scoring

**State:**
```typescript
const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
const [hasAnswered, setHasAnswered] = useState(false)
const [showResults, setShowResults] = useState(false)
```

**Structure:**
```tsx
<div className="quiz-section">
  {!showResults ? (
    <>
      <ScoreDisplay
        score={score}
        total={quizQuestions.length}
        current={currentQuestion + 1}
      />

      <QuizQuestion
        question={quizQuestions[currentQuestion]}
        selectedAnswer={selectedAnswer}
        hasAnswered={hasAnswered}
        onAnswerSelect={handleAnswerSelect}
      />

      <QuizControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoPrevious={currentQuestion > 0}
        hasAnswered={hasAnswered}
      />
    </>
  ) : (
    <QuizResults
      score={score}
      total={quizQuestions.length}
      onRestart={handleRestart}
    />
  )}
</div>
```

---

### 8. QuizQuestion Component

**File:** `components/quiz/QuizQuestion.tsx`

**Purpose:** Single quiz question with multiple choice options

**Props:**
```typescript
interface QuizQuestionProps {
  question: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  selectedAnswer: number | null;
  hasAnswered: boolean;
  onAnswerSelect: (index: number) => void;
}
```

**Structure:**
```tsx
<div className="quiz-question">
  <h3>Question {questionNumber}</h3>
  <p>{question.question}</p>

  <div className="quiz-options">
    {question.options.map((option, index) => (
      <div
        key={index}
        className={getOptionClassName(index)}
        onClick={() => !hasAnswered && onAnswerSelect(index)}
      >
        {option}
      </div>
    ))}
  </div>

  {hasAnswered && (
    <div className={getFeedbackClassName()}>
      <strong>
        {selectedAnswer === question.correctIndex ? '✅ Correct!' : '❌ Incorrect'}
      </strong>
      <br />
      {question.explanation}
    </div>
  )}
</div>
```

**Option Styling Logic:**
```typescript
function getOptionClassName(index: number) {
  if (!hasAnswered) return 'quiz-option'
  if (index === question.correctIndex) return 'quiz-option correct'
  if (index === selectedAnswer) return 'quiz-option incorrect'
  return 'quiz-option'
}
```

---

### 9. ProgressBar Component

**File:** `components/ProgressBar.tsx`

**Purpose:** Visual progress indicator

**Props:**
```typescript
interface ProgressBarProps {
  current: number;
  total: number;
}
```

**Structure:**
```tsx
<div className="progress-bar">
  <div
    className="progress-fill"
    style={{ width: `${(current / total) * 100}%` }}
  >
    {Math.round((current / total) * 100)}%
  </div>
</div>
```

---

## Component Interaction Flow

### Navigation Flow
```
User clicks tab
  ↓
Navigation component fires onSectionChange
  ↓
Parent (page.tsx) updates activeSection state
  ↓
Corresponding section becomes visible
  ↓
Section animates in with fadeIn
```

### Flashcard Flow
```
User clicks "Next"
  ↓
currentCard increments
  ↓
Flashcard component receives new flashcard data
  ↓
isFlipped resets to false
  ↓
Progress bar updates
```

### Quiz Flow
```
User selects answer
  ↓
selectedAnswer state updates
  ↓
hasAnswered set to true
  ↓
Correct answer highlighted (green)
  ↓
Incorrect answer highlighted (red) if wrong
  ↓
Explanation shown
  ↓
User clicks "Next"
  ↓
Move to next question or show results
```

---

## Responsive Breakpoints

### Mobile (< 768px)
- Stack navigation tabs horizontally with scroll
- Reduce header font sizes
- Reduce card padding
- Smaller flashcard height (350px vs 400px)
- Larger tap targets for buttons (min 44x44px)

### Tablet (768px - 1024px)
- Standard layout
- Normal font sizes
- Standard card padding

### Desktop (> 1024px)
- Max-width container (1200px)
- Larger hover effects
- More generous spacing

---

## Animation Specifications

### Fade In (Section transitions)
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Duration: 300ms */
```

### Slide Down (Psychology content)
```css
@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}
/* Duration: 300ms */
```

### Card Flip (Flashcards)
```typescript
// Framer Motion
animate={{ rotateY: isFlipped ? 180 : 0 }}
transition={{ duration: 0.6 }}
style={{ transformStyle: 'preserve-3d' }}
```

### Hover Effects
```css
/* Question cards */
.question-card:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
}

/* Buttons */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}
```

---

## Accessibility Considerations

### Keyboard Navigation
- All interactive elements focusable with Tab
- Enter/Space to activate buttons
- Arrow keys for flashcard navigation (nice-to-have)

### ARIA Labels
```tsx
<button aria-label="Show psychology explanation">
  💡 Show Psychology
</button>

<div role="tablist">
  <button role="tab" aria-selected={isActive}>
    Stage 1: Connection
  </button>
</div>
```

### Focus States
```css
.btn:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}
```

---

## Performance Optimization

### Component Memoization
```typescript
// Memoize expensive data transformations
const stageData = useMemo(() => transformStageData(rawData), [rawData])

// Memoize callbacks
const handleSectionChange = useCallback((sectionId: string) => {
  setActiveSection(sectionId)
}, [])
```

### Lazy Loading
```typescript
// Lazy load quiz and flashcard components
const QuizSection = dynamic(() => import('@/components/quiz/QuizSection'))
const FlashcardSection = dynamic(() => import('@/components/flashcards/FlashcardSection'))
```

---

**Last Updated:** October 23, 2025
**Status:** ✅ Component Design Complete
