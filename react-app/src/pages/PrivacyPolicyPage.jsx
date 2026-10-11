import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: '1. Overview & Commitment', icon: 'shield' },
    { id: 'collection', title: '2. Information We Collect', icon: 'folder_shared' },
    { id: 'use', title: '3. How We Use Health Data', icon: 'medical_information' },
    { id: 'sharing', title: '4. Data Disclosure & Sharing', icon: 'share_reviews' },
    { id: 'security', title: '5. Security & Confidentiality', icon: 'lock' },
    { id: 'rights', title: '6. Patient Data Rights', icon: 'verified_user' },
    { id: 'retention', title: '7. Medical Records Retention', icon: 'inventory' },
    { id: 'cookies', title: '8. Cookies & Digital Tracking', icon: 'cookie' },
    { id: 'contact', title: '9. Grievance Officer & Contact', icon: 'support_agent' },
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
        title="Privacy Policy | Citizens Medical Centre Dhanbad" 
        description="Learn how Citizens Medical Centre (CMC Dhanbad) protects your medical records, personal information, and patient health data in compliance with Indian healthcare standards."
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
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            Patient Data Protection & Privacy
          </span>
          <h1 className="text-display-lg md:text-5xl text-white mb-4 drop-shadow-sm font-bold">Privacy Policy</h1>
          <p className="text-white/85 text-body-lg max-w-2xl mx-auto leading-relaxed">
            Our steadfast commitment to protecting your personal health information, medical records, and digital privacy at Citizens Medical Centre.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/70">
            <span>Last Updated: January 2026</span>
            <span>•</span>
            <span>Compliant with DPDP Act & EHR Standards</span>
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

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/10 text-xs">
              <p className="font-bold text-on-surface mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-primary">phone_in_talk</span>
                Have privacy concerns?
              </p>
              <p className="text-on-surface-variant text-[11px] leading-relaxed mb-3">
                Reach our hospital grievance desk directly.
              </p>
              <a 
                href="tel:+918235540809" 
                className="inline-flex items-center gap-1.5 text-primary font-bold hover:underline"
              >
                +91 8235540809
              </a>
            </div>
          </aside>

          {/* Policy Text Content */}
          <main className="flex flex-col gap-10 bg-white border border-outline-variant/60 rounded-3xl p-6 md:p-12 shadow-sm text-on-surface">
            
            {/* Quick Summary Alert */}
            <div className="p-5 md:p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">shield</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-primary mb-1">Our Privacy Pledge to Every Patient</h4>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Citizens Medical Centre (CMC Dhanbad) respects your absolute right to clinical confidentiality. 
                  We never sell, rent, or trade your personal or health data. Every diagnostic report, consultation note, 
                  and medical history document is protected under stringent security controls in accordance with the 
                  Digital Personal Data Protection (DPDP) Act, 2023, and Indian National Electronic Health Record (EHR) standards.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <section id="overview" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">01</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Overview & Scope of Policy</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>
                    Citizens Medical Centre ("CMC Dhanbad", "Hospital", "we", "us", or "our") operates the multi-specialty healthcare facility located at Binod Bihari Chowk, Dhanbad, Jharkhand 828130, along with our official web portal and patient services platforms.
                  </p>
                  <p>
                    This Privacy Policy applies to all patients, visitors, guardians, and users of our digital platforms. It governs how we collect, process, record, store, transfer, and protect your <strong>Personal Identifiable Information (PII)</strong> and <strong>Sensitive Personal Data or Information (SPDI)</strong>, including clinical health records, diagnostic files, and billing information.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 2 */}
            <section id="collection" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">02</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Information We Collect</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-4 pt-2">
                  <p>To provide accurate clinical care, outpatient consultations, in-patient hospitalisation, and emergency interventions, we may collect the following categories of information:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl border border-outline-variant/60 bg-surface/50">
                      <h4 className="font-bold text-sm text-primary mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">badge</span>
                        Demographic & Contact Details
                      </h4>
                      <ul className="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
                        <li>Full name, gender, date of birth, age</li>
                        <li>Residential address, district, state, PIN code</li>
                        <li>Contact telephone numbers, WhatsApp, email address</li>
                        <li>Emergency contact / next-of-kin details</li>
                        <li>Government ID copies (Aadhaar, Voter ID) where required</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-outline-variant/60 bg-surface/50">
                      <h4 className="font-bold text-sm text-primary mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">vital_signs</span>
                        Clinical & Medical History
                      </h4>
                      <ul className="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
                        <li>Presenting health symptoms, diagnosis, physician notes</li>
                        <li>Diagnostic laboratory and pathology test results</li>
                        <li>Radiology scans (X-ray, CT, MRI, Ultrasound)</li>
                        <li>Prescription history, medication allergies, prior surgeries</li>
                        <li>Discharge summaries and surgical reports</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-outline-variant/60 bg-surface/50">
                      <h4 className="font-bold text-sm text-primary mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">payments</span>
                        Billing & Insurance Data
                      </h4>
                      <ul className="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
                        <li>Health insurance policy provider and card details</li>
                        <li>TPA (Third Party Administrator) claim authorization papers</li>
                        <li>Government health schemes (e.g. Ayushman Bharat / PMJAY)</li>
                        <li>Payment transaction receipts and billing records</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-outline-variant/60 bg-surface/50">
                      <h4 className="font-bold text-sm text-primary mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">devices</span>
                        Digital Portal & Online Queries
                      </h4>
                      <ul className="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
                        <li>Online appointment booking form entries</li>
                        <li>Website feedback, contact inquiries, service requests</li>
                        <li>Technical IP address, device type, browser telemetry</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 3 */}
            <section id="use" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">03</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">How We Use Your Health Data</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>Your health data and personal records are utilized strictly for legitimate medical and administrative purposes:</p>
                  <ul className="space-y-2 list-none text-xs md:text-sm">
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">check_circle</span>
                      <span><strong>Direct Clinical Diagnosis & Care:</strong> Facilitating doctor consultations, treatment plans, surgical procedures, nursing care, and emergency management.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">check_circle</span>
                      <span><strong>Pharmacy & Medication Management:</strong> Dispensing authentic prescribed medicines, verifying dosages, and avoiding drug contraindications.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">check_circle</span>
                      <span><strong>Insurance & Cashless Hospitalization:</strong> Transmitting medical claims, diagnostic reports, and discharge summaries to approved insurance companies/TPAs for cashless claim settlement.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">check_circle</span>
                      <span><strong>Patient Communication:</strong> Sending critical appointment confirmations, doctor rescheduling alerts, vaccination reminders, and lab report availability notices via SMS or phone.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">check_circle</span>
                      <span><strong>Mandatory Statutory Reporting:</strong> Fulfilling mandatory reporting required under Indian law (e.g., notifiable infectious diseases to public health authorities, medico-legal cases to designated judicial officers).</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 4 */}
            <section id="sharing" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">04</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Data Disclosure & Sharing</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>Citizens Medical Centre maintains an unequivocal stance against commercial selling or unauthorized dissemination of patient records. We share your data solely under these authorized conditions:</p>
                  
                  <div className="p-4 rounded-xl bg-surface/80 border border-outline-variant/60 text-xs md:text-sm space-y-2">
                    <p><strong>• Multi-Disciplinary Treating Team:</strong> Consulting physicians, surgeons, duty medical officers, nurses, radiologists, and pathologists involved directly in your treatment.</p>
                    <p><strong>• Accredited Diagnostic Labs & Specialized Centers:</strong> If specialized clinical investigations or sample testing need to be outsourced for your diagnosis.</p>
                    <p><strong>• Health Insurance Providers & TPAs:</strong> Solely with your express authorization to enable cashless processing and claim reimbursement.</p>
                    <p><strong>• Statutory & Legal Mandate:</strong> In compliance with summons, court orders, or statutory public health notifications issued by government health authorities.</p>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 5 */}
            <section id="security" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">05</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Security & Confidentiality Safeguards</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>
                    We employ modern technological, administrative, and physical controls to shield your sensitive medical data from unauthorized access, accidental alteration, or loss:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-center">
                      <span className="material-symbols-outlined text-primary text-2xl mb-1">lock</span>
                      <h5 className="font-bold text-xs text-on-surface">Data Encryption</h5>
                      <p className="text-[11px] text-on-surface-variant mt-1">Encrypted transmission (SSL/TLS) and secure database storage.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-center">
                      <span className="material-symbols-outlined text-primary text-2xl mb-1">badge</span>
                      <h5 className="font-bold text-xs text-on-surface">Role-Based Access</h5>
                      <p className="text-[11px] text-on-surface-variant mt-1">Access restricted on a strict "need-to-know" clinical basis.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-center">
                      <span className="material-symbols-outlined text-primary text-2xl mb-1">history</span>
                      <h5 className="font-bold text-xs text-on-surface">Audit Trails</h5>
                      <p className="text-[11px] text-on-surface-variant mt-1">Continuous logging and monitoring of medical record views.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 6 */}
            <section id="rights" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">06</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Patient Rights & Access</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>As a patient of Citizens Medical Centre, you are entitled to key rights regarding your medical records:</p>
                  <ul className="space-y-2 list-disc list-inside text-xs md:text-sm text-on-surface-variant">
                    <li><strong>Right to Copies of Records:</strong> You or your authorized representative may request copies of discharge summaries, lab reports, and imaging files from our Medical Records Department (MRD).</li>
                    <li><strong>Right to Rectification:</strong> If your contact number, demographic information, or emergency contact is outdated, you can request an immediate update at our reception desk.</li>
                    <li><strong>Right to Clinical Explanation:</strong> You have the right to receive an understandable explanation of your diagnosis, proposed treatment alternatives, and expected outcomes from your attending doctor.</li>
                  </ul>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 7 */}
            <section id="retention" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">07</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Medical Records Retention</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>
                    In compliance with the regulations framed by the National Medical Commission (NMC), Clinical Establishments Act, and judicial guidelines in India, in-patient clinical records, surgery logs, and medico-legal documentation are retained in secure hospital archives for statutory retention periods (typically minimum 3 years for OPD records, and 5 to 10+ years for surgical and medico-legal files).
                  </p>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 8 */}
            <section id="cookies" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">08</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Cookies & Digital Telemetry</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-3 pt-2">
                  <p>
                    Our public website utilizes essential session cookies and non-identifiable web analytics to ensure fast load times, optimize site navigation, and monitor uptime. We do not use third-party invasive behavioral trackers to harvest patient health habits. You can modify your browser settings to decline cookies at any time.
                  </p>
                </div>
              </ScrollReveal>
            </section>

            <hr className="border-outline-variant/50" />

            {/* Section 9 */}
            <section id="contact" className="scroll-mt-32">
              <ScrollReveal direction="up" duration={0.6}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">09</span>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface">Grievance Officer & Contact Desk</h2>
                </div>
                <div className="text-sm md:text-base text-on-surface-variant leading-relaxed space-y-4 pt-2">
                  <p>
                    If you have questions regarding this Privacy Policy, wish to access your patient records, or need to raise a confidentiality concern, please contact our hospital administration:
                  </p>
                  
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#132847] text-white space-y-3 shadow-md">
                    <h4 className="font-bold text-base text-secondary">Patient Care & Privacy Cell</h4>
                    <p className="text-xs text-white/80"><strong>Hospital Name:</strong> Citizens Medical Centre (CMC Dhanbad)</p>
                    <p className="text-xs text-white/80"><strong>Address:</strong> Binod Bihari Chowk, CMC Hospital, below SBI Bank, Dhanbad, Jharkhand 828130</p>
                    <p className="text-xs text-white/80"><strong>24/7 Helpline:</strong> +91 8235540809</p>
                    <p className="text-xs text-white/80"><strong>Official Email:</strong> info@cmcdhanbad.com</p>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* Bottom Links */}
            <div className="pt-6 border-t border-outline-variant/60 flex flex-wrap items-center justify-between gap-4 text-xs">
              <Link to="/terms-and-conditions" className="text-primary hover:underline font-bold flex items-center gap-1.5">
                <span>View Terms & Conditions of Service</span>
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
