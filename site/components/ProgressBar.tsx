interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="bg-gray-200 h-6 rounded-full overflow-hidden my-5">
      <div
        className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-bold text-sm transition-all duration-300"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  )
}
