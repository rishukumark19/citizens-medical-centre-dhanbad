import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div>
      {/* Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #0d9488)', color: 'white', padding: '60px 5%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Contact Citizens Medical Centre</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
          We are here to assist you with general inquiries, appointments, emergency admissions, and patient feedback.
        </p>
      </div>

      <div className="section-padding" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '24px' }}>Get in Touch</h2>
            <p style={{ color: '#64748b', marginBottom: '30px' }}>
              Located conveniently in Dhanbad near Binod Bihari Chowk, our hospital facility is easily accessible with round-the-clock ambulance drop-off zones.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', background: 'rgba(13,148,136,0.1)', color: '#0d9488', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#0f172a', margin: '0 0 4px 0' }}>Hospital Address</h4>
                  <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>
                    Samrat Mega Mart 2, Near Binod Bihari Chowk, Dhanbad, Jharkhand - 828104
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', background: 'rgba(6,182,212,0.1)', color: '#06b6d4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#0f172a', margin: '0 0 4px 0' }}>Emergency & Reception Helpline</h4>
                  <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>
                    +91 8802248261 / +91 9212209770
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', background: 'rgba(16,185,129,0.1)', color: '#10b981', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#0f172a', margin: '0 0 4px 0' }}>Email Address</h4>
                  <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>
                    info@cmcdhanbad.in / support@cmcdhanbad.in
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', background: 'rgba(239,68,68,0.1)', color: '#ef4444', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#0f172a', margin: '0 0 4px 0' }}>Working Hours</h4>
                  <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem' }}>
                    Emergency & ICU: 24/7, 365 Days<br />
                    OPD Consultations: Mon – Sat (9:00 AM – 7:00 PM)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: 'white', padding: '36px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '20px' }}>Send Us a Message</h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <CheckCircle2 size={56} color="#0d9488" style={{ marginBottom: '16px' }} />
                <h4 style={{ color: '#0f172a' }}>Message Sent Successfully!</h4>
                <p style={{ color: '#64748b' }}>We have received your message and will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control-custom"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="form-control-custom"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control-custom"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    className="form-control-custom"
                    placeholder="General Inquiry / Feedback"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    required
                    rows="4"
                    className="form-control-custom"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary-teal" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
