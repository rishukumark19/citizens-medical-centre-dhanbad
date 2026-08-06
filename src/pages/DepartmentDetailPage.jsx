import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, CheckCircle2, ArrowLeft, PhoneCall, UserCheck } from 'lucide-react';
import { departmentsData } from '../data/departments';
import { doctorsData } from '../data/doctors';

export default function DepartmentDetailPage({ onOpenAppointment }) {
  const { slug } = useParams();

  // Match current slug or normalized slug
  const currentDept = departmentsData.find(d => d.slug.toLowerCase() === (slug || '').toLowerCase()) || departmentsData[0];

  // Doctors in this department
  const deptDoctors = doctorsData.filter(doc => doc.category_id === currentDept.category_id);

  return (
    <div>
      {/* Department Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #0d9488)', color: 'white', padding: '60px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#06b6d4', fontWeight: 600, marginBottom: '16px' }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span style={{ display: 'block', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', color: '#94a3b8' }}>
            Center of Care
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '8px 0 16px' }}>{currentDept.title}</h1>
          <p style={{ maxWidth: '700px', opacity: 0.9, fontSize: '1.1rem' }}>{currentDept.shortDesc}</p>
        </div>
      </div>

      {/* Main Details Section */}
      <div className="section-padding" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '16px' }}>Overview & Clinical Focus</h2>
            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '30px' }}>
              {currentDept.longDesc}
            </p>

            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '20px' }}>Key Services & Procedures</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px', marginBottom: '40px' }}>
              {currentDept.keyServices.map((service, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <CheckCircle2 size={22} color="#0d9488" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{service}</span>
                </div>
              ))}
            </div>

            {/* Department Specialists */}
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '20px' }}>Department Specialists</h3>
            {deptDoctors.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
                {deptDoctors.map(doc => (
                  <div key={doc.id} className="doctor-card" style={{ padding: '16px', textOverflow: 'ellipsis' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '1.05rem', color: '#0f172a' }}>{doc.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '12px' }}>{doc.qualification}</p>
                    <button className="btn-primary-teal" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }} onClick={onOpenAppointment}>
                      Book Appointment
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#64748b' }}>Our consultants are on call 24/7. Contact reception for specific doctor rosters.</p>
            )}
          </div>

          {/* Sidebar CTA */}
          <div>
            <div style={{
              background: '#0f172a',
              color: 'white',
              borderRadius: '20px',
              padding: '30px',
              position: 'sticky',
              top: '100px',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Book Consultation</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '20px' }}>
                Schedule an appointment with our {currentDept.title} specialists today.
              </p>

              <button className="btn-primary-teal" style={{ width: '100%', justifyContent: 'center', marginBottom: '12px' }} onClick={onOpenAppointment}>
                <Calendar size={16} /> Book Online Now
              </button>

              <button className="btn-emergency" style={{ width: '100%', justifyContent: 'center' }} onClick={onOpenAppointment}>
                <PhoneCall size={16} /> Emergency Helpline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
