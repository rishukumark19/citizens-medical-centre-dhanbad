import React from 'react';
import { Link } from 'react-router-dom';
import { departmentsData } from '../data/departments';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low pt-16 pb-8 border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              <span className="text-headline-md font-headline-md font-bold text-primary">CMC Dhanbad</span>
            </Link>
            <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
              Citizens Medical Centre is a state-of-the-art multi-specialty hospital committed to providing world-class healthcare services with compassion and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors group">
                <span className="material-symbols-outlined text-xl">language</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors group">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-label-bold font-bold text-on-surface tracking-wider uppercase mb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about-us" className="text-on-surface-variant hover:text-primary hover:underline font-body-md text-sm">About Us</Link></li>
              <li><Link to="/doctor" className="text-on-surface-variant hover:text-primary hover:underline font-body-md text-sm">Find a Doctor</Link></li>
              <li><Link to="/packages" className="text-on-surface-variant hover:text-primary hover:underline font-body-md text-sm">Health Packages</Link></li>
              <li><Link to="/international" className="text-on-surface-variant hover:text-primary hover:underline font-body-md text-sm">International Patients</Link></li>
              <li><Link to="/contact-us" className="text-on-surface-variant hover:text-primary hover:underline font-body-md text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Centers of Excellence */}
          <div className="flex flex-col gap-4">
            <h4 className="text-label-bold font-bold text-on-surface tracking-wider uppercase mb-2">Centers of Excellence</h4>
            <ul className="flex flex-col gap-3">
              {departmentsData.slice(0, 5).map(dept => (
                <li key={dept.slug}>
                  <Link to={`/${dept.slug}`} className="text-on-surface-variant hover:text-primary hover:underline font-body-md text-sm">
                    {dept.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-label-bold font-bold text-on-surface tracking-wider uppercase mb-2">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="text-on-surface-variant font-body-md text-sm">
                  123 Healthcare Avenue, Medical District,<br />Dhanbad, Jharkhand 826001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                <span className="text-on-surface-variant font-body-md text-sm">+91 8802248261 (24/7 Helpline)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <span className="text-on-surface-variant font-body-md text-sm">info@cmcdhanbad.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant font-body-md text-sm text-center md:text-left">
            &copy; {currentYear} Citizens Medical Centre. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/faq" className="text-on-surface-variant hover:text-primary text-sm font-body-md transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="text-on-surface-variant hover:text-primary text-sm font-body-md transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
