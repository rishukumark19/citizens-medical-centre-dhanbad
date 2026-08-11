import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-margin-mobile py-20 bg-surface-container-low">
      <SEO title="Page Not Found | Citizens Medical Centre" />
      
      <div className="max-w-[600px] w-full text-center bg-surface p-12 rounded-[32px] shadow-lg border border-outline-variant flex flex-col items-center">
        <span className="material-symbols-outlined text-[120px] text-primary/30 mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
        
        <div className="text-[6rem] font-black text-primary leading-none mb-4">404</div>
        <h1 className="text-headline-lg text-on-surface mb-4">Page Not Found</h1>
        
        <p className="text-body-lg text-on-surface-variant max-w-[500px] mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md flex items-center gap-2">
            <span className="material-symbols-outlined">home</span> Back to Homepage
          </Link>
          <Link to="/doctor" className="bg-surface text-on-surface border border-outline-variant px-8 py-3 rounded-full font-label-bold hover:bg-surface-variant transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">search</span> Find a Doctor
          </Link>
        </div>
      </div>
    </div>
  );
}
