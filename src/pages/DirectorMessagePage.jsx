import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function DirectorMessagePage({ onOpenAppointment }) {
  return (
    <div className="flex flex-col">
      <SEO title="Director's Message | Citizens Medical Centre Dhanbad" description="Read the message from the directors of Citizens Medical Centre, Dhanbad about our commitment to quality patient care." />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-16 md:py-24 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-tertiary-container font-bold text-sm uppercase tracking-widest block mb-2">Leadership Message</span>
          <h1 className="text-display-lg text-on-surface mb-4">Director's Message</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A commitment to excellence, compassion, and patient-centered care.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-16">
        
        {/* Main Director Card */}
        <div className="bg-surface-container-low p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-center">
            
            <div className="relative rounded-[28px] overflow-hidden shadow-xl h-[400px] bg-surface-container border border-outline-variant">
              <img 
                loading="lazy" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABw9IwhSgc7hAQDg9rEXr2ljaRuhRJeBDjJjXJARSRVNg-6PoQi0DLTn3XOCSl5n_sRf5bvtlcaKYu7xaGPS7op4uty_rKxYSlkwgAxIeIvCf_W5B2amr_fzMlIwfa16CQGi00Hac_-8w7f9AnAsJ70qsBJbs11RBU7p_GLfDk9IguI4m0kJIKBYZ_QPW4PISeBGQVngixxlnOIuHhlZbAHkZX4khGlHTZLGdSJXeRGnDhZ5chijUm3w" 
                alt="Director Dr. Abhishek Kumar Mishra" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="text-white font-bold block text-lg">Dr. Abhishek Kumar Mishra</span>
                <span className="text-tertiary-fixed text-xs font-semibold">Medical Director &amp; Consultant</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-primary font-label-bold uppercase tracking-wider text-xs bg-primary/10 px-4 py-1.5 rounded-full w-fit">
                <span className="material-symbols-outlined text-base">format_quote</span> DIRECTOR'S MESSAGE
              </div>

              <blockquote className="text-on-surface-variant text-body-lg italic leading-relaxed">
                "At CMC Dhanbad we are committed to provide highest quality of care to our patients as we believe that every life counts. Our dedicated team of highly skilled doctors supported by our nurses and para medical staffs work tirelessly to ensure personalised and comprehensive treatment and care for each patient. We believe in a holistic approach to healthcare focussing not only on treating illness but also on promoting overall wellbeing of society. We understand that seeking medical care can be a challenging experience but our compassionate staff are here to support you in every step. Thank you for trusting us with your healthcare needs."
              </blockquote>

              <div className="pt-6 border-t border-outline-variant/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="text-headline-md font-bold text-on-surface text-lg">Warm Regards</h4>
                  <p className="text-sm font-label-bold text-primary">OUR DIRECTORS — Citizens Medical Centre</p>
                </div>

                <button 
                  onClick={onOpenAppointment}
                  className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-label-bold font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  Book Appointment
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Certified and Experienced Doctors Block */}
        <div className="bg-surface p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-sm text-center max-w-4xl mx-auto">
          <span className="text-tertiary-container font-label-bold uppercase tracking-wider text-xs block mb-2">Our Clinical Strength</span>
          <h3 className="text-headline-lg text-on-surface mb-4">Certified and Experienced Doctors</h3>
          <p className="text-on-surface-variant text-body-lg leading-relaxed mb-8">
            At CMC Hospital, our team of certified and experienced doctors brings unparalleled expertise across various medical specialties. Each physician is committed to delivering exceptional care, staying updated with the latest advancements in medical science. With a patient-first approach, our doctors ensure that every treatment is customized to meet individual health needs, providing reliable, compassionate, and effective care at every step.
          </p>
          <Link 
            to="/doctor" 
            className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-label-bold hover:bg-surface-variant transition-colors"
          >
            Meet Our Doctors
            <span className="material-symbols-outlined text-sm">group</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
