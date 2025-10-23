'use client'

import { useState } from 'react'

interface NavigationProps {
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📚' },
    { id: 'stage1', label: 'Connection', fullLabel: 'Stage 1: Connection', icon: '🤝' },
    { id: 'stage2', label: 'Situation', fullLabel: 'Stage 2: Situation', icon: '🔍' },
    { id: 'stage3', label: 'Problem', fullLabel: 'Stage 3: Problem', icon: '⚠️' },
    { id: 'stage4', label: 'Solution', fullLabel: 'Stage 4: Solution', icon: '💡' },
    { id: 'stage5', label: 'Consequence', fullLabel: 'Stage 5: Consequence', icon: '⚡' },
    { id: 'stage6', label: 'Commitment', fullLabel: 'Stage 6: Commitment', icon: '✅' },
    { id: 'practice', label: 'Practice', icon: '🎴' },
    { id: 'quiz', label: 'Quiz', icon: '📝' },
  ]

  const handleTabClick = (tabId: string) => {
    onSectionChange(tabId)
    setIsMenuOpen(false)
  }

  const activeTab = tabs.find(tab => tab.id === activeSection)

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{activeTab?.icon}</span>
            <span className="font-semibold">{activeTab?.label}</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-200 shadow-lg max-h-[70vh] overflow-y-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  w-full text-left px-4 py-4 flex items-center gap-3 transition-colors border-b border-gray-100
                  ${activeSection === tab.id
                    ? 'bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 text-[#667eea] font-semibold border-l-4 border-l-[#667eea]'
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="text-base">{tab.fullLabel || tab.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex overflow-x-auto bg-gray-100 border-b-2 border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSectionChange(tab.id)}
            className={`
              px-5 py-4 whitespace-nowrap transition-all duration-300 text-base
              hover:bg-gray-200 relative flex items-center gap-2
              ${activeSection === tab.id
                ? 'text-[#667eea] font-bold after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-[#667eea]'
                : 'text-gray-700'
              }
            `}
          >
            <span>{tab.icon}</span>
            <span>{tab.fullLabel || tab.label}</span>
          </button>
        ))}
      </div>
    </>
  )
}
