import React from 'react';
import { Scale, CheckCircle2, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { FIRM_PROFILE } from '../data/lawFirmData';

interface AboutFeaturesProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const AboutFeatures: React.FC<AboutFeaturesProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="our-story" className="py-16 sm:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 6 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-heading font-semibold tracking-widest text-[#c59b27] uppercase mb-2">
            WHY CLIENTS CHOOSE US
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153422] tracking-tight leading-tight">
            A LOCAL ATTORNEY YOU CAN ACTUALLY REACH
          </h2>
        </div>

        {/* 3 Feature Cards matching Screenshot 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white border border-slate-200 rounded-sm p-7 shadow-xs">
            <h3 className="font-heading font-bold text-xl text-[#153422] tracking-tight mb-2">
              DIRECT ATTORNEY ACCESS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You speak directly with Attorney Mark Bronstein. No revolving paralegals, no junior case hand-offs, and no remote call centers.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-sm p-7 shadow-xs">
            <h3 className="font-heading font-bold text-xl text-[#153422] tracking-tight mb-2">
              LICENSED & EXPERIENCED
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Admitted to the Massachusetts Bar in 1980. More than 40 years of trusted courtroom, hearing, and dispute resolution experience.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-sm p-7 shadow-xs">
            <h3 className="font-heading font-bold text-xl text-[#153422] tracking-tight mb-2">
              CONTINGENCY & STRAIGHT FEES
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No attorney fee on Social Security disability cases unless back benefits are recovered. Transparent, predictable fee arrangements.
            </p>
          </div>
        </div>

        {/* About Narrative Block matching bottom of Screenshot 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Story Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-heading font-semibold tracking-wider text-slate-500 uppercase">
              ABOUT LAW OFFICE OF MARK BRONSTEIN
            </div>
            <h3 className="font-heading font-bold text-3xl sm:text-4xl text-[#153422] tracking-tight leading-tight">
              OVER FOUR DECADES OF PERSONAL ADVOCACY IN NEWTON
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Mark Bronstein earned his law degree from <strong>Northeastern University School of Law</strong> and was admitted to the Massachusetts Bar in 1980. For over forty years, he has concentrated his legal practice on representing individuals facing administrative hurdles, workplace injuries, and difficult disputes.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Attorney Bronstein is particularly recognized for dissecting unique, outlier cases—such as complex glitches at the intersection of overlapping government benefit agencies (as highlighted in Dawn Oates' review), or transforming contentious roommate and lease disputes into tightly documented, legally binding separation agreements (as highlighted by Randy Fuller).
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Every client receives patient, jargon-free explanations of their rights, realistic assessment of options, and responsive telephone and text communication.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-6 py-3 bg-[#153422] hover:bg-[#1f4a31] text-white font-heading font-bold text-base tracking-wider transition-colors inline-flex items-center gap-2 rounded-xs cursor-pointer"
              >
                <span>DISCUSS YOUR CASE WITH MARK →</span>
              </button>
            </div>
          </div>

          {/* Right: Office Visual Credential Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#153422] text-white p-7 sm:p-8 rounded-sm shadow-xl space-y-5 border-t-4 border-[#c59b27]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xs bg-[#c59b27] text-slate-950 flex items-center justify-center font-heading font-bold text-2xl">
                  MB
                </div>
                <div>
                  <h4 className="font-heading font-bold text-2xl text-white tracking-tight leading-none">
                    MARK BRONSTEIN, ESQ.
                  </h4>
                  <p className="text-xs text-[#c59b27] font-semibold tracking-wider uppercase mt-1">
                    Newtonville, Massachusetts
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs border-t border-white/15">
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Bar Admission:</span>
                  <span className="font-bold text-white">Massachusetts (1980)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Education:</span>
                  <span className="font-bold text-white">Northeastern Univ. Law</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Office Location:</span>
                  <span className="font-bold text-white">321 Walnut St #450, Newton</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-300">Telephone / SMS:</span>
                  <span className="font-bold text-[#c59b27]">{FIRM_PROFILE.phoneFormatted}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-300">Google Rating:</span>
                  <span className="font-bold text-[#c59b27]">4.4 ★ (5 Reviews)</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 italic pt-1 leading-normal">
                “He took his time and explained it to me and in a way that I would understand! Definitely an A+ lawyer!” — Kim Soucy (Local Guide)
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
