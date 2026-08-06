import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { faqsData } from '../data/faqs';

export default function FAQPage({ onOpenAppointment }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #0d9488)', color: 'white', padding: '60px 5%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Frequently Asked Questions</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
          Clear answers to common questions about hospital admissions, emergency services, visiting hours, and insurance.
        </p>
      </div>

      <div className="section-padding" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqsData.map((faq, idx) => (
            <div key={idx} style={{
              background: 'white',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <button
                onClick={() => toggleFaq(idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#0f172a',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <HelpCircle size={20} color="#0d9488" /> {faq.question}
                </span>
                <ChevronDown size={20} color="#64748b" style={{
                  transform: activeIndex === idx ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.25s ease'
                }} />
              </button>

              {activeIndex === idx && (
                <div style={{ padding: '0 24px 20px 56px', color: '#475569', lineHeight: 1.7 }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px', textAlignment: 'center', background: '#f1f5f9', padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: '#0f172a', marginBottom: '10px' }}>Still Have Questions?</h3>
          <p style={{ color: '#64748b', marginBottom: '20px' }}>Our patient care team is available 24/7 to assist you with any inquiry.</p>
          <button className="btn-primary-teal" onClick={onOpenAppointment}>
            <PhoneCall size={16} /> Contact Patient Support
          </button>
        </div>
      </div>
    </div>
  );
}
