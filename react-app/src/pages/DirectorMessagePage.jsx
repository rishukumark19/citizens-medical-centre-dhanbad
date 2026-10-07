import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import AppointmentModal from '../components/AppointmentModal';

export default function DirectorMessagePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col bg-surface">
      <SEO title="Director's Message | Citizens Medical Centre Dhanbad" description="Read the message from the directors of Citizens Medical Centre, Dhanbad about our commitment to quality patient care." />
      
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-primary via-[#0a6bbf] to-secondary py-20 md:py-24 px-margin-mobile md:px-gutter text-center overflow-hidden">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/30 blur-2xl pointer-events-none" 
        />

        <motion.div 
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[13px] font-bold mb-4 border border-white/25 shadow-sm">
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>supervised_user_circle</span>
            Leadership Message
          </span>
          <h1 className="text-display-lg text-white mb-4 drop-shadow-sm font-bold">Director's Message</h1>
          <p className="text-white/85 text-body-lg max-w-2xl mx-auto leading-relaxed">
            A commitment to excellence, compassion, and patient-centered care.
          </p>
        </motion.div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-16 md:gap-20">
        
        {/* Main Director Card */}
        <section>
          <ScrollReveal direction="up" duration={0.8}>
            <div className="bg-white p-8 md:p-14 rounded-[32px] border border-outline-variant/60 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 md:gap-14 items-center relative z-10">
                
                <ScrollReveal direction="right" delay={0.1} duration={0.8}>
                  <div className="relative rounded-[28px] overflow-hidden shadow-2xl h-[320px] md:h-[420px] bg-surface-container border border-outline-variant/50 group/photo">
                    <img 
                      loading="lazy" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuABw9IwhSgc7hAQDg9rEXr2ljaRuhRJeBDjJjXJARSRVNg-6PoQi0DLTn3XOCSl5n_sRf5bvtlcaKYu7xaGPS7op4uty_rKxYSlkwgAxIeIvCf_W5B2amr_fzMlIwfa16CQGi00Hac_-8w7f9AnAsJ70qsBJbs11RBU7p_GLfDk9IguI4m0kJIKBYZ_QPW4PISeBGQVngixxlnOIuHhlZbAHkZX4khGlHTZLGdSJXeRGnDhZ5chijUm3w" 
                      alt="Citizens Medical Centre Leadership" 
                      className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                      <span className="font-bold block text-lg tracking-tight">Board of Directors</span>
                      <span className="text-secondary text-xs font-semibold uppercase tracking-wider mt-1 block">Citizens Medical Centre, Dhanbad</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.15} duration={0.8}>
                  <div className="flex flex-col gap-6">
                    <span className="section-pill inline-flex items-center gap-1.5 w-fit">
                      <span className="material-symbols-outlined text-[14px]">format_quote</span>
                      DIRECTOR'S MESSAGE
                    </span>

                    <blockquote className="text-on-surface-variant text-body-lg italic leading-relaxed border-l-4 border-primary pl-5 py-1">
                      "At CMC Dhanbad we are committed to provide highest quality of care to our patients as we believe that every life counts. Our dedicated team of highly skilled doctors supported by our nurses and para medical staffs work tirelessly to ensure personalised and comprehensive treatment and care for each patient. We believe in a holistic approach to healthcare focussing not only on treating illness but also on promoting overall wellbeing of society. We understand that seeking medical care can be a challenging experience but our compassionate staff are here to support you in every step. Thank you for trusting us with your healthcare needs."
                    </blockquote>

                    <div className="pt-6 border-t border-outline-variant/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h4 className="text-headline-md font-bold text-on-surface text-lg">Warm Regards</h4>
                        <p className="text-sm font-label-bold text-primary tracking-wide">OUR DIRECTORS — Citizens Medical Centre</p>
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setModalOpen(true)}
                        className="bg-gradient-to-r from-primary to-secondary text-white px-7 py-3 rounded-full text-label-bold font-label-bold hover:shadow-lg transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                        Book Appointment
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </motion.button>
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Certified and Experienced Doctors Block */}
        <section>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-surface-container-low p-8 md:p-14 rounded-[32px] border border-outline-variant/60 shadow-md text-center max-w-4xl mx-auto relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <span className="section-pill inline-flex items-center gap-1.5 mb-3">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  Our Clinical Strength
                </span>
                <h3 className="text-headline-lg text-on-surface mb-4 font-bold">Certified and Experienced Doctors</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  At CMC Hospital, our team of certified and experienced doctors brings unparalleled expertise across various medical specialties. Each physician is committed to delivering exceptional care, staying updated with the latest advancements in medical science. With a patient-first approach, our doctors ensure that every treatment is customized to meet individual health needs, providing reliable, compassionate, and effective care at every step.
                </p>
                <Link 
                  to="/doctor" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-full font-label-bold hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-lg">group</span>
                  Meet Our Doctors
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
