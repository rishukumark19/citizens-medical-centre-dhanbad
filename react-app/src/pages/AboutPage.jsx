import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-surface">
      <SEO title="About Us | Citizens Medical Centre Dhanbad" description="Citizens Medical Centre is a 109 bedded leading super specialty hospital in Dhanbad providing high end health care." />
      
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
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Citizens Medical Centre
          </span>
          <h1 className="text-display-lg text-white mb-4 drop-shadow-sm font-bold">About Us</h1>
          <p className="text-white/85 text-body-lg max-w-2xl mx-auto leading-relaxed">
            Qualified and Experienced Medical Team at CMC Hospital, Dhanbad.
          </p>
        </motion.div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-16 md:gap-20">
        
        {/* Main About Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" duration={0.8}>
            <div className="group rounded-[28px] overflow-hidden shadow-2xl relative h-[280px] sm:h-[340px] md:h-[440px] border border-outline-variant/60">
              <img 
                loading="lazy" 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
                alt="CMC Hospital Dhanbad" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/30 px-3.5 py-1.5 rounded-full inline-block mb-2">109-Bedded Facility</span>
                <h4 className="text-xl md:text-2xl font-bold">Leading Super Specialty Hospital</h4>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1} duration={0.8}>
            <div className="flex flex-col gap-5">
              <span className="section-pill inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>apartment</span>
                About CMC
              </span>
              <h2 className="text-headline-lg text-on-surface leading-tight font-bold">
                Qualified and Experienced Medical Team at CMC Hospital, Dhanbad
              </h2>
              <p className="text-on-surface-variant text-body-lg leading-relaxed">
                Citizens Medical Centre, Dhanbad is a 109 bedded (proposed 150-bed) leading super specialty hospital of global standard dedicated to providing high end health care to the people of Dhanbad. We cater to all your health needs with special attention to Emergency medicine &amp; critical care with dedicated over 50% for neonatal, paediatric and adult critical care beds, premier operating facility, advanced laparoscopy setup, Birthing suite, 24x7 Radiology and laboratory.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Stats Strip */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: '109+', label: 'Hospital Beds', icon: 'bed', color: 'from-primary to-primary/85' },
            { value: '17+', label: 'Specialist Doctors', icon: 'stethoscope', color: 'from-secondary to-secondary/85' },
            { value: '20+', label: 'Specialties', icon: 'local_hospital', color: 'from-primary to-primary/85' },
            { value: '24/7', label: 'Accident & Emergency', icon: 'emergency', color: 'from-secondary to-secondary/85' }
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.08} direction="up">
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`p-6 md:p-8 rounded-[24px] flex flex-col items-center justify-center text-center text-white shadow-lg bg-gradient-to-br ${stat.color} relative overflow-hidden group`}
              >
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                </div>
                <span className="text-3xl md:text-4xl font-bold mb-1 tracking-tight">{stat.value}</span>
                <span className="text-xs md:text-sm font-label-bold uppercase tracking-wider opacity-90">{stat.label}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </section>

        {/* Why Choose Us */}
        <ScrollReveal direction="up" duration={0.7}>
          <div className="bg-surface-container-low p-8 md:p-12 rounded-[32px] border border-outline-variant/60 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="section-pill inline-flex items-center gap-1.5 mb-3">
                  <span className="material-symbols-outlined text-[14px]">shield</span>
                  Our Distinction
                </span>
                <h3 className="text-headline-lg text-on-surface mb-4 font-bold">Why Choose Us</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">
                  We believe in keeping the personal touch intact with continuous innovation and technological advancements happening in the medical field. We bring together an excellent team with a blend of experience and enthusiasm, ensuring that our patients receive the highest quality care that is both compassionate and cutting-edge.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[24px] border border-outline-variant/50 shadow-md flex flex-col gap-4">
                {[
                  { icon: 'verified', title: 'Continuous Innovation', desc: 'Integrating modern technologies with clinical expertise.', color: 'primary' },
                  { icon: 'favorite', title: 'Compassionate Care', desc: 'Personal touch in every step of diagnosis & treatment.', color: 'secondary' },
                  { icon: 'groups', title: 'Experienced Team', desc: 'Highly qualified specialists across all disciplines.', color: 'primary' },
                  { icon: 'emergency', title: '24/7 Availability', desc: 'Round-the-clock emergency and critical care support.', color: 'secondary' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-4 ${idx > 0 ? 'border-t border-outline-variant/40 pt-4' : ''} transition-all`}
                  >
                    <div className={`w-12 h-12 rounded-2xl ${item.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} flex items-center justify-center shrink-0`}>
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-base">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dedicated to Provide Best Treatment */}
        <ScrollReveal direction="up" duration={0.7}>
          <div className="bg-white p-8 md:p-12 rounded-[32px] border border-outline-variant/60 shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <span className="section-pill inline-flex items-center gap-1.5 mb-3">
                <span className="material-symbols-outlined text-[14px]">stars</span>
                Clinical Excellence
              </span>
              <h3 className="text-headline-lg text-on-surface mb-4 font-bold">Dedicated to Provide Best Treatment</h3>
              <p className="text-on-surface-variant text-body-lg leading-relaxed">
                At CMC Hospital Dhanbad, we believe that cutting-edge technology is key to delivering superior healthcare. We continuously invest in the latest medical equipment and innovative technologies to ensure accurate diagnoses and effective treatments. Our state-of-the-art facilities are designed to provide patients with the highest level of care, from advanced imaging systems to minimally invasive surgical techniques. By integrating modern technology with our skilled medical team, we enhance patient outcomes and elevate the standard of healthcare. Experience the future of medicine today at CMC Hospital, where better technologies lead to better healthcare.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Additional Services & Opening Hours Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Services */}
          <div className="flex flex-col gap-6 justify-between">
            {[
              {
                icon: 'psychology',
                title: 'Mental Health Services',
                desc: 'Mental health services offer support, therapy, and treatment for emotional and psychological well-being.',
                bg: 'bg-primary/10 text-primary'
              },
              {
                icon: 'vaccines',
                title: 'Vaccination Services',
                desc: 'Vaccination services provide immunizations to protect individuals from infectious diseases and promote public health.',
                bg: 'bg-secondary/10 text-secondary'
              }
            ].map((srv, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="right">
                <motion.div 
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-[28px] border border-outline-variant/60 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex gap-5 items-start"
                >
                  <div className={`w-14 h-14 rounded-2xl ${srv.bg} flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{srv.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-headline-md text-on-surface mb-2 text-xl font-bold">{srv.title}</h4>
                    <p className="text-on-surface-variant text-body-md leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Opening Hours */}
          <ScrollReveal direction="left" delay={0.15}>
            <div className="bg-gradient-to-br from-primary via-[#0d57a0] to-secondary text-white p-8 md:p-10 rounded-[32px] shadow-xl flex flex-col justify-between relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-white">schedule</span>
                  </div>
                  <h3 className="text-headline-md text-white font-bold">Opening Hours</h3>
                </div>
                <ul className="flex flex-col gap-3 text-sm text-white/90 font-medium mb-8">
                  <li className="flex justify-between border-b border-white/20 pb-2.5">
                    <span>Monday - Saturday</span>
                    <span className="font-bold text-white">10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-2.5">
                    <span>Sunday</span>
                    <span className="font-bold text-white">Prior Appointment Only</span>
                  </li>
                  <li className="flex justify-between pt-1">
                    <span>Emergency &amp; Trauma</span>
                    <span className="font-bold text-white flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      24 Hours Open
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider block mb-1">Need a Personal Health Plan?</span>
                <p className="text-sm text-white font-body-md leading-relaxed">
                  "We provide 24/7 emergency services to ensure your care anytime, anywhere!" Contact us today.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </section>

      </div>
    </div>
  );
}
