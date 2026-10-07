import React from 'react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

export default function InternationalPatientsPage() {
  return (
    <div className="flex flex-col flex-1">
      <SEO title="International Patient Services | Citizens Medical Centre" />
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary via-[#0a6bbf] to-secondary py-24 px-margin-mobile md:px-gutter text-center overflow-hidden min-h-[60vh] flex flex-col justify-center items-center">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />

        <ScrollReveal className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6 shadow-xl backdrop-blur-md">
            <span className="material-symbols-outlined text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
          </div>
          <h1 className="text-display-lg text-white mb-6 drop-shadow-sm font-bold">International Patients</h1>
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white font-bold text-lg mb-6">
            Coming Soon
          </div>
          <p className="text-white/80 text-body-lg max-w-lg mx-auto">
            We are working hard to bring you comprehensive details about our International Patient Services. Please check back later!
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
