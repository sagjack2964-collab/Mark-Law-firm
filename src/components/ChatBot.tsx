import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Phone, 
  Scale, 
  Bot, 
  User, 
  Loader2, 
  Sparkles, 
  Calendar, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { FIRM_PROFILE } from '../data/lawFirmData';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface ChatBotProps {
  onOpenConsultationModal?: (matter?: string) => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onOpenConsultationModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreetingPrompt, setShowGreetingPrompt] = useState(true);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! Welcome to the Law Office of Mark Bronstein in Newton, MA. I can answer questions about Attorney Bronstein's 40+ years of experience, Social Security Disability appeals, Workers' Compensation claims, dispute mediation, fee structures, or help you schedule a consultation. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const starterQuestions = [
    "How do disability fees work?",
    "Can Mark help with a lease or roommate dispute?",
    "What if my SSDI claim was denied?",
    "How do I speak directly with Attorney Bronstein?"
  ];

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    setShowGreetingPrompt(false);
    setInput('');

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.map((m) => ({ role: m.role, text: m.text }))
        }),
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      const botReply = data.reply || "Thank you for reaching out. Please feel free to call Attorney Mark Bronstein directly at (617) 244-5551.";

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMessage: Message = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: "Attorney Mark Bronstein is readily available to answer your legal questions. You can call or text the office directly at (617) 244-5551 or submit a confidential case evaluation form.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Greeting Bubble Badge (Inspired by Screenshot 4: "Hi there! Have a question? Chat with us.") */}
      {showGreetingPrompt && !isOpen && (
        <div className="mb-3 bg-white border border-slate-200 shadow-xl rounded-xl p-3 pr-8 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 relative max-w-xs">
          <div className="w-10 h-10 rounded-full bg-[#153422] text-[#c59b27] flex items-center justify-center font-bold shrink-0">
            <Scale className="w-5 h-5 text-[#c59b27]" />
          </div>
          <div className="text-left">
            <span className="font-heading font-bold text-xs text-[#153422] block leading-snug">
              HAVE A LEGAL QUESTION?
            </span>
            <span className="text-[11px] text-slate-600 block leading-tight">
              Chat with Mark Bronstein's virtual assistant.
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowGreetingPrompt(false);
            }}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss greeting"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[92vw] sm:w-[400px] h-[540px] max-h-[80vh] bg-white border-2 border-[#153422] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-[#153422] text-white p-4 flex items-center justify-between border-b border-[#c59b27]/40 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#c59b27] text-slate-950 flex items-center justify-center font-bold shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-white tracking-wide leading-none">
                  MARK BRONSTEIN LEGAL CHAT
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] text-[#c59b27] mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Newton, MA · Online Assistant</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href={`tel:${FIRM_PROFILE.phone}`}
                className="p-1.5 text-slate-200 hover:text-[#c59b27] rounded-sm transition-colors"
                title={`Call ${FIRM_PROFILE.phoneFormatted}`}
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-200 hover:text-white rounded-sm transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Contact Bar inside Chat */}
          <div className="bg-[#0f2418] text-slate-300 text-[11px] px-3.5 py-1.5 flex items-center justify-between border-b border-[#1c3e29]">
            <span>Direct Office Line:</span>
            <a href={`tel:${FIRM_PROFILE.phone}`} className="text-[#c59b27] font-bold hover:underline">
              {FIRM_PROFILE.phoneFormatted} (Call / SMS)
            </a>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#f6f8f6] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-7 h-7 rounded-full bg-[#153422] text-[#c59b27] flex items-center justify-center shrink-0 mt-0.5">
                    <Scale className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-xl px-3.5 py-2.5 shadow-2xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#153422] text-white rounded-br-xs'
                      : 'bg-white border border-slate-200/90 text-slate-800 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line text-xs font-normal">{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-1 text-right ${
                      msg.role === 'user' ? 'text-slate-300' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-white border border-slate-200 rounded-xl px-3 py-2 w-fit">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#c59b27]" />
                <span>Assistant is drafting a response...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts if chat is early */}
          {messages.length <= 2 && !isLoading && (
            <div className="p-2.5 bg-white border-t border-slate-100 flex flex-wrap gap-1.5 shrink-0">
              <span className="text-[10px] font-heading font-bold text-slate-500 uppercase block w-full mb-0.5">
                COMMON QUESTIONS:
              </span>
              {starterQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-[#e9f0ea] hover:text-[#153422] text-slate-700 rounded-full text-[11px] font-medium transition-colors text-left cursor-pointer border border-slate-200"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Consultation Action Bar inside Chat */}
          <div className="bg-[#e9f0ea] px-3 py-2 border-t border-slate-200 flex items-center justify-between gap-2 text-[11px] shrink-0">
            <span className="text-slate-700 font-medium">Ready for an evaluation?</span>
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenConsultationModal) onOpenConsultationModal();
              }}
              className="px-2.5 py-1 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold uppercase rounded-xs transition-colors cursor-pointer text-xs"
            >
              Consultation Form →
            </button>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about SSDI, mediation, fees, or your case..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#153422]"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 bg-[#153422] hover:bg-[#1f4a31] disabled:opacity-40 text-white rounded-md transition-colors cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 text-[#c59b27]" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Toggle Button (Circular chat bubble matching reference style) */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowGreetingPrompt(false);
        }}
        className="w-14 h-14 rounded-full bg-[#153422] hover:bg-[#1d462f] text-white shadow-2xl flex items-center justify-center border-2 border-[#c59b27] transition-all hover:scale-105 cursor-pointer relative"
        aria-label="Open legal assistant chat"
      >
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#c59b27] border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
        </div>
        {isOpen ? (
          <X className="w-6 h-6 text-[#c59b27]" />
        ) : (
          <MessageSquare className="w-6 h-6 text-[#c59b27]" />
        )}
      </button>
    </div>
  );
};
