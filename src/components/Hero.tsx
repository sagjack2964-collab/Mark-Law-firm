import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Scale, Star, MapPin } from 'lucide-react';
import { FIRM_PROFILE } from '../data/lawFirmData';

interface HeroProps {
  onOpenConsultationModal: (matter?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="home" className="relative bg-[#132f1f] text-white overflow-hidden">
      {/* Background subtle textured overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 cols): Punchy Headline, Bio & Dual Action Buttons */}
          <div className="lg:col-span-7 space-y-5">
            {/* Gold Kicker */}
            <div className="text-xs sm:text-sm font-heading font-semibold tracking-widest text-[#c59b27] uppercase">
              LICENSED ATTORNEY • ADMITTED MASSACHUSETTS BAR 1980
            </div>

            {/* Big Condensed Headline matching Screenshot 3 */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
              EXPERIENCED LEGAL COUNSEL IN NEWTON AND THE SURROUNDING TOWNS
            </h1>

            {/* Description Text */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
              The Law Office of Mark Bronstein is an established Massachusetts legal practice serving Newton, Watertown, Waltham, Boston, and communities statewide. The firm handles Social Security Disability (SSDI/SSI), Workers’ Compensation claims, complex multi-agency financial intersections, and dispute mediation. Contact: <a href={`tel:${FIRM_PROFILE.phone}`} className="text-[#c59b27] font-semibold underline">{FIRM_PROFILE.phoneFormatted}</a>.
            </p>

            {/* Action Buttons matching Screenshot 3 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={`tel:${FIRM_PROFILE.phone}`}
                className="px-7 py-3.5 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold text-lg tracking-wider transition-all shadow-md flex items-center justify-center gap-2 rounded-xs"
              >
                <span>CALL {FIRM_PROFILE.phoneFormatted}</span>
              </a>

              <a
                href="#services"
                className="px-7 py-3.5 border-2 border-[#c59b27] text-[#c59b27] hover:bg-[#c59b27]/10 font-heading font-bold text-lg tracking-wider transition-all flex items-center justify-center gap-2 rounded-xs"
              >
                <span>VIEW SERVICES →</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Translucent Glass Card with Gold Border matching Screenshot 3 */}
          <div className="lg:col-span-5">
            <div className="bg-[#173a27]/80 backdrop-blur-sm border border-[#c59b27]/50 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
              
              {/* Feature 1 */}
              <div className="space-y-1">
                <span className="font-heading font-bold text-base sm:text-lg text-[#c59b27] tracking-wider block">
                  LICENSED & EXPERIENCED
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  Admitted to the Massachusetts Bar in 1980 · 40+ Years Active Practice
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-1">
                <span className="font-heading font-bold text-base sm:text-lg text-[#c59b27] tracking-wider block">
                  PRACTICE FOCUS
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  Social Security Disability (SSDI/SSI), Workers' Comp, Dispute Mediation
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-1">
                <span className="font-heading font-bold text-base sm:text-lg text-[#c59b27] tracking-wider block">
                  DIRECT ATTORNEY ACCESS
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  Speak directly with Attorney Mark Bronstein without call-center gatekeepers
                </p>
              </div>

              {/* Button inside card */}
              <div className="pt-2 border-t border-[#c59b27]/30">
                <button
                  onClick={() => onOpenConsultationModal()}
                  className="w-full py-2.5 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold text-sm tracking-wider uppercase transition-colors cursor-pointer"
                >
                  REQUEST CONFIDENTIAL EVALUATION
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Gold Ribbon Banner directly below hero matching Screenshot 3 */}
      <div className="bg-[#c59b27] text-slate-950 font-heading font-bold text-xs sm:text-sm tracking-wider py-3 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-2 text-center uppercase">
          <span>ADMITTED MA BAR 1980</span>
          <span className="hidden sm:inline">|</span>
          <span>40+ YEARS EXPERIENCE</span>
          <span className="hidden sm:inline">|</span>
          <span>NO FEE UNLESS BENEFITS RECOVERED (SSDI)</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">DIRECT ATTORNEY ACCESS</span>
          <span className="hidden sm:inline">|</span>
          <a href={`tel:${FIRM_PROFILE.phone}`} className="hover:underline font-extrabold">
            {FIRM_PROFILE.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
};
