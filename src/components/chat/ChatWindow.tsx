import { useState } from 'react'
import './chat.css'

export type ChatMessage = {
  id: number
  sender: 'coach' | 'user' | 'system'
  text: string
  time: string
}

type ChatWindowProps = {
  title: string
  description: string
  initialMessages: ChatMessage[]
  placeholder: string
}

export function ChatWindow({
  title,
  description,
  initialMessages,
  placeholder,
}: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [draft, setDraft] = useState('')

  const handleSend = () => {
    if (!draft.trim()) return
    const now = new Date()
    const time = now.toLocaleTimeString('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
    })
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: 'user',
        text: draft.trim(),
        time,
      },
    ])
    setDraft('')
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section
      className="card chat-card"
      aria-label={title}
    >
      <header className="card__header">
        <div>
          <p className="card__eyebrow">حمایت و انگیزه</p>
          <h2 className="card__title">
            <span role="img" aria-hidden="true">
              💬
            </span>
            {title}
          </h2>
        </div>
      </header>
      <p className="chat-card__description">{description}</p>

      <div className="chat-window" aria-live="polite">
        {messages.map((msg) => (
          <article
            key={msg.id}
            className={`chat-message chat-message--${msg.sender}`}
          >
            <div className="chat-message__bubble">
              <p>{msg.text}</p>
            </div>
            <footer className="chat-message__meta">
              <span>
                {msg.sender === 'coach'
                  ? 'مربی'
                  : msg.sender === 'system'
                    ? 'سیستم'
                    : 'شما'}
              </span>
              <span aria-hidden="true">•</span>
              <time dateTime={msg.time}>{msg.time}</time>
            </footer>
          </article>
        ))}
      </div>

      <div className="chat-input">
        <label className="sr-only" htmlFor="chat-message-input">
          ارسال پیام
        </label>
        <textarea
          id="chat-message-input"
          rows={2}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <button type="button" onClick={handleSend}>
          ارسال
        </button>
      </div>
    </section>
  )
}


