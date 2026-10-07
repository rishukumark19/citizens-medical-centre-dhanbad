import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { departmentsData } from '../data/departments';
import { doctorsData } from '../data/doctors';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import NotFoundPage from './NotFoundPage';
import AppointmentModal from '../components/AppointmentModal';

export default function DepartmentDetailPage() {
  const { slug } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  
  const department = departmentsData.find(d => d.slug === slug);
  const deptDoctors = department 
    ? doctorsData.filter(doc => doc.category_id === department.category_id)
    : [];

  if (!department) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex flex-col">
      <SEO title={`${department.title} | Citizens Medical Centre`} description={department.shortDesc} />
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary via-[#0a6bbf] to-secondary pt-8 pb-20 md:pt-10 md:pb-24 px-margin-mobile md:px-gutter overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />

        {/* Top-left All Departments Navigation */}
        <div className="max-w-container-max mx-auto relative z-10 mb-6">
          <Link 
            to="/departments" 
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 py-2 rounded-full font-label-bold text-sm border border-white/20 hover:border-white/40 transition-all shadow-sm group w-fit"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span> 
            All Departments
          </Link>
        </div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[13px] font-bold mb-4 border border-white/25">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>{department.icon || 'local_hospital'}</span>
            Center of Excellence
          </div>
          <h1 className="text-display-lg text-white mb-4 font-bold drop-shadow-sm block">{department.title}</h1>
          <p className="text-white/80 text-body-lg max-w-xl mx-auto">
            {department.shortDesc}
          </p>
        </motion.div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
          
          {/* Main Content */}
          <div>
            {/* Hero Image */}
            <ScrollReveal className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 mb-10 h-[250px] md:h-[420px]">
              <img
                loading="lazy"
                src={department.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"}
                alt={department.title}
                className="w-full h-full object-cover"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.05}>
              <h2 className="text-headline-lg text-on-surface mb-5 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full bg-gradient-to-b from-primary to-secondary inline-block"></span>
                Overview
              </h2>
              <div 
                className="prose prose-lg prose-slate text-on-surface-variant max-w-none leading-relaxed mb-10 text-[15px]"
                dangerouslySetInnerHTML={{ __html: (department.longDesc || '').replace(/\n/g, '<br/>') }} 
              />
            </ScrollReveal>

            {/* Key Services */}
            {(department.keyServices || []).length > 0 && (
              <ScrollReveal delay={0.1}>
                <h3 className="text-headline-md text-on-surface mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 rounded-full bg-gradient-to-b from-secondary to-primary inline-block"></span>
                  Key Treatments &amp; Procedures
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                  {(department.keyServices || []).map((t, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-outline-variant/40 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
                    >
                      <span className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      </span>
                      <span className="font-semibold text-on-surface text-sm">{t}</span>
                    </motion.li>
                  ))}
                </ul>
              </ScrollReveal>
            )}

            {/* CTA */}
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden p-8 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-headline-md font-bold mb-2">Ready to Consult?</h3>
                  <p className="text-white/75 text-sm mb-5 max-w-md">
                    Our {department.title} specialists are available for consultations. Book an appointment today.
                  </p>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    Book Appointment
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6 sticky top-28">
            
            {/* Quick Appointment CTA */}
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-6 text-white">
                <span className="material-symbols-outlined text-3xl mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                <h3 className="font-bold text-lg mb-1">Quick Appointment</h3>
                <p className="text-white/70 text-sm mb-4">Skip the queue — schedule online.</p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3 bg-white text-primary font-bold rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  Book Now
                </button>
              </div>
            </ScrollReveal>

            {/* Our Specialists */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white rounded-3xl border border-outline-variant/40 shadow-sm p-6">
                <h3 className="font-bold text-on-surface text-base mb-5 flex items-center gap-2 border-b border-outline-variant/40 pb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>stethoscope</span>
                  Our Specialists
                </h3>
                
                {deptDoctors.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {deptDoctors.map((doc, i) => (
                      <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="flex items-center gap-3 p-3 hover:bg-surface-container-low rounded-2xl transition-all duration-200 group"
                      >
                        {doc.image ? (
                          <img
                            loading="lazy"
                            src={doc.image}
                            alt={doc.name}
                            className="w-14 h-14 rounded-2xl object-cover shadow-sm border-2 border-outline-variant/30 group-hover:border-primary/30 transition-colors shrink-0"
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                          </div>
                        )}
                        <div className="min-w-0">
                          <h4 className="font-bold text-on-surface text-sm leading-tight truncate group-hover:text-primary transition-colors">{doc.name}</h4>
                          <p className="text-xs text-on-surface-variant mt-0.5 truncate">{doc.specialty}</p>
                          <Link
                            to={`/doctor/${doc.id}`}
                            className="text-xs font-bold text-primary hover:text-secondary transition-colors mt-1 inline-flex items-center gap-0.5"
                          >
                            View Profile <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-on-surface-variant text-sm">No specialists listed currently.</p>
                )}
              </div>
            </ScrollReveal>

            {/* Emergency */}
            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-red-50 border border-red-100 rounded-3xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-red-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                  </span>
                  <h4 className="font-bold text-red-800 text-sm">24/7 Emergency</h4>
                </div>
                <p className="text-red-600/70 text-xs mb-3">For medical emergencies, call immediately.</p>
                <a
                  href="tel:+918235540809"
                  className="flex items-center gap-2 text-red-700 font-bold text-sm hover:text-red-900 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  +91 8235540809
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <AppointmentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultDepartment={department?.slug || ""}
      />
    </div>
  );
}
