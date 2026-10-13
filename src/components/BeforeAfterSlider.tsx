import React from 'react';
import { SERVICE_TOWNS } from '../data/lawFirmData';

interface BeforeAfterSliderProps {
  onOpenQuoteModal?: (matter?: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-[#e9f0ea] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 1 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-heading font-semibold tracking-widest text-[#c59b27] uppercase mb-2">
            WHERE WE WORK
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153422] tracking-tight leading-tight">
            SERVING COMMUNITIES WE KNOW STREET BY STREET
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We focus our practice right here in Newton and Greater Boston. That means direct access to an attorney who knows local courts, administrative agencies, and community housing.
          </p>
        </div>

        {/* 6 Town Cards Grid matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_TOWNS.map((town, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-sm p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Zip Badge in top left matching Screenshot 1 */}
                <div className="inline-block bg-[#e9f0ea] text-[#153422] text-xs font-bold px-2.5 py-1 rounded-xs mb-3.5 tracking-wider font-heading">
                  {town.zip}
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#153422] tracking-tight mb-2.5">
                  {town.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {town.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal(`Legal assistance in ${town.name}`)}
                  className="font-heading font-bold text-sm sm:text-base text-[#c59b27] hover:text-[#b58c1d] tracking-wide inline-flex items-center gap-1 cursor-pointer group"
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
