# KIITGPT - Your University. Supercharged.

KIITGPT is a premium dark-mode AI chat web application designed as the official AI assistant for KIIT University, Bhubaneswar. It combines the sophistication of Perplexity AI with university-specific intelligence, delivering a seamless experience for students to access academic information.

## 🎨 Visual Identity

- **Background**: Deep navy-black (#080C14) with subtle grid texture
- **Primary Accent**: Electric blue (#2D7EFF) with dynamic glow effects
- **Secondary Accent**: Teal (#00C2A8) for highlights
- **Text**: Near-white (#E8EEF8) for primary content, muted slate (#8A9BB5) for secondary
- **Design Elements**: Glassmorphism effects, animated logo pulse, smooth transitions
- **Typography**: Inter for body text, Space Grotesk for headings

## 🏗️ Layout Architecture

### Left Sidebar (260px)
- KIITGPT logo with glowing K monogram
- Pulsing "New Chat" button with blue glow
- Chat history grouped by time period (Today, Yesterday, This Week)
- Bottom section with:
  - Student profile avatar
  - Settings icon
  - Dark/Light mode toggle
  - Logout button

### Center Chat Area
- Top navbar with breadcrumb navigation (KIITGPT / Academics / Notices)
- Red-orange BETA badge
- Welcome state with 6 quick-action suggestion chips:
  - 📋 Latest Notices
  - 📚 My Notes & Syllabus
  - 🧑‍🎓 Student Lookup by Roll No.
  - 📅 Academic Calendar
  - 🏢 Faculty Directory
  - 📢 Announcements
- Clean chat bubbles with markdown rendering support
- Animated typing indicator with "KIITGPT is thinking..."
- Sticky floating input bar with pill-shaped design
- Paperclip (attachment), mic, and glowing send button

### Right Panel (320px)
- "Live Sources" section showing which KIIT pages/docs were referenced
- Source cards with confidence tags (Official/Academic/Student)
- Quick Actions widget (Check Attendance, View Timetable, Download Marksheet)
- Timestamp of last update

## ✨ Key Features

- **3-Panel Layout**: Professional desktop experience with sidebar, main chat, and context panel
- **Real-time Chat Interface**: User messages right-aligned in blue pills, AI responses with avatar icon
- **Mock Student Profile Cards**: Embedded in responses, showing student info with CGPA and status
- **Responsive Design**: Mobile-optimized with collapsible sidebar and hidden right panel
- **Smooth Animations**: Slide-in effects, pulse glows, fade-in transitions
- **Glassmorphism UI**: Semi-transparent cards with blur effects for premium feel
- **Toast Notifications**: System alerts for updates (integrated alert infrastructure)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Date Formatting**: date-fns
- **Font Stack**: 
  - Headings: Space Grotesk
  - Body: Inter
  - Mono: System font stack

## 🚀 Getting Started

### Installation

```bash
# Clone or extract the project
cd kiitgpt

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit `http://localhost:3000` in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
components/
├── sidebar.tsx           # Left navigation panel
├── chat-area.tsx         # Main chat interface
├── chat-bubble.tsx       # Individual message bubble
├── welcome-state.tsx     # Landing page with suggestions
├── typing-indicator.tsx  # Animated "thinking" indicator
└── right-panel.tsx       # Live sources & quick actions

app/
├── page.tsx              # Main app component
├── layout.tsx            # Root layout with fonts
└── globals.css           # Global styles & animations

lib/
└── utils.ts              # Utility functions
```

## 🎯 Component Features

### Sidebar
- Collapsible design for responsive layouts
- Chat history with time-based grouping
- User profile section with avatar
- Settings, theme toggle, and logout options

### ChatArea
- Auto-scrolling message container
- Floating input with icon buttons
- Enter to send (Shift+Enter for new lines)
- Right panel toggle button

### ChatBubble
- User and AI message differentiation
- Special rendering for student profile responses
- Timestamp display
- Glassmorphism styling

### WelcomeState
- Centered layout with large logo
- 6 suggestion chips in responsive grid
- Emoji + text labels
- Hover effects with glow

### TypingIndicator
- 3 animated dots
- "KIITGPT is thinking..." text
- Smooth fade-in animation

### RightPanel
- Source citation cards
- Confidence tags (color-coded)
- Quick action buttons
- Update timestamp

## 🎨 Custom Animations

- `animate-pulse-glow`: 2s pulse with glowing effect
- `animate-slide-in-right`: 0.4s slide from right
- `animate-fade-in`: 0.4s fade-in effect
- `.glass`: Glassmorphism effect with backdrop blur
- `.glow-blue`: Blue shadow glow
- `.glow-teal`: Teal shadow glow

## 🔧 Configuration

### Colors
All colors are defined as CSS variables in `globals.css`:
- `--background`: Main app background
- `--foreground`: Text color
- `--primary`: Electric blue
- `--secondary`: Teal
- `--card`: Card backgrounds
- `--border`: Border colors
- `--muted`: Muted text

### Fonts
Configured in `layout.tsx`:
- Space Grotesk for headings (`--font-heading`)
- Inter for body text (`--font-sans`)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sidebar collapses, right panel hidden)
- **Tablet**: 640px - 1024px (adjusted spacing)
- **Desktop**: > 1024px (full 3-panel layout)

## 🚀 Deployment

This project is ready to deploy on Vercel:

```bash
git push origin main
# Deployment happens automatically
```

Or deploy manually:

```bash
vercel deploy
```

## 📝 Notes

- All chat state is stored in React (no backend required)
- Mock AI responses simulate 1.5s latency
- Student profile data is hardcoded for demo purposes
- Ready to integrate with real backend APIs
- Supports markdown rendering in future enhancements

## 🎓 University Integration Ready

The application is designed to integrate with KIIT University systems:
- Fetch real notices from the academic portal
- Pull student data from the database
- Display real timetables and attendance
- Access faculty directory
- Download actual marksheets
- Push notifications for announcements

## 💡 Future Enhancements

- Real backend integration with KIIT APIs
- Authentication with university credentials
- Persistent chat history in database
- Real AI model integration (ChatGPT/Claude)
- File upload support for assignments
- Voice input/output functionality
- Mobile app versions
- Admin dashboard for content management

---

**Version**: 1.0.0  
**Status**: Beta  
**Created with**: Next.js 16, React 19, Tailwind CSS 4
