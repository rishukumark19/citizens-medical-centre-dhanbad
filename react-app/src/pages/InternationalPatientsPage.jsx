import React from 'react';
import SEO from '../components/SEO';

export default function InternationalPatientsPage() {
  return (
    <div className="flex flex-col">
      <SEO title="International Patient Services | Citizens Medical Centre" />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-20 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">International Patient Services</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Providing world-class medical care and seamless assistance for our patients traveling from abroad.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-primary font-label-bold uppercase tracking-widest mb-2">Welcome</h2>
            <h3 className="text-headline-lg text-on-surface mb-6">Your Journey to Better Health Starts Here</h3>
            <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              Citizens Medical Centre (CMC Dhanbad) is dedicated to offering comprehensive healthcare services to patients worldwide. Our dedicated International Patient Desk ensures a comfortable, safe, and hassle-free medical journey for you and your family.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Pre-arrival online tele-consultation",
                "Medical Visa invitation letter assistance",
                "Airport pickup & drop services",
                "Language interpretation services",
                "Dedicated relationship manager"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] overflow-hidden shadow-2xl h-[300px] md:h-[500px]">
            <img loading="lazy"
              src="https://images.unsplash.com/photo-1576091160550-2173ff9e5eb2?auto=format&fit=crop&w=800&q=80"
              alt="International Patient Services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Steps */}
        <h2 className="text-headline-lg text-on-surface text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: "public", title: "Step 1: Get in Touch", desc: "Share your medical reports and query via email or our online form for a free initial review." },
            { icon: "support_agent", title: "Step 2: Tele-consultation", desc: "Consult directly with our specialists online to discuss your treatment plan and cost estimates." },
            { icon: "flight_takeoff", title: "Step 3: Travel & Visa", desc: "Receive your Medical Visa letter and let us help coordinate your travel and accommodation." },
            { icon: "handshake", title: "Step 4: Treatment & Care", desc: "Arrive at CMC Dhanbad where our team will guide you through your personalized treatment." }
          ].map((g, i) => (
            <div key={i} className="bg-surface p-8 rounded-[24px] border border-outline-variant text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-on-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{g.icon}</span>
              </div>
              <h3 className="text-headline-md text-on-surface mb-3 text-lg">{g.title}</h3>
              <p className="text-on-surface-variant text-sm">{g.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary text-on-primary rounded-[24px] p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -z-10"></div>
          
          <h3 className="text-display-lg text-3xl mb-4 relative z-10">Plan Your Medical Trip Today</h3>
          <p className="text-on-primary/90 mb-8 max-w-2xl mx-auto text-lg relative z-10">
            Our international patient coordination team is available 24/7 to answer your queries and help you start your journey.
          </p>
          <button 
            className="bg-surface text-primary px-8 py-4 rounded-full font-label-bold hover:bg-surface-variant transition-colors shadow-md relative z-10"
                      >
            Request a Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
