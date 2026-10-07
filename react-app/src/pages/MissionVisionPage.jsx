import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import AppointmentModal from '../components/AppointmentModal';

export default function MissionVisionPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col bg-surface">
      <SEO title="Mission & Vision | Citizens Medical Centre Dhanbad" description="Read the official mission and vision statements of Citizens Medical Centre, Dhanbad." />
      
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
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
            Our Foundation
          </span>
          <h1 className="text-display-lg text-white mb-4 drop-shadow-sm font-bold">Mission &amp; Vision</h1>
          <p className="text-white/85 text-body-lg max-w-2xl mx-auto leading-relaxed">
            Guiding principles driving clinical excellence and community care at CMC Dhanbad.
          </p>
        </motion.div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-16 md:gap-20">
        
        {/* Welcome Section */}
        <section>
          <ScrollReveal direction="up" duration={0.8}>
            <div className="bg-surface-container-low p-8 md:p-14 rounded-[32px] border border-outline-variant/60 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden">
              <span className="section-pill inline-flex items-center gap-1.5 mb-3">
                <span className="material-symbols-outlined text-[14px]">local_hospital</span>
                Welcome to Citizens Medical Centre
              </span>
              <h2 className="text-headline-lg text-on-surface mb-4 font-bold">Compassionate Care Meets Clinical Excellence</h2>
              <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-3xl mx-auto">
                Welcome to Citizens Medical Centre, Dhanbad where compassionate care meets clinical excellence. As a premier health care institution, we are committed to serving our community with integrity, innovation and unwavering commitment. With a team of highly skilled medical professionals and state-of-art facilities, we strive to deliver personalised care tailored to each patient's need.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Mission & Vision Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card */}
          <ScrollReveal direction="right" delay={0.05} duration={0.8}>
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 md:p-12 rounded-[32px] border border-outline-variant/60 hover:border-primary/40 shadow-md hover:shadow-2xl transition-all flex flex-col items-center text-center relative overflow-hidden group h-full justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
              
              <div className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Primary Purpose</span>
                <h3 className="text-headline-lg text-on-surface mb-4 font-bold">Our Mission</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">
                  To provide compassionate, high quality healthcare services to our community with commitment, integrity, and a relentless pursuit of excellence, ensuring every individual receives the highest standard of care and support they deserve.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-outline-variant/40 w-full flex items-center justify-center gap-2 text-xs font-label-bold text-primary">
                <span className="material-symbols-outlined text-[16px]">verified</span> Compassion • Integrity • Excellence
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Vision Card */}
          <ScrollReveal direction="left" delay={0.15} duration={0.8}>
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 md:p-12 rounded-[32px] border border-outline-variant/60 hover:border-secondary/40 shadow-md hover:shadow-2xl transition-all flex flex-col items-center text-center relative overflow-hidden group h-full justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
              
              <div className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                </div>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">Future Vision</span>
                <h3 className="text-headline-lg text-on-surface mb-4 font-bold">Our Vision</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">
                  To become an Institution par excellence and lead by example in providing compassionate, innovative, and cutting-edge healthcare to our community and beyond.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-outline-variant/40 w-full flex items-center justify-center gap-2 text-xs font-label-bold text-secondary">
                <span className="material-symbols-outlined text-[16px]">auto_awesome</span> Innovation • Global Standards • Leadership
              </div>
            </motion.div>
          </ScrollReveal>

        </section>

        {/* Certified and Experienced Doctors Section */}
        <section>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-surface-container-lowest p-8 md:p-14 rounded-[32px] border border-outline-variant/60 shadow-md text-center max-w-4xl mx-auto relative overflow-hidden">
              <span className="section-pill inline-flex items-center gap-1.5 mb-3">
                <span className="material-symbols-outlined text-[14px]">groups</span>
                Clinical Team
              </span>
              <h3 className="text-headline-lg text-on-surface mb-4 font-bold">Certified and Experienced Doctors</h3>
              <p className="text-on-surface-variant text-body-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                At CMC Hospital, our team of certified and experienced doctors brings unparalleled expertise across various medical specialties. Each physician is committed to delivering exceptional care, staying updated with the latest advancements in medical science. With a patient-first approach, our doctors ensure that every treatment is customized to meet individual health needs, providing reliable, compassionate, and effective care at every step.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setModalOpen(true)}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-full font-label-bold hover:shadow-lg transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  Book Appointment
                </motion.button>
                <Link 
                  to="/doctor" 
                  className="bg-surface border border-outline-variant/80 text-on-surface hover:text-primary px-8 py-3.5 rounded-full font-label-bold hover:bg-surface-variant/40 transition-all inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  View Specialists
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
