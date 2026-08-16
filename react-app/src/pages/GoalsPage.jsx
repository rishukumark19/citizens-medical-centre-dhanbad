import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function GoalsPage() {
  const goalsList = [
    { title: "Reduce response time", desc: "Swift emergency interventions and instant triage during the Golden Hour.", icon: "bolt" },
    { title: "Enhance family centred care", desc: "Involving family members in decision-making and patient comfort.", icon: "family_restroom" },
    { title: "To reduce mortality and morbidity", desc: "Rigorous clinical protocols, 24/7 ICU vigilance, and evidence-based care.", icon: "health_and_safety" },
    { title: "Enhance interdisciplinary collaborations", desc: "Multi-specialty doctor panels working together for complex cases.", icon: "groups" },
    { title: "Promote Safe birth and breastfeeding practices", desc: "Dedicated birthing suites, fetal monitoring, and neonatal support.", icon: "child_care" },
    { title: "Develop Disaster preparedness plans", desc: "Rapid response protocols for regional emergencies and mass casualties.", icon: "shield" },
    { title: "Promote research and innovation", desc: "Adopting global medical advancements and continuous clinical improvement.", icon: "biotech" },
    { title: "Enhance staff training", desc: "Regular skill upgrades for nurses, paramedics, and medical personnel.", icon: "school" }
  ];

  return (
    <div className="flex flex-col">
      <SEO title="Our Goals | Citizens Medical Centre Dhanbad" description="Discover the 8 key clinical goals and strategic objectives of Citizens Medical Centre, Dhanbad." />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-16 md:py-24 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-tertiary-container font-bold text-sm uppercase tracking-widest block mb-2">Strategic Roadmap</span>
          <h1 className="text-display-lg text-on-surface mb-4">Our Goals</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            The 8 core objectives driving clinical care and hospital innovation at CMC Dhanbad.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-16">
        
        {/* Intro Section */}
        <div className="bg-surface-container-low p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-sm text-center max-w-4xl mx-auto">
          <span className="text-primary font-label-bold uppercase tracking-wider text-xs block mb-2">Welcome to Citizens Medical Centre</span>
          <h2 className="text-headline-lg text-on-surface mb-4">Dedicated to Continuous Care Improvement</h2>
          <p className="text-on-surface-variant text-body-lg leading-relaxed">
            Welcome to Citizens Medical Centre, Dhanbad where compassionate care meets clinical excellence. As a premier health care institution, we are committed to serving our community with integrity, innovation and unwavering commitment. With a team of highly skilled medical professionals and state-of-art facilities, we strive to deliver personalised care tailored to each patient's need.
          </p>
        </div>

        {/* Goals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goalsList.map((goal, idx) => (
            <div key={idx} className="bg-surface p-6 rounded-[24px] border border-outline-variant hover:border-primary/50 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{goal.icon}</span>
                </div>
                <div className="text-xs font-bold text-tertiary-container uppercase tracking-wider mb-1">Goal #{idx + 1}</div>
                <h3 className="text-headline-md text-on-surface text-lg font-bold mb-2 leading-snug">{goal.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{goal.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/60 flex items-center gap-1 text-xs font-bold text-primary">
                <span className="material-symbols-outlined text-sm">check_circle</span> Verified Standard
              </div>
            </div>
          ))}
        </div>

        {/* Certified and Experienced Doctors Section */}
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-sm text-center max-w-4xl mx-auto">
          <span className="text-tertiary-container font-label-bold uppercase tracking-wider text-xs block mb-2">Our Clinical Team</span>
          <h3 className="text-headline-lg text-on-surface mb-4">Certified and Experienced Doctors</h3>
          <p className="text-on-surface-variant text-body-lg leading-relaxed mb-8">
            At CMC Hospital, our team of certified and experienced doctors brings unparalleled expertise across various medical specialties. Each physician is committed to delivering exceptional care, staying updated with the latest advancements in medical science. With a patient-first approach, our doctors ensure that every treatment is customized to meet individual health needs, providing reliable, compassionate, and effective care at every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
                            className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm"
            >
              Book Appointment
            </button>
            <Link 
              to="/doctor" 
              className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-label-bold hover:bg-surface-variant transition-colors"
            >
              View Specialists
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
