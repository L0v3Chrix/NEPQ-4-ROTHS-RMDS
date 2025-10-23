'use client'

import { useState } from 'react'
import { Question } from '@/types'

interface QuestionCardProps {
  question: Question
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-gray-100 border-l-4 border-[#667eea] p-5 mb-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-x-1">
      <div className="flex items-start mb-4">
        <span className="bg-[#667eea] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
          Q{question.number}
        </span>
        <span className="text-lg font-semibold text-gray-800 leading-relaxed">
          {question.text}
        </span>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#667eea] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#5568d3] hover:scale-105 mb-2"
      >
        {isExpanded ? '🔼 Hide Psychology' : '💡 Show Psychology'}
      </button>

      {isExpanded && (
        <div className="bg-white p-5 rounded-lg mt-2.5 border-2 border-[#667eea] animate-slide-down">
          <div className="text-[#667eea] font-bold mb-2.5 text-lg">{question.psychology.title}</div>
          <div className="text-gray-700 leading-relaxed">
            {question.psychology.explanation}
            <br /><br />
            <strong>Key Principle:</strong> {question.psychology.keyPrinciple}
          </div>
        </div>
      )}
    </div>
  )
}
