import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, X, Scale, Send, CheckCircle2 } from 'lucide-react';
import { FIRM_PROFILE } from '../data/lawFirmData';

export const FloatingLeadWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setPhone('');
      setMessage('');
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Popover Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-90 bg-white border-2 border-[#153422] rounded-sm shadow-2xl p-5 text-slate-800 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#c59b27]" />
              <div>
                <h4 className="font-heading font-bold text-base text-[#153422]">DIRECT ATTORNEY ACCESS</h4>
                <p className="text-[11px] text-slate-500">Law Office of Mark Bronstein</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2 border-b border-slate-100">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${FIRM_PROFILE.phone}`}
                className="py-2.5 px-2 bg-[#153422] hover:bg-[#1f4a31] text-white rounded-xs font-heading font-bold text-sm tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Call Now</span>
              </a>

              <a
                href={`sms:${FIRM_PROFILE.phone}`}
                className="py-2.5 px-2 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 rounded-xs font-heading font-bold text-sm tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-slate-950" />
                <span>Text / SMS</span>
              </a>
            </div>

            <div className="text-center text-xs text-slate-600 pt-1 font-medium">
              Direct line: <a href={`tel:${FIRM_PROFILE.phone}`} className="font-bold text-[#153422]">{FIRM_PROFILE.phoneFormatted}</a>
            </div>
          </div>

          {/* Quick Note */}
          {isSubmitted ? (
            <div className="pt-3 text-center space-y-1">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
              <p className="text-xs text-emerald-900 font-bold">Message sent to Attorney Bronstein.</p>
              <p className="text-[10px] text-slate-500">We will respond promptly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-3 space-y-2 text-xs">
              <span className="text-[11px] font-heading font-bold text-slate-700 uppercase tracking-wider block">
                Leave a Quick Note
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (SMS ok)"
                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
              />
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Brief question..."
                className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold uppercase tracking-wider text-xs rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span>Send to Mark Bronstein</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 rounded-full shadow-lg border border-[#a8821d] transition-all hover:scale-105 cursor-pointer font-heading font-bold text-sm tracking-wider"
        aria-label="Direct contact with Attorney Mark Bronstein"
      >
        <Phone className="w-4 h-4 fill-slate-950" />
        <span>(617) 244-5551</span>
      </button>
    </div>
  );
};
