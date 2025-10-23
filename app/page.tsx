'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import OverviewSection from '@/components/OverviewSection'
import StageSection from '@/components/stages/StageSection'
import FlashcardSection from '@/components/flashcards/FlashcardSection'
import QuizSection from '@/components/quiz/QuizSection'
import { stages } from '@/lib/stageData'

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <Header />
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

        <div className="p-8">
          {activeSection === 'overview' && <OverviewSection />}

          {stages.map((stage) => (
            <StageSection
              key={stage.id}
              stage={stage}
              isActive={activeSection === stage.id}
            />
          ))}

          {activeSection === 'practice' && <FlashcardSection />}
          {activeSection === 'quiz' && <QuizSection />}
        </div>
      </div>
    </div>
  )
}
