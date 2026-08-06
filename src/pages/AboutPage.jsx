import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Award, CheckCircle, Calendar } from 'lucide-react';

export default function AboutPage({ onOpenAppointment }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      {/* Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #0d9488)', color: 'white', padding: '60px 5%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
          {path === '/director-message' && "Director's Message"}
          {path === '/mission-vision' && "Our Mission & Vision"}
          {path === '/goals' && "Our Strategic Goals"}
          {(path === '/about-us' || path === '/about') && "About Citizens Medical Centre"}
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
          Pioneering compassionate, high-quality, and accessible healthcare services for Dhanbad and surrounding regions.
        </p>
      </div>

      {/* Main Content */}
      <div className="section-padding" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Director Message view */}
        {path === '/director-message' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'center' }}>
            <div style={{ background: '#f1f5f9', borderRadius: '20px', padding: '20px', textAlign: 'center' }}>
              <img
                src="https://cmc.oneticktechnologies.com/assert/Images/Doctors/1739257284_doctor.png"
                alt="Director"
                style={{ width: '100%', borderRadius: '16px', marginBottom: '16px', objectFit: 'cover' }}
              />
              <h3 style={{ color: '#0f172a', margin: 0 }}>Dr. Abhishek Kumar Mishra</h3>
              <p style={{ color: '#0d9488', fontWeight: 600, fontSize: '0.9rem' }}>Medical Director & Founder</p>
            </div>

            <div>
              <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '20px' }}>
                "Healing with Competence, Serving with Compassion"
              </h2>
              <p style={{ color: '#475569', marginBottom: '16px', lineHeight: 1.8 }}>
                Welcome to Citizens Medical Centre (CMC Dhanbad). Our founding vision was to build a healthcare destination where patients in Jharkhand do not need to travel to distant metro cities for high-end surgeries, intensive care, or advanced diagnostics.
              </p>
              <p style={{ color: '#475569', marginBottom: '24px', lineHeight: 1.8 }}>
                We have invested heavily in world-class Level-III NICU facilities, laparoscopic modular operating theaters, state-of-the-art CT imaging, and a dedicated team of fellowship-trained doctors. Every patient who walks through our doors is treated with dignity, clinical rigor, and warmth.
              </p>

              <button className="btn-primary-teal" onClick={onOpenAppointment}>
                <Calendar size={18} /> Schedule Consultation
              </button>
            </div>
          </div>
        )}

        {/* Mission & Vision view */}
        {path === '/mission-vision' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div style={{ background: 'white', padding: '40px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(13,148,136,0.1)', color: '#0d9488', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Target size={28} />
              </div>
              <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>Our Mission</h2>
              <p style={{ color: '#475569', lineHeight: 1.8 }}>
                To deliver patient-centered healthcare of global standards through medical innovation, clinical precision, continuous quality improvement, and affordable multi-specialty care to all sections of society.
              </p>
            </div>

            <div style={{ background: 'white', padding: '40px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(6,182,212,0.1)', color: '#06b6d4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Eye size={28} />
              </div>
              <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>Our Vision</h2>
              <p style={{ color: '#475569', lineHeight: 1.8 }}>
                To be recognized as the most trusted healthcare institution in the region, setting benchmarks in clinical excellence, surgical safety, emergency response times, and patient satisfaction.
              </p>
            </div>
          </div>
        )}

        {/* Goals view */}
        {path === '/goals' && (
          <div>
            <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '40px' }}>Our Institutional Goals & Milestones</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                { title: "Zero-Delay Emergency Triage", desc: "Initiate emergency stabilization for cardiac and stroke patients within 10 minutes of arrival." },
                { title: "Infection-Free Operating Rooms", desc: "Maintain NABH-standard laminar airflow sterile operating suites for zero surgical infections." },
                { title: "Expanded Community Outreach", desc: "Conduct regular free diagnostic camps and diabetes management workshops across Dhanbad district." },
                { title: "24/7 Digital Patient Access", desc: "Provide real-time online appointment scheduling and digital lab report delivery." }
              ].map((g, i) => (
                <div key={i} style={{ background: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <Award size={32} color="#0d9488" style={{ marginBottom: '16px' }} />
                  <h3 style={{ color: '#0f172a', fontSize: '1.2rem', marginBottom: '10px' }}>{g.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Default About US view */}
        {(path === '/about-us' || path === '/about') && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="section-subtitle">Excellence in Healthcare</span>
              <h2 style={{ fontSize: '2.2rem', color: '#0f172a', marginBottom: '20px' }}>
                State-of-the-Art Hospital in Dhanbad
              </h2>
              <p style={{ color: '#475569', marginBottom: '16px', lineHeight: 1.8 }}>
                Citizens Medical Centre (CMC Dhanbad) is located conveniently near Binod Bihari Chowk. Designed as a modern multi-specialty medical hub, we feature comprehensive inpatient wards, critical care ICUs, Level-III NICU, and 15+ specialized centers of care.
              </p>
              <p style={{ color: '#475569', marginBottom: '24px', lineHeight: 1.8 }}>
                Our medical staff comprises experienced consultants across Cardiology, Gynecology, Pediatrics, General Surgery, Orthopedics, Urology, Radiology, and Emergency Medicine.
              </p>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Link to="/mission-vision" className="btn-primary-teal">
                  Read Mission & Vision
                </Link>
                <Link to="/director-message" style={{ padding: '10px 20px', borderRadius: '25px', border: '1px solid #0d9488', color: '#0d9488', fontWeight: 600 }}>
                  Director's Message
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
                alt="Hospital Facility"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
