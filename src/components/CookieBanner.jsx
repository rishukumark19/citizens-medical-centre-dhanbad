import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-inverse-surface/95 backdrop-blur-md text-inverse-on-surface px-6 py-4 z-[1000] flex flex-wrap justify-center items-center gap-5 shadow-[-4px_0_10px_rgba(0,0,0,0.1)]">
      <p className="m-0 text-sm max-w-[800px] leading-relaxed">
        We use cookies to improve your experience on our website and to analyze our traffic. By clicking "Accept", you consent to our use of cookies in accordance with our Privacy Policy.
      </p>
      <div className="flex gap-3">
        <button 
          onClick={handleAccept}
          className="bg-primary text-on-primary border-none px-6 py-2 rounded font-label-bold cursor-pointer hover:bg-primary-container hover:text-on-primary-container transition-colors"
        >
          Accept
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="bg-transparent text-inverse-on-surface border border-inverse-on-surface px-6 py-2 rounded cursor-pointer hover:bg-inverse-on-surface hover:text-inverse-surface transition-colors"
        >
          Decline
        </button>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-4 bg-transparent border-none text-outline-variant cursor-pointer hover:text-white transition-colors"
        aria-label="Close"
      >
        <span className="material-symbols-outlined text-lg">close</span>
      </button>
    </div>
  );
}
