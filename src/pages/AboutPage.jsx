import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AboutPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const goalsList = [
    "Reduce response time",
    "Enhance family centred care",
    "To reduce mortality and morbidity",
    "Enhance interdisciplinary collaborations",
    "Promote Safe birth and breastfeeding practices",
    "Develop Disaster preparedness plans",
    "Promote research and innovation",
    "Enhance staff training"
  ];

  return (
    <div className="flex flex-col">
      <SEO title="About Us | Citizens Medical Centre" description="CMC Dhanbad is a 109 bedded leading super specialty hospital of global standard dedicated to providing high end health care." />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-20 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">About CMC Dhanbad</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            109-Bedded Proposed 150-Bed Leading Super Specialty Hospital in Jharkhand.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-16">
        
        {/* Our Story / About CMC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[24px] overflow-hidden shadow-2xl relative h-[400px]">
            <img loading="lazy" 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
              alt="Citizens Medical Centre Hospital Building" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
          <div>
            <h2 className="text-primary font-label-bold uppercase tracking-widest mb-2">Qualified & Experienced Medical Team</h2>
            <h3 className="text-headline-lg text-on-surface mb-6">Welcome to Citizens Medical Centre</h3>
            <p className="text-body-lg text-on-surface-variant mb-4 leading-relaxed">
              Citizens Medical Centre, Dhanbad is a 109 bedded (proposed 150-bed) leading super specialty hospital of global standard dedicated to providing high end health care to the people of Dhanbad.
            </p>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              We cater to all your health needs with special attention to Emergency medicine & critical care with dedicated over 50% for neonatal, paediatric and adult critical care beds, premier operating facility, advanced laparoscopy setup, Birthing suite, 24x7 Radiology and laboratory.
            </p>
          </div>
        </div>

        {/* Director Message Section */}
        <div id="director-message" className="bg-surface-container-low p-8 md:p-12 rounded-[32px] border border-outline-variant scroll-mt-28 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-center">
            <div className="relative rounded-[24px] overflow-hidden shadow-lg h-[340px] bg-surface-container">
              <img 
                loading="lazy" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABw9IwhSgc7hAQDg9rEXr2ljaRuhRJeBDjJjXJARSRVNg-6PoQi0DLTn3XOCSl5n_sRf5bvtlcaKYu7xaGPS7op4uty_rKxYSlkwgAxIeIvCf_W5B2amr_fzMlIwfa16CQGi00Hac_-8w7f9AnAsJ70qsBJbs11RBU7p_GLfDk9IguI4m0kJIKBYZ_QPW4PISeBGQVngixxlnOIuHhlZbAHkZX4khGlHTZLGdSJXeRGnDhZ5chijUm3w" 
                alt="Director Dr. Abhishek Kumar Mishra" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-white font-bold block">Dr. Abhishek Kumar Mishra</span>
                <span className="text-tertiary-fixed text-xs">Medical Director</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 text-primary font-label-bold uppercase tracking-wider text-xs bg-primary/10 px-3 py-1 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm">format_quote</span> Director's Message
              </div>
              <h3 className="text-headline-lg text-on-surface">Committed to the Highest Quality of Care</h3>
              <blockquote className="text-on-surface-variant text-body-lg italic leading-relaxed">
                "At CMC Dhanbad we are committed to provide highest quality of care to our patients as we believe that every life counts. Our dedicated team of highly skilled doctors supported by our nurses and para medical staffs work tirelessly to ensure personalised and comprehensive treatment and care for each patient. We believe in a holistic approach to healthcare focussing not only on treating illness but also on promoting overall wellbeing of society. We understand that seeking medical care can be a challenging experience but our staff is here to support you in every step. Thank you for trusting us with your healthcare needs."
              </blockquote>
              <div className="pt-4 border-t border-outline-variant/60 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-on-surface">Warm Regards</h4>
                  <p className="text-sm font-label-bold text-primary">OUR DIRECTORS — Citizens Medical Centre</p>
                </div>
                <span className="material-symbols-outlined text-4xl text-primary/30">verified_user</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div id="mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-mt-28">
          <div className="bg-surface p-10 rounded-[24px] border border-outline-variant hover:shadow-xl transition-shadow text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
            </div>
            <h3 className="text-headline-md text-on-surface mb-4">Our Mission</h3>
            <p className="text-on-surface-variant text-body-md leading-relaxed">
              To provide compassionate, high quality healthcare services to our community with commitment, integrity, and a relentless pursuit of excellence, ensuring every individual receives the highest standard of care and support they deserve.
            </p>
          </div>

          <div className="bg-surface p-10 rounded-[24px] border border-outline-variant hover:shadow-xl transition-shadow text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
            </div>
            <h3 className="text-headline-md text-on-surface mb-4">Our Vision</h3>
            <p className="text-on-surface-variant text-body-md leading-relaxed">
              To become an Institution par excellence and lead by example in providing compassionate, innovative, and cutting-edge healthcare to our community and beyond.
            </p>
          </div>
        </div>

        {/* Our Goals */}
        <div id="goals" className="scroll-mt-28 bg-surface-container-lowest p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-primary font-label-bold uppercase tracking-widest mb-2">Hospital Roadmap</h2>
            <h3 className="text-headline-lg text-on-surface">Our Key Goals & Objectives</h3>
            <p className="text-on-surface-variant text-body-md mt-2">Continuous innovation and patient-centered commitments driving CMC Dhanbad.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goalsList.map((goal, idx) => (
              <div key={idx} className="bg-surface p-6 rounded-[20px] border border-outline-variant hover:border-primary/40 hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>chevron_right</span>
                </div>
                <h4 className="font-bold text-on-surface text-base leading-snug">{goal}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-surface-container-low p-8 md:p-12 rounded-[32px] border border-outline-variant">
          <h3 className="text-headline-lg text-on-surface mb-4">Why Choose Us</h3>
          <p className="text-on-surface-variant text-body-lg leading-relaxed">
            We believe in keeping the personal touch intact with continuous innovation and technological advancements happening in the medical field. We bring together an excellent team with a blend of experience and enthusiasm, ensuring that our patients receive the highest quality care that is both compassionate and cutting-edge.
          </p>
        </div>

      </div>
    </div>
  );
}
