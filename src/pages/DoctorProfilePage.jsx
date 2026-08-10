import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctorsData } from '../data/doctors';
import { departmentsData } from '../data/departments';
import SEO from '../components/SEO';

export default function DoctorProfilePage({ onOpenAppointment }) {
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
    <div className="flex flex-col">
      <SEO title={`${doctor.name} - ${doctor.specialty}`} description={doctor.description} />
      
      <div className="bg-surface-container-low border-b border-outline-variant">
        <div className="py-12 px-margin-mobile md:px-gutter max-w-[1000px] mx-auto">
          <Link to="/doctor" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-bold mb-8 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Doctors
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-[minmax(250px,300px)_1fr] gap-10 items-start">
            
            {/* Image Column */}
            <div className="bg-surface rounded-[24px] overflow-hidden border border-outline-variant shadow-lg relative">
              <img loading="lazy" 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-[350px] object-cover" 
              />
              <div className="absolute bottom-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                <span className="material-symbols-outlined text-[16px]">verified</span> Verified
              </div>
            </div>

            {/* Details Column */}
            <div>
              <h1 className="text-display-lg text-on-surface mb-2 text-3xl md:text-4xl">{doctor.name}</h1>
              <p className="text-primary text-xl font-bold mb-6">{doctor.specialty}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="flex items-center gap-1.5 bg-surface-container px-4 py-2 rounded-lg text-sm font-label-bold text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px]">school</span> {doctor.qualification}
                </span>
                <span className="flex items-center gap-1.5 bg-surface-container px-4 py-2 rounded-lg text-sm font-label-bold text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px]">work_history</span> Experience: {doctor.experience}
                </span>
                {department && (
                  <span className="flex items-center gap-1.5 bg-tertiary-container/30 px-4 py-2 rounded-lg text-sm font-label-bold text-on-surface">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">local_hospital</span> {department.title}
                  </span>
                )}
              </div>

              <h3 className="text-headline-md text-on-surface mb-3 text-xl">About the Doctor</h3>
              <p className="text-on-surface-variant text-body-lg mb-8 leading-relaxed">
                {doctor.description}
              </p>

              <div className="bg-surface border border-outline-variant rounded-[16px] p-6 shadow-sm">
                <h4 className="text-headline-md text-on-surface mb-4 text-lg">Consultation Schedule</h4>
                <div className="flex justify-between border-b border-outline-variant border-dashed pb-3 mb-3">
                  <span className="text-on-surface-variant">Monday - Saturday</span>
                  <span className="font-bold text-on-surface">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-on-surface-variant">Sunday</span>
                  <span className="font-bold text-error">Prior Appointment Only</span>
                </div>
                
                <button 
                  className="w-full bg-primary text-on-primary py-3.5 rounded-full font-label-bold flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md"
                  onClick={onOpenAppointment}
                >
                  <span className="material-symbols-outlined">calendar_month</span> Request Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
