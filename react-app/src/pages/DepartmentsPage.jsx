import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { departmentsData } from '../data/departments';
import SEO from '../components/SEO';

export default function DepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDepts = departmentsData.filter(dept =>
    dept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (dept.description || dept.shortDesc || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <SEO title="Centers of Excellence | Citizens Medical Centre" />
      
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-primary to-secondary py-20 px-margin-mobile md:px-gutter text-center overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-[13px] font-bold mb-4 border border-white/25">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_hospital</span>
            {departmentsData.length} Specialties Available
          </div>
          <h1 className="text-display-lg text-white mb-3 drop-shadow-sm">Centers of Excellence</h1>
          <p className="text-white/85 text-body-md max-w-lg mx-auto">
            Comprehensive clinical care under one roof. World-class medical facilities and expertise across all specialties.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">

        {/* Search Bar */}
        <div className="relative mb-10 max-w-xl mx-auto">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl">search</span>
          <input
            type="text"
            placeholder="Search departments or specialties..."
            className="w-full pl-12 pr-10 py-3.5 rounded-full border border-outline-variant bg-surface-container-lowest shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-on-surface"
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

        {/* Results Count */}
        {searchTerm && (
          <p className="text-sm text-on-surface-variant mb-6 text-center">
            Showing <span className="font-bold text-primary">{filteredDepts.length}</span> department{filteredDepts.length !== 1 ? 's' : ''} for "<span className="font-bold text-on-surface">{searchTerm}</span>"
          </p>
        )}

        {/* Empty State */}
        {filteredDepts.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-4xl text-outline">search_off</span>
            </div>
            <h3 className="text-headline-md text-on-surface mb-2">No Departments Found</h3>
            <p className="text-on-surface-variant mb-6">Try a different search term.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-label-bold hover:opacity-90 transition-all shadow-md"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepts.map((dept, index) => {
              const bgClass = index % 2 === 0 ? 'bg-primary/5' : 'bg-secondary/5';
              const textClass = index % 2 === 0 ? 'text-primary' : 'text-secondary';
              
              return (
                <Link key={dept.slug} to={`/${dept.slug}`} className="group relative bg-surface rounded-2xl p-6 border border-outline-variant hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col justify-between">
                  {/* Decorative shape */}
                  <div className={`absolute -bottom-20 -right-20 w-56 h-56 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0 ${bgClass}`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300 ${bgClass}`}>
                      <span className={`material-symbols-outlined text-2xl group-hover:text-white transition-colors ${textClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        {dept.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-on-surface text-lg mb-2 group-hover:text-primary transition-colors">{dept.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">{dept.description || dept.shortDesc}</p>
                  </div>

                  <div className="relative z-10 mt-5 flex items-center gap-2 text-sm font-label-bold text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explore Department <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
