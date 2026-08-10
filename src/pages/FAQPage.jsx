import React, { useState } from 'react';
import { faqsData } from '../data/faqs';
import SEO from '../components/SEO';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col">
      <SEO title="Frequently Asked Questions | Citizens Medical Centre" />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-20 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">Frequently Asked Questions</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Find answers to common questions about our hospital services, billing, and patient care.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-4">
          {faqsData.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-surface border rounded-[16px] overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary shadow-md' : 'border-outline-variant shadow-sm'}`}
            >
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-surface hover:bg-surface-variant/50 transition-colors cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-label-bold text-lg pr-4 ${openIndex === index ? 'text-primary' : 'text-on-surface'}`}>
                  {faq.question}
                </span>
                <span className={`material-symbols-outlined text-outline transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`}>
                  expand_more
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-2 text-on-surface-variant font-body-md border-t border-outline-variant/30 mt-2 mx-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
