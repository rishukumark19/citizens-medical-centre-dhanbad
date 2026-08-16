import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { departmentsData } from '../data/departments';
import AppointmentModal from './AppointmentModal';

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (menuName) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menuName ? null : menuName);
  };

  const isActive = (path) => location.pathname === path;
  const isParentActive = (paths) => paths.some(p => location.pathname.startsWith(p));

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-on-primary py-2 px-margin-mobile md:px-gutter text-xs font-bold hidden sm:flex justify-between items-center z-[60] relative shadow-sm">
        <div className="max-w-container-max mx-auto w-full flex justify-between items-center">
          <p className="flex items-center gap-1.5 opacity-90"><span className="material-symbols-outlined text-[14px]">emergency</span> CMC Dhanbad Emergency: +91 8235540809</p>
          <div className="flex gap-4 opacity-90">
            <p className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">emergency</span> Accident &amp; Emergency 24x7</p>
            <p className="flex items-center gap-1.5 border-l border-on-primary/30 pl-4"><span className="material-symbols-outlined text-[14px]">location_on</span> Binod Bihari Chowk, Dhanbad</p>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md shadow-primary/10' : ''}`}>
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-20">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo-cmc.png" alt="CMC Dhanbad Logo" className="h-12 w-auto" />
            <div className="hidden sm:flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-primary leading-none font-serif tracking-wide" style={{ transform: 'scaleY(1.1)' }}>CITIZENS</span>
              <span className="text-[11px] font-medium tracking-[0.2em] text-secondary leading-none mt-1.5">MEDICAL CENTER</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-label-bold font-label-bold hover:text-tertiary transition-colors duration-200 py-4 border-b-2 ${isActive('/') ? 'text-tertiary border-tertiary' : 'text-on-surface-variant dark:text-surface-variant border-transparent'}`}>
              Home
            </Link>

            <div className="relative group">
              <Link to="/about-us" className={`text-label-bold font-label-bold hover:text-tertiary transition-colors duration-200 flex items-center gap-1 py-4 border-b-2 ${isParentActive(['/about', '/director', '/mission', '/goals', '/gallery']) ? 'text-tertiary border-tertiary' : 'text-on-surface-variant dark:text-surface-variant border-transparent'}`}>
                About Us <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </Link>
              <div className="absolute top-[90%] left-0 bg-surface border border-outline-variant rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] py-2 flex flex-col z-50">
                <Link to="/about-us" className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant text-sm font-bold transition-colors">About CMC</Link>
                <Link to="/director-message" className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant text-sm font-bold transition-colors">Director Message</Link>
                <Link to="/mission-vision" className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant text-sm font-bold transition-colors">Mission & Vision</Link>
                <Link to="/goals" className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant text-sm font-bold transition-colors">Goals</Link>
                <Link to="/gallery" className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant text-sm font-bold transition-colors">Gallery</Link>
              </div>
            </div>

            <div className="relative group">
              <button className={`text-label-bold font-label-bold hover:text-tertiary transition-colors duration-200 flex items-center gap-1 py-4 border-b-2 ${isParentActive(['/cardiology', '/ortho', '/neuro', '/gynae', '/pedia', '/surgery', '/kidney', '/uro', '/radio', '/emergency', '/medicine']) ? 'text-tertiary border-tertiary' : 'text-on-surface-variant dark:text-surface-variant border-transparent'}`}>
                Centers of Care <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <div className="absolute top-[90%] left-1/2 -translate-x-1/2 bg-surface border border-outline-variant rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[600px] p-4 grid grid-cols-2 gap-2 z-50">
                {departmentsData.map(dept => (
                  <Link key={dept.slug} to={`/${dept.slug}`} className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant rounded-md text-sm font-bold transition-colors">
                    {dept.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/doctor" className={`text-label-bold font-label-bold hover:text-tertiary transition-colors duration-200 py-4 border-b-2 ${isActive('/doctor') ? 'text-tertiary border-tertiary' : 'text-on-surface-variant dark:text-surface-variant border-transparent'}`}>
              Doctors
            </Link>

            <div className="relative group">
              <button className={`text-label-bold font-label-bold hover:text-tertiary transition-colors duration-200 flex items-center gap-1 py-4 border-b-2 ${isParentActive(['/faq', '/blog', '/international', '/packages']) ? 'text-tertiary border-tertiary' : 'text-on-surface-variant dark:text-surface-variant border-transparent'}`}>
                Patient Portal <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <div className="absolute top-[90%] left-0 bg-surface border border-outline-variant rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[240px] py-2 flex flex-col z-50">
                <Link to="/faq" className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant text-sm font-bold transition-colors">Commonly Asked Questions</Link>
                <Link to="/blog" className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant text-sm font-bold transition-colors">Patient Resources & Blogs</Link>
                <Link to="/international" className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant text-sm font-bold transition-colors">International Patients</Link>
                <Link to="/packages" className="px-4 py-2 text-on-surface-variant hover:text-tertiary hover:bg-surface-variant text-sm font-bold transition-colors">Health Packages</Link>
              </div>
            </div>

            <Link to="/contact-us" className={`text-label-bold font-label-bold hover:text-tertiary transition-colors duration-200 py-4 border-b-2 ${isActive('/contact-us') ? 'text-tertiary border-tertiary' : 'text-on-surface-variant dark:text-surface-variant border-transparent'}`}>
              Contact Us
            </Link>
          </div>

          {/* Trailing Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-on-surface-variant">
              <a href="tel:+918235540809" aria-label="call" className="p-2 hover:bg-surface-variant rounded-full transition-colors flex items-center justify-center group">
                <span className="material-symbols-outlined text-xl text-primary group-hover:text-tertiary transition-colors">call</span>
              </a>
              <Link to="/contact-us" aria-label="location_on" className="p-2 hover:bg-surface-variant rounded-full transition-colors flex items-center justify-center group">
                <span className="material-symbols-outlined text-xl text-primary group-hover:text-tertiary transition-colors">location_on</span>
              </Link>
            </div>
            
            <button 
              onClick={() => setModalOpen(true)} 
              className="hidden md:inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-on-primary rounded-lg px-6 py-2.5 text-label-bold font-label-bold hover:shadow-lg hover:opacity-90 transition-all duration-300 gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Book Appointment
            </button>
            
            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-on-surface flex items-center justify-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col overflow-y-auto animate-fade-in">
          <div className="flex justify-between items-center p-4 border-b border-outline-variant sticky top-0 bg-background z-10 shadow-sm">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <img src="/logo-cmc.png" alt="CMC Dhanbad Logo" className="h-10 w-auto" />
              <div className="flex flex-col justify-center items-center">
                <span className="text-xl font-bold text-primary leading-none font-serif tracking-wide" style={{ transform: 'scaleY(1.1)' }}>CITIZENS</span>
                <span className="text-[9px] font-medium tracking-[0.15em] text-secondary leading-none mt-1">MEDICAL CENTER</span>
              </div>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-on-surface" aria-label="Close Menu">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex flex-col p-4 gap-2">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`py-3 px-4 rounded-lg font-bold ${isActive('/') ? 'bg-primary/10 text-primary' : 'hover:bg-surface-variant text-on-surface'}`}>Home</Link>
            
            <div className="flex flex-col">
              <button onClick={() => toggleSubmenu('about')} className={`flex justify-between items-center py-3 px-4 rounded-lg font-bold ${isParentActive(['/about', '/director', '/mission', '/goals', '/gallery']) ? 'bg-primary/10 text-primary' : 'hover:bg-surface-variant text-on-surface'}`}>
                About Us
                <span className="material-symbols-outlined transition-transform duration-200" style={{ transform: activeMobileSubmenu === 'about' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
              </button>
              {activeMobileSubmenu === 'about' && (
                <div className="flex flex-col pl-8 py-2 gap-1 border-l-2 border-outline-variant ml-6">
                  <Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">About CMC</Link>
                  <Link to="/director-message" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">Director Message</Link>
                  <Link to="/mission-vision" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">Mission & Vision</Link>
                  <Link to="/goals" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">Goals</Link>
                  <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">Gallery</Link>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <button onClick={() => toggleSubmenu('care')} className={`flex justify-between items-center py-3 px-4 rounded-lg font-bold ${isParentActive(['/cardiology', '/ortho', '/neuro', '/gynae', '/pedia', '/surgery', '/kidney', '/uro', '/radio', '/emergency', '/medicine']) ? 'bg-primary/10 text-primary' : 'hover:bg-surface-variant text-on-surface'}`}>
                Centers of Care
                <span className="material-symbols-outlined transition-transform duration-200" style={{ transform: activeMobileSubmenu === 'care' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
              </button>
              {activeMobileSubmenu === 'care' && (
                <div className="flex flex-col pl-8 py-2 gap-1 border-l-2 border-outline-variant ml-6">
                  {departmentsData.map(d => (
                    <Link key={d.slug} to={`/${d.slug}`} onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">{d.title}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/doctor" onClick={() => setMobileMenuOpen(false)} className={`py-3 px-4 rounded-lg font-bold ${isActive('/doctor') ? 'bg-primary/10 text-primary' : 'hover:bg-surface-variant text-on-surface'}`}>Doctors</Link>

            <div className="flex flex-col">
              <button onClick={() => toggleSubmenu('portal')} className={`flex justify-between items-center py-3 px-4 rounded-lg font-bold ${isParentActive(['/faq', '/blog', '/international', '/packages']) ? 'bg-primary/10 text-primary' : 'hover:bg-surface-variant text-on-surface'}`}>
                Patient Portal
                <span className="material-symbols-outlined transition-transform duration-200" style={{ transform: activeMobileSubmenu === 'portal' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
              </button>
              {activeMobileSubmenu === 'portal' && (
                <div className="flex flex-col pl-8 py-2 gap-1 border-l-2 border-outline-variant ml-6">
                  <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">Commonly Asked Questions</Link>
                  <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">Patient Resources & Blogs</Link>
                  <Link to="/international" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">International Patients</Link>
                  <Link to="/packages" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-tertiary font-bold text-sm">Health Packages</Link>
                </div>
              )}
            </div>

            <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)} className={`py-3 px-4 rounded-lg font-bold ${isActive('/contact-us') ? 'bg-primary/10 text-primary' : 'hover:bg-surface-variant text-on-surface'}`}>Contact Us</Link>

            <div className="mt-6 px-4 pb-10">
              <button 
                onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }} 
                className="w-full flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-on-primary rounded-lg px-6 py-3.5 text-label-bold font-label-bold gap-2 shadow-md hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span> Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
