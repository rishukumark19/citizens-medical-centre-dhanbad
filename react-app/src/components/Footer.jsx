import React from 'react';
import { Link } from 'react-router-dom';
import { departmentsData } from '../data/departments';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-primary opacity-80" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-cmc.png" alt="CMC Dhanbad Logo" className="h-12 w-auto brightness-200" />
              <div className="flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-white leading-none font-serif tracking-wide" style={{ transform: 'scaleY(1.1)' }}>CITIZENS</span>
                <span className="text-[11px] font-medium tracking-[0.2em] text-secondary leading-none mt-1.5">MEDICAL CENTER</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Citizens Medical Centre is a state-of-the-art multi-specialty hospital committed to world-class healthcare with compassion and excellence.
            </p>
            <div className="flex gap-3">
              <a href="#" target="_blank" title="Facebook" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.54-4.5-10.02-10-10.02Z"/></svg>
              </a>
              <a href="#" target="_blank" title="Instagram" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:border-transparent hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
              </a>
              <a href="#" target="_blank" title="YouTube" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3L10 15z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-secondary tracking-[0.15em] uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/about-us', label: 'About Us' },
                { to: '/doctor', label: 'Find a Doctor' },
                { to: '/packages', label: 'Health Packages' },
                { to: '/international', label: 'International Patients' },
                { to: '/contact-us', label: 'Contact Us' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/50 hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-3 h-0.5 bg-secondary/40 group-hover:w-5 group-hover:bg-secondary transition-all duration-300 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Centers of Excellence */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-secondary tracking-[0.15em] uppercase">Centers of Excellence</h4>
            <ul className="flex flex-col gap-2.5">
              {departmentsData.slice(0, 5).map(dept => (
                <li key={dept.slug}>
                  <Link to={`/${dept.slug}`} className="text-white/50 hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-3 h-0.5 bg-secondary/40 group-hover:w-5 group-hover:bg-secondary transition-all duration-300 rounded-full"></span>
                    {dept.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Hours */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold text-secondary tracking-[0.15em] uppercase">Contact Info</h4>
              <ul className="flex flex-col gap-3.5">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-lg shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span className="text-white/50 text-sm leading-relaxed">Binod Bihari Chowk, CMC Hospital, below SBI Bank, Dhanbad, Jharkhand 828130</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  <a href="tel:+918235540809" className="text-white/50 hover:text-white text-sm transition-colors">+91 8235540809 (24/7 Helpline)</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  <span className="text-white/50 text-sm">info@cmcdhanbad.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-secondary tracking-[0.15em] uppercase mb-3">Working Hours</h4>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  { day: 'Mon–Sat', hours: '10:00 AM – 6:00 PM', highlight: false },
                  { day: 'Sunday', hours: 'Prior Appointment', highlight: false },
                  { day: 'Emergency', hours: '24 / 7', highlight: true },
                  { day: 'Radiology', hours: '24 / 7', highlight: true },
                ].map((row, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-white/6 pb-2">
                    <span className="text-white/40">{row.day}</span>
                    <span className={`font-bold text-xs ${row.highlight ? 'text-secondary' : 'text-white/70'}`}>{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left text-xs text-white/40 flex flex-col gap-1">
            <p>Developed and Maintained by <span className="text-white/70 font-medium">CrossTech</span></p>
            <p>© {currentYear} CrossTech. All Rights Reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-white/40 hover:text-secondary text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-white/40 hover:text-secondary text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
