'use client'

import { useState } from 'react'
import { quizQuestions } from '@/lib/quizData'
import QuizQuestion from './QuizQuestion'
import QuizResults from './QuizResults'

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const handleAnswerSelect = (index: number) => {
    if (hasAnswered) return

    setSelectedAnswer(index)
    setHasAnswered(true)

    if (index === quizQuestions[currentQuestion].correctIndex) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (!quizStarted) {
      setQuizStarted(true)
      return
    }

    if (!hasAnswered && currentQuestion > 0) {
      alert('Please select an answer before moving to the next question.')
      return
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setHasAnswered(false)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
      setHasAnswered(false)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setHasAnswered(false)
    setShowResults(false)
    setQuizStarted(false)
  }

  if (!quizStarted) {
    return (
      <div className="animate-fade-in">
        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-4 md:p-6 rounded-lg mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">📝 Quiz Mode</h2>
          <p className="text-base md:text-lg opacity-95">Test your understanding of the NEPQ methodology</p>
        </div>

        <div className="text-center py-12 md:py-16">
          <p className="text-lg md:text-xl text-[#667eea] mb-6 md:mb-8 px-4">Click "Start Quiz" to begin testing your knowledge!</p>
          <button
            onClick={handleNext}
            className="bg-[#667eea] text-white px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 hover:bg-[#5568d3] active:scale-95 hover:shadow-lg w-full max-w-xs md:w-auto"
          >
            Start Quiz
          </button>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="animate-fade-in">
        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-4 md:p-6 rounded-lg mb-4 md:mb-6">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">📝 Quiz Mode</h2>
          <p className="text-base md:text-lg opacity-95">Test your understanding of the NEPQ methodology</p>
        </div>
        <QuizResults score={score} total={quizQuestions.length} onRestart={handleRestart} />
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-4 md:p-6 rounded-lg mb-4 md:mb-6">
        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">📝 Quiz Mode</h2>
        <p className="text-base md:text-lg opacity-95">Test your understanding of the NEPQ methodology</p>
      </div>

      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-4 md:p-5 rounded-lg text-center mb-4 md:mb-5">
        <h3 className="text-lg md:text-2xl font-bold">Score: {score} / {quizQuestions.length}</h3>
        <p className="text-base md:text-lg">Question {currentQuestion + 1} of {quizQuestions.length}</p>
      </div>

      <QuizQuestion
        question={quizQuestions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        selectedAnswer={selectedAnswer}
        hasAnswered={hasAnswered}
        onAnswerSelect={handleAnswerSelect}
      />

      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 my-4 md:my-6">
        {currentQuestion > 0 && (
          <button
            onClick={handlePrevious}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-700 active:scale-95 w-full md:w-auto"
          >
            ⬅️ Previous
          </button>
        )}
        <button
          onClick={handleNext}
          className="bg-[#667eea] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#5568d3] active:scale-95 hover:shadow-lg w-full md:w-auto"
        >
          {currentQuestion < quizQuestions.length - 1 ? 'Next Question ➡️' : 'See Results'}
        </button>
      </div>
    </div>
  )
}
