import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doctorsData } from '../data/doctors';
import { departmentsData } from '../data/departments';
import SEO from '../components/SEO';
import DoctorCard from '../components/DoctorCard';

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredDoctors = doctorsData.filter(doc => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedDept === 'All') return matchesSearch;

    const deptObj = departmentsData.find(d => d.title === selectedDept);
    return matchesSearch && deptObj && doc.category_id === deptObj.category_id;
  });

  return (
    <div className="flex flex-col">
      <SEO title="Find a Doctor | Citizens Medical Centre" />

      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-primary to-secondary py-20 px-margin-mobile md:px-gutter text-center overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-[13px] font-bold mb-4 border border-white/25">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            {doctorsData.length}+ Expert Specialists
          </div>
          <h1 className="text-display-lg text-white mb-3 drop-shadow-sm">Find a Doctor</h1>
          <p className="text-white/85 text-body-md max-w-lg mx-auto">
            Book an appointment with our trusted, board-certified medical specialists at CMC Dhanbad.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">

        {/* Search Bar */}
        <div className="relative mb-6">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl">search</span>
          <input
            type="text"
            placeholder="Search by doctor name or specialty..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full border border-outline-variant bg-surface-container-lowest shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-on-surface"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          )}
        </div>

        {/* Filter Chips */}
        <div className="relative mb-8">
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar items-center">
            <span className="text-sm font-label-bold text-on-surface-variant whitespace-nowrap shrink-0 mr-1">Filter:</span>
            <button
              onClick={() => setSelectedDept('All')}
              className={`px-4 py-1.5 rounded-full whitespace-nowrap font-label-bold text-sm transition-all shrink-0 ${
                selectedDept === 'All'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'bg-surface border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
            >
              All Departments
            </button>
            {departmentsData.map(dept => (
              <button
                key={dept.slug}
                onClick={() => setSelectedDept(dept.title)}
                className={`px-4 py-1.5 rounded-full whitespace-nowrap font-label-bold text-sm transition-all shrink-0 ${
                  selectedDept === dept.title
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'bg-surface border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
                }`}
              >
                {dept.title}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-on-surface-variant mb-6">
          Showing{' '}
          <span className="font-bold text-primary">{filteredDoctors.length}</span>{' '}
          doctor{filteredDoctors.length !== 1 ? 's' : ''}
          {selectedDept !== 'All' && <span> in <span className="font-bold text-on-surface">{selectedDept}</span></span>}
        </p>

        {/* Empty State */}
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-4xl text-outline">search_off</span>
            </div>
            <h3 className="text-headline-md text-on-surface mb-2">No Doctors Found</h3>
            <p className="text-on-surface-variant mb-6">Try adjusting your search or department filter.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedDept('All'); }}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-label-bold hover:opacity-90 transition-all shadow-md"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
