'use client'

import { format } from 'date-fns'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

interface ChatBubbleProps {
  message: Message
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.type === 'user'

  // Check if this is a student profile response
  const isStudentProfile = message.content.includes('student profile')

  return (
    <div
      className={`flex gap-3 animate-slide-in-right ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 glow-blue">
          <span className="text-xs font-bold text-primary-foreground">K</span>
        </div>
      )}

      <div
        className={`max-w-md ${
          isUser
            ? 'bg-primary text-primary-foreground rounded-3xl rounded-tr-sm px-5 py-3'
            : 'bg-card text-foreground rounded-3xl rounded-tl-sm'
        }`}
      >
        {isStudentProfile ? (
          <div className="p-4 space-y-3">
            <p className="text-sm font-medium mb-3">{message.content}</p>

            {/* Student Profile Card */}
            <div className="glass rounded-lg p-4 space-y-2 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold">
                  AJ
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Aakash Jain</h3>
                  <p className="text-xs text-muted-foreground">23053159</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Program:</span>
                  <span className="text-foreground">B.Tech Computer Science</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Semester:</span>
                  <span className="text-foreground">6th</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CGPA:</span>
                  <span className="text-secondary">8.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-400">Active</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-2">
              {format(message.timestamp, 'HH:mm')}
            </p>
          </div>
        ) : (
          <div className="px-5 py-3">
            <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
              {message.content}
            </p>
            <p
              className={`text-xs mt-2 ${
                isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
              }`}
            >
              {format(message.timestamp, 'HH:mm')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
