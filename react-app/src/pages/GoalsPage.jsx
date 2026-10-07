import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import AppointmentModal from '../components/AppointmentModal';

export default function GoalsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const goalsList = [
    { title: "Reduce response time", desc: "Swift emergency interventions and instant triage during the Golden Hour.", icon: "bolt", color: "from-primary to-primary/80" },
    { title: "Enhance family centred care", desc: "Involving family members in decision-making and patient comfort.", icon: "family_restroom", color: "from-secondary to-secondary/80" },
    { title: "To reduce mortality and morbidity", desc: "Rigorous clinical protocols, 24/7 ICU vigilance, and evidence-based care.", icon: "health_and_safety", color: "from-primary to-primary/80" },
    { title: "Enhance interdisciplinary collaborations", desc: "Multi-specialty doctor panels working together for complex cases.", icon: "groups", color: "from-secondary to-secondary/80" },
    { title: "Promote Safe birth and breastfeeding practices", desc: "Dedicated birthing suites, fetal monitoring, and neonatal support.", icon: "child_care", color: "from-primary to-primary/80" },
    { title: "Develop Disaster preparedness plans", desc: "Rapid response protocols for regional emergencies and mass casualties.", icon: "shield", color: "from-secondary to-secondary/80" },
    { title: "Promote research and innovation", desc: "Adopting global medical advancements and continuous clinical improvement.", icon: "biotech", color: "from-primary to-primary/80" },
    { title: "Enhance staff training", desc: "Regular skill upgrades for nurses, paramedics, and medical personnel.", icon: "school", color: "from-secondary to-secondary/80" }
  ];

  return (
    <div className="flex flex-col bg-surface">
      <SEO title="Our Goals | Citizens Medical Centre Dhanbad" description="Discover the 8 key clinical goals and strategic objectives of Citizens Medical Centre, Dhanbad." />
      
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
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>flag_circle</span>
            Strategic Roadmap
          </span>
          <h1 className="text-display-lg text-white mb-4 drop-shadow-sm font-bold">Our Goals</h1>
          <p className="text-white/85 text-body-lg max-w-2xl mx-auto leading-relaxed">
            The 8 core objectives driving clinical care and hospital innovation at CMC Dhanbad.
          </p>
        </motion.div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-16 md:gap-20">
        
        {/* Intro Section */}
        <section>
          <ScrollReveal direction="up" duration={0.8}>
            <div className="bg-surface-container-low p-8 md:p-14 rounded-[32px] border border-outline-variant/60 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden">
              <span className="section-pill inline-flex items-center gap-1.5 mb-3">
                <span className="material-symbols-outlined text-[14px]">checklist</span>
                Welcome to Citizens Medical Centre
              </span>
              <h2 className="text-headline-lg text-on-surface mb-4 font-bold">Dedicated to Continuous Care Improvement</h2>
              <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-3xl mx-auto">
                Welcome to Citizens Medical Centre, Dhanbad where compassionate care meets clinical excellence. As a premier health care institution, we are committed to serving our community with integrity, innovation and unwavering commitment. With a team of highly skilled medical professionals and state-of-art facilities, we strive to deliver personalised care tailored to each patient's need.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Goals Cards Grid */}
        <section>
          <ScrollReveal className="text-center mb-10">
            <span className="section-pill inline-flex items-center gap-1.5 mb-3">
              <span className="material-symbols-outlined text-[14px]">track_changes</span>
              8 Strategic Milestones
            </span>
            <h3 className="text-headline-lg text-on-surface font-bold">Our Core Commitments</h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {goalsList.map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white p-6 md:p-7 rounded-[26px] border border-outline-variant/60 hover:border-primary/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${idx % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 shadow-sm`}>
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{goal.icon}</span>
                  </div>
                  <div className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-1.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Goal #{idx + 1}
                  </div>
                  <h4 className="text-headline-md text-on-surface text-lg font-bold mb-2.5 leading-snug group-hover:text-primary transition-colors">{goal.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{goal.desc}</p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-outline-variant/40 flex items-center justify-between text-xs font-bold text-primary">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-secondary">verified</span> Verified Standard
                  </span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certified and Experienced Doctors Section */}
        <section>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-surface-container-lowest p-8 md:p-14 rounded-[32px] border border-outline-variant/60 shadow-md text-center max-w-4xl mx-auto relative overflow-hidden">
              <span className="section-pill inline-flex items-center gap-1.5 mb-3">
                <span className="material-symbols-outlined text-[14px]">groups</span>
                Our Clinical Team
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
