'use client'

import { motion } from 'framer-motion'
import { Flashcard as FlashcardType } from '@/types'

interface FlashcardProps {
  flashcard: FlashcardType
  isFlipped: boolean
  onFlip: () => void
}

export default function Flashcard({ flashcard, isFlipped, onFlip }: FlashcardProps) {
  return (
    <div className="flashcard-perspective h-80 md:h-96 max-w-2xl mx-auto my-6 md:my-8 cursor-pointer" onClick={onFlip}>
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center p-6 md:p-10 text-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-lg md:text-2xl leading-relaxed">
            <div className="font-bold mb-3 md:mb-4 text-yellow-300 text-base md:text-xl">{flashcard.stage}</div>
            {flashcard.question}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white rounded-xl md:rounded-2xl shadow-2xl flex items-center justify-center p-6 md:p-10 text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="text-base md:text-xl leading-relaxed">
            {flashcard.psychology}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
