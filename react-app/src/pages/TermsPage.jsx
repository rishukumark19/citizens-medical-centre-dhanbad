import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: 'gavel' },
    { id: 'emergency', title: '2. Emergency Care Protocol', icon: 'emergency' },
    { id: 'disclaimer', title: '3. Medical Advice Disclaimer', icon: 'stethoscope' },
    { id: 'appointments', title: '4. Appointments & Consultations', icon: 'calendar_month' },
    { id: 'billing', title: '5. Admissions, Billing & TPA', icon: 'receipt_long' },
    { id: 'conduct', title: '6. Patient & Visitor Conduct', icon: 'security' },
    { id: 'consent', title: '7. Clinical Informed Consent', icon: 'assignment' },
    { id: 'ip', title: '8. Intellectual Property', icon: 'copyright' },
    { id: 'jurisdiction', title: '9. Governing Law & Jurisdiction', icon: 'account_balance' },
    { id: 'contact', title: '10. Hospital Contact Details', icon: 'contact_support' },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col bg-surface min-h-screen">
      <SEO 
        title="Terms & Conditions | Citizens Medical Centre Dhanbad" 
        description="Review the terms and conditions of service, medical disclaimers, appointment guidelines, and patient policies at Citizens Medical Centre (CMC Dhanbad)."
      />

      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-primary via-[#0a6bbf] to-secondary py-20 md:py-24 px-margin-mobile md:px-gutter text-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/30 blur-2xl pointer-events-none" 
        />

        <motion.div 
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[13px] font-bold mb-4 border border-white/25 shadow-sm">
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
            Hospital & Portal Terms of Service
          </span>
          <h1 className="text-display-lg md:text-5xl text-white mb-4 drop-shadow-sm font-bold">Terms & Conditions</h1>
          <p className="text-white/85 text-body-lg max-w-2xl mx-auto leading-relaxed">
            Essential guidelines, service standards, patient responsibilities, and clinical policies at Citizens Medical Centre.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/70">
            <span>Effective Date: January 2026</span>
            <span>•</span>
            <span>Citizens Medical Centre, Dhanbad</span>
          </div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="py-12 md:py-16 px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block sticky top-28 bg-white border border-outline-variant/60 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-4 px-2">Table of Contents</h3>
            <nav className="flex flex-col gap-1.5">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2.5 ${
                    activeSection === sec.id
                      ? 'bg-primary/10 text-primary font-bold shadow-xs'
                      : 'text-on-surface-variant hover:bg-surface-variant/40 hover:text-on-surface'
                  }`}
                >
                  <span className={`material-symbols-outlined text-base ${activeSection === sec.id ? 'text-primary' : 'text-outline'}`}>
                    {sec.icon}
                  </span>
                  <span className="truncate">{sec.title}</span>
                </button>
              ))}
            </nav>

            <div className="mt-6 p-4 rounded-xl bg-red-50/70 border border-red-200 text-xs">
              <p className="font-bold text-red-900 mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-red-600">emergency</span>
                Medical Emergency?
              </p>
              <p className="text-red-800 text-[11px] leading-relaxed mb-3">
                Do not wait for online messages. Call our 24/7 Emergency unit immediately.
              </p>
              <a 
                href="tel:+918235540809" 
                className="inline-flex items-center gap-1.5 text-red-700 font-bold hover:underline"
              >
                +91 8235540809
              </a>
            </div>
          </aside>

          {/* Terms Text Content */}
          <main className="flex flex-col gap-10 bg-white border border-outline-variant/60 rounded-3xl p-6 md:p-12 shadow-sm text-on-surface">
            
            {/* Critical Emergency Alert */}
            <div className="p-5 md:p-6 rounded-2xl bg-amber-50/80 border border-amber-300 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">warning</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-amber-950 mb-1">Important Patient Notice</h4>
                <p className="text-xs md:text-sm text-amber-900 leading-relaxed">
                  These terms regulate the use of Citizens Medical Centre's clinical services, outpatient appointments, 
                  and online facilities. Healthcare is personalized; nothing on our digital platforms replaces direct 
                  face-to-face consultation with a certified medical doctor.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">01</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Acceptance of Terms</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>
                    Welcome to Citizens Medical Centre ("CMC Dhanbad", "Hospital", "we", "us", or "our"), located at Binod Bihari Chowk, Dhanbad, Jharkhand 828130. 
                  </p>
                  <p>
                    By accessing or using our hospital facilities, requesting OPD consultations, undergoing diagnostic procedures, or utilizing our official web portal, you ("Patient", "User", "Visitor", or "Guardian") agree to be legally bound by these Terms and Conditions and our Privacy Policy. If you do not accept these terms, you should not utilize our website or online facilities.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 2 */}
            <section id="emergency" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">02</span>
                  <h2 className="text-xl md:text-2xl font-bold text-red-950">Emergency Care Protocol</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs md:text-sm text-red-900 space-y-2">
                    <p className="font-bold">
                      IF YOU OR SOMEONE WITH YOU IS EXPERIENCING A MEDICAL EMERGENCY — SUCH AS ACUTE CHEST PAIN, LOSS OF CONSCIOUSNESS, SEVERE BLEEDING, SEVERE BREATHING DIFFICULTY, POISONING, STROKE SYMPTOMS, OR ACUTE TRAUMA:
                    </p>
                    <p>
                      <strong>DO NOT USE THIS WEBSITE OR ONLINE ENQUIRY FORMS.</strong> Digital forms, emails, and online requests are monitored during administrative working hours and cannot substitute immediate emergency triage.
                    </p>
                    <p>
                      Immediately report to the <strong>24/7 Emergency & Trauma Department at Citizens Medical Centre</strong> or dial our round-the-clock emergency desk directly at <a href="tel:+918235540809" className="font-bold underline text-red-700">+91 8235540809</a>.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 3 */}
            <section id="disclaimer" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">03</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Medical Advice Disclaimer</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>
                    All informational materials, health blogs, department summaries, doctor profiles, and wellness guides published on our digital platforms are intended strictly for educational awareness and public health information.
                  </p>
                  <p>
                    Reading this website does <strong>not</strong> create a formal doctor-patient relationship. Nothing contained herein constitutes personal clinical diagnosis, personalized drug prescription, or surgical advice. Patients must consult our qualified specialists in-person or via official hospital consultations for personalized assessment.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 4 */}
            <section id="appointments" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">04</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Appointments, Delays & Doctor Availability</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <ul className="space-y-2.5 list-disc list-inside text-xs md:text-sm text-on-surface-variant">
                    <li><strong>Booking Confirmations:</strong> Online appointment requests are tentative until confirmed by our central scheduling desk via SMS, phone call, or email.</li>
                    <li><strong>Emergency Preemption:</strong> Because our senior consultants and surgeons manage critical emergencies and urgent operation theatre cases, consultation timings may occasionally experience unavoidable delays or rescheduling. We appreciate patient cooperation during such unforeseen life-saving emergencies.</li>
                    <li><strong>Cancellations & Rescheduling:</strong> If you cannot attend your scheduled OPD visit, please inform the reception at least 2 hours in advance to allow another patient in need to receive care.</li>
                  </ul>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 5 */}
            <section id="billing" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">05</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Admissions, Billing & Cashless Insurance (TPA)</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 rounded-xl border border-outline-variant/60 bg-surface/40">
                      <h4 className="font-bold text-sm text-primary mb-1">Financial Estimates</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Financial quotes provided prior to admission or surgery are clinical approximations based on anticipated care. Final hospital billing is determined by actual medication, surgical consumables, implants, room category, and clinical length of stay.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-outline-variant/60 bg-surface/40">
                      <h4 className="font-bold text-sm text-primary mb-1">Cashless Insurance Claims</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Cashless approval is subject to validation by your TPA / insurance provider. Non-medical charges, deductibles, co-pays, or claims rejected by insurers must be paid in full by the patient prior to discharge.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 6 */}
            <section id="conduct" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">06</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Patient & Visitor Code of Conduct</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs md:text-sm text-blue-950 space-y-2">
                    <p className="font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-primary">verified_user</span>
                      Zero Tolerance for Violence Against Healthcare Personnel
                    </p>
                    <p>
                      Citizens Medical Centre maintains a strict <strong>Zero Tolerance Policy</strong> against verbal abuse, physical violence, intimidation, or property damage directed at doctors, nurses, paramedics, or hospital staff.
                    </p>
                    <p>
                      All healthcare personnel are protected under state and central Medicare Protection Acts. Any assault or vandalism will result in immediate police intervention and criminal prosecution.
                    </p>
                  </div>

                  <p className="pt-2 text-xs md:text-sm">Patients, family members, and visitors are required to follow these facility guidelines:</p>
                  <ul className="space-y-1.5 list-disc list-inside text-xs md:text-sm text-on-surface-variant">
                    <li>Strict prohibition of smoking, consumption of alcohol, gutkha, or betel nut anywhere on hospital premises.</li>
                    <li>Observance of ICU and ward visiting hours to safeguard vulnerable patients against infections.</li>
                    <li>Limiting visitor numbers to one designated attendant per in-patient bed.</li>
                    <li>Cooperation with hospital security and bio-medical waste segregation protocols.</li>
                  </ul>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 7 */}
            <section id="consent" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">07</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Clinical Informed Consent</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>
                    Before performing any surgery, anesthesia, invasive diagnostic procedure, transfusion, or high-risk therapy, our medical staff will counsel the patient (or legal guardian) regarding clinical indications, reasonable alternatives, and known risks.
                  </p>
                  <p>
                    Written informed consent is mandatory prior to such medical interventions, except in sudden life-threatening emergency resuscitations where immediate action is required to preserve life.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 8 */}
            <section id="ip" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">08</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Intellectual Property Rights</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>
                    All logos, service marks, graphics, clinical photographs, software code, user interface designs, and written content on this website are the intellectual property of Citizens Medical Centre and its technology partner CrossTech.
                  </p>
                  <p>
                    Unauthorized duplication, scraping, distribution, or reproduction of any visual or textual asset without prior written permission is strictly prohibited.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 9 */}
            <section id="jurisdiction" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">09</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Governing Law & Legal Jurisdiction</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>
                    These Terms and Conditions and any clinical relationship formed with Citizens Medical Centre shall be governed and interpreted in accordance with the substantive laws of the Republic of India.
                  </p>
                  <p>
                    Any legal proceeding, dispute, claim, or controversy arising out of or relating to hospital treatment, admission, billing, or portal usage shall be subject to the exclusive jurisdiction of the competent courts of law located in <strong>Dhanbad, Jharkhand, India</strong>.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 10 */}
            <section id="contact" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">10</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Hospital Helpdesk & Contact Desk</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-4 pt-2">
                  <p>
                    For feedback, billing queries, appointment questions, or clarifications regarding these terms:
                  </p>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#132847] text-white space-y-3 shadow-md">
                    <h4 className="font-bold text-base text-secondary">Hospital Administrative Desk</h4>
                    <p className="text-xs text-white/80"><strong>Hospital:</strong> Citizens Medical Centre (CMC Dhanbad)</p>
                    <p className="text-xs text-white/80"><strong>Location:</strong> Binod Bihari Chowk, CMC Hospital, below SBI Bank, Dhanbad, Jharkhand 828130</p>
                    <p className="text-xs text-white/80"><strong>Helpline / OPD:</strong> +91 8235540809</p>
                    <p className="text-xs text-white/80"><strong>Email:</strong> info@cmcdhanbad.com</p>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* Bottom Links */}
            <div className="pt-6 border-t border-outline-variant/60 flex flex-wrap items-center justify-between gap-4 text-xs">
              <Link to="/privacy-policy" className="text-primary hover:underline font-bold flex items-center gap-1.5">
                <span>View Patient Privacy Policy</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link to="/contact-us" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                <span>Contact Hospital Support</span>
              </Link>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
