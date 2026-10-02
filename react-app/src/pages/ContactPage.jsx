import React from "react";
import SEO from "../components/SEO";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <SEO title="Contact Us | Citizens Medical Centre" />

      {/* Header */}
      <div className="relative bg-gradient-to-br from-primary to-secondary py-20 px-margin-mobile md:px-gutter text-center overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5"></div>
        <div className="relative z-10 max-w-xl mx-auto">
          <h1 className="text-display-lg text-white mb-3 drop-shadow-sm">Contact Us</h1>
          <p className="text-white/85 text-body-md">
            We&apos;re here for you 24/7. Reach out for appointments, emergencies, or any inquiries.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-headline-lg text-on-surface mb-2">Get In Touch</h2>
              <p className="text-on-surface-variant">
                Walk in anytime or call us — our team is always ready to help.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface mb-1">Our Location</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Ground Floor, Binod Bihari Chowk, CMC Hospital<br />
                    below SBI Bank, Dhanbad, Jharkhand 828130
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Binod+Bihari+Chowk+CMC+Hospital+Dhanbad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-secondary font-bold text-sm mt-2 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">directions</span>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant">
                <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface mb-1">Phone Numbers</h3>
                  <a href="tel:+918235540809" className="block text-on-surface-variant text-sm hover:text-primary transition-colors">
                    Emergency (24/7): <strong>+91 8235540809</strong>
                  </a>
                  <a href="tel:+919263124900" className="block text-on-surface-variant text-sm hover:text-primary transition-colors mt-1">
                    Appointments: <strong>+91 9263124900</strong>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface mb-1">Email Address</h3>
                  <a href="mailto:info@cmcdhanbad.com" className="block text-on-surface-variant text-sm hover:text-primary transition-colors">info@cmcdhanbad.com</a>
                  <a href="mailto:hr@cmcdhanbad.com" className="block text-on-surface-variant text-sm hover:text-primary transition-colors mt-1">hr@cmcdhanbad.com</a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant">
                <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface mb-1">Working Hours</h3>
                  <p className="text-on-surface-variant text-sm">Mon - Sat: 10:00 AM – 6:00 PM</p>
                  <p className="text-on-surface-variant text-sm mt-0.5">Sunday: <strong className="text-primary">Prior Appointment</strong></p>
                  <p className="text-on-surface-variant text-sm mt-0.5">Emergency & ICU: <strong className="text-secondary">24 / 7</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Form */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-[24px] border border-outline-variant shadow-sm">
              <h2 className="text-headline-md text-on-surface mb-6">Send Us a Message</h2>
              <form className="flex flex-col gap-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const subject = `Inquiry from ${formData.get('name')}`;
                const body = `Name: ${formData.get('name')}%0D%0APhone: ${formData.get('phone')}%0D%0AEmail: ${formData.get('email')}%0D%0A%0D%0AMessage:%0D%0A${formData.get('message')}`;
                window.location.href = `mailto:info@cmcdhanbad.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                e.target.reset();
                alert('Thank you for your message! Your default mail client has been opened.');
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold text-on-surface">Full Name <span className="text-error">*</span></label>
                    <input name="name" type="text" required placeholder="e.g. Rahul Sharma" className="form-input w-full rounded-lg border-outline-variant bg-surface focus:border-secondary focus:ring focus:ring-secondary/20 text-on-surface text-sm" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold text-on-surface">Phone <span className="text-error">*</span></label>
                    <input name="phone" type="tel" required placeholder="e.g. 9876543210" className="form-input w-full rounded-lg border-outline-variant bg-surface focus:border-secondary focus:ring focus:ring-secondary/20 text-on-surface text-sm" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-on-surface">Email Address</label>
                  <input name="email" type="email" placeholder="rahul@example.com" className="form-input w-full rounded-lg border-outline-variant bg-surface focus:border-secondary focus:ring focus:ring-secondary/20 text-on-surface text-sm" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-on-surface">Message <span className="text-error">*</span></label>
                  <textarea name="message" rows="4" required placeholder="How can we help you?" className="form-textarea w-full rounded-lg border-outline-variant bg-surface focus:border-secondary focus:ring focus:ring-secondary/20 text-on-surface text-sm resize-none"></textarea>
                </div>
                <button type="submit" className="mt-2 bg-gradient-to-r from-primary to-secondary text-white font-label-bold py-3.5 rounded-xl shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">send</span> Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full h-[250px] bg-surface-variant rounded-2xl overflow-hidden shadow-md border border-outline-variant">
                <iframe
                  title="CMC Dhanbad Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.529815096503!2d86.41724675!3d23.7694539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bb1e73715d03%3A0xc3c94294a8f946!2sBinod%20Bihari%20Chowk%2C%20Dhanbad%2C%20Jharkhand%20828130!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
