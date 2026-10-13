import React from 'react';
import { X } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-lg w-full my-8">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-stone-800 border border-stone-700 text-gray-300 hover:text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <LeadCaptureForm
          title="GET A FREE QUOTE"
          subtitle="Complete the form below to receive your zero-obligation estimate."
          defaultService={defaultService}
          onSuccess={() => {
            // keep success visible in modal or let user close
          }}
        />
      </div>
    </div>
  );
};
