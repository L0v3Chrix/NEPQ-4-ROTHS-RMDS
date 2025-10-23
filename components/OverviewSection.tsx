export default function OverviewSection() {
  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-6 rounded-lg mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Welcome to Your NEPQ Training Guide</h2>
        <p className="text-lg opacity-95">Master the art of consultative selling through neuro-emotional questioning</p>
      </div>

      <div className="bg-gray-100 border-l-4 border-[#667eea] p-5 mb-5 rounded-lg">
        <h3 className="text-[#667eea] text-xl font-bold mb-4">What is NEPQ?</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Neuro-Emotional Persuasion Questioning (NEPQ)</strong> is a consultative sales methodology that guides prospects through a journey of self-discovery. Rather than pitching, you're helping them uncover their own pain points and arrive at their own conclusions about the need for change.
        </p>
      </div>

      <div className="bg-gray-100 border-l-4 border-[#667eea] p-5 mb-5 rounded-lg">
        <h3 className="text-[#667eea] text-xl font-bold mb-4">The Six Stages</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>1. Connection Questions:</strong> Build rapport and trust<br />
          <strong>2. Situation Questions:</strong> Understand their current state<br />
          <strong>3. Problem Awareness:</strong> Help them see the gaps<br />
          <strong>4. Solution Awareness:</strong> Guide toward possibilities<br />
          <strong>5. Consequence Questions:</strong> Amplify urgency<br />
          <strong>6. Commitment Questions:</strong> Secure next steps
        </p>
      </div>

      <div className="bg-gray-100 border-l-4 border-[#667eea] p-5 mb-5 rounded-lg">
        <h3 className="text-[#667eea] text-xl font-bold mb-4">How to Use This Guide</h3>
        <p className="text-gray-700 leading-relaxed">
          📖 <strong>Study Mode:</strong> Navigate through each stage to see questions and their psychology<br />
          🎴 <strong>Practice Mode:</strong> Use flashcards to memorize questions<br />
          📝 <strong>Quiz Mode:</strong> Test your understanding of the methodology
        </p>
      </div>
    </div>
  )
}
