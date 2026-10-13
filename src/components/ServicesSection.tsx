import React from 'react';
import { PRACTICE_AREAS } from '../data/lawFirmData';

interface ServicesSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#f4f7f4] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 2 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-heading font-semibold tracking-widest text-[#c59b27] uppercase mb-2">
            WHAT WE DO
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153422] tracking-tight leading-tight">
            FULL SERVICE DISABILITY, INJURY & DISPUTE ADVOCACY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From complex administrative appeals to contentious tenancy agreements, one call covers it. Here is a sample of what we handle every week.
          </p>
        </div>

        {/* 6-Card Grid matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white border border-slate-200/80 rounded-sm p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#153422] tracking-tight mb-2.5">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {area.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuoteModal(area.title)}
                  className="font-heading font-bold text-sm sm:text-base text-[#c59b27] hover:text-[#b58c1d] tracking-wide inline-flex items-center gap-1 cursor-pointer group"
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Golden Action Button matching Screenshot 2 */}
        <div className="text-center">
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-8 py-3.5 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold text-base sm:text-lg tracking-wider uppercase transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>SEE ALL PRACTICE AREAS →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
