import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { departmentsData } from '../data/departments';

export default function Header({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const navigate = useNavigate();

  const toggleSubmenu = (menuName) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menuName ? null : menuName);
  };

  return (
    <>

      {/* Main Navigation Bar */}
      <nav className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none sticky top-0 z-50 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-20">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary dark:text-inverse-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            <span className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">Citizens Medical Centre</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-on-surface-variant dark:text-surface-variant text-label-bold font-label-bold hover:text-tertiary-container dark:hover:text-tertiary-fixed transition-colors duration-200">
              Home
            </Link>

            <div className="relative group">
              <Link to="/about-us" className="text-on-surface-variant dark:text-surface-variant text-label-bold font-label-bold hover:text-tertiary-container dark:hover:text-tertiary-fixed transition-colors duration-200 flex items-center gap-1 py-4">
                About Us <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </Link>
              <div className="absolute top-full left-0 bg-surface border border-outline-variant rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] py-2 flex flex-col z-50">
                <Link to="/about-us" className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant text-sm font-bold transition-colors">About CMC</Link>
                <Link to="/about-us#director-message" className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant text-sm font-bold transition-colors">Director Message</Link>
                <Link to="/about-us#mission-vision" className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant text-sm font-bold transition-colors">Mission & Vision</Link>
                <Link to="/about-us#goals" className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant text-sm font-bold transition-colors">Goals</Link>
                <Link to="/gallery" className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant text-sm font-bold transition-colors">Gallery</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-on-surface-variant dark:text-surface-variant text-label-bold font-label-bold hover:text-tertiary-container dark:hover:text-tertiary-fixed transition-colors duration-200 flex items-center gap-1 py-4">
                Centers of Care <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-surface border border-outline-variant rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[600px] p-4 grid grid-cols-2 gap-2 z-50">
                {departmentsData.map(dept => (
                  <Link key={dept.slug} to={`/${dept.slug}`} className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant rounded-md text-sm font-bold transition-colors">
                    {dept.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/doctor" className="text-on-surface-variant dark:text-surface-variant text-label-bold font-label-bold hover:text-tertiary-container dark:hover:text-tertiary-fixed transition-colors duration-200">
              Doctors
            </Link>

            <div className="relative group">
              <button className="text-on-surface-variant dark:text-surface-variant text-label-bold font-label-bold hover:text-tertiary-container dark:hover:text-tertiary-fixed transition-colors duration-200 flex items-center gap-1 py-4">
                Patient Portal <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <div className="absolute top-full left-0 bg-surface border border-outline-variant rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[240px] py-2 flex flex-col z-50">
                <Link to="/faq" className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant text-sm font-bold transition-colors">Commonly Asked Questions</Link>
                <Link to="/blog" className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant text-sm font-bold transition-colors">Patient Resources & Blogs</Link>
                <Link to="/international" className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant text-sm font-bold transition-colors">International Patients</Link>
                <Link to="/packages" className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant text-sm font-bold transition-colors">Health Packages</Link>
              </div>
            </div>

            <Link to="/contact-us" className="text-on-surface-variant dark:text-surface-variant text-label-bold font-label-bold hover:text-tertiary-container dark:hover:text-tertiary-fixed transition-colors duration-200">
              Contact Us
            </Link>
          </div>

          {/* Trailing Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-on-surface-variant">
              <a href="tel:+918802248261" aria-label="call" className="p-2 hover:bg-surface-variant rounded-full transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-primary">call</span>
              </a>
              <Link to="/contact-us" aria-label="location_on" className="p-2 hover:bg-surface-variant rounded-full transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-primary">location_on</span>
              </Link>
            </div>
            
            <button 
              onClick={onOpenAppointment} 
              className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary rounded-lg px-6 py-2 text-label-bold font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 shadow-sm gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Book Appointment
            </button>
            
            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-on-surface flex items-center justify-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-outline-variant sticky top-0 bg-background z-10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              <span className="text-headline-md font-bold text-primary text-lg">CMC</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-on-surface">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex flex-col p-4 gap-2">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-surface-variant text-on-surface font-bold">Home</Link>
            
            <div className="flex flex-col">
              <button onClick={() => toggleSubmenu('about')} className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-surface-variant text-on-surface font-bold">
                About Us
                <span className="material-symbols-outlined transition-transform duration-200" style={{ transform: activeMobileSubmenu === 'about' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
              </button>
              {activeMobileSubmenu === 'about' && (
                <div className="flex flex-col pl-8 py-2 gap-1 border-l-2 border-outline-variant ml-6">
                  <Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">About CMC</Link>
                  <Link to="/about-us#director-message" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Director Message</Link>
                  <Link to="/about-us#mission-vision" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Mission & Vision</Link>
                  <Link to="/about-us#goals" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Goals</Link>
                  <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Gallery</Link>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <button onClick={() => toggleSubmenu('care')} className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-surface-variant text-on-surface font-bold">
                Centers of Care
                <span className="material-symbols-outlined transition-transform duration-200" style={{ transform: activeMobileSubmenu === 'care' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
              </button>
              {activeMobileSubmenu === 'care' && (
                <div className="flex flex-col pl-8 py-2 gap-1 border-l-2 border-outline-variant ml-6">
                  {departmentsData.map(d => (
                    <Link key={d.slug} to={`/${d.slug}`} onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">{d.title}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/doctor" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-surface-variant text-on-surface font-bold">Doctors</Link>

            <div className="flex flex-col">
              <button onClick={() => toggleSubmenu('portal')} className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-surface-variant text-on-surface font-bold">
                Patient Portal
                <span className="material-symbols-outlined transition-transform duration-200" style={{ transform: activeMobileSubmenu === 'portal' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
              </button>
              {activeMobileSubmenu === 'portal' && (
                <div className="flex flex-col pl-8 py-2 gap-1 border-l-2 border-outline-variant ml-6">
                  <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Commonly Asked Questions</Link>
                  <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Patient Resources & Blogs</Link>
                  <Link to="/international" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">International Patients</Link>
                  <Link to="/packages" onClick={() => setMobileMenuOpen(false)} className="py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Health Packages</Link>
                </div>
              )}
            </div>

            <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 rounded-lg hover:bg-surface-variant text-on-surface font-bold">Contact Us</Link>

            <div className="mt-6 px-4">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }} 
                className="w-full flex items-center justify-center bg-primary text-on-primary rounded-lg px-6 py-3 text-label-bold font-label-bold gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span> Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
