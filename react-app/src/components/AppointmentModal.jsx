import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { departmentsData } from "../data/departments";

export default function AppointmentModal({ 
  isOpen, 
  onClose, 
  defaultDepartment = "", 
  defaultDoctor = "" 
}) {
  const [form, setForm] = useState({
    name: "", 
    phone: "", 
    email: "", 
    department: defaultDepartment, 
    message: defaultDoctor ? `Consultation with ${defaultDoctor}` : ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync form when default props change or modal opens
  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({
        ...prev,
        department: defaultDepartment || prev.department,
        message: defaultDoctor ? `Consultation with ${defaultDoctor}` : prev.message
      }));
    }
  }, [isOpen, defaultDepartment, defaultDoctor]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay for UX, then trigger mailto
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      const subject = `Appointment Request: ${form.name}${defaultDoctor ? ` (${defaultDoctor})` : ''}`;
      const body = `Name: ${form.name}%0D%0APhone: ${form.phone}%0D%0AEmail: ${form.email || 'N/A'}%0D%0ADepartment: ${form.department}${defaultDoctor ? `%0D%0ADoctor: ${defaultDoctor}` : ''}%0D%0A%0D%0ASymptoms/Message:%0D%0A${form.message || 'None'}`;
      window.open(`mailto:info@cmcdhanbad.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
      
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setForm({ name: "", phone: "", email: "", department: "", message: "" });
      }, 3500);
    }, 800);
  };

  const modalContent = (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      style={{ margin: 0 }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-surface w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-5 flex justify-between items-center relative overflow-hidden shrink-0">
          <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/10 pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
              Book an Appointment
            </h3>
            {defaultDoctor ? (
              <p className="text-white/90 text-xs mt-0.5 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">person</span>
                Consulting: <span className="font-bold underline decoration-white/40">{defaultDoctor}</span>
              </p>
            ) : (
              <p className="text-white/80 text-xs mt-0.5">Our front desk will confirm your slot via phone.</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="relative z-10 text-white/80 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition-all cursor-pointer"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface">Request Received!</h4>
              <p className="text-on-surface-variant text-sm max-w-xs">
                Thank you, <strong className="text-on-surface">{form.name}</strong>. We'll call you on{" "}
                <strong className="text-primary">{form.phone}</strong> to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[15px]">person</span>
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={form.name}
                  onChange={set("name")}
                  placeholder="e.g. Rahul Sharma"
                  className="form-input w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring focus:ring-secondary/20 text-on-surface text-sm"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[15px]">phone</span>
                  Phone Number <span className="text-error">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="e.g. 9876543210"
                  className="form-input w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring focus:ring-secondary/20 text-on-surface text-sm"
                />
              </div>

              {/* Email (optional) */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[15px]">mail</span>
                  Email Address <span className="text-on-surface-variant font-normal text-xs">(optional)</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="rahul@example.com"
                  className="form-input w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring focus:ring-secondary/20 text-on-surface text-sm"
                />
              </div>

              {/* Department */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[15px]">stethoscope</span>
                  Department / Specialty <span className="text-error">*</span>
                </label>
                <select
                  required
                  value={form.department}
                  onChange={set("department")}
                  className="form-select w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring focus:ring-secondary/20 text-on-surface text-sm"
                >
                  <option value="">Select a department...</option>
                  {departmentsData.map((d) => (
                    <option key={d.slug} value={d.slug}>{d.title}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[15px]">description</span>
                  Message / Symptoms <span className="text-on-surface-variant font-normal text-xs">(optional)</span>
                </label>
                <textarea
                  rows="3"
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Briefly describe your query or symptoms..."
                  className="form-textarea w-full rounded-lg border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring focus:ring-secondary/20 text-on-surface text-sm resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl border border-outline-variant text-on-surface-variant font-bold text-sm hover:bg-surface-variant transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90 shadow-md"}`}
                >
                  {loading ? (
                    <><span className="material-symbols-outlined animate-spin text-[16px]">progress_activity</span> Sending...</>
                  ) : (
                    <>Confirm Request</>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
