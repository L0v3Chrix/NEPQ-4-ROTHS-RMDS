'use client'

import { useState } from 'react'
import { flashcards } from '@/lib/flashcardData'
import Flashcard from './Flashcard'
import ProgressBar from '../ProgressBar'

export default function FlashcardSection() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleNext = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1)
      setIsFlipped(false)
    }
  }

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setIsFlipped(false)
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-4 md:p-6 rounded-lg mb-4 md:mb-6">
        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">🎴 Practice Mode</h2>
        <p className="text-base md:text-lg opacity-95">Test your memorization with interactive flashcards</p>
      </div>

      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-4 md:p-5 rounded-lg text-center mb-4 md:mb-5">
        <h3 className="text-lg md:text-2xl font-bold">Card {currentCard + 1} of {flashcards.length}</h3>
      </div>

      <Flashcard
        flashcard={flashcards[currentCard]}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />

      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 my-4 md:my-6">
        <button
          onClick={handlePrevious}
          disabled={currentCard === 0}
          className="bg-gray-600 text-white px-6 py-3 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
        >
          ⬅️ Previous
        </button>
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="bg-[#667eea] text-white px-6 py-3 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#5568d3] active:scale-95 hover:shadow-lg w-full md:w-auto"
        >
          🔄 Flip Card
        </button>
        <button
          onClick={handleNext}
          disabled={currentCard === flashcards.length - 1}
          className="bg-gray-600 text-white px-6 py-3 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
        >
          Next ➡️
        </button>
      </div>

      <ProgressBar current={currentCard + 1} total={flashcards.length} />
    </div>
  )
}
