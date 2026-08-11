import React, { useState } from 'react';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="flex flex-col">
      <SEO title="Contact Us | Citizens Medical Centre" />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-20 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">Contact Us</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            We're here for you 24/7. Get in touch for appointments, emergencies, or any inquiries.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-headline-lg text-on-surface mb-6">Get In Touch</h2>
              <p className="text-on-surface-variant text-body-lg mb-8">
                Whether you need a routine checkup or emergency care, our team is ready to assist you. 
                Fill out the form or reach us directly via phone or email.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div>
                  <h3 className="text-headline-md text-base text-on-surface mb-1">Our Location</h3>
                  <p className="text-on-surface-variant text-sm">
                    Citizens Medical Centre<br />
                    123 Healthcare Avenue, Medical District<br />
                    Dhanbad, Jharkhand 826001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                </div>
                <div>
                  <h3 className="text-headline-md text-base text-on-surface mb-1">Phone Numbers</h3>
                  <p className="text-on-surface-variant text-sm">Emergency (24/7): +91 8802248261</p>
                  <p className="text-on-surface-variant text-sm">Appointments: +91 8802248262</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <div>
                  <h3 className="text-headline-md text-base text-on-surface mb-1">Email Address</h3>
                  <p className="text-on-surface-variant text-sm">info@cmcdhanbad.com</p>
                  <p className="text-on-surface-variant text-sm">hr@cmcdhanbad.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[250px] bg-surface-variant rounded-2xl overflow-hidden relative mt-4">
               {/* Replace src with actual Google Maps embed link */}
               <iframe 
                title="CMC Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.0097779435!2d86.3533804!3d23.7954931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a74cb6619dfb%3A0x29676677f44d82f7!2sDhanbad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 rounded-[24px] border border-outline-variant shadow-lg h-fit">
            <h3 className="text-headline-md text-on-surface mb-6">Send us a Message</h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-6xl text-tertiary-container mb-4">check_circle</span>
                <h4 className="text-headline-md text-on-surface mb-2">Message Sent Successfully!</h4>
                <p className="text-on-surface-variant">Thank you for reaching out. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-label-bold text-on-surface">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring focus:ring-primary/20"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-label-bold text-on-surface">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="form-input rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring focus:ring-primary/20"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-label-bold text-on-surface">Subject</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring focus:ring-primary/20"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-label-bold text-on-surface">Message</label>
                  <textarea 
                    rows="5" 
                    required 
                    className="form-textarea rounded-lg border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring focus:ring-primary/20"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="bg-primary text-on-primary py-3 rounded-full font-label-bold flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-colors mt-2 shadow-md">
                  <span className="material-symbols-outlined">send</span> Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
