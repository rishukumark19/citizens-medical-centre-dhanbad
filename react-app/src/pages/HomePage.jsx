import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { departmentsData } from '../data/departments';
import { doctorsData } from '../data/doctors';
import { testimonialsData } from '../data/testimonials';
import SEO from '../components/SEO';
import DoctorCard from '../components/DoctorCard';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
  const popularDepartments = departmentsData.slice(0, 6);
  const topDoctors = doctorsData.filter(d => d.featured).slice(0, 4);
  if (topDoctors.length === 0) topDoctors.push(...doctorsData.slice(0, 4));

  // Testimonial Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero Image Slideshow
  const heroImages = [
    'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(heroTimer);
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <SEO title="Citizens Medical Centre | Best Hospital in Dhanbad" />
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-10 md:pt-12 md:pb-16 px-margin-mobile md:px-gutter overflow-hidden flex items-center min-h-[480px]">
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
            
            <h1 className="text-display-lg text-on-surface leading-tight font-bold">
              Healing with <span className="text-primary">Compassion,</span><br />
              Curing with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technology.</span>
            </h1>
            
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              Citizens Medical Centre (CMC Dhanbad) brings world-class medical expertise, advanced diagnostics, and 24/7 critical care to your neighborhood.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link to="/doctor" className="bg-gradient-to-r from-primary to-secondary text-on-primary px-6 sm:px-8 py-4 rounded-full font-label-bold transition-all shadow-md hover:shadow-lg hover:opacity-90 flex items-center justify-center gap-2 group text-sm sm:text-base w-full sm:w-auto">
                Find a Doctor
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <a href="tel:+918235540809" className="bg-surface hover:bg-surface-variant text-primary border-2 border-outline-variant px-6 sm:px-8 py-4 rounded-full font-label-bold transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-sm w-full sm:w-auto">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                Emergency: +91 8235540809
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 pt-8 border-t border-outline-variant/50">
              <div className="flex flex-col animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">17+</span>
                <span className="text-xs sm:text-sm font-label-bold text-on-surface-variant tracking-wide">Expert Doctors</span>
              </div>
              <div className="flex flex-col animate-fade-in border-l border-outline-variant/50 pl-4 sm:pl-6" style={{ animationDelay: '0.3s' }}>
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">24/7</span>
                <span className="text-xs sm:text-sm font-label-bold text-on-surface-variant tracking-wide">Accident &amp; Emergency</span>
              </div>
              <div className="flex flex-col animate-fade-in col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-outline-variant/50 pt-4 sm:pt-0 pl-0 sm:pl-6 mt-2 sm:mt-0" style={{ animationDelay: '0.4s' }}>
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">20+</span>
                <span className="text-xs sm:text-sm font-label-bold text-on-surface-variant tracking-wide">Specialties</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 hidden lg:flex h-[600px] items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Abstract Hero Image Composition */}
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-[24px] border-surface-variant/40 rounded-full"></div>
              
              {/* Main image container — crossfade slideshow */}
              <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl border-4 border-surface">
                {heroImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="CMC Dhanbad Facility"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ease-in-out"
                    style={{ opacity: idx === currentHeroImage ? 1 : 0 }}
                  />
                ))}
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>

              {/* Floating Cards */}
              <div className="glass-card absolute top-12 -left-4 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-outline-variant/60 bg-surface/90 backdrop-blur-md animate-float hover:shadow-2xl transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>monitor_heart</span>
                </div>
                <div>
                  <div className="font-bold text-on-surface text-sm">Advanced ICU</div>
                  <div className="text-xs font-label-bold text-primary">Level III Facilities</div>
                </div>
              </div>

              <div className="glass-card absolute bottom-20 -right-4 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-outline-variant/60 bg-surface/90 backdrop-blur-md animate-float-delayed hover:shadow-2xl transition-all duration-300 cursor-default">
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

      {/* Marquee Trust Bar */}
      <div className="py-4 bg-gradient-to-r from-primary via-[#0a6bbf] to-secondary overflow-hidden relative">
        <div className="marquee-container">
          <div className="animate-marquee flex items-center gap-0">
            {[
              { icon: 'verified', text: 'ISO 9001:2015 Certified' },
              { icon: 'emergency', text: '24/7 Emergency Care' },
              { icon: 'biotech', text: 'Advanced Radiology' },
              { icon: 'monitor_heart', text: 'Level III ICU' },
              { icon: 'local_hospital', text: 'Super Speciality Hospital' },
              { icon: 'group', text: '17+ Expert Specialists' },
              { icon: 'science', text: 'State-of-the-art Labs' },
              { icon: 'accessible', text: 'Cashless Treatment' },
              { icon: 'verified', text: 'ISO 9001:2015 Certified' },
              { icon: 'emergency', text: '24/7 Emergency Care' },
              { icon: 'biotech', text: 'Advanced Radiology' },
              { icon: 'monitor_heart', text: 'Level III ICU' },
              { icon: 'local_hospital', text: 'Super Speciality Hospital' },
              { icon: 'group', text: '17+ Expert Specialists' },
              { icon: 'science', text: 'State-of-the-art Labs' },
              { icon: 'accessible', text: 'Cashless Treatment' },
            ].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-white/90 text-sm font-bold px-6 whitespace-nowrap">
                <span className="material-symbols-outlined text-[16px] text-white/80" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                {item.text}
                <span className="mx-3 text-white/30">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Centers of Excellence (Bento Grid) */}
      <section className="py-section-gap px-margin-mobile md:px-gutter bg-surface">
        <div className="max-w-container-max mx-auto">
          <ScrollReveal className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-12">
            <div className="max-w-3xl xl:max-w-4xl">
              <span className="section-pill mb-3 inline-flex"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_hospital</span> Centers of Excellence</span>
              <h3 className="text-headline-lg text-on-surface mt-3">Comprehensive Clinical Care Under One Roof</h3>
            </div>
            <Link to="/departments" className="flex items-center gap-2 text-primary hover:text-secondary font-label-bold group transition-colors">
              View All Specialties 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {popularDepartments.map((dept, index) => {
              const bgClass = index % 2 === 0 ? 'bg-primary/5' : 'bg-secondary/5';
              const textClass = index % 2 === 0 ? 'text-primary' : 'text-secondary';
              
              return (
                <motion.div
                  key={dept.slug}
                  className="h-full flex flex-col"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    to={`/${dept.slug}`} 
                    className="group relative bg-white rounded-[24px] p-6 md:p-8 border border-outline-variant/60 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/8 overflow-hidden flex flex-col justify-between h-full min-h-[340px]"
                  >
                    {/* Decorative background shape */}
                    <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out z-0 pointer-events-none ${bgClass}`}></div>
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300 ${bgClass} shrink-0`}>
                        <span className={`material-symbols-outlined text-4xl group-hover:text-white transition-colors duration-300 ${textClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                          {dept.icon}
                        </span>
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors min-h-[3.75rem] md:min-h-[4.25rem] flex items-start leading-snug">
                        {dept.title}
                      </h4>
                      
                      <p className="text-on-surface-variant font-body-md line-clamp-2 min-h-[2.75rem] md:min-h-[3rem]">
                        {dept.shortDesc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                      <span className="text-sm font-label-bold text-secondary group-hover:text-primary transition-colors flex items-center gap-1.5">
                        Explore Department
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-sm">north_east</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section-gap px-margin-mobile md:px-gutter bg-surface-container-low border-y border-outline-variant relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-highest/30 -skew-x-12 translate-x-32 z-0 hidden md:block overflow-hidden"></div>
        
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <span className="section-pill mb-3 inline-flex"><span className="material-symbols-outlined text-[14px]">shield</span> Why CMC Dhanbad?</span>
                <h3 className="text-headline-lg text-on-surface mb-4 mt-3">Setting the Benchmark for Healthcare in Jharkhand</h3>
                <p className="text-body-lg text-on-surface-variant mb-8">
                  At CMC, we believe in patient-first care. Our facility is equipped with cutting-edge technology and staffed by renowned specialists to ensure you receive the best possible treatment.
                </p>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { icon: 'emergency', title: 'Accident & Emergency 24x7', desc: 'Round-the-clock emergency response.', color: 'primary' },
                  { icon: 'biotech', title: 'Radiology 24x7', desc: 'Advanced imaging — MRI, CT, Ultrasound.', color: 'secondary' },
                  { icon: 'support_agent', title: '24/7 Patient Care', desc: 'Round-the-clock nursing & support.', color: 'secondary' },
                  { icon: 'local_pharmacy', title: 'Pharmacy 24x7', desc: 'In-house pharmacy always available.', color: 'primary' }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-4 items-start p-4 rounded-2xl hover:bg-surface-container-low transition-colors duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-sm ${feature.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                      <span className={`material-symbols-outlined ${feature.color === 'primary' ? 'text-primary' : 'text-secondary'}`} style={{ fontVariationSettings: "'FILL' 1" }}>{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-sm text-on-surface-variant">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>


            <ScrollReveal direction="left" delay={0.2} className="relative rounded-3xl overflow-hidden shadow-2xl h-[350px] md:h-[500px]">
              <img loading="lazy" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" alt="Hospital Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div>
              
              {/* Testimonial Carousel */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-8">
                <div className="glass-card p-4 md:p-6 rounded-2xl max-w-md relative overflow-hidden border-t-4 border-secondary">
                  <div className="flex items-center gap-2 mb-3">
                    {[1,2,3,4,5].map(star => (
                      <span key={star} className="material-symbols-outlined text-secondary text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  
                  <div className="min-h-[100px] md:min-h-[120px] flex flex-col justify-between">
                    <div className="relative mb-4 h-[80px]">
                      {testimonialsData.map((testimonial, idx) => (
                        <p 
                          key={idx} 
                          className={`absolute top-0 left-0 w-full text-on-surface font-body-sm md:font-body-md italic transition-opacity duration-500 line-clamp-3 ${idx === currentTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                          "{testimonial.quote}"
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden shrink-0">
                        <img src={testimonialsData[currentTestimonial]?.image} alt="Patient" className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-primary text-xs md:text-sm truncate">{testimonialsData[currentTestimonial]?.name}</p>
                        <p className="text-[10px] md:text-xs text-on-surface-variant truncate">{testimonialsData[currentTestimonial]?.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-1.5">
                      {testimonialsData.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setCurrentTestimonial(idx)}
                          className={`h-2 rounded-full transition-all ${idx === currentTestimonial ? 'w-5 bg-secondary' : 'w-2 bg-outline-variant hover:bg-outline'}`}
                          aria-label={`Go to testimonial ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonialsData.length - 1 : prev - 1)}
                        className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                      </button>
                      <button 
                        onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonialsData.length)}
                        className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Expert Doctors */}
      <section className="py-section-gap px-margin-mobile md:px-gutter bg-surface">
        <div className="max-w-container-max mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-pill mb-3 inline-flex"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>stethoscope</span> Our Specialists</span>
            <h3 className="text-headline-lg text-on-surface mb-4 mt-3">Meet Our Medical Experts</h3>
            <p className="text-on-surface-variant font-body-md">Our team comprises highly qualified and experienced doctors dedicated to providing the best medical care.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDoctors.map((doctor, i) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={i} />
            ))}
          </div>
          
          <ScrollReveal delay={0.2} className="text-center mt-12">
            <Link
              to="/doctor"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-3 rounded-full font-label-bold hover:opacity-90 hover:shadow-lg transition-all duration-300 shadow-md group"
            >
              View All Doctors
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
