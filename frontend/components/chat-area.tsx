'use client'

import { useRef, useEffect } from 'react'
import { Send, Paperclip, Mic, PanelRightClose, PanelRightOpen } from 'lucide-react'
import ChatBubble from './chat-bubble'
import WelcomeState from './welcome-state'
import TypingIndicator from './typing-indicator'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

interface ChatAreaProps {
  messages: Message[]
  isTyping: boolean
  inputValue: string
  onInputChange: (value: string) => void
  onSendMessage: (message: string) => void
  sidebarOpen: boolean
  rightPanelOpen: boolean
  onToggleRightPanel: () => void
}

export default function ChatArea({
  messages,
  isTyping,
  inputValue,
  onInputChange,
  onSendMessage,
  sidebarOpen,
  rightPanelOpen,
  onToggleRightPanel,
}: ChatAreaProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  // Auto-grow textarea
  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = Math.min(textarea.scrollHeight, 160) + 'px'
    }
  }, [inputValue])

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue)
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Dynamic breadcrumb based on last message
  const getBreadcrumb = () => {
    if (messages.length === 0) return 'KIITGPT'
    const last = messages[messages.length - 1]?.content?.toLowerCase() ?? ''
    if (last.includes('notice') || last.includes('announcement')) return 'KIITGPT / Notices'
    if (last.includes('roll') || last.includes('student')) return 'KIITGPT / Student Lookup'
    if (last.includes('syllabus') || last.includes('notes')) return 'KIITGPT / Academics'
    if (last.includes('faculty') || last.includes('professor')) return 'KIITGPT / Faculty'
    if (last.includes('calendar') || last.includes('schedule')) return 'KIITGPT / Calendar'
    return 'KIITGPT / Chat'
  }

  return (
    <div className="flex-1 flex flex-col bg-background overflow-hidden min-w-0">
      {/* Top Navbar */}
      <div className="border-b border-border h-16 flex items-center justify-between px-6 glass flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>{getBreadcrumb()}</span>
          </div>
          <span className="px-2 py-1 text-xs font-bold bg-orange-600 text-white rounded">
            BETA
          </span>
        </div>
        <button
          onClick={onToggleRightPanel}
          title={rightPanelOpen ? 'Close sources panel' : 'Open sources panel'}
          className="p-2 hover:bg-card rounded-lg transition-colors text-muted-foreground hover:text-foreground"
        >
          {rightPanelOpen ? <PanelRightClose size={20} /> : <PanelRightOpen size={20} />}
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {messages.length === 0 && !isTyping ? (
          <WelcomeState onSelectChip={onSendMessage} />
        ) : (
          <>
            {messages.map((message) => (
              <ChatBubble key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Bar */}
      <div className="border-t border-border p-4 glass flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-3">
            {/* Input Field */}
            <div className="flex-1 flex items-end gap-3 bg-card rounded-2xl px-4 py-3 border border-border hover:border-primary/50 focus-within:border-primary/70 transition-colors">
              <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors mb-0.5 flex-shrink-0">
                <Paperclip size={18} />
              </button>
              <textarea
                ref={textareaRef}
                rows={1}
                placeholder="What do you want to know about KIIT?"
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm resize-none leading-relaxed max-h-40 overflow-y-auto"
                style={{ height: 'auto' }}
              />
              <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors mb-0.5 flex-shrink-0">
                <Mic size={18} />
              </button>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="p-3 rounded-xl bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all glow-blue flex-shrink-0"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}