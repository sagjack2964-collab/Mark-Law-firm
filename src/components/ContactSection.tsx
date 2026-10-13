import React, { useState } from 'react';
import { Phone, Mail, MapPin, FileText, ChevronDown, Send, ShieldCheck, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { FIRM_PROFILE, FAQS } from '../data/lawFirmData';
import { ConsultationFormData } from '../types';

interface ContactSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredContact: 'phone',
    matterType: 'Social Security Disability',
    description: '',
    isUrgent: false,
    confidentialityAccepted: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <div id="contact">
      {/* Banner matching Screenshot 7: "NEED A PLUMBER TODAY?" adapted to legal */}
      <section className="bg-[#153422] text-white py-16 sm:py-20 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            NEED LEGAL COUNSEL TODAY?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Call or text now for direct assistance with your Social Security appeal, worker injury, or dispute mediation in Newton and surrounding communities.
          </p>

          <div className="pt-4 space-y-2">
            <a
              href={`tel:${FIRM_PROFILE.phone}`}
              className="inline-block px-9 py-4 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold text-xl sm:text-2xl tracking-wider rounded-xs transition-colors shadow-lg"
            >
              CALL {FIRM_PROFILE.phoneFormatted}
            </a>
            <div className="text-xs sm:text-sm text-[#c59b27] font-semibold tracking-wide">
              Tap to call from your phone · SMS accepted
            </div>
          </div>
        </div>
      </section>

      {/* Confidential Inquiry Form & Direct Directory */}
      <section className="py-16 sm:py-20 bg-[#f4f7f4] text-slate-800 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Directory */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-7 shadow-xs space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-xs font-heading font-bold tracking-wider text-[#c59b27] uppercase block">
                    DIRECT OFFICE DIRECTORY
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#153422] mt-0.5">
                    LAW OFFICE OF MARK BRONSTEIN
                  </h3>
                  <p className="text-xs text-slate-500">
                    Attorney at Law · Admitted to Massachusetts Bar in 1980
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-sm border border-slate-200 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-500 block">Telephone / SMS:</span>
                        <a
                          href={`tel:${FIRM_PROFILE.phone}`}
                          className="text-sm font-bold text-[#153422] hover:text-[#c59b27]"
                        >
                          {FIRM_PROFILE.phoneFormatted}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <a
                        href={`tel:${FIRM_PROFILE.phone}`}
                        className="px-2 py-1 bg-[#153422] text-white rounded-xs text-[11px] font-bold"
                      >
                        Call
                      </a>
                      <a
                        href={`sms:${FIRM_PROFILE.phone}`}
                        className="px-2 py-1 bg-[#c59b27] text-slate-950 rounded-xs text-[11px] font-bold"
                      >
                        SMS
                      </a>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-sm border border-slate-200 flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 block">Fax:</span>
                      <span className="text-sm font-medium text-slate-800">
                        {FIRM_PROFILE.fax}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-sm border border-slate-200 flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 block">Email:</span>
                      <a
                        href={`mailto:${FIRM_PROFILE.email}`}
                        className="text-sm font-medium text-slate-900 hover:text-[#c59b27] underline"
                      >
                        {FIRM_PROFILE.email}
                      </a>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-sm border border-slate-200 flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 block">Mailing Address:</span>
                      <p className="text-xs text-slate-800 font-medium leading-relaxed">
                        Law Office of Mark Bronstein<br />
                        {FIRM_PROFILE.address} {FIRM_PROFILE.suite}<br />
                        {FIRM_PROFILE.cityStateZip}
                      </p>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Plus Code: <strong>{FIRM_PROFILE.plusCode}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Confidential Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-xs">
              <div className="border-b border-slate-100 pb-3 mb-5">
                <span className="text-xs font-heading font-bold text-[#c59b27] uppercase tracking-wider block">
                  CONFIDENTIAL INQUIRY
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#153422] mt-0.5">
                  REQUEST A CASE EVALUATION
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Attorney Mark Bronstein personally reviews all messages and responds promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-sm text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-slate-900">
                    INQUIRY RECEIVED
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Attorney Mark Bronstein will review your inquiry regarding <strong>{formData.matterType}</strong> and follow up via your preferred response method ({formData.preferredContact}).
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-[#153422] text-white rounded-xs text-xs font-heading uppercase font-bold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(617) 244-5551"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Preferred Response Mode</label>
                      <select
                        value={formData.preferredContact}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredContact: e.target.value as 'phone' | 'sms' | 'email'
                          })
                        }
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-800 focus:bg-white focus:outline-none focus:border-[#153422]"
                      >
                        <option value="phone">Telephone Call</option>
                        <option value="sms">Text Message (SMS)</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Subject / Legal Matter <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.matterType}
                      onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-800 focus:bg-white focus:outline-none focus:border-[#153422]"
                    >
                      <option value="Social Security Disability">Social Security Disability (SSDI / SSI)</option>
                      <option value="Workers' Compensation">Workers' Compensation (DIA Claim)</option>
                      <option value="Mediation & ADR">Mediation & Alternative Dispute Resolution</option>
                      <option value="Lease / Roommate Agreement">Lease, Tenancy or Roommate Dispute</option>
                      <option value="Multi-Agency Problem">Multi-Agency Intersection / Administrative Glitch</option>
                      <option value="General Consultation">General Legal Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Summary of Legal Concern
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe what occurred, any agency deadlines, or lease issues..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xs text-slate-900 focus:bg-white focus:outline-none focus:border-[#153422]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold text-base tracking-wider uppercase transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer rounded-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT INQUIRY TO MARK BRONSTEIN</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* FAQs Accordion */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-heading font-bold text-[#c59b27] uppercase tracking-wider block mb-1">
                COMMON QUESTIONS
              </span>
              <h3 className="font-heading font-bold text-3xl text-[#153422]">
                FREQUENTLY ASKED LEGAL QUESTIONS
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-2.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-2xs"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-heading font-bold text-lg text-[#153422]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
