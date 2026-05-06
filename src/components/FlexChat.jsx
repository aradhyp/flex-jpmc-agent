import { useState } from 'react';
import { SendHorizontal, Sparkles } from 'lucide-react';
import { generateFlexReply } from '../lib/agentResponses.js';

const starters = ['How should I split my paycheck?', 'Which Chase product fits me?', 'Am I ready for credit?', 'How do I build the American dream?'];

export function FlexChat({ profile, moneyPlan, recommendations }) {
  const [messages, setMessages] = useState([
    {
      role: 'agent',
      content: 'Hi, I’m FLEX. I can help you map your first income, save automatically, and choose an age-appropriate Chase pathway.'
    }
  ]);
  const [draft, setDraft] = useState('');

  const send = (text = draft) => {
    const clean = text.trim();
    if (!clean) return;
    const reply = generateFlexReply(clean, profile, moneyPlan, recommendations);
    setMessages((current) => [
      ...current,
      { role: 'user', content: clean },
      { role: 'agent', content: reply }
    ]);
    setDraft('');
  };

  return (
    <section id="ask-flex" className="card section-card chat-panel">
      <p className="eyebrow">Step 5</p>
      <h2>Ask FLEX</h2>
      <p className="section-copy">A lightweight rule-based chat layer demonstrates how the agent can coach without storing sensitive financial data.</p>

      <div className="starter-row">
        {starters.map((starter) => (
          <button key={starter} onClick={() => send(starter)}>
            <Sparkles size={14} /> {starter}
          </button>
        ))}
      </div>

      <div className="messages" aria-live="polite">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>

      <form
        className="chat-input"
        onSubmit={(event) => {
          event.preventDefault();
          send();
        }}
      >
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask about saving, checking, or credit readiness..."
        />
        <button type="submit" aria-label="Send message">
          <SendHorizontal size={18} />
        </button>
      </form>
    </section>
  );
}
