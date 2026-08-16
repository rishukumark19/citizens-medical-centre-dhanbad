import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doctorsData } from '../data/doctors';
import { departmentsData } from '../data/departments';
import SEO from '../components/SEO';

export default function DoctorsPage({ onOpenAppointment }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredDoctors = doctorsData.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedDept === 'All') return matchesSearch;
    
    const deptObj = departmentsData.find(d => d.title === selectedDept);
    return matchesSearch && deptObj && doc.category_id === deptObj.category_id;
  });

  return (
    <div className="flex flex-col">
      <SEO title="Find a Doctor | Citizens Medical Centre" />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-20 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">Find a Doctor</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Book an appointment with our experienced medical professionals and specialists.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        {/* Search */}
        <div className="bg-surface p-4 rounded-[24px] border border-outline-variant shadow-sm mb-8">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">search</span>
            <input 
              type="text" 
              placeholder="Search by doctor name or specialty..."
              className="w-full pl-12 pr-4 py-3 rounded-full border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring focus:ring-secondary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Chips */}
        <div className="relative mb-8">
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar items-center">
          <span className="text-sm font-label-bold text-on-surface-variant whitespace-nowrap shrink-0 mr-2">Filter by:</span>
          <button 
            onClick={() => setSelectedDept('All')}
            className={`px-5 py-2 rounded-full whitespace-nowrap font-label-bold text-sm transition-all shrink-0 ${selectedDept === 'All' ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md' : 'bg-surface border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary'}`}
          >
            All Departments
          </button>
          {departmentsData.map(dept => (
            <button 
              key={dept.slug}
              onClick={() => setSelectedDept(dept.title)}
              className={`px-5 py-2 rounded-full whitespace-nowrap font-label-bold text-sm transition-all shrink-0 ${selectedDept === dept.title ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md' : 'bg-surface border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary'}`}
            >
              {dept.title}
            </button>
          ))}
          </div>
        </div>

        {/* Results */}
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-outline mb-4">search_off</span>
            <h3 className="text-headline-md text-on-surface mb-2">No Doctors Found</h3>
            <p className="text-on-surface-variant">Try adjusting your search criteria or filter.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedDept('All'); }}
              className="mt-6 px-6 py-2 border border-primary text-primary rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all font-label-bold"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map(doctor => (
              <div key={doctor.id} className="group relative bg-surface-container-lowest rounded-[24px] border border-outline-variant overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full pt-1.5">
                {/* Gradient Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary z-20"></div>

                {/* Image Section */}
                <div className="relative h-[250px] bg-surface-container-low pt-8 px-8 overflow-hidden flex justify-center items-end">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
                  
                  {doctor.image ? (
                    <img loading="lazy" 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-40 h-40 object-cover rounded-t-[100px] border-4 border-surface-container-lowest shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-40 h-40 rounded-t-[100px] border-4 border-surface-container-lowest shadow-lg relative z-10 bg-gradient-to-br from-primary to-secondary flex items-end justify-center overflow-hidden">
                      <span className="material-symbols-outlined text-7xl text-white/80" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4 bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-20 bg-surface/80 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Verified
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-on-surface mb-1">{doctor.name}</h4>
                  <p className="text-primary font-label-bold mb-3">{doctor.specialty}</p>
                  
                  <div className="flex flex-col gap-2 text-sm text-on-surface-variant mb-6 flex-grow justify-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">school</span> {doctor.qualification}
                    </div>
                    {doctor.experience && (
                      <div className="flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">work_history</span> {doctor.experience} Exp.
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2 mt-auto">
                    <Link to={`/doctor/${doctor.id}`} className="block w-full py-2 rounded-full border border-primary text-primary text-sm font-label-bold hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all shadow-sm">
                      View Profile
                    </Link>
                    <button onClick={onOpenAppointment} className="bg-gradient-to-r from-primary to-secondary text-white w-full py-2 rounded-full font-label-bold text-sm flex items-center justify-center gap-1 hover:opacity-90 shadow-sm transition-opacity">
                      <span className="material-symbols-outlined text-[16px]">calendar_month</span> Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
