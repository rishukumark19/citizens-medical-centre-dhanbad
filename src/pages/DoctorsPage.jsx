import React, { useState } from 'react';
import { Search, Filter, Calendar, Award } from 'lucide-react';
import { doctorsData } from '../data/doctors';
import { departmentsData } from '../data/departments';

export default function DoctorsPage({ onOpenAppointment }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredDoctors = doctorsData.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'all' || doc.category_id === parseInt(selectedDept);
    return matchesSearch && matchesDept;
  });

  return (
    <div>
      {/* Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #0d9488)', color: 'white', padding: '60px 5%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Find a Specialist Doctor</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
          Our team of 15+ highly qualified consultants, surgeons, and specialists at Citizens Medical Centre (CMC Dhanbad).
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="section-padding" style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '40px' }}>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '40px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '14px' }} />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              className="form-control-custom"
              style={{ paddingLeft: '42px' }}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ minWidth: '220px' }}>
            <select
              className="form-control-custom"
              value={selectedDept}
              onChange={e => setSelectedDept(e.target.value)}
            >
              <option value="all">All Departments</option>
              {departmentsData.map(d => (
                <option key={d.slug} value={d.category_id}>{d.title}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doc => (
              <div key={doc.id} className="doctor-card">
                <div className="doctor-img-wrap">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'; }}
                  />
                </div>
                <div className="doctor-info">
                  <span className="doctor-badge">{doc.specialty}</span>
                  <h4>{doc.name}</h4>
                  <p className="doctor-qual">{doc.qualification}</p>
                  <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '16px', height: '60px', overflow: 'hidden' }}>
                    {doc.description}
                  </p>

                  <button
                    className="btn-primary-teal"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={onOpenAppointment}
                  >
                    <Calendar size={16} /> Book Consultation
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
              <h3>No doctors found matching your criteria.</h3>
              <p>Try resetting your search query or selecting a different department filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
