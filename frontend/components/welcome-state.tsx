'use client'

import { FileText, BookOpen, Users, Calendar, Building2, Bell } from 'lucide-react'

interface WelcomeStateProps {
  onSelectChip: (text: string) => void
}

export default function WelcomeState({ onSelectChip }: WelcomeStateProps) {
  const suggestions = [
    {
      icon: FileText,
      label: 'Latest Notices',
      emoji: '📋',
    },
    {
      icon: BookOpen,
      label: 'My Notes & Syllabus',
      emoji: '📚',
    },
    {
      icon: Users,
      label: 'Student Lookup by Roll No.',
      emoji: '🧑‍🎓',
    },
    {
      icon: Calendar,
      label: 'Academic Calendar',
      emoji: '📅',
    },
    {
      icon: Building2,
      label: 'Faculty Directory',
      emoji: '🏢',
    },
    {
      icon: Bell,
      label: 'Announcements',
      emoji: '📢',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-8 py-12">
      {/* Logo */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center animate-pulse-glow">
            <span className="text-3xl font-bold text-primary-foreground">K</span>
          </div>
        </div>
        <h1 className="text-4xl font-heading font-bold text-foreground text-balance">
          What do you want to know about KIIT?
        </h1>
        <p className="text-muted-foreground text-sm">
          Ask me anything about your university
        </p>
      </div>

      {/* Suggestion Chips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-2xl">
        {suggestions.map((suggestion) => {
          const Icon = suggestion.icon
          return (
            <button
              key={suggestion.label}
              onClick={() => onSelectChip(suggestion.label)}
              className="group p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">{suggestion.emoji}</span>
                <div className="text-left">
                  <h3 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                    {suggestion.label}
                  </h3>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Footer Info */}
      <div className="text-center text-xs text-muted-foreground mt-8 space-y-1">
        <p>Powered by KIIT University Intelligence Platform</p>
        <p>Live data • Real-time updates • Official sources</p>
      </div>
    </div>
  )
}
