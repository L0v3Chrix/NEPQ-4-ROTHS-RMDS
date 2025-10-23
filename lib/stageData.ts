import { Stage } from '@/types'

export const stages: Stage[] = [
  {
    id: 'stage1',
    title: 'Stage 1: Connection Questions',
    description: 'Build rapport and establish trust by showing genuine curiosity about their situation',
    questions: [
      {
        id: 's1q1',
        number: 1,
        text: 'Just so I don\'t assume—how are you currently set up tax-wise for retirement?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'The phrase "just so I don\'t assume" demonstrates humility and respect. It positions you as a consultant, not a salesperson. This open-ended question gets them talking about their current situation without feeling interrogated.',
          keyPrinciple: 'Disarming language removes sales resistance and creates psychological safety.'
        }
      },
      {
        id: 's1q2',
        number: 2,
        text: 'What got you thinking about your financial future more seriously at this stage?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This question uncovers their emotional trigger or catalyst. Understanding why now gives you insight into their urgency and motivation. People buy emotionally and justify logically.',
          keyPrinciple: 'Discover the emotional driver behind their search for solutions.'
        }
      },
      {
        id: 's1q3',
        number: 3,
        text: 'Was it something you saw, or something someone said that got you curious about taxes in retirement?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This digs deeper into their awareness journey. By giving them two options (something seen vs. something said), you make it easier for them to recall and share. This reveals whether they\'re reacting to external stimuli or internal concerns.',
          keyPrinciple: 'Specific prompts help prospects articulate vague concerns.'
        }
      }
    ],
    transition: {
      text: 'Would it be okay if I asked a few questions about your current setup to understand what you\'re working with?',
      psychology: 'Asking permission maintains rapport and gives them control. They\'ll almost always say yes, but you\'ve positioned the next questions as collaborative exploration.'
    }
  },
  {
    id: 'stage2',
    title: 'Stage 2: Situation Questions',
    description: 'Gather facts about their current state to identify gaps and opportunities',
    questions: [
      {
        id: 's2q1',
        number: 1,
        text: 'What types of retirement accounts are you currently using to grow your money?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This is pure fact-finding but phrased positively ("grow your money"). You\'re gathering intel about their tax exposure (401k, IRA, Roth, etc.) while keeping the conversation forward-focused.',
          keyPrinciple: 'Frame factual questions in aspirational language.'
        }
      },
      {
        id: 's2q2',
        number: 2,
        text: 'How do you see yourself using those funds when you retire?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This activates their imagination and helps them visualize retirement. It also reveals whether they\'ve thought through their distribution strategy or are simply accumulating without a plan.',
          keyPrinciple: 'Get them dreaming before you introduce problems.'
        }
      },
      {
        id: 's2q3',
        number: 3,
        text: 'Have you calculated what your RMDs might look like once you hit age 73 or 75?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'Most people haven\'t done this math. This question plants a seed that there\'s something they should know about. The specific ages add credibility and show you\'re knowledgeable.',
          keyPrinciple: 'Expose knowledge gaps without making them feel ignorant.'
        }
      },
      {
        id: 's2q4',
        number: 4,
        text: 'What have you done so far to manage taxes on those future withdrawals?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This assumes they should be doing something (they probably aren\'t). The phrase "so far" implies an ongoing process they\'re behind on. You\'re creating gentle tension.',
          keyPrinciple: 'Presuppositions guide thinking without being pushy.'
        }
      }
    ],
    transition: {
      text: 'That gives me some helpful context—can I ask you a few things that might reveal some hidden risks with that approach?',
      psychology: '"Hidden risks" creates curiosity and slight concern. You\'re positioning yourself as someone who sees what they can\'t.'
    }
  },
  {
    id: 'stage3',
    title: 'Stage 3: Problem Awareness Questions',
    description: 'Help them discover the gaps and risks in their current approach',
    questions: [
      {
        id: 's3q1',
        number: 1,
        text: 'Have you thought about what could happen if taxes are higher when you\'re forced to withdraw those RMDs?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This introduces future pain without stating it directly. The word "forced" emphasizes lack of control. You\'re painting a picture of a future problem they may not have considered.',
          keyPrinciple: 'Questions that project into the future create urgency without pressure.'
        }
      },
      {
        id: 's3q2',
        number: 2,
        text: 'What concerns do you have about being required to take money out—whether you need it or not?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This question highlights the absurdity of RMDs—you saved this money, but the government forces you to withdraw it. The phrase "whether you need it or not" emphasizes loss of autonomy.',
          keyPrinciple: 'Frame the problem as a loss of control, which is highly motivating.'
        }
      },
      {
        id: 's3q3',
        number: 3,
        text: 'How would it affect your lifestyle if your taxable income suddenly jumped because of RMDs?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This connects the problem to their lived experience. "Lifestyle" is emotional; "taxable income" is technical. You\'re bridging the gap between numbers and real-world impact.',
          keyPrinciple: 'Link financial concepts to emotional outcomes.'
        }
      },
      {
        id: 's3q4',
        number: 4,
        text: 'Do you feel like you have full control over when and how you pay taxes on your retirement funds?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This is a powerful "feeling" question. Most people will realize they don\'t have control. You\'re making them articulate their own problem, which is far more persuasive than you telling them.',
          keyPrinciple: 'When they say the problem, it becomes their truth.'
        }
      }
    ],
    transition: {
      text: 'I\'m curious—what would you ideally want to see happen instead in that situation?',
      psychology: 'This shifts from problem to possibility. By asking what they want, you\'re priming them to be receptive to your solution.'
    }
  },
  {
    id: 'stage4',
    title: 'Stage 4: Solution Awareness Questions',
    description: 'Guide them toward recognizing the value of your solution without pitching',
    questions: [
      {
        id: 's4q1',
        number: 1,
        text: 'If you could reposition some of your assets now to eliminate RMDs later—would that be something worth exploring?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This is a hypothetical that introduces your solution indirectly. "If you could" makes it feel like their idea. "Worth exploring" is low-pressure language that invites curiosity.',
          keyPrinciple: 'Present solutions as possibilities, not prescriptions.'
        }
      },
      {
        id: 's4q2',
        number: 2,
        text: 'How important is it for you to create tax-free income you can access without IRS restrictions?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This question makes them rate the importance themselves. "Tax-free income" and "without IRS restrictions" paint an aspirational picture. They\'re selling themselves.',
          keyPrinciple: 'Get them to articulate the value of your solution.'
        }
      },
      {
        id: 's4q3',
        number: 3,
        text: 'What would it mean for your peace of mind if your retirement strategy removed the tax uncertainty?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: '"Peace of mind" taps into deep emotional needs. "Tax uncertainty" frames the status quo as stressful. You\'re helping them visualize the emotional payoff of solving this problem.',
          keyPrinciple: 'Sell the emotional benefit, not the technical features.'
        }
      },
      {
        id: 's4q4',
        number: 4,
        text: 'Have you ever heard of ways people use tax-advantaged life insurance to create income that doesn\'t count against RMDs?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This introduces your specific solution (life insurance/infinite banking) without a pitch. "Have you heard" makes it educational. You\'re planting seeds of the strategy you\'ll present.',
          keyPrinciple: 'Educate through questions, not statements.'
        }
      }
    ],
    transition: {
      text: 'Let me ask this—what do you think could happen if this isn\'t addressed sooner rather than later?',
      psychology: 'This pivots to urgency. You\'re asking them to articulate the cost of inaction, which is powerful motivation.'
    }
  },
  {
    id: 'stage5',
    title: 'Stage 5: Consequence Questions',
    description: 'Amplify urgency by exploring the cost of inaction',
    questions: [
      {
        id: 's5q1',
        number: 1,
        text: 'What do you think the long-term impact could be if you keep delaying Roth conversions while taxes are still relatively low?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: '"Keep delaying" presupposes they\'re already procrastinating. "While taxes are still relatively low" creates urgency around a limited-time opportunity. You\'re making inaction feel risky.',
          keyPrinciple: 'Frame inaction as an active choice with consequences.'
        }
      },
      {
        id: 's5q2',
        number: 2,
        text: 'What might that cost you over 10 or 15 years in taxes?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This forces them to think long-term and quantify the problem. Even if they can\'t calculate exactly, their brain starts churning on big numbers. Loss aversion kicks in.',
          keyPrinciple: 'Make the invisible cost visible and tangible.'
        }
      },
      {
        id: 's5q3',
        number: 3,
        text: 'How would your family be affected if your estate was mostly taxable when passed on?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This introduces legacy impact—a powerful motivator. People care deeply about not burdening their family. You\'re expanding the consequence beyond just them to people they love.',
          keyPrinciple: 'Leverage altruistic motivation when possible.'
        }
      },
      {
        id: 's5q4',
        number: 4,
        text: 'What\'s the risk to you if you do nothing and tax rules change again?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This final consequence question creates maximum urgency. Tax laws are constantly changing, and people fear losing opportunities. "Do nothing" makes inaction feel irresponsible.',
          keyPrinciple: 'Amplify urgency by introducing external uncertainty.'
        }
      }
    ],
    transition: {
      text: 'It sounds like this could be a bigger issue than it seemed at first—can I show you what others in your situation are doing to protect themselves?',
      psychology: '"Bigger issue" validates their concern. "Others in your situation" uses social proof. "Protect themselves" frames your solution as protective, not risky.'
    }
  },
  {
    id: 'stage6',
    title: 'Stage 6: Commitment Questions',
    description: 'Secure buy-in and move toward action',
    questions: [
      {
        id: 's6q1',
        number: 1,
        text: 'If we found a way to reposition your assets over time that lowers future taxes and gives you more control, would you be open to seeing how that might work for you?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This is a trial close disguised as a question. "If we found" makes it collaborative. "Would you be open" is minimal resistance language. You\'re not asking for commitment, just permission to show them.',
          keyPrinciple: 'Get small yeses that lead to bigger yeses.'
        }
      },
      {
        id: 's6q2',
        number: 2,
        text: 'What would you need to see in a plan like that to feel confident it\'s the right move?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This uncovers their buying criteria in their own words. When you know what they need to see, you can tailor your presentation. They\'re also mentally rehearsing saying yes.',
          keyPrinciple: 'Let them define success so you can deliver exactly that.'
        }
      },
      {
        id: 's6q3',
        number: 3,
        text: 'Do you feel like now is the right time to explore this before tax rates potentially change?',
        psychology: {
          title: '🧠 Why This Works:',
          explanation: 'This is urgency reinforcement. "Now is the right time" primes them to act. "Before tax rates potentially change" reintroduces scarcity and fear of missing out.',
          keyPrinciple: 'End with urgency to prevent procrastination.'
        }
      }
    ]
  }
]
