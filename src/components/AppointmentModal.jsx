import React, { useState } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Filter doctors based on selected department
  const selectedDeptObj = departmentsData.find(d => d.slug === formData.department);
  const filteredDoctors = selectedDeptObj
    ? doctorsData.filter(doc => doc.category_id === selectedDeptObj.category_id)
    : doctorsData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call to EmailJS / Formspree
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', phone: '', department: '', doctor_id: '', message: '', date: '' });
      }, 4000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-surface w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-primary text-on-primary p-6 flex justify-between items-center relative overflow-hidden">
          {/* Decorative subtle background icon */}
          <span className="material-symbols-outlined absolute -right-6 -top-6 text-[120px] text-white/10 rotate-12">calendar_month</span>
          
          <h3 className="text-headline-md font-bold flex items-center gap-2 relative z-10">
            <span className="material-symbols-outlined text-3xl">calendar_month</span>
            Book Appointment
          </h3>
          <button
            onClick={onClose}
            className="text-on-primary hover:bg-white/20 p-2 rounded-full transition-colors relative z-10"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-12 px-6 flex flex-col items-center">
              <span className="material-symbols-outlined text-6xl text-tertiary-container mb-4">check_circle</span>
              <h3 className="text-headline-md text-on-surface font-bold mb-2">Request Received!</h3>
              <p className="text-on-surface-variant max-w-md">
                Thank you, <strong className="text-on-surface">{formData.name}</strong>. Our front desk will call you shortly on <strong>{formData.phone}</strong> to confirm your schedule.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-label-bold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-primary">person</span> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="form-input w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 bg-surface text-on-surface"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-label-bold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-primary">phone</span> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="form-input w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 bg-surface text-on-surface"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-label-bold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-primary">mail</span> Email Address
                  </label>
                  <input
                    type="email"
                    className="form-input w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 bg-surface text-on-surface"
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-label-bold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-primary">event</span> Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    className="form-input w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 bg-surface text-on-surface"
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-label-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-primary">stethoscope</span> Department *
                </label>
                <select
                  required
                  className="form-select w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 bg-surface text-on-surface"
                  value={formData.department}
                  onChange={e => setFormData({ ...formData, department: e.target.value, doctor_id: '' })}
                >
                  <option value="">Select Department / Specialty</option>
                  {departmentsData.map(dept => (
                    <option key={dept.slug} value={dept.slug}>{dept.title}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-label-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-primary">medical_information</span> Doctor *
                </label>
                <select
                  required
                  className="form-select w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 bg-surface text-on-surface"
                  value={formData.doctor_id}
                  onChange={e => setFormData({ ...formData, doctor_id: e.target.value })}
                >
                  <option value="">Select Doctor</option>
                  {filteredDoctors.map(doc => (
                    <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialty})</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-label-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-primary">description</span> Message / Symptoms
                </label>
                <textarea
                  className="form-textarea w-full rounded-lg border-outline-variant focus:border-primary focus:ring focus:ring-primary/20 bg-surface text-on-surface"
                  rows="3"
                  placeholder="Describe your query or symptoms briefly..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full border border-outline text-on-surface hover:bg-surface-variant font-label-bold transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className={`px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-bold flex items-center gap-2 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-container hover:text-on-primary-container shadow-md'}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                      Submitting...
                    </>
                  ) : (
                    <>Confirm Booking</>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
