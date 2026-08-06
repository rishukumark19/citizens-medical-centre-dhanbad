import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PhoneCall, ShieldCheck, HeartPulse, UserCheck, ArrowRight, Star, Clock, CheckCircle } from 'lucide-react';
import { departmentsData } from '../data/departments';
import { doctorsData } from '../data/doctors';
import { faqsData } from '../data/faqs';

export default function HomePage({ onOpenAppointment }) {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div>
      {/* Hero Banner Section */}
      <section className="hero-section">
        <div className="hero-overlay-bg"></div>
        <div className="hero-grid">
          <div className="hero-content">
            <span style={{
              display: 'inline-block',
              background: 'rgba(13,148,136,0.2)',
              color: '#06b6d4',
              padding: '6px 16px',
              borderRadius: '20px',
              fontWeight: 700,
              fontSize: '0.85rem',
              marginBottom: '16px',
              border: '1px solid rgba(6,182,212,0.3)'
            }}>
              ✨ Leading Healthcare in Dhanbad, Jharkhand
            </span>
            <h2>
              Your Health, Our Global Care — <span>Compassion Across Borders</span>
            </h2>
            <p>
              Citizens Medical Centre (CMC Dhanbad) brings world-class medical expertise, Level-III NICU & ICU critical care, advanced laparoscopic surgeries, and 24/7 emergency care right to your region.
            </p>
            <div className="hero-actions">
              <button className="btn-primary-teal" onClick={onOpenAppointment} style={{ padding: '14px 28px', fontSize: '1rem' }}>
                <Calendar size={18} /> Book Appointment
              </button>
              <Link to="/doctor" style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '30px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <UserCheck size={18} /> Find a Specialist
              </Link>
            </div>
          </div>

          <div className="hero-card-banner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <ShieldCheck size={32} color="#06b6d4" />
              <div>
                <h4 style={{ margin: 0, color: 'white', fontSize: '1.2rem' }}>24/7 Emergency & Trauma Unit</h4>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem' }}>Immediate Triage & Mobile ICU Ambulances</p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                <span style={{ color: '#cbd5e1' }}>Direct Helpline:</span>
                <strong style={{ color: '#06b6d4' }}>+91 8802248261</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: '#cbd5e1' }}>Location:</span>
                <strong style={{ color: 'white' }}>Binod Bihari Chowk, Dhanbad</strong>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Specialist Doctors</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Centers of Care</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">ICU & Emergency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Ribbon */}
      <div style={{ background: '#0f172a', padding: '16px 5%', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{
          background: 'linear-gradient(90deg, rgba(239,68,68,0.15), rgba(13,148,136,0.15))',
          borderRadius: '12px',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Clock size={24} color="#ef4444" />
            <div>
              <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Need Immediate Medical Assistance?</strong>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>Our critical care teams and trauma surgeons are available 24 hours a day.</p>
            </div>
          </div>
          <button className="btn-emergency" onClick={onOpenAppointment}>
            <PhoneCall size={16} /> Call Emergency Hotline
          </button>
        </div>
      </div>

      {/* Centers of Care / Specialties Section */}
      <section className="section-padding">
        <div className="section-title-wrap">
          <span className="section-subtitle">Excellence in Specialty Medicine</span>
          <h2 className="section-title">Our Centers of Care</h2>
          <p style={{ color: '#64748b', marginTop: '12px' }}>
            Comprehensive diagnostic, surgical, and therapeutic departments equipped with cutting-edge medical technologies.
          </p>
        </div>

        <div className="dept-grid">
          {departmentsData.map(dept => (
            <div key={dept.slug} className="dept-card">
              <div>
                <div className="dept-icon-box">
                  <HeartPulse size={26} />
                </div>
                <h3>{dept.title}</h3>
                <p>{dept.shortDesc}</p>
              </div>
              <Link to={`/${dept.slug}`} className="link-arrow">
                Explore Department <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Spotlight Section */}
      <section className="section-padding" style={{ background: '#f1f5f9' }}>
        <div className="section-title-wrap">
          <span className="section-subtitle">Expert Medical Professionals</span>
          <h2 className="section-title">Meet Our Leading Doctors</h2>
          <p style={{ color: '#64748b', marginTop: '12px' }}>
            Highly qualified consultants, surgeons, and specialists dedicated to personalized, compassionate care.
          </p>
        </div>

        <div className="doctors-grid">
          {doctorsData.slice(0, 6).map(doc => (
            <div key={doc.id} className="doctor-card">
              <div className="doctor-img-wrap">
                <img src={doc.image} alt={doc.name} onError={e => { e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'; }} />
              </div>
              <div className="doctor-info">
                <span className="doctor-badge">{doc.specialty}</span>
                <h4>{doc.name}</h4>
                <p className="doctor-qual">{doc.qualification}</p>
                <button
                  className="btn-primary-teal"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                  onClick={onOpenAppointment}
                >
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/doctor" className="btn-primary-teal" style={{ padding: '12px 28px' }}>
            View All 15 Doctors <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why Choose CMC Dhanbad */}
      <section className="section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
          <div>
            <span className="section-subtitle">Why Citizens Medical Centre</span>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Advanced Healthcare With a Human Touch
            </h2>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>
              At CMC Dhanbad, we combine clinical expertise with state-of-the-art diagnostic and surgical equipment. Our goal is to make high-end medical treatments accessible and comfortable for every family.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                "24/7 Emergency, Trauma Bay & ALS Ambulance Services",
                "Level-III Neonatal Intensive Care Unit (NICU)",
                "Minimally Invasive Laparoscopic Surgeries",
                "International Standard Patient Protocols & Infection Control",
                "Dedicated Cashless TPA Insurance Desks"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, color: '#0f172a' }}>
                  <CheckCircle size={20} color="#0d9488" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #0f172a, #0d9488)',
            borderRadius: '24px',
            padding: '40px',
            color: 'white',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Ready to Schedule Your Visit?</h3>
            <p style={{ opacity: 0.9, marginBottom: '28px' }}>
              Connect with our medical consultants today. Online appointments are processed instantly.
            </p>
            <button className="btn-primary-teal" style={{ background: '#ffffff', color: '#0f172a', width: '100%', justifyContent: 'center' }} onClick={onOpenAppointment}>
              <Calendar size={18} /> Schedule Appointment Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="section-title-wrap">
          <span className="section-subtitle">Patient Experiences</span>
          <h2 className="section-title">What Our Patients Say</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            {
              quote: "The emergency team at CMC Dhanbad acted instantly when my father suffered acute abdominal pain. The laparoscopic surgery was smooth and he was discharged in two days!",
              name: "Rajesh Kumar",
              role: "Dhanbad Resident"
            },
            {
              quote: "Dr. Isha Rani Mishra provided exceptional care during my high-risk delivery. The maternity ward and NICU facilities are truly world-class.",
              name: "Priya Sharma",
              role: "Maternity Patient"
            },
            {
              quote: "Clean environment, polite staff, and expert doctors. Highly recommended hospital for specialized orthopedic and gastro care.",
              name: "Amitabh Roy",
              role: "Patient"
            }
          ].map((t, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" />)}
              </div>
              <p style={{ fontStyle: 'italic', color: '#475569', marginBottom: '20px' }}>"{t.quote}"</p>
              <strong style={{ color: '#0f172a', display: 'block' }}>{t.name}</strong>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{t.role}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
