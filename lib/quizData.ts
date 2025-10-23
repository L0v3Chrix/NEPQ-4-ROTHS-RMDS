import { QuizQuestion } from '@/types'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the primary purpose of Connection Questions in NEPQ?',
    options: [
      'To gather detailed financial information',
      'To build rapport and establish trust',
      'To present your solution',
      'To close the sale'
    ],
    correctIndex: 1,
    explanation: 'Connection Questions are designed to build rapport and establish trust by showing genuine curiosity about the prospect\'s situation, not to gather detailed information or pitch.'
  },
  {
    id: 'q2',
    question: 'Why is the phrase "just so I don\'t assume" effective?',
    options: [
      'It makes you sound uncertain',
      'It demonstrates humility and respect',
      'It confuses the prospect',
      'It fills time in the conversation'
    ],
    correctIndex: 1,
    explanation: 'This disarming language demonstrates humility and respect, positioning you as a consultant rather than a salesperson, which removes sales resistance.'
  },
  {
    id: 'q3',
    question: 'What should Situation Questions accomplish?',
    options: [
      'Make the prospect feel inadequate',
      'Present your product features',
      'Gather facts about their current state',
      'Create immediate urgency'
    ],
    correctIndex: 2,
    explanation: 'Situation Questions are designed to gather factual information about the prospect\'s current state to identify gaps and opportunities for your solution.'
  },
  {
    id: 'q4',
    question: 'In Problem Awareness stage, what\'s the key principle?',
    options: [
      'Tell them directly what their problems are',
      'Help them discover problems themselves',
      'Minimize their concerns',
      'Focus on your solution immediately'
    ],
    correctIndex: 1,
    explanation: 'Problem Awareness is about helping prospects discover gaps and risks themselves. When they articulate the problem, it becomes their truth—far more persuasive than you telling them.'
  },
  {
    id: 'q5',
    question: 'Why ask "What concerns do you have about being required to take money out—whether you need it or not?"',
    options: [
      'To confuse them about RMDs',
      'To highlight loss of control and autonomy',
      'To criticize their planning',
      'To show off your knowledge'
    ],
    correctIndex: 1,
    explanation: 'This question highlights the absurdity of RMDs and emphasizes loss of autonomy, which is a highly motivating psychological trigger.'
  },
  {
    id: 'q6',
    question: 'What makes Solution Awareness questions effective?',
    options: [
      'They directly pitch your product',
      'They present solutions as possibilities, not prescriptions',
      'They pressure the prospect to decide',
      'They focus on competitor weaknesses'
    ],
    correctIndex: 1,
    explanation: 'Solution Awareness questions are effective because they present solutions as possibilities rather than prescriptions, making the prospect feel like the solution is their idea.'
  },
  {
    id: 'q7',
    question: 'What\'s the purpose of Consequence Questions?',
    options: [
      'To scare the prospect into buying',
      'To amplify urgency by exploring cost of inaction',
      'To prove you\'re right',
      'To demonstrate your expertise'
    ],
    correctIndex: 1,
    explanation: 'Consequence Questions amplify urgency by helping the prospect understand the cost of inaction, framing doing nothing as an active choice with negative consequences.'
  },
  {
    id: 'q8',
    question: 'Why mention "How would your family be affected..."?',
    options: [
      'To make them feel guilty',
      'To leverage altruistic motivation about legacy',
      'To change the topic',
      'To sell estate planning products'
    ],
    correctIndex: 1,
    explanation: 'This leverages altruistic motivation—people care deeply about not burdening their family. It expands consequences beyond just the prospect to people they love.'
  },
  {
    id: 'q9',
    question: 'In Commitment stage, why ask "What would you need to see..."?',
    options: [
      'To delay the close',
      'To uncover their buying criteria in their own words',
      'To show you don\'t know what to present',
      'To avoid presenting a solution'
    ],
    correctIndex: 1,
    explanation: 'This uncovers their buying criteria in their own words, allowing you to tailor your presentation to exactly what they need to see. They also mentally rehearse saying yes.'
  },
  {
    id: 'q10',
    question: 'What is the fundamental principle behind NEPQ?',
    options: [
      'The agent should do most of the talking',
      'Prospects convince themselves through self-discovery',
      'Always Be Closing (ABC)',
      'Present features and benefits immediately'
    ],
    correctIndex: 1,
    explanation: 'NEPQ is based on the principle that prospects convince themselves through a journey of self-discovery guided by strategic questions, rather than being pitched to.'
  }
]

export function getQuizResults(score: number, total: number) {
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

  return {
    score,
    total,
    percentage,
    message,
    emoji
  }
}
