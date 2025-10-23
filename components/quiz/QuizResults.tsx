interface QuizResultsProps {
  score: number
  total: number
  onRestart: () => void
}

export default function QuizResults({ score, total, onRestart }: QuizResultsProps) {
  const percentage = Math.round((score / total) * 100)

  let message = ''
  let emoji = ''

  if (percentage >= 90) {
    message = 'Outstanding! You have mastered the NEPQ methodology!'
    emoji = '🌟'
  } else if (percentage >= 70) {
    message = 'Great job! You have a solid understanding of NEPQ.'
    emoji = '🎯'
  } else if (percentage >= 50) {
    message = 'Good effort! Review the stages and try again.'
    emoji = '📚'
  } else {
    message = 'Keep studying! Go back through each stage carefully.'
    emoji = '💪'
  }

  return (
    <div className="text-center py-10 animate-fade-in">
      <div className="text-8xl mb-8">{emoji}</div>
      <h2 className="text-[#667eea] text-3xl font-bold mb-6">Quiz Complete!</h2>
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-8 rounded-lg max-w-md mx-auto mb-8">
        <h3 className="text-5xl font-bold mb-4">{percentage}%</h3>
        <p className="text-2xl">You scored {score} out of {total}</p>
      </div>
      <p className="text-xl text-gray-700 mb-8">{message}</p>
      <button
        onClick={onRestart}
        className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-lg"
      >
        🔄 Restart Quiz
      </button>
    </div>
  )
}
