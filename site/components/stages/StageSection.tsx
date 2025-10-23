import { Stage } from '@/types'
import QuestionCard from './QuestionCard'
import TransitionBox from './TransitionBox'

interface StageSectionProps {
  stage: Stage
  isActive: boolean
}

export default function StageSection({ stage, isActive }: StageSectionProps) {
  if (!isActive) return null

  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-6 rounded-lg mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{stage.title}</h2>
        <p className="text-lg opacity-95">{stage.description}</p>
      </div>

      {stage.questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}

      {stage.transition && <TransitionBox transition={stage.transition} />}
    </div>
  )
}
