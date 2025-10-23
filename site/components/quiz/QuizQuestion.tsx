'use client'

import { QuizQuestion as QuizQuestionType } from '@/types'

interface QuizQuestionProps {
  question: QuizQuestionType
  questionNumber: number
  selectedAnswer: number | null
  hasAnswered: boolean
  onAnswerSelect: (index: number) => void
}

export default function QuizQuestion({
  question,
  questionNumber,
  selectedAnswer,
  hasAnswered,
  onAnswerSelect
}: QuizQuestionProps) {
  const getOptionClassName = (index: number) => {
    const base = 'bg-white p-4 my-2.5 rounded-lg cursor-pointer transition-all duration-300 border-2'

    if (!hasAnswered) {
      return `${base} border-transparent hover:border-[#667eea] hover:translate-x-1`
    }

    if (index === question.correctIndex) {
      return `${base} bg-green-100 border-green-500`
    }

    if (index === selectedAnswer) {
      return `${base} bg-red-100 border-red-500`
    }

    return `${base} border-transparent opacity-60`
  }

  const isCorrect = selectedAnswer === question.correctIndex

  return (
    <div className="bg-gray-100 p-6 rounded-lg mb-5">
      <h3 className="text-[#667eea] text-xl font-bold mb-5">Question {questionNumber}</h3>
      <p className="text-xl mb-5 text-gray-800 leading-relaxed">{question.question}</p>

      <div className="my-5">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={getOptionClassName(index)}
            onClick={() => !hasAnswered && onAnswerSelect(index)}
            style={{ pointerEvents: hasAnswered ? 'none' : 'auto' }}
          >
            {option}
          </div>
        ))}
      </div>

      {hasAnswered && (
        <div className={`mt-4 p-4 rounded-lg font-medium ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <strong>{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong>
          <br />
          {question.explanation}
        </div>
      )}
    </div>
  )
}
