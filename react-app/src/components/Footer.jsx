import React from 'react';
import { Link } from 'react-router-dom';
import { departmentsData } from '../data/departments';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low pt-16 pb-8 border-t-4 border-transparent relative">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-80"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-cmc.png" alt="CMC Dhanbad Logo" className="h-12 w-auto" />
              <div className="flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-primary leading-none font-serif tracking-wide" style={{ transform: 'scaleY(1.1)' }}>CITIZENS</span>
                <span className="text-[11px] font-medium tracking-[0.2em] text-secondary leading-none mt-1.5">MEDICAL CENTER</span>
              </div>
            </Link>
            <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
              Citizens Medical Centre is a state-of-the-art multi-specialty hospital committed to providing world-class healthcare services with compassion and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary hover:shadow-md transition-all group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.54-4.5-10.02-10-10.02Z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white hover:shadow-md transition-all group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-[#FF0000] hover:text-white hover:shadow-md transition-all group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3L10 15z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-label-bold font-bold text-secondary tracking-wider uppercase mb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about-us" className="text-on-surface-variant hover:text-primary hover:translate-x-1 inline-block transition-transform font-body-md text-sm">About Us</Link></li>
              <li><Link to="/doctor" className="text-on-surface-variant hover:text-primary hover:translate-x-1 inline-block transition-transform font-body-md text-sm">Find a Doctor</Link></li>
              <li><Link to="/packages" className="text-on-surface-variant hover:text-primary hover:translate-x-1 inline-block transition-transform font-body-md text-sm">Health Packages</Link></li>
              <li><Link to="/international" className="text-on-surface-variant hover:text-primary hover:translate-x-1 inline-block transition-transform font-body-md text-sm">International Patients</Link></li>
              <li><Link to="/contact-us" className="text-on-surface-variant hover:text-primary hover:translate-x-1 inline-block transition-transform font-body-md text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Centers of Excellence */}
          <div className="flex flex-col gap-4">
            <h4 className="text-label-bold font-bold text-secondary tracking-wider uppercase mb-2">Centers of Excellence</h4>
            <ul className="flex flex-col gap-3">
              {departmentsData.slice(0, 5).map(dept => (
                <li key={dept.slug}>
                  <Link to={`/${dept.slug}`} className="text-on-surface-variant hover:text-primary hover:translate-x-1 inline-block transition-transform font-body-md text-sm">
                    {dept.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-label-bold font-bold text-secondary tracking-wider uppercase mb-2">Contact Info</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span className="text-on-surface-variant font-body-md text-sm">
                    Ground Floor, Binod Bihari Chowk, CMC Hospital,<br />below sbi bank, Dhanbad, Jharkhand 828130
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  <span className="text-on-surface-variant font-body-md text-sm">+91 8235540809 (24/7 Helpline)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  <span className="text-on-surface-variant font-body-md text-sm">info@cmcdhanbad.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="mt-2">
              <h4 className="text-label-bold font-bold text-on-surface text-sm mb-3">Subscribe to Health Tips</h4>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-surface border border-outline-variant rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50"
                  required
                />
                <button type="submit" className="bg-secondary hover:bg-tertiary-fixed-dim text-on-secondary px-4 py-2 rounded-r-lg font-bold transition-colors flex items-center gap-1 whitespace-nowrap">
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant font-body-md text-sm text-center md:text-left">
            &copy; {currentYear} Citizens Medical Centre. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/faq" className="text-on-surface-variant hover:text-secondary text-sm font-body-md transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="text-on-surface-variant hover:text-secondary text-sm font-body-md transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
