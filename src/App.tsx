import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { AboutFeatures } from './components/AboutFeatures';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { FloatingLeadWidget } from './components/FloatingLeadWidget';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);
  const [modalMatter, setModalMatter] = useState<string>('');

  const handleOpenConsultationModal = (matter?: string) => {
    setModalMatter(matter || '');
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultationModal = () => {
    setIsConsultationModalOpen(false);
    setModalMatter('');
  };

  return (
    <div className="min-h-screen bg-[#f4f7f4] text-[#1b2b21] font-sans selection:bg-[#c59b27] selection:text-slate-950">
      {/* Header matching Screenshot 3 */}
      <Header onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Main Content Areas */}
      <main>
        {/* Hero Section with Glass Card & Gold Ribbon Bar (Screenshot 3) */}
        <Hero onOpenConsultationModal={handleOpenConsultationModal} />

        {/* WHAT WE DO: Full Service Disability & Dispute Advocacy (Screenshot 2) */}
        <ServicesSection onOpenQuoteModal={handleOpenConsultationModal} />

        {/* WHERE WE WORK: Serving Communities We Know Street by Street (Screenshot 1) */}
        <BeforeAfterSlider onOpenQuoteModal={handleOpenConsultationModal} />

        {/* WHY CHOOSE US & OUR STORY: 40+ Years Perspective (Screenshot 6) */}
        <AboutFeatures onOpenQuoteModal={handleOpenConsultationModal} />

        {/* FIND US ON GOOGLE MAPS: Interactive Map with Floating Card (Screenshot 5) */}
        <GallerySection onOpenQuoteModal={handleOpenConsultationModal} />

        {/* VERIFIED GOOGLE REVIEWS: 4.4★ Verified Client Testimonials */}
        <ReviewsSection />

        {/* NEED LEGAL COUNSEL TODAY? Banner (Screenshot 7) & Confidential Contact Form */}
        <ContactSection onOpenQuoteModal={handleOpenConsultationModal} />
      </main>

      {/* Deep Forest Green & Gold Footer (Screenshot 4) */}
      <Footer onOpenQuoteModal={handleOpenConsultationModal} />

      {/* Floating Call Widget */}
      <FloatingLeadWidget />

      {/* Confidential Consultation Modal */}
      <QuoteModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultationModal}
        defaultService={modalMatter}
      />
    </div>
  );
}
