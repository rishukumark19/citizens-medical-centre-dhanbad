import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doctorsData } from '../data/doctors';
import { departmentsData } from '../data/departments';
import SEO from '../components/SEO';

export default function DoctorsPage() {
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
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">Find a Doctor</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Book an appointment with our experienced medical professionals and specialists.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        {/* Filters */}
        <div className="bg-surface p-6 rounded-[24px] border border-outline-variant shadow-sm mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              type="text" 
              placeholder="Search by doctor name or specialty..."
              className="w-full pl-12 pr-4 py-3 rounded-full border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring focus:ring-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">filter_list</span>
            <select 
              className="w-full pl-12 pr-4 py-3 rounded-full border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring focus:ring-primary/20 appearance-none"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
            >
              <option value="All">All Departments</option>
              {departmentsData.map(dept => (
                <option key={dept.slug} value={dept.title}>{dept.title}</option>
              ))}
            </select>
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
              className="mt-6 px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-on-primary transition-colors font-label-bold"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map(doctor => (
              <div key={doctor.id} className="group relative bg-surface-container-lowest rounded-[24px] border border-outline-variant overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-[250px] bg-surface-container-low pt-8 px-8 overflow-hidden flex justify-center items-end">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/40 rounded-bl-[100px] -z-10"></div>
                  
                  <img loading="lazy" 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-40 h-40 object-cover rounded-t-[100px] border-4 border-surface-container-lowest shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-20">
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
                    <div className="flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">work_history</span> {doctor.experience} Exp.
                    </div>
                  </div>
                  
                  <Link to={`/doctor/${doctor.id}`} className="block w-full py-2.5 rounded-full border border-outline text-on-surface font-label-bold hover:bg-primary hover:text-on-primary hover:border-primary transition-colors mt-auto">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
