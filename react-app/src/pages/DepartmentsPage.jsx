import React from 'react';
import { Link } from 'react-router-dom';
import { departmentsData } from '../data/departments';
import SEO from '../components/SEO';

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col">
      <SEO title="Centers of Excellence | Citizens Medical Centre" />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-20 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">Centers of Excellence</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Comprehensive Clinical Care Under One Roof. We provide world-class medical facilities and expertise across multiple specialties.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentsData.map((dept, index) => {
            const bgClass = index % 2 === 0 ? 'bg-primary/5' : 'bg-secondary/5';
            const textClass = index % 2 === 0 ? 'text-primary' : 'text-secondary';
            
            return (
              <Link key={dept.slug} to={`/${dept.slug}`} className="group relative bg-surface-container-lowest rounded-[24px] p-8 border border-outline-variant hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col justify-between">
                {/* Decorative background shape */}
                <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0 ${bgClass}`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 ${bgClass}`}>
                    <span className={`material-symbols-outlined text-3xl group-hover:text-white ${textClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {dept.slug.includes('cardio') ? 'cardiology' :
                       dept.slug.includes('ortho') ? 'bone' :
                       dept.slug.includes('neuro') ? 'neurology' :
                       dept.slug.includes('gynae') || dept.slug.includes('women') ? 'pregnant_woman' :
                       dept.slug.includes('pedia') || dept.slug.includes('child') ? 'child_care' :
                       dept.slug.includes('surgery') ? 'surgical' :
                       dept.slug.includes('kidney') || dept.slug.includes('nephro') ? 'health_and_safety' :
                       dept.slug.includes('urology') || dept.slug.includes('andro') ? 'water_drop' :
                       dept.slug.includes('radio') || dept.slug.includes('imaging') ? 'radiology' :
                       dept.slug.includes('emergency') ? 'emergency' :
                       dept.slug.includes('medicine') ? 'stethoscope' : 'medical_services'}
                    </span>
                  </div>
                  <h4 className="text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">{dept.title}</h4>
                  <p className="text-on-surface-variant font-body-md line-clamp-3 mb-4">{dept.description}</p>
                </div>

                <div className="relative z-10 mt-auto flex items-center gap-2 text-sm font-label-bold text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explore Department <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
