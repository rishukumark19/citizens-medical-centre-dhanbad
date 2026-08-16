import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function MissionVisionPage() {
  return (
    <div className="flex flex-col">
      <SEO title="Mission & Vision | Citizens Medical Centre Dhanbad" description="Read the official mission and vision statements of Citizens Medical Centre, Dhanbad." />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-16 md:py-24 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-tertiary-container font-bold text-sm uppercase tracking-widest block mb-2">Our Foundation</span>
          <h1 className="text-display-lg text-on-surface mb-4">Mission &amp; Vision</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Guiding principles driving clinical excellence and community care at CMC Dhanbad.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-16">
        
        {/* Welcome Section */}
        <div className="bg-surface-container-low p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-sm text-center max-w-4xl mx-auto">
          <span className="text-primary font-label-bold uppercase tracking-wider text-xs block mb-2">Welcome to Citizens Medical Centre</span>
          <h2 className="text-headline-lg text-on-surface mb-4">Compassionate Care Meets Clinical Excellence</h2>
          <p className="text-on-surface-variant text-body-lg leading-relaxed">
            Welcome to Citizens Medical Centre, Dhanbad where compassionate care meets clinical excellence. As a premier health care institution, we are committed to serving our community with integrity, innovation and unwavering commitment. With a team of highly skilled medical professionals and state-of-art facilities, we strive to deliver personalised care tailored to each patient's need.
          </p>
        </div>

        {/* Mission & Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-surface p-10 rounded-[32px] border border-outline-variant hover:shadow-xl transition-shadow flex flex-col items-center text-center relative overflow-hidden group">
            <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-on-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Primary Purpose</span>
            <h3 className="text-headline-lg text-on-surface mb-4 font-bold">Mission</h3>
            <p className="text-on-surface-variant text-body-lg leading-relaxed">
              To provide compassionate, high quality healthcare services to our community with commitment, integrity, and a relentless pursuit of excellence, ensuring every individual receives the highest standard of care and support they deserve.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-surface p-10 rounded-[32px] border border-outline-variant hover:shadow-xl transition-shadow flex flex-col items-center text-center relative overflow-hidden group">
            <div className="w-20 h-20 bg-tertiary-container rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-on-tertiary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
            </div>
            <span className="text-xs font-bold text-tertiary-container uppercase tracking-widest block mb-2">Future Vision</span>
            <h3 className="text-headline-lg text-on-surface mb-4 font-bold">Vision</h3>
            <p className="text-on-surface-variant text-body-lg leading-relaxed">
              To become an Institution par excellence and lead by example in providing compassionate, innovative, and cutting-edge healthcare to our community and beyond.
            </p>
          </div>

        </div>

        {/* Certified and Experienced Doctors Section */}
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-sm text-center max-w-4xl mx-auto">
          <span className="text-tertiary-container font-label-bold uppercase tracking-wider text-xs block mb-2">Clinical Team</span>
          <h3 className="text-headline-lg text-on-surface mb-4">Certified and Experienced Doctors</h3>
          <p className="text-on-surface-variant text-body-lg leading-relaxed mb-8">
            At CMC Hospital, our team of certified and experienced doctors brings unparalleled expertise across various medical specialties. Each physician is committed to delivering exceptional care, staying updated with the latest advancements in medical science. With a patient-first approach, our doctors ensure that every treatment is customized to meet individual health needs, providing reliable, compassionate, and effective care at every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
                            className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm"
            >
              Book Appointment
            </button>
            <Link 
              to="/doctor" 
              className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-label-bold hover:bg-surface-variant transition-colors"
            >
              View Specialists
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
