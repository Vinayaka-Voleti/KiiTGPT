'use client'

import { CheckCircle2, Clock, FileText, BarChart3 } from 'lucide-react'

interface RightPanelProps {
  lastMessageTimestamp: Date
}

export default function RightPanel({ lastMessageTimestamp }: RightPanelProps) {
  const sources = [
    {
      name: 'KIIT Official Portal',
      url: 'portal.kiit.ac.in',
      confidence: 'Official',
      icon: FileText,
    },
    {
      name: 'Academic Services',
      url: 'academics.kiit.ac.in',
      confidence: 'Academic',
      icon: CheckCircle2,
    },
    {
      name: 'Student Database',
      url: 'db.kiit.ac.in',
      confidence: 'Official',
      icon: Clock,
    },
  ]

  const quickActions = [
    { label: 'Check Attendance', icon: '✓' },
    { label: 'View Timetable', icon: '📅' },
    { label: 'Download Marksheet', icon: '📄' },
  ]

  return (
    <div className="w-80 bg-sidebar border-l border-sidebar-border flex flex-col overflow-hidden glass">
      {/* Header */}
      <div className="border-b border-sidebar-border p-4">
        <h2 className="font-heading font-bold text-foreground text-sm">Live Sources</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Sources for this response
        </p>
      </div>

      {/* Sources */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {sources.map((source, idx) => {
          const Icon = source.icon
          return (
            <div
              key={idx}
              className="p-3 rounded-lg border border-sidebar-border bg-card/50 hover:bg-card transition-colors"
            >
              <div className="flex items-start gap-3">
                <Icon size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-foreground truncate">
                    {source.name}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {source.url}
                  </p>
                  <div className="mt-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        source.confidence === 'Official'
                          ? 'bg-primary/20 text-secondary'
                          : source.confidence === 'Academic'
                            ? 'bg-secondary/20 text-secondary'
                            : 'bg-muted/20 text-muted-foreground'
                      }`}
                    >
                      {source.confidence}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="border-t border-sidebar-border p-4">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          Quick Actions
        </h3>
        <div className="space-y-2">
          {quickActions.map((action, idx) => (
            <button
              key={idx}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors flex items-center gap-2"
            >
              <span className="text-base">{action.icon}</span>
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4 text-xs text-muted-foreground text-center">
        <p>Last updated just now</p>
      </div>
    </div>
  )
}
