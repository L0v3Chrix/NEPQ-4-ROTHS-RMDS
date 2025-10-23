import { Transition } from '@/types'

interface TransitionBoxProps {
  transition: Transition
}

export default function TransitionBox({ transition }: TransitionBoxProps) {
  return (
    <div className="bg-gradient-to-r from-[#f093fb] to-[#f5576c] text-white p-5 rounded-lg my-8 font-medium">
      <strong className="block mb-2 text-lg">Transition to Next Stage:</strong>
      <p className="mb-3">{transition.text}</p>
      <em className="text-sm opacity-95">Psychology: {transition.psychology}</em>
    </div>
  )
}
