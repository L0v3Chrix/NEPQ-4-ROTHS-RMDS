interface NavigationProps {
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'stage1', label: 'Stage 1: Connection' },
    { id: 'stage2', label: 'Stage 2: Situation' },
    { id: 'stage3', label: 'Stage 3: Problem' },
    { id: 'stage4', label: 'Stage 4: Solution' },
    { id: 'stage5', label: 'Stage 5: Consequence' },
    { id: 'stage6', label: 'Stage 6: Commitment' },
    { id: 'practice', label: '🎴 Practice' },
    { id: 'quiz', label: '📝 Quiz' },
  ]

  return (
    <div className="flex overflow-x-auto bg-gray-100 border-b-2 border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSectionChange(tab.id)}
          className={`
            px-5 py-4 whitespace-nowrap transition-all duration-300 text-sm md:text-base
            hover:bg-gray-200 relative
            ${activeSection === tab.id
              ? 'text-[#667eea] font-bold after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-[#667eea]'
              : 'text-gray-700'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
