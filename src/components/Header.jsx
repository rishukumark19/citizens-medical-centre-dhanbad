import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ChevronDown, Calendar, Menu, X, HeartPulse } from 'lucide-react';
import { departmentsData } from '../data/departments';

export default function Header({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const navigate = useNavigate();

  const toggleSubmenu = (menuName) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menuName ? null : menuName);
  };

  return (
    <header>
      {/* Top emergency header */}
      <div className="top-header">
        <div className="top-header-left">
          <div className="top-header-item">
            <MapPin size={15} />
            <span>CMC Dhanbad, Near Binod Bihari Chowk, Dhanbad, Jharkhand - 828104</span>
          </div>
          <div className="top-header-item">
            <Phone size={15} />
            <span>Emergency 24/7: +91 8802248261 / +91 9212209770</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/cmc.dhanbad/" target="_blank" rel="noreferrer"><Instagram size={14} /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook size={14} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={14} /></a>
          <a href="https://x.com/" target="_blank" rel="noreferrer"><Twitter size={14} /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar-main">
        <Link to="/" className="logo-container">
          <div className="logo-badge">
            <HeartPulse size={28} />
          </div>
          <div className="logo-text">
            <h1>Citizens Medical Centre</h1>
            <span>CMC Dhanbad | Multi-Specialty Hospital</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <div className="nav-item">
            <Link to="/">Home</Link>
          </div>

          <div className="nav-item">
            <a href="#about" onClick={e => { e.preventDefault(); navigate('/about-us'); }}>
              About Us <ChevronDown size={14} />
            </a>
            <div className="dropdown-menu-custom">
              <Link to="/about-us">About CMC</Link>
              <Link to="/director-message">Director Message</Link>
              <Link to="/mission-vision">Mission & Vision</Link>
              <Link to="/goals">Goals</Link>
            </div>
          </div>

          <div className="nav-item">
            <a href="#departments" onClick={e => { e.preventDefault(); }}>
              Centers Of Care <ChevronDown size={14} />
            </a>
            <div className="dropdown-menu-custom dropdown-mega">
              {departmentsData.map(dept => (
                <Link key={dept.slug} to={`/${dept.slug}`}>
                  {dept.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-item">
            <Link to="/doctor">Doctors</Link>
          </div>

          <div className="nav-item">
            <a href="#portal" onClick={e => { e.preventDefault(); }}>
              Patient Portal <ChevronDown size={14} />
            </a>
            <div className="dropdown-menu-custom">
              <Link to="/faq">Commonly Asked Questions</Link>
              <Link to="/blog">Patient Resources & Blogs</Link>
              <Link to="/international">International Patients</Link>
            </div>
          </div>

          <div className="nav-item">
            <Link to="/contact-us">Contact Us</Link>
          </div>

          <button className="btn-primary-teal" onClick={onOpenAppointment}>
            <Calendar size={16} /> Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'rgba(15,23,42,0.95)',
          color: 'white',
          zIndex: 2000,
          padding: '24px',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.25rem' }}>Menu</h2>
            <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', color: 'white' }}>
              <X size={28} />
            </button>
          </div>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.1rem' }}>
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            </li>

            <li>
              <div onClick={() => toggleSubmenu('about')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <span>About Us</span> <ChevronDown size={18} />
              </div>
              {activeMobileSubmenu === 'about' && (
                <ul style={{ paddingLeft: '16px', marginTop: '8px', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.9 }}>
                  <li><Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>About CMC</Link></li>
                  <li><Link to="/director-message" onClick={() => setMobileMenuOpen(false)}>Director Message</Link></li>
                  <li><Link to="/mission-vision" onClick={() => setMobileMenuOpen(false)}>Mission & Vision</Link></li>
                  <li><Link to="/goals" onClick={() => setMobileMenuOpen(false)}>Goals</Link></li>
                </ul>
              )}
            </li>

            <li>
              <div onClick={() => toggleSubmenu('care')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <span>Centers Of Care</span> <ChevronDown size={18} />
              </div>
              {activeMobileSubmenu === 'care' && (
                <ul style={{ paddingLeft: '16px', marginTop: '8px', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.9 }}>
                  {departmentsData.map(d => (
                    <li key={d.slug}>
                      <Link to={`/${d.slug}`} onClick={() => setMobileMenuOpen(false)}>{d.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/doctor" onClick={() => setMobileMenuOpen(false)}>Doctors</Link>
            </li>

            <li>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blogs & Patient Care</Link>
            </li>

            <li>
              <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
            </li>

            <li>
              <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </li>
          </ul>

          <div style={{ marginTop: '30px' }}>
            <button className="btn-primary-teal" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}>
              <Calendar size={18} /> Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
