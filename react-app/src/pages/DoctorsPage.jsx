import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { doctorsData } from '../data/doctors';
import { departmentsData } from '../data/departments';
import SEO from '../components/SEO';
import DoctorCard from '../components/DoctorCard';
import ScrollReveal from '../components/ScrollReveal';

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

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-primary via-[#0a6bbf] to-secondary py-24 px-margin-mobile md:px-gutter text-center overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        {/* Glows */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />

        <motion.div
          className="relative z-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[13px] font-bold mb-5 border border-white/25">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            {doctorsData.length}+ Expert Specialists
          </div>
          <h1 className="text-display-lg text-white mb-3 drop-shadow-sm font-bold">Find a Doctor</h1>
          <p className="text-white/80 text-body-md max-w-lg mx-auto">
            Book an appointment with our trusted, board-certified medical specialists at CMC Dhanbad.
          </p>
        </motion.div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">

        {/* Search Bar */}
        <ScrollReveal className="relative mb-6">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl">search</span>
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-outline-variant/60 bg-white shadow-sm focus:border-primary focus:shadow-lg focus:shadow-primary/10 outline-none text-on-surface transition-all duration-300 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <AnimatePresence>
              {searchTerm && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-outline-variant/40 hover:bg-outline-variant flex items-center justify-center text-on-surface-variant transition-colors"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mb-8" delay={0.1}>
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar items-center -mx-4 px-4 md:mx-0 md:px-0">
            <span className="text-sm font-label-bold text-on-surface-variant whitespace-nowrap shrink-0 mr-1 hidden md:inline-block">Filter:</span>
            {['All', ...departmentsData.map(d => d.title)].map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-1.5 rounded-full whitespace-nowrap font-bold text-sm transition-all duration-300 shrink-0 ${
                  selectedDept === dept
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/25'
                    : 'bg-white border border-outline-variant/60 text-on-surface-variant hover:border-primary/50 hover:text-primary hover:shadow-sm'
                }`}
              >
                {dept === 'All' ? 'All Departments' : dept}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Results count */}
        <motion.p
          className="text-sm text-on-surface-variant mb-6 flex items-center gap-2"
          key={filteredDoctors.length + selectedDept}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs">{filteredDoctors.length}</span>
          doctor{filteredDoctors.length !== 1 ? 's' : ''} found
          {selectedDept !== 'All' && <span> in <span className="font-bold text-on-surface">{selectedDept}</span></span>}
        </motion.p>

        {/* Empty State */}
        <AnimatePresence mode="wait">
          {filteredDoctors.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-24"
            >
              <div className="w-20 h-20 rounded-3xl bg-surface-container flex items-center justify-center mx-auto mb-4 shadow-inner">
                <span className="material-symbols-outlined text-4xl text-outline">search_off</span>
              </div>
              <h3 className="text-headline-md text-on-surface mb-2">No Doctors Found</h3>
              <p className="text-on-surface-variant mb-6">Try adjusting your search or department filter.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedDept('All'); }}
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:opacity-90 transition-all shadow-md"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filteredDoctors.map((doctor, i) => (
                <DoctorCard key={doctor.id} doctor={doctor} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
