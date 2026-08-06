import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, Stethoscope, FileText, CheckCircle2 } from 'lucide-react';
import { doctorsData } from '../data/doctors';
import { departmentsData } from '../data/departments';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    doctor_id: '',
    message: '',
    date: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Filter doctors based on selected department
  const selectedDeptObj = departmentsData.find(d => d.slug === formData.department);
  const filteredDoctors = selectedDeptObj
    ? doctorsData.filter(doc => doc.category_id === selectedDeptObj.category_id)
    : doctorsData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', department: '', doctor_id: '', message: '', date: '' });
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header-custom">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
            <Calendar size={22} /> Book Your Medical Appointment
          </h3>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        <div className="modal-body-custom">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle2 size={64} color="#0d9488" style={{ marginBottom: '16px' }} />
              <h3 style={{ color: '#0f172a', marginBottom: '8px' }}>Appointment Request Received!</h3>
              <p style={{ color: '#64748b' }}>
                Thank you, <strong>{formData.name}</strong>. Our hospital front desk will call you shortly on <strong>{formData.phone}</strong> to confirm your schedule.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label><User size={14} style={{ inlineSize: 'auto', marginRight: '4px' }} /> Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control-custom"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label><Phone size={14} style={{ marginRight: '4px' }} /> Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-control-custom"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label><Mail size={14} style={{ marginRight: '4px' }} /> Email Address</label>
                  <input
                    type="email"
                    className="form-control-custom"
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label><Calendar size={14} style={{ marginRight: '4px' }} /> Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="form-control-custom"
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label><Stethoscope size={14} style={{ marginRight: '4px' }} /> Department *</label>
                <select
                  required
                  className="form-control-custom"
                  value={formData.department}
                  onChange={e => setFormData({ ...formData, department: e.target.value, doctor_id: '' })}
                >
                  <option value="">Select Department / Specialty</option>
                  {departmentsData.map(dept => (
                    <option key={dept.slug} value={dept.slug}>{dept.title}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label><User size={14} style={{ marginRight: '4px' }} /> Doctor *</label>
                <select
                  required
                  className="form-control-custom"
                  value={formData.doctor_id}
                  onChange={e => setFormData({ ...formData, doctor_id: e.target.value })}
                >
                  <option value="">Select Doctor</option>
                  {filteredDoctors.map(doc => (
                    <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialty})</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label><FileText size={14} style={{ marginRight: '4px' }} /> Message / Symptoms</label>
                <textarea
                  className="form-control-custom"
                  rows="3"
                  placeholder="Describe your query or symptoms briefly..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px' }}>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '25px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary-teal">
                  Confirm Booking
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
