import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { departmentsData } from '../data/departments';
import { doctorsData } from '../data/doctors';
import SEO from '../components/SEO';

export default function DepartmentDetailPage() {
  const { slug } = useParams();
  
  const department = departmentsData.find(d => d.slug === slug);
  const deptDoctors = department 
    ? doctorsData.filter(doc => doc.category_id === department.category_id)
    : [];

  if (!department) {
    return (
      <div className="py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">search_off</span>
        <h2 className="text-headline-md text-on-surface mb-2">Department Not Found</h2>
        <Link to="/" className="mt-4 bg-primary text-on-primary px-6 py-2 rounded-full font-label-bold hover:bg-primary-container hover:text-on-primary-container transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <SEO title={`${department.title} | Citizens Medical Centre`} description={department.shortDesc} />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-16 md:py-24 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-label-bold mb-6 hover:underline">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Home
          </Link>
          <h1 className="text-display-lg text-on-surface mb-4">{department.title}</h1>
          <p className="text-body-lg text-on-surface-variant">
            {department.shortDesc}
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 items-start">
          
          {/* Main Content */}
          <div>
            <div className="rounded-[24px] overflow-hidden shadow-lg mb-10 h-[250px] md:h-[400px]">
              <img loading="lazy" 
                src={department.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"} 
                alt={department.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <h2 className="text-headline-lg text-on-surface mb-6">Overview</h2>
            <div 
              className="prose prose-lg prose-slate text-on-surface-variant max-w-none leading-relaxed mb-10"
              dangerouslySetInnerHTML={{ __html: (department.longDesc || '').replace(/\n/g, '<br/>') }} 
            />

            <h3 className="text-headline-md text-on-surface mb-6">Key Treatments & Procedures</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {(department.keyServices || []).map((t, idx) => (
                <li key={idx} className="flex items-center gap-3 p-4 bg-surface-container-lowest rounded-[12px] border border-outline-variant shadow-sm">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-label-bold text-on-surface">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8 sticky top-28">
            
            {/* Dept Doctors */}
            <div className="bg-surface rounded-[24px] border border-outline-variant shadow-sm p-6">
              <h3 className="text-headline-md text-on-surface mb-4 text-xl border-b border-outline-variant pb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">medical_information</span>
                Our Specialists
              </h3>
              
              {deptDoctors.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {deptDoctors.map(doc => (
                    <div key={doc.id} className="flex items-center gap-4 p-3 hover:bg-surface-container rounded-xl transition-colors">
                      <img loading="lazy" src={doc.image} alt={doc.name} className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-surface" />
                      <div>
                        <h4 className="font-bold text-on-surface text-sm mb-1">{doc.name}</h4>
                        <Link to={`/doctor/${doc.id}`} className="text-xs font-label-bold text-primary hover:underline">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-on-surface-variant text-sm">No specialists listed for this department currently.</p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
