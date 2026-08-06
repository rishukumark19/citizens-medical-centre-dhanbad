import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, HeartPulse, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { departmentsData } from '../data/departments';

export default function Footer({ onOpenAppointment }) {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div className="logo-badge" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>
              <HeartPulse size={22} />
            </div>
            <h3 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>Citizens Medical Centre</h3>
          </div>
          <p style={{ fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
            Citizens Medical Centre (CMC Dhanbad) is a premier multi-specialty hospital committed to providing advanced medical interventions, 24/7 emergency response, and compassionate care.
          </p>

          <div className="social-links">
            <a href="https://www.instagram.com/cmc.dhanbad/" target="_blank" rel="noreferrer"><Instagram size={16} /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook size={16} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
            <a href="https://x.com/" target="_blank" rel="noreferrer"><Twitter size={16} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Centers of Care</h4>
          <ul className="footer-links">
            {departmentsData.slice(0, 6).map(d => (
              <li key={d.slug}>
                <Link to={`/${d.slug}`}>{d.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about-us">About CMC</Link></li>
            <li><Link to="/director-message">Director Message</Link></li>
            <li><Link to="/mission-vision">Mission & Vision</Link></li>
            <li><Link to="/doctor">Find a Doctor</Link></li>
            <li><Link to="/blog">Patient Resources</Link></li>
            <li><Link to="/faq">Frequently Asked Questions</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact & Location</h4>
          <ul style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <li style={{ display: 'flex', gap: '10px' }}>
              <MapPin size={24} color="#06b6d4" style={{ flexShrink: 0 }} />
              <span>Samrat Mega Mart 2, Near Binod Bihari Chowk, Dhanbad, Jharkhand - 828104</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Phone size={18} color="#06b6d4" />
              <span>+91 8802248261 / +91 9212209770</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Mail size={18} color="#06b6d4" />
              <span>info@cmcdhanbad.in</span>
            </li>
          </ul>

          <button className="btn-emergency" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }} onClick={onOpenAppointment}>
            <Phone size={16} /> 24/7 Helpline & Booking
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Citizens Medical Centre (CMC Dhanbad). All Rights Reserved.</p>
      </div>
    </footer>
  );
}
