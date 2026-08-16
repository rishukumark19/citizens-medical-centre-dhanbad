import React from 'react';
import SEO from '../components/SEO';

export default function AboutPage({ onOpenAppointment }) {
  return (
    <div className="flex flex-col">
      <SEO title="About Us | Citizens Medical Centre Dhanbad" description="Citizens Medical Centre is a 109 bedded leading super specialty hospital in Dhanbad providing high end health care." />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-16 md:py-24 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-secondary font-bold text-sm uppercase tracking-widest block mb-2">Citizens Medical Centre</span>
          <h1 className="text-display-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">About Us</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Qualified and Experienced Medical Team at CMC Hospital, Dhanbad.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-16">
        
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[28px] overflow-hidden shadow-xl relative h-[420px] border border-outline-variant">
            <img 
              loading="lazy" 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
              alt="CMC Hospital Dhanbad" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold uppercase tracking-wider bg-primary px-3 py-1 rounded-full">109-Bedded Facility</span>
              <h4 className="text-xl font-bold mt-2">Leading Super Specialty Hospital</h4>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-primary font-label-bold uppercase tracking-wider text-xs bg-primary/10 px-3 py-1 rounded-full w-fit">About CMC</span>
            <h2 className="text-headline-lg text-on-surface leading-tight">Qualified and Experienced Medical Team at CMC Hospital, Dhanbad</h2>
            <p className="text-on-surface-variant text-body-lg leading-relaxed">
              Citizens Medical Centre, Dhanbad is a 109 bedded (proposed 150-bed) leading super specialty hospital of global standard dedicated to providing high end health care to the people of Dhanbad. We cater to all your health needs with special attention to Emergency medicine &amp; critical care with dedicated over 50% for neonatal, paediatric and adult critical care beds, premier operating facility, advanced laparoscopy setup, Birthing suite, 24x7 Radiology and laboratory.
            </p>
            <div className="mt-2">
              <button 
                onClick={onOpenAppointment}
                className="bg-primary text-on-primary px-6 py-3 rounded-full text-label-bold font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm inline-flex items-center gap-2"
              >
                Book Appointment
                <span className="material-symbols-outlined text-sm">calendar_month</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '109+', label: 'Hospital Beds', color: 'primary' },
            { value: '17+', label: 'Specialist Doctors', color: 'secondary' },
            { value: '20+', label: 'Specialties', color: 'primary' },
            { value: '24/7', label: 'Accident & Emergency', color: 'secondary' }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary to-secondary text-white shadow-md">
              <span className="text-4xl font-bold mb-1">{stat.value}</span>
              <span className="text-sm font-label-bold uppercase tracking-wider opacity-90">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-surface-container-low p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-secondary font-label-bold uppercase tracking-wider text-xs block mb-2">Our Distinction</span>
              <h3 className="text-headline-lg text-on-surface mb-4">Why Choose Us</h3>
              <p className="text-on-surface-variant text-body-lg leading-relaxed">
                We believe in keeping the personal touch intact with continuous innovation and technological advancements happening in the medical field. We bring together an excellent team with a blend of experience and enthusiasm, ensuring that our patients receive the highest quality care that is both compassionate and cutting-edge.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-[24px] border border-outline-variant shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-base">Continuous Innovation</h4>
                  <p className="text-sm text-on-surface-variant">Integrating modern technologies with clinical expertise.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-t border-outline-variant/60 pt-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-base">Compassionate Care</h4>
                  <p className="text-sm text-on-surface-variant">Personal touch in every step of diagnosis &amp; treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated to Provide Best Treatment */}
        <div className="bg-surface p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-sm">
          <div className="max-w-3xl">
            <span className="text-secondary font-label-bold uppercase tracking-wider text-xs block mb-2">Clinical Excellence</span>
            <h3 className="text-headline-lg text-on-surface mb-4">Dedicated to Provide Best Treatment</h3>
            <p className="text-on-surface-variant text-body-lg leading-relaxed">
              At CMC Hospital Dhanbad, we believe that cutting-edge technology is key to delivering superior healthcare. We continuously invest in the latest medical equipment and innovative technologies to ensure accurate diagnoses and effective treatments. Our state-of-the-art facilities are designed to provide patients with the highest level of care, from advanced imaging systems to minimally invasive surgical techniques. By integrating modern technology with our skilled medical team, we enhance patient outcomes and elevate the standard of healthcare. Experience the future of medicine today at CMC Hospital, where better technologies lead to better healthcare.
            </p>
          </div>
        </div>

        {/* Additional Services & Opening Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Services */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-[28px] border border-outline-variant shadow-sm flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <div>
                <h4 className="text-headline-md text-on-surface mb-2 text-xl font-bold">Mental Health Services</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Mental health services offer support, therapy, and treatment for emotional and psychological well-being.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-[28px] border border-outline-variant shadow-sm flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>vaccines</span>
              </div>
              <div>
                <h4 className="text-headline-md text-on-surface mb-2 text-xl font-bold">Vaccination Services</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  Vaccination services provide immunizations to protect individuals from infectious diseases and promote public health.
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-gradient-to-br from-primary to-secondary text-on-primary p-8 md:p-10 rounded-[32px] shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-3xl text-on-primary-container">schedule</span>
                <h3 className="text-headline-md text-on-primary font-bold">Opening Hours</h3>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-primary-fixed-dim font-medium mb-8">
                <li className="flex justify-between border-b border-primary-container/40 pb-1.5">
                  <span>Monday - Saturday</span>
                  <span className="font-bold text-on-primary">10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-primary-container/40 pb-1.5">
                  <span>Sunday</span>
                  <span className="font-bold text-on-primary">10:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-container/40 p-4 rounded-2xl border border-primary-container/60">
              <span className="text-xs font-bold text-tertiary-fixed uppercase tracking-wider block mb-1">Need a Personal Health Plan?</span>
              <p className="text-sm text-on-primary font-body-md">
                "We provide 24/7 emergency services to ensure your care anytime, anywhere!" Contact us today.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
