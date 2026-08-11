import React from 'react';
import { Link } from 'react-router-dom';
import { departmentsData } from '../data/departments';
import { doctorsData } from '../data/doctors';
import { testimonialsData } from '../data/testimonials';
import SEO from '../components/SEO';

export default function HomePage({ onOpenAppointment }) {
  const popularDepartments = departmentsData.slice(0, 8);
  const topDoctors = doctorsData.filter(d => d.featured).slice(0, 4);
  if (topDoctors.length === 0) topDoctors.push(...doctorsData.slice(0, 4));

  return (
    <main className="flex-1 flex flex-col">
      <SEO title="Citizens Medical Centre | Best Hospital in Dhanbad" />
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-10 md:pt-12 md:pb-16 px-margin-mobile md:px-gutter overflow-hidden flex items-center min-h-[450px]">
        {/* Background gradient/pattern */}
        <div className="absolute inset-0 bg-surface-container-lowest -z-20"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary-container/15 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-full self-start font-label-bold">
              <span className="material-symbols-outlined text-xl">award_star</span>
              #1 Ranked Hospital in Jharkhand
            </div>
            
            <h1 className="text-display-lg text-on-surface">
              Healing with <span className="text-primary">Compassion,</span><br />
              Curing with <span className="text-tertiary-container">Technology.</span>
            </h1>
            
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              Citizens Medical Centre (CMC Dhanbad) brings world-class medical expertise, advanced diagnostics, and 24/7 critical care to your neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button onClick={onOpenAppointment} className="bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container px-8 py-4 rounded-full font-label-bold transition-all shadow-md flex items-center justify-center gap-2 group text-base">
                Book an Appointment
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <a href="tel:+918802248261" className="bg-surface hover:bg-surface-variant text-primary border-2 border-outline-variant px-8 py-4 rounded-full font-label-bold transition-all flex items-center justify-center gap-2 text-base">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                Emergency: +91 8802248261
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-outline-variant/50">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-on-surface">25+</span>
                <span className="text-sm font-label-bold text-on-surface-variant uppercase tracking-wider">Expert Doctors</span>
              </div>
              <div className="w-px h-12 bg-outline-variant/50"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-on-surface">24/7</span>
                <span className="text-sm font-label-bold text-on-surface-variant uppercase tracking-wider">Trauma Care</span>
              </div>
              <div className="w-px h-12 bg-outline-variant/50"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-on-surface">15+</span>
                <span className="text-sm font-label-bold text-on-surface-variant uppercase tracking-wider">Specialties</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:h-[600px] flex items-center justify-center">
            {/* Abstract Hero Image Composition */}
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-[40px] border-surface-variant/40 rounded-full"></div>
              <div className="absolute inset-4 border-[2px] border-primary/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
              
              {/* Main image container */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                <img loading="lazy" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" alt="CMC Dhanbad Facility" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>

              {/* Floating Cards */}
              <div className="glass-card absolute top-12 -left-8 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-outline-variant/60 bg-surface/90 backdrop-blur-md animate-[bounce_4s_infinite]">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>monitor_heart</span>
                </div>
                <div>
                  <div className="font-bold text-on-surface text-sm">Advanced ICU</div>
                  <div className="text-xs font-label-bold text-primary">Level III Facilities</div>
                </div>
              </div>

              <div className="glass-card absolute bottom-20 -right-8 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-outline-variant/60 bg-surface/90 backdrop-blur-md animate-[bounce_5s_infinite_0.5s]">
                <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                </div>
                <div>
                  <div className="font-bold text-on-surface text-sm">NABH Standards</div>
                  <div className="text-xs font-label-bold text-tertiary-container">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centers of Excellence (Bento Grid) */}
      <section className="py-section-gap px-margin-mobile md:px-gutter bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-primary font-label-bold uppercase tracking-widest mb-2">Centers of Excellence</h2>
              <h3 className="text-headline-lg text-on-surface">Comprehensive Clinical Care Under One Roof</h3>
            </div>
            <Link to="/departments" className="flex items-center gap-2 text-primary hover:text-primary-container font-label-bold group">
              View All Specialties 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="bento-grid">
            {popularDepartments.map((dept, index) => {
              // Creating a staggered size effect for the bento grid
              const isLarge = index === 0 || index === 3;
              
              return (
                <Link key={dept.slug} to={`/${dept.slug}`} className={`group relative bg-surface-container-lowest rounded-[24px] p-8 border border-outline-variant hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col justify-between ${isLarge ? 'md:col-span-2' : 'col-span-1'}`}>
                  {/* Decorative background shape */}
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-surface-variant/50 rounded-full group-hover:scale-150 group-hover:bg-primary-container/20 transition-transform duration-700 ease-out z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                      <span className="material-symbols-outlined text-3xl text-primary group-hover:text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
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
                    <p className="text-on-surface-variant font-body-md line-clamp-2">{dept.description}</p>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-label-bold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explore Department <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-gap px-margin-mobile md:px-gutter bg-surface-container-low border-y border-outline-variant relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-highest/30 -skew-x-12 translate-x-32 z-0"></div>
        
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-label-bold uppercase tracking-widest mb-2">Why CMC Dhanbad?</h2>
              <h3 className="text-headline-lg text-on-surface mb-6">Setting the Benchmark for Healthcare in Jharkhand</h3>
              <p className="text-body-lg text-on-surface-variant mb-8">
                At CMC, we believe in patient-first care. Our facility is equipped with cutting-edge technology and staffed by renowned specialists to ensure you receive the best possible treatment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: 'speed', title: 'Zero Wait Emergency', desc: 'Immediate attention in critical moments.' },
                  { icon: 'biotech', title: 'Advanced Labs', desc: 'In-house high-tech diagnostic center.' },
                  { icon: 'support_agent', title: '24/7 Patient Care', desc: 'Round-the-clock nursing & support.' },
                  { icon: 'payments', title: 'Transparent Pricing', desc: 'No hidden costs, ethical billing.' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">{feature.title}</h4>
                      <p className="text-sm text-on-surface-variant">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img loading="lazy" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" alt="Hospital Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="glass-card p-6 rounded-2xl max-w-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {[1,2,3,4,5].map(star => (
                      <span key={star} className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-on-surface font-body-md italic mb-4">"The care and attention my father received at CMC was exceptional. The doctors are highly skilled and compassionate."</p>
                  <p className="font-label-bold text-primary">- Rajesh Kumar, Dhanbad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Doctors */}
      <section className="py-section-gap px-margin-mobile md:px-gutter bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-label-bold uppercase tracking-widest mb-2">Our Specialists</h2>
            <h3 className="text-headline-lg text-on-surface mb-4">Meet Our Medical Experts</h3>
            <p className="text-on-surface-variant font-body-md">Our team comprises highly qualified and experienced doctors dedicated to providing the best medical care.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topDoctors.map(doctor => (
              <div key={doctor.id} className="group relative bg-surface-container-lowest rounded-[24px] border border-outline-variant overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Doctor Image & Background */}
                <div className="relative h-[280px] bg-surface-container-low pt-8 px-8 overflow-hidden flex justify-center items-end">
                  {/* Abstract background shape */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/40 rounded-bl-[100px] -z-10"></div>
                  
                  <img loading="lazy" src={doctor.image} alt={doctor.name} className="w-48 h-48 object-cover rounded-t-[100px] border-4 border-surface-container-lowest shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-20">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Verified
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-on-surface mb-1">{doctor.name}</h4>
                  <p className="text-primary font-label-bold mb-3">{doctor.specialty}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-on-surface-variant mb-6 flex-grow">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">school</span> {doctor.qualification}</span>
                  </div>
                  <Link to={`/doctor/${doctor.id}`} className="block w-full py-2.5 rounded-full border border-outline text-on-surface font-label-bold hover:bg-primary hover:text-on-primary hover:border-primary transition-colors mt-auto">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/doctor" className="inline-flex items-center gap-2 text-primary font-label-bold hover:text-primary-container border-b-2 border-primary pb-1">
              View All Doctors <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-margin-mobile md:px-gutter relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-display-lg text-on-primary mb-6">Your Health is Our Priority</h2>
          <p className="text-on-primary/80 text-body-lg mb-10 max-w-2xl mx-auto">
            Don't delay your medical needs. Our expert team is ready to provide you with the best care possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onOpenAppointment} className="bg-surface text-primary px-8 py-4 rounded-full font-label-bold hover:bg-surface-variant transition-colors shadow-lg flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">calendar_month</span>
              Book Consultation Now
            </button>
            <a href="tel:+918802248261" className="bg-transparent border border-outline-variant text-on-primary px-8 py-4 rounded-full font-label-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">call</span>
              +91 8802248261
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
