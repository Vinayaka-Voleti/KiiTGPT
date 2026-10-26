'use client'

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-slide-in-right">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 glow-blue">
        <span className="text-xs font-bold text-primary-foreground">K</span>
      </div>

      <div className="bg-card text-foreground rounded-3xl rounded-tl-sm px-5 py-3 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>

      <span className="text-xs text-muted-foreground self-center ml-2 animate-fade-in">
        KIITGPT is thinking...
      </span>
    </div>
  )
}
