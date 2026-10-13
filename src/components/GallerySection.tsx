import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check, Train, Car } from 'lucide-react';
import { FIRM_PROFILE } from '../data/lawFirmData';

interface GallerySectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenQuoteModal }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const mapsQueryUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Law Office of Mark Bronstein 321 Walnut St Newton MA 02460'
  )}`;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(FIRM_PROFILE.fullAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <section id="find-us" className="py-16 sm:py-24 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 5 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-heading font-semibold tracking-widest text-[#c59b27] uppercase mb-2">
            FIND US
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153422] tracking-tight leading-tight">
            LAW OFFICE OF MARK BRONSTEIN ON GOOGLE MAPS
          </h2>
        </div>

        {/* Map Container with Floating Card matching Screenshot 5 */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 max-w-5xl mx-auto">
          
          {/* Floating Google Profile Card in top left corner matching Screenshot 5 */}
          <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-xs p-4 rounded-xl shadow-lg border border-slate-200/80 max-w-xs">
            <h3 className="font-bold text-sm text-slate-900 leading-snug">
              Law Office of Mark Bronstein
            </h3>
            <div className="flex items-center gap-1 text-xs text-slate-600 mt-1">
              <span className="font-bold text-slate-900">4.4</span>
              <span className="text-amber-500">★</span>
              <span className="text-slate-500">(5)</span>
              <span className="text-slate-400">· Lawyer</span>
            </div>
            <a
              href={mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Maps</span>
            </a>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="w-full h-[400px] sm:h-[480px]">
            <iframe
              title="Law Office of Mark Bronstein Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                '321 Walnut St, Newton, MA 02460'
              )}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Transit Bar at bottom */}
          <div className="bg-[#153422] text-white p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-1.5 text-slate-200">
                <MapPin className="w-4 h-4 text-[#c59b27]" />
                {FIRM_PROFILE.fullAddress}
              </span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Train className="w-4 h-4 text-[#c59b27]" />
                MBTA Commuter Rail (Newtonville Station · 2 min walk)
              </span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Car className="w-4 h-4 text-[#c59b27]" />
                Mass Pike (I-90 Exit 127)
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold text-xs uppercase rounded-xs transition-colors cursor-pointer shrink-0"
            >
              {copiedAddress ? 'Copied Address!' : 'Copy Address'}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
