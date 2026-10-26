'use client'

import { useState } from 'react'
import { Menu, Plus, Settings, Moon, Sun, LogOut, X, User, ChevronRight } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

interface ModalProps {
  title: string
  onClose: () => void
  children: React.ReactNode
}

function Modal({ title, onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-heading font-semibold text-foreground">{title}</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-sidebar-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showLogout, setShowLogout] = useState(false)

  const chatHistory = [
    { id: '1', title: 'Roll Number Lookup', date: 'Today' },
    { id: '2', title: 'Academic Calendar', date: 'Yesterday' },
    { id: '3', title: 'Faculty Directory Search', date: 'This Week' },
  ]

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('light')
  }

  return (
    <>
      {/* Collapsed toggle — always visible when sidebar is closed */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-40 p-2 bg-sidebar border border-sidebar-border border-l-0 rounded-r-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground shadow-lg"
          title="Open sidebar"
        >
          <ChevronRight size={18} />
        </button>
      )}

      <div
        className={`${
          isOpen ? 'w-[260px]' : 'w-0'
        } bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col overflow-hidden flex-shrink-0`}
      >
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center animate-pulse-glow">
                <span className="text-sm font-bold text-primary-foreground">K</span>
              </div>
              <span className="font-heading font-bold text-foreground">KIITGPT</span>
            </div>
            <button
              onClick={onToggle}
              className="p-1.5 hover:bg-sidebar-accent rounded-lg transition-colors"
              title="Collapse sidebar"
            >
              <Menu size={18} className="text-sidebar-foreground" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground">Your University. Supercharged.</p>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all glow-blue">
            <Plus size={18} />
            New Chat
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-4">
          <div className="space-y-4">
            {['Today', 'Yesterday', 'This Week'].map((period) => (
              <div key={period}>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-2">
                  {period}
                </h3>
                <div className="space-y-1">
                  {chatHistory
                    .filter((chat) => chat.date === period)
                    .map((chat) => (
                      <button
                        key={chat.id}
                        className="w-full text-left px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors truncate"
                      >
                        {chat.title}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sidebar-border p-4 space-y-1">
          {/* Profile */}
          <button
            onClick={() => setShowProfile(true)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
              AJ
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-sidebar-foreground">Arpita Som</p>
              <p className="text-xs text-muted-foreground">Student · 23051009</p>
            </div>
          </button>

          {/* Settings */}
          <button
            onClick={() => setShowSettings(true)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            <Settings size={16} />
            <span className="text-sm">Settings</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span className="text-sm">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          {/* Logout */}
          <button
            onClick={() => setShowLogout(true)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={16} />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <Modal title="Settings" onClose={() => setShowSettings(false)}>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Appearance</p>
              <button
                onClick={handleThemeToggle}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-sidebar border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 text-sm text-foreground">
                  {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                  <span>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                </div>
                <div className={`w-10 h-5 rounded-full transition-colors ${isDarkMode ? 'bg-primary' : 'bg-muted'} relative`}>
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${isDarkMode ? 'left-5' : 'left-0.5'}`} />
                </div>
              </button>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">About</p>
              <div className="px-4 py-3 rounded-xl bg-sidebar border border-border text-sm text-muted-foreground space-y-1">
                <p>KIITGPT <span className="text-orange-400 font-bold text-xs">BETA</span></p>
                <p>Version 0.1.0</p>
                <p>KIIT University, Bhubaneswar</p>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Profile Modal */}
      {showProfile && (
        <Modal title="My Profile" onClose={() => setShowProfile(false)}>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                AJ
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Aakash Jain</p>
                <p className="text-sm text-muted-foreground">Roll No: 23053159</p>
                <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">4th Year · CSE</span>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              {[
                { label: 'Branch', value: 'Computer Science & Engineering' },
                { label: 'University', value: 'KIIT University, Bhubaneswar' },
                { label: 'Batch', value: '2022 – 2026' },
                { label: 'Email', value: '23053159@kiit.ac.in' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-2.5 rounded-xl bg-sidebar border border-border">
                  <span className="text-xs text-muted-foreground">{label}</span>
                  <span className="text-sm text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}

      {/* Logout Confirmation Modal */}
      {showLogout && (
        <Modal title="Logout" onClose={() => setShowLogout(false)}>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Are you sure you want to logout from KIITGPT?</p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-border text-sm text-foreground hover:bg-sidebar-accent transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => { setShowLogout(false); alert('Logged out!') }}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
