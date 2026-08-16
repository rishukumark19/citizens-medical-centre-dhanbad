import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctorsData } from '../data/doctors';
import { departmentsData } from '../data/departments';
import SEO from '../components/SEO';

export default function DoctorProfilePage() {
  const { id } = useParams();
  const doctor = doctorsData.find(d => d.id.toString() === id);

  if (!doctor) {
    return (
      <div className="py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">search_off</span>
        <h2 className="text-headline-md text-on-surface mb-2">Doctor Not Found</h2>
        <Link to="/doctor" className="mt-4 bg-primary text-on-primary px-6 py-2 rounded-full font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors">
          Back to Doctors List
        </Link>
      </div>
    );
  }

  const department = departmentsData.find(d => d.category_id === doctor.category_id);

  return (
    <div className="flex flex-col bg-surface">
      <SEO title={`${doctor.name} - ${doctor.specialty}`} description={doctor.description} />
      
      {/* Top Banner section */}
      <div className="bg-surface-container-low border-b border-outline-variant pt-12 pb-16">
        <div className="px-margin-mobile md:px-gutter max-w-[1200px] mx-auto">
          <Link to="/doctor" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-bold mb-8 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Doctors
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Image */}
            <div className="bg-surface rounded-2xl overflow-hidden border border-outline-variant shadow-lg relative p-2">
              <div className="w-full h-[320px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-end justify-center relative">
                {doctor.image ? (
                  <img loading="lazy" src={doctor.image} alt={doctor.name} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-9xl text-primary/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                )}
              </div>
              {doctor.regNo ? (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm border border-primary/20">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>badge</span>
                  Reg. {doctor.regNo}
                </div>
              ) : (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm border border-primary/20">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Govt. Registered
                </div>
              )}
            </div>

            {/* Quick Details */}
            <div className="pt-2">
              <h1 className="text-display-lg text-on-surface mb-2 text-3xl md:text-5xl">{doctor.name}</h1>
              <p className="text-primary text-xl font-bold mb-6">{doctor.specialty}</p>

              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6 border-b border-outline-variant/50 pb-6">
                {doctor.experience && (
                  <div className="flex flex-col gap-1">
                    <span className="text-on-surface-variant text-xs uppercase tracking-wider font-bold">Experience</span>
                    <span className="text-on-surface font-medium">{doctor.experience}</span>
                  </div>
                )}
                {doctor.education && doctor.education.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <span className="text-on-surface-variant text-xs uppercase tracking-wider font-bold">Education</span>
                    <span className="text-on-surface font-medium">{doctor.education.join(', ')}</span>
                  </div>
                )}
                {doctor.languages && doctor.languages.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <span className="text-on-surface-variant text-xs uppercase tracking-wider font-bold">Languages</span>
                    <span className="text-on-surface font-medium">{doctor.languages.join(', ')}</span>
                  </div>
                )}
                {department && (
                  <div className="flex flex-col gap-1">
                    <span className="text-on-surface-variant text-xs uppercase tracking-wider font-bold">Department</span>
                    <span className="text-on-surface font-medium">{department.title}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
                <span className="flex items-center gap-1.5 bg-surface-variant/50 px-4 py-2 rounded-full">
                  <span className="material-symbols-outlined text-[18px] text-secondary">schedule</span>
                  {doctor.timings || "09:00 AM - 05:00 PM Mon-Sat"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-16 px-margin-mobile md:px-gutter max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
        
        {/* Left Column - Details */}
        <div className="flex flex-col gap-10">
          
          {/* About */}
          <section>
            <h3 className="text-headline-md text-on-surface mb-4 pb-2 border-b-2 border-primary w-fit">About {doctor.name}</h3>
            <p className="text-on-surface-variant text-body-lg leading-relaxed whitespace-pre-line">
              {doctor.description}
            </p>
          </section>

          {/* Clinical Expertise & Treatments */}
          {(doctor.clinicalExpertise?.length > 0 || doctor.treatments?.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {doctor.clinicalExpertise?.length > 0 && (
                <section className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm">
                  <h3 className="text-headline-md text-on-surface mb-4 text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">medical_services</span>
                    Clinical Expertise
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {doctor.clinicalExpertise.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-on-surface-variant text-sm">
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {doctor.treatments?.length > 0 && (
                <section className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm">
                  <h3 className="text-headline-md text-on-surface mb-4 text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">healing</span>
                    Treatments Offered
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {doctor.treatments.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-on-surface-variant text-sm">
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          )}

          {/* Memberships */}
          {doctor.memberships?.length > 0 && (
            <section>
              <h3 className="text-headline-md text-on-surface mb-4 pb-2 border-b-2 border-primary w-fit">Memberships</h3>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-on-surface-variant">
                {doctor.memberships.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </section>
          )}

          {/* Awards */}
          {doctor.awards?.length > 0 && (
            <section>
              <h3 className="text-headline-md text-on-surface mb-4 pb-2 border-b-2 border-primary w-fit">Awards & Achievements</h3>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-on-surface-variant">
                {doctor.awards.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </section>
          )}

          {/* Research */}
          {doctor.research && (
            <section>
              <h3 className="text-headline-md text-on-surface mb-4 pb-2 border-b-2 border-primary w-fit">Research & Publications</h3>
              <p className="text-on-surface-variant">{doctor.research}</p>
            </section>
          )}

          {/* FAQs */}
          {doctor.faqs?.length > 0 && (
            <section className="mt-6">
              <h3 className="text-headline-md text-on-surface mb-6 pb-2 border-b-2 border-primary w-fit">Frequently Asked Questions</h3>
              <div className="flex flex-col gap-4">
                {doctor.faqs.map((faq, i) => (
                  <div key={i} className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant">
                    <h4 className="font-bold text-on-surface mb-2">{faq.q}</h4>
                    <p className="text-on-surface-variant text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-28">
          {/* Hospital Location */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-[20px] p-6 shadow-md">
            <h4 className="text-headline-md text-on-surface mb-5 flex items-center gap-2 text-lg">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              Location
            </h4>
            <div className="mb-4">
              <h5 className="font-bold text-on-surface text-base mb-1">Citizens Medical Centre</h5>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Ground Floor, Binod Bihari Chowk, CMC Hospital<br/>
                below sbi bank, Dhanbad, Jharkhand 828130
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Binod+Bihari+Chowk+CMC+Hospital+Dhanbad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-surface text-primary border border-primary py-2.5 rounded-full font-label-bold text-sm hover:bg-primary/5 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">directions</span> Get Directions
            </a>
          </div>

          {/* Schedule */}
          <div className="bg-gradient-to-b from-primary/5 to-surface border border-primary/10 rounded-[20px] p-6 shadow-sm">
            <h4 className="text-headline-md text-on-surface mb-5 flex items-center gap-2 text-lg">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
              Consultation Schedule
            </h4>
            <div className="flex justify-between border-b border-outline-variant border-dashed pb-3 mb-3 text-sm">
              <span className="text-on-surface-variant font-medium">Monday - Saturday</span>
              <span className="font-bold text-on-surface">{doctor.timings || "10:00 AM - 4:00 PM"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant font-medium">Sunday</span>
              <span className="font-bold text-error">Prior Appointment Only</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
