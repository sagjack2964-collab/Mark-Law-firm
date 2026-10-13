import React, { useState } from 'react';
import { Scale, Phone, Menu, X } from 'lucide-react';
import { FIRM_PROFILE } from '../data/lawFirmData';

interface HeaderProps {
  onOpenConsultationModal: (matter?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultationModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Where We Work', href: '#service-areas' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Find Us', href: '#find-us' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo matching the reference brand style */}
        <a href="#home" className="flex items-center gap-3 group text-left">
          <div className="w-10 h-10 rounded-sm bg-[#153422] flex items-center justify-center text-[#c59b27] shrink-0">
            <Scale className="w-6 h-6 text-[#c59b27]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl sm:text-2xl text-[#153422] tracking-tight leading-none">
              LAW OFFICE OF MARK BRONSTEIN
            </span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
              Newton, MA · Admitted MA Bar 1980
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#c59b27] transition-colors py-1 hover:border-b-2 hover:border-[#c59b27]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary Phone Button (Golden rounded pill button matching reference screenshot 3) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${FIRM_PROFILE.phone}`}
            className="px-6 py-2.5 rounded-full bg-[#c59b27] hover:bg-[#b58c1d] text-slate-950 font-heading font-bold text-base tracking-wide transition-all shadow-sm flex items-center gap-2"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>{FIRM_PROFILE.phoneFormatted}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${FIRM_PROFILE.phone}`}
            className="p-2 bg-[#c59b27] text-slate-950 rounded-full"
            aria-label="Call office"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 border border-slate-300 rounded-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-md">
          <div className="flex flex-col space-y-2 border-b border-slate-100 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 font-heading text-lg py-1.5 hover:text-[#c59b27]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-1">
            <a
              href={`tel:${FIRM_PROFILE.phone}`}
              className="w-full py-3 rounded-full bg-[#c59b27] text-slate-950 font-heading font-bold text-center block text-lg shadow-sm"
            >
              CALL {FIRM_PROFILE.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
