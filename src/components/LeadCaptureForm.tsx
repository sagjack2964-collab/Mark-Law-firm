import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Scale, Phone, Lock, Clock } from 'lucide-react';
import { FIRM_PROFILE } from '../data/lawFirmData';

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  defaultService?: string;
  onSuccess?: () => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  title = 'CONFIDENTIAL CASE EVALUATION',
  subtitle = 'Direct review with Attorney Mark Bronstein. Prompt response.',
  compact = false,
  defaultService = '',
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredMethod, setPreferredMethod] = useState<'phone' | 'sms' | 'email'>('phone');
  const [matterType, setMatterType] = useState(defaultService || 'Social Security Disability');
  const [message, setMessage] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!phone.trim() || phone.length < 7) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 700);
  };

  return (
    <div className="bg-white border-2 border-[#153422] rounded-sm shadow-2xl p-6 sm:p-8 text-slate-800 relative">
      <div className="border-b border-slate-200 pb-4 mb-5">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#c59b27]" />
            <span className="text-xs font-heading font-bold text-[#c59b27] uppercase tracking-wider">
              LAW OFFICE OF MARK BRONSTEIN
            </span>
          </div>
          <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            Confidential
          </span>
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#153422] tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          {subtitle}
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-8 text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
            <CheckCircle2 className="w-6 h-6 text-emerald-700" />
          </div>
          <h4 className="font-heading font-bold text-2xl text-slate-900">
            INQUIRY TRANSMITTED
          </h4>
          <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
            Thank you, <strong>{fullName}</strong>. Attorney Mark Bronstein will review your inquiry regarding <strong>{matterType}</strong> and follow up via your preferred response method ({preferredMethod}).
          </p>
          <div className="p-3 bg-slate-50 rounded-sm text-xs text-slate-700 max-w-xs mx-auto border border-slate-200">
            For immediate assistance, call directly at{' '}
            <a href={`tel:${FIRM_PROFILE.phone}`} className="text-[#153422] font-bold hover:text-[#c59b27]">
              {FIRM_PROFILE.phoneFormatted}
            </a>.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          {errorMsg && (
            <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xs text-xs font-medium">
              {errorMsg}
            </div>
          )}

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Dawn Oates"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Phone Number (SMS ok) <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(617) 244-5551"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
              />
            </div>
          </div>

          {/* Email & Preferred Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Preferred Response Mode</label>
              <select
                value={preferredMethod}
                onChange={(e) => setPreferredMethod(e.target.value as 'phone' | 'sms' | 'email')}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-800 focus:bg-white focus:outline-none focus:border-[#153422]"
              >
                <option value="phone">Telephone Call</option>
                <option value="sms">SMS Text</option>
                <option value="email">Email</option>
              </select>
            </div>
          </div>

          {/* Matter Type */}
          <div>
            <label className="block text-slate-700 font-semibold mb-1">
              Primary Legal Matter <span className="text-rose-500">*</span>
            </label>
            <select
              value={matterType}
              onChange={(e) => setMatterType(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-800 focus:bg-white focus:outline-none focus:border-[#153422]"
            >
              <option value="Social Security Disability">Social Security Disability (SSDI / SSI)</option>
              <option value="Workers' Compensation">Workers' Compensation (DIA Claim)</option>
              <option value="Mediation & ADR">Mediation & Alternative Dispute Resolution</option>
              <option value="Lease / Roommate Agreement">Lease, Tenancy or Roommate Dispute</option>
              <option value="Multi-Agency Problem">Multi-Agency Intersection / Financial Glitch</option>
              <option value="General Consultation">General Legal Consultation</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-slate-700 font-semibold mb-1">
              Brief Description of Situation
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe what occurred, any agency letters, or upcoming deadlines..."
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
            />
          </div>

          {/* Urgency */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="modal-urgent"
              checked={isUrgent}
              onChange={(e) => setIsUrgent(e.target.checked)}
              className="rounded-xs border-slate-300 text-[#153422] focus:ring-0"
            />
            <label htmlFor="modal-urgent" className="text-slate-600 text-xs flex items-center gap-1 cursor-pointer">
              <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Pending administrative or legal deadline</span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold text-base uppercase tracking-wider rounded-xs shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'TRANSMITTING REQUEST...' : 'SUBMIT CONFIDENTIAL INQUIRY'}</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strict attorney confidentiality.</span>
          </div>
        </form>
      )}
    </div>
  );
};
