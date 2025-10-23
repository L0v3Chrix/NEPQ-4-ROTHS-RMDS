// Type definitions for NEPQ Training Guide

export interface Psychology {
  title: string
  explanation: string
  keyPrinciple: string
}

export interface Question {
  id: string
  number: number
  text: string
  psychology: Psychology
}

export interface Transition {
  text: string
  psychology: string
}

export interface Stage {
  id: string
  title: string
  description: string
  questions: Question[]
  transition?: Transition
}

export interface Flashcard {
  id: string
  stage: string
  question: string
  psychology: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface QuizResult {
  score: number
  total: number
  percentage: number
  message: string
  emoji: string
}
