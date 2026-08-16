import React from 'react';
import SEO from '../components/SEO';

export default function HealthPackagesPage() {
  const packages = [
    {
      name: "Basic Wellness Check",
      price: "₹1,499",
      icon: "monitor_heart",
      colorClass: "text-primary",
      bgClass: "bg-primary-container/20",
      borderClass: "border-outline-variant",
      desc: "Essential annual screening for young adults and regular monitoring.",
      features: [
        "Complete Blood Count (CBC)",
        "Fasting Blood Sugar (FBS)",
        "Lipid Profile (Basic)",
        "Liver Function Test (LFT)",
        "Kidney Function Test (KFT)",
        "Urine Routine Examination",
        "Physician Consultation"
      ]
    },
    {
      name: "Comprehensive Gold",
      price: "₹3,999",
      icon: "shield_person",
      colorClass: "text-[#f59e0b]",
      bgClass: "bg-[#f59e0b]/10",
      borderClass: "border-[#f59e0b]",
      popular: true,
      desc: "Advanced screening recommended for adults above 40 years of age.",
      features: [
        "Everything in Basic Wellness",
        "HbA1c (3-month average blood sugar)",
        "Thyroid Profile (T3, T4, TSH)",
        "ECG (Resting)",
        "Chest X-Ray (PA View)",
        "Ultrasound Whole Abdomen",
        "Cardiology & Dental Consultation"
      ]
    },
    {
      name: "Cardiac Platinum Care",
      price: "₹7,499",
      icon: "cardiology",
      colorClass: "text-error",
      bgClass: "bg-error-container/30",
      borderClass: "border-error",
      desc: "Premium executive package focused on cardiovascular and full-body health.",
      features: [
        "Everything in Comprehensive Gold",
        "2D Echocardiography",
        "TMT (Treadmill Test)",
        "Pulmonary Function Test (PFT)",
        "Vitamin D & B12 Levels",
        "Cancer Markers (PSA / PAP Smear)",
        "Dietitian & Senior Consultant Review"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      <SEO title="Preventive Health Packages | Citizens Medical Centre" />
      
      {/* Header Banner */}
      <div className="bg-surface-container-lowest py-20 px-margin-mobile md:px-gutter text-center border-b border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-display-lg text-on-surface mb-4">Preventive Health Packages</h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Early detection saves lives. Choose from our specially curated health checkup packages at CMC Dhanbad.
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`relative bg-surface rounded-[24px] p-8 border-2 ${pkg.popular ? pkg.borderClass : 'border-outline-variant'} ${pkg.popular ? 'shadow-xl lg:-translate-y-4 z-10' : 'shadow-sm z-0'} transition-transform flex flex-col`}>
              
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f59e0b] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-headline-md text-xl text-on-surface mb-2">{pkg.name}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{pkg.desc}</p>
                </div>
                <div className={`p-3 rounded-2xl ${pkg.bgClass} shrink-0`}>
                  <span className={`material-symbols-outlined text-3xl ${pkg.colorClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>{pkg.icon}</span>
                </div>
              </div>

              <div className="text-display-lg text-on-surface mb-8 font-bold">
                {pkg.price}
              </div>

              <ul className="flex flex-col gap-3.5 mb-10 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant font-body-md">
                    <span className={`material-symbols-outlined text-[20px] ${pkg.colorClass} mt-0.5`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3.5 rounded-full font-label-bold flex items-center justify-center gap-2 transition-colors ${pkg.popular ? 'bg-[#f59e0b] text-white hover:bg-[#d97706] shadow-md' : 'border border-primary text-primary hover:bg-primary hover:text-on-primary'}`}
                              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span> Book This Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
