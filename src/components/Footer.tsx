import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import { FIRM_PROFILE, PRACTICE_AREAS, SERVICE_TOWNS } from '../data/lawFirmData';

interface FooterProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#112a1b] text-slate-300 text-xs border-t border-[#1a3d28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        
        {/* 4 Columns matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#1c422c]">
          
          {/* Col 1 (5 cols): Logo, Brand & Address */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-[#c59b27] text-slate-950 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5 text-slate-950" />
              </div>
              <span className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
                LAW OFFICE OF MARK BRONSTEIN
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Licensed and insured legal representation for individuals and families in Newton and surrounding Massachusetts towns.
            </p>

            <div className="text-slate-300 text-xs space-y-1 pt-1 font-medium">
              <div>Law Office of Mark Bronstein</div>
              <div>{FIRM_PROFILE.address} {FIRM_PROFILE.suite}</div>
              <div>{FIRM_PROFILE.cityStateZip}</div>
              <div className="pt-1 text-[#c59b27] font-bold">
                {FIRM_PROFILE.phoneFormatted}
              </div>
              <div className="text-slate-400">
                Massachusetts Bar Admission (1980)
              </div>
            </div>
          </div>

          {/* Col 2 (2 cols): PAGES matching Screenshot 4 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#c59b27] uppercase tracking-wider">
              PAGES
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">Service Areas</a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-white transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#find-us" className="hover:text-white transition-colors">Find Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3 (3 cols): SERVICE AREAS matching Screenshot 4 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#c59b27] uppercase tracking-wider">
              SERVICE AREAS
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>Newton, MA 02460</li>
              <li>Watertown, MA 02472</li>
              <li>Waltham, MA 02451</li>
              <li>Wellesley, MA 02481</li>
              <li>Cambridge, MA 02138</li>
              <li>Boston & Greater Metro</li>
            </ul>
          </div>

          {/* Col 4 (2 cols): CALL US matching Screenshot 4 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#c59b27] uppercase tracking-wider">
              CALL US
            </h4>
            <div>
              <a
                href={`tel:${FIRM_PROFILE.phone}`}
                className="text-white hover:text-[#c59b27] font-heading font-bold text-base tracking-wider block"
              >
                {FIRM_PROFILE.phoneFormatted}
              </a>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Direct attorney response
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar matching Screenshot 4 */}
        <div className="pt-8 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} Law Office of Mark Bronstein. All rights reserved. Admitted Massachusetts Bar 1980.
        </div>

      </div>
    </footer>
  );
};
