import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { departmentsData } from '../data/departments';
import { doctorsData } from '../data/doctors';
import { testimonialsData } from '../data/testimonials';
import SEO from '../components/SEO';
import DoctorCard from '../components/DoctorCard';

export default function HomePage() {
  const popularDepartments = departmentsData.slice(0, 6);
  const topDoctors = doctorsData.filter(d => d.featured).slice(0, 4);
  if (topDoctors.length === 0) topDoctors.push(...doctorsData.slice(0, 4));

  // Testimonial Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 flex flex-col">
      <SEO title="Citizens Medical Centre | Best Hospital in Dhanbad" />
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-10 md:pt-12 md:pb-16 px-margin-mobile md:px-gutter overflow-hidden flex items-center min-h-[450px]">
        {/* Background gradient/pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 -z-20"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 relative z-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full self-start font-label-bold border border-primary/20">
              <span className="material-symbols-outlined text-xl">emergency</span>
              Accident &amp; Emergency 24x7
            </div>
            
            <h1 className="text-display-lg text-on-surface leading-tight">
              Healing with <span className="text-primary">Compassion,</span><br />
              Curing with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technology.</span>
            </h1>
            
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              Citizens Medical Centre (CMC Dhanbad) brings world-class medical expertise, advanced diagnostics, and 24/7 critical care to your neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/doctor" className="bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-4 rounded-full font-label-bold transition-all shadow-md hover:shadow-lg hover:opacity-90 flex items-center justify-center gap-2 group text-base">
                Find a Doctor
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <a href="tel:+918235540809" className="bg-surface hover:bg-surface-variant text-primary border-2 border-outline-variant px-8 py-4 rounded-full font-label-bold transition-all flex items-center justify-center gap-2 text-base shadow-sm">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                Emergency: +91 8235540809
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-outline-variant/50">
              <div className="flex flex-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">17+</span>
                <span className="text-sm font-label-bold text-on-surface-variant uppercase tracking-wider">Expert Doctors</span>
              </div>
              <div className="w-px h-12 bg-outline-variant/50"></div>
              <div className="flex flex-col animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">24/7</span>
                <span className="text-sm font-label-bold text-on-surface-variant uppercase tracking-wider">Accident &amp; Emergency</span>
              </div>
              <div className="w-px h-12 bg-outline-variant/50"></div>
              <div className="flex flex-col animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">20+</span>
                <span className="text-sm font-label-bold text-on-surface-variant uppercase tracking-wider">Specialties</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:h-[600px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Abstract Hero Image Composition */}
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-[40px] border-surface-variant/40 rounded-full"></div>
              <div className="absolute inset-4 border-[2px] border-secondary/30 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
              
              {/* Main image container */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl border-4 border-surface">
                <img loading="lazy" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" alt="CMC Dhanbad Facility" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>

              {/* Floating Cards */}
              <div className="glass-card absolute top-12 -left-8 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-outline-variant/60 bg-surface/90 backdrop-blur-md animate-[bounce_4s_infinite]">
                <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>monitor_heart</span>
                </div>
                <div>
                  <div className="font-bold text-on-surface text-sm">Advanced ICU</div>
                  <div className="text-xs font-label-bold text-primary">Level III Facilities</div>
                </div>
              </div>

              <div className="glass-card absolute bottom-20 -right-8 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-outline-variant/60 bg-surface/90 backdrop-blur-md animate-[bounce_5s_infinite_0.5s]">
                <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_hospital</span>
                </div>
                <div>
                  <div className="font-bold text-on-surface text-sm">ISO Certified</div>
                  <div className="text-xs font-label-bold text-secondary">Super Speciality Hospital</div>
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
              <h2 className="text-secondary font-label-bold uppercase tracking-widest mb-2">Centers of Excellence</h2>
              <h3 className="text-headline-lg text-on-surface">Comprehensive Clinical Care Under One Roof</h3>
            </div>
            <Link to="/departments" className="flex items-center gap-2 text-primary hover:text-secondary font-label-bold group transition-colors">
              View All Specialties 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="bento-grid">
            {popularDepartments.map((dept, index) => {
              const isLarge = index === 0 || index === 3;
              const bgClass = index % 2 === 0 ? 'bg-primary/5' : 'bg-secondary/5';
              const textClass = index % 2 === 0 ? 'text-primary' : 'text-secondary';
              
              return (
                <Link key={dept.slug} to={`/${dept.slug}`} className={`group relative bg-surface-container-lowest rounded-[24px] p-8 border border-outline-variant hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col justify-between ${isLarge ? 'md:col-span-2' : 'col-span-1'}`}>
                  {/* Decorative background shape */}
                  <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0 ${bgClass}`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 ${bgClass}`}>
                      <span className={`material-symbols-outlined text-3xl group-hover:text-white ${textClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        {dept.icon}
                      </span>
                    </div>
                    <h4 className="text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">{dept.title}</h4>
                    <p className="text-on-surface-variant font-body-md line-clamp-2">{dept.shortDesc}</p>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-label-bold text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
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
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-highest/30 -skew-x-12 translate-x-32 z-0"></div>
        
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-secondary font-label-bold uppercase tracking-widest mb-2">Why CMC Dhanbad?</h2>
              <h3 className="text-headline-lg text-on-surface mb-6">Setting the Benchmark for Healthcare in Jharkhand</h3>
              <p className="text-body-lg text-on-surface-variant mb-8">
                At CMC, we believe in patient-first care. Our facility is equipped with cutting-edge technology and staffed by renowned specialists to ensure you receive the best possible treatment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: 'emergency', title: 'Accident & Emergency 24x7', desc: 'Round-the-clock emergency response.', color: 'primary' },
                  { icon: 'biotech', title: 'Radiology 24x7', desc: 'Advanced imaging — MRI, CT, Ultrasound.', color: 'secondary' },
                  { icon: 'support_agent', title: '24/7 Patient Care', desc: 'Round-the-clock nursing & support.', color: 'secondary' },
                  { icon: 'local_pharmacy', title: 'Pharmacy 24x7', desc: 'In-house pharmacy always available.', color: 'primary' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${feature.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                      <span className={`material-symbols-outlined ${feature.color === 'primary' ? 'text-primary' : 'text-secondary'}`} style={{ fontVariationSettings: "'FILL' 1" }}>{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-sm text-on-surface-variant">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img loading="lazy" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" alt="Hospital Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div>
              
              {/* Testimonial Carousel */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="glass-card p-6 rounded-2xl max-w-md relative overflow-hidden border-t-4 border-secondary">
                  <div className="flex items-center gap-2 mb-3">
                    {[1,2,3,4,5].map(star => (
                      <span key={star} className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  
                  <div className="min-h-[120px] flex flex-col justify-between">
                    <p className="text-on-surface font-body-md italic mb-4 transition-opacity duration-500 line-clamp-3">
                      "{testimonialsData[currentTestimonial]?.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                        <img src={testimonialsData[currentTestimonial]?.image} alt="Patient" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm">{testimonialsData[currentTestimonial]?.name}</p>
                        <p className="text-xs text-on-surface-variant">{testimonialsData[currentTestimonial]?.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Carousel Indicators */}
                  <div className="flex gap-1.5 mt-4">
                    {testimonialsData.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentTestimonial(idx)}
                        className={`h-1.5 rounded-full transition-all ${idx === currentTestimonial ? 'w-4 bg-secondary' : 'w-1.5 bg-outline-variant hover:bg-outline'}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
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
            <h2 className="text-secondary font-label-bold uppercase tracking-widest mb-2">Our Specialists</h2>
            <h3 className="text-headline-lg text-on-surface mb-4">Meet Our Medical Experts</h3>
            <p className="text-on-surface-variant font-body-md">Our team comprises highly qualified and experienced doctors dedicated to providing the best medical care.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/doctor" className="inline-flex items-center gap-2 text-primary font-label-bold hover:text-secondary border-b-2 border-primary hover:border-secondary transition-colors pb-1">
              View All Doctors <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
